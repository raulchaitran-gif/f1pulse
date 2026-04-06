export interface Race {
  id: string;
  round: number;
  name: string;
  circuit: string;
  location: string;
  date: string;
  status: 'upcoming' | 'completed' | 'live';
  winner?: string;
  fastestLap?: string;
  image: string;
}

export interface Driver {
  id: string;
  name: string;
  team: string;
  points: number;
  wins: number;
  podiums: number;
  rank: number;
  number: number;
  country: string;
  image: string;
}

export interface Team {
  id: string;
  name: string;
  points: number;
  rank: number;
  drivers: string[];
  color: string;
  logo: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  image: string;
}
