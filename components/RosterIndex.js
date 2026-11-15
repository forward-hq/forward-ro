'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CATS, sorted } from '../lib/data';
import HoverPreview from './HoverPreview';

const norm = (s) =>
      s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export default function RosterIndex() {
    const [f, setF] = useState('all');
      const [q, setQ] = useState('');
      useEffect(() => {
              const c = new URLSearchParams(window.location.search).get('cat');
              if (c && CATS.some((x) => x.key === c)) setF(c);
      }, []);
      const pick = (k) => {
              setF(k);
              try {
                        const u = new URL(window.location);
                        if (k === 'all') u.searchParams.delete('cat');
                        else u.searchParams.set('cat', k);
                        window.history.replaceState(null, '', u);
              } catch {}
      };
  const visible = sorted.filter(
        (a) =>
            (f === 'all' || a.cat === f || (f === 'epi' && a.epicenter)) &&
            (!q || norm(a.name).includes(norm(q)))
  );
  return (
    <>
      <div className="tabs">
{CATS.map((c) => (
          <button
            key={c.key}
            className={f === c.key ? 'on' : ''}
                        aria-pressed={f === c.key}
                onClick={() => pick(c.key)}
          >
{c.label}
          </button>
        ))}
      </div>
                <div className="rsearch">
                  <input
                    type="search"
                                  value={q}
                                                onChange={(e) => setQ(e.target.value)}
                                                              placeholder="caută în roster…"
                                                                            aria-label="Caută în roster"
                                                                                        />
                                                                            {q && (
                                                                                          <button type="button" onClick={() => setQ('')} aria-label="Șterge căutarea">
                                                                                            ×
                                                                                </button>
                                                                                        )}
                                                                                            </div>
                                                                                              <HoverPreview />
      <div className="rlist">
{visible.map((a, i) => (
          <Link className="rrow" key={a.slug} href={`/talents/${a.slug}/`} data-photo={a.photo || undefined} data-i={i}>
            <span className="ix">{String(i + 1).padStart(2, '0')}</span>
            <span className="nm">
{a.name}
{a.management && <span className="mgtag">management</span>}
{a.epicenter && <span className="mgtag">× epicenter</span>}
            </span>
            <span className="gn">{a.cat}</span>
          </Link>
        ))}
      </div>
 {visible.length === 0 && (
             <div className="rempty">
               Niciun rezultat pentru „{q}" în roster.{' '}
               <a href={`mailto:booking@forward.ro?subject=Căutam un artist: ${q}`}>
             Întreabă-ne direct →
                 </a>
                 </div>
       )}
{f === 'epi' && (
        <div className="epinote">
          <b>Forward × Epicenter</b> — divizia rock & alternative. Artiștii
          marcați „× epicenter" sunt reprezentați împreună cu{' '}
          <a href="https://www.epicenter-hub.com" target="_blank" rel="noopener">
            Epicenter Hub
          </a>
          ; agenții fiecărui artist sunt pe pagina lui.
        </div>
      )}
    </>
  );
}
