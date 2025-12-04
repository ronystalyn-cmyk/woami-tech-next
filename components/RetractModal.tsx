import React from 'react';
import { X } from 'lucide-react';

interface RetractModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RetractModal({ isOpen, onClose }: RetractModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 rounded-2xl shadow-2xl border border-purple-500/30 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
          <h2 className="text-white text-2xl">⭐ Derecho de Retracto</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6 text-slate-300">
          <div className="text-center mb-6">
            <h3 className="text-purple-400 text-xl mb-2">🔵 POLÍTICA DE DERECHO DE RETRACTO</h3>
            <p className="text-white mb-1"><strong>WOAMI TECH S.A.S. de C.V.</strong></p>
            <p className="text-slate-400">Última actualización: diciembre 2025</p>
          </div>

          <p className="text-slate-400">
            Política emitida conforme al <strong className="text-purple-400">Art. 13-A y 13-B de la Ley de Protección al Consumidor</strong>, y el <strong className="text-purple-400">Art. 42 y 43 de la Ley de Comercio Electrónico</strong>.
          </p>

          {/* 1. Derecho de Retracto antes de la aceptación */}
          <div>
            <h3 className="text-white text-xl mb-3">1. Derecho de Retracto antes de la aceptación</h3>
            <p className="text-purple-400">
              El usuario podrá cancelar la solicitud de servicio sin costo siempre que el técnico aún no haya aceptado la orden, conforme Art. 13-A LPC.
            </p>
          </div>

          {/* 2. Retracto después de la aceptación */}
          <div>
            <h3 className="text-white text-xl mb-3">2. Retracto después de la aceptación</h3>
            <p className="mb-2 text-slate-400">Según Art. 43 de la Ley de Comercio Electrónico, el retracto puede limitarse cuando:</p>
            <ul className="space-y-1 list-disc list-inside ml-4">
              <li>El servicio es de carácter urgente.</li>
              <li>El técnico ya está en desplazamiento.</li>
              <li>Existe inicio comprobado del trabajo.</li>
              <li>El servicio ha sido concluido.</li>
            </ul>
          </div>

          {/* 3. Costos asociados */}
          <div>
            <h3 className="text-white text-xl mb-3">3. Costos asociados</h3>
            <ul className="space-y-2 list-disc list-inside ml-4 mb-3">
              <li><strong className="text-purple-400">Técnico en camino</strong> → se cobra transporte.</li>
              <li><strong className="text-purple-400">Trabajo iniciado</strong> → se cobra proporcional.</li>
              <li><strong className="text-purple-400">Trabajo finalizado</strong> → no procede retracto.</li>
            </ul>
            <p className="text-slate-400">Se aplicarán criterios de razonabilidad definidos por la LPC.</p>
          </div>

          {/* 4. Procedimiento para solicitar retracto */}
          <div>
            <h3 className="text-white text-xl mb-3">4. Procedimiento para solicitar retracto</h3>
            <p className="mb-2">El usuario debe solicitarlo mediante:</p>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-4">
              <li>La app</li>
              <li>El sitio web</li>
              <li><a href="mailto:soporte@woamitech.com" className="text-purple-400 hover:text-purple-300">soporte@woamitech.com</a></li>
            </ul>
            <p className="mb-2">Debe incluir:</p>
            <ul className="space-y-1 list-disc list-inside ml-4">
              <li>Número de orden</li>
              <li>Motivo</li>
              <li>Evidencia (cuando corresponda)</li>
            </ul>
          </div>

          {/* 5. Excepciones */}
          <div>
            <h3 className="text-white text-xl mb-3">5. Excepciones</h3>
            <p className="mb-2 text-yellow-400">No aplica retracto cuando:</p>
            <ul className="space-y-1 list-disc list-inside ml-4">
              <li>El servicio ha concluido.</li>
              <li>No existe defecto atribuible al técnico.</li>
              <li>Se trata de servicios de emergencia (Art. 13-B LPC).</li>
              <li>El cliente ha intervenido el trabajo posteriormente.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-purple-500/20 bg-slate-900/50">
          <button
            onClick={onClose}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl text-white transition-all"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
