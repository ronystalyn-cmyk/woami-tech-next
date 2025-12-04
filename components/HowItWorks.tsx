import React from 'react';
import { FileText, UserCheck, CheckCircle } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: 'Solicita un servicio',
      description: 'Describe el problema desde tu celular o computadora',
      number: '01',
    },
    {
      icon: UserCheck,
      title: 'Te asignamos un técnico verificado',
      description: 'Revisas perfil, calificaciones y costo estimado',
      number: '02',
    },
    {
      icon: CheckCircle,
      title: 'Trabajo realizado y pago seguro',
      description: 'Valoras al técnico y recibes comprobante digital',
      number: '03',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Cómo funciona</h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Obtén ayuda técnica profesional en tres simples pasos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white mb-3">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
