import Container from "../layout/Container";
import LeadForm from "./LeadForm";
import HeroImg from "../../assets/dementia-care-hero.webp";

export default function DementiaCareHero() {
  return (
    <section id="dementia-care" className="bg-white">
      <Container className="grid gap-8 py-24 lg:grid-cols-2 items-stretch">
        <div className="space-y-4 flex flex-col">
          <p className="inline-flex w-fit rounded-full bg-secondary/5 px-3 py-1 font-semibold text-secondary">
            굿리치 플러스 | 치매간병보험
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-secondary">
            돌봄이 길어질 상황까지
            <br />
            대비하는 준비
          </h1>

          <p className="text-gray-600 text-lg">
            노후의 생활과 돌봄 부담을 고려해 보장을 살펴보세요.
          </p>

          <div className="relative h-[360px] min-h-[360px] max-h-[360px] shrink-0">
            <img
              src={HeroImg}
              alt="치매간병보험 사진"
              className="h-full w-full rounded-2xl object-cover"
            />

            <a
              href="https://kr.freepik.com/free-photo/female-patients-talking-hospital_14603232.htm#fromView=search&page=1&position=12&uuid=d59ecef4-4c65-428d-87b8-63e7a67df65e&query=%EC%B9%98%EB%A7%A4%ED%99%98%EC%9E%90+%EA%B0%84%EB%B3%91"
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
              <LeadForm product="DEMENTIA_CARE" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
