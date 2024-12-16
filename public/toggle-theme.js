const defaultPreference = "system"; // "light" or "dark" or "system"

let themePreference = getPreferTheme();
reflectPreference();

//#region Subscripción a eventos

// Se suscribe al evento de carga de la ventana para reflejar la preferencia de tema
window.onload = () => {
  function setThemeFeature() {
    reflectPreference();
  }

  setThemeFeature();

  document.addEventListener("astro:after-swap", setThemeFeature);
};

// Se suscribe al evento de cambio de tema del sistema y se aplica si la preferencia es "system"
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  if (themePreference === "system") reflectPreference();
});

/**
 * Cambia el tema de preferencia, guardando el valor en localStorage y reflejando el cambio en el DOM
 * @param {'system' | 'light' | 'dark'} theme
 */
window.setThemePreference = theme => {
  themePreference = theme;
  localStorage.setItem("theme-preference", themePreference);
  reflectPreference();
};

//#endregion

//#region Funciones auxiliares

/**
 * Obtiene la preferencia de tema actual, si no existe en localStorage, devuelve la preferencia por defecto
 * @returns {'system' | 'light' | 'dark'} Preferencia de tema actual
 */
function getPreferTheme() {
  const currentTheme = localStorage.getItem("theme-preference");
  if (currentTheme) return currentTheme;

  return defaultPreference;
}

/**
 * Obtiene la preferencia de tema del sistema
 * @returns {'dark' | 'light'} Preferencia de tema del sistema
 */
function getSystemPreference() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * Aplica la preferencia de tema en el DOM
 */
function reflectPreference() {
  const colorScheme = themePreference === "system" ? getSystemPreference() : themePreference === "dark" ? "dark" : "light";
  document.firstElementChild.setAttribute("data-theme", colorScheme);

  document.querySelector("#toggle-theme")?.setAttribute("aria-label", colorScheme);

  // Get a reference to the body element
  const body = document.body;

  // Check if the body element exists before using getComputedStyle
  if (body) {
    // Get the computed styles for the body element
    const computedStyles = window.getComputedStyle(body);

    // Get the background color property
    const bgColor = computedStyles.backgroundColor;

    // Set the background color in <meta theme-color ... />
    document.querySelector("meta[name='theme-color']")?.setAttribute("content", bgColor);
  }
}

//#endregion
