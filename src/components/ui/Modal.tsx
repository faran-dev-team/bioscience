import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconClose } from './Icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'max-w-2xl',
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A0B0D]/85 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.15, ease: [0.2, 0, 0.2, 1] }}
            className={`relative w-full ${maxWidth} bg-[#16181B] border border-[#2A2E33] p-6 z-10 overflow-hidden max-h-[90vh] flex flex-col`}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#2A2E33]">
              {title ? (
                <h3 className="font-heading text-xs uppercase tracking-widest text-[#E8E6E1] font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#BE7A28] inline-block" />
                  {title}
                </h3>
              ) : (
                <div />
              )}
              <button
                onClick={onClose}
                className="text-[#6B7178] hover:text-[#E8E6E1] transition-colors p-1 border border-transparent hover:border-[#2A2E33]"
                title="Close modal"
              >
                <IconClose size={18} />
              </button>
            </div>

            <div className="overflow-y-auto pr-1 flex-1">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
