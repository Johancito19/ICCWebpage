"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MenuMovilProps = {
  navigation: ReadonlyArray<{ label: string; href: string | null }>;
};

export default function MenuMovil({ navigation }: MenuMovilProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 64rem)");
    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) dialogRef.current?.close();
    }

    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  function openMenu() {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;

    dialog.showModal();
    setOpen(true);
  }

  function closeMenu() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button
        className="pub-mobile-toggle"
        type="button"
        aria-label="Abrir menú"
        aria-controls="menu-publico"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={openMenu}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M1 4h22M1 12h22M1 20h22" />
        </svg>
      </button>

      <dialog
        className="pub-mobile-menu"
        id="menu-publico"
        ref={dialogRef}
        aria-label="Menú principal"
        onClose={() => setOpen(false)}
      >
        <div className="pub-container pub-mobile-menu-content">
          <div className="pub-mobile-menu-head">
            <Image
              className="pub-brand-logo pub-mobile-menu-logo"
              src="/img/shared/logo-unicah%20completo.png"
              alt="Universidad Católica de Honduras"
              width={548}
              height={315}
              loading="eager"
              unoptimized
            />
            <button className="pub-mobile-close" type="button" aria-label="Cerrar menú" onClick={closeMenu}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M1 1l22 22M23 1 1 23" />
              </svg>
            </button>
          </div>

          <nav className="pub-mobile-menu-nav" aria-label="Navegación principal">
            <ul>
              {navigation.map(({ label, href }) => (
                <li key={label}>
                  {href ? (
                    <Link
                      className="pub-mobile-menu-link"
                      href={href}
                      aria-current={href === "/" ? "page" : undefined}
                      onNavigate={closeMenu}
                    >
                      {label}
                    </Link>
                  ) : (
                    <span className="pub-mobile-menu-link" role="link" aria-disabled="true">
                      {label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="pub-mobile-menu-bottom">
            <span className="btn-amarillo pub-mobile-menu-admissions" role="link" aria-disabled="true">
              Admisiones
              <span className="pub-arrow" aria-hidden="true" />
            </span>
          </div>
        </div>
      </dialog>
    </>
  );
}
