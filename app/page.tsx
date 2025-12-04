'use client';

import React, { useState } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Services } from "../components/Services";
import { ClientBenefits } from "../components/ClientBenefits";
import { ForTechnicians } from "../components/ForTechnicians";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { AuthChoicePage } from "../components/AuthChoicePage";
import { LoginPage } from "../components/LoginPage";
import { RegisterPage } from "../components/RegisterPage";
import { ClientDashboard } from "../components/ClientDashboard";
import { TechnicianDashboard } from "../components/TechnicianDashboard";

type Page =
  | "home"
  | "auth-choice"
  | "login"
  | "register"
  | "client-dashboard"
  | "technician-dashboard";

type UserType = "client" | "technician" | null;

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [userType, setUserType] = useState<UserType>(null);
  const [openServiceModal, setOpenServiceModal] = useState(false);
  const [clientOnlyMode, setClientOnlyMode] = useState(false);

  const handleLoginSuccess = (type: UserType) => {
    setUserType(type);
    if (type === "client") {
      setCurrentPage("client-dashboard");
    } else if (type === "technician") {
      setCurrentPage("technician-dashboard");
    }
  };

  const handleLogout = () => {
    setUserType(null);
    setCurrentPage("home");
    setOpenServiceModal(false);
    setClientOnlyMode(false);
  };

  const handleRequestService = () => {
    setOpenServiceModal(true);
    setClientOnlyMode(true);
    setCurrentPage("auth-choice");
  };

  if (currentPage === "auth-choice") {
    return (
      <AuthChoicePage
        onBack={() => {
          setCurrentPage("home");
          setClientOnlyMode(false);
        }}
        onLogin={() => setCurrentPage("login")}
        onRegister={() => setCurrentPage("register")}
        clientOnlyMode={clientOnlyMode}
      />
    );
  }

  if (currentPage === "login") {
    return (
      <LoginPage
        onBack={() => setCurrentPage("auth-choice")}
        onLoginSuccess={handleLoginSuccess}
        clientOnlyMode={clientOnlyMode}
      />
    );
  }

  if (currentPage === "register") {
    return (
      <RegisterPage
        onBack={() => setCurrentPage("auth-choice")}
        clientOnlyMode={clientOnlyMode}
      />
    );
  }

  if (currentPage === "client-dashboard") {
    return (
      <ClientDashboard
        onLogout={handleLogout}
        autoOpenServiceModal={openServiceModal}
        onModalClose={() => setOpenServiceModal(false)}
      />
    );
  }

  if (currentPage === "technician-dashboard") {
    return <TechnicianDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      <Header onAuthClick={() => setCurrentPage("auth-choice")} />
      <main>
        <Hero onRequestService={handleRequestService} />
        <HowItWorks />
        <Services onRequestService={handleRequestService} />
        <ClientBenefits />
        <ForTechnicians />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
