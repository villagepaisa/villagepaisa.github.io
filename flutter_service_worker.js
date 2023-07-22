'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "12bd7ccb9f3076e226ad4443acdd8ea5",
"assets/AssetManifest.json": "2ec05fe619f61cf0472c7453c8fdf2da",
"assets/assets/images/1.png": "df3be19fc5e90e108e7b3b60ec9f4cdc",
"assets/assets/images/1PAISA%2520LOGO.png": "fc2f6b558d55b846c6bcf318da0e6dda",
"assets/assets/images/2.png": "7b9ddc9b1400fc16b14b24ef3de631ce",
"assets/assets/images/3.png": "5fe8cb5f21ab7e6351783dd4b4f587b1",
"assets/assets/images/4.png": "5248c0fcae2e521240e8a9cf7d45c643",
"assets/assets/images/4064815.png": "da1934b0e36897134dd3964c3bba2e69",
"assets/assets/images/5.png": "97eedc648c7a0d8015b54302809ff9fe",
"assets/assets/images/A-Pay.png": "ca0d1b0979ef840ac9b5231d850441c9",
"assets/assets/images/AADHAR%2520PAY%2520(2).png": "e12a58417718a6d1238ba22c9f2edb69",
"assets/assets/images/AADHAR%2520PAY.png": "736337684eaef5a96bdf1a4cd3fbeb87",
"assets/assets/images/Account%2520Opening.png": "0c22a41a5fdcb2cfd915e6fef30bdbe2",
"assets/assets/images/Account_history.png": "3195902a231ad1de9ef65f46e1d4ddc5",
"assets/assets/images/addwallet.png": "41ff6acf81d71191f6924f2cb127bee3",
"assets/assets/images/AEPS%2520PAY.png": "71b168631b86a07dea26f072bd48d7db",
"assets/assets/images/aeps.jpg": "5409cb00324fea76a1b4d549777c2e3e",
"assets/assets/images/AEPS.png": "d5566c1feb95497df8853a1f20797faf",
"assets/assets/images/AepsICIC.png": "ea9ea7d0e40465a3c86dc00457ae2af5",
"assets/assets/images/airtel.png": "2d757c50829dc640a12a2b4e3e453ec8",
"assets/assets/images/Android.jpg": "f65be0a19046394a386913361729137c",
"assets/assets/images/banner.png": "444519dfed6c4db4f6eb71eb019d13ff",
"assets/assets/images/BBPS%25201.png": "a3865e271b9c778521cb72dd9247404d",
"assets/assets/images/bbps.png": "a4e603420f4ac2c134818ff74aaa05e0",
"assets/assets/images/bbps2.png": "e9eeea1079d02b8d68b618c5679a1354",
"assets/assets/images/big%2520size%2520logo.png": "635de891bfb853fd35485117e2877e36",
"assets/assets/images/bookCYLINDER.png": "e36bbee53d9b5e4d0ef650a5a7af847e",
"assets/assets/images/Broadband%2520Bill%2520Payment.png": "52fe1505da0db127ba71ac7f5634bc41",
"assets/assets/images/BRODBAND.png": "786926182553fb96dca8b7bd4e5a2b77",
"assets/assets/images/bus3.png": "3945d37a16125a477cda5bf0f49c0ab0",
"assets/assets/images/bus4.png": "f55dadc0e16a11539ee891b286f450e4",
"assets/assets/images/Business%2520license.png": "20e26034a317223dc7810807d64926bd",
"assets/assets/images/Business%2520Loan.png": "050e65b8c18861359740e020cf71d2ad",
"assets/assets/images/Cable%2520TV%2520Bill%2520Payment.jpg": "82b5785e29a86d10ed381eadbca67e79",
"assets/assets/images/callus.png": "fed173e02ead28b023ef9531ad26f16f",
"assets/assets/images/Cash-Deposit-All-Bank.png": "510a402348a46f34916a5d7ad6889add",
"assets/assets/images/cashback.png": "773f58889a82f1392ac2da5a88b369a5",
"assets/assets/images/chat.png": "4fca5bd209e28c8f18b6c2ab24d4a310",
"assets/assets/images/CIBIL%2520Reports.png": "7b7b541cce198d55c53f56bcf849bfe1",
"assets/assets/images/cms.jpg": "f53f606138ffbb3a7fcfdc5ab6c8b4e7",
"assets/assets/images/cms.png": "de87c3baf7258f666ee2eea5d7e75be1",
"assets/assets/images/company%2520regis.png": "dcced5a3f0059f3a8fe39c930c0e55d9",
"assets/assets/images/complain.png": "bd62b2d516e37a80c1c545e407754414",
"assets/assets/images/contact.png": "983b452a4d7a958a6f6d49797fa3e2f6",
"assets/assets/images/Credit-Card.png": "aa2eec91accd0a249d91e1c740fa809c",
"assets/assets/images/creditcard.png": "189dc23c36f2bd6b0a2426116a6f4d58",
"assets/assets/images/debit_card.png": "990b4f8fe03cac827e36080b7f09b9ac",
"assets/assets/images/Digital%2520marketing.jpg": "deb41f2098847c97c9e401d38b5ce98c",
"assets/assets/images/dishtv.png": "f58822796b2630ddc0315815a5e35220",
"assets/assets/images/DMT.png": "a7f5875be2a3fb60e229c93b0cc378b4",
"assets/assets/images/DTH%2520Recharge.png": "c8eaddbe817705b8c7bd447f83c07cf1",
"assets/assets/images/DTH.png": "94ea7fc26c583ebc7b8e8f4901d59128",
"assets/assets/images/dth2.png": "73e4b6fe2ad0e3a8926f0822bd7c8bfe",
"assets/assets/images/E%2520loan%2520-%2520Copy.png": "ba433a8bacb068d176ba04d77d132616",
"assets/assets/images/E%2520loan.png": "43c3753803704413f1abe132d09fee76",
"assets/assets/images/E-Coupon.png": "127a9f177ba49aba49ca686cefebed69",
"assets/assets/images/earning_slab.png": "72019ce978620ee07e0dd057959709df",
"assets/assets/images/Education%2520Fee%2520Payment.jpg": "f9336534edcc8e29f75a322348b5c13d",
"assets/assets/images/Education%2520Loan.png": "f4d019fb5a89c384979f25eeece2b55b",
"assets/assets/images/Education.png": "e5c24718fea70751fe35be3d03675d30",
"assets/assets/images/Electricity-Bill.jpg": "ec9405137959079613a424300f5b2fae",
"assets/assets/images/ELECTRICITY.png": "788bf1a1f9c043d7341de0097e00ef97",
"assets/assets/images/Estimations%2520&%2520Valuation.png": "f4652306193b41fa4717dda0da040f00",
"assets/assets/images/facebook.png": "8efab2382068a2c28569f118745c592e",
"assets/assets/images/Fastag%2520Recharge.png": "8381db34eb67a3d28187ba1022ef81cc",
"assets/assets/images/FASTAG.png": "be57f841f08c578281a1cea5e4c8e7ea",
"assets/assets/images/favicon.png": "d60e44b3d7f5be435d17d2fa55476735",
"assets/assets/images/feedback.png": "eaf28d60b7f060655c8fcebfbe01d3f9",
"assets/assets/images/Fintech.jpg": "578febab4c8c88b33b71ce4db18289c6",
"assets/assets/images/flight%2520book.png": "f84ccb4b626f41e6b0566241b586c684",
"assets/assets/images/Flight.png": "9b9ffbc400525796af838eb3d7164e66",
"assets/assets/images/Gas%2520Cylinder%2520Booking.png": "11f8b4a71096686d11b57732482785f6",
"assets/assets/images/gas.png": "388019dc15704f53ae33de064ecca30f",
"assets/assets/images/giftbox.png": "d4aadf998cada450258f964a2f4670ed",
"assets/assets/images/Gold%2520Loan.png": "41910e39a1495fa0bb955aa0cfd34c84",
"assets/assets/images/GST.png": "f021be144dce98814d35dbbd8270d500",
"assets/assets/images/head_shape_l.png": "962efaf67adeb8cf36a1416b37fa7ce2",
"assets/assets/images/head_shape_r.png": "4ef9ec9effe833c9a4cf024f8cb8d2c5",
"assets/assets/images/hero-img.png": "0bd6524d3017ff5afd4c436bcf000880",
"assets/assets/images/Hospital.png": "b72595067b39abb93cc44ad29176b5e7",
"assets/assets/images/hotel%2520(1).png": "fcfafc79d792edbc5f0d4ec832eed76c",
"assets/assets/images/Hotel.jpg": "321a7fb16425d3b66e281436b9f17685",
"assets/assets/images/hotel.png": "539902c7d6c886de8755819f3ed88e25",
"assets/assets/images/Housing%2520Loan.png": "e6bac6024da06901613aa12982566be3",
"assets/assets/images/Housing%2520Socity%2520(1).png": "d3d88c02e1e8ad38b4bd5f15e573e9bf",
"assets/assets/images/Housing%2520Socity.png": "b2b61a4cbdd1f961e17f8327f04127c4",
"assets/assets/images/icon.png": "dded2ce2d66d75b68bafd1fffe48c941",
"assets/assets/images/image_2022_07_27T19_31_16_957Z.png": "b71123cc6eb191584a56b37fb0ac6698",
"assets/assets/images/income%2520tax.png": "c07e461ebfb2b72335e1747d7b621e70",
"assets/assets/images/instagram.png": "4e3a9243b86f444e9e0607be31bda4ef",
"assets/assets/images/Insurance%2520Premium%2520Payment.png": "ba65444a9d901d1619cb97110a6bdad3",
"assets/assets/images/insurance-new.jpg": "be129116cf6b15d52b1ae2685343bed0",
"assets/assets/images/INSURANCE.png": "3b60584775122d8fa7377e791bb4ee2f",
"assets/assets/images/Landline%2520Bill%2520Payment.png": "e1bcce12b45f2e9995c0268702c599ea",
"assets/assets/images/LANDLINE.png": "9e26e90cdc36fb2246c35deb8ca62236",
"assets/assets/images/LIC-Logo.png": "d802c0566ae2f90b4c6c3fc3dacbe72b",
"assets/assets/images/LIC.png": "8770eb64e592887cd2678d27da4bb5d0",
"assets/assets/images/Loan%2520EMI%2520Payment.png": "f5129e9eabb270759c0ffcd898568a6f",
"assets/assets/images/LOAN%2520PAY.png": "459b9602fbf27a252cad541c15fed71b",
"assets/assets/images/Logo.png": "867c9aba808ad2e7db3d78d73db33831",
"assets/assets/images/M-ATM.png": "826596df9f3db94add9ce30c77d4d2ab",
"assets/assets/images/MATM.png": "d0dd82791ec5146d85a94e5480fbf290",
"assets/assets/images/Mobile%2520Recharge.png": "1864b4a8cf713483e3afa9607705f636",
"assets/assets/images/mobile-recharge-apiimg.jpg": "e5ea8d14df26832c4dd6acc36c1bc758",
"assets/assets/images/MONEY%2520TRANSFER.png": "99085133b6f2ba7f6f356b1fb639c49e",
"assets/assets/images/Money-Transfer-1.png": "df781c92169e954174aba3221196e352",
"assets/assets/images/money_credit_history.png": "db5b4cde302d09488c05bd45dbd25470",
"assets/assets/images/MONEY_TRANSFER.png": "1f349c62c78ea98aa7a3c50d03e8631d",
"assets/assets/images/MPOS.png": "ba49a8e29bc4de48539f37feeda0fadf",
"assets/assets/images/Municipal%2520&%2520Water%2520Bill%2520Payment.jpg": "023b5f02f81be9e414f12bd78a99f7bb",
"assets/assets/images/Mutual-Fund.png": "764e9b4e9f4c919be7fae3d31b68cbcd",
"assets/assets/images/offer.png": "381a28489be8011bb4455c353e27736f",
"assets/assets/images/OIP.jpg": "1e108696710adfadde4249b987fc3337",
"assets/assets/images/Online-money-Transfer-copy.jpg": "5b9e9ef6801c9c02a2ee8a8d0f628a8d",
"assets/assets/images/pan%2520card.png": "13bb0aa038f517d5d1ee2d62cddbfc44",
"assets/assets/images/pan1.jpg": "e85c2a19f4521de861d1ab028dc295ac",
"assets/assets/images/payment-gateway-integration.png": "586dc742d131949d043618b51d92b1bf",
"assets/assets/images/payment_gateway.png": "040dcb83e9f414bdbc0ba2b4b818fa88",
"assets/assets/images/Personal%2520Loan.jpg": "eb0c82bfc94a4bea3350a49043a56b22",
"assets/assets/images/PIPE%2520GAS.png": "0230b10b6237d0a87efce77b208dbdfa",
"assets/assets/images/Piped%2520Gas%2520Bill%2520Payment.jpg": "1935a8f604a7b54b7d0e1e81c661bf1e",
"assets/assets/images/Plannings.png": "3bdb28389f88f672f79ab8df877e7bb4",
"assets/assets/images/Postpaid%2520Bill%2520Payment.jpg": "75ab31d858e84a58a554d94f018bb7ad",
"assets/assets/images/Postpaid-Bill.png": "09970618845907c676c743c3567cfab0",
"assets/assets/images/POSTPAID.png": "ae5d9557e95455091663100ba61621f9",
"assets/assets/images/Prepaid.png": "d25ae286bd2f4b516d11ebdc8ef8a5fa",
"assets/assets/images/purchage%2520device.png": "b5f6d51c0438b6caaa38cc1a7647fc46",
"assets/assets/images/purchase%2520device.png": "dbec89ad12b5856ceaeb34fcbb02be8c",
"assets/assets/images/Qr-Payment-Transfer.png": "61677efc17e96d7d8a92c24039d06cc0",
"assets/assets/images/QR.png": "e3957ade326a77a1655484383b0d6a0b",
"assets/assets/images/qrimage.jpg": "3268dcb1b4f632d4c494c4a6c4ba5f34",
"assets/assets/images/QR_CODE_&_UPI_ID_API.jpg": "b5ae8b3e1d4ab7876ed707a090b568ac",
"assets/assets/images/refer&eran.png": "5e68dbc3620dee658f491616086a18b0",
"assets/assets/images/referearn.png": "04bc087e687ace5d1e24728ab449bf0d",
"assets/assets/images/refund.png": "f6330e1d5f5db42c5a9c441eeaa31c27",
"assets/assets/images/Reliance_Jio_Logo_(October_2015).svg.png": "9544aed92465157b249c128c1f860cb8",
"assets/assets/images/request_money.png": "1f0853d9eeeeb2eaf5573f9c19f81110",
"assets/assets/images/saas.png": "c1dfe6dd68da8625e7b7cf789eb295e1",
"assets/assets/images/services.png": "97b626d3c05da3399eec43895b5124c6",
"assets/assets/images/signup.png": "e2d2f010933d5921b4c8e125b43c8fd6",
"assets/assets/images/Subscription-Fees---Offline.png": "b00126085c49932cc01093812e9860c6",
"assets/assets/images/Subscription-Fees.png": "6f4ba33912a5857ef23b2d1bbb1d21df",
"assets/assets/images/successful.png": "82989b33f09b9cd0432bd0b976f276f7",
"assets/assets/images/super%2520savings%2520pack.png": "f24466db13c35189bb1756ebc6a1d9b1",
"assets/assets/images/tax.png": "b4733c98b70a0eed26df6a7284148b5d",
"assets/assets/images/Telpo-M1-3.png": "5563b70d0e303cdf713f24b6a2b15a94",
"assets/assets/images/Theme-Park.png": "34dedba633740acff228c14c21e8da4e",
"assets/assets/images/Train.png": "99034dd440c0e5b8e817542bc75a6510",
"assets/assets/images/travel.png": "7dd76d68fca9bf6757fdecf301e8a04f",
"assets/assets/images/Travels.png": "b3328fc7902f858546a93c4e4785de22",
"assets/assets/images/TV%2520CABEL.png": "cacfb2b14978fb430c65345ad9365d24",
"assets/assets/images/UPI.png": "9f6bda81a205f43e2fb5ee1aed3f4cc5",
"assets/assets/images/user1-128x128.jpg": "96ef26cc9d4986ee532ba1d1e7688085",
"assets/assets/images/ux%2520design.jpg": "afcb555ae38ca76fb26fcd255a0f264d",
"assets/assets/images/Vehicle%2520Loan.png": "2c38a8bf9ae6d893957c13e3339b3fed",
"assets/assets/images/wallet%2520Transfer.png": "eda7f245b38f407ac2d22ea9b7c35521",
"assets/assets/images/WATER%2520PAY.png": "3e98e556b4f19552f958fb3790f5647a",
"assets/assets/images/welcome-poster-spectrum-brush-strokes-white-background-colorful-gradient-brush-design-vector-paper-illustration-r-welcome-125370796.jpg": "f4ca3db82fd9b430bc36c0536e40e3f3",
"assets/assets/images/welcome-poster.jpg": "f4ca3db82fd9b430bc36c0536e40e3f3",
"assets/assets/images/whatsapp.png": "d8d0b17c8001a935225efe06f152d595",
"assets/assets/images/youtube.png": "360827b3648542fcde3fa120acbdc732",
"assets/assets/vp_fav2.jpeg": "b94fc3a324949b28ebaa57f596ea5f73",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "f519da59faa8be15089677ba7e254234",
"assets/NOTICES": "00b0e29b6aa04bb7fae7c526bf016a4b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "1688a1f7f0d7ca3d9a308c5e4b082663",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "f05f80451ce6d13246fcbc712f571bd7",
"icons/Icon-512.png": "59d11ab1acebc01bdc920b98ab5cf745",
"icons/Icon-maskable-192.png": "f05f80451ce6d13246fcbc712f571bd7",
"icons/Icon-maskable-512.png": "59d11ab1acebc01bdc920b98ab5cf745",
"index.html": "082b8f11ccbdae2a4de42c38f8270337",
"/": "082b8f11ccbdae2a4de42c38f8270337",
"main.dart.js": "fad3e9df847502ab2569dccff48bbf2f",
"manifest.json": "77ab029901b7271b44d377f81f4a4c06",
"splash/img/light-background.png": "798eec9424be80750d302c32a088397f",
"version.json": "344ab2d5be59fed246fd5a68baa7b909"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
