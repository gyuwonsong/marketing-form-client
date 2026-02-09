import { useEffect, useMemo, useState } from "react";
import Container from "./Container";
import { PATHS } from "../../app/routes";
import { NavLink, useLocation } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import goodrichLogo from "../../assets/goodrich-logo.svg";

const linkBase = "text-secondary hover:opacity-80 transition";
const active =
  "font-extrabold text-secondary relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-secondary";

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

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-20 items-center justify-between max-w-[1400px] px-2">
          <NavLink to={PATHS.caregiver} className="flex items-center gap-3">
            <img src={goodrichLogo} alt="Goodrich Plus" className="h-7" />
            <span className="font-bold text-secondary text-2xl">
              플러스사업부
            </span>
          </NavLink>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 font-semibold text-xl">
              {desktopItems.map((it) => (
                <NavLink
                  key={it.to}
                  to={it.to}
                  className={({ isActive }) =>
                    isActive ? `${linkBase} ${active}` : linkBase
                  }
                >
                  {it.label}
                </NavLink>
              ))}
            </nav>

            <a
              href={`tel:${TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-main w-40 py-2 text-lg font-semibold text-white hover:bg-main/90"
            >
              <MdPhoneInTalk className="text-2xl" />
              무료전화상담
            </a>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
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
