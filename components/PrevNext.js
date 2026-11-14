'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PrevNext({ base, label, def, mg, ctxLabel }) {
  const [st, setSt] = useState({ p: def.p, x: def.x, qs: '', on: false });
  useEffect(() => {
    try {
      const sp = new URLSearchParams(window.location.search);
      if (mg && sp.get('din') === 'management') {
        setSt({ p: mg.p, x: mg.x, qs: '?din=management', on: true });
      }
    } catch (e) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <nav className="pn" aria-label={label}>
    <Link href={`${base}${st.p.s}/${st.qs}`}>← {st.p.n}</Link>
{st.on && <span className="pnctx">{ctxLabel}</span>}
 <Link href={`${base}${st.x.s}/${st.qs}`}>{st.x.n} →</Link>
  </nav>
);
}
