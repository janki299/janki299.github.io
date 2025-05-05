'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cd88b842d47714448f0006d8c96c0f1e",
"version.json": "8c4dd7dd0e72a0c48766e90a719da18d",
"index.html": "c667c6e2d21235a04c8ebdf0955e3b72",
"/": "c667c6e2d21235a04c8ebdf0955e3b72",
"janki_Resume.pdf": "b6eebfde7f139d504dbd6d22b516be4d",
"main.dart.js": "d4574729b08c6fd304bdf4d7dffe31a9",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7ef29f42b4e274f92fd0a7ed8bb42a01",
".git/config": "c95529896166f96d907b009d45b88fff",
".git/objects/61/909410927f9d2b398aaea92a997b84848db659": "13aa96af854433d239e0cd838081c97b",
".git/objects/61/4cbe226009d39d5c91d0fa4becba53d1054ca7": "4e0d28dd24c2f65893b2527fde2116cc",
".git/objects/61/35b73da6cab244c3e1935bcbd95f5128c048b5": "5dafdb3eb0695b930570b1601152a398",
".git/objects/68/783cef97fbeca46c6c5e64fa7427a05ee4c7d3": "d59149d81e28f26abfc873cd94d30420",
".git/objects/6f/561183dbc5ee70610d1fa4f5c648d3c79a4918": "bb530c306a84d59b15bc7320c4ad0633",
".git/objects/51/d8566927d3baa2eafe838e8764a42a140d2f78": "37372ae504feeb19cbb8954aaa6036ac",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/983428228f7f3e6f426bd50a3902fbbb719868": "2d658c238fc88e7054ba004e7e1fbc61",
".git/objects/94/129bb7b9e59eb552a07c4a5e7ad2428402bd2a": "f0480b50fd77bcfbc99bc25f0f4f42d1",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/94/da8b0dc2e1d262686cacc9c96e276a9b76dea1": "f014d49582b704bf28b454cf6e87a5d7",
".git/objects/60/8057ddc91b3d251d3443a1ce2049d0c0af659e": "19522c7e3b69319d3adae20ca2d963fa",
".git/objects/60/8e5eab60d018d7bdc61b70ba9983184053896c": "6864ead914a1dc3f4fb2a755fb6dda13",
".git/objects/34/e4c03d5619bd1f10732ce1a151f8344398b2c5": "98950958fa7c236fdfc23bfe6820bb14",
".git/objects/5a/5374e535e4fba83e1a018711fbf1412af2c335": "b076564d8199e7733831fedd232a412d",
".git/objects/33/6f8db957ec85fa31d24df48ff2e4b0d5eafc73": "a2bb6a75739220f86e283efa06813892",
".git/objects/02/a43d3a6b01714ac66b7f3f8ae128b1e725d7cb": "d035baae5be9611a5644b4d839ce1a90",
".git/objects/b2/b6b4d33709340efeec674e3ec0388422af5731": "9b187318437fd93641b36fa79fb252fd",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/222e8df79133cf70c2a1ca44b8b6a86cc92bfa": "14030167866e5a3c8813922795ed9f67",
".git/objects/df/ec19037d4c072cf36355c4aedf1bea6f804ece": "3d0d941e8e5cc9e223129a6c68acf7ab",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a5/5f1486e2e7b131cdf79a8933ad0af9cf78c9c6": "bc02f140df3bd56a24ca3bc5cbca47ab",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/f08254253cf3eae0cb8635ca1a348332903ea4": "fd80a86a2e23aba27f3101386d983a8e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/7375dcc2aae03415a2405c8ab61b87bd144710": "8dc9388084dffef84cb6d7faa4893098",
".git/objects/f5/fdade4b68cbfb1c653628a0c63886b6e39386a": "7cc9f6d279e8d5733fddc4cdd465b51e",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/42/2c4d3d1a4ac58852744a817b62c613abaa82b0": "eaf6c8abd3fc53d1c0e2ac47cb617cdc",
".git/objects/42/090c4366153f9738e78bf62210b6da0a3cd215": "6a8d5683fbf700c6ec25441b4a85e364",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/19487962cb16e0130513516dc1bdfcb4d14df7": "07d5573d586ef1c9ae0c280a8789b99f",
".git/objects/17/03c19fa0f7de260ca94939df525fd966a7d55b": "006485ae48462f1f277b4b9bd2f14355",
".git/objects/8a/33060068af2380e4a080f83569273e78255905": "4b22b3bb3dadf5a109a69fbbe7e85afc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/8834b8d639d3e17c9e0d94423ff39b3b891abe": "82fd1838667470da6684a962a1ee89e5",
".git/objects/72/e1e0aed5c0ac9c25c483ba14422553af1998d0": "b716c1a03dc62694143dd3c6e88c6529",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/8b0de5439b4e0ad6dc87aec357841ae25f9613": "0b2afce7fdbcb0756d9a26568ae0e2a0",
".git/objects/00/79026954c1158344d784db57774ea976840fa8": "115225358e9168c80a2b363ab8ab99e4",
".git/objects/9a/d07050f2104d8508c2870dddbe020cfc692056": "4e828b8698697872f0edf36b5aa61a70",
".git/objects/36/6865f7a90098d7ac94e49aa302de31c67847bd": "834bececa9030f9782371ea6b23a3d23",
".git/objects/5c/5f7203e8debbe4f06acec4c9f19364891b10a5": "ed491b00f8b2310d194644b7da745950",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/96/1c2985e7a529620c351d468fdec05d496a5fed": "bdf6442d6b5532fe4a3e5f06cd59264b",
".git/objects/30/e94810a94c7cab6b58e1647c968aca5661732b": "dca70369003f46a486d67184ed11eee5",
".git/objects/30/0a9d7c3079bfee092a759575ff73c5e23bf7b6": "ef2eb646c892b20a41229304c2497c58",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/01/cfe952b4ff5e7d38965c8676f655c23b531e97": "515b30cb7f55ddcccd813eeaf9c086c6",
".git/objects/97/6cf9c7c9896f237763ff064f92ff675ea1c568": "ab950ec9f8b73b43e4992a22dfcd8829",
".git/objects/63/809d59d8200399e1d73790736978b5fb0e8618": "5af00dd7078c3e7d1419238f11e3e3ce",
".git/objects/0a/069f252a7d82433b8a346a04f8b111dc65fae3": "6b684121010371505b7c85503c70ef5c",
".git/objects/d3/cd909664e2e8e7b3da6cf7a8a4bd6efa12b0d4": "727e374793e2dd3d1b52b8fe2a980ec0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/803165657ffd96537548bdfcf67c3b32bd5d58": "00aaa49c799dee069a5db6d15a5bf9e7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9230858473d6feafb7dde4b4c760f5f2a85e06": "bb7a1c1fe0812e79c4270501b3bdf628",
".git/objects/de/f984e890c985e106c3ba3bd61aa54675453e34": "f26e93cb924b1b8e98d2567ad9c81dbe",
".git/objects/b0/caf667bc8d351c3b6c1e671fc6064f01d28093": "037d2384b630dc818241884dff89d7dd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/2ffcb90d1fc833c20e39892e5154c0ddc939ae": "897f1603fef034c484794ca95418b80a",
".git/objects/f9/e383e3d0db4c8a195e243aecb682480de27331": "93ad81fda72eb440899e51e0a2cf5232",
".git/objects/ff/1378ae7d4914beb0576e1ec1cecbdf15c245d0": "7cb147ae1c921e4606707f4b31af0acb",
".git/objects/c2/886a439c153a2c35c1b26fd29feb2ea890fa5a": "919034188f54460d7604f941153de031",
".git/objects/f6/bf308579a2993f5b456eb3507e11b13334ad7c": "6c3b5019f10f47533cf5eb5a6a053138",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/2d/c83524dba229b998419021d55089ce3ad5cba4": "fb915022ccd0ff9fd4306bc4c295af3a",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/12/83739fa12a44f52a1cebfd3c773f59ce96336d": "b19dd0bcc269558e6c3902a1a4fb254b",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0a85fbce91547c67fb5642aefb930493",
".git/logs/refs/heads/main": "de3ea777bbfd64071c1c260c0b13311b",
".git/logs/refs/remotes/origin/main": "dab4ae682941ffb02d966f6617b8f1e9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "effce3d46ca7ebfc8ba8cbc067a735a4",
".git/refs/remotes/origin/main": "effce3d46ca7ebfc8ba8cbc067a735a4",
".git/index": "ba853b38414860a7007709a09aba0210",
".git/COMMIT_EDITMSG": "8ca0237ed1c7d798a6d3d8c4fbfe7bc2",
"assets/AssetManifest.json": "15c335a8c10d00fddf94a3bb769fbc99",
"assets/NOTICES": "9b5755f67adeab4040c0c8160878ae9b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "44a7768c75cbfb8584ac0c1d0dc79cb9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "6963f82c2db9e9700ebdecd036beecc2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c65d9912d5765639f123ac8388aa3ba6",
"assets/fonts/MaterialIcons-Regular.otf": "ebdee6d649bfb98b87fdc76acc461e2d",
"assets/assets/images/baitDetail.png": "fdf980d104b0a165bfc7a5136bf2d6a2",
"assets/assets/images/duneDetail.png": "1e52aac3f23327b416b69b41e20693be",
"assets/assets/images/janki_Resume.pdf": "73f128136e6cb06603eccbec6028dd3b",
"assets/assets/images/flutter.png": "1120a5fab4b00d9252ce18ddc66d7f72",
"assets/assets/images/searching.jpg": "6956b2e4a0ea1b1fcf682096c8b74bf2",
"assets/assets/images/letter-t.png": "dd0881943b8a5217e3565e6b1d964be0",
"assets/assets/images/sql.png": "a029e56f69fedc87beac70953a48d44c",
"assets/assets/images/github.png": "25f0f72e0c25e95d3c84ffd93ef9b2d5",
"assets/assets/images/telling.jpg": "51d222898f7cae4fb73baff64d293df9",
"assets/assets/images/firebase.png": "b60af261d4e7d050a24c832eb788c5b7",
"assets/assets/images/communicating.jpg": "a861e48430a5bd2b517fdc98dc38fbc0",
"assets/assets/images/bait.png": "aaf8f8aded3ddac09eed94dde8743b03",
"assets/assets/images/healify.png": "9bdcf4a050074fbdf90d7dbbefe69484",
"assets/assets/images/about.jpeg": "d7d12739fea3f8c4a4a49b419a7fb2e5",
"assets/assets/images/html.png": "9e1c5edc19f9456a41f8982f18ac7228",
"assets/assets/images/skillitup.jpeg": "ffc9e0ebe2169ed4ba0869ec205e8029",
"assets/assets/images/profile.jpeg": "48b58ee2be33bdc70493451ad456a1ea",
"assets/assets/images/healifyDetail2.png": "d7a8ba5f50314bb7456c4e9717c995d4",
"assets/assets/images/crewlier.jpeg": "aa02192d5eff155d8b546cf4f6c4d652",
"assets/assets/images/crewlier.png": "7bdbffb191b3f9ceb07b48fcb12ccae2",
"assets/assets/images/dune.png": "9985e0f3a3ca133acfaef75ce152e75b",
"assets/assets/images/baitDetail2.png": "288cac1c34709e9a8cd63cb244ab2f0f",
"assets/assets/images/css.png": "c22f6280e4da801636ffab36f9e31484",
"assets/assets/images/duneDetail2.png": "548ce4bc56eb996c63c7aeffa52a229d",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
