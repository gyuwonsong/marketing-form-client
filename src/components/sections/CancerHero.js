import Container from "../layout/Container";
import LeadForm from "./LeadForm";
import HeroImg from "../../assets/cancer-hero.webp";

export default function CancerHero() {
  return (
    <section id="cancer" className="bg-white">
      <Container className="grid gap-8 py-24 lg:grid-cols-2 items-stretch">
        <div className="space-y-4 flex flex-col">
          <p className="inline-flex w-fit rounded-full bg-secondary/5 px-3 py-1 font-semibold text-secondary">
            굿리치 플러스 | 암보험
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-secondary md:text-4xl">
            암 진단 이후
            <br />
            치료 여정을 고려한 보장 준비
          </h1>

          <p className="text-gray-600 text-lg">
            필요한 보장 구성을 차분히 확인해보세요.
          </p>

          <div className="relative h-[360px] min-h-[360px] max-h-[360px] shrink-0">
            <img
              src={HeroImg}
              alt="암보험 사험진"
              className="h-full w-full rounded-2xl object-cover"
            />

            <a
              href="https://kr.freepik.com/free-photo/daughter-holding-her-mothers-hand-hospital_18642290.htm#fromView=search&page=1&position=1&uuid=ecb59d76-2a41-40ed-89c5-bc487f4f62fc&query=%EC%95%94%ED%99%98%EC%9E%90"
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
              <LeadForm product="CANCER" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
