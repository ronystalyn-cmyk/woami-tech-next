import React, { useState } from 'react';
import {
  Zap,
  Monitor,
  Wind,
  Droplet,
  Camera,
  Refrigerator,
  Sun,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { ServiceRequestModal } from './ServiceRequestModal';

interface ServicesProps {
  onRequestService?: () => void;
}

export function Services({ onRequestService }: ServicesProps) {
  const [modalOpen, setModalOpen] = useState(false);
  
  const services = [
    {
      icon: Zap,
      title: 'Electricidad',
      description: 'Instalaciones, reparaciones y mantenimiento eléctrico',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Monitor,
      title: 'Mantenimiento de computadoras',
      description: 'Soporte técnico, reparación y mantenimiento de equipos',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Wind,
      title: 'Aire acondicionado',
      description: 'Instalación, mantenimiento y reparación de sistemas',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Droplet,
      title: 'Plomería',
      description: 'Reparaciones, instalaciones y emergencias 24/7',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      icon: Camera,
      title: 'CCTV y seguridad',
      description: 'Instalación y mantenimiento de sistemas de seguridad',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Refrigerator,
      title: 'Mantenimiento de electrodomésticos',
      description: 'Reparación y mantenimiento de lavadoras, refrigeradoras y más',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Sun,
      title: 'Paneles solares',
      description: 'Instalación, mantenimiento y reparación de sistemas solares',
      color: 'from-amber-500 to-yellow-500',
    },
    {
      icon: Sparkles,
      title: 'Limpieza profesional',
      description: 'Limpieza de hogares, oficinas y espacios comerciales',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="servicios" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Servicios disponibles</h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Encuentra el profesional que necesitas en múltiples especialidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{service.description}</p>

                {/* Button */}
                <button 
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group/btn" 
                  onClick={() => {
                    if (onRequestService) {
                      onRequestService();
                    } else {
                      setModalOpen(true);
                    }
                  }}
                >
                  <span className="text-sm">Solicitar</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <ServiceRequestModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}