const cacheArr = [
  "/",
  "/images/bg.webp",
  "/images/aim-trainer.gif",
  "/images/face.png",
  "/images/overlay.png",
  "/images/whoami.gif",
  "/images/manjaro-i3-rice.gif",
  "/images/ride-o-meter.png",
  "/images/sita_project.png",
  "/images/color-game.png",
  "/assets/js/service-worker.js",
  "/assets/js/jquery.min.js",
  "/assets/js/browser.min.js",
  "/assets/js/breakpoints.min.js",
  "/assets/js/util.js",
  "/assets/js/main.js",
  "/assets/css/main.css",
  "/assets/css/fontawesome-all.min.css",
  "assets/webfonts/fa-regular-400.woff2",
  "assets/webfonts/fa-brands-400.woff2",
];

var version = "v1::";

// Install event for service worker
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(version + "offlineCache").then((cache) => {
      return cache.addAll(cacheArr);
    })
  );
});

// Fetch event for service worker
self.addEventListener("fetch", function (e) {
  //   console.log(e.request.url);

  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});

// Activate event for service worker
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) {
            return !key.startsWith(version);
          })
          .map(function (key) {
            return caches.delete(key);
          })
      );
    })
  );
});

//             |\                         /|
//             | \                       / |
//             |  \                     /  |
//             |   \   _,.-------.,_   /   |
//             |   ,\~'             '~/,   |
//             | ,;                     ;, |
//             |;                         ;|
//             |'         Damaged         '|
//            ,;                           ;,
//            ; ;      .           .      ; ;
//            | ;   ______       ______   ; |
//            |  `/~"     ~" . "~     "~\'  |
//            |  ~  ,-~~~^~, | ,~^~~~-,  ~  |
//             |   |        }:{        |   |
//             |   l       / | \       !   |
//             .~  (__,.--" .^. "--.,__)  ~.
//             |     ---;' / | \ `;---     |
//              \__.       \/^\/       .__/
//               V| \                 / |V
//                | |T~\___!___!___/~T| |
//                | |`IIII_I_I_I_IIII'| |
//                |  \,III I I I III,/  |
//                 \   `~~~~~~~~~~'    /
//                   \   .       .   /
//                     \.    ^    ./
//                       ^~~~^~~~^
