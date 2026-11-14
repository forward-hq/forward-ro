import data from '../data/roster.json';
import content from '../data/content.json';

export const AGENTS = data.agents;
export const ROSTER = data.roster.map((a) => ({
    ...a,
  bio: a.bio || content.bios[a.slug],
    socials: { ...(content.socials[a.slug] || {}), ...(a.socials || {}) },
  videos: a.videos && a.videos.length ? a.videos : content.videos[a.slug],
}));

export const CATS = [
  { key: 'all', label: 'toți' },
  { key: 'Pop', label: 'pop' },
  { key: 'Urban Hip-Hop', label: 'hip-hop' },
  { key: 'Urban Trap', label: 'trap' },
  { key: 'Rock/Indie/Alternativ', label: 'rock & alternativ' },
  { key: 'DJ', label: 'dj' },
  { key: 'epi', label: 'fwd × epicenter' },
  ];

export const sorted = [...ROSTER].sort((a, b) =>
                                         a.name.localeCompare(b.name, 'ro', { sensitivity: 'base' })
                                       );

export const bySlug = (slug) => ROSTER.find((a) => a.slug === slug);
export const agentsOf = (a) => a.booking.map((k) => AGENTS[k]);
export const managed = sorted.filter((a) => a.management);
export const managerOf = (a) => (a.management ? AGENTS[a.management.agent] : null);
