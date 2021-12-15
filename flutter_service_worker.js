'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "99587478ab5b6849b34c6e809d741120",
"splash/img/light-background.png": "eaf30ea90b4881e1795f55fe43d38114",
"splash/style.css": "5c74776d35b9e85d790997a9f2349a2d",
"index.html": "0b269c801f9ae7e7baf028dfa16e1bfd",
"/": "0b269c801f9ae7e7baf028dfa16e1bfd",
"main.dart.js": "6d4033b5671fe6abb3b8865c90ec81fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7bf663be74995fe0d9f18e5fd3f9ecb7",
".git/config": "a863f139647fe8808369fb7060f6f4cc",
".git/objects/57/d492fbc5e03ce6dfd9d69a60b2c4d7839d6607": "ff17a9562b37a679cb881bcc61f9f2be",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ad/46f60372c95452978e45240c5491be64cccf89": "e6eb4ce899a1b91adaa6be7b020ebc99",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/3736c0e45a7957127c19a95e50900305f58a8e": "531cfadd49bc56086ad777732bab8c79",
".git/objects/c8/d7475aefdb762698094b3f559221daa49e07b3": "0f708467c545aa9b6a9498421543e08d",
".git/objects/fb/80ea06dbe8e04d13dd40896297a40dba439f70": "910349376acba8f01bd6501260803d44",
".git/objects/29/23992f541f51c9ae31038f83b2322232a201e6": "a813c65465db2b03890c117d9eb894be",
".git/objects/42/6ecc858e2f39cc9856e18f2122554dce73b764": "68667d759702ff93f329dd1544565313",
".git/objects/87/936883bf015b4133ce65dbdad2bf18d9ae9dbe": "a4a990aac83500a2a2609c129cc66954",
".git/objects/80/46f60b9464c472100e5fdaf340dcd970b033e1": "27ec9629c5d5eef41ec85addd50e087b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/8389d2c7b2393a012b797a6af67defa8630546": "581a2f97aebe0e2520d2d9c07b2d8078",
".git/objects/75/74fe34bb867d308d998be63d4bcfb9846e95f0": "e1f2206e1b8336d0270fc5546b7903bc",
".git/objects/72/fd1e4fc824d93c89a87860c62d6fffa6cc019a": "a7e427c04685af08c2930f3496740ee1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/3933912f0d65cafa9f60a12f061e6a7b45ce4a": "ead68668638681c0b9c46f695edf6d0f",
".git/objects/38/649bc907f21b353793a5b03a9fc7918827497f": "91265870b43523c12e5d87fdc93a1c70",
".git/objects/9a/c29a824ab8d6bf4402bf36a27877e11cc26bfb": "734b5ccd642a485372767bdc376b62b8",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3a/6927aab8cece0cc6013b4b24b4c886b77282a7": "489e919c4bb9c5c8c043b1e37895d95a",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/a7/881e6949f3e47f0cffd33753a0445886b5ca71": "48649c4ecf3ae89de3f7a865302122fa",
".git/objects/a7/a5fa6bc14a3ae1ee9028f0db9896f57b682cd9": "90b6672f7094833e5745aea80f635c8e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/857d318a33cfebe4811705dfebefbbfe6aa7a6": "17fdf6d6995ee83dd6ffe4938a7593f9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/604d3afdda9c777cef63b138c69dce94dec93a": "091688fb97415295d8ea6e48f7a7c31e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f6/e091dbd2e0bbbba6280ac1fc3235a9f6a3c978": "b25e7006608f29965526feec58865cdd",
".git/objects/cb/68a2b14adf4e6b4174627a74670a30133d4742": "4a6b2aba8291f0b68ae2f461ff031e23",
".git/objects/cb/3efb2915d3d59014bf8f6da04df7eb0034d34a": "26bfa8d23bbd124c791c512aded8987e",
".git/objects/e0/3657570d27628c8f29852f4bbc9ccb5da00440": "b975b4999092350b3e89d74191ac26e5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/25f53d37670f04934d73292253a3bd32fa6f5b": "a39bb5a40e11dbe9988d6a3850de6bb3",
".git/objects/70/f48953adfd0e0b482347aaf85dc341aca56622": "f5e9929bd5b732a0230d8e41479c75ab",
".git/objects/12/15a709e679bee1a340e8e8cc7874dfa3228c39": "a07805504d4040109595a5b8c2c00639",
".git/objects/71/268b72317aecbb03d37ee8d8a8e65e034ae741": "31ecbbb500b52717236624493437a38c",
".git/objects/2b/59a0a42709501a54e7ae16fe68742ff9d13e47": "252edfce0faf7f73e430ae6772b1aace",
".git/objects/2b/2c4de91839914434d026e60ec3d59df36545f2": "242dc94223cd22f89a85ecc881afc275",
".git/objects/2b/3266ee47f75e9b42f3aede9f73e3319f4e7282": "8277461d156e8f4af192e094eb042ccc",
".git/objects/7f/adcbe12a96c4d7670572082d2f63214a455382": "db6b1cc55cef0ecbaa3a876a0a3ed6a5",
".git/objects/8e/de6f4ad2c98c5cecb3c3d9748bcb00c9712782": "8cbab6da3005ef8a4dfdb9fc20d36975",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "544a751c437f3cde47c24c007ea27520",
".git/logs/refs/heads/master": "544a751c437f3cde47c24c007ea27520",
".git/logs/refs/remotes/origin/master": "c84b240ed97a75bb0efb9046f9e137b2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "8a3c5637fcc49907db1e33c4e0dda2bd",
".git/refs/remotes/origin/master": "8a3c5637fcc49907db1e33c4e0dda2bd",
".git/index": "c3a13e4f9328fbed1944f8ced526b28e",
".git/COMMIT_EDITMSG": "64d42024f1a77ee5e61e4096bdebac78",
"assets/AssetManifest.json": "1d07acd46c8aaf3d99ceb6d9d71d0dd4",
"assets/NOTICES": "b77223da27eda5d31b2cdad90d59d1c9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/cool_alert/assets/flare/warning_check.flr": "ff4a110b8d905dedb4d4639a17399703",
"assets/packages/cool_alert/assets/flare/loading.flr": "b6987a8e6de74062b8c002539d2d043e",
"assets/packages/cool_alert/assets/flare/info_check.flr": "f6b81c2aa3ae36418c13bfd36d11ac04",
"assets/packages/cool_alert/assets/flare/success_check.flr": "9d163bcc6f6b58566e0abde7761a67a0",
"assets/packages/cool_alert/assets/flare/error_check.flr": "d9f54791d0d79935d22206966707e4b3",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/logo_transparent.png": "79ef17a19292c67d6da8a690d7d2cba3",
"assets/assets/requests.jpg": "2f046273933f76698bf8923b1b729fb0",
"assets/assets/events.jpg": "7c013827fe2db2752f63d66f25b06878",
"assets/assets/favicon.png": "eba412a1ea7f2280e3ac1d92bdbc7c47",
"assets/assets/No_image_available.png": "104a1a91ed03ecbac6e5ce17e130cf15",
"assets/assets/logo.png": "eaf30ea90b4881e1795f55fe43d38114",
"assets/assets/footballfield.jpg": "5fd24cc23a0ebe144ccc35b59468d2cf",
"assets/assets/facebook_cover_photo_1.png": "d880814a99f6accb182aca2989d39417",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
