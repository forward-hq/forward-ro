'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CATS_EN, sorted } from '../lib/data';
import HoverPreview from './HoverPreview';

const norm = (s) =>
    s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export default function RosterIndexEn() {
    const [f, setF] = useState('all');
    const [q, setQ] = useState('');
    useEffect(() => {
          const c = new URLSearchParams(window.location.search).get('cat');
          if (c && CATS_EN.some((x) => x.key === c)) setF(c);
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
    {CATS_EN.map((c) => (
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
          placeholder="search the roster…"
          aria-label="Search the roster"
        />
          {q && (
                      <button type="button" onClick={() => setQ('')} aria-label="Clear search">
                        ×
            </button>
        )}
</div>
            <HoverPreview />
      <div className="rlist">
        {visible.map((a, i) => (
                    <Link className="rrow" key={a.slug} href={`/en/talents/${a.slug}/`} data-photo={a.photo || undefined} data-i={i}>
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
             No results for "{q}" in the roster.{' '}
            <a href={`mailto:booking@forward.ro?subject=Looking for an artist: ${q}`}>
            Ask us directly →
              </a>
              </div>
       )}
{f === 'epi' && (
          <div className="epinote">
            <b>Forward × Epicenter</b> — the rock &amp; alternative division.
           Artists marked "× epicenter" are represented together with{' '}
           <a href="https://www.epicenter-hub.com" target="_blank" rel="noopener">
                         Epicenter Hub
             </a>
           ; each artist&apos;s agents are on their page.
             </div>
       )}
</>
  );
}
