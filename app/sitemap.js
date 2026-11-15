import { ROSTER } from '../lib/data';

export const dynamic = 'force-static';

export default function sitemap() {
    const base = 'https://forward.ro';
    return [
      { url: `${base}/`, priority: 1 },
        { url: `${base}/cum-lucram/`, priority: 0.8 },
        { url: `${base}/en/`, priority: 0.8 },
        { url: `${base}/en/how-we-work/`, priority: 0.6 },
        { url: `${base}/legal/`, priority: 0.3 },
        { url: `${base}/en/legal/`, priority: 0.3 },
          ...ROSTER.map((a) => ({ url: `${base}/talents/${a.slug}/`, priority: 0.9 })),
        ...ROSTER.map((a) => ({ url: `${base}/en/talents/${a.slug}/`, priority: 0.7 })),
        ];
}
