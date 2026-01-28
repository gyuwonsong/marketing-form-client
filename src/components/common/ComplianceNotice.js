import Container from "../layout/Container";
import SectionTitle from "./SectionTitle";

export default function ComplianceNotice() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionTitle title="가입 시 유의사항" />

        <div className="space-y-10">
          <ul className="space-y-2 text-lg font-semibold text-secondary">
            <li>
              · 위의 글은 굿리치(주)대리점으로부터 소정의 광고비(원고료 등)를
              지급 받아 작성하였습니다
            </li>
            <li>
              · 상기 내용은 굿리치(주)대리점의 의견이며, 계약 체결에 따른 이익
              또는 손실은 보험계약자 등에게 귀속됩니다.
            </li>
          </ul>

          <div className="space-y-2">
            <p className="font-bold text-secondary">
              보험계약자가 기존 보험계약을 해지하고 새로운 보험계약을 체결하는
              과정에서
            </p>

            <div className="space-y-1 text-2xl font-extrabold text-[#E5542E]">
              <p>
                ① 질병이력, 연령증가 등으로 가입이 거절되거나 보험료가 인상될 수
                있습니다.
              </p>
              <p>
                ② 가입 상품에 따라 새로운 면책기간 적용 및 보장 제한 등 기타
                불이익이 발생할 수 있습니다.
              </p>
            </div>
          </div>

          <div className="space-y-2 text-lg text-gray-500">
            <p>· 굿리치(주)보험대리점(협회 등록번호: 제 ####호)</p>
            <p>
              · 본 광고는 광고심의 기준을 준수하였으며, 유효기간은 심의일로부터
              1년입니다.
            </p>
            <p>· 리치-준법-####-광고 (YYYY-MM-DD~YYYY-MM-DD)</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
