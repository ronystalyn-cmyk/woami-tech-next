"use client";

import React, { useState } from "react";
import {
  X,
  Upload,
  CheckCircle2,
  MapPin,
  Clock,
  Award,
  Phone,
  Mail,
  User,
} from "lucide-react";
import Image from "next/image";
import { TermsModal } from "./TermsModal";
import { PrivacyModal } from "./PrivacyModal";

interface TechnicianRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Logo en public/assets/logo-woami.png
const logoImage = "/assets/logo-woami.png";

type AvailabilityType = "fulltime" | "parttime" | "weekends";

export function TechnicianRegistrationModal({
  isOpen,
  onClose,
}: TechnicianRegistrationModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Datos personales
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",

    // Servicios y experiencia
    services: [] as string[],
    yearsExperience: "",
    specialization: "",

    // Disponibilidad
    availability: "fulltime" as AvailabilityType,
    coverageArea: "",

    // Certificaciones
    hasCertifications: false,
    certificationDetails: "",
    hasInsurance: false,

    // Documentos
    idUploaded: false,
    certUploaded: false,
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const services = [
    { id: "electricidad", name: "Electricidad" },
    { id: "computadoras", name: "Computadoras y redes" },
    { id: "aire", name: "Aire acondicionado" },
    { id: "plomeria", name: "Plomería" },
    { id: "cctv", name: "CCTV y seguridad" },
    { id: "electrodomesticos", name: "Mantenimiento de electrodomésticos" },
    { id: "paneles-solares", name: "Paneles solares" },
  ];

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registro de técnico:", formData);
    // Aquí iría la lógica de envío al backend
    alert(
      "¡Registro enviado! Revisaremos tu solicitud y te contactaremos pronto."
    );
    onClose();
    setStep(1);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      services: [],
      yearsExperience: "",
      specialization: "",
      availability: "fulltime",
      coverageArea: "",
      hasCertifications: false,
      certificationDetails: "",
      hasInsurance: false,
      idUploaded: false,
      certUploaded: false,
    });
    setAcceptedTerms(false);
  };

  const canProceedToStep2 =
    formData.fullName && formData.email && formData.phone && formData.city;
  const canProceedToStep3 =
    formData.services.length > 0 && formData.yearsExperience;
  const canSubmit =
    !!canProceedToStep2 &&
    !!canProceedToStep3 &&
    !!formData.coverageArea &&
    acceptedTerms;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-slate-900 border border-purple-500/30 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-slate-900 border-b border-purple-500/20 p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-4">
            <Image
              src={logoImage}
              alt="WOAMI TECH Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <div>
              <h2 className="text-white mb-1">Únete a WOAMI TECH</h2>
              <p className="text-slate-400">Regístrate como técnico profesional</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 pt-6">
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((num) => (
              <React.Fragment key={num}>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                      step >= num
                        ? "bg-purple-600 border-purple-600 text-white"
                        : "border-slate-600 text-slate-500"
                    }`}
                  >
                    {num}
                  </div>
                  <span
                    className={`hidden sm:inline text-sm ${
                      step >= num ? "text-white" : "text-slate-500"
                    }`}
                  >
                    {num === 1 && "Datos personales"}
                    {num === 2 && "Servicios"}
                    {num === 3 && "Disponibilidad"}
                  </span>
                </div>
                {num < 3 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 ${
                      step > num ? "bg-purple-600" : "bg-slate-700"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 pt-0 space-y-6">
          {/* Step 1: Datos Personales */}
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                    <User className="w-4 h-4" />
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                    <Mail className="w-4 h-4" />
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50"
                    placeholder="juan@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                    <Phone className="w-4 h-4" />
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50"
                    placeholder="+503 7123-4567"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                    <MapPin className="w-4 h-4" />
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50"
                    placeholder="San Salvador"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                  <MapPin className="w-4 h-4" />
                  Dirección completa
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50"
                  placeholder="Calle, edificio, apartamento"
                />
              </div>
            </div>
          )}

          {/* Step 2: Servicios y Experiencia */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <label className="text-sm text-slate-300 mb-3 block">
                  Servicios que ofreces * (selecciona al menos uno)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        formData.services.includes(service.id)
                          ? "bg-purple-900/30 border-purple-500"
                          : "bg-slate-800/30 border-slate-700 hover:border-slate-600"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        className="w-5 h-5 rounded border-slate-600 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-white">{service.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                    <Clock className="w-4 h-4" />
                    Años de experiencia *
                  </label>
                  <select
                    required
                    value={formData.yearsExperience}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        yearsExperience: e.target.value,
                      })
                    }
                    className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50"
                  >
                    <option value="">Selecciona...</option>
                    <option value="0-1">Menos de 1 año</option>
                    <option value="1-3">1-3 años</option>
                    <option value="3-5">3-5 años</option>
                    <option value="5-10">5-10 años</option>
                    <option value="10+">Más de 10 años</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                    <Award className="w-4 h-4" />
                    Especialización principal
                  </label>
                  <input
                    type="text"
                    value={formData.specialization}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        specialization: e.target.value,
                      })
                    }
                    className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50"
                    placeholder="Ej: Instalaciones eléctricas industriales"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-3 text-slate-300 mb-3">
                  <input
                    type="checkbox"
                    checked={formData.hasCertifications}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hasCertifications: e.target.checked,
                      })
                    }
                    className="w-5 h-5 rounded border-slate-600 text-purple-600 focus:ring-purple-500"
                  />
                  Tengo certificaciones profesionales
                </label>

                {formData.hasCertifications && (
                  <textarea
                    value={formData.certificationDetails}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        certificationDetails: e.target.value,
                      })
                    }
                    className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 mt-2"
                    placeholder="Describe tus certificaciones..."
                    rows={3}
                  />
                )}
              </div>

              <label className="flex items-center gap-3 text-slate-300">
                <input
                  type="checkbox"
                  checked={formData.hasInsurance}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      hasInsurance: e.target.checked,
                    })
                  }
                  className="w-5 h-5 rounded border-slate-600 text-purple-600 focus:ring-purple-500"
                />
                Cuento con seguro de responsabilidad civil
              </label>
            </div>
          )}

          {/* Step 3: Disponibilidad y Documentos */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <label className="text-sm text-slate-300 mb-3 block">
                  Disponibilidad *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all text-center ${
                      formData.availability === "fulltime"
                        ? "bg-purple-900/30 border-purple-500"
                        : "bg-slate-800/30 border-slate-700 hover:border-slate-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="availability"
                      value="fulltime"
                      checked={formData.availability === "fulltime"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          availability: e.target
                            .value as AvailabilityType,
                        })
                      }
                      className="sr-only"
                    />
                    <div className="text-white mb-1">Tiempo completo</div>
                    <div className="text-xs text-slate-400">Lun-Sáb</div>
                  </label>

                  <label
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all text-center ${
                      formData.availability === "parttime"
                        ? "bg-purple-900/30 border-purple-500"
                        : "bg-slate-800/30 border-slate-700 hover:border-slate-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="availability"
                      value="parttime"
                      checked={formData.availability === "parttime"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          availability: e.target
                            .value as AvailabilityType,
                        })
                      }
                      className="sr-only"
                    />
                    <div className="text-white mb-1">Medio tiempo</div>
                    <div className="text-xs text-slate-400">
                      Horario flexible
                    </div>
                  </label>

                  <label
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all text-center ${
                      formData.availability === "weekends"
                        ? "bg-purple-900/30 border-purple-500"
                        : "bg-slate-800/30 border-slate-700 hover:border-slate-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="availability"
                      value="weekends"
                      checked={formData.availability === "weekends"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          availability: e.target
                            .value as AvailabilityType,
                        })
                      }
                      className="sr-only"
                    />
                    <div className="text-white mb-1">Fines de semana</div>
                    <div className="text-xs text-slate-400">Sáb-Dom</div>
                  </label>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                  <MapPin className="w-4 h-4" />
                  Área de cobertura *
                </label>
                <input
                  type="text"
                  required
                  value={formData.coverageArea}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      coverageArea: e.target.value,
                    })
                  }
                  className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50"
                  placeholder="Ej: San Salvador y alrededores"
                />
                <p className="text-xs text-slate-400 mt-1">
                  Indica las zonas donde puedes ofrecer tus servicios
                </p>
              </div>

              <div className="border-t border-slate-700 pt-6">
                <h3 className="text-white mb-4">Documentos de verificación</h3>

                <div className="space-y-4">
                  <div className="bg-slate-800/30 border border-purple-500/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-slate-300">
                        Documento de identidad
                      </label>
                      {formData.idUploaded && (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, idUploaded: true })
                      }
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 rounded-lg text-purple-300 transition-colors"
                    >
                      <Upload className="w-4 h-4" />
                      {formData.idUploaded
                        ? "Cambiar archivo"
                        : "Subir documento"}
                    </button>
                  </div>

                  <div className="bg-slate-800/30 border border-purple-500/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-slate-300">
                        Certificados profesionales (opcional)
                      </label>
                      {formData.certUploaded && (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, certUploaded: true })
                      }
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 rounded-lg text-purple-300 transition-colors"
                    >
                      <Upload className="w-4 h-4" />
                      {formData.certUploaded
                        ? "Cambiar archivo"
                        : "Subir certificados"}
                    </button>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                  <p className="text-sm text-purple-200">
                    <strong>Nota:</strong> Todos los documentos serán verificados
                    por nuestro equipo antes de activar tu perfil.
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <label className="flex items-center gap-3 text-slate-300">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="w-5 h-5 rounded border-slate-600 text-purple-600 focus:ring-purple-500"
                  />
                  Acepto los{" "}
                  <button
                    type="button"
                    className="text-purple-500 underline"
                    onClick={() => setTermsModalOpen(true)}
                  >
                    términos y condiciones
                  </button>{" "}
                  y la{" "}
                  <button
                    type="button"
                    className="text-purple-500 underline"
                    onClick={() => setPrivacyModalOpen(true)}
                  >
                    política de privacidad
                  </button>
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 pt-6 border-t border-slate-700">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
              >
                Anterior
              </button>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                disabled={
                  (step === 1 && !canProceedToStep2) ||
                  (step === 2 && !canProceedToStep3)
                }
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white rounded-lg transition-all"
              >
                Siguiente
              </button>
            ) : (
              <button
                type="submit"
                disabled={!canSubmit}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white rounded-lg transition-all"
              >
                Enviar registro
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Terms Modal */}
      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
      />

      {/* Privacy Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
