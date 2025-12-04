import React from 'react';
import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 rounded-2xl shadow-2xl border border-purple-500/30 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
          <h2 className="text-white text-2xl">⭐ Términos y Condiciones</h2>
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
            <h3 className="text-purple-400 text-xl mb-2">🔵 TÉRMINOS Y CONDICIONES DE USO</h3>
            <p className="text-white mb-1"><strong>WOAMI TECH S.A.S. de C.V.</strong></p>
            <p className="text-slate-400">Última actualización: diciembre 2025</p>
          </div>

          <p>
            Los presentes Términos y Condiciones regulan el acceso, navegación y uso de la plataforma WOAMI TECH, propiedad de <strong className="text-purple-400">WOAMI TECH S.A.S. de C.V.</strong>, y se emiten en cumplimiento de la <strong className="text-purple-400">Ley de Comercio Electrónico</strong>, <strong className="text-purple-400">Ley de Protección al Consumidor</strong>, <strong className="text-purple-400">Ley de Protección de Datos Personales</strong>, <strong className="text-purple-400">Ley de Firma Electrónica</strong>, <strong className="text-purple-400">Ley Especial contra Delitos Informáticos y Conexos</strong>, <strong className="text-purple-400">Ley de Ciberseguridad</strong>, y demás normativa aplicable en la República de El Salvador.
          </p>

          <p className="text-yellow-400">
            Al utilizar la plataforma, el usuario declara haber leído, entendido y aceptado íntegramente los presentes Términos y Condiciones.
          </p>

          {/* 1. Identidad del Prestador del Servicio de Intermediación */}
          <div>
            <h3 className="text-white text-xl mb-3">1. Identidad del Prestador del Servicio de Intermediación</h3>
            <p className="mb-3 text-slate-400">Conforme Art. 17 y 18 de la Ley de Comercio Electrónico, la información del proveedor es:</p>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/20">
              <p className="text-white mb-1"><strong>WOAMI TECH S.A.S. de C.V.</strong></p>
              <p>NIT: 0623-260825-109-0</p>
              <p>NCR: 369547-1</p>
              <p>Correo: soporte@woamitech.com</p>
              <p>Teléfono: +503 2550-1846</p>
              <p>Dirección: San Salvador, El Salvador</p>
              <p>Sitio web: https://woamitech.com</p>
            </div>
            <p className="mt-3 text-purple-400">WOAMI TECH actúa como intermediario digital en los términos de los Art. 20–24 de la Ley de Comercio Electrónico.</p>
          </div>

          {/* 2. Naturaleza Jurídica de WOAMI TECH */}
          <div>
            <h3 className="text-white text-xl mb-3">2. Naturaleza Jurídica de WOAMI TECH</h3>
            <p className="mb-3 text-slate-400">Con fundamento en los Art. 20 al 24 de la Ley de Comercio Electrónico:</p>
            <ul className="space-y-2 list-disc list-inside ml-4 mb-3">
              <li><strong className="text-purple-400">WOAMI TECH no presta servicios técnicos</strong>, sino que conecta digitalmente a clientes con técnicos independientes, quienes son los proveedores directos del servicio.</li>
            </ul>
            <p className="mb-2">Por lo tanto:</p>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-3">
              <li>La <strong className="text-yellow-400">responsabilidad técnica, ejecución, materiales y garantías recae en el técnico independiente</strong>, no en WOAMI TECH.</li>
              <li>WOAMI TECH únicamente facilita el contacto, comunicación, trazabilidad y pago digital.</li>
            </ul>
          </div>

          {/* 3. Aceptación Electrónica */}
          <div>
            <h3 className="text-white text-xl mb-3">3. Aceptación Electrónica</h3>
            <p className="mb-2">El usuario acepta los presentes Términos y Condiciones mediante medios electrónicos, los cuales poseen validez jurídica conforme:</p>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-3">
              <li>Art. 6 y 7 de la Ley de Firma Electrónica,</li>
              <li>Art. 5 y 6 de la Ley de Comercio Electrónico,</li>
              <li>Principio de equivalencia funcional de actos electrónicos.</li>
            </ul>
            <p className="text-purple-400">El clic, botón, registro o uso de la plataforma constituye consentimiento expreso.</p>
          </div>

          {/* 4. Registro del Usuario */}
          <div>
            <h3 className="text-white text-xl mb-3">4. Registro del Usuario</h3>
            
            <h4 className="text-purple-400 mb-2">4.1 Requisitos</h4>
            <p className="mb-2 text-slate-400">El usuario debe proporcionar información veraz, completa y actualizada, según exige:</p>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-4">
              <li>Art. 17 LCE</li>
              <li>Art. 4, 5 y 7 LPDP</li>
            </ul>

            <h4 className="text-purple-400 mb-2">4.2 Obligaciones del usuario</h4>
            <p className="mb-2">El usuario se compromete a:</p>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-3">
              <li>No suplantar identidades</li>
              <li>No crear cuentas falsas</li>
              <li>No utilizar la plataforma para fines ilícitos (LEDIC)</li>
              <li>Mantener la confidencialidad de su cuenta</li>
            </ul>
            <p className="text-yellow-400">WOAMI TECH podrá suspender cuentas fraudulentas.</p>
          </div>

          {/* 5. Funcionamiento del Proceso de Contratación Electrónica */}
          <div>
            <h3 className="text-white text-xl mb-3">5. Funcionamiento del Proceso de Contratación Electrónica</h3>
            <p className="mb-3 text-slate-400">El proceso se rige por los Art. 35 al 43 de la Ley de Comercio Electrónico.</p>
            
            <p className="mb-2"><strong className="text-purple-400">Etapas:</strong></p>
            <ol className="space-y-2 list-decimal list-inside ml-4">
              <li>El cliente solicita un servicio en la plataforma.</li>
              <li>Los técnicos disponibles reciben la solicitud.</li>
              <li>Un técnico acepta el servicio (momento de perfeccionamiento del contrato).</li>
              <li>Se genera un <strong className="text-yellow-400">contrato electrónico válido entre cliente ↔ técnico</strong>.</li>
              <li>WOAMI TECH conserva trazabilidad y mensajes de datos como evidencia digital (LCE Art. 5 y 6).</li>
              <li>El técnico ejecuta el servicio en la dirección indicada.</li>
            </ol>
          </div>

          {/* 6. Pagos, Comisiones y Distribución */}
          <div>
            <h3 className="text-white text-xl mb-3">6. Pagos, Comisiones y Distribución</h3>
            <p className="mb-3 text-slate-400">Conforme Art. 39 de la Ley de Comercio Electrónico:</p>
            
            <h4 className="text-purple-400 mb-2">6.1 Estructura del pago</h4>
            <p className="mb-2">El cliente paga un monto que incluye:</p>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-4">
              <li>El valor del servicio técnico (definido por el técnico)</li>
              <li>La comisión por uso de plataforma correspondiente a WOAMI TECH (visible antes de aceptar)</li>
            </ul>

            <h4 className="text-purple-400 mb-2">6.2 Intermediación de fondos</h4>
            <p className="mb-2">WOAMI TECH actúa como intermediario de cobro, recibiendo el pago y distribuyéndolo:</p>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-4">
              <li>Pago al técnico (menos comisión)</li>
              <li>Comisión para WOAMI TECH</li>
            </ul>

            <h4 className="text-purple-400 mb-2">6.3 Facturación</h4>
            <ul className="space-y-1 list-disc list-inside ml-4">
              <li>El técnico es responsable de la factura del servicio prestado.</li>
              <li>WOAMI TECH emite factura por su comisión o servicios digitales.</li>
            </ul>
          </div>

          {/* 7. Conducta del Usuario */}
          <div>
            <h3 className="text-white text-xl mb-3">7. Conducta del Usuario</h3>
            <p className="mb-2">El usuario se obliga a:</p>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-3">
              <li>No realizar prácticas fraudulentas</li>
              <li>No agredir, amenazar o acosar a técnicos</li>
              <li>Proporcionar datos correctos</li>
              <li>Permitir acceso seguro para la ejecución del servicio</li>
            </ul>
            <p className="text-yellow-400">El incumplimiento podrá resultar en suspensión.</p>
          </div>

          {/* 8. Obligaciones del Técnico Independiente */}
          <div>
            <h3 className="text-white text-xl mb-3">8. Obligaciones del Técnico Independiente</h3>
            <p className="mb-2 text-slate-400">El técnico, como proveedor directo (LPC Art. 4 lit. c), deberá:</p>
            <ul className="space-y-1 list-disc list-inside ml-4">
              <li>Cumplir con la oferta publicada (Art. 42 LCE)</li>
              <li>Brindar garantía (Art. 18 LPC)</li>
              <li>Ejecutar el servicio profesionalmente</li>
              <li>Presentarse con herramientas adecuadas</li>
              <li>Emitir factura cuando corresponda</li>
              <li>Responder por daños derivados de su trabajo</li>
            </ul>
          </div>

          {/* 9. Responsabilidad de WOAMI TECH */}
          <div>
            <h3 className="text-white text-xl mb-3">9. Responsabilidad de WOAMI TECH</h3>
            <p className="mb-3 text-slate-400">Con fundamento en Art. 20–24 de la LCE:</p>
            
            <p className="mb-2 text-yellow-400">WOAMI TECH NO ES RESPONSABLE por:</p>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-4">
              <li>Calidad del trabajo técnico</li>
              <li>Daños causados durante la ejecución</li>
              <li>Repuestos comprados por el técnico</li>
              <li>Negligencia profesional</li>
              <li>Tiempos de llegada del técnico</li>
              <li>Errores en diagnóstico o reparación</li>
              <li>Materiales defectuosos suministrados por el cliente</li>
            </ul>

            <p className="mb-2 text-green-400">WOAMI TECH SÍ ES RESPONSABLE por:</p>
            <ul className="space-y-1 list-disc list-inside ml-4">
              <li>Operación de la plataforma</li>
              <li>Seguridad y disponibilidad digital</li>
              <li>Trazabilidad de la contratación</li>
              <li>Protección de datos (LPDP Art. 5–7)</li>
              <li>Soporte tecnológico básico</li>
            </ul>
          </div>

          {/* 10. Seguridad y Protección de Datos */}
          <div>
            <h3 className="text-white text-xl mb-3">10. Seguridad y Protección de Datos</h3>
            <p className="mb-2">WOAMI TECH cumple con:</p>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-3">
              <li>Ley de Protección de Datos Personales</li>
              <li>Ley de Ciberseguridad</li>
              <li>Ley Especial contra Delitos Informáticos</li>
            </ul>
            <p className="mb-2"><strong className="text-purple-400">Implementa medidas como:</strong></p>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-3">
              <li>Cifrado</li>
              <li>Control de acceso</li>
              <li>Monitoreo</li>
              <li>Auditorías</li>
              <li>Protección contra accesos indebidos</li>
              <li>Trazabilidad de incidentes</li>
            </ul>
            <p className="text-slate-400">(Ver la Política de Privacidad para detalles completos).</p>
          </div>

          {/* 11. Propiedad Intelectual */}
          <div>
            <h3 className="text-white text-xl mb-3">11. Propiedad Intelectual</h3>
            <p className="mb-2 text-slate-400">Conforme a la Ley de Propiedad Intelectual:</p>
            <p className="mb-3">El diseño, código, marca, logotipos y contenido de WOAMI TECH son propiedad exclusiva de la empresa.</p>
            <p className="text-yellow-400">Está prohibida toda copia, reproducción, ingeniería inversa o distribución no autorizada.</p>
          </div>

          {/* 12. Política de Cancelación y Retracto */}
          <div>
            <h3 className="text-white text-xl mb-3">12. Política de Cancelación y Retracto</h3>
            <p className="mb-2">La cancelación y retracto se regirá por:</p>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-3">
              <li>Art. 13-A y 13-B de la Ley de Protección al Consumidor</li>
              <li>Art. 42–43 de la Ley de Comercio Electrónico</li>
            </ul>
            <p className="mb-2 text-yellow-400">El retracto no aplica cuando:</p>
            <ul className="space-y-1 list-disc list-inside ml-4 mb-3">
              <li>El servicio ya inició</li>
              <li>Es un servicio urgente</li>
              <li>El técnico se encuentra en camino</li>
              <li>El servicio fue concluido</li>
            </ul>
            <p className="text-slate-400">(Ver Política de Retracto para detalle).</p>
          </div>

          {/* 13. Terminación de la Cuenta */}
          <div>
            <h3 className="text-white text-xl mb-3">13. Terminación de la Cuenta</h3>
            <p className="mb-2">WOAMI TECH podrá suspender o eliminar cuentas por:</p>
            <ul className="space-y-1 list-disc list-inside ml-4">
              <li>Fraude</li>
              <li>Uso indebido</li>
              <li>Violación de leyes</li>
              <li>Amenazas o agresiones</li>
              <li>Violación de estos términos</li>
            </ul>
          </div>

          {/* 14. Modificaciones */}
          <div>
            <h3 className="text-white text-xl mb-3">14. Modificaciones</h3>
            <p className="mb-2">WOAMI TECH podrá modificar estos Términos y Condiciones.</p>
            <p className="mb-2">La versión vigente será publicada en la plataforma.</p>
            <p className="text-purple-400">El uso posterior de la plataforma constituye aceptación tácita de las modificaciones.</p>
          </div>

          {/* 15. Ley Aplicable y Jurisdicción */}
          <div>
            <h3 className="text-white text-xl mb-3">15. Ley Aplicable y Jurisdicción</h3>
            <p className="mb-2">Los presentes Términos se rigen por las leyes de la República de El Salvador.</p>
            <p className="text-purple-400">Cualquier controversia será conocida por los tribunales de San Salvador.</p>
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