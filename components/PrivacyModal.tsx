import React from 'react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 rounded-2xl shadow-2xl border border-purple-500/30 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
          <h2 className="text-white text-2xl">⭐ Política de Privacidad</h2>
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
            <h3 className="text-purple-400 text-xl mb-2">🔵 POLÍTICA DE PRIVACIDAD</h3>
            <p className="text-white mb-1"><strong>WOAMI TECH S.A.S. de C.V.</strong></p>
            <p className="text-slate-400">Última actualización: diciembre 2025</p>
          </div>

          <p>
            La presente Política de Privacidad se emite en cumplimiento de la <strong className="text-purple-400">Ley de Protección de Datos Personales</strong>, la <strong className="text-purple-400">Ley de Comercio Electrónico</strong>, la <strong className="text-purple-400">Ley de Protección al Consumidor</strong>, la <strong className="text-purple-400">Ley de Firma Electrónica</strong>, la <strong className="text-purple-400">Ley Especial contra Delitos Informáticos y Conexos</strong>, la <strong className="text-purple-400">Ley de Ciberseguridad</strong>, y demás normativa aplicable en la República de El Salvador.
          </p>

          <p className="text-yellow-400">
            El uso de la plataforma implica la aceptación expresa de esta política.
          </p>

          {/* 1. Responsable del Tratamiento */}
          <div>
            <h3 className="text-white text-xl mb-3">1. Responsable del Tratamiento</h3>
            <p className="mb-3">Con fundamento en el Art. 4 literal p) de la Ley de Protección de Datos Personales, se identifica como Responsable del Tratamiento a:</p>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/20">
              <p className="text-white mb-1"><strong>WOAMI TECH S.A.S. de C.V.</strong></p>
              <p>NIT: 0623-260825-109-0</p>
              <p>NCR: 369547-1</p>
              <p>Correo: soporte@woamitech.com</p>
              <p>Teléfono: +503 2550-1846</p>
              <p>Dirección: San Salvador, El Salvador</p>
            </div>
          </div>

          {/* 2. Base Legal del Tratamiento */}
          <div>
            <h3 className="text-white text-xl mb-3">2. Base Legal del Tratamiento</h3>
            <p className="mb-2">El tratamiento de datos personales realizado por WOAMI TECH se fundamenta en:</p>
            <ul className="space-y-2 list-disc list-inside ml-4 mb-3">
              <li><strong className="text-purple-400">Ley de Protección de Datos Personales:</strong> Art. 1, 2, 4, 5, 6 y 7.</li>
              <li><strong className="text-purple-400">Ley de Comercio Electrónico:</strong> Art. 5, 6, 17, 18, 26, 27, 35 al 43.</li>
              <li><strong className="text-purple-400">Ley de Firma Electrónica:</strong> Art. 6, 7 y 8.</li>
              <li><strong className="text-purple-400">Ley de Protección al Consumidor:</strong> principios de información y transparencia.</li>
              <li><strong className="text-purple-400">Ley Especial contra Delitos Informáticos:</strong> disposiciones sobre acceso indebido y protección de sistemas.</li>
              <li><strong className="text-purple-400">Ley de Ciberseguridad:</strong> obligaciones de resguardo, disponibilidad e integridad de la información.</li>
            </ul>
            <p className="text-yellow-400">El uso de la plataforma constituye consentimiento expreso del titular conforme Art. 4 literal d) LPDP.</p>
          </div>

          {/* 3. Datos Personales Tratados */}
          <div>
            <h3 className="text-white text-xl mb-3">3. Datos Personales Tratados</h3>
            
            <h4 className="text-purple-400 mb-2">A. Datos proporcionados por el usuario</h4>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-4">
              <li>Nombre, teléfono y correo electrónico</li>
              <li>Dirección donde se ejecutará el servicio</li>
              <li>Descripción, fotografías o videos del problema</li>
              <li>Datos necesarios para procesar pagos (no almacenamos datos de tarjetas)</li>
            </ul>

            <h4 className="text-purple-400 mb-2">B. Datos de técnicos</h4>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-4">
              <li>Documento de identidad</li>
              <li>Comprobación de identidad</li>
              <li>Certificaciones técnicas</li>
              <li>Datos bancarios</li>
              <li>Portafolio</li>
            </ul>

            <h4 className="text-purple-400 mb-2">C. Datos generados automáticamente</h4>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-4">
              <li>Dirección IP</li>
              <li>Ubicación aproximada</li>
              <li>Tipo de dispositivo</li>
              <li>Cookies</li>
              <li>Registros y bitácoras de actividad</li>
            </ul>

            <h4 className="text-purple-400 mb-2">D. Datos derivados del uso</h4>
            <ul className="space-y-1 list-disc list-inside ml-4">
              <li>Chats</li>
              <li>Órdenes de servicio</li>
              <li>Historial de solicitudes</li>
              <li>Trazabilidad (Art. 5 y 6 LCE)</li>
            </ul>
          </div>

          {/* 4. Finalidades del Tratamiento */}
          <div>
            <h3 className="text-white text-xl mb-3">4. Finalidades del Tratamiento</h3>
            <p className="mb-2">Con fundamento en Art. 5 LPDP, los datos serán utilizados para:</p>
            <ul className="space-y-1 list-disc list-inside ml-4">
              <li>Gestionar la relación entre cliente y técnico.</li>
              <li>Administrar cuentas, notificaciones y solicitudes.</li>
              <li>Procesar pagos y comisiones (Art. 39 LCE).</li>
              <li>Garantizar la seguridad de la plataforma (compromisos de la Ley de Ciberseguridad).</li>
              <li>Prevenir fraudes y accesos no autorizados (Ley de Delitos Informáticos).</li>
              <li>Cumplir obligaciones legales y regulatorias.</li>
              <li>Generar evidencia digital de actos electrónicos (LFE Art. 6–8).</li>
              <li>Mejorar la experiencia del usuario.</li>
            </ul>
          </div>

          {/* 5. Derechos del Titular */}
          <div>
            <h3 className="text-white text-xl mb-3">5. Derechos del Titular (ARCO-POL)</h3>
            <p className="mb-2">El usuario podrá ejercer sus derechos conforme a los Art. 8 al 14 de la LPDP:</p>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-3">
              <li><strong className="text-purple-400">Derecho de Acceso</strong></li>
              <li><strong className="text-purple-400">Derecho de Rectificación</strong></li>
              <li><strong className="text-purple-400">Derecho de Cancelación o Supresión</strong></li>
              <li><strong className="text-purple-400">Derecho de Bloqueo</strong></li>
              <li><strong className="text-purple-400">Derecho de Oposición</strong></li>
              <li><strong className="text-purple-400">Derecho a la Portabilidad</strong></li>
              <li><strong className="text-purple-400">Derecho a la Limitación del Tratamiento</strong></li>
            </ul>
            <p className="text-yellow-400">Solicitudes: <a href="mailto:soporte@woamitech.com" className="text-purple-400 hover:text-purple-300">soporte@woamitech.com</a></p>
          </div>

          {/* 6. Conservación de los Datos */}
          <div>
            <h3 className="text-white text-xl mb-3">6. Conservación de los Datos</h3>
            <p className="mb-2">Conforme a Art. 6 lit. h LPDP:</p>
            <ul className="space-y-1 list-disc list-inside ml-4">
              <li><strong className="text-purple-400">Cuentas activas:</strong> mientras dure la relación jurídica.</li>
              <li><strong className="text-purple-400">Registros de servicios:</strong> mínimo 12 meses.</li>
              <li><strong className="text-purple-400">Mensajes de datos:</strong> según Art. 11 al 13-A de la Ley de Firma Electrónica.</li>
              <li><strong className="text-purple-400">Logs de seguridad:</strong> según normativa de ciberseguridad.</li>
            </ul>
          </div>

          {/* 7. Medidas de Seguridad */}
          <div>
            <h3 className="text-white text-xl mb-3">7. Medidas de Seguridad</h3>
            <p className="mb-2">WOAMI TECH implementa medidas de protección conforme a:</p>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-3">
              <li>Art. 5 lit. f LPDP (principio de seguridad)</li>
              <li>Ley de Ciberseguridad</li>
              <li>Ley de Delitos Informáticos</li>
            </ul>
            <p className="mb-2"><strong className="text-purple-400">Medidas:</strong></p>
            <ul className="space-y-1 list-disc list-inside ml-4">
              <li>Cifrado TLS</li>
              <li>Firewalls y protección contra intrusiones</li>
              <li>Monitoreo y bitácoras</li>
              <li>Control de acceso por roles</li>
              <li>Prevención de fraude</li>
              <li>Respaldos y continuidad de negocio</li>
            </ul>
          </div>

          {/* 8. Transferencias de Datos */}
          <div>
            <h3 className="text-white text-xl mb-3">8. Transferencias de Datos</h3>
            <p className="mb-2 text-slate-400">Permitidas conforme a Art. 15 LPDP y Art. 17–18 LCE.</p>
            <p className="mb-2">Los datos podrán compartirse únicamente con:</p>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-3">
              <li>Técnicos asignados al servicio</li>
              <li>Pasarelas de pago</li>
              <li>Proveedores tecnológicos</li>
              <li>Autoridades públicas mediante orden judicial o administrativa</li>
            </ul>
            <p className="text-yellow-400">WOAMI TECH no vende datos personales.</p>
          </div>

          {/* 9. Privacidad de Menores */}
          <div>
            <h3 className="text-white text-xl mb-3">9. Privacidad de Menores</h3>
            <p className="text-yellow-400">No se permite el uso de la plataforma por menores de 18 años.</p>
          </div>

          {/* 10. Modificaciones */}
          <div>
            <h3 className="text-white text-xl mb-3">10. Modificaciones</h3>
            <p className="mb-2">WOAMI TECH podrá modificar esta política conforme a lo establecido en las leyes mencionadas.</p>
            <p className="text-purple-400">La versión actualizada será publicada en el sitio o aplicación.</p>
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