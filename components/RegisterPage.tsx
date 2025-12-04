"use client";

import React, { useState } from "react";
import { ArrowLeft, Mail, Lock, Phone, User } from "lucide-react";
import Image from "next/image";
import { TechnicianRegistrationModal } from "./TechnicianRegistrationModal";
import { TermsModal } from "./TermsModal";
import { PrivacyModal } from "./PrivacyModal";

interface RegisterPageProps {
  onBack: () => void;
  clientOnlyMode?: boolean;
}

type RegisterView = "choice" | "register-client";

// Logo en public/assets/logo-woami.png
const logo = "/assets/logo-woami.png";

export function RegisterPage({
  onBack,
  clientOnlyMode = false,
}: RegisterPageProps) {
  const [view, setView] = useState<RegisterView>(
    clientOnlyMode ? "register-client" : "choice"
  );
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [techModalOpen, setTechModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handleRegisterClient = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar que se hayan aceptado los términos
    if (!acceptedTerms) {
      alert("Debes aceptar los Términos y Condiciones para continuar");
      return;
    }

    // Aquí iría la lógica de registro de cliente
    console.log("Registro de cliente:", registerData);
    onBack();
  };

  const handleRegisterAsTechnician = () => {
    setTechModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8 text-center">
            <button
              onClick={
                clientOnlyMode && view === "register-client"
                  ? onBack
                  : view === "choice"
                  ? onBack
                  : () => setView("choice")
              }
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
              {view === "choice"
                ? "Crea tu cuenta y comienza"
                : "Registro de cliente"}
            </p>
          </div>

          {/* Card */}
          <div className="bg-slate-900 rounded-2xl shadow-2xl border border-purple-500/30 p-8">
            {/* Choice View */}
            {view === "choice" && (
              <div className="space-y-4">
                <p className="text-slate-300 text-center mb-6">
                  Selecciona cómo deseas registrarte
                </p>

                <div
                  onClick={() => setView("register-client")}
                  className="p-6 bg-slate-800 border border-purple-500/30 rounded-xl hover:bg-slate-750 hover:border-purple-500/50 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white mb-1">
                        Registrarme como cliente
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Solicita servicios y encuentra técnicos verificados
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  onClick={handleRegisterAsTechnician}
                  className="p-6 bg-slate-800 border border-purple-500/30 rounded-xl hover:bg-slate-750 hover:border-purple-500/50 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image
                        src={logo}
                        alt="Técnico"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                    <div>
                      <h3 className="text-white mb-1">
                        Registrarme como técnico
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Ofrece tus servicios y aumenta tus ingresos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Register Client Form */}
            {view === "register-client" && (
              <form onSubmit={handleRegisterClient} className="space-y-4">
                <div>
                  <label className="block text-slate-300 mb-2">
                    Nombre completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      value={registerData.name}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          name: e.target.value,
                        })
                      }
                      className="w-full pl-11 pr-4 py-3 bg-slate-800 border border-purple-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                      placeholder="Juan Pérez"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      value={registerData.email}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          email: e.target.value,
                        })
                      }
                      className="w-full pl-11 pr-4 py-3 bg-slate-800 border border-purple-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">Teléfono</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      value={registerData.phone}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          phone: e.target.value,
                        })
                      }
                      className="w-full pl-11 pr-4 py-3 bg-slate-800 border border-purple-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                      placeholder="+503 1234-5678"
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
                      value={registerData.password}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          password: e.target.value,
                        })
                      }
                      className="w-full pl-11 pr-4 py-3 bg-slate-800 border border-purple-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Confirmar contraseña
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="password"
                      value={registerData.confirmPassword}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="w-full pl-11 pr-4 py-3 bg-slate-800 border border-purple-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                {/* Checkbox de aceptación de términos */}
                <div className="flex items-start gap-3 bg-slate-800/50 border border-purple-500/30 rounded-lg p-4">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-purple-500/30 bg-slate-800 text-purple-600 focus:ring-purple-500 focus:ring-offset-slate-900 cursor-pointer"
                    required
                  />
                  <label
                    htmlFor="acceptTerms"
                    className="text-slate-300 text-sm cursor-pointer"
                  >
                    Acepto los{" "}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setTermsModalOpen(true);
                      }}
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Términos y Condiciones
                    </button>{" "}
                    y la{" "}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setPrivacyModalOpen(true);
                      }}
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Política de Privacidad
                    </button>
                  </label>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-3">
                  <p className="text-slate-400 text-xs">
                    Al registrarte en WOAMI TECH, confirmas que has leído y
                    comprendido nuestras políticas legales y que cumples con los
                    requisitos de edad (18+ años).
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-500/30"
                >
                  Crear cuenta
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Technician Registration Modal */}
      <TechnicianRegistrationModal
        isOpen={techModalOpen}
        onClose={() => {
          setTechModalOpen(false);
          onBack();
        }}
      />

      {/* Terms Modal */}
      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
      />

      {/* Privacy Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </>
  );
}
