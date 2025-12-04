import React from 'react';
import { Shield, DollarSign, MapPin, MessageCircle, Star } from 'lucide-react';

export function ClientBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: 'Técnicos verificados',
      description: 'Todos nuestros profesionales pasan por un riguroso proceso de verificación',
    },
    {
      icon: DollarSign,
      title: 'Cotizaciones claras',
      description: 'Conoce el costo estimado antes de aceptar cualquier servicio',
    },
    {
      icon: MapPin,
      title: 'Seguimiento digital',
      description: 'Monitorea el estado de tu solicitud en tiempo real',
    },
    {
      icon: MessageCircle,
      title: 'Soporte inmediato',
      description: 'Atención por WhatsApp, correo y chat en línea',
    },
    {
      icon: Star,
      title: 'Evaluaciones reales',
      description: 'Lee reseñas verificadas de otros clientes',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Beneficios para el cliente</h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Tu tranquilidad es nuestra prioridad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex gap-4 group"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/30">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
