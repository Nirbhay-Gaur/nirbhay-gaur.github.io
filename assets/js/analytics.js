// Script to Track Traffic

$.get("https://www.cloudflare.com/cdn-cgi/trace", function (data) {
  // Convert key-value pairs to JSON
  data = data
    .trim()
    .split("\n")
    .reduce(function (obj, pair) {
      pair = pair.split("=");
      return (obj[pair[0]] = pair[1]), obj;
    }, {});

  // stringify data
  data = JSON.stringify(data);

  // send data to statsbase
  $.ajax({
    type: "POST",
    url: "https://statbase.herokuapp.com/api/iplist",
    contentType: "application/json; charset=utf-8",
    data: data,
  });
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
