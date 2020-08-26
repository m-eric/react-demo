/**
 * Sidebar toggled status
 */
export const setSidebarToggled = isToggled => {
  if (isToggled) {
    localStorage.setItem("ST", "T");
  } else {
    localStorage.removeItem("ST");
  }
};
export const getSidebarToggled = () => {
  return !!localStorage.getItem("ST");
};

/**
 * Auth data
 */
export const setAuth = authData => {
  localStorage.setItem("AU", utf8_to_b64(JSON.stringify(authData)));
};
export const getAuth = () => {
  const auth = localStorage.getItem("AU");
  if (!auth) return null;
  return JSON.parse(b64_to_utf8(auth));
};
export const removeAuth = () => {
  localStorage.removeItem("AU");
};

/**
 * Utility: basic encode/decode (works with cyrillic)
 */
const utf8_to_b64 = str => {
  return window.btoa(unescape(encodeURIComponent(str)));
};
const b64_to_utf8 = str => {
  return decodeURIComponent(escape(window.atob(str)));
};
