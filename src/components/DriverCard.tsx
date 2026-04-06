import React from 'react';
import { motion } from 'motion/react';
import { Driver } from '../types';
import { cn } from '../lib/utils';

interface DriverCardProps {
  driver: Driver;
  index: number;
}

export const DriverCard: React.FC<DriverCardProps> = ({ driver, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-f1-black border border-white/5 hover:border-f1-red/50 transition-all duration-500 hover:shadow-neon"
    >
      <div className="absolute top-4 left-4 z-10 flex flex-col items-center">
        <span className="text-4xl font-black text-white/10 italic leading-none neon-text">{driver.number}</span>
        <span className="text-xs font-bold text-f1-red uppercase tracking-tighter -mt-1 shadow-neon">{driver.rank}st</span>
      </div>

      <div className="aspect-square overflow-hidden bg-gradient-to-br from-f1-gray/40 to-f1-black">
        <img
          src={driver.image}
          alt={driver.name}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-f1-black via-transparent to-transparent opacity-90" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold text-f1-red uppercase tracking-widest neon-text">{driver.team}</span>
        </div>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-f1-red transition-colors neon-text">{driver.name}</h3>
        
        <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Points</span>
            <span className="text-xl font-bold">{driver.points}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Wins</span>
            <span className="text-xl font-bold">{driver.wins}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Podiums</span>
            <span className="text-xl font-bold">{driver.podiums}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
