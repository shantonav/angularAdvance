export const environment = {
  production: true,
  apiUrl: (window as { [key: string]: any })["env"]["apiUrl"] || "default",
  debug: (window as { [key: string]: any })["env"]["debug"] || false
};
