import Link from 'next/link';

export const metadata = {
  title: 'Termeni & confidențialitate',
  description:
    'Datele de identificare ale Forward Music Agency SRL, politica de confidențialitate, cookie-uri și informațiile ANPC pentru forward.ro.',
  alternates: {
    canonical: 'https://forward.ro/legal/',
    languages: {
      ro: 'https://forward.ro/legal/',
      en: 'https://forward.ro/en/legal/',
    },
  },
};

export default function Legal() {
  return (
    <>
    <nav className="anav">
    <Link className="back" href="/">← înapoi la monografie</Link>
  <Link className="logo" href="/">Forward<i>.</i></Link>
    <a className="back" href="mailto:legal@forward.ro">legal@forward.ro</a>
    </nav>
  <article className="apage">
    <div className="kick">
    Legal · Forward
  {' · '}
  <Link href="/en/legal/">EN</Link>
    </div>
  <h1>Termeni &amp; confidențialitate.</h1>

<p className="bio">
    Pagina asta spune, în limbaj clar, cine suntem, ce date prelucrăm
  atunci când folosești forward.ro și ce drepturi ai. Pe scurt:
  site-ul nu folosește cookie-uri, nu are formulare și nu colectează
  date despre tine fără să i le dai chiar tu, printr-un email.
    </p>

<h2 className="sec">Cine suntem</h2>
  <p>
    Site-ul forward.ro este operat de <b>Forward Music Agency SRL</b>,
  persoană juridică română. Sediu: București, România [adresa
    completă — de completat]. Înregistrată la Registrul Comerțului cu
  nr. [J40/—/— — de completat], CUI [— de completat]. Ne poți scrie
  oricând la{' '}
  <a href="mailto:legal@forward.ro">legal@forward.ro</a>.
    </p>

<h2 className="sec">Ce date prelucrăm</h2>
  <p>
    <b>Nu colectăm date personale prin simpla vizitare a site-ului.</b>{' '}
  forward.ro nu are conturi de utilizator, nu are formulare de
  contact și nu folosește cookie-uri sau alte tehnologii de urmărire
  a vizitatorilor.
    </p>
  <p>
    <b>Emailurile pe care ni le trimiți.</b> Dacă ne scrii — pentru
  booking, demo, presă sau orice altceva — prelucrăm datele pe care
  ni le transmiți chiar tu (nume, adresă de email, conținutul
  mesajului) ca să îți răspundem și, dacă e cazul, să derulăm
  colaborarea. Temeiul este demersul precontractual și interesul
  nostru legitim de a răspunde corespondenței (art. 6 alin. 1 lit. b
                                               și f din GDPR). Păstrăm corespondența atât timp cât este necesar
  scopului pentru care ne-ai scris și obligațiilor legale de
  arhivare.
    </p>
  <p>
    <b>Măsurarea traficului.</b> Dacă activăm instrumente de
  statistică, folosim soluții fără cookie-uri și fără identificarea
  vizitatorilor (date agregate și anonime). De aceea site-ul nu
  afișează banner de consimțământ: nu există nimic de consimțit.
    </p>

<h2 className="sec">Drepturile tale</h2>
  <p>
    Ai dreptul de acces, rectificare, ștergere, restricționare,
    portabilitate și opoziție cu privire la datele tale, precum și
  dreptul de a nu face obiectul unei decizii automate. Ne poți
  exercita oricare dintre aceste drepturi scriind la{' '}
  <a href="mailto:legal@forward.ro">legal@forward.ro</a> — răspundem
  în cel mult 30 de zile. Dacă ești nemulțumit de felul în care îți
  prelucrăm datele, te poți adresa Autorității Naționale de
  Supraveghere a Prelucrării Datelor cu Caracter Personal
  (ANSPDCP),{' '}
  <a href="https://www.dataprotection.ro" target="_blank" rel="noopener">dataprotection.ro</a>.
    </p>

<h2 className="sec">Cookie-uri și conținut terț</h2>
  <p>
    forward.ro <b>nu setează cookie-uri</b>. Paginile artiștilor
  includ videoclipuri YouTube (în varianta „privacy-enhanced",
    youtube-nocookie.com) și playere Spotify: acestea se încarcă de pe
  serverele YouTube, respectiv Spotify, iar dacă interacționezi cu
  ele (de exemplu, dai play) se aplică politicile de confidențialitate
  ale acestor platforme. Linkurile către site-urile din familia
  Forward și către platformele artiștilor te duc în afara forward.ro,
    unde se aplică regulile acelor site-uri.
    </p>

<h2 className="sec">Proprietate intelectuală</h2>
  <p>
    Conținutul acestui site — texte, structura monografiei, elemente
  grafice — aparține Forward Music Agency SRL. Fotografiile și
  materialele artiștilor aparțin artiștilor sau titularilor lor de
  drepturi și sunt folosite în baza colaborării de reprezentare.
    Pentru preluări în presă, scrie-ne la{' '}
  <a href="mailto:contact@forward.ro">contact@forward.ro</a>.
    </p>

<h2 className="sec">ANPC și soluționarea litigiilor</h2>
  <p>
    Autoritatea Națională pentru Protecția Consumatorilor:{' '}
  <a href="https://anpc.ro" target="_blank" rel="noopener">anpc.ro</a>.
  Soluționarea alternativă a litigiilor (SAL):{' '}
  <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener">anpc.ro/ce-este-sal</a>.
  Platforma europeană de soluționare online a litigiilor (SOL):{' '}
  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener">ec.europa.eu/consumers/odr</a>.
    </p>
  <p>
    Prezentele condiții sunt guvernate de legea română. Ultima
  actualizare: noiembrie 2026.
    </p>

<div className="afoot">
    <span>© {new Date().getFullYear()} Forward Music Agency SRL</span>
  <Link href="/">înapoi la monografie →</Link>
    </div>
    </article>
    </>
  );
}
