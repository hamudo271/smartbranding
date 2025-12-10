import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection = () => {
  return (
    <section className="section-padding bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white leading-relaxed">
            여러 이유가 있었지만,<br />
            결국 핵심은 <span className="text-red-500">매출성과가 없다</span>는 것이었습니다.
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            이렇게 말씀하셨던 원장님들이<br />
            <span className="font-bold text-gray-900 dark:text-white">스마트브랜딩을 선택한 이유는 무엇일까요?</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
