import './globals.css';

export const metadata = {
  metadataBase: new URL('https://forward.ro'),
    title: { default: 'Forward — Agenție de talente', template: '%s | Forward' },
  description:
        'Agenție de talente din București, fondată în 2014. 57 de talente pe roster — booking, management, evenimente și label.',
        openGraph: { siteName: 'Forward', locale: 'ro_RO', type: 'website' },
};

const orgLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Forward Music Agency',
  url: 'https://forward.ro',
  foundingDate: '2014',
  location: 'București, România',
  description:
        'Agenție de talente. 57 de talente pe roster: booking, management, evenimente și label.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
