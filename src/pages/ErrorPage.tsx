import React from 'react';
import { motion } from 'framer-motion';
import { RUOComplianceStrip } from '../components/features/hero/RUOComplianceStrip';
import { Button } from '../components/ui/Button';
import { IconAlertTriangle, IconShieldCheck, IconArrowRight } from '../components/ui/Icons';

interface ErrorPageProps {
  type?: '404' | '500' | '403' | 'maintenance' | 'offline';
  setActiveTab: (tab: string) => void;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ type = '404', setActiveTab }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="space-y-12 bg-[#0A0B0D] text-[#E8E6E1] font-body min-h-[60vh] flex flex-col justify-center"
    >
      <RUOComplianceStrip />

      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        {/* 404 Not Found (Section 10.7) */}
        {type === '404' && (
          <div className="space-y-4">
            <span className="font-mono text-4xl sm:text-6xl font-bold text-[#BE7A28] block">
              404
            </span>
            <h1 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#E8E6E1]">
              This page could not be located.
            </h1>
            <p className="text-xs sm:text-sm text-[#B9BEC4] font-body leading-relaxed max-w-lg mx-auto">
              The address may have changed, or the page may have been retired. Our catalogue, quality documentation, and research information are all reachable from the links below.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-interface">
              <Button
                variant="amber"
                size="md"
                onClick={() => {
                  setActiveTab('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>Return to Home</span>
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  setActiveTab('catalogue');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>Explore Research Products</span>
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>Contact Our Team</span>
              </Button>
            </div>
          </div>
        )}

        {/* 500 Server Error */}
        {type === '500' && (
          <div className="space-y-4">
            <span className="font-mono text-4xl sm:text-6xl font-bold text-[#8C3A3A] block">
              500
            </span>
            <h1 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#E8E6E1]">
              Something failed on our side.
            </h1>
            <p className="text-xs sm:text-sm text-[#B9BEC4] font-body leading-relaxed max-w-lg mx-auto">
              This is our error, not yours. Please try again shortly. If you were mid-order, nothing has been charged. If it persists, contact us at info@biosciencedepot.com and we will complete your order directly.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-interface">
              <Button variant="amber" size="md" onClick={() => window.location.reload()}>
                <span>Try Again</span>
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>Contact Our Team</span>
              </Button>
            </div>
          </div>
        )}

        {/* 403 Access Restricted */}
        {type === '403' && (
          <div className="space-y-4">
            <span className="font-mono text-4xl sm:text-6xl font-bold text-[#BE7A28] block">
              403
            </span>
            <h1 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#E8E6E1]">
              Access restricted.
            </h1>
            <p className="text-xs sm:text-sm text-[#B9BEC4] font-body leading-relaxed max-w-lg mx-auto">
              This area requires a verified account. Sign in, or contact our team to establish institutional access.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-interface">
              <Button
                variant="amber"
                size="md"
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>Contact Our Team</span>
              </Button>
            </div>
          </div>
        )}

        {/* Maintenance */}
        {type === 'maintenance' && (
          <div className="space-y-4">
            <h1 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#E8E6E1]">
              Scheduled maintenance.
            </h1>
            <p className="text-xs sm:text-sm text-[#B9BEC4] font-body leading-relaxed max-w-lg mx-auto">
              The site is briefly unavailable while we complete planned work. Orders and enquiries in progress are unaffected. For anything urgent, contact info@biosciencedepot.com.
            </p>
          </div>
        )}

        {/* Offline */}
        {type === 'offline' && (
          <div className="space-y-4">
            <h1 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#E8E6E1]">
              No connection detected.
            </h1>
            <p className="text-xs sm:text-sm text-[#B9BEC4] font-body leading-relaxed max-w-lg mx-auto">
              Reconnect and the page will reload automatically.
            </p>
          </div>
        )}
      </section>
    </motion.div>
  );
};
