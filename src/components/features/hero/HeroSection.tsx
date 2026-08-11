import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../ui/Button';
import {
  IconSearch,
  IconShieldCheck,
  IconArrowRight,
  IconFileText,
  IconFlask
} from '../../ui/Icons';

interface HeroSectionProps {
  onExploreClick: () => void;
  onQualityClick: () => void;
  onLotVerifyClick: (lotNum: string) => void;
  onSynthesisClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onQualityClick,
  onLotVerifyClick,
}) => {
  const [heroLot, setHeroLot] = useState('');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // iOS and modern browser auto-playback enforcement
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Auto-play was prevented (e.g. low power mode on iOS)
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleHeroLotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroLot.trim()) {
      onLotVerifyClick(heroLot.trim().toUpperCase());
    } else {
      onLotVerifyClick('LOT 24-0817-C');
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0A0B0D] border-b border-[#2A2E33] transition-colors duration-150 min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* 1. DYNAMIC VIDEO BACKGROUND */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-[#08090B]">
        <video
          ref={videoRef}
          src="/videos/bioscience.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-[70%_center] sm:object-center transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-40 sm:opacity-45' : 'opacity-0'
          }`}
          style={{ filter: 'contrast(1.08) brightness(0.92) saturate(1.1)' }}
        />

        {/* Cinematic Multi-Layer Overlays for Optimal Text Readability & Scientific Mood */}
        {/* Horizontal dark gradient (stronger on left for typography) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0D] via-[#0A0B0D]/90 sm:via-[#0A0B0D]/80 to-[#0A0B0D]/65 pointer-events-none" />

        {/* Vertical gradient to smoothly blend top and bottom borders */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B0D]/90 via-transparent to-[#0A0B0D] pointer-events-none" />

        {/* Subtle Laboratory Technical Micro-Grid */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #BE7A28 1px, transparent 1px), linear-gradient(to bottom, #BE7A28 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Warm Amber Accent Radiance */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#BE7A28]/10 blur-3xl pointer-events-none rounded-full" />
      </div>

      {/* 2. HERO CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Copy Area (Left / Center) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0.2, 1] }}
            className="lg:col-span-8 space-y-5 sm:space-y-6"
          >
            {/* Top Compliance Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#16181B]/90 backdrop-blur-md border border-[#2A2E33] text-[10px] sm:text-[11px] font-mono text-[#E8E6E1] shadow-sm max-w-full">
              <span className="w-2 h-2 bg-[#BE7A28] rounded-full inline-block animate-pulse flex-shrink-0" />
              <span className="font-bold text-[#BE7A28] uppercase tracking-widest truncate">
                RESEARCH USE ONLY · UNITED STATES DOMESTIC SUPPLY
              </span>
            </div>

            {/* H1 Marketing Headline */}
            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold uppercase tracking-tight text-[#E8E6E1] leading-[1.14] sm:leading-[1.1]">
              Research-grade peptides. <br className="hidden sm:inline" />
              <span className="text-[#E8E6E1]">
                Stringent purity verification and rigorous quality control.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xs sm:text-sm md:text-base text-[#B9BEC4] font-body leading-relaxed max-w-3xl">
              BioScience Depot supplies high-purity research peptides to laboratories, universities, and biotechnology institutions across the United States. Every compound is synthesized to specification, analytically verified, and documented lot by lot — for research use only.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2 font-interface">
              <Button
                variant="amber"
                size="lg"
                onClick={onExploreClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg shadow-[#BE7A28]/10"
              >
                <span>Explore Research Products</span>
                <IconArrowRight size={16} />
              </Button>

              <button
                onClick={onQualityClick}
                className="w-full sm:w-auto text-xs font-mono font-bold uppercase tracking-wider text-[#BE7A28] hover:text-[#E3A455] hover:underline inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-[#16181B]/80 hover:bg-[#16181B] border border-[#2A2E33] transition-colors"
              >
                <span>View Quality Standards</span>
                <IconArrowRight size={14} />
              </button>
            </div>

            {/* Instant Lot Lookup HUD Box */}
            <div className="bg-[#16181B]/95 backdrop-blur-md border border-[#2A2E33] p-4 sm:p-5 mt-4 sm:mt-6 space-y-3 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 font-interface text-xs">
                <span className="text-[#E8E6E1] font-bold uppercase tracking-wider flex items-center gap-2 text-xs">
                  <IconShieldCheck size={16} amberAccent={true} className="flex-shrink-0" />
                  <span>Instant Lot Retrieval & COA Engine</span>
                </span>
                <span className="text-[#B9BEC4] text-[10px] sm:text-[11px] font-mono">
                  TRY SAMPLE:{' '}
                  <strong
                    className="text-[#BE7A28] hover:text-[#E3A455] cursor-pointer hover:underline"
                    onClick={() => setHeroLot('LOT 24-0817-C')}
                  >
                    LOT 24-0817-C
                  </strong>
                </span>
              </div>

              <form onSubmit={handleHeroLotSubmit} className="flex flex-col sm:flex-row gap-2 font-mono text-xs">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="ENTER LOT (e.g. LOT 24-0817-C)..."
                    value={heroLot}
                    onChange={e => setHeroLot(e.target.value)}
                    className="w-full bg-[#0A0B0D] border border-[#2A2E33] focus:border-[#BE7A28] text-xs pl-3 pr-9 py-2.5 text-[#E8E6E1] placeholder-[#6B7178] uppercase tracking-wider focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-2.5 top-2.5 text-[#B9BEC4] hover:text-[#BE7A28] transition-colors"
                    title="Verify Lot"
                  >
                    <IconSearch size={15} />
                  </button>
                </div>
                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-2.5 bg-[#1E2126] hover:bg-[#2A2E33] border border-[#2A2E33] text-[#E8E6E1]"
                >
                  <IconFileText size={14} amberAccent={true} />
                  <span>Verify Lot & View COA</span>
                </Button>
              </form>
            </div>

            {/* Scientific Trust Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-[#2A2E33]">
              <div>
                <span className="block font-mono font-bold text-[#BE7A28] text-base sm:text-lg">≥ 99.0%</span>
                <span className="text-[10px] sm:text-[11px] font-body uppercase text-[#B9BEC4]">HPLC Purity (Lot-Released)</span>
              </div>
              <div>
                <span className="block font-mono font-bold text-[#E8E6E1] text-base sm:text-lg">-20 °C</span>
                <span className="text-[10px] sm:text-[11px] font-body uppercase text-[#B9BEC4]">Validated Cold Chain</span>
              </div>
              <div>
                <span className="block font-mono font-bold text-[#E8E6E1] text-base sm:text-lg">100%</span>
                <span className="text-[10px] sm:text-[11px] font-body uppercase text-[#B9BEC4]">Analytically Documented</span>
              </div>
              <div>
                <span className="block font-mono font-bold text-[#E8E6E1] text-base sm:text-lg">NET 30</span>
                <span className="text-[10px] sm:text-[11px] font-body uppercase text-[#B9BEC4]">Institutional Accounts</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Lab Telemetry HUD & Live Video Controls */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4 lg:space-y-6">
            {/* Laboratory Synthesis Telemetry Card */}
            <div className="bg-[#16181B]/85 backdrop-blur-md border border-[#2A2E33] p-4 sm:p-5 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-[#2A2E33] pb-2.5">
                <div className="flex items-center gap-2 text-[#E8E6E1]">
                  <IconFlask size={15} amberAccent={true} />
                  <span className="font-bold text-[11px] uppercase tracking-wider">LAB FACILITY FEED</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#111B14] border border-[#3F6B4E] text-[#528B66] text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 bg-[#528B66] rounded-full animate-ping" />
                  <span>LIVE</span>
                </div>
              </div>

              <div className="space-y-2 text-[11px] text-[#B9BEC4]">
                <div className="flex justify-between items-center">
                  <span className="text-[#6B7178]">SYNTHESIS PHASE:</span>
                  <span className="text-[#E8E6E1] font-semibold">Solid-Phase (SPPS)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6B7178]">PURITY BENCHMARK:</span>
                  <span className="text-[#BE7A28] font-bold">≥ 99.0% HPLC</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6B7178]">CHAIN INTEGRITY:</span>
                  <span className="text-[#528B66] font-semibold">Monitored (-20°C)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6B7178]">RELEASE STATUS:</span>
                  <span className="text-[#E8E6E1]">COA Backed</span>
                </div>
              </div>

              {/* Video Motion Controls Bar */}
              <div className="pt-2 border-t border-[#2A2E33] flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="px-2.5 py-1 bg-[#1E2126] hover:bg-[#2A2E33] border border-[#2A2E33] text-[#E8E6E1] flex items-center gap-1.5 transition-colors"
                    title={isPlaying ? 'Pause Lab Video' : 'Play Lab Video'}
                  >
                    {isPlaying ? (
                      <>
                        <span className="inline-block w-1.5 h-2.5 border-l-2 border-r-2 border-[#BE7A28]" />
                        <span>PAUSE</span>
                      </>
                    ) : (
                      <>
                        <span className="inline-block w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-[#BE7A28]" />
                        <span>PLAY</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="px-2.5 py-1 bg-[#1E2126] hover:bg-[#2A2E33] border border-[#2A2E33] text-[#E8E6E1] transition-colors"
                    title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                  >
                    {isMuted ? 'AUDIO OFF' : 'AUDIO ON'}
                  </button>
                </div>

                <span className="text-[#6B7178] uppercase text-[9px] tracking-wider">
                  1080P HD / 60FPS
                </span>
              </div>
            </div>

            {/* Regulatory Protocol Card */}
            <div className="bg-[#16181B]/60 backdrop-blur-sm border border-[#2A2E33] p-4 text-[11px] font-body text-[#B9BEC4] space-y-1.5 hidden sm:block">
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#BE7A28] uppercase tracking-wider">
                <IconShieldCheck size={14} amberAccent={true} />
                <span>Analytical Release Guarantee</span>
              </div>
              <p className="leading-relaxed text-[11px]">
                Every shipment is verified against analytical specifications with lot-specific chromatographic release. Strictly for in-vitro research and laboratory experimentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
