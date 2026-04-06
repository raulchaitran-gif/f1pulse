import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Calendar, 
  Users, 
  Newspaper, 
  ChevronRight, 
  Timer, 
  MapPin, 
  Flag,
  Zap,
  TrendingUp,
  ChevronDown
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';
import { RACES, DRIVERS, TEAMS, NEWS } from './constants';
import { RaceCard } from './components/RaceCard';
import { DriverCard } from './components/DriverCard';
import { Quote } from './components/Quote';
import { cn } from './lib/utils';

export default function App() {
  const [activeTab, setActiveTab] = useState<'calendar' | 'standings' | 'drivers' | 'news'>('calendar');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextRace = RACES.find(r => r.status === 'upcoming' || r.status === 'live');

  return (
    <div className="min-h-screen bg-f1-black text-white selection:bg-f1-red selection:text-white">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 flex items-center justify-between",
        scrolled ? "bg-f1-black/90 backdrop-blur-xl border-b border-f1-red/20 py-3 shadow-neon" : "bg-transparent"
      )}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-f1-red rounded-sm flex items-center justify-center transform -skew-x-12 shadow-neon-strong">
            <Flag size={18} className="text-white fill-current" />
          </div>
          <span className="text-xl font-display font-black tracking-tighter uppercase italic neon-text">F1 Pulse <span className="text-f1-red">2026</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['calendar', 'standings', 'drivers', 'news'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={cn(
                "text-xs font-bold uppercase tracking-widest transition-all hover:text-f1-red relative py-2",
                activeTab === tab ? "text-f1-red" : "text-white/60"
              )}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-f1-red"
                />
              )}
            </button>
          ))}
        </div>

        <button className="px-4 py-2 bg-f1-red hover:bg-f1-red/80 transition-colors rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
          <Zap size={12} />
          Live Center
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/f1-2026/1920/1080?blur=2"
            alt="F1 Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-f1-black/20 via-f1-black/60 to-f1-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-f1-red/10 border border-f1-red/50 text-f1-red text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-neon">
              World Championship 2026
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-black italic uppercase tracking-tighter mb-8 leading-[0.9] neon-text">
              The New Era <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-f1-red via-white to-f1-red">Has Begun</span>
            </h1>
            
            {nextRace && (
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
                <div className="flex items-center gap-4 bg-f1-black/60 backdrop-blur-md border border-f1-red/20 rounded-2xl p-6 pr-12 shadow-neon">
                  <div className="w-12 h-12 rounded-xl bg-f1-red/10 flex items-center justify-center text-f1-red shadow-neon">
                    <Timer size={24} />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Next Grand Prix</span>
                    <h3 className="text-xl font-bold">{nextRace.name}</h3>
                    <div className="flex items-center gap-2 text-white/60 text-xs mt-1">
                      <MapPin size={12} />
                      <span>{nextRace.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  {[
                    { label: 'Days', value: '12' },
                    { label: 'Hrs', value: '08' },
                    { label: 'Min', value: '45' }
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center">
                      <span className="text-3xl font-display font-black italic neon-text">{item.value}</span>
                      <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <AnimatePresence mode="wait">
          {activeTab === 'calendar' && (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-4xl font-display font-black italic uppercase tracking-tighter flex items-center gap-3">
                    <Calendar className="text-f1-red" />
                    Race Calendar
                  </h2>
                  <p className="text-white/40 mt-2">The full 2026 schedule across 24 global circuits.</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-colors">Upcoming</button>
                  <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-colors">Completed</button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {RACES.map((race, idx) => (
                  <RaceCard key={race.id} race={race} index={idx} />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'standings' && (
            <motion.div
              key="standings"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-4xl font-display font-black italic uppercase tracking-tighter flex items-center gap-3">
                    <Trophy className="text-f1-red" />
                    Championship Standings
                  </h2>
                  <p className="text-white/40 mt-2">Live points battle for the 2026 World Title.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-f1-gray/20 rounded-3xl p-8 border border-white/5">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <TrendingUp size={20} className="text-f1-red" />
                      Points Progression
                    </h3>
                  </div>
                  <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={DRIVERS}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                        <XAxis 
                          dataKey="name" 
                          stroke="#ffffff40" 
                          fontSize={10} 
                          tickLine={false} 
                          axisLine={false}
                          tickFormatter={(val) => val.split(' ')[1]}
                        />
                        <YAxis stroke="#ffffff40" fontSize={10} tickLine={false} axisLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#15151e', border: '1px solid #ffffff10', borderRadius: '12px' }}
                          itemStyle={{ color: '#fff', fontSize: '12px' }}
                        />
                        <Bar dataKey="points" radius={[4, 4, 0, 0]}>
                          {DRIVERS.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#e10600' : '#38383f'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Top Constructors</h3>
                  {TEAMS.map((team, idx) => (
                    <div key={team.id} className="bg-f1-gray/20 p-4 rounded-2xl border border-white/5 flex items-center justify-between group hover:border-f1-red/30 transition-all">
                      <div className="flex items-center gap-4">
                        <span className="text-lg font-display font-black italic text-white/20">{idx + 1}</span>
                        <div className="w-10 h-10 rounded-lg bg-white/5 p-2">
                          <img src={team.logo} alt={team.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">{team.name}</h4>
                          <span className="text-[10px] text-white/40 uppercase tracking-tighter">{team.drivers.join(' / ')}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-display font-black italic">{team.points}</span>
                        <span className="block text-[8px] text-white/40 uppercase tracking-widest">PTS</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'drivers' && (
            <motion.div
              key="drivers"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-4xl font-display font-black italic uppercase tracking-tighter flex items-center gap-3">
                    <Users className="text-f1-red" />
                    Driver Lineup
                  </h2>
                  <p className="text-white/40 mt-2">The 20 elite athletes competing at the pinnacle of motorsport.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {DRIVERS.map((driver, idx) => (
                  <DriverCard key={driver.id} driver={driver} index={idx} />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'news' && (
            <motion.div
              key="news"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-4xl font-display font-black italic uppercase tracking-tighter flex items-center gap-3">
                    <Newspaper className="text-f1-red" />
                    Latest Updates
                  </h2>
                  <p className="text-white/40 mt-2">Breaking news and technical insights from the paddock.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {NEWS.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[16/9] overflow-hidden rounded-3xl mb-6 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="px-3 py-1 rounded-full bg-f1-red text-[10px] font-bold uppercase tracking-widest">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3">
                      <span>{item.date}</span>
                      <span className="w-1 h-1 rounded-full bg-f1-red" />
                      <span>5 min read</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-f1-red transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/60 line-clamp-2 mb-6">
                      {item.summary}
                    </p>
                    <div className="flex items-center gap-2 text-f1-red font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                      Read Full Story
                      <ChevronRight size={16} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Quote />

      {/* Footer */}
      <footer className="bg-f1-gray/10 border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-f1-red rounded-sm flex items-center justify-center transform -skew-x-12">
                <Flag size={18} className="text-white fill-current" />
              </div>
              <span className="text-xl font-display font-black tracking-tighter uppercase italic">F1 Pulse <span className="text-f1-red">2026</span></span>
            </div>
            <p className="text-white/40 max-w-md leading-relaxed">
              The ultimate destination for Formula 1 fans. Experience the thrill of the 2026 season with real-time data, deep technical analysis, and exclusive paddock insights.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/20 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-white/60">
              <li className="hover:text-f1-red cursor-pointer transition-colors">Race Calendar</li>
              <li className="hover:text-f1-red cursor-pointer transition-colors">Driver Standings</li>
              <li className="hover:text-f1-red cursor-pointer transition-colors">Constructor Standings</li>
              <li className="hover:text-f1-red cursor-pointer transition-colors">Technical Regulations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/20 mb-6">Connect</h4>
            <ul className="space-y-4 text-sm font-medium text-white/60">
              <li className="hover:text-f1-red cursor-pointer transition-colors">Twitter / X</li>
              <li className="hover:text-f1-red cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-f1-red cursor-pointer transition-colors">YouTube</li>
              <li className="hover:text-f1-red cursor-pointer transition-colors">Discord Community</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">© 2026 F1 Pulse. All Rights Reserved.</span>
          <div className="flex gap-8">
            <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
