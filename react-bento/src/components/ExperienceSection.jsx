import { motion } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';
import { useRealtimeData } from '../hooks/useRealtimeData';
import { forceDownload } from '../utils/downloadUtils';

export default function ExperienceSection() {
    const [experiences] = useRealtimeData('certifications');
    return (
        <section id="experience" className="section-container relative z-10 transition-colors">
            <h2 className="section-heading dark:text-white transition-colors">
                Experience & <span className="heading-highlight">Certifications</span>
            </h2>
            <p className="section-subheading">
                My professional journey, internships, and verified credentials.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="ouali-card p-8 flex flex-col group relative overflow-hidden"
                    >
                        {/* Subtle background decoration */}
                        <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-5 dark:opacity-10 group-hover:scale-150 transition-transform duration-700 ${exp.type === 'internship' ? 'bg-blue-500' : 'bg-brand-orange'}`} />

                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md bg-brand-orange`}>
                                <Award size={20} />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-brand-gray dark:text-gray-400 uppercase tracking-wider transition-colors">
                                    Verified Certification
                                </span>
                                <p className="text-sm font-bold text-brand-orange">{exp.year}</p>
                            </div>
                        </div>

                        <h3 className="text-xl font-black text-brand-dark dark:text-white mb-3 relative z-10 transition-colors">
                            {exp.name}
                        </h3>

                        <p className="text-sm text-brand-gray dark:text-gray-400 leading-relaxed font-medium relative z-10 transition-colors">
                            {exp.issuer}
                        </p>

                        {exp.certificateUrl && (
                            <button
                                onClick={() => forceDownload(exp.certificateUrl, `${exp.name}_Certificate.pdf`)}
                                className="mt-4 flex items-center justify-center gap-2 p-3 rounded-xl bg-orange-50 text-orange-600 font-bold hover:bg-orange-100 transition-colors z-20 relative text-sm w-full cursor-pointer"
                            >
                                <Award size={16} /> View Certificate
                            </button>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
