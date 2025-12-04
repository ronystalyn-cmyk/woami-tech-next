"use client";

import React, { useState } from "react";
import {
  UserPlus,
  MapPinned,
  Calendar,
  CreditCard,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { TechnicianRegistrationModal } from "./TechnicianRegistrationModal";

// Ruta al PNG que ya tienes en public/assets
// (el archivo que ves en public/assets con el nombre largo 0a7d6e8....png)
const technicianImage = "/assets/tech-image.png";

export function ForTechnicians() {
  const [technicianModalOpen, setTechnicianModalOpen] = useState(false);

  const features = [
    {
      icon: UserPlus,
      title: "Regístrate y crea tu perfil profesional",
      description: "Destaca tus habilidades y experiencia",
    },
    {
      icon: MapPinned,
      title: "Elige en qué zonas quieres trabajar",
      description: "Define tu área de cobertura",
    },
    {
      icon: Calendar,
      title: "Acepta solo los servicios que te convengan",
      description: "Tú decides cuándo y dónde trabajar",
    },
    {
      icon: CreditCard,
      title: "Recibe pagos de forma segura",
      description: "Transferencias rápidas y confiables",
    },
  ];

  return (
    <section id="tecnicos" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm">
                  Aumenta tus ingresos
                </span>
              </div>

              <h2 className="text-white mb-4">
                ¿Eres técnico? Conecta con nuevos clientes
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Únete a nuestra red de profesionales verificados y expande tu
                negocio con WOAMI TECH
              </p>

              {/* Features List */}
              <div className="space-y-6 mb-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-purple-400" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white mb-1">{feature.title}</h4>
                        <p className="text-slate-400 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setTechnicianModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-500/30"
              >
                Registrarme como técnico
              </button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20">
                <Image
                  src={technicianImage}
                  alt="Técnico de WOAMI TECH trabajando en aire acondicionado"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 shadow-xl">
                <div className="text-purple-400 text-3xl mb-1">+40%</div>
                <div className="text-slate-300 text-sm">
                  Aumento promedio en ingresos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technician Registration Modal */}
      <TechnicianRegistrationModal
        isOpen={technicianModalOpen}
        onClose={() => setTechnicianModalOpen(false)}
      />
    </section>
  );
}
