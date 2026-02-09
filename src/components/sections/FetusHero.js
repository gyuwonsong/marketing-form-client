import Container from "../layout/Container";
import LeadForm from "./LeadForm";
import HeroImg from "../../assets/fetus-hero.jpg";

export default function FetusHero() {
  return (
    <section id="fetus" className="bg-white">
      <Container className="grid gap-8 py-24 lg:grid-cols-2 items-stretch">
        <div className="space-y-4 flex flex-col">
          <p className="inline-flex w-fit rounded-full bg-secondary/5 px-3 py-1 font-semibold text-secondary">
            굿리치 플러스 | 태아보험
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-secondary md:text-4xl">
            태아보험으로
            <br />
            출산 전부터 든든하게 준비
          </h1>

          <p className="text-gray-600 text-lg">
            우리 아이에게 필요한 보장 구성과 보험료를 간편하게 확인해보세요.
          </p>

          <div className="relative h-[360px] min-h-[360px] max-h-[360px] shrink-0">
            <img
              src={HeroImg}
              alt="태아보험 사진"
              className="h-full w-full rounded-2xl object-cover"
            />

            <a
              href="https://www.freepik.com/free-photo/pregnant-woman-standing-by-window-looking-photo_13551941.htm#fromView=image_search&page=1&position=0&uuid=f9040c6f-8da5-41ba-8f72-97c44fca11e5"
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
              <LeadForm product="FETUS" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
