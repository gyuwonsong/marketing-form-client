import { motion } from "framer-motion";
import LeadForm from "../sections/LeadForm";
import DiagnosisHeroImg from "../../assets/diagnosis-hero.webp";

export default function DiagnosisHero() {
  return (
    <section
      className="relative bg-cover bg-center py-20 sm:py-28 overflow-hidden"
      style={{ backgroundImage: `url(${DiagnosisHeroImg})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <a
        href="https://kr.freepik.com/free-photo/wife-visiting-her-ill-husband_14603206.htm"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-2 text-[8px] sm:text-[10px] leading-none text-white/80 bg-black/30 px-1 py-[1px] rounded"
      >
        출처: freepik
      </a>

      <div className="relative container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center text-white px-4 sm:px-6">
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug sm:leading-tight"
          >
            내 보험,
            <br />
            <span className="text-main">제대로 가입</span>되어 있을까요?
          </motion.h1>

          <p className="text-lg text-gray-200">
            중복 보장, 부족한 보장, 갱신 부담까지 전문가가 구조를
            분석해드립니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 text-gray-200 justify-center lg:justify-start text-lg">
            <span>✔ 1분 신청</span>
            <span>✔ 무료 분석</span>
            <span>✔ 상담 전 비용 없음</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white text-black rounded-3xl shadow-2xl p-6 sm:p-8 mt-8 lg:mt-0"
        >
          <h3 className="text-xl sm:text-2xl font-extrabold mb-4 sm:mb-6 text-secondary text-center lg:text-left">
            무료 보험 분석 신청
          </h3>
          <LeadForm />
        </motion.div>
      </div>
    </section>
  );
}
