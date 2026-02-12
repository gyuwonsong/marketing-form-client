import Container from "../layout/Container";
import LeadForm from "./LeadForm";
import HeroImg from "../../assets/youth-hero.webp";

export default function YouthHero() {
  return (
    <section id="youth" className="bg-white">
      <Container className="grid gap-8 py-24 lg:grid-cols-2 items-stretch">
        <div className="space-y-4 flex flex-col">
          <p className="inline-flex w-fit rounded-full bg-secondary/5 px-3 py-1 font-semibold text-secondary">
            굿리치 플러스 | 청년보험
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-secondary">
            지금부터 시작하는
            <br />
            청년 보장 준비
          </h1>

          <p className="text-gray-600 text-lg">
            청년에게 꼭 맞춘 보장과 보험료를 확인해보세요.
          </p>

          <div className="relative h-[360px] min-h-[360px] max-h-[360px] shrink-0">
            <img
              src={HeroImg}
              alt="청년보험 사진"
              className="h-full w-full rounded-2xl object-cover"
            />

            <a
              href="https://kr.freepik.com/free-photo/multiethnic-group-young-students_7730655.htm#fromView=search&page=1&position=10&uuid=bc5086dc-fb1a-436d-a5e0-66204efd822f&query=%ED%95%99%EA%B5%90+%EB%8B%A4%EB%8B%88%EB%8A%94+%EC%B2%AD%EB%85%84%EB%93%A4"
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
              <LeadForm product="YOUTH" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
