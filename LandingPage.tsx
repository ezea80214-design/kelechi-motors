import { useState, type RefObject } from 'react';
import { ArrowRight, CheckCircle2, ExternalLink, FileText, Loader2, ShieldCheck } from 'lucide-react';
import heroShowroomImg from '../assets/images/hero_dealership_showroom_1794791317614.jpg';
import usedCarGuideCoverImg from '../assets/images/used_car_guide_cover_1794791318613.jpg';
import vehicleInspectionBayImg from '../assets/images/vehicle_inspection_bay_1794791318890.jpg';
import {
  GUIDE_BENEFITS,
  GUIDE_HIGHLIGHTS,
  PUBLISHED_GOOGLE_FORM_EMBED_URL,
  PUBLISHED_GOOGLE_FORM_VIEW_URL,
} from '../data/guideContent';
import type { FunnelConfig } from '../types/funnel';
import { ResilientImage } from '../components/ResilientImage';

interface LandingPageProps {
  config: FunnelConfig;
  formRef: RefObject<HTMLDivElement | null>;
  onScrollToForm: () => void;
  onGoToThankYou: () => void;
}

export function LandingPage({
  config,
  formRef,
  onScrollToForm,
  onGoToThankYou,
}: LandingPageProps) {
  const [iframeReady, setIframeReady] = useState(false);

  const embedUrl = config.googleFormEmbedUrl || PUBLISHED_GOOGLE_FORM_EMBED_URL;
  const viewUrl = config.googleFormViewUrl || PUBLISHED_GOOGLE_FORM_VIEW_URL;

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
            <div className="flex flex-col justify-center lg:col-span-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
                <span className="font-semibold text-[#0B1F3A]">Kelechi Motors</span>
                <span aria-hidden="true">·</span>
                <span>One-Page Free PDF Guide</span>
                <span aria-hidden="true">·</span>
                <span>For Used-Car Buyers in Nigeria</span>
              </div>

              <h1
                className="mt-4 font-display font-bold tracking-tight text-[#0B1F3A]"
                style={{
                  fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                  lineHeight: 1.08,
                  textWrap: 'balance',
                }}
              >
                Avoid These 7 Costly Mistakes When Buying a Used Car.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Whether you are shopping for a Tokunbo or a Nigerian-used vehicle, knowing what to check before paying makes all the difference. Complete our Google Form below to access the one-page free PDF guide.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={onScrollToForm}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-md bg-[#0B1F3A] px-7 py-3 text-base font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#132C4E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B27]"
                >
                  <span>Get Your Free Guide</span>
                  <ArrowRight className="h-4 w-4 text-[#D8B143]" aria-hidden="true" />
                </button>

                <a
                  href="#seven-benefits"
                  className="inline-flex min-h-[44px] items-center text-sm font-semibold text-[#0B1F3A] underline decoration-[#C59B27] decoration-2 underline-offset-4 transition-colors hover:text-[#132C4E]"
                >
                  See the 7 mistakes covered
                </a>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600">
                <span>One-page printable PDF checklist</span>
                <span aria-hidden="true">·</span>
                <span>Clear checks for Tokunbo & Nigerian-used cars</span>
                <span aria-hidden="true">·</span>
                <span>Direct Google Forms registration</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-full min-h-[300px] overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                <ResilientImage
                  src={heroShowroomImg}
                  alt="Late-model navy sedan inside the bright modern Kelechi Motors dealership showroom"
                  fallbackTitle="Kelechi Motors Showroom"
                  className="h-full w-full object-cover lg:h-full"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061326]/90 via-[#061326]/55 to-transparent px-6 py-5 text-white">
                  <p className="text-xs font-medium text-[#D8B143]">Kelechi Motors Buyer Education</p>
                  <p className="mt-0.5 text-sm font-medium text-white">
                    Practical pre-purchase checks to help you buy a dependable used car with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Highlights Strip */}
      <section id="guide-highlights" className="border-y border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
          {GUIDE_HIGHLIGHTS.map((item) => (
            <div key={item.value} className="py-7 sm:px-6 first:sm:pl-0 last:sm:pr-0">
              <p className="font-display text-2xl font-bold tracking-tight text-[#0B1F3A] tabular-nums sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guide Introduction Section */}
      <section id="guide-overview" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                <ResilientImage
                  src={usedCarGuideCoverImg}
                  alt="Kelechi Motors Used-Car Buyer's Guide resting beside a car key fob"
                  fallbackTitle="One-Page Free PDF Guide"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-wide text-[#B4891E]">
                Inside the One-Page Free PDF Guide
              </p>
              <h2
                className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0B1F3A] sm:text-3xl"
                style={{ textWrap: 'balance' }}
              >
                A Practical One-Page Checklist You Can Use at Every Car Viewing
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Instead of reading dozens of pages while standing at a car lot, we condensed seven essential used-car buying checks onto a single clean PDF sheet. Keep it on your phone or print a copy before inspecting any Tokunbo or Nigerian-used vehicle.
              </p>

              <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
                <div className="flex items-start gap-4 py-4">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-[#B4891E]" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#0B1F3A]">
                      Bodywork, Flood Clues & Paintwork Checks
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Simple visual cues to spot water-damaged interiors, overspray, and heavy collision repairs in daylight.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#B4891E]" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#0B1F3A]">
                      Cold-Start, Transmission & Cooling System Checks
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      What to observe during a cold start, gear engagement test, and stationary air-conditioning check.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B4891E]" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#0B1F3A]">
                      Customs Papers, VIN Matching & Payment Discipline
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Reminders on verifying vehicle documents, chassis stamps, and written receipts before paying.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={onScrollToForm}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-[#0B1F3A] px-6 py-2.5 text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-[#132C4E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B27]"
                >
                  <span>Get Your Free Guide</span>
                  <ArrowRight className="h-4 w-4 text-[#D8B143]" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Benefits Section */}
      <section id="seven-benefits" className="border-t border-slate-200 bg-[#F8FAFC] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <p className="text-xs font-semibold tracking-wide text-[#B4891E]">
                7 Benefits of Downloading the Guide
              </p>
              <h2
                className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0B1F3A] sm:text-3xl"
                style={{ textWrap: 'balance' }}
              >
                Seven Costly Mistakes This One-Page Guide Helps You Avoid
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Each point explains a common pitfall when buying a used car in Nigeria and gives you a straightforward step you can apply right away.
              </p>

              <div className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white">
                <ResilientImage
                  src={vehicleInspectionBayImg}
                  alt="Mechanic checking an open vehicle engine bay during a pre-purchase inspection"
                  fallbackTitle="Pre-Purchase Vehicle Inspection"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-5">
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    Always pair your checklist with an independent check
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    The guide helps you rule out obvious red flags early before spending time or money on a full mechanic check.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
                {GUIDE_BENEFITS.map((benefit) => (
                  <article key={benefit.number} className="p-6 sm:p-7">
                    <div className="flex items-start gap-4 sm:gap-5">
                      <span className="font-mono text-lg font-semibold text-[#B4891E] tabular-nums shrink-0">
                        {benefit.number}.
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium text-slate-500">
                          Mistake to avoid: {benefit.mistakeTitle}
                        </p>
                        <h3 className="mt-1 font-display text-lg font-bold tracking-tight text-[#0B1F3A]">
                          {benefit.benefitTitle}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {benefit.description}
                        </p>
                        <p className="mt-3 text-xs font-semibold text-[#0B1F3A]">
                          Quick check · {benefit.practicalCheck}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Published Google Form Section */}
      <section
        id="register-guide"
        ref={formRef}
        className="border-t border-[#C59B27]/40 bg-[#0B1F3A] py-16 text-white sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5 lg:pt-4">
              <p className="text-xs font-semibold tracking-wide text-[#D8B143]">
                Free One-Page PDF Download
              </p>
              <h2
                className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
                style={{ textWrap: 'balance' }}
              >
                Get Your Free Guide
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-300">
                Enter your Full Name, Email Address, and Phone Number in the Kelechi Motors Google Form. Your response is saved directly to our connected Google Sheets spreadsheet. After submitting the form and seeing Google Forms’ confirmation message, use the link below the form to continue to the thank-you page and download your one-page PDF guide.
              </p>

              <ul className="mt-7 space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D8B143]" aria-hidden="true" />
                  <span>Direct submission to Kelechi Motors’ published Google Form</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D8B143]" aria-hidden="true" />
                  <span>One-page PDF guide covering 7 practical used-car buying mistakes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D8B143]" aria-hidden="true" />
                  <span>WhatsApp contact option on the thank-you page for vehicle enquiries</span>
                </li>
              </ul>

              <div className="mt-8 border-t border-white/15 pt-5">
                <a
                  href={viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 underline underline-offset-4 hover:text-white"
                >
                  <span>Having trouble viewing the embedded form? Open Google Form directly</span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl">
                <div className="border-b border-slate-200 bg-[#F8FAFC] px-5 py-3.5 sm:px-6">
                  <h3 className="font-display text-sm font-bold text-[#0B1F3A]">
                    Kelechi Motors – Free Used Car Buying Guide Registration
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-600">
                    Submit your Full Name, Email Address, and Phone Number in the form below.
                  </p>
                </div>

                {!iframeReady && (
                  <div className="flex items-center justify-center gap-2.5 px-6 py-12 text-sm text-slate-600">
                    <Loader2 className="h-4 w-4 animate-spin text-[#0B1F3A]" aria-hidden="true" />
                    <span>Loading Google Form...</span>
                  </div>
                )}

                <iframe
                  title="Kelechi Motors – Free Used Car Buying Guide Google Form"
                  src={embedUrl}
                  onLoad={() => setIframeReady(true)}
                  className={`block w-full border-0 bg-white ${
                    iframeReady ? 'h-[780px] sm:h-[680px]' : 'h-0'
                  }`}
                >
                  Loading Google Form...
                </iframe>

                <div className="flex flex-col items-start justify-between gap-3 border-t border-slate-200 bg-[#F8FAFC] px-5 py-4 sm:flex-row sm:items-center sm:px-6">
                  <p className="text-xs leading-relaxed text-slate-600">
                    Submitted the Google Form above and saw Google Forms’ confirmation?
                  </p>
                  <a
                    href="/thank-you"
                    onClick={(e) => {
                      e.preventDefault();
                      onGoToThankYou();
                    }}
                    className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-md bg-[#0B1F3A] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#132C4E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B27]"
                  >
                    <span>Continue to Thank-You Page</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#D8B143]" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
