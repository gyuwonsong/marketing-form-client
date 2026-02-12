import Container from "../layout/Container";
import LeadForm from "./LeadForm";
import HeroImg from "../../assets/simple-hero.webp";

export default function SimpleHero() {
  return (
    <section id="simple" className="bg-white">
      <Container className="grid gap-8 py-24 lg:grid-cols-2 items-stretch">
        <div className="space-y-4 flex flex-col">
          <p className="inline-flex w-fit rounded-full bg-secondary/5 px-3 py-1 font-semibold text-secondary">
            굿리치 플러스 | 간편보험
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-secondary">
            절차 부담을 낮춰
            <br />
            시작하는 보험 안내
          </h1>

          <p className="text-gray-600 text-lg">
            비교적 간단한 과정으로 보장을 준비할 수 있어요.
          </p>

          <div className="relative h-[360px] min-h-[360px] max-h-[360px] shrink-0">
            <img
              src={HeroImg}
              alt="간편보험 사진"
              className="h-full w-full rounded-2xl object-cover"
            />

            <a
              href="https://www.freepik.com/free-photo/filling-medical-history_5535615.htm#fromView=image_search&page=1&position=0&uuid=768c2ad1-8d22-405e-a195-af91e94af413"
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
              <LeadForm product="SIMPLE" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
