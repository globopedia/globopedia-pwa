self.addEventListener("install", event => {
  console.log("Service Worker instalado.");
});

self.addEventListener("fetch", event => {
  // Cacheo básico podría ir aquí si se desea
});