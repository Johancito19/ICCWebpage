"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "@/styles/admin-base.css";

export default function AdminLoginPage() {
  const router = useRouter();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mantenerSesion, setMantenerSesion] = useState(true);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !correo.trim() ||
      !password.trim() ||
      correo.includes("invalido") ||
      password.length < 7
    ) {
      setError(true);
      return;
    }
    setError(false);
    router.push("/admin");
  };

  const handleReset = () => {
    setCorreo("");
    setPassword("");
    setError(false);
  };

  return (
    <main className="adm-login-split">
      {/* Columna izquierda: Identidad institucional */}
      <section className="adm-login-brand">
        <div className="adm-brand-top">
          <div className="adm-logo-group adm-logo-group-lg">
            <img
              src="/img/shared/logo-icc.png"
              alt="Logo Facultad de Ingeniería en Ciencias de la Computación"
              className="adm-logo-img adm-logo-icc-lg"
            />
            <img
              src="/img/shared/logo-unicahFA.png"
              alt="Escudo UNICAH"
              className="adm-logo-img adm-logo-unicah-lg"
            />
          </div>
          <div className="adm-brand-text">
            <span className="adm-brand-title">ICC / UNICAH</span>
            <span className="adm-brand-subtitle">
              FACULTAD DE INGENIERÍA EN CIENCIAS DE LA COMPUTACIÓN
            </span>
          </div>
        </div>

        <div className="adm-brand-hero">
          <span className="adm-tag-amber">PORTAL ADMINISTRATIVO</span>
          <h1 className="adm-brand-heading">
            Gestiona el contenido oficial de ICC · UNICAH
          </h1>
          <p className="adm-brand-desc">
            Actualiza titulares del sitio, cifras clave, noticias académicas,
            agenda de eventos, usuarios, accesos y aliados de vinculación desde
            un solo lugar.
          </p>
          <ul className="adm-brand-list">
            <li>· Edición en tiempo real sincronizada con la web pública</li>
            <li>· Control de accesos por rol: Coordinador y Editor</li>
          </ul>
        </div>

        <footer className="adm-brand-footer">
          Universidad Católica de Honduras · Acceso exclusivo para personal autorizado
        </footer>
      </section>

      {/* Columna derecha: Tarjeta de autenticación */}
      <section className="adm-login-panel">
        <div className="tarjeta adm-login-card">
          <div className="adm-login-header">
            <span className="etiqueta-seccion">AUTENTICACIÓN</span>
            <h2 className="adm-login-title">Iniciar sesión en el panel</h2>
            <p className="adm-login-subtitle">
              Ingresa tus credenciales institucionales para administrar la página de ICC.
            </p>
          </div>

          {error && (
            <div className="adm-error-box" role="alert">
              <strong className="adm-error-title">ERROR DE VALIDACIÓN</strong>
              <p className="adm-error-msg">
                Usuario o contraseña incorrectos. Verifica tus datos e intenta nuevamente.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="adm-login-form">
            <div className="adm-form-group">
              <label htmlFor="correo" className="adm-label">
                Ingresar Usuario o Correo Institucional
              </label>
              <input
                id="correo"
                type="email"
                className="input-base adm-login-input"
                placeholder={
                  error ? "usuario_invalido@unicah.edu" : "josue.mata@unicah.edu"
                }
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>

            <div className="adm-form-group">
              <label htmlFor="password" className="adm-label">
                Ingresar Contraseña
              </label>
              <input
                id="password"
                type="password"
                className="input-base adm-login-input"
                placeholder={error ? "••••••" : "•••••••••••"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="adm-login-row">
              <label className="adm-checkbox-label">
                <input
                  type="checkbox"
                  checked={mantenerSesion}
                  onChange={(e) => setMantenerSesion(e.target.checked)}
                  className="adm-checkbox"
                />
                <span>Mantener sesión iniciada</span>
              </label>

              <button
                type="button"
                className="adm-forgot-link"
                onClick={() => setError((prev) => !prev)}
              >
                ¿Olvidaste tu clave?
              </button>
            </div>

            <button type="submit" className="btn-amarillo adm-btn-full">
              Ingresar al Panel
            </button>

            {error && (
              <button
                type="button"
                onClick={handleReset}
                className="adm-btn-secondary adm-btn-full"
              >
                Limpiar y reintentar
              </button>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
