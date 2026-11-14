import Link from 'next/link';
import RosterIndex from '../components/RosterIndex';
import { managed, managerOf } from '../lib/data';

export default function Home() {
  return (
    <>
      <aside className="toc">
        <div className="logo">
          Forward<i>.</i>
        </div>
                <div className="sub">Agenție de talente</div>
        <div className="lbl">Cuprins</div>
        <a className="ch" href="#c1"><span className="n">01</span><span>Manifest</span></a>
        <a className="ch" href="#c2"><span className="n">02</span><span>Artiștii</span></a>
        <a className="ch" href="#c3"><span className="n">03</span><span>Management</span></a>
        <a className="ch" href="#c4"><span className="n">04</span><span>Cronologia</span></a>
        <a className="ch" href="#c5"><span className="n">05</span><span>Echipa</span></a>
        <a className="ch" href="#c6"><span className="n">06</span><span>Familia Forward</span></a>
        <a className="ch" href="#c7"><span className="n">07</span><span>Contact</span></a>
        <div className="foot">
          București · fondată 2014
          <br />
          <a href="mailto:booking@forward.ro">booking@forward.ro</a>
        </div>
      </aside>

      <div className="mnav">
        <span className="logo">Forward<i>.</i></span>
        <a className="m" href="#c2">artiștii</a>
        <a className="m" href="mailto:booking@forward.ro">booking@forward.ro</a>
      </div>

      <main>
        <section className="cover">
          <div className="edition">Monografie de agenție · ediția a XII-a</div>
          <h1>
            Forward<i>.</i>
            <br />
            <span className="it">57 de voci,</span>
            <br />
            un singur nume.
          </h1>
          <div className="base">
            <p>
                            Agenție de talente din București. <b>57 de talente pe roster</b> —
                            50 reprezentate direct și 7 împreună cu Epicenter — booking și
              management, evenimente și label, din 2014 până azi, fără
              întrerupere.
            </p>
            <div className="yrs sf">2014 —</div>
          </div>
        </section>

        <section className="chapter mani" id="c1">
          <div className="ck"><span className="num">01</span><span className="t">Manifest</span></div>
          <p>
            Pentru artiștii noștri, muzica e <b>munca unei vieți.</b> Treaba
            noastră e <span className="it">restul:</span> scena, contractele,
            drumul — făcute atât de bine încât să nu se vadă.
          </p>
          <div className="sig">— Forward, din 2014</div>
        </section>

        <section className="chapter" id="c2">
          <div className="ck"><span className="num">02</span><span className="t">Artiștii — de la A la Z</span></div>
          <RosterIndex />
          <div className="door">
            <b>Ești artist?</b> Lista asta crește. Trimite-ne muzica ta:{' '}
            <a href="mailto:demo@forward.ro">demo@forward.ro</a> — ascultăm tot
            ce primim și răspundem la ce ne mișcă.
          </div>
        </section>

        <section className="chapter" id="c3">
          <div className="ck"><span className="num">03</span><span className="t">Management — carieră, nu doar concerte</span></div>
          <p className="mexp">
            Pentru nouă artiști, Forward face <b>totul</b>: strategie, lansări,
            imagine, parteneriate, drumul întreg al carierei — nu doar scena. E
            cea mai apropiată formă de lucru pe care o avem cu un artist, și
            cea mai rară.
          </p>
          <div className="mgrid">
            {managed.map((a) => (
              <Link className="mcard" key={a.slug} href={`/talents/${a.slug}/`}>
                <div className="mn sf">{a.name}</div>
                <span className="ml">
                  Management{a.management.scope ? ` (${a.management.scope})` : ''}:{' '}
                  {managerOf(a).name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="chapter" id="c4">
          <div className="ck"><span className="num">04</span><span className="t">Cronologia</span></div>
          <div className="tl">
            {/* DRAFT — reperele finale le validează Forward înainte de lansare */}
            <div className="te"><span className="y">2014</span><p><b>Se înființează Forward</b>, la București, cu primii artiști în roster și o convingere simplă: reprezentarea e o meserie de cursă lungă.</p></div>
            <div className="te"><span className="y">2016</span><p>Rosterul trece de <b>20 de artiști</b>; agenția devine prezență constantă în cluburile și festivalurile din țară.</p></div>
            <div className="te"><span className="y">2019</span><p>Se conturează diviziile: booking, evenimente și primele proiecte de <b>management complet</b>.</p></div>
            <div className="te"><span className="y">2021</span><p>Parteneriate strategice în industrie; agenția depășește <b>500 de contracte pe an</b>.</p></div>
            <div className="te"><span className="y">2024</span><p>Se lansează divizia <b>rock &amp; alternative</b>, împreună cu Epicenter, și crește divizia de management.</p></div>
            <div className="te"><span className="y">2026</span><p><b>57 de artiști pe roster, 880+ contracte pe an</b>, cinci categorii muzicale și divizia de management. Una dintre cele mai mari agenții de artiști din România, după volum.</p></div>
          </div>
        </section>

        <section className="chapter" id="c5">
          <div className="ck"><span className="num">05</span><span className="t">Echipa — acces direct</span></div>
          <div className="tgrid">
            <div className="tp"><b>Cristi Ochiu</b><span>Fondator · Agent · Management</span><a href="mailto:cristi@forward.ro">cristi@forward.ro</a></div>
            <div className="tp"><b>Bogdan Niță</b><span>Asociat · Agent · Management</span><a href="mailto:bogdan@forward.ro">bogdan@forward.ro</a></div>
            <div className="tp"><b>Valeria Vdovii</b><span>Agent · Booking</span><a href="mailto:valeria@forward.ro">valeria@forward.ro</a></div>
            <div className="tp"><b>Andrei Unguru</b><span>Agent · Booking</span><a href="mailto:andrei@forward.ro">andrei@forward.ro</a></div>
            <div className="tp"><b>Mădălin Mavriche</b><span>Agent · Booking</span><a href="mailto:madalin@forward.ro">madalin@forward.ro</a></div>
            <div className="tp"><b>Giulia</b><span>Legal</span><a href="mailto:giulia@forward.ro">giulia@forward.ro</a></div>
          </div>
          <p className="tnote">
            Fără formulare de contact. Scrii direct omului care se ocupă — iar
            dacă nu știi cui, <a href="mailto:booking@forward.ro">booking@forward.ro</a>{' '}
            ajunge la agentul potrivit, cu răspuns în următoarea zi lucrătoare.
          </p>
          <div className="door">
            <b>Vrei să lucrezi la Forward?</b> Nu ținem anunțuri deschise
            permanent — când căutăm pe cineva, anunțăm aici. Dar citim tot ce
            primim, oricând: <a href="mailto:cariere@forward.ro">cariere@forward.ro</a>.
          </div>
        </section>

        <section className="chapter" id="c6">
          <div className="ck"><span className="num">06</span><span className="t">Familia Forward</span></div>
          <p className="mexp">
                        Forward e mai mult decât agenția de talente. Un nume, patru
                        teritorii — muzică, evenimente, rock &amp; alternative, sport —
                          fiecare cu echipa lui.
          </p>
          <div className="fgrid">
            <a className="fcard" href="https://www.urban-events.ro" target="_blank" rel="noopener">
              <b>Urban Events<i>.</i></b>
                            <span>Agenția de entertainment pentru nunți, petreceri private și evenimente corporate — artiști, DJ și producție completă.</span>
              <span className="go">urban-events.ro →</span>
            </a>
            <a className="fcard" href="https://www.epicenter-hub.com" target="_blank" rel="noopener">
              <b>Epicenter Hub<i>.</i></b>
                            <span>Divizia rock &amp; alternative, în co-reprezentare „Forward × Epicenter" — scena grea, cu roster și agenți proprii.</span>
              <span className="go">epicenter-hub.com →</span>
            </a>
            <a className="fcard" href="https://forwardsports.ro" target="_blank" rel="noopener">
              <b>Forward Sports<i>.</i></b>
                            <span>Agenția de fotbal, licențiată FIFA — reprezentare și management de carieră pentru jucători din Liga 1 și din străinătate.</span>
              <span className="go">forwardsports.ro →</span>
            </a>
          </div>
        </section>

        <section className="chapter colo" id="c7">
          <div className="ck"><span className="num">07</span><span className="t">Contact &amp; colofon</span></div>
          <div className="big">FWD<i>.</i></div>
          <div className="rows">
            <div className="cr"><span className="l">Booking</span><span><a href="mailto:booking@forward.ro">booking@forward.ro</a></span></div>
            <div className="cr"><span className="l">Informații</span><span><a href="mailto:contact@forward.ro">contact@forward.ro</a></span></div>
            <div className="cr"><span className="l">Financiar</span><span><a href="mailto:financiar@forward.ro">financiar@forward.ro</a></span></div>
            <div className="cr"><span className="l">Legal</span><span><a href="mailto:giulia@forward.ro">giulia@forward.ro</a></span></div>
            <div className="cr"><span className="l">Demo-uri</span><span><a href="mailto:demo@forward.ro">demo@forward.ro</a></span></div>
            <div className="cr"><span className="l">Cariere</span><span><a href="mailto:cariere@forward.ro">cariere@forward.ro</a></span></div>
            <div className="cr"><span className="l">Presă</span><span><a href="mailto:contact@forward.ro">contact@forward.ro</a> · logo &amp; boilerplate — kit de presă</span></div>
            <div className="cr"><span className="l">Sediu</span><span>București, România</span></div>
            <div className="cr"><span className="l">Entitate</span><span>Forward Music Agency SRL · fondată 2014</span></div>
            <div className="cr"><span className="l">Familia Forward</span><span>Forward Music (acest site) · <a href="https://forwardsports.ro" target="_blank" rel="noopener">Forward Sports</a> · <a href="https://www.urban-events.ro" target="_blank" rel="noopener">Urban Events</a> · <a href="https://www.epicenter-hub.com" target="_blank" rel="noopener">Epicenter Hub</a></span></div>
          </div>
          <p className="ai">
            Rosterul Forward e publicat și ca date structurate (schema.org) —
            lizibil pentru motoare de căutare și asistenți AI. © 2026 Forward
            Music Agency SRL.
          </p>
        </section>
      </main>
    </>
  );
}
