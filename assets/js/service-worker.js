// Check if browser support service worker

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("Service Worker Registered");
  });
} else {
  console.log("Service Worker is not supported");
}

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
