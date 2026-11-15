import Link from 'next/link';
import SetLang from '../../../components/SetLang';

export const metadata = {
  title: 'Terms & privacy',
  description:
    'Company details for Forward Music Agency SRL, the privacy policy, cookies and consumer-protection information for forward.ro.',
  alternates: {
    canonical: 'https://forward.ro/en/legal/',
    languages: {
      ro: 'https://forward.ro/legal/',
      en: 'https://forward.ro/en/legal/',
    },
  },
};

export default function LegalEn() {
  return (
    <>
    <SetLang lang="en" />
    <nav className="anav">
    <Link className="back" href="/en/">← back to the monograph</Link>
  <Link className="logo" href="/en/">Forward<i>.</i></Link>
    <a className="back" href="mailto:legal@forward.ro">legal@forward.ro</a>
    </nav>
  <article className="apage">
    <div className="kick">
    Legal · Forward
  {' · '}
  <Link href="/legal/">RO</Link>
    </div>
  <h1>Terms &amp; privacy.</h1>

<p className="bio">
    This page explains, in plain language, who we are, what data we
  process when you use forward.ro and what your rights are. In
  short: the site sets no cookies, has no forms and collects no data
  about you unless you send it yourself, by email.
    </p>

<h2 className="sec">Who we are</h2>
  <p>
    forward.ro is operated by <b>Forward Music Agency SRL</b>, a
  Romanian company. Registered office: Bucharest, Romania [full
    address — to be completed]. Trade Registry no. [J40/—/— — to be
  completed], fiscal code [— to be completed]. You can write to us
  anytime at <a href="mailto:legal@forward.ro">legal@forward.ro</a>.
    </p>

<h2 className="sec">What data we process</h2>
  <p>
    <b>We collect no personal data from simply visiting the site.</b>{' '}
  forward.ro has no user accounts, no contact forms and uses no
  cookies or other visitor-tracking technologies.
    </p>
  <p>
    <b>The emails you send us.</b> If you write to us — for booking,
  demos, press or anything else — we process the data you yourself
  provide (name, email address, the content of your message) in
    order to reply and, where applicable, to carry out the
  collaboration. The legal basis is pre-contractual steps and our
  legitimate interest in answering correspondence (art. 6(1)(b) and
    (f) GDPR). We keep correspondence for as long as the purpose you
  wrote to us for requires, and as legal archiving obligations
  demand.
    </p>
  <p>
    <b>Traffic measurement.</b> If we enable analytics, we use
  cookieless tools that do not identify visitors (aggregated,
                                                  anonymous data). That is why the site shows no consent banner:
  there is nothing to consent to.
    </p>

<h2 className="sec">Your rights</h2>
  <p>
    You have the rights of access, rectification, erasure,
    restriction, portability and objection regarding your data, as
  well as the right not to be subject to automated decisions. You
  can exercise any of them by writing to{' '}
  <a href="mailto:legal@forward.ro">legal@forward.ro</a> — we reply
  within 30 days. If you are unhappy with how we process your data,
    you may address the Romanian supervisory authority (ANSPDCP),{' '}
  <a href="https://www.dataprotection.ro" target="_blank" rel="noopener">dataprotection.ro</a>.
    </p>

<h2 className="sec">Cookies and third-party content</h2>
  <p>
    forward.ro <b>sets no cookies</b>. Artist pages embed YouTube
  videos (in the privacy-enhanced youtube-nocookie.com variant) and
  Spotify players: these load from YouTube and Spotify servers, and
  if you interact with them (for example, press play) those
  platforms&apos; privacy policies apply. Links to the Forward
  family sites and to the artists&apos; platforms take you outside
  forward.ro, where those sites&apos; own rules apply.
    </p>

<h2 className="sec">Intellectual property</h2>
  <p>
    The content of this site — texts, the structure of the monograph,
    graphic elements — belongs to Forward Music Agency SRL. The
  artists&apos; photos and materials belong to the artists or their
  rights holders and are used under the representation
  collaboration. For press use, write to{' '}
  <a href="mailto:contact@forward.ro">contact@forward.ro</a>.
    </p>

<h2 className="sec">Consumer protection and dispute resolution</h2>
  <p>
    The Romanian National Authority for Consumer Protection (ANPC):{' '}
  <a href="https://anpc.ro" target="_blank" rel="noopener">anpc.ro</a>.
  Alternative dispute resolution (SAL):{' '}
  <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener">anpc.ro/ce-este-sal</a>.
  The EU online dispute resolution platform (ODR):{' '}
  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener">ec.europa.eu/consumers/odr</a>.
    </p>
  <p>
    These terms are governed by Romanian law. Last updated: November
  2026.
    </p>

<div className="afoot">
    <span>© {new Date().getFullYear()} Forward Music Agency SRL</span>
  <Link href="/en/">back to the monograph →</Link>
    </div>
    </article>
    </>
  );
}
