import Container from "../layout/Container";
import LeadForm from "./LeadForm";
import HeroImg from "../../assets/health-hero.webp";

export default function HealthHero() {
  return (
    <section id="health" className="bg-white">
      <Container className="grid gap-8 py-24 lg:grid-cols-2 items-stretch">
        <div className="space-y-4 flex flex-col">
          <p className="inline-flex w-fit rounded-full bg-secondary/5 px-3 py-1 font-semibold text-secondary">
            굿리치 플러스 | 종합건강보험
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-secondary">
            일상 질환부터 중대 질환까지
            <br />
            폭넓게 대비하는 건강 보장
          </h1>

          <p className="text-gray-600 text-lg">
            생활 속 의료비 부담을 줄일 수 있는 구성을 살펴보세요.
          </p>

          <div className="relative h-[360px] min-h-[360px] max-h-[360px] shrink-0">
            <img
              src={HeroImg}
              alt="종합건강보험 사험진"
              className="h-full w-full rounded-2xl object-cover"
            />

            <a
              href="https://kr.freepik.com/free-photo/general-practitioner-putting-his-stamp-prescription-document_415453556.htm#fromView=search&page=4&position=1&uuid=5140ab78-88c8-43ea-a9f7-fae7143344b7&query=%EC%9D%98%EB%A3%8C"
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
              <LeadForm product="HEALTH" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
