import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

const CAREGIVER = [
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
];

const CHILD = [
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
];

export default function ProductCompare({ variant = "CAREGIVER" }) {
  const isChild = variant === "CHILD";

  const title = isChild ? "보험사별 어린이보험 비교" : "보험사별 간병보험 비교";
  const subtitle = "대표 플랜 예시이며, 자세한 설계는 상담을 통해 안내됩니다.";
  const items = isChild ? CHILD : CAREGIVER;
  const targetId = isChild ? "CHILD" : "CAREGIVER";

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
