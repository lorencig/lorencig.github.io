import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export const useAnalytics = () => {
  const location = useLocation();

  // Track page views
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-GFQLY49M28', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  // Custom event tracking
  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  // Track button clicks
  const trackButtonClick = (buttonName: string, page?: string) => {
    trackEvent('click', 'button', buttonName, undefined);
  };

  // Track form submissions
  const trackFormSubmission = (formName: string) => {
    trackEvent('submit', 'form', formName);
  };

  // Track downloads
  const trackDownload = (fileName: string, fileType: string) => {
    trackEvent('download', 'file', `${fileName} (${fileType})`);
  };

  return {
    trackEvent,
    trackButtonClick,
    trackFormSubmission,
    trackDownload,
  };
};
