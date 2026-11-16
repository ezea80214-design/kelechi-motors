import { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  Loader2,
  MessageCircle,
} from 'lucide-react';
import usedCarGuideCoverImg from '../assets/images/used_car_guide_cover_1794791318613.jpg';
import { ResilientImage } from '../components/ResilientImage';
import {
  DEMO_WHATSAPP_NUMBER,
  WHATSAPP_PREFILL_MESSAGE,
} from '../data/guideContent';
import type { FunnelConfig } from '../types/funnel';
import {
  downloadUsedCarGuidePdf,
  GENERATED_PDF_FILENAME,
} from '../utils/generateGuidePdf';

interface ThankYouPageProps {
  config: FunnelConfig;
  onBackToLanding: () => void;
}

export function ThankYouPage({
  config,
  onBackToLanding,
}: ThankYouPageProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadClick = async () => {
    setDownloading(true);
    try {
      await downloadUsedCarGuidePdf();
      setDownloaded(true);
    } finally {
      setDownloading(false);
    }
  };

  const cleanWhatsapp =
    config.whatsappNumber.replace(/\D/g, '') || DEMO_WHATSAPP_NUMBER;
  const whatsappUrl = `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(
    WHATSAPP_PREFILL_MESSAGE
  )}`;
  const formattedWhatsappDisplay = `+${cleanWhatsapp}`;

  return (
    <main className="bg-[#F8FAFC] py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left / Primary Confirmation & Action Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              {/* Navy Confirmation Message Block */}
              <div className="border-b-2 border-[#C59B27] bg-[#0B1F3A] px-6 py-8 text-white sm:px-10 sm:py-10">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#D8B143]">
                  <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>Kelechi Motors</span>
                </div>

                <h1
                  className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-4xl"
                  style={{ textWrap: 'balance' }}
                >
                  Thank You for Registering!
                </h1>

                <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
                  Your request for the Kelechi Motors Used-Car Buying Guide has been received successfully.
                </p>
              </div>

              {/* Action Controls Directly Underneath Confirmation Message */}
              <div className="flex-1 space-y-6 p-6 sm:p-10">
                <div className="flex flex-col gap-3.5">
                  <button
                    type="button"
                    onClick={handleDownloadClick}
                    disabled={downloading}
                    className="inline-flex min-h-[50px] w-full sm:w-auto sm:self-start items-center justify-center gap-2.5 rounded-md bg-[#0B1F3A] px-7 py-3.5 text-sm font-semibold tracking-wide text-white whitespace-nowrap transition-colors duration-150 hover:bg-[#132C4E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B27] disabled:opacity-70"
                  >
                    {downloading ? (
                      <Loader2 className="h-4 w-4 animate-spin text-[#D8B143]" aria-hidden="true" />
                    ) : (
                      <Download className="h-4 w-4 text-[#D8B143]" aria-hidden="true" />
                    )}
                    <span>{downloading ? 'PREPARING PDF...' : 'DOWNLOAD YOUR FREE GUIDE'}</span>
                  </button>

                  {downloaded && (
                    <div
                      role="status"
                      className="flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                      <span>
                        Downloaded <strong>{GENERATED_PDF_FILENAME}</strong> to your device.
                      </span>
                    </div>
                  )}

                  <div className="pt-1">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-md border border-[#C59B27] bg-white px-6 py-3 text-sm font-semibold tracking-wide text-[#0B1F3A] whitespace-nowrap transition-colors duration-150 hover:bg-[#FBF6E6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B27]"
                    >
                      <MessageCircle className="h-4 w-4 text-[#16A34A]" aria-hidden="true" />
                      <span>CHAT WITH KELECHI MOTORS</span>
                    </a>
                  </div>
                </div>

                {/* Temporary Portfolio Demonstration WhatsApp Notice */}
                <div className="rounded-md border border-slate-200 bg-[#F8FAFC] px-4 py-3.5 text-xs leading-relaxed text-slate-600">
                  {config.isDemoWhatsapp ? (
                    <p>
                      <strong className="font-semibold text-[#0B1F3A]">
                        Temporary Portfolio Demonstration Contact:
                      </strong>{' '}
                      <span className="font-mono font-semibold text-[#0B1F3A]">
                        {formattedWhatsappDisplay}
                      </span>{' '}
                      (08060677222) — This is a temporary portfolio demonstration contact and is not Kelechi Motors’ verified official number.
                    </p>
                  ) : (
                    <p>
                      <strong className="font-semibold text-[#0B1F3A]">
                        Verified Official WhatsApp Contact:
                      </strong>{' '}
                      <span className="font-mono font-semibold text-[#0B1F3A]">
                        {formattedWhatsappDisplay}
                      </span>
                    </p>
                  )}
                </div>

                <div className="border-t border-slate-200 pt-5">
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      onBackToLanding();
                    }}
                    className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center sm:justify-start gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold tracking-wide text-[#0B1F3A] transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B27]"
                  >
                    <ArrowLeft className="h-4 w-4 text-[#B4891E]" aria-hidden="true" />
                    <span>RETURN TO HOMEPAGE</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right / Guide Visual Preview */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-200 bg-[#F8FAFC] p-6 sm:p-10 flex flex-col justify-center">
              <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                <ResilientImage
                  src={usedCarGuideCoverImg}
                  alt="Kelechi Motors Used Car Buying Guide"
                  fallbackTitle="Kelechi Motors Buying Guide"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate-600">
                Includes used-car buying advice, inspection tips, document verification, and payment safety checks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
