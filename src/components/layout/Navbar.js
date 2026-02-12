import { useEffect, useMemo, useRef, useState } from "react";
import { PATHS } from "../../app/routes";
import { NavLink, useLocation } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import goodrichLogo from "../../assets/goodrich-logo.svg";

const linkBase =
  "relative inline-block text-secondary hover:opacity-80 transition";
const active =
  "font-extrabold after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-secondary";

const TEL = "1566-3611";

const NAV_ITEMS = [
  { to: PATHS.caregiver, label: "간병보험" },
  { to: PATHS.child, label: "어린이보험" },
  { to: PATHS.fetus, label: "태아보험" },
  { to: PATHS.cancer, label: "암보험" },
  { to: PATHS.health, label: "종합건강보험" },
  { to: PATHS.simple, label: "간편보험" },
  { to: PATHS.medical, label: "실비보험" },
  { to: PATHS.youth, label: "청년보험" },
  { to: PATHS.dementiaCare, label: "치매간병보험" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const navRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const desktopItems = useMemo(() => NAV_ITEMS, []);

  const computeNavState = () => {
    const el = navRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    const overflow = scrollWidth > clientWidth + 1;
    setIsOverflow(overflow);

    if (!overflow) {
      setCanLeft(false);
      setCanRight(false);
      return;
    }

    setCanLeft(scrollLeft > 0);
    setCanRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    computeNavState();
    const onResize = () => computeNavState();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    computeNavState();
  }, [pathname]);

  const scrollNav = (dir) => {
    const el = navRef.current;
    if (!el) return;

    const step = Math.max(240, Math.floor(el.clientWidth * 0.6));
    el.scrollBy({ left: dir * step, behavior: "smooth" });
    window.setTimeout(computeNavState, 200);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto h-20 max-w-[1550px] px-6 flex items-center gap-6">
          <NavLink
            to={PATHS.caregiver}
            className="flex items-center gap-3 shrink-0"
          >
            <img src={goodrichLogo} alt="Goodrich Plus" className="h-7" />
            <span className="font-bold text-secondary md:text-2xl text-xl whitespace-nowrap mr-6">
              플러스사업부
            </span>
          </NavLink>

          {/* Desktop */}
          <div className="hidden md:flex flex-1 min-w-0 items-center">
            {isOverflow ? (
              <button
                type="button"
                onClick={() => scrollNav(-1)}
                aria-label="왼쪽으로 이동"
                className={[
                  "mr-4 shrink-0 text-secondary/60 hover:text-secondary transition",
                  canLeft ? "opacity-100" : "opacity-30 pointer-events-none",
                ].join(" ")}
              >
                <MdChevronLeft className="h-6 w-6" />
              </button>
            ) : null}

            <nav
              ref={navRef}
              onScroll={computeNavState}
              className="
                flex items-center gap-6 font-semibold text-xl
                whitespace-nowrap
                overflow-x-auto
                min-w-0
                scroll-smooth
                [-webkit-overflow-scrolling:touch]
                hide-scrollbar
              "
            >
              {desktopItems.map((it) => (
                <NavLink
                  key={it.to}
                  to={it.to}
                  className={({ isActive }) =>
                    (isActive ? `${linkBase} ${active}` : linkBase) +
                    " shrink-0"
                  }
                >
                  {it.label}
                </NavLink>
              ))}
            </nav>

            {isOverflow ? (
              <button
                type="button"
                onClick={() => scrollNav(1)}
                aria-label="오른쪽으로 이동"
                className={[
                  "ml-4 shrink-0 text-secondary/60 hover:text-secondary transition",
                  canRight ? "opacity-100" : "opacity-30 pointer-events-none",
                ].join(" ")}
              >
                <MdChevronRight className="h-6 w-6" />
              </button>
            ) : null}
          </div>

          <a
            href={`tel:${TEL}`}
            className="hidden md:inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-main w-40 py-2 text-lg font-semibold text-white hover:bg-main/90 whitespace-nowrap"
          >
            <MdPhoneInTalk className="text-2xl" />
            무료전화상담
          </a>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden ml-auto">
            <a
              href={`tel:${TEL}`}
              className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-main text-white hover:bg-main/90"
              aria-label="무료전화상담"
            >
              <MdPhoneInTalk className="text-2xl" />
            </a>

            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-gray-200 bg-white text-secondary hover:bg-gray-50"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            >
              {open ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open ? (
        <div className="md:hidden fixed inset-0 z-[100]">
          <button
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-label="close"
          />

          <div className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-5 py-4">
              <p className="font-extrabold text-secondary text-lg">메뉴</p>
              <button
                type="button"
                className="rounded-md p-2 text-secondary hover:bg-gray-100"
                onClick={() => setOpen(false)}
                aria-label="닫기"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            <nav className="px-5 py-4 space-y-2">
              {NAV_ITEMS.map((it) => (
                <NavLink
                  key={it.to}
                  to={it.to}
                  className={({ isActive }) =>
                    isActive
                      ? "block rounded-xl bg-secondary/5 px-4 py-3 text-secondary font-extrabold"
                      : "block rounded-xl px-4 py-3 text-secondary font-semibold hover:bg-gray-50"
                  }
                >
                  {it.label}
                </NavLink>
              ))}

              <a
                href={`tel:${TEL}`}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-main h-14 text-lg font-extrabold text-white hover:bg-main/90"
              >
                <MdPhoneInTalk className="text-2xl" />
                무료전화상담
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
