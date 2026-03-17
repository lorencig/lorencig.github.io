import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

export const useAnalytics = () => {
  const location = useLocation();
  const measurementId = "G-GFQLY49M28";

  // Track page views
  useEffect(() => {
    if (window.gtag) {
      // HashRouter URLs are stored after '#', so parse hash first.
      const hashPath = window.location.hash.replace(/^#/, "");
      const fallbackPath = location.pathname + location.search;
      const pagePath = hashPath || fallbackPath || "/";

      window.gtag('event', 'page_view', {
        send_to: measurementId,
        page_path: pagePath,
        page_location: window.location.href,
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
