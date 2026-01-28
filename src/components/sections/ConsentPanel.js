import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";

export default function ConsentPanel() {
  return (
    <section className="py-10">
      <Container>
        <SectionTitle
          title="신청 전 확인"
          subtitle="필수 안내사항 및 동의 항목은 상담 진행에 필요합니다."
        />

        <div className="rounded-3xl border bg-white p-5 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-secondary text-lg">안내</p>
          <ul className="list-disc pl-5 space-y-1 text-lg">
            <li>상담 결과는 개인 상황에 따라 달라질 수 있습니다.</li>
            <li>보험 상품의 보장 내용/보험료는 변동될 수 있습니다.</li>
            <li>필수 동의 미체크 시 상담 진행이 어렵습니다.</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
