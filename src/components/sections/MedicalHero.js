import Container from "../layout/Container";
import LeadForm from "./LeadForm";
import HeroImg from "../../assets/medical-hero.webp";

export default function MedicalHero() {
  return (
    <section id="medical" className="bg-white">
      <Container className="grid gap-8 py-24 lg:grid-cols-2 items-stretch">
        <div className="space-y-4 flex flex-col">
          <p className="inline-flex w-fit rounded-full bg-secondary/5 px-3 py-1 font-semibold text-secondary">
            굿리치 플러스 | 실비보험
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-secondary">
            의료비 지출에 대비하는
            <br />
            현실적인 보장
          </h1>

          <p className="text-gray-600 text-lg">
            일상 진료부터 입원까지 폭넓게 확인해보세요.
          </p>

          <div className="relative h-[360px] min-h-[360px] max-h-[360px] shrink-0">
            <img
              src={HeroImg}
              alt="실비보험 사진"
              className="h-full w-full rounded-2xl object-cover"
            />

            <a
              href="https://kr.freepik.com/free-photo/bunch-coins-arrangement-with-stethoscope_11433298.htm#fromView=search&page=1&position=5&uuid=580d7207-69e1-4735-8175-bc235654c199&query=%EB%B3%91%EC%9B%90%EB%B9%84+%EB%8F%88+%EC%A0%80%EC%B6%95"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 text-[10px] leading-none text-white/80 bg-black/30 px-1.5 py-[2px] rounded"
            >
              출처: freepik
            </a>
          </div>
        </div>

        <div className="h-full flex">
          <div className="w-full h-full">
            <div className="h-full rounded-2xl border bg-white p-5 shadow-sm flex flex-col justify-center">
              <LeadForm product="MEDICAL" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
