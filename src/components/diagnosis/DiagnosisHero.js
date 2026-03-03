import { motion } from "framer-motion";
import LeadForm from "../sections/LeadForm";
import DiagnosisHeroImg from "../../assets/diagnosis-hero.webp";

export default function DiagnosisHero() {
  return (
    <section
      className="relative bg-cover bg-center py-28 overflow-hidden"
      style={{ backgroundImage: `url(${DiagnosisHeroImg})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <a
        href="https://kr.freepik.com/free-photo/wife-visiting-her-ill-husband_14603206.htm"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 text-[10px] leading-none text-white/80 bg-black/30 px-1.5 py-[2px] rounded"
      >
        출처: freepik
      </a>

      <div className="relative container mx-auto grid lg:grid-cols-2 gap-16 items-center text-white">
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold leading-tight"
          >
            내 보험,
            <br />
            <span className="text-main">제대로 가입</span>되어 있을까요?
          </motion.h1>

          <p className="text-xl text-gray-200">
            중복 보장, 부족한 보장, 갱신 부담까지 전문가가 구조를
            분석해드립니다.
          </p>

          <div className="flex gap-8 text-gray-200">
            <span>✔ 1분 신청</span>
            <span>✔ 무료 분석</span>
            <span>✔ 상담 전 비용 없음</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white text-black rounded-3xl shadow-2xl p-8"
        >
          <h3 className="text-2xl font-extrabold mb-6 text-secondary">
            무료 보험 분석 신청
          </h3>
          <LeadForm />
        </motion.div>
      </div>
    </section>
  );
}
