import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { text: "저희 블로그 보고 내원해주시는 고객님들이 제법 많네요^^", author: "강남 A성형외과 원장님", date: "2024.03.15" },
  { text: "어제도 블로그 보고 오셨다는 분이 계셨습니다^^", author: "서초 B피부과 원장님", date: "2024.03.12" },
  { text: "요즘 블로그 보고 많이들 방문하세요!", author: "분당 C치과 원장님", date: "2024.03.10" },
  { text: "오늘도 블로그 보고 신환이 오셨더라구요!", author: "송파 D한의원 원장님", date: "2024.03.08" },
  { text: "네이버 예약이 늘었습니다.", author: "마포 E정형외과 원장님", date: "2024.03.05" },
  { text: "매출이 2배 가까이 올랐습니다.", author: "수원 F안과 원장님", date: "2024.03.01" },
  { text: "보기도 편하고 신뢰가 갑니다.", author: "일산 G통증의학과 원장님", date: "2024.02.28" },
  { text: "개원 후 이렇게 올라간적은 처음입니다.", author: "부산 H성형외과 원장님", date: "2024.02.25" },
  { text: "마케팅 하나 바꿨을 뿐인데 문의가 폭주하네요.", author: "대구 I피부과 원장님", date: "2024.02.20" },
  { text: "진작에 스마트브랜딩을 알았더라면 좋았을 텐데요.", author: "광주 J치과 원장님", date: "2024.02.15" },
  { text: "환자분들이 블로그 글이 너무 좋다고 하십니다.", author: "대전 K한의원 원장님", date: "2024.02.10" },
  { text: "다른 대행사와는 확실히 퀄리티가 다릅니다.", author: "인천 L정형외과 원장님", date: "2024.02.05" }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-white/5 overflow-hidden transition-colors duration-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-blue-50 dark:bg-transparent dark:bg-gradient-to-br dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-16 mb-24 border border-blue-100 dark:border-white/10 relative"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full -z-10" />

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-blue-200 dark:bg-blue-600 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-white text-2xl shadow-lg shadow-blue-600/10 dark:shadow-blue-600/30">C</div>
              <div>
                <div className="font-bold text-gray-900 dark:text-white text-2xl">경기도 소재 C병원</div>
                <div className="text-base text-blue-600 dark:text-blue-400 font-medium">원장님 인터뷰</div>
              </div>
            </div>
            <p className="text-2xl md:text-4xl text-gray-700 dark:text-gray-200 leading-relaxed font-light tracking-tight">
              "저가형 공장식 대행사에 마케팅을 맡겼다가 불만이 생겼던 와중, 스마트브랜딩을 만나게 되었습니다.
              함께하게 된지 얼마 지나지 않아 <span className="font-bold text-blue-600 dark:text-blue-400">매출이 늘기 시작하더니, 결국 2배까지 성장</span>하게 되었습니다.
              스마트브랜딩을 만나고 나서야 ‘아, 마케팅은 이런거구나’하고 깨달았습니다. 감사합니다 대표님."
            </p>
          </div>
        </motion.div>

        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">이 뿐만이 아닙니다.</h3>
          <p className="text-xl text-gray-500 dark:text-gray-400">매달 수많은 원장님들의 실제 후기가 쏟아집니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-zinc-900 hover:border-blue-500/50 hover:shadow-xl dark:hover:shadow-blue-900/10 transition-all duration-300 group"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-white/5">
                <span className="text-sm font-bold text-gray-900 dark:text-white">{review.author}</span>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-600/20 rounded-full blur-[100px] -z-10" />
           
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
            원장님은 <span className="text-blue-600 dark:text-blue-500">진료</span>에만 집중하세요.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16">
            환자들이 찾아오게 만드는 일, 우리가 가장 잘하는 일입니다.
          </p>
          
          <div className="bg-white/80 dark:bg-black/50 backdrop-blur-md border border-gray-200 dark:border-white/10 p-10 rounded-3xl max-w-2xl mx-auto mb-16">
            <p className="font-bold text-gray-900 dark:text-white text-lg mb-3">죄송합니다. 문의를 주셔도 진행이 어려울 수 있습니다.</p>
            <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed">
              분야별 / 지역별 한 곳의 병원만 도움을 드리며,<br />
              TO가 꽉 찬 지역의 경우 진행이 불가한 점 양해 부탁드립니다.
            </p>
          </div>

          <button className="bg-gray-900 text-white dark:bg-white dark:text-black px-16 py-5 rounded-full text-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-xl dark:shadow-[0_0_30px_rgba(255,255,255,0.3)] transform hover:-translate-y-1">
            문의하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
