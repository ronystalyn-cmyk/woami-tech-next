"use client";

import React, { useState, useEffect } from "react";
import {
  LogOut,
  Menu,
  X,
  FileText,
  Clock,
  Star,
  CreditCard,
  Heart,
  Plus,
  Calendar,
  Phone,
  User,
} from "lucide-react";
import Image from "next/image";
import { ServiceRequestModal } from "./ServiceRequestModal";

// Logo en /public/assets/logo-woami.png
const logo = "/assets/logo-woami.png";

interface ClientDashboardProps {
  onLogout: () => void;
  autoOpenServiceModal?: boolean;
  onModalClose?: () => void;
}

type TabType = "solicitudes" | "pendientes" | "evaluados" | "pagos" | "preferidos";

export function ClientDashboard({
  onLogout,
  autoOpenServiceModal = false,
  onModalClose,
}: ClientDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>("solicitudes");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);

  // Abrir modal automáticamente si se requiere
  useEffect(() => {
    if (autoOpenServiceModal) {
      setServiceModalOpen(true);
    }
  }, [autoOpenServiceModal]);

  const handleCloseModal = () => {
    setServiceModalOpen(false);
    if (onModalClose) {
      onModalClose();
    }
  };

  // Mock data
  const solicitudesCreadas = [
    {
      id: "001",
      servicio: "Electricidad",
      descripcion: "Instalación de luminarias en sala",
      fecha: "2024-11-25",
      estado: "Completado",
      tecnico: "Carlos Martínez",
      monto: "$45.00",
    },
    {
      id: "002",
      servicio: "Plomería",
      descripcion: "Reparación de tubería con fuga",
      fecha: "2024-11-20",
      estado: "Completado",
      tecnico: "Ana García",
      monto: "$60.00",
    },
    {
      id: "003",
      servicio: "Aire Acondicionado",
      descripcion: "Mantenimiento preventivo de A/C",
      fecha: "2024-11-15",
      estado: "Completado",
      tecnico: "Roberto López",
      monto: "$80.00",
    },
  ];

  const solicitudesPendientes = [
    {
      id: "004",
      servicio: "Computadoras",
      descripcion: "Limpieza y optimización de laptop",
      fecha: "2024-11-28",
      estado: "En proceso",
      tecnico: "Mario Hernández",
      horario: "10:00 AM - 12:00 PM",
    },
    {
      id: "005",
      servicio: "CCTV",
      descripcion: "Instalación de 4 cámaras de seguridad",
      fecha: "2024-11-30",
      estado: "Programado",
      tecnico: "Luis Ramírez",
      horario: "2:00 PM - 5:00 PM",
    },
  ];

  const tecnicosEvaluados = [
    {
      id: "1",
      nombre: "Carlos Martínez",
      servicio: "Electricidad",
      calificacion: 5,
      comentario: "Excelente trabajo, muy profesional y puntual",
      fecha: "2024-11-25",
    },
    {
      id: "2",
      nombre: "Ana García",
      servicio: "Plomería",
      calificacion: 5,
      comentario: "Resolvió el problema rápidamente, muy recomendada",
      fecha: "2024-11-20",
    },
    {
      id: "3",
      nombre: "Roberto López",
      servicio: "Aire Acondicionado",
      calificacion: 4,
      comentario: "Buen servicio, llegó a tiempo",
      fecha: "2024-11-15",
    },
  ];

  const pagos = [
    {
      id: "PAY001",
      servicio: "Electricidad",
      tecnico: "Carlos Martínez",
      monto: "$45.00",
      fecha: "2024-11-25",
      metodo: "Tarjeta de crédito",
      estado: "Pagado",
    },
    {
      id: "PAY002",
      servicio: "Plomería",
      tecnico: "Ana García",
      monto: "$60.00",
      fecha: "2024-11-20",
      metodo: "Efectivo",
      estado: "Pagado",
    },
    {
      id: "PAY003",
      servicio: "Aire Acondicionado",
      tecnico: "Roberto López",
      monto: "$80.00",
      fecha: "2024-11-15",
      metodo: "Transferencia",
      estado: "Pagado",
    },
  ];

  const tecnicosPreferidos = [
    {
      id: "1",
      nombre: "Carlos Martínez",
      servicio: "Electricidad",
      calificacion: 5,
      servicios: 12,
      telefono: "+503 7234-5678",
      disponibilidad: "Disponible",
    },
    {
      id: "2",
      nombre: "Ana García",
      servicio: "Plomería",
      calificacion: 5,
      servicios: 8,
      telefono: "+503 7845-1234",
      disponibilidad: "Disponible",
    },
    {
      id: "3",
      nombre: "Roberto López",
      servicio: "Aire Acondicionado",
      calificacion: 4,
      servicios: 15,
      telefono: "+503 7156-9876",
      disponibilidad: "Ocupado",
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-purple-500/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="WOAMI TECH"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-white">
                  WOAMI <span className="text-purple-400">TECH</span>
                </h1>
                <p className="text-slate-400 text-xs">Panel de Cliente</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 text-slate-300">
                <User className="w-5 h-5" />
                <span>Juan Pérez</span>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Cerrar sesión
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-purple-500/30">
              <div className="flex items-center gap-2 text-slate-300 mb-4">
                <User className="w-5 h-5" />
                <span>Juan Pérez</span>
              </div>
              <button
                onClick={onLogout}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-white text-3xl mb-2">Bienvenido, Juan 👋</h2>
          <p className="text-slate-400">Gestiona tus servicios y técnicos desde aquí</p>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-8 border-b border-purple-500/30 overflow-x-auto">
          <div className="flex gap-4 min-w-max">
            <button
              onClick={() => setActiveTab("solicitudes")}
              className={`pb-4 px-2 border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === "solicitudes"
                  ? "border-purple-500 text-purple-400"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <FileText className="w-5 h-5" />
              Solicitudes Creadas
            </button>
            <button
              onClick={() => setActiveTab("pendientes")}
              className={`pb-4 px-2 border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === "pendientes"
                  ? "border-purple-500 text-purple-400"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <Clock className="w-5 h-5" />
              Solicitudes Pendientes
            </button>
            <button
              onClick={() => setActiveTab("evaluados")}
              className={`pb-4 px-2 border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === "evaluados"
                  ? "border-purple-500 text-purple-400"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <Star className="w-5 h-5" />
              Técnicos Evaluados
            </button>
            <button
              onClick={() => setActiveTab("pagos")}
              className={`pb-4 px-2 border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === "pagos"
                  ? "border-purple-500 text-purple-400"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <CreditCard className="w-5 h-5" />
              Pagos
            </button>
            <button
              onClick={() => setActiveTab("preferidos")}
              className={`pb-4 px-2 border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === "preferidos"
                  ? "border-purple-500 text-purple-400"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <Heart className="w-5 h-5" />
              Mis Técnicos Preferidos
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-4">
          {/* Solicitudes Creadas */}
          {activeTab === "solicitudes" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white text-xl">Solicitudes Creadas</h3>
                <button
                  onClick={() => setServiceModalOpen(true)}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-500/30 flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Nueva Solicitud
                </button>
              </div>
              <div className="grid gap-4">
                {solicitudesCreadas.map((solicitud) => (
                  <div
                    key={solicitud.id}
                    className="bg-slate-900 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm mb-2">
                          {solicitud.servicio}
                        </span>
                        <h4 className="text-white mb-1">{solicitud.descripcion}</h4>
                        <p className="text-slate-400 text-sm">Solicitud #{solicitud.id}</p>
                      </div>
                      <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">
                        {solicitud.estado}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-400">
                        <User className="w-4 h-4" />
                        {solicitud.tecnico}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar className="w-4 h-4" />
                        {solicitud.fecha}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <CreditCard className="w-4 h-4" />
                        {solicitud.monto}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Solicitudes Pendientes */}
          {activeTab === "pendientes" && (
            <div>
              <h3 className="text-white text-xl mb-6">Solicitudes Pendientes</h3>
              <div className="grid gap-4">
                {solicitudesPendientes.map((solicitud) => (
                  <div
                    key={solicitud.id}
                    className="bg-slate-900 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm mb-2">
                          {solicitud.servicio}
                        </span>
                        <h4 className="text-white mb-1">{solicitud.descripcion}</h4>
                        <p className="text-slate-400 text-sm">Solicitud #{solicitud.id}</p>
                      </div>
                      <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm">
                        {solicitud.estado}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-400">
                        <User className="w-4 h-4" />
                        {solicitud.tecnico}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar className="w-4 h-4" />
                        {solicitud.fecha}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Clock className="w-4 h-4" />
                        {solicitud.horario}
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                        Ver Detalles
                      </button>
                      <button className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors text-sm">
                        Cancelar Servicio
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Técnicos Evaluados */}
          {activeTab === "evaluados" && (
            <div>
              <h3 className="text-white text-xl mb-6">Técnicos Evaluados</h3>
              <div className="grid gap-4">
                {tecnicosEvaluados.map((tecnico) => (
                  <div
                    key={tecnico.id}
                    className="bg-slate-900 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-white mb-1">{tecnico.nombre}</h4>
                        <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                          {tecnico.servicio}
                        </span>
                      </div>
                      <div className="text-right">
                        {renderStars(tecnico.calificacion)}
                        <p className="text-slate-400 text-sm mt-1">{tecnico.fecha}</p>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm bg-slate-800/50 p-4 rounded-lg">
                      "{tecnico.comentario}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pagos */}
          {activeTab === "pagos" && (
            <div>
              <h3 className="text-white text-xl mb-6">Historial de Pagos</h3>
              <div className="bg-slate-900 border border-purple-500/30 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-800/50 border-b border-purple-500/30">
                      <tr>
                        <th className="px-6 py-4 text-left text-slate-300 text-sm">ID</th>
                        <th className="px-6 py-4 text-left text-slate-300 text-sm">Servicio</th>
                        <th className="px-6 py-4 text-left text-slate-300 text-sm">Técnico</th>
                        <th className="px-6 py-4 text-left text-slate-300 text-sm">Monto</th>
                        <th className="px-6 py-4 text-left text-slate-300 text-sm">Fecha</th>
                        <th className="px-6 py-4 text-left text-slate-300 text-sm">Método</th>
                        <th className="px-6 py-4 text-left text-slate-300 text-sm">Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pagos.map((pago) => (
                        <tr
                          key={pago.id}
                          className="border-b border-purple-500/20 hover:bg-slate-800/30"
                        >
                          <td className="px-6 py-4 text-slate-400 text-sm">{pago.id}</td>
                          <td className="px-6 py-4 text-white text-sm">{pago.servicio}</td>
                          <td className="px-6 py-4 text-slate-300 text-sm">{pago.tecnico}</td>
                          <td className="px-6 py-4 text-white">{pago.monto}</td>
                          <td className="px-6 py-4 text-slate-400 text-sm">{pago.fecha}</td>
                          <td className="px-6 py-4 text-slate-300 text-sm">{pago.metodo}</td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">
                              {pago.estado}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-4 bg-slate-800/50 border-t border-purple-500/30">
                  <div className="flex justify-between items-center">
                    <p className="text-slate-400 text-sm">Total pagado</p>
                    <p className="text-white text-xl">$185.00</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Técnicos Preferidos */}
          {activeTab === "preferidos" && (
            <div>
              <h3 className="text-white text-xl mb-6">Mis Técnicos Preferidos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tecnicosPreferidos.map((tecnico) => (
                  <div
                    key={tecnico.id}
                    className="bg-slate-900 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-white mb-1">{tecnico.nombre}</h4>
                        <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs">
                          {tecnico.servicio}
                        </span>
                      </div>
                      <button className="text-purple-400 hover:text-purple-300">
                        <Heart className="w-6 h-6 fill-purple-400" />
                      </button>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        {renderStars(tecnico.calificacion)}
                        <span className="text-slate-400 text-sm">
                          {tecnico.servicios} servicios
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Phone className="w-4 h-4" />
                        {tecnico.telefono}
                      </div>

                      <div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            tecnico.disponibilidad === "Disponible"
                              ? "bg-green-600/20 text-green-400"
                              : "bg-yellow-600/20 text-yellow-400"
                          }`}
                        >
                          {tecnico.disponibilidad}
                        </span>
                      </div>
                    </div>

                    <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-500/30">
                      Solicitar Servicio
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Service Request Modal */}
      <ServiceRequestModal isOpen={serviceModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
