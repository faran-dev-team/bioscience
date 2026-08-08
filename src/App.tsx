import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AgeGateProvider } from './context/AgeGateContext';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AgeGateModal } from './components/layout/AgeGateModal';
import { CartDrawer } from './components/layout/CartDrawer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { QualityPage } from './pages/QualityPage';
import { ResearchInfoPage } from './pages/ResearchInfoPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { VerifyLotPage } from './pages/VerifyLotPage';
import { ErrorPage } from './pages/ErrorPage';
import { LotLookupModal } from './components/features/verification/LotLookupModal';
import { CustomSynthesisModal } from './components/features/synthesis/CustomSynthesisModal';
import { CheckoutModal } from './components/features/checkout/CheckoutModal';
import { Compound, CategorySlug } from './types/compound';
import { COMPOUNDS_DATA } from './data/compounds';

export const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCompound, setSelectedCompound] = useState<Compound | null>(null);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<CategorySlug>('catalogue');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modal States
  const [isLotModalOpen, setIsLotModalOpen] = useState(false);
  const [selectedLotNumber, setSelectedLotNumber] = useState('LOT 24-0817-C');
  const [isSynthesisOpen, setIsSynthesisOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Hash-based routing synchronization for deep links and back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash || hash === 'home') {
        setActiveTab('home');
        setSelectedCompound(null);
      } else if (hash.startsWith('category/')) {
        const catSlug = hash.replace('category/', '') as CategorySlug;
        setSelectedCategorySlug(catSlug);
        setActiveTab('category');
        setSelectedCompound(null);
      } else if (hash.startsWith('product/')) {
        const prodId = hash.replace('product/', '');
        const found = COMPOUNDS_DATA.find(c => c.id === prodId || c.sku.toLowerCase() === prodId.toLowerCase());
        if (found) {
          setSelectedCompound(found);
          setActiveTab('product');
        } else {
          setActiveTab('404');
        }
      } else if (hash.startsWith('search')) {
        const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
        const q = params.get('q') || '';
        setSearchQuery(q);
        setActiveTab('search');
      } else if (['about', 'why-choose-us', 'quality', 'research', 'faqs', 'contact', 'legal', 'verify', 'catalogue', '404'].includes(hash)) {
        setActiveTab(hash);
        setSelectedCompound(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (tab: string, hashUrl?: string) => {
    setSelectedCompound(null);
    setActiveTab(tab);
    if (hashUrl) {
      window.location.hash = hashUrl;
    } else {
      window.location.hash = `#/${tab}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLotLookup = (lotNum = 'LOT 24-0817-C') => {
    setSelectedLotNumber(lotNum);
    setIsLotModalOpen(true);
  };

  const handleSelectCompound = (compound: Compound) => {
    setSelectedCompound(compound);
    setActiveTab('product');
    window.location.hash = `#/product/${compound.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (slug: string) => {
    setSelectedCategorySlug(slug as CategorySlug);
    setActiveTab('category');
    window.location.hash = `#/category/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSearch = (q?: string) => {
    if (q) setSearchQuery(q);
    setActiveTab('search');
    window.location.hash = q ? `#/search?q=${encodeURIComponent(q)}` : `#/search`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (selectedCompound || activeTab === 'product') {
      const comp = selectedCompound || COMPOUNDS_DATA[0];
      return (
        <ProductDetailPage
          compound={comp}
          onBack={() => navigateTo('catalogue')}
          onOpenLotLookup={handleOpenLotLookup}
          onOpenSynthesis={() => setIsSynthesisOpen(true)}
          setActiveTab={navigateTo}
          onSelectCompound={handleSelectCompound}
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
            setActiveTab={navigateTo}
            onSelectCategory={handleSelectCategory}
          />
        );
      case 'about':
        return <AboutPage setActiveTab={navigateTo} />;
      case 'why-choose-us':
        return <WhyChooseUsPage setActiveTab={navigateTo} />;
      case 'quality':
        return <QualityPage onOpenLotLookup={handleOpenLotLookup} setActiveTab={navigateTo} />;
      case 'research':
        return <ResearchInfoPage setActiveTab={navigateTo} />;
      case 'faqs':
        return <FAQPage setActiveTab={navigateTo} />;
      case 'contact':
        return <ContactPage onOpenSynthesis={() => setIsSynthesisOpen(true)} setActiveTab={navigateTo} />;
      case 'legal':
        return <LegalPage setActiveTab={navigateTo} />;
      case 'category':
      case 'catalogue':
        return (
          <CategoryPage
            categorySlug={selectedCategorySlug}
            onSelectCompound={handleSelectCompound}
            onOpenLotLookup={handleOpenLotLookup}
            setActiveTab={navigateTo}
          />
        );
      case 'search':
        return (
          <SearchResultsPage
            initialQuery={searchQuery}
            onSelectCompound={handleSelectCompound}
            onOpenLotLookup={handleOpenLotLookup}
            setActiveTab={navigateTo}
            onOpenSynthesis={() => setIsSynthesisOpen(true)}
          />
        );
      case 'verify':
        return <VerifyLotPage />;
      case '404':
      default:
        return <ErrorPage type="404" setActiveTab={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0B0D] text-[#E8E6E1] selection:bg-[#BE7A28] selection:text-[#0A0B0D] font-body transition-colors duration-150">
      {/* 21+ RUO Compliance Access Protocol Gate (Sections 8.5 & 10.6) */}
      <AgeGateModal />

      {/* Main Brand Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={tab => navigateTo(tab)}
        onOpenLotLookup={handleOpenLotLookup}
        onOpenSynthesis={() => setIsSynthesisOpen(true)}
        onOpenSearch={handleOpenSearch}
      />

      {/* Slide-over Manifest Cart Drawer */}
      <CartDrawer onProceedToCheckout={() => setIsCheckoutOpen(true)} />

      {/* Main Page View Content */}
      <main className="flex-1 bg-[#0A0B0D]">{renderContent()}</main>

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

      {/* Exact 4-Column Brand Footer */}
      <Footer
        setActiveTab={tab => navigateTo(tab)}
        onOpenLotLookup={handleOpenLotLookup}
        onSelectCategory={handleSelectCategory}
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
