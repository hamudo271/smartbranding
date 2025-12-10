import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, XCircle } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="section-padding bg-gray-50 dark:bg-black text-white relative overflow-hidden transition-colors duration-300">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-gray-900 dark:text-white">
            양아치 대행사들이 넘치는 이 판에서<br />
            스마트브랜딩이 초고속 성장 할 수 있었던 이유는<br />
            <span className="text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">본질에 집중했기 때문입니다.</span>
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            화려한 말발보다 확실한 성과로 증명합니다.
          </p>
        </motion.div>
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: The Problem */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-zinc-900/50 backdrop-blur-md p-10 rounded-3xl border border-gray-200 dark:border-white/10 hover:border-red-500/30 transition-all shadow-xl dark:shadow-none"
          >
            <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-8 text-red-500">
              <XCircle size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">"어떤 병원에 가시겠습니까?"</h4>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              많은 대행사들은 노출만을 강조합니다. 하지만 설득되지 않는 글을 보며 방문하는 환자는 없습니다.
              오히려 낮은 퀄리티의 콘텐츠는 병원 이미지를 망칩니다.
            </p>
          </motion.div>

          {/* Card 2: The Solution */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-blue-600 dark:bg-zinc-900/80 backdrop-blur-md p-10 rounded-3xl border border-blue-500 dark:border-blue-500/50 hover:border-blue-400 transition-all shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            
            <div className="w-14 h-14 bg-white/20 dark:bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 text-white dark:text-blue-400">
              <TrendingUp size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white">노출과 전환율,<br/>두 마리 토끼</h4>
            <p className="text-blue-100 dark:text-gray-300 leading-relaxed mb-6">
              스마트브랜딩은 자사만의 높은 기술력으로 상위노출을 보장하며, 
              원장님의 진정성 있는 스토리를 담아 환자의 마음을 움직입니다.
            </p>
          </motion.div>

          {/* Card 3: The Promise */}
          <motion.div 
             whileHover={{ y: -10 }}
             className="bg-white dark:bg-zinc-900/50 backdrop-blur-md p-10 rounded-3xl border border-gray-200 dark:border-white/10 hover:border-green-500/30 transition-all shadow-xl dark:shadow-none"
          >
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-8 text-green-600 dark:text-green-500">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">절대 원칙</h4>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              저가형 공장식 콘텐츠 따위는 절대 취급하지 않습니다.
              <br/><br/>
              <span className="font-bold text-gray-900 dark:text-white">오직 우리 병원만의 차별화된 가치</span>를 찾아내어 명품 브랜드로 만들어드립니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
