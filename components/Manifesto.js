'use client';
import { useEffect, useRef, useState } from 'react';

export default function Manifesto() {
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
          Manifest — citește-l întreg →
        </button>
          </div>
          <p>
            Pentru artiștii noștri, muzica e <b>munca unei vieți.</b> Treaba
            noastră e <span className="it">restul:</span> scena, contractele,
            drumul făcute atât de bine încât să nu se vadă.
          </p>
          <div className="sig">— Forward, din 2014</div>

    {open && (
            <div className="mo" onClick={() => setOpen(false)} role="dialog" aria-modal="true">
                      <article className="mobox" ref={boxRef} onClick={(e) => e.stopPropagation()}>
                        <button type="button" className="mox" aria-label="Închide manifestul" onClick={() => setOpen(false)}>închide ×</button>
            <div className="mokick">Manifest · Forward, din 2014</div>
            <h3>Restul.</h3>
            <p>
              Pentru un artist, muzica nu e un proiect. E munca unei vieți —
              mii de ore nevăzute, demo-uri șterse, versuri rescrise, drumuri
              lungi între orașe în care nimeni nu aplaudă. Pe scenă se vede
              doar vârful. Restul se construiește în liniște.
            </p>
            <p>
              Forward există pentru restul ăsta. Din 2014 facem meseria care
              nu se aplaudă: scena potrivită la momentul potrivit, contractele
              citite până la ultima literă, drumul calculat, suma negociată,
              ora de sunet apărată. Sute de contracte în fiecare an — și pe
              fiecare dintre ele, numele unui om.
            </p>
            <p>
              Credem câteva lucruri simple. Că reprezentarea e o meserie de
              cursă lungă, nu o vânătoare de comisioane. Că un „nu" spus la
              timp valorează mai mult decât zece „da"-uri convenabile. Că
              artistul trebuie să urce pe scenă cu capul limpede, pentru că de
              tot ce e dedesubt ne-am ocupat deja.
            </p>
            <p>
              De-asta nu avem formulare de contact și nici sloganuri. Avem
              oameni cu nume și adresă de email, care răspund. 57 de voci
              ne-au încredințat scena sau cariera lor — iar încrederea asta se
              câștigă la fiecare concert, nu o singură dată, la semnare.
            </p>
            <p>
              Munca bine făcută nu se vede. Se aude — în fiecare seară în care
              totul sună exact cum trebuie, iar singurul care rămâne în
              amintire e artistul. Așa arată treaba noastră când e făcută
              bine: <b>invizibilă. Mereu înainte.</b>
            </p>
          </article>
        </div>
      )}
    </>
  );
}
