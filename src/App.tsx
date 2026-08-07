import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AgeGateProvider } from './context/AgeGateContext';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AgeGateModal } from './components/layout/AgeGateModal';
import { CartDrawer } from './components/layout/CartDrawer';
import { HomePage } from './pages/HomePage';
import { CataloguePage } from './pages/CataloguePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { QualityPage } from './pages/QualityPage';
import { ResearchInfoPage } from './pages/ResearchInfoPage';
import { VerifyLotPage } from './pages/VerifyLotPage';
import { LegalPage } from './pages/LegalPage';
import { AboutContactPage } from './pages/AboutContactPage';
import { LotLookupModal } from './components/features/verification/LotLookupModal';
import { CustomSynthesisModal } from './components/features/synthesis/CustomSynthesisModal';
import { CheckoutModal } from './components/features/checkout/CheckoutModal';
import { Compound } from './types/compound';

export const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCompound, setSelectedCompound] = useState<Compound | null>(null);

  // Modal States
  const [isLotModalOpen, setIsLotModalOpen] = useState(false);
  const [selectedLotNumber, setSelectedLotNumber] = useState('LOT 24-0817-C');

  const [isSynthesisOpen, setIsSynthesisOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenLotLookup = (lotNum = 'LOT 24-0817-C') => {
    setSelectedLotNumber(lotNum);
    setIsLotModalOpen(true);
  };

  const handleSelectCompound = (compound: Compound) => {
    setSelectedCompound(compound);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCatalogue = () => {
    setSelectedCompound(null);
  };

  const renderContent = () => {
    if (selectedCompound) {
      return (
        <ProductDetailPage
          compound={selectedCompound}
          onBack={handleBackToCatalogue}
          onOpenLotLookup={handleOpenLotLookup}
        />
      );
    }

    switch (activeTab) {
      case 'home':
        return (
          <HomePage
            onSelectCompound={handleSelectCompound}
            onOpenLotLookup={handleOpenLotLookup}
            onOpenSynthesis={() => setIsSynthesisOpen(true)}
            setActiveTab={setActiveTab}
          />
        );
      case 'catalogue':
        return (
          <CataloguePage
            onSelectCompound={handleSelectCompound}
            onOpenLotLookup={handleOpenLotLookup}
          />
        );
      case 'quality':
        return <QualityPage onOpenLotLookup={handleOpenLotLookup} />;
      case 'research':
        return <ResearchInfoPage />;
      case 'about':
        return <AboutContactPage />;
      case 'legal':
        return <LegalPage />;
      case 'verify':
        return <VerifyLotPage />;
      default:
        return (
          <HomePage
            onSelectCompound={handleSelectCompound}
            onOpenLotLookup={handleOpenLotLookup}
            onOpenSynthesis={() => setIsSynthesisOpen(true)}
            setActiveTab={setActiveTab}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0B0D] text-[#E8E6E1] selection:bg-[#BE7A28] selection:text-[#0A0B0D] font-body">
      {/* 21+ RUO Compliance Access Protocol Gate */}
      <AgeGateModal />

      {/* Main Brand Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={tab => {
          setSelectedCompound(null);
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenLotLookup={handleOpenLotLookup}
        onOpenSynthesis={() => setIsSynthesisOpen(true)}
      />

      {/* Slide-over Manifest Cart Drawer */}
      <CartDrawer onProceedToCheckout={() => setIsCheckoutOpen(true)} />

      {/* Main Page View Content */}
      <main className="flex-1">{renderContent()}</main>

      {/* Global Lot Retrieval Modal */}
      <LotLookupModal
        isOpen={isLotModalOpen}
        onClose={() => setIsLotModalOpen(false)}
        initialLotNumber={selectedLotNumber}
      />

      {/* Custom Synthesis Specification Modal */}
      <CustomSynthesisModal
        isOpen={isSynthesisOpen}
        onClose={() => setIsSynthesisOpen(false)}
      />

      {/* Institutional Procurement Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Brand Footer */}
      <Footer
        setActiveTab={tab => {
          setSelectedCompound(null);
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenLotLookup={handleOpenLotLookup}
      />
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <AgeGateProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </AgeGateProvider>
    </ThemeProvider>
  );
}

export default App;
