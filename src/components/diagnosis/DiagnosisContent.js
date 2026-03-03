import { motion } from "framer-motion";
import {
  Shapes,
  ClipboardCheck,
  Frown,
  CalendarSync,
  ShieldCheck,
} from "lucide-react";
import Container from "../layout/Container";
import ScoreGauge from "./ScoreGauge";
import DetailedComparisonTable from "./DetailedComparisonTable";
import HoverCard from "../common/HoverCard";
import Button from "../common/Button";

export default function DiagnosisContent() {
  return (
    <section className="bg-white">
      <Container className="space-y-20 sm:space-y-32 py-16 sm:py-28 px-4 sm:px-6">
        <section>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-secondary mb-12 sm:mb-16">
            실제 보험 리모델링 사례
          </h2>
          <DetailedComparisonTable />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary mb-4 sm:mb-6">
              보험 보장 점수 개선
            </h3>
            <p className="text-lg md:text-xl text-gray-600">
              과보장과 공백 보장을 정리하고, 핵심 보장 위주로 구조를
              재설계합니다.
            </p>
          </div>

          <div className="relative h-56 sm:h-64 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <ScoreGauge from={62} to={89} />
            </motion.div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-secondary mb-12 sm:mb-16">
            이런 분께 필요합니다
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="max-w-xl sm:max-w-3xl mx-auto space-y-4 sm:space-y-6"
          >
            {[
              { icon: Shapes, text: "보험이 여러 개인데 구조가 복잡한 경우" },
              {
                icon: ClipboardCheck,
                text: "보장이 부족한지 확인하고 싶은 경우",
              },
              { icon: Frown, text: "중복 특약이 의심되는 경우" },
              { icon: CalendarSync, text: "갱신형 보험이 부담되는 경우" },
            ].map((item, idx) => (
              <HoverCard key={idx} icon={item.icon} text={item.text} />
            ))}
          </motion.div>
        </section>

        <section>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-secondary mb-12 sm:mb-20">
            분석 진행 절차
          </h2>

          <div className="max-w-full sm:max-w-lg md:max-w-xl mx-auto px-4 sm:px-0">
            <div className="space-y-8 sm:space-y-12">
              {[
                "보험 가입 내역 확인 - 현재 보장 현황 점검",
                "보장 구조 분석 및 점수 산출 - 객관적 진단 진행",
                "개선안 제안 및 상담 진행 - 맞춤 보장 설계",
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 sm:gap-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-4 border-main flex items-center justify-center shrink-0">
                    <span className="font-bold text-main text-lg sm:text-xl">
                      {idx + 1}
                    </span>
                  </div>

                  <p className="text-xl font-semibold text-gray-600 leading-snug">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>

      <section className="bg-gradient-to-b from-secondary/90 to-[#1f2a44]/90 text-white text-center py-16 sm:py-28 px-4">
        <div className="max-w-xl sm:max-w-3xl mx-auto">
          <ShieldCheck size={36} className="mx-auto mb-6 sm:mb-8 opacity-90" />
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 leading-snug">
            내 보험, 지금 점검해보세요
          </h3>
          <p className="text-xl text-gray-300 mb-8 sm:mb-10">
            1분 신청으로 전문가 무료 분석 연결
          </p>
          <Button
            className="!text-xl px-6 sm:px-10 py-4 sm:py-6 shadow-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            무료 분석 신청하기
          </Button>
        </div>
      </section>
    </section>
  );
}
