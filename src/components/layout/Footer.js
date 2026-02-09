import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t">
      <Container className="py-10 space-y-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm font-bold text-secondary">무료전화상담</p>
            <a
              className="mt-2 inline-block text-2xl font-extrabold text-secondary"
              href="tel:1566-3611"
            >
              1566-3611
            </a>
            <p className="mt-2 text-sm text-gray-600">
              평일 09:00 ~ 18:00 (점심 12:00~13:00)
            </p>

            <p className="mt-2 text-xs text-gray-500">
              © {new Date().getFullYear()} Goodrich Plus. All rights reserved.
            </p>
          </div>

          <div className="md:col-span-1">
            <p className="text-sm font-bold text-secondary">광고 대행사</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
              <li>(주)처음소리 / 사업자등록번호 201-86-22692</li>
              <li>대표자 : 김한규</li>
              <li>
                주소 : 서울특별시 중구 필동로 14, 4층 401호(필동2가, 민성빌딩)
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <p className="text-sm font-bold text-secondary">
              개인정보 위탁사 (수집 및 이용사)
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
              <li>
                굿리치(주) / 사업자 등록번호 120-86-93433 / 대리점등록번호
                2006038313
              </li>
              <li>대표이사 : 한승표</li>
              <li>
                주소: 서울시 중구 세종대로9길 퍼시픽타워7층(구,올리브타워)
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
