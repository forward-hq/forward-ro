'use client';
import { useEffect, useRef, useState } from 'react';

export default function ManifestoEn() {
    const [open, setOpen] = useState(false);
    useEffect(() => {
          const h = (e) => e.key === 'Escape' && setOpen(false);
          window.addEventListener('keydown', h);
          return () => window.removeEventListener('keydown', h);
    }, []);
    useEffect(() => {
          document.body.style.overflow = open ? 'hidden' : '';
          return () => { document.body.style.overflow = ''; };
    }, [open]);
    const boxRef = useRef(null);
    useEffect(() => {
          if (!open) return;
          const prev = document.activeElement;
          const box = boxRef.current;
          box?.querySelector('.mox')?.focus();
          const trap = (e) => {
                  if (e.key !== 'Tab') return;
                  const f = box.querySelectorAll('button, a');
                  const first = f[0];
                  const last = f[f.length - 1];
                  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
                  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
          };
          box?.addEventListener('keydown', trap);
          return () => { box?.removeEventListener('keydown', trap); prev?.focus?.(); };
    }, [open]);

  return (
        <>
          <div className="ck">
            <span className="num">01</span>
          <button type="button" className="t tbtn" onClick={() => setOpen(true)}>
          Manifesto — read it in full →
            </button>
            </div>
      <p>
                    For our artists, music is <b>their life&apos;s work.</b> Our job is{' '}
        <span className="it">the rest:</span> the stage, the contracts, the
        road — done so well you never notice.
          </p>
      <div className="sig">— Forward, since 2014</div>

{open && (
          <div className="mo" onClick={() => setOpen(false)} role="dialog" aria-modal="true">
            <article className="mobox" ref={boxRef} onClick={(e) => e.stopPropagation()}>
            <button type="button" className="mox" aria-label="Close the manifesto" onClick={() => setOpen(false)}>close ×</button>
            <div className="mokick">Manifesto · Forward, since 2014</div>
            <h3>The rest.</h3>
            <p>
                For an artist, music is not a project. It is a life&apos;s work —
              thousands of unseen hours, deleted demos, rewritten lyrics, long
              roads between cities where nobody applauds. On stage you only see
              the tip. The rest is built in silence.
                </p>
            <p>
                              Forward exists for that rest. Since 2014 we have done the job
              that gets no applause: the right stage at the right moment,
                              contracts read to the last letter, the route planned, the fee
              negotiated, the soundcheck protected. Hundreds of contracts every
              year — and on each of them, a person&apos;s name.
                </p>
            <p>
                              We believe a few simple things. That representation is a
              long-distance profession, not a hunt for commissions. That a
              &quot;no&quot; said in time is worth more than ten convenient
              &quot;yeses&quot;. That the artist should walk on stage with a
              clear head, because everything underneath has already been taken
              care of.
                </p>
            <p>
                              That is why we have no contact forms and no slogans. We have
              people with names and email addresses, who answer. 57 voices have
              trusted us with their stage or their career — and that trust is
              earned at every concert, not once, at signing.
                </p>
            <p>
                              Work done well is invisible. You hear it — on every night when
              everything sounds exactly as it should, and the only one left in
                              the memory is the artist. That is what our job looks like when it
              is done right: <b>invisible. Always forward.</b>
                </p>
                </article>
                </div>
      )}
</>
  );
}
