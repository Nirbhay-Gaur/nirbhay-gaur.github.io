// Check if browser support service worker

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("Service Worker Registered");
  });
} else {
  console.log("Service Worker is not supported");
}
