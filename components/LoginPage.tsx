"use client";

import React, { useState } from "react";
import { Mail, Lock, Shield, ArrowLeft } from "lucide-react";
import Image from "next/image";

interface LoginPageProps {
  onBack: () => void;
  onLoginSuccess: (userType: "client" | "technician") => void;
  clientOnlyMode?: boolean;
}

type LoginView = "login" | "login-2fa";

// Usuarios habilitados
const USERS = {
  ronystalyn: {
    password: "123456",
    type: "client" as const,
    name: "Juan Pérez",
  },
  stalynrony: {
    password: "123456",
    type: "technician" as const,
    name: "Stalyn Rony",
  },
};

// Logo guardado en public/assets/logo-woami.png
const logo = "/assets/logo-woami.png";

export function LoginPage({
  onBack,
  onLoginSuccess,
  clientOnlyMode,
}: LoginPageProps) {
  const [view, setView] = useState<LoginView>("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] =
    useState<keyof typeof USERS | null>(null);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Buscar el usuario (extraer username si viene con @dominio.com)
    let username = loginData.email.toLowerCase().trim();

    // Si viene con @, extraer solo la parte antes del @
    if (username.includes("@")) {
      username = username.split("@")[0];
    }

    const user = USERS[username as keyof typeof USERS];

    if (!user) {
      setError("Usuario no encontrado");
      return;
    }

    if (user.password !== loginData.password) {
      setError("Contraseña incorrecta");
      return;
    }

    // Usuario válido, guardar y proceder a 2FA
    setCurrentUser(username as keyof typeof USERS);
    setView("login-2fa");
  };

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentUser) return;

    const code = verificationCode.join("");

    // Validar código
    if (code.length !== 6) {
      setError("Por favor ingresa el código completo");
      return;
    }

    // Validar que el código sea 123456
    if (code !== "123456") {
      setError("Código incorrecto. Intenta nuevamente.");
      return;
    }

    // Login exitoso, redirigir según tipo de usuario
    const user = USERS[currentUser];
    onLoginSuccess(user.type);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver
          </button>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src={logo}
              alt="WOAMI TECH"
              width={64}
              height={64}
              className="w-16 h-16"
              priority
            />
          </div>
          <h1 className="text-white text-3xl mb-2">
            WOAMI <span className="text-purple-400">TECH</span>
          </h1>
          <p className="text-slate-400">
            {view === "login"
              ? "Inicia sesión en tu cuenta"
              : "Verificación de seguridad"}
          </p>
        </div>

        {/* Card */}
        <div className="bg-slate-900 rounded-2xl shadow-2xl border border-purple-500/30 p-8">
          {/* Login Form */}
          {view === "login" && (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-300 mb-2">
                  Correo electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 bg-slate-800 border border-purple-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 bg-slate-800 border border-purple-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-purple-500/30"
                  />
                  Recordarme
                </label>
                <button
                  type="button"
                  className="text-purple-400 hover:text-purple-300"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-500/30"
              >
                Continuar
              </button>

              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </form>
          )}

          {/* 2FA Verification */}
          {view === "login-2fa" && (
            <form onSubmit={handleVerifyCode} className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <p className="text-slate-300 mb-2">
                  Hemos enviado un código de verificación a tu celular
                </p>
                <p className="text-slate-500 text-sm">
                  Ingresa el código de 6 dígitos
                </p>
              </div>

              <div className="flex gap-2 justify-center">
                {verificationCode.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    className="w-12 h-14 bg-slate-800 border border-purple-500/30 rounded-lg text-white text-center text-xl focus:outline-none focus:border-purple-500"
                    required
                  />
                ))}
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="text-purple-400 hover:text-purple-300 text-sm"
                >
                  Reenviar código
                </button>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-500/30"
              >
                Verificar
              </button>

              <button
                type="button"
                onClick={() => setView("login")}
                className="w-full text-slate-400 hover:text-white transition-colors"
              >
                Volver
              </button>

              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
