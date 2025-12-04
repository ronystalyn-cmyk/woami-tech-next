import React from 'react';
import { X } from 'lucide-react';

interface WarrantyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WarrantyModal({ isOpen, onClose }: WarrantyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 rounded-2xl shadow-2xl border border-purple-500/30 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
          <h2 className="text-white text-2xl">⭐ Política de Garantía</h2>
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
            <h3 className="text-purple-400 text-xl mb-2">🔵 POLÍTICA DE GARANTÍA</h3>
            <p className="text-white mb-1"><strong>WOAMI TECH S.A.S. de C.V.</strong></p>
            <p className="text-slate-400">Última actualización: diciembre 2025</p>
          </div>

          <p>
            Esta política se emite en cumplimiento de la <strong className="text-purple-400">Ley de Protección al Consumidor</strong>, la <strong className="text-purple-400">Ley de Comercio Electrónico</strong>, y demás normativa aplicable en la República de El Salvador.
          </p>

          {/* 1. Naturaleza del Servicio */}
          <div>
            <h3 className="text-white text-xl mb-3">1. Naturaleza del Servicio</h3>
            <p className="mb-3 text-slate-400">Conforme Art. 4 lit. c y Art. 17 de la Ley de Protección al Consumidor:</p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li><strong className="text-purple-400">WOAMI TECH actúa como intermediario electrónico</strong>, no como proveedor del servicio técnico.</li>
              <li><strong className="text-purple-400">El técnico independiente es el único responsable</strong> por la garantía del trabajo ejecutado.</li>
            </ul>
          </div>

          {/* 2. Alcance de la Garantía */}
          <div>
            <h3 className="text-white text-xl mb-3">2. Alcance de la Garantía</h3>
            <p className="mb-2">El técnico deberá cumplir con:</p>
            <ul className="space-y-1 list-disc list-inside ml-4">
              <li>Revisión del servicio cuando el defecto derive directamente de su intervención.</li>
              <li>Corrección sin costo de errores atribuibles al servicio.</li>
              <li>Respeto a las condiciones de la oferta (Art. 42 LCE).</li>
              <li>Ejecución en los términos contratados (Art. 39 LCE).</li>
            </ul>
          </div>

          {/* 3. Exclusiones */}
          <div>
            <h3 className="text-white text-xl mb-3">3. Exclusiones</h3>
            <p className="mb-2 text-yellow-400">La garantía no aplica cuando:</p>
            <ul className="space-y-1 list-disc list-inside ml-4">
              <li>El daño no está relacionado con el trabajo realizado.</li>
              <li>Exista manipulación posterior del cliente.</li>
              <li>El equipo se encontraba en mal estado previo.</li>
              <li>Se utilizaron repuestos aportados por el cliente.</li>
              <li>El servicio fue intervenido por terceros posteriormente.</li>
              <li>El daño proviene de eventos externos como humedad, voltaje o accidentes.</li>
            </ul>
          </div>

          {/* 4. Garantía sobre Repuestos */}
          <div>
            <h3 className="text-white text-xl mb-3">4. Garantía sobre Repuestos</h3>
            <p className="mb-2 text-slate-400">Conforme Art. 26 de la Ley de Protección al Consumidor:</p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li><strong className="text-purple-400">Repuestos aportados por el técnico:</strong> aplican las garantías del proveedor.</li>
              <li><strong className="text-purple-400">Repuestos aportados por el cliente:</strong> WOAMI TECH y el técnico quedan exentos de responsabilidad.</li>
            </ul>
          </div>

          {/* 5. Procedimiento para Reclamos */}
          <div>
            <h3 className="text-white text-xl mb-3">5. Procedimiento para Reclamos</h3>
            <p className="mb-2">El usuario deberá presentar su solicitud a través de:</p>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-4">
              <li>La aplicación</li>
              <li>El sitio web</li>
              <li><a href="mailto:soporte@woamitech.com" className="text-purple-400 hover:text-purple-300">soporte@woamitech.com</a></li>
            </ul>
            <p className="mb-2">La solicitud debe contener:</p>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-3">
              <li>Número de orden</li>
              <li>Descripción del defecto</li>
              <li>Evidencia fotográfica o audiovisual</li>
            </ul>
            <p className="text-purple-400">WOAMI TECH trasladará la solicitud al técnico según Art. 20–24 LCE (intermediación electrónica).</p>
          </div>

          {/* 6. Limitación de Responsabilidad */}
          <div>
            <h3 className="text-white text-xl mb-3">6. Limitación de Responsabilidad</h3>
            <p className="mb-2 text-slate-400">Con fundamento en Art. 20–24 de la Ley de Comercio Electrónico:</p>
            <p className="mb-2 text-yellow-400">WOAMI TECH no es responsable por:</p>
            <ul className="space-y-1 list-disc list-inside ml-4">
              <li>Incumplimiento técnico</li>
              <li>Daños derivados de la ejecución del servicio</li>
              <li>Lucro cesante o daños indirectos</li>
              <li>Errores en repuestos ajenos al técnico</li>
              <li>Negligencia profesional del prestador del servicio</li>
            </ul>
          </div>

          {/* 7. Actualizaciones de la Política */}
          <div>
            <h3 className="text-white text-xl mb-3">7. Actualizaciones de la Política</h3>
            <p className="mb-2">Esta política podrá ser actualizada sin previo aviso.</p>
            <p className="text-purple-400">La versión vigente estará disponible en el sitio web y la aplicación.</p>
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