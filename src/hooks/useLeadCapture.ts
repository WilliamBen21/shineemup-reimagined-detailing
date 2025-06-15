
import { useState, useEffect, useCallback } from 'react';

interface LeadCaptureConfig {
  exitIntentEnabled: boolean;
  scrollTriggerEnabled: boolean;
  timeTriggerEnabled: boolean;
  scrollThreshold: number;
  timeDelay: number;
}

const defaultConfig: LeadCaptureConfig = {
  exitIntentEnabled: true,
  scrollTriggerEnabled: true,
  timeTriggerEnabled: true,
  scrollThreshold: 50, // 50% of page
  timeDelay: 30000, // 30 seconds
};

export const useLeadCapture = (config: Partial<LeadCaptureConfig> = {}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [trigger, setTrigger] = useState<'exit' | 'scroll' | 'time' | null>(null);
  const [hasTriggered, setHasTriggered] = useState(false);
  
  const finalConfig = { ...defaultConfig, ...config };

  // Exit intent detection
  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !hasTriggered && finalConfig.exitIntentEnabled) {
      setTrigger('exit');
      setModalOpen(true);
      setHasTriggered(true);
    }
  }, [hasTriggered, finalConfig.exitIntentEnabled]);

  // Scroll trigger
  const handleScroll = useCallback(() => {
    if (!finalConfig.scrollTriggerEnabled || hasTriggered) return;

    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercent >= finalConfig.scrollThreshold) {
      setTrigger('scroll');
      setModalOpen(true);
      setHasTriggered(true);
    }
  }, [hasTriggered, finalConfig.scrollTriggerEnabled, finalConfig.scrollThreshold]);

  // Time trigger
  useEffect(() => {
    if (!finalConfig.timeTriggerEnabled || hasTriggered) return;

    const timer = setTimeout(() => {
      setTrigger('time');
      setModalOpen(true);
      setHasTriggered(true);
    }, finalConfig.timeDelay);

    return () => clearTimeout(timer);
  }, [hasTriggered, finalConfig.timeTriggerEnabled, finalConfig.timeDelay]);

  useEffect(() => {
    // Check localStorage to see if user has already seen the modal
    const hasSeenModal = localStorage.getItem('leadCaptureShown');
    if (hasSeenModal) {
      setHasTriggered(true);
    }

    if (finalConfig.exitIntentEnabled) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }
    
    if (finalConfig.scrollTriggerEnabled) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleMouseLeave, handleScroll, finalConfig.exitIntentEnabled, finalConfig.scrollTriggerEnabled]);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    localStorage.setItem('leadCaptureShown', 'true');
  }, []);

  return {
    modalOpen,
    trigger,
    closeModal,
  };
};
