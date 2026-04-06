import { Race, Driver, Team, NewsItem } from './types';

export const RACES: Race[] = [
  {
    id: '1',
    round: 1,
    name: 'Bahrain Grand Prix',
    circuit: 'Bahrain International Circuit',
    location: 'Sakhir, Bahrain',
    date: '2026-03-01',
    status: 'completed',
    winner: 'Max Verstappen',
    fastestLap: '1:32.608',
    image: 'https://picsum.photos/seed/bahrain/800/400'
  },
  {
    id: '2',
    round: 2,
    name: 'Saudi Arabian Grand Prix',
    circuit: 'Jeddah Corniche Circuit',
    location: 'Jeddah, Saudi Arabia',
    date: '2026-03-15',
    status: 'completed',
    winner: 'Lewis Hamilton',
    fastestLap: '1:30.734',
    image: 'https://picsum.photos/seed/jeddah/800/400'
  },
  {
    id: '3',
    round: 3,
    name: 'Australian Grand Prix',
    circuit: 'Albert Park Circuit',
    location: 'Melbourne, Australia',
    date: '2026-03-29',
    status: 'live',
    image: 'https://picsum.photos/seed/melbourne/800/400'
  },
  {
    id: '4',
    round: 4,
    name: 'Japanese Grand Prix',
    circuit: 'Suzuka International Racing Course',
    location: 'Suzuka, Japan',
    date: '2026-04-12',
    status: 'upcoming',
    image: 'https://picsum.photos/seed/suzuka/800/400'
  },
  {
    id: '5',
    round: 5,
    name: 'Chinese Grand Prix',
    circuit: 'Shanghai International Circuit',
    location: 'Shanghai, China',
    date: '2026-04-26',
    status: 'upcoming',
    image: 'https://picsum.photos/seed/shanghai/800/400'
  },
  {
    id: '6',
    round: 6,
    name: 'Miami Grand Prix',
    circuit: 'Miami International Autodrome',
    location: 'Miami, USA',
    date: '2026-05-10',
    status: 'upcoming',
    image: 'https://picsum.photos/seed/miami/800/400'
  }
];

export const DRIVERS: Driver[] = [
  {
    id: '1',
    name: 'Max Verstappen',
    team: 'Red Bull Racing',
    points: 50,
    wins: 1,
    podiums: 2,
    rank: 1,
    number: 1,
    country: 'Netherlands',
    image: 'https://picsum.photos/seed/max/400/400'
  },
  {
    id: '2',
    name: 'Lewis Hamilton',
    team: 'Ferrari',
    points: 43,
    wins: 1,
    podiums: 1,
    rank: 2,
    number: 44,
    country: 'United Kingdom',
    image: 'https://picsum.photos/seed/lewis/400/400'
  },
  {
    id: '3',
    name: 'Charles Leclerc',
    team: 'Ferrari',
    points: 30,
    wins: 0,
    podiums: 1,
    rank: 3,
    number: 16,
    country: 'Monaco',
    image: 'https://picsum.photos/seed/charles/400/400'
  },
  {
    id: '4',
    name: 'Lando Norris',
    team: 'McLaren',
    points: 28,
    wins: 0,
    podiums: 1,
    rank: 4,
    number: 4,
    country: 'United Kingdom',
    image: 'https://picsum.photos/seed/lando/400/400'
  },
  {
    id: '5',
    name: 'George Russell',
    team: 'Mercedes',
    points: 22,
    wins: 0,
    podiums: 0,
    rank: 5,
    number: 63,
    country: 'United Kingdom',
    image: 'https://picsum.photos/seed/george/400/400'
  }
];

export const TEAMS: Team[] = [
  {
    id: '1',
    name: 'Red Bull Racing',
    points: 65,
    rank: 1,
    drivers: ['Max Verstappen', 'Sergio Perez'],
    color: '#0600ef',
    logo: 'https://picsum.photos/seed/redbull/200/200'
  },
  {
    id: '2',
    name: 'Ferrari',
    points: 73,
    rank: 2,
    drivers: ['Lewis Hamilton', 'Charles Leclerc'],
    color: '#e10600',
    logo: 'https://picsum.photos/seed/ferrari/200/200'
  },
  {
    id: '3',
    name: 'McLaren',
    points: 45,
    rank: 3,
    drivers: ['Lando Norris', 'Oscar Piastri'],
    color: '#ff8700',
    logo: 'https://picsum.photos/seed/mclaren/200/200'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Hamilton Secures First Win with Ferrari in Jeddah',
    summary: 'A masterclass from the seven-time champion as he takes his first victory in the scarlet car under the lights of Jeddah.',
    date: '2026-03-16',
    category: 'Race Report',
    image: 'https://picsum.photos/seed/news1/600/400'
  },
  {
    id: '2',
    title: 'Red Bull Unveils Radical Aero Package for Melbourne',
    summary: 'Adrian Newey\'s latest creation features a unique sidepod design that has the paddock talking.',
    date: '2026-03-27',
    category: 'Technical',
    image: 'https://picsum.photos/seed/news2/600/400'
  },
  {
    id: '3',
    title: 'Audi Confirms Driver Lineup for 2027 Entry',
    summary: 'The German manufacturer makes waves with a surprise announcement ahead of their official entry into the sport.',
    date: '2026-03-28',
    category: 'Transfer News',
    image: 'https://picsum.photos/seed/news3/600/400'
  }
];
