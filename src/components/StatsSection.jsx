import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "타 지역에서 오는 환자", value: "30% 이상" },
  { label: "2개월 만에 월 매출", value: "2배 증가" },
  { label: "한달에 온라인으로만 예약", value: "136건" },
];

const StatsSection = () => {
  return (
    <section className="section-padding bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-100 dark:bg-purple-900/10 rounded-full blur-[120px] -z-10" />

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-8 bg-white dark:bg-zinc-900/50 backdrop-blur-sm rounded-2xl text-center border border-gray-100 dark:border-white/10 hover:border-blue-500/50 transition-colors group shadow-lg dark:shadow-none"
            >
              <div className="text-gray-500 dark:text-gray-400 mb-4 font-medium">{stat.label}</div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 group-hover:scale-105 transition-transform duration-300">{stat.value}</div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            오로지 <span className="text-blue-600 dark:text-blue-500">성과</span>로 증명하기 때문입니다.
          </p>
          <div className="inline-block bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-white/10 px-8 py-6 rounded-2xl mt-4 max-w-2xl mx-auto">
            <p className="text-sm text-gray-500 mb-2">인터넷 검색으로만 찾아오는 환자의 비중</p>
            <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">병원 마케팅 회사를 창업한지 1년만에 초고속 성장</p>
          </div>
          <div className="mt-16 flex justify-center gap-16 text-center">
            <div>
              <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">50<span className="text-blue-600 dark:text-blue-500 text-3xl">+</span></div>
              <div className="text-gray-500 text-sm tracking-widest uppercase">Partners</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">94.7<span className="text-blue-600 dark:text-blue-500 text-3xl">%</span></div>
              <div className="text-gray-500 text-sm tracking-widest uppercase">Retention</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
