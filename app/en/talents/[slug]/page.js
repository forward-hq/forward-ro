import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ROSTER, bySlug, agentsOf, managerOf, sorted } from '../../../../lib/data';
import CopyBtn from '../../../../components/CopyBtn';
import SetLang from '../../../../components/SetLang';

export function generateStaticParams() {
    return ROSTER.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const a = bySlug(slug);
    if (!a) return {};
    return {
          title: `${a.name} — ${a.management ? 'Booking & Management' : 'Booking'}`,
          description: `Book ${a.name} through Forward — write directly to the agent and get a reply by the next business day. ${a.cat} · Forward roster.`,
          alternates: {
                  canonical: `https://forward.ro/en/talents/${a.slug}/`,
                  languages: {
                            ro: `https://forward.ro/talents/${a.slug}/`,
                            en: `https://forward.ro/en/talents/${a.slug}/`,
                  },
          },
    };
}

export default async function ArtistPageEn({ params }) {
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
        url: `https://forward.ro/en/talents/${a.slug}/`,
        memberOf: { '@type': 'Organization', name: 'Forward Music Agency', url: 'https://forward.ro' },
  };

  return (
        <>
          <SetLang lang="en" />
          <nav className="anav">
            <Link className="back" href="/en/#c2">← all artists</Link>
          <Link className="logo" href="/en/">Forward<i>.</i></Link>
            <a className="back" href="mailto:booking@forward.ro?subject=Booking inquiry">booking@forward.ro</a>
    </nav>
        <article className="apage">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <div className="kick">
            <Link href={`/en/?cat=${encodeURIComponent(a.cat)}#c2`}>{a.cat}</Link>
{' · '}
          <Link href="/en/#c2">Forward roster</Link>
{a.epicenter && (
              <>
{' · '}
               <Link href="/en/?cat=epi#c2">Forward × Epicenter</Link>
  </>
           )}
          <span className="lsw2" aria-label="Limbă / Language">
              <Link href={`/talents/${a.slug}/`}>RO</Link>
              <span className="on">EN</span>
              </span>
            </div>
        <h1>{a.name}</h1>
        <div className="badges">
          {a.management && <span className="mgtag">management{a.management.scope ? ` (${a.management.scope === 'România' ? 'Romania' : a.management.scope})` : ''}</span>}
{a.epicenter && <span className="mgtag">× epicenter</span>}
  </div>

 {a.photo && (
             <figure className="aphoto">
               <img src={a.photo} alt={a.name} />
  </figure>
        )}

{a.bioEn ? (
            <p className="bio">{a.bioEn}</p>
          ) : (
            <p className="bio">
{a.management
               ? `An artist under Forward management — ${mgr.name}: strategy, releases, image and booking, one partner for the whole career.`
                : a.epicenter
                 ? 'Represented together with Epicenter Hub, the rock & alternative division of the Forward family.'
                  : `Represented by Forward — booking for concerts, festivals and private events.`}
</p>
        )}

        <h2 className="sec">Booking — write directly</h2>
        <div className="agents">
        {agents.map((g) => (
                      <div className="agent" key={g.email}>
              <b>{g.name}</b>
              <span>
        {g.email}
                <CopyBtn text={g.email} label="copy" done="copied ✓" />
          </span>
              <a href={`mailto:${g.email}?subject=Booking ${a.name}`}>write →</a>
          </div>
          ))}
            </div>
        <p className="sla">We reply by the next business day.</p>

{(a.socials?.instagram || a.socials?.youtube || a.socials?.spotify || a.socials?.facebook || a.socials?.tiktok || a.socials?.web) && (
            <>
              <h2 className="sec">Listen &amp; follow</h2>
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
              <h2 className="sec">Live &amp; video</h2>
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

        <nav className="pn" aria-label="Another artist from the monograph">
                    <Link href={`/en/talents/${prev.slug}/`}>← {prev.name}</Link>
          <Link href={`/en/talents/${next.slug}/`}>{next.name} →</Link>
          </nav>

        <div className="afoot">
                    <span>© {new Date().getFullYear()} Forward Music Agency SRL</span>
          <Link href="/en/#c2">full roster →</Link>
          </div>
          </article>
          </>
  );
}
