import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const certs = [
    {
        title: 'Google AI/ML Internship',
        issuer: 'Google',
        year: '2025',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        title: 'Oracle Cloud Infrastructure',
        issuer: 'Oracle',
        year: '2024',
        color: 'text-orange-600',
        bg: 'bg-orange-50',
    },
    {
        title: 'Salesforce Agentforce Specialist',
        issuer: 'Salesforce',
        year: '2024',
        color: 'text-sky-600',
        bg: 'bg-sky-50',
    },
];

export default function CertificationsCard({ delay = 0 }) {
    return (
        <motion.div
            className="bento-card p-6 flex flex-col gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay }}
        >
            <div className="flex items-center gap-2">
                <BadgeCheck className="text-lavender-600" size={20} />
                <h2 className="font-bold text-gray-800 text-base">Certifications</h2>
            </div>

            <div className="flex flex-col gap-3">
                {certs.map((cert, i) => (
                    <motion.div
                        key={cert.title}
                        className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-lavender-100 hover:border-lavender-400 transition-colors duration-200"
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: delay + 0.1 * i, duration: 0.4 }}
                    >
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${cert.bg}`}>
                            <BadgeCheck className={cert.color} size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-800 leading-tight truncate">
                                {cert.title}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">{cert.issuer} Â· {cert.year}</p>
                        </div>
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex-shrink-0">
                            Verified
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
