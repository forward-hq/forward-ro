import data from '../data/roster.json';

export const AGENTS = data.agents;
export const ROSTER = data.roster;

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
