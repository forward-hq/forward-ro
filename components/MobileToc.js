'use client';
import { useEffect, useState } from 'react';

export default function MobileToc() {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
          setItems(
                  [...document.querySelectorAll('.toc a.ch')].map((a) => {
                            const s = a.querySelectorAll('span');
                            return {
                                        href: a.getAttribute('href'),
                                        n: s[0]?.textContent || '',
                                        t: s[1]?.textContent || '',
                            };
                  })
                );
    }, []);
    useEffect(() => {
          const h = (e) => e.key === 'Escape' && setOpen(false);
          window.addEventListener('keydown', h);
          return () => window.removeEventListener('keydown', h);
    }, []);
    useEffect(() => {
          document.body.style.overflow = open ? 'hidden' : '';
          return () => { document.body.style.overflow = ''; };
    }, [open]);
    return (
          <>
            <button type="button" className="mtbtn" aria-expanded={open} onClick={() => setOpen(true)}>
        cuprins
          </button>
{open && (
          <div className="mto" onClick={() => setOpen(false)} role="dialog" aria-modal="true" aria-label="Cuprins">
            <nav className="mtbox" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="mox" aria-label="Închide cuprinsul" onClick={() => setOpen(false)}>
              închide ×
                </button>
{items.map((it) => (
                <a key={it.href} href={it.href} onClick={() => setOpen(false)}>
                  <span className="n">{it.n}</span>
                <span>{it.t}</span>
  </a>
            ))}
            <a className="mtmail" href="mailto:booking@forward.ro?subject=Cerere booking" onClick={() => setOpen(false)}>
              booking@forward.ro
                </a>
                </nav>
                </div>
      )}
</>
  );
}
