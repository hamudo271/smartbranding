import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 dark:text-gray-500 py-16 border-t border-gray-800 dark:border-white/5 transition-colors duration-300">
      <div className="container-custom text-sm">
        <div className="mb-12">
          <h4 className="text-white font-bold text-lg mb-6 tracking-tight">SMART BRANDING</h4>
          <div className="space-y-3 font-light">
            <p>상호명: 에스비컴퍼니 <span className="mx-2 text-gray-600 dark:text-gray-700">|</span> 대표이사 : 최형기</p>
            <p>사업자등록번호 : 676-35-01583</p>
            <p>경기도 남양주시 순화궁로 249, m동 6층 608호 파라곤스퀘어</p>
            <p>문의 : smartbranding@naver.com</p>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 dark:border-white/5 text-xs text-gray-500 dark:text-gray-600 flex justify-between items-center">
          <p>2024 SMART BRANDING COMPANY. ALL RIGHTS RESERVED.</p>
          <p className="opacity-50">Designed by Univerlab Style</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
