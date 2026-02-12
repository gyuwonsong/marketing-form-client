import Container from "../layout/Container";
import LeadForm from "./LeadForm";
import HeroImg from "../../assets/child-hero.webp";

export default function ChildHero() {
  return (
    <section id="child" className="bg-white">
      <Container className="grid gap-8 py-24 lg:grid-cols-2 items-stretch">
        <div className="space-y-4 flex flex-col">
          <p className="inline-flex w-fit rounded-full bg-secondary/5 px-3 py-1 font-semibold text-secondary">
            굿리치 플러스 | 어린이보험
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-secondary md:text-4xl">
            어린이보험으로
            <br />
            성장 단계별 든든한 대비
          </h1>

          <p className="text-gray-600 text-lg">
            우리 아이에게 맞는 보장 구성과 보험료를 간편하게 비교해보세요.
          </p>

          <div className="relative h-[360px] min-h-[360px] max-h-[360px] shrink-0">
            <img
              src={HeroImg}
              alt="어린이보험 사진"
              className="h-full w-full rounded-2xl object-cover"
            />

            <a
              href="https://www.freepik.com/free-ai-image/kid-playing-with-paper-plane_209492334.htm"
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
              <LeadForm product="CHILD" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
