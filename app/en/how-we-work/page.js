import Link from 'next/link';
import SetLang from '../../../components/SetLang';

export const metadata = {
    title: 'How we work — booking step by step',
        description:
          'How much does a concert cost and how do you book an artist through Forward: the booking steps, the factors behind the fee and the FAQ — no forms, with a reply by the next business day.',
        alternates: {
    canonical: 'https://forward.ro/en/how-we-work/',
          languages: {
      ro: 'https://forward.ro/cum-lucram/',
              en: 'https://forward.ro/en/how-we-work/',
        },
    },
};

export default function HowWeWork() {
    return (
          <>
            <SetLang lang="en" />
            <nav className="anav">
              <Link className="back" href="/en/">← back to the monograph</Link>
              <Link className="logo" href="/en/">Forward<i>.</i></Link>
              <a className="back" href="mailto:booking@forward.ro?subject=Booking inquiry">booking@forward.ro</a>
            </nav>
            <article className="apage">
              <div className="kick">
                Guide · Forward
      {' · '}
                <Link href="/cum-lucram/">RO</Link>
              </div>
              <h1>How we work.</h1>

        <p className="bio">
          We don&apos;t publish fees — and not out of guild secrecy. An
                artist&apos;s fee is not a shelf price: the same voice can cost very
          differently depending on what, where and when it is asked to do. What
                we can publish is everything else: how a booking unfolds, what the
          fee is made of and what to expect. And for any remaining question, a
                person with a name replies by the next business day.
              </p>

              <h2 className="sec">The steps — from idea to stage</h2>
              <div className="tl">
                <div className="te"><span className="y">01</span><p><b>You write to us.</b> Directly to the artist&apos;s agent (you&apos;ll find them on the artist&apos;s page) or to booking@forward.ro. The most useful details in a first message: the date, the city, the type of event and the artist or genre you&apos;re after.</p></div>
          <div className="te"><span className="y">02</span><p><b>We reply by the next business day.</b> We confirm the artist&apos;s availability on your date and ask for whatever is still missing from the brief.</p></div>
          <div className="te"><span className="y">03</span><p><b>You receive the offer.</b> One clear offer, with everything it includes: the fee, the technical requirements, what the artist brings and what stays with the organiser. Deposit and cancellation terms are written in black and white, not implied.</p></div>
                <div className="te"><span className="y">04</span><p><b>We sign the contract.</b> From the moment of signing, the date is locked for you — and the rest, from travel to soundcheck, we handle together with the artist&apos;s team.</p></div>
        </div>

              <h2 className="sec">What the fee is made of</h2>
              <p>
                <b>The artist and the format.</b> A DJ set, a full-band concert and a
          show with its own production are three different things — and three
          different budgets, even for the same name.
              </p>
              <p>
                <b>The date.</b> Summer weekends, holidays and New Year&apos;s Eve
          are the most requested periods of the year; the same date costs
          differently booked early versus at the last minute.
              </p>
              <p>
                <b>The city and the logistics.</b> Distance, transport for the team
          and equipment, accommodation — all enter the calculation,
          transparently, not hidden in the sum.
              </p>
              <p>
                <b>The tech.</b> Sound, lights, stage: some events have them, some
          don&apos;t. The offer states exactly what the artist brings and what
          the organiser needs to provide.
              </p>
        <p>
          <b>The type of event.</b> Festival, club, private or corporate — the
          audience and the context differ, and the terms settle differently.
              </p>

              <h2 className="sec">Frequently asked questions</h2>
        <p><b>How much does it cost to book an artist?</b><br />
        Exactly what you read above: it depends on the artist, format, date,
        city and tech. Write to us with the date and the city — you get a
        concrete answer, not a price list that applies to no one.</p>
        <p><b>How fast do I get a reply?</b><br />
              By the next business day. It&apos;s the promise shown on every artist
        page — and the reason we have no contact forms.</p>
              <p><b>How far in advance should I book?</b><br />
              The earlier, the more options. For the big dates — summer weekends,
              holidays, New Year&apos;s Eve — the most requested artists lock in many
        months ahead.</p>
              <p><b>How do deposit and cancellation work?</b><br />
              Both are set out clearly in the offer and the contract, before you
        sign — no surprise clauses. We don&apos;t confirm a date without a
        signed contract.</p>
        <p><b>I&apos;m organising a wedding or a corporate event. Is this for me?</b><br />
              Yes — through <a href="https://www.urban-events.ro" target="_blank" rel="noopener">Urban Events</a>,
              the events agency of the Forward family: the same roster, with a team
        specialised in weddings, private parties and corporate events.</p>
              <p><b>I&apos;m an artist and I want representation.</b><br />
              Send us your music at <a href="mailto:demo@forward.ro?subject=Demo — [your name]">demo@forward.ro</a>.
        We listen to everything we receive and reply to what moves us.</p>

        <div className="door">
          <b>Ready for the first step?</b> Pick the artist from the{' '}
          <Link href="/en/#c2">roster</Link> and write directly to their agent
          — or send everything in a single message.
          <a className="doorbtn" href="mailto:booking@forward.ro?subject=Booking inquiry">booking@forward.ro →</a>
              </div>
              <p className="sla">We reply by the next business day.</p>

        <div className="afoot">
          <span>© {new Date().getFullYear()} Forward Music Agency SRL</span>
                <Link href="/en/">back to the monograph →</Link>
        </div>
      </article>
    </>
  );
}
