import { motion } from 'framer-motion';
import { BadgeCheck, Briefcase } from 'lucide-react';

const certs = [
    {
        title: 'Oracle Cloud Infrastructure',
        issuer: 'Oracle Certified',
        color: '#E8C84A',
        bg: 'rgba(232,200,74,0.08)',
        border: 'rgba(232,200,74,0.30)',
        glow: 'rgba(232,200,74,0.35)',
    },
    {
        title: 'Salesforce Agentforce Specialist',
        issuer: 'Salesforce',
        color: '#7CC4FF',
        bg: 'rgba(124,196,255,0.08)',
        border: 'rgba(124,196,255,0.28)',
        glow: 'rgba(124,196,255,0.35)',
    },
];

export default function ExperienceCertsCard({ delay = 0 }) {
    return (
        <motion.div
            className="glass-card p-6 flex flex-col gap-5 h-full relative overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay }}
        >
            {/* Background glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(124,138,255,0.08), transparent 70%)' }} />

            {/* â”€â”€ Experience â”€â”€ */}
            <div>
                <p className="section-label"><Briefcase size={11} /> Experience</p>
                <div className="rounded-2xl p-4 relative overflow-hidden"
                    style={{
                        background: 'rgba(124,138,255,0.07)',
                        border: '1px solid rgba(124,138,255,0.25)',
                    }}>
                    {/* Google G glow */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full pointer-events-none"
                        style={{ background: 'radial-gradient(circle, rgba(66,133,244,0.25), transparent 70%)' }} />

                    <div className="flex items-start gap-3 relative z-10">
                        {/* Google icon */}
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-lg"
                            style={{
                                background: 'linear-gradient(135deg, #4285F4, #EA4335, #FBBC04, #34A853)',
                                backgroundSize: '200% 200%',
                                color: 'white',
                                boxShadow: '0 0 14px rgba(66,133,244,0.4)',
                            }}>
                            G
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                                <p className="font-bold text-sm" style={{ color: '#e2e8f8' }}>AI / ML Intern</p>
                                <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                                    style={{
                                        color: '#7CC4FF',
                                        background: 'rgba(124,196,255,0.10)',
                                        border: '1px solid rgba(124,196,255,0.28)',
                                    }}>
                                    2025
                                </span>
                            </div>
                            <p className="text-xs mt-0.5" style={{ color: '#A78BFF' }}>Google</p>
                            <p className="text-xs mt-2 leading-relaxed" style={{ color: 'rgba(150,160,190,0.75)' }}>
                                Hands-on AI/ML projects using Google's tooling, real-world data pipelines,
                                and practical machine learning applications.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* â”€â”€ Certifications â”€â”€ */}
            <div>
                <p className="section-label"><BadgeCheck size={11} /> Certifications</p>
                <div className="flex flex-col gap-2.5">
                    {certs.map((c, i) => (
                        <motion.div
                            key={c.title}
                            className="flex items-center gap-3 p-3 rounded-2xl"
                            style={{
                                background: c.bg,
                                border: `1px solid ${c.border}`,
                                transition: 'box-shadow 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 14px ${c.glow}`}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                            initial={{ opacity: 0, x: -14 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: delay + 0.15 + i * 0.09, duration: 0.4 }}
                        >
                            <BadgeCheck size={17} style={{ color: c.color, flexShrink: 0 }} />
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold leading-tight truncate" style={{ color: '#e2e8f8' }}>{c.title}</p>
                                <p className="text-xs mt-0.5" style={{ color: 'rgba(150,160,190,0.6)' }}>{c.issuer}</p>
                            </div>
                            <span className="verified-badge flex-shrink-0">âœ“ Verified</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
