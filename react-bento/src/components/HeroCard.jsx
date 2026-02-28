import { motion } from 'framer-motion';
import { Briefcase, MapPin, Sparkles, ChevronRight } from 'lucide-react';

export default function HeroCard() {
    return (
        <motion.div
            className="glass-card p-8 flex flex-col justify-between gap-6 min-h-[260px] relative overflow-hidden"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0 }}
        >
            {/* Nebula glow accent */}
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(124,138,255,0.18) 0%, transparent 70%)' }} />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(167,139,255,0.12) 0%, transparent 70%)' }} />

            {/* Top row */}
            <div className="flex items-start gap-5 flex-wrap relative z-10">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-extrabold select-none"
                        style={{
                            background: 'linear-gradient(135deg, #7C8AFF, #A78BFF)',
                            boxShadow: '0 0 24px rgba(124,138,255,0.5)',
                        }}>
                        SS
                    </div>
                    {/* Orbit ring */}
                    <div className="absolute -inset-1 rounded-2xl border border-neon opacity-30 pointer-events-none" />
                </div>

                <div className="flex-1">
                    <h1 className="text-3xl font-black leading-tight tracking-tight"
                        style={{ color: '#fff', textShadow: '0 0 24px rgba(167,139,255,0.4)' }}>
                        Santhosh S
                    </h1>
                    <div className="flex items-center gap-1.5 mt-1 text-sm font-medium" style={{ color: '#A78BFF' }}>
                        <Briefcase size={13} />
                        <span>Aspiring Java Developer</span>
                    </div>
                </div>

                {/* Glowing hire badge */}
                <motion.div
                    className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full flex-shrink-0"
                    style={{
                        background: 'rgba(74,222,128,0.10)',
                        border: '1px solid rgba(74,222,128,0.40)',
                        color: '#4ade80',
                        boxShadow: '0 0 12px rgba(74,222,128,0.25)',
                    }}
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                    </span>
                    Available for Hire
                </motion.div>
            </div>

            {/* About me */}
            <div className="relative z-10">
                <p className="section-label"><Sparkles size={11} /> About Me</p>
                <p className="text-sm leading-relaxed max-w-xl" style={{ color: '#9AA5C4' }}>
                    Aspiring Java Developer with a strong foundation in{' '}
                    <span className="font-semibold" style={{ color: '#C5CEFF' }}>Java, Spring Boot, and Full-Stack development</span>.
                    Interested in solving real-world problems through{' '}
                    <span className="font-semibold" style={{ color: '#C5CEFF' }}>clean and efficient code</span>.
                </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-xs font-medium relative z-10" style={{ color: 'rgba(150,160,190,0.7)' }}>
                <MapPin size={12} /> Tamil Nadu, India Â· B.Tech IT
            </div>
        </motion.div>
    );
}
