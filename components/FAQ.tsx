import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cómo se seleccionan los técnicos?',
      answer: 'Todos nuestros técnicos pasan por un riguroso proceso de verificación que incluye validación de documentos (DUI, NIT), revisión de experiencia profesional, verificación de referencias y evaluación de habilidades técnicas. Solo aceptamos profesionales calificados y confiables.',
    },
    {
      question: '¿Qué pasa si el servicio no sale bien?',
      answer: 'Contamos con un sistema de garantía que protege tu inversión. Si no estás satisfecho con el servicio, puedes reportarlo dentro de las primeras 48 horas. Nuestro equipo revisará el caso y, de ser procedente, coordinaremos una corrección sin costo adicional o un reembolso parcial/total según corresponda.',
    },
    {
      question: '¿Cómo se manejan los pagos?',
      answer: 'Los pagos se procesan de forma segura a través de nuestra plataforma. Puedes pagar con tarjeta de crédito/débito o transferencia bancaria. El técnico recibe su pago una vez que confirmas que el servicio fue completado satisfactoriamente. Esto garantiza calidad y compromiso.',
    },
    {
      question: '¿Hay garantía?',
      answer: 'Sí, todos los servicios incluyen garantía. El período de garantía varía según el tipo de servicio (generalmente de 7 a 30 días). Los detalles específicos se indican antes de confirmar cada servicio. La garantía cubre defectos en el trabajo realizado, no daños causados por mal uso.',
    },
    {
      question: '¿Cuánto tiempo tarda en llegar un técnico?',
      answer: 'Para servicios urgentes, generalmente podemos asignar un técnico en menos de 2 horas. Para servicios programados, puedes elegir el día y hora que mejor te convenga. El tiempo exacto depende de la disponibilidad en tu zona y el tipo de servicio.',
    },
    {
      question: '¿Qué zonas cubren?',
      answer: 'Actualmente operamos en las principales zonas urbanas del país. Puedes verificar la cobertura en tu área ingresando tu dirección en la plataforma. Constantemente estamos expandiendo nuestra red de técnicos para cubrir más zonas.',
    },
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Preguntas frecuentes</h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Resolvemos tus dudas más comunes
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/40 transition-colors"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
