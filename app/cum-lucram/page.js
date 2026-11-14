import Link from 'next/link';

export const metadata = {
    title: 'Cum lucrăm — booking pas cu pas',
        description:
          'Cât costă un concert și cum rezervi un artist prin Forward: pașii de booking, factorii care compun onorariul și întrebările frecvente — fără formulare, cu răspuns în următoarea zi lucrătoare.',
        alternates: {
    canonical: 'https://forward.ro/cum-lucram/',
          languages: {
      ro: 'https://forward.ro/cum-lucram/',
              en: 'https://forward.ro/en/how-we-work/',
        },
    },
};

export default function CumLucram() {
    return (
          <>
            <nav className="anav">
              <Link className="back" href="/">← înapoi la monografie</Link>
        <Link className="logo" href="/">Forward<i>.</i></Link>
        <a className="back" href="mailto:booking@forward.ro?subject=Cerere booking">booking@forward.ro</a>
            </nav>
            <article className="apage">
              <div className="kick">
                Ghid · Forward
      {' · '}
                <Link href="/en/how-we-work/">EN</Link>
              </div>
              <h1>Cum lucrăm.</h1>

        <p className="bio">
          Nu publicăm tarife — și nu dintr-un secret de breaslă. Onorariul unui
          artist nu e un preț de raft: aceeași voce poate costa foarte diferit
          în funcție de ce, unde și când i se cere. Ce putem publica, în
          schimb, e tot restul: cum decurge o rezervare, din ce se compune
          suma și la ce să te aștepți. Iar la orice întrebare rămasă, un om cu
          nume răspunde în următoarea zi lucrătoare.
              </p>

              <h2 className="sec">Pașii — de la idee la scenă</h2>
        <div className="tl">
          <div className="te"><span className="y">01</span><p><b>Ne scrii.</b> Direct agentului artistului (îl găsești pe pagina lui) sau la booking@forward.ro. Cele mai utile detalii din primul mesaj: data, orașul, tipul evenimentului și artistul sau genul căutat.</p></div>
                <div className="te"><span className="y">02</span><p><b>Răspundem în următoarea zi lucrătoare.</b> Confirmăm disponibilitatea artistului pe data cerută și îți cerem ce mai lipsește din brief.</p></div>
                <div className="te"><span className="y">03</span><p><b>Primești oferta.</b> O singură ofertă clară, cu tot ce include: onorariul, condițiile tehnice, ce aduce artistul și ce rămâne în sarcina organizatorului. Detaliile de avans și de anulare sunt scrise negru pe alb, nu subînțelese.</p></div>
                <div className="te"><span className="y">04</span><p><b>Semnăm contractul.</b> Din momentul semnării, data e blocată pentru tine, iar de restul — drum, program, probe de sunet — ne ocupăm împreună cu echipa artistului.</p></div>
              </div>

              <h2 className="sec">Din ce se compune onorariul</h2>
        <p>
          <b>Artistul și formatul.</b> Un DJ-set, un concert cu trupă completă
          sau un show cu producție proprie sunt trei lucruri diferite — și trei
          bugete diferite, chiar pentru același nume.
        </p>
        <p>
          <b>Data.</b> Weekendurile de vară, sărbătorile și Revelionul sunt
          cele mai cerute perioade din an; aceeași dată cerută din timp costă
          altfel decât cerută în ultima clipă.
        </p>
        <p>
          <b>Orașul și logistica.</b> Distanța, transportul echipei și al
          echipamentului, cazarea — toate intră în calcul, transparent, nu
          ascunse în sumă.
              </p>
              <p>
                <b>Tehnica.</b> Sunet, lumini, scenă: unele evenimente le au, altele
          nu. În ofertă scrie exact ce aduce artistul și ce trebuie asigurat de
          organizator.
              </p>
        <p>
          <b>Tipul evenimentului.</b> Festival, club, eveniment privat sau
          corporate — publicul și contextul diferă, iar condițiile se așază
          diferit.
              </p>

              <h2 className="sec">Întrebări frecvente</h2>
        <p><b>Cât costă să aduc un artist?</b><br />
        Exact ce ai citit mai sus: depinde de artist, format, dată, oraș și
        tehnică. Scrie-ne data și orașul — primești un răspuns concret, nu o
        listă de prețuri care nu se aplică nimănui.</p>
              <p><b>Cât de repede primesc un răspuns?</b><br />
              În următoarea zi lucrătoare. E promisiunea afișată pe fiecare pagină de
        artist — și motivul pentru care nu avem formulare de contact.</p>
              <p><b>Cu cât timp înainte trebuie să rezerv?</b><br />
              Cu cât mai devreme, cu atât mai multe opțiuni. Pentru datele mari —
        weekenduri de vară, sărbători, Revelion — artiștii cei mai ceruți se
        blochează cu multe luni înainte.</p>
        <p><b>Cum funcționează avansul și anularea?</b><br />
              Ambele sunt stabilite clar în ofertă și în contract, înainte să semnezi
        — fără clauze-surpriză. Nu confirmăm o dată fără contract semnat.</p>
        <p><b>Organizez o nuntă sau un eveniment de firmă. E pentru mine?</b><br />
        Da — prin <a href="https://www.urban-events.ro" target="_blank" rel="noopener">Urban Events</a>,
              agenția de evenimente a familiei Forward: același roster, cu echipa
        specializată pe nunți, petreceri private și evenimente corporate.</p>
              <p><b>Sunt artist și vreau să fiu reprezentat.</b><br />
        Trimite-ne muzica ta la <a href="mailto:demo@forward.ro?subject=Demo — [numele tău]">demo@forward.ro</a>.
              Ascultăm tot ce primim și răspundem la ce ne mișcă.</p>

        <div className="door">
          <b>Gata de primul pas?</b> Alege artistul din{' '}
          <Link href="/#c2">roster</Link> și scrie-i direct agentului — sau
          trimite totul într-un singur mesaj.
                <a className="doorbtn" href="mailto:booking@forward.ro?subject=Cerere booking">booking@forward.ro →</a>
              </div>
              <p className="sla">Răspundem în următoarea zi lucrătoare.</p>

              <div className="afoot">
                <span>© {new Date().getFullYear()} Forward Music Agency SRL</span>
            <Link href="/">înapoi la monografie →</Link>
        </div>
      </article>
    </>
  );
}
