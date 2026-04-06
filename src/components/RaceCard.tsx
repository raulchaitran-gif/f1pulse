import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Trophy, Timer } from 'lucide-react';
import { Race } from '../types';
import { cn } from '../lib/utils';
import DotPattern from './ui/dot-pattern-1';

interface RaceCardProps {
  race: Race;
  index: number;
}

export const RaceCard: React.FC<RaceCardProps> = ({ race, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-f1-gray/40 border border-white/5 hover:border-f1-red/50 transition-all duration-500 hover:shadow-neon"
    >
      <DotPattern width={10} height={10} className="fill-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="aspect-video overflow-hidden">
        <img
          src={race.image}
          alt={race.name}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-f1-black via-transparent to-transparent opacity-80" />
      </div>

      <div className="absolute top-4 right-4">
        <span className={cn(
          "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border",
          race.status === 'live' ? "bg-f1-red border-f1-red animate-pulse shadow-neon" : 
          race.status === 'completed' ? "bg-white/5 border-white/10 text-white/40" : 
          "bg-white/5 border-white/10 text-white/60"
        )}>
          {race.status}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-f1-red mb-2">
          <Calendar size={14} className="shadow-neon" />
          <span className="text-xs font-medium uppercase tracking-wider neon-text">{race.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-1 group-hover:text-f1-red transition-colors neon-text">{race.name}</h3>
        <div className="flex flex-col gap-0.5 mb-4">
          <div className="flex items-center gap-1 text-white/40 text-sm">
            <MapPin size={12} />
            <span>{race.location}</span>
          </div>
          <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest ml-4">
            {race.circuit}
          </div>
          <div className="mt-4 ml-4 overflow-hidden rounded-lg border border-white/5 bg-f1-black/40">
            <img
              src={`https://picsum.photos/seed/${race.circuit.replace(/\s+/g, '-')}/200/80?grayscale&blur=1`}
              alt={`${race.circuit} map`}
              referrerPolicy="no-referrer"
              className="w-full h-auto opacity-50 transition-opacity duration-500 group-hover:opacity-80"
            />
          </div>
        </div>

        {race.status === 'completed' && race.winner && (
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy size={14} className="text-yellow-500" />
              <span className="text-xs font-semibold">{race.winner}</span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <Timer size={14} />
              <span className="text-[10px] font-mono">{race.fastestLap}</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
