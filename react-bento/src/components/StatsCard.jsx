import { motion } from 'framer-motion';
import { Github, Code2, Star, GitFork } from 'lucide-react';

export default function StatsCard({ delay = 0 }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {/* GitHub Card */}
            <motion.a
                href="https://github.com/Santhosh323454"
                target="_blank"
                rel="noreferrer"
                className="bento-card p-5 flex flex-col gap-3 cursor-pointer no-underline group"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay }}
            >
                <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-gray-900 flex items-center justify-center">
                        <Github size={20} className="text-white" />
                    </div>
                    <span className="text-xs text-gray-400 font-medium">@Santhosh323454</span>
                </div>
                <div>
                    <p className="font-bold text-gray-800 text-sm group-hover:text-lavender-600 transition-colors">GitHub Profile</p>
                    <p className="text-xs text-gray-400 mt-0.5">Explore repositories &amp; contributions</p>
                </div>
                <div className="flex gap-3 mt-auto">
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                        <Star size={11} className="text-yellow-500" /> Projects
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                        <GitFork size={11} className="text-lavender-600" /> Open Source
                    </span>
                </div>
            </motion.a>

            {/* LeetCode Card */}
            <motion.a
                href="https://leetcode.com/santhosh_323"
                target="_blank"
                rel="noreferrer"
                className="bento-card p-5 flex flex-col gap-3 cursor-pointer no-underline group"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: delay + 0.08 }}
            >
                <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center">
                        <Code2 size={20} className="text-white" />
                    </div>
                    <span className="text-xs text-gray-400 font-medium">@santhosh_323</span>
                </div>
                <div>
                    <p className="font-bold text-gray-800 text-sm group-hover:text-orange-500 transition-colors">LeetCode</p>
                    <p className="text-xs text-gray-400 mt-0.5">DSA problem solving &amp; contests</p>
                </div>
                <div className="flex gap-3 mt-auto">
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                        <Star size={11} className="text-orange-400" /> Problems Solved
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                        <Code2 size={11} className="text-orange-500" /> Algorithms
                    </span>
                </div>
            </motion.a>
        </div>
    );
}
