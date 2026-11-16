import { useEffect, useRef, useState } from 'react';
import { TopBar } from './components/TopBar';
import {
  PUBLISHED_GOOGLE_FORM_EMBED_URL,
  PUBLISHED_GOOGLE_FORM_VIEW_URL,
} from './data/guideContent';
import { LandingPage } from './pages/LandingPage';
import { ThankYouPage } from './pages/ThankYouPage';
import type { FunnelConfig } from './types/funnel';
import { downloadUsedCarGuidePdf } from './utils/generateGuidePdf';

const DEFAULT_CONFIG: FunnelConfig = {
  whatsappNumber: '2348060677222',
  isDemoWhatsapp: true,
  googleFormViewUrl: PUBLISHED_GOOGLE_FORM_VIEW_URL,
  googleFormEmbedUrl: PUBLISHED_GOOGLE_FORM_EMBED_URL,
};

function getRouteFromPath(): 'landing' | 'thank-you' {
  if (typeof window === 'undefined') return 'landing';
  return window.location.pathname.startsWith('/thank-you') ? 'thank-you' : 'landing';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'thank-you'>(getRouteFromPath);
  const [config, setConfig] = useState<FunnelConfig>(DEFAULT_CONFIG);

  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch('/api/config')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) setConfig(data as FunnelConfig);
      })
      .catch(() => {
        // Keep defaults if offline
      });
  }, []);

  useEffect(() => {
    const onPopState = () => {
      setCurrentPage(getRouteFromPath());
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigateTo = (page: 'landing' | 'thank-you', sectionId?: string) => {
    const targetPath = page === 'thank-you' ? '/thank-you' : '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setCurrentPage(page);

    if (page === 'thank-you') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToForm = () => {
    if (currentPage !== 'landing') {
      navigateTo('landing', 'register-guide');
      return;
    }
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrimaryAction = () => {
    if (currentPage === 'landing') {
      scrollToForm();
    } else {
      void downloadUsedCarGuidePdf();
    }
  };

  const primaryActionLabel =
    currentPage === 'landing' ? 'Get Your Free Guide' : 'Download Your Free Guide';

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
      <TopBar
        currentPage={currentPage}
        primaryActionLabel={primaryActionLabel}
        onNavigateLanding={(sectionId) => navigateTo('landing', sectionId)}
        onPrimaryAction={handlePrimaryAction}
      />

      <div className="flex-1">
        {currentPage === 'landing' ? (
          <LandingPage
            config={config}
            formRef={formRef}
            onScrollToForm={scrollToForm}
            onGoToThankYou={() => navigateTo('thank-you')}
          />
        ) : (
          <ThankYouPage
            config={config}
            onBackToLanding={() => navigateTo('landing')}
          />
        )}
      </div>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <p className="font-display text-sm font-bold text-[#0B1F3A]">Kelechi Motors</p>
            <p className="mt-1">
              © {new Date().getFullYear()} Kelechi Motors. Used-car buyer guide & vehicle enquiries.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('landing');
              }}
              className="hover:text-[#0B1F3A] hover:underline"
            >
              Homepage
            </a>
            <a
              href="#register-guide"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('landing', 'register-guide');
              }}
              className="hover:text-[#0B1F3A] hover:underline"
            >
              Register for Free Guide
            </a>
            <a
              href="/thank-you"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('thank-you');
              }}
              className="hover:text-[#0B1F3A] hover:underline"
            >
              Thank-You Page
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
