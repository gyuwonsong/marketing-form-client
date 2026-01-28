import { useEffect, useState } from "react";
import Container from "./Container";
import { PATHS } from "../../app/routes";
import { NavLink, useLocation } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";

const linkBase = "text-secondary hover:opacity-80 transition";
const active =
  "font-extrabold text-secondary relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-secondary";

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

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <Container className="flex h-20 items-center justify-between">
          <NavLink to={PATHS.caregiver} className="flex items-center gap-2">
            <span className="font-extrabold text-secondary text-2xl md:text-3xl">
              + Goodrich Plus
            </span>
          </NavLink>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 font-semibold text-lg">
              <NavLink
                to={PATHS.caregiver}
                className={({ isActive }) =>
                  isActive ? `${linkBase} ${active}` : linkBase
                }
              >
                간병보험
              </NavLink>

              <NavLink
                to={PATHS.child}
                className={({ isActive }) =>
                  isActive ? `${linkBase} ${active}` : linkBase
                }
              >
                어린이보험
              </NavLink>
            </nav>

            <a
              href="tel:02-1234-5678"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-main w-40 py-2 text-lg font-semibold text-white hover:bg-main/90"
            >
              <MdPhoneInTalk className="text-2xl" />
              무료전화상담
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:02-1234-5678"
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
        </Container>
      </header>

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
              <NavLink
                to={PATHS.caregiver}
                className={({ isActive }) =>
                  isActive
                    ? "block rounded-xl bg-secondary/5 px-4 py-3 text-secondary font-extrabold"
                    : "block rounded-xl px-4 py-3 text-secondary font-semibold hover:bg-gray-50"
                }
              >
                간병보험
              </NavLink>

              <NavLink
                to={PATHS.child}
                className={({ isActive }) =>
                  isActive
                    ? "block rounded-xl bg-secondary/5 px-4 py-3 text-secondary font-extrabold"
                    : "block rounded-xl px-4 py-3 text-secondary font-semibold hover:bg-gray-50"
                }
              >
                어린이보험
              </NavLink>

              <a
                href="tel:02-1234-5678"
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
