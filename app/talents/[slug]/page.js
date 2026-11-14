import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ROSTER, bySlug, agentsOf, managerOf, sorted } from '../../../lib/data';
import CopyBtn from '../../../components/CopyBtn';

export function generateStaticParams() {
    return ROSTER.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const a = bySlug(slug);
    if (!a) return {};
    return {
              title: `${a.name} — ${a.management ? 'Booking & Management' : 'Booking'}`,
          description: `Booking ${a.name} prin Forward — scrie-i direct agentului și primești răspuns în următoarea zi lucrătoare. ${a.cat} · Roster Forward.`,
              alternates: {
                        canonical: `https://forward.ro/talents/${a.slug}/`,
                  languages: {
                      ro: `https://forward.ro/talents/${a.slug}/`,
                      en: `https://forward.ro/en/talents/${a.slug}/`,
                  },
              },
    };
}

export default async function ArtistPage({ params }) {
    const { slug } = await params;
    const a = bySlug(slug);
    if (!a) notFound();
    const agents = agentsOf(a);
    const mgr = managerOf(a);
      const idx = sorted.findIndex((x) => x.slug === a.slug);
    const prev = sorted[(idx - 1 + sorted.length) % sorted.length];
    const next = sorted[(idx + 1) % sorted.length];

  const ld = {
        '@context': 'https://schema.org',
        '@type': 'MusicGroup',
        name: a.name,
        genre: a.cat,
        url: `https://forward.ro/talents/${a.slug}/`,
        memberOf: { '@type': 'Organization', name: 'Forward Music Agency', url: 'https://forward.ro' },
  };

  return (
        <>
          <nav className="anav">
            <Link className="back" href="/#c2">← toți artiștii</Link>
          <Link className="logo" href="/">Forward<i>.</i></Link>
                    <a className="back" href="mailto:booking@forward.ro?subject=Cerere booking">booking@forward.ro</a>
    </nav>
        <article className="apage">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <div className="kick">
          <Link href={`/?cat=${encodeURIComponent(a.cat)}#c2`}>{a.cat}</Link>
{' · '}
          <Link href="/#c2">Roster Forward</Link>
{a.epicenter && (
                <>
{' · '}
                  <Link href="/?cat=epi#c2">Forward × Epicenter</Link>
    </>
              )}
{' · '}
<Link href={`/en/talents/${a.slug}/`}>EN</Link>
</div>
        <h1>{a.name}</h1>
        <div className="badges">
{a.management && <span className="mgtag">management{a.management.scope ? ` (${a.management.scope})` : ''}</span>}
{a.epicenter && <span className="mgtag">× epicenter</span>}
  </div>

 {a.photo && (
       <figure className="aphoto">
         <img src={a.photo} alt={a.name} />
    </figure>
)}

 {a.bio ? (
             <p className="bio">{a.bio}</p>
           ) : (
             <p className="bio">
 {a.management
                ? `Artist în management Forward — ${mgr.name}: strategie, lansări, imagine și booking, un singur partener pentru toată cariera.`
                 : a.epicenter
                  ? 'Reprezentat împreună cu Epicenter Hub, divizia rock & alternative a familiei Forward.'
                   : `Reprezentat de Forward — booking pentru concerte, festivaluri și evenimente private.`}
 </p>
         )}

        <h2 className="sec">Booking — scrie-i direct</h2>
        <div className="agents">
        {agents.map((g) => (
                      <div className="agent" key={g.email}>
              <b>{g.name}</b>
                            <span>
        {g.email}
            <CopyBtn text={g.email} />
            </span>
              <a href={`mailto:${g.email}?subject=Booking ${a.name}`}>scrie-i →</a>
          </div>
          ))}
            </div>
        <p className="sla">Răspundem în următoarea zi lucrătoare.</p>

{(a.socials?.instagram || a.socials?.youtube || a.socials?.spotify || a.socials?.facebook || a.socials?.tiktok || a.socials?.web) && (
            <>
              <h2 className="sec">Ascultă & urmărește</h2>
             <div className="soc">
{a.socials.instagram && <a href={a.socials.instagram} target="_blank" rel="noopener">instagram</a>}
{a.socials.youtube && <a href={a.socials.youtube} target="_blank" rel="noopener">youtube</a>}
{a.socials.spotify && <a href={a.socials.spotify} target="_blank" rel="noopener">spotify</a>}
{a.socials.facebook && <a href={a.socials.facebook} target="_blank" rel="noopener">facebook</a>}
{a.socials.tiktok && <a href={a.socials.tiktok} target="_blank" rel="noopener">tiktok</a>}
{a.socials.web && <a href={a.socials.web} target="_blank" rel="noopener">website</a>}
  </div>
  </>
        )}

{a.videos?.length > 0 && (
            <>
              <h2 className="sec">Live & video</h2>
             <div className="vids">
{a.videos.slice(0, 3).map((v) => {
                  const id = v.split('v=')[1]?.split('&')[0];
                  return id ? (
                                      <iframe
                                        key={id}
                      src={`https://www.youtube-nocookie.com/embed/${id}`}
                                              title={`${a.name} — video`}
                    loading="lazy"
                    allowFullScreen
                  />
                                      ) : null;
})}
  </div>
  </>
        )}
        <nav className="pn" aria-label="Alt artist din monografie">
                      <Link href={`/talents/${prev.slug}/`}>← {prev.name}</Link>
                      <Link href={`/talents/${next.slug}/`}>{next.name} →</Link>
            </nav>
            
        <div className="afoot">
                    <span>© {new Date().getFullYear()} Forward Music Agency SRL</span>
          <Link href="/#c2">tot rosterul →</Link>
          </div>
          </article>
          </>
  );
}
