"use client";

import React, { useState } from "react";
import {
  LogOut,
  Menu,
  X,
  Briefcase,
  Clock,
  CheckCircle,
  DollarSign,
  Settings,
  User,
  Calendar,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import Image from "next/image";

interface TechnicianDashboardProps {
  onLogout: () => void;
}

type TabType = "solicitudes" | "en-proceso" | "completadas" | "ganancias" | "perfil";

// Logo en public/assets/logo-woami.png
const logo = "/assets/logo-woami.png";

export function TechnicianDashboard({ onLogout }: TechnicianDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>("solicitudes");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mock data
  const solicitudesDisponibles = [
    {
      id: "101",
      servicio: "Electricidad",
      descripcion: "Reparación de tomacorrientes en cocina",
      cliente: "María López",
      ubicacion: "San Salvador, Centro",
      fecha: "2024-12-01",
      horario: "9:00 AM - 11:00 AM",
      presupuesto: "$50.00",
    },
    {
      id: "102",
      servicio: "Electricidad",
      descripcion: "Instalación de breakers nuevos",
      cliente: "José Ramírez",
      ubicacion: "Santa Tecla",
      fecha: "2024-12-02",
      horario: "2:00 PM - 4:00 PM",
      presupuesto: "$75.00",
    },
    {
      id: "103",
      servicio: "Electricidad",
      descripcion: "Revisión de cableado en sala",
      cliente: "Ana Martínez",
      ubicacion: "Antiguo Cuscatlán",
      fecha: "2024-12-03",
      horario: "10:00 AM - 12:00 PM",
      presupuesto: "$40.00",
    },
  ];

  const serviciosEnProceso = [
    {
      id: "004",
      servicio: "Electricidad",
      descripcion: "Instalación de luminarias en sala",
      cliente: "Juan Pérez",
      ubicacion: "San Salvador, Escalón",
      fecha: "2024-11-28",
      horario: "10:00 AM - 12:00 PM",
      telefono: "+503 7234-5678",
      estado: "En camino",
    },
  ];

  const serviciosCompletados = [
    {
      id: "001",
      servicio: "Electricidad",
      descripcion: "Instalación de luminarias en sala",
      cliente: "Juan Pérez",
      ubicacion: "San Salvador, Escalón",
      fecha: "2024-11-25",
      monto: "$45.00",
      calificacion: 5,
      comentario: "Excelente trabajo, muy profesional y puntual",
    },
    {
      id: "002",
      servicio: "Electricidad",
      descripcion: "Reparación de sistema eléctrico",
      cliente: "Carlos González",
      ubicacion: "Santa Tecla",
      fecha: "2024-11-20",
      monto: "$80.00",
      calificacion: 5,
      comentario: "Muy buen servicio, lo recomiendo",
    },
    {
      id: "003",
      servicio: "Electricidad",
      descripcion: "Mantenimiento preventivo",
      cliente: "Laura Hernández",
      ubicacion: "Antiguo Cuscatlán",
      fecha: "2024-11-15",
      monto: "$60.00",
      calificacion: 4,
      comentario: "Buen trabajo, llegó puntual",
    },
  ];

  const ganancias = [
    {
      mes: "Noviembre 2024",
      servicios: 12,
      total: "$850.00",
      pendiente: "$0.00",
      pagado: "$850.00",
    },
    {
      mes: "Octubre 2024",
      servicios: 15,
      total: "$1,120.00",
      pendiente: "$0.00",
      pagado: "$1,120.00",
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
                className="w-12 h-12"
                priority
              />
              <div>
                <h1 className="text-white">
                  WOAMI <span className="text-purple-400">TECH</span>
                </h1>
                <p className="text-slate-400 text-xs">Panel de Técnico</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 text-slate-300">
                <User className="w-5 h-5" />
                <span>Stalyn Rony</span>
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
                <span>Stalyn Rony</span>
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
          <h2 className="text-white text-3xl mb-2">Bienvenido, Stalyn 👋</h2>
          <p className="text-slate-400">
            Gestiona tus servicios y solicitudes desde aquí
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 shadow-lg shadow-purple-500/30">
            <div className="flex items-center justify-between mb-2">
              <Briefcase className="w-8 h-8 text-white" />
              <span className="text-purple-100 text-sm">Total</span>
            </div>
            <p className="text-white text-3xl">27</p>
            <p className="text-purple-100 text-sm">Servicios realizados</p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-lg shadow-blue-500/30">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-white" />
              <span className="text-blue-100 text-sm">Activos</span>
            </div>
            <p className="text-white text-3xl">1</p>
            <p className="text-blue-100 text-sm">En proceso</p>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 shadow-lg shadow-green-500/30">
            <div className="flex items-center justify-between mb-2">
              <Star className="w-8 h-8 text-white" />
              <span className="text-green-100 text-sm">Rating</span>
            </div>
            <p className="text-white text-3xl">4.8</p>
            <p className="text-green-100 text-sm">Calificación promedio</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl p-6 shadow-lg shadow-yellow-500/30">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-white" />
              <span className="text-yellow-100 text-sm">Este mes</span>
            </div>
            <p className="text-white text-3xl">$850</p>
            <p className="text-yellow-100 text-sm">Ganancias</p>
          </div>
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
              <Briefcase className="w-5 h-5" />
              Solicitudes Disponibles
            </button>
            <button
              onClick={() => setActiveTab("en-proceso")}
              className={`pb-4 px-2 border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === "en-proceso"
                  ? "border-purple-500 text-purple-400"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <Clock className="w-5 h-5" />
              En Proceso
            </button>
            <button
              onClick={() => setActiveTab("completadas")}
              className={`pb-4 px-2 border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === "completadas"
                  ? "border-purple-500 text-purple-400"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <CheckCircle className="w-5 h-5" />
              Completadas
            </button>
            <button
              onClick={() => setActiveTab("ganancias")}
              className={`pb-4 px-2 border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === "ganancias"
                  ? "border-purple-500 text-purple-400"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <DollarSign className="w-5 h-5" />
              Ganancias
            </button>
            <button
              onClick={() => setActiveTab("perfil")}
              className={`pb-4 px-2 border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === "perfil"
                  ? "border-purple-500 text-purple-400"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <Settings className="w-5 h-5" />
              Mi Perfil
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-4">
          {/* Solicitudes Disponibles */}
          {activeTab === "solicitudes" && (
            <div>
              <h3 className="text-white text-xl mb-6">Solicitudes Disponibles</h3>
              <div className="grid gap-4">
                {solicitudesDisponibles.map((solicitud) => (
                  <div
                    key={solicitud.id}
                    className="bg-slate-900 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm mb-2">
                          {solicitud.servicio}
                        </span>
                        <h4 className="text-white mb-1">
                          {solicitud.descripcion}
                        </h4>
                        <p className="text-slate-400 text-sm">
                          Solicitud #{solicitud.id}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 text-xl">
                          {solicitud.presupuesto}
                        </p>
                        <p className="text-slate-500 text-sm">Presupuesto</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
                      <div className="flex items-center gap-2 text-slate-400">
                        <User className="w-4 h-4" />
                        {solicitud.cliente}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin className="w-4 h-4" />
                        {solicitud.ubicacion}
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
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-500/30">
                        Aceptar Solicitud
                      </button>
                      <button className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors">
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* En Proceso */}
          {activeTab === "en-proceso" && (
            <div>
              <h3 className="text-white text-xl mb-6">Servicios En Proceso</h3>
              <div className="grid gap-4">
                {serviciosEnProceso.map((servicio) => (
                  <div
                    key={servicio.id}
                    className="bg-slate-900 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm mb-2">
                          {servicio.servicio}
                        </span>
                        <h4 className="text-white mb-1">
                          {servicio.descripcion}
                        </h4>
                        <p className="text-slate-400 text-sm">
                          Solicitud #{servicio.id}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm">
                        {servicio.estado}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
                      <div className="flex items-center gap-2 text-slate-400">
                        <User className="w-4 h-4" />
                        {servicio.cliente}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Phone className="w-4 h-4" />
                        {servicio.telefono}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin className="w-4 h-4" />
                        {servicio.ubicacion}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Clock className="w-4 h-4" />
                        {servicio.horario}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all">
                        Marcar como Completado
                      </button>
                      <button className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors">
                        Llamar Cliente
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Completadas */}
          {activeTab === "completadas" && (
            <div>
              <h3 className="text-white text-xl mb-6">Servicios Completados</h3>
              <div className="grid gap-4">
                {serviciosCompletados.map((servicio) => (
                  <div
                    key={servicio.id}
                    className="bg-slate-900 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm mb-2">
                          {servicio.servicio}
                        </span>
                        <h4 className="text-white mb-1">
                          {servicio.descripcion}
                        </h4>
                        <p className="text-slate-400 text-sm">
                          Solicitud #{servicio.id}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 text-xl">
                          {servicio.monto}
                        </p>
                        <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">
                          Pagado
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                      <div className="flex items-center gap-2 text-slate-400">
                        <User className="w-4 h-4" />
                        {servicio.cliente}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin className="w-4 h-4" />
                        {servicio.ubicacion}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar className="w-4 h-4" />
                        {servicio.fecha}
                      </div>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400 text-sm">
                          Calificación del cliente
                        </span>
                        {renderStars(servicio.calificacion)}
                      </div>
                      <p className="text-slate-300 text-sm">
                        "{servicio.comentario}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ganancias */}
          {activeTab === "ganancias" && (
            <div>
              <h3 className="text-white text-xl mb-6">Historial de Ganancias</h3>
              <div className="space-y-4">
                {ganancias.map((ganancia, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 border border-purple-500/30 rounded-xl p-6"
                  >
                    <h4 className="text-white text-xl mb-4">
                      {ganancia.mes}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-slate-800/50 p-4 rounded-lg">
                        <p className="text-slate-400 text-sm mb-1">Servicios</p>
                        <p className="text-white text-2xl">
                          {ganancia.servicios}
                        </p>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-lg">
                        <p className="text-slate-400 text-sm mb-1">Total</p>
                        <p className="text-white text-2xl">{ganancia.total}</p>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-lg">
                        <p className="text-slate-400 text-sm mb-1">Pendiente</p>
                        <p className="text-yellow-400 text-2xl">
                          {ganancia.pendiente}
                        </p>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-lg">
                        <p className="text-slate-400 text-sm mb-1">Pagado</p>
                        <p className="text-green-400 text-2xl">
                          {ganancia.pagado}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mi Perfil */}
          {activeTab === "perfil" && (
            <div>
              <h3 className="text-white text-xl mb-6">Mi Perfil</h3>
              <div className="bg-slate-900 border border-purple-500/30 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      value="Stalyn Rony"
                      className="w-full px-4 py-3 bg-slate-800 border border-purple-500/30 rounded-lg text-white"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Especialidad
                    </label>
                    <input
                      type="text"
                      value="Electricidad"
                      className="w-full px-4 py-3 bg-slate-800 border border-purple-500/30 rounded-lg text-white"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Teléfono
                    </label>
                    <input
                      type="text"
                      value="+503 7234-5678"
                      className="w-full px-4 py-3 bg-slate-800 border border-purple-500/30 rounded-lg text-white"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value="stalynrony@woami.com"
                      className="w-full px-4 py-3 bg-slate-800 border border-purple-500/30 rounded-lg text-white"
                      readOnly
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-slate-400 text-sm mb-2">
                      Ubicación
                    </label>
                    <input
                      type="text"
                      value="San Salvador, El Salvador"
                      className="w-full px-4 py-3 bg-slate-800 border border-purple-500/30 rounded-lg text-white"
                      readOnly
                    />
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-purple-500/30">
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-500/30">
                    Editar Perfil
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
