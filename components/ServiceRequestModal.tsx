"use client";

import React, { useState } from "react";
import {
  X,
  Zap,
  Calendar,
  MapPin,
  Phone,
  Mail,
  User,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type RequestType = "urgent" | "scheduled";

// Logo en public/assets/logo-woami.png
const logoImage = "/assets/logo-woami.png";

export function ServiceRequestModal({
  isOpen,
  onClose,
}: ServiceRequestModalProps) {
  const [requestType, setRequestType] = useState<RequestType>("urgent");
  const [selectedService, setSelectedService] = useState("");

  if (!isOpen) return null;

  const services = [
    { id: "electricidad", name: "Electricidad" },
    { id: "computadoras", name: "Computadoras y redes" },
    { id: "aire", name: "Aire acondicionado" },
    { id: "plomeria", name: "Plomería" },
    { id: "cctv", name: "CCTV y seguridad" },
    { id: "electrodomesticos", name: "Mantenimiento de electrodomésticos" },
    { id: "paneles-solares", name: "Paneles solares" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar la solicitud
    console.log("Solicitud enviada", { requestType, selectedService });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="p-8 pb-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src={logoImage}
              alt="WOAMI TECH Logo"
              width={48}
              height={48}
              className="w-12 h-12"
              priority
            />
            <h2 className="text-white">Solicitar un técnico</h2>
          </div>
          <p className="text-slate-400 text-center">
            Completa el formulario y te conectaremos con el técnico ideal
          </p>
        </div>

        {/* Request Type Selection */}
        <div className="px-8 mb-6">
          <label className="text-slate-300 mb-3 block">Tipo de servicio</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setRequestType("urgent")}
              className={`p-5 rounded-xl border-2 transition-all ${
                requestType === "urgent"
                  ? "border-purple-500 bg-purple-500/10"
                  : "border-slate-700 bg-slate-800 hover:border-purple-500/50"
              }`}
            >
              <Zap
                className={`w-8 h-8 mx-auto mb-3 ${
                  requestType === "urgent"
                    ? "text-purple-400"
                    : "text-slate-400"
                }`}
              />
              <div
                className={`mb-1 ${
                  requestType === "urgent"
                    ? "text-purple-400"
                    : "text-slate-300"
                }`}
              >
                Urgente
              </div>
              <div className="text-slate-400 text-sm">Atención inmediata</div>
            </button>
            <button
              type="button"
              onClick={() => setRequestType("scheduled")}
              className={`p-5 rounded-xl border-2 transition-all ${
                requestType === "scheduled"
                  ? "border-purple-500 bg-purple-500/10"
                  : "border-slate-700 bg-slate-800 hover:border-purple-500/50"
              }`}
            >
              <Calendar
                className={`w-8 h-8 mx-auto mb-3 ${
                  requestType === "scheduled"
                    ? "text-purple-400"
                    : "text-slate-400"
                }`}
              />
              <div
                className={`mb-1 ${
                  requestType === "scheduled"
                    ? "text-purple-400"
                    : "text-slate-300"
                }`}
              >
                Programada
              </div>
              <div className="text-slate-400 text-sm">
                Agenda fecha y hora
              </div>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 pb-8">
          <div className="space-y-5">
            {/* Service Selection */}
            <div>
              <label className="text-slate-300 mb-2 block">
                ¿Qué servicio necesitas?{" "}
                <span className="text-red-400">*</span>
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                required
              >
                <option value="">Selecciona un servicio</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Scheduled Date/Time */}
            {requestType === "scheduled" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-300 mb-2 block">
                    Fecha <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="text-slate-300 mb-2 block">
                    Hora <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                    required
                  />
                </div>
              </div>
            )}

            {/* Description */}
            <div>
              <label className="text-slate-300 mb-2 block">
                Describe el problema <span className="text-red-400">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Ej: El aire acondicionado no enciende y hace un ruido extraño..."
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                required
              />
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-slate-300 mb-2 block">
                  Nombre completo <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Juan Pérez"
                    className="w-full pl-11 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-slate-300 mb-2 block">
                  Teléfono <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="tel"
                    placeholder="+503 1234-5678"
                    className="w-full pl-11 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-slate-300 mb-2 block">
                Correo electrónico <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full pl-11 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="text-slate-300 mb-2 block">
                Dirección del servicio <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <textarea
                  rows={2}
                  placeholder="Calle, número, colonia, municipio..."
                  className="w-full pl-11 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  required
                />
              </div>
            </div>

            {/* Urgent Alert */}
            {requestType === "urgent" && (
              <div className="flex items-start gap-3 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <AlertCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="text-purple-300 mb-1">Servicio urgente</div>
                  <div className="text-slate-400">
                    Un técnico disponible se pondrá en contacto contigo en los
                    próximos minutos.
                  </div>
                </div>
              </div>
            )}

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 bg-slate-800 border border-slate-700 text-white rounded-lg hover:bg-slate-700 transition-all"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-500/30"
              >
                {requestType === "urgent"
                  ? "Solicitar ahora"
                  : "Programar servicio"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
