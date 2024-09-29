export const detectModernBrowser = (userAgent: string | undefined): boolean => {
  if (!userAgent) return false;

  const isChromeNew = /Chrome\/(9[0-9]|1[0-9]{2})/.test(userAgent); // Chrome 90+
  const isSafariNew = /Version\/1[5-9]|Version\/[2-9][0-9]/.test(userAgent); // Safari 15+
  const isFirefoxNew = /Firefox\/(9[0-9]|1[0-9]{2})/.test(userAgent); // Firefox 90+
  const isEdgeNew = /Edg\/(9[0-9]|1[0-9]{2})/.test(userAgent); // Edge 90+

  return isChromeNew || isSafariNew || isFirefoxNew || isEdgeNew;
};
