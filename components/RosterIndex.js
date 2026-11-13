'use client';
import { useState } from 'react';
import Link from 'next/link';
import { CATS, sorted } from '../lib/data';

export default function RosterIndex() {
    const [f, setF] = useState('all');
  const visible = sorted.filter(
    (a) => f === 'all' || a.cat === f || (f === 'epi' && a.epicenter)
  );
  return (
    <>
      <div className="tabs">
{CATS.map((c) => (
          <button
            key={c.key}
            className={f === c.key ? 'on' : ''}
            onClick={() => setF(c.key)}
          >
{c.label}
          </button>
        ))}
      </div>
      <div className="rlist">
{visible.map((a, i) => (
          <Link className="rrow" key={a.slug} href={`/talents/${a.slug}/`}>
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
