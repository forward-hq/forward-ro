import { ROSTER } from '../lib/data';

export const dynamic = 'force-static';

export default function sitemap() {
    const base = 'https://forward.ro';
    return [
      { url: `${base}/`, priority: 1 },
          ...ROSTER.map((a) => ({ url: `${base}/talents/${a.slug}/`, priority: 0.9 })),
        ];
}
