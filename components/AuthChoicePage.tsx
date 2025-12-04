"use client";

import React from "react";
import { ArrowLeft, LogIn, UserPlus } from "lucide-react";
import Image from "next/image";

// Usamos el logo real desde /public/assets
const logo = "/assets/logo-woami.png";

interface AuthChoicePageProps {
  onBack: () => void;
  onLogin: () => void;
  onRegister: () => void;
  clientOnlyMode?: boolean;
}

export function AuthChoicePage({
  onBack,
  onLogin,
  onRegister,
  clientOnlyMode = false,
}: AuthChoicePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver a la página principal
          </button>

          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src={logo}
              alt="WOAMI TECH"
              width={80}
              height={80}
              className="w-20 h-20 object-contain"
            />
          </div>

          <h1 className="text-white text-4xl mb-2">
            WOAMI <span className="text-purple-400">TECH</span>
          </h1>

          <p className="text-slate-400 text-lg">
            {clientOnlyMode
              ? "Solicita un técnico verificado"
              : "Bienvenido a nuestra plataforma"}
          </p>
        </div>

        {/* Options Card */}
        <div className="bg-slate-900 rounded-2xl shadow-2xl border border-purple-500/30 p-8">
          <h2 className="text-white text-2xl text-center mb-8">
            {clientOnlyMode
              ? "Accede o regístrate como cliente"
              : "¿Qué deseas hacer?"}
          </h2>

          <div className="space-y-4">
            {/* Login Option */}
            <button
              onClick={onLogin}
              className="w-full p-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-500/30 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <LogIn className="w-8 h-8 text-white" />
                </div>

                <div className="text-left flex-1">
                  <h3 className="text-white text-xl mb-1">Ingresar</h3>
                  <p className="text-purple-100 text-sm">
                    Ya tengo una cuenta en WOAMI TECH
                  </p>
                </div>
              </div>
            </button>

            {/* Register Option */}
            <button
              onClick={onRegister}
              className="w-full p-6 bg-slate-800 border-2 border-purple-500/30 rounded-xl hover:bg-slate-750 hover:border-purple-500/50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <UserPlus className="w-8 h-8 text-white" />
                </div>

                <div className="text-left flex-1">
                  <h3 className="text-white text-xl mb-1">Registrarme</h3>
                  <p className="text-slate-400 text-sm">
                    {clientOnlyMode
                      ? "Crear una nueva cuenta como cliente"
                      : "Crear una nueva cuenta como cliente o técnico"}
                  </p>
                </div>
              </div>
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-purple-500/20">
            <p className="text-slate-400 text-sm text-center">
              ¿Necesitas ayuda?{" "}
              <button
                type="button"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Contáctanos
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
