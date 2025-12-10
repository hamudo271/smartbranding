import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[150px] -z-10" />
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-blue-600 dark:text-blue-400 font-bold mb-8 text-xl tracking-widest uppercase">Smart Branding Inquiry</h2>
          <h1 className="text-5xl md:text-8xl font-bold leading-tight text-gray-900 dark:text-white mb-10 tracking-tight">
            원장님. 지난 마케팅 회사에<br />
            <span className="text-gray-400 dark:text-gray-600">왜 실망하셨나요?</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            "소통이 제대로 되지 않아요..."<br />
            "콘텐츠를 공장식으로 찍어내요..."
          </p>
        </motion.div>
      </div>
    </section>
  );
};


export default Hero;
