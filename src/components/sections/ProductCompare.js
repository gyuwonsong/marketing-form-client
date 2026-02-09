import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

const PRODUCT_COMPARE_CONFIG = {
  CAREGIVER: {
    title: "보험사별 간병보험 비교",
    targetId: "caregiver",
    items: [
      {
        id: "A",
        company: "보험사 A",
        desc: "기본형 / 표준 보장",
        price: "월 2~3만원대",
      },
      {
        id: "B",
        company: "보험사 B",
        desc: "확장형 / 치매 특화",
        price: "월 3~4만원대",
      },
      {
        id: "C",
        company: "보험사 C",
        desc: "프리미엄 / 간병 강화",
        price: "월 4~5만원대",
      },
    ],
  },

  CHILD: {
    title: "보험사별 어린이보험 비교",
    targetId: "child",
    items: [
      {
        id: "A",
        company: "보험사 A",
        desc: "기본형 / 입원·수술 중심",
        price: "월 2~3만원대",
      },
      {
        id: "B",
        company: "보험사 B",
        desc: "확장형 / 상해·골절 강화",
        price: "월 3~4만원대",
      },
      {
        id: "C",
        company: "보험사 C",
        desc: "프리미엄 / 진단비·특약 강화",
        price: "월 4~5만원대",
      },
    ],
  },

  FETUS: {
    title: "보험사별 태아보험 비교",
    targetId: "fetus",
    items: [
      {
        id: "A",
        company: "보험사 A",
        desc: "기본형 / 출생·입원 중심",
        price: "월 2~3만원대",
      },
      {
        id: "B",
        company: "보험사 B",
        desc: "확장형 / 선천·질환 특약",
        price: "월 3~4만원대",
      },
      {
        id: "C",
        company: "보험사 C",
        desc: "프리미엄 / 종합 특약 강화",
        price: "월 4~5만원대",
      },
    ],
  },

  CANCER: {
    title: "보험사별 암보험 비교",
    targetId: "cancer",
    items: [
      {
        id: "A",
        company: "보험사 A",
        desc: "기본형 / 진단비 중심",
        price: "월 2~3만원대",
      },
      {
        id: "B",
        company: "보험사 B",
        desc: "확장형 / 수술·입원 강화",
        price: "월 3~4만원대",
      },
      {
        id: "C",
        company: "보험사 C",
        desc: "프리미엄 / 종합 진단비·특약",
        price: "월 4~5만원대",
      },
    ],
  },

  HEALTH: {
    title: "보험사별 종합건강보험 비교",
    targetId: "health",
    items: [
      {
        id: "A",
        company: "보험사 A",
        desc: "기본형 / 주요 질환 중심",
        price: "월 2~3만원대",
      },
      {
        id: "B",
        company: "보험사 B",
        desc: "확장형 / 입원·수술 강화",
        price: "월 3~4만원대",
      },
      {
        id: "C",
        company: "보험사 C",
        desc: "프리미엄 / 종합 특약 구성",
        price: "월 4~5만원대",
      },
    ],
  },

  SIMPLE: {
    title: "보험사별 간편보험 비교",
    targetId: "simple",
    items: [
      {
        id: "A",
        company: "보험사 A",
        desc: "기본형 / 간편심사 중심",
        price: "월 2~3만원대",
      },
      {
        id: "B",
        company: "보험사 B",
        desc: "확장형 / 보장 범위 강화",
        price: "월 3~4만원대",
      },
      {
        id: "C",
        company: "보험사 C",
        desc: "프리미엄 / 종합 특약 구성",
        price: "월 4~5만원대",
      },
    ],
  },

  MEDICAL: {
    title: "보험사별 실비보험 비교",
    targetId: "medical",
    items: [
      {
        id: "A",
        company: "보험사 A",
        desc: "기본형 / 표준 실손",
        price: "월 1~2만원대",
      },
      {
        id: "B",
        company: "보험사 B",
        desc: "확장형 / 특약 선택형",
        price: "월 2~3만원대",
      },
      {
        id: "C",
        company: "보험사 C",
        desc: "프리미엄 / 특약 구성 강화",
        price: "월 3~4만원대",
      },
    ],
  },

  YOUTH: {
    title: "보험사별 청년보험 비교",
    targetId: "youth",
    items: [
      {
        id: "A",
        company: "보험사 A",
        desc: "기본형 / 핵심 보장 중심",
        price: "월 1~2만원대",
      },
      {
        id: "B",
        company: "보험사 B",
        desc: "확장형 / 특약 선택 강화",
        price: "월 2~3만원대",
      },
      {
        id: "C",
        company: "보험사 C",
        desc: "프리미엄 / 종합 보장 구성",
        price: "월 3~4만원대",
      },
    ],
  },

  DEMENTIA_CARE: {
    title: "보험사별 치매간병보험 비교",
    targetId: "dementia-care",
    items: [
      {
        id: "A",
        company: "보험사 A",
        desc: "기본형 / 치매 진단 중심",
        price: "월 2~3만원대",
      },
      {
        id: "B",
        company: "보험사 B",
        desc: "확장형 / 간병·생활지원 강화",
        price: "월 3~4만원대",
      },
      {
        id: "C",
        company: "보험사 C",
        desc: "프리미엄 / 종합 특약 구성",
        price: "월 4~5만원대",
      },
    ],
  },
};

export default function ProductCompare({ variant = "CAREGIVER" }) {
  const config =
    PRODUCT_COMPARE_CONFIG[variant] || PRODUCT_COMPARE_CONFIG.CAREGIVER;
  const { title, targetId, items } = config;

  const subtitle = "대표 플랜 예시이며, 자세한 설계는 상담을 통해 안내됩니다.";

  return (
    <section className="py-10">
      <Container>
        <SectionTitle title={title} subtitle={subtitle} />

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.id}
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xl font-extrabold text-secondary">
                    {it.company}
                  </p>
                  <p className="mt-1 text-lg text-gray-600">{it.desc}</p>
                </div>
                <span className="rounded-full bg-main/10 px-3 py-1 font-bold text-main">
                  추천
                </span>
              </div>

              <div className="mt-4 rounded-xl bg-gray-50 p-3">
                <p className="text-gray-500">예상 보험료</p>
                <p className="text-lg font-extrabold text-secondary">
                  {it.price}
                </p>
              </div>

              <Button
                variant="main"
                className="mt-4 w-full"
                onClick={() => {
                  const el = document.querySelector(`#${targetId}`);
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                상담 신청하기
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
