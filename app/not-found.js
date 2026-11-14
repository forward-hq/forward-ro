import Link from 'next/link';

export const metadata = { title: 'Pagina nu e în cuprins' };

export default function NotFound() {
    return (
          <main className="nf">
            <div className="kick404">404 · În afara cuprinsului</div>
        <h1>
              Pagina asta
          <br />
              <span>nu e în monografie.</span>
      </h1>
        <p>
              Poate artistul s-a mutat, poate adresa e veche. Cuprinsul complet e la
          un pas — iar dacă nu găsești ce cauți, scrie-ne:{' '}
          <a href="mailto:booking@forward.ro">booking@forward.ro</a>.
            </p>
        <div className="nfl">
                    <Link href="/">← înapoi la început</Link>
          <Link href="/#c2">tot rosterul →</Link>
            </div>
            </main>
    );
}
