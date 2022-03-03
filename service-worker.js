/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d611d0da1c0551cd8f64823ad1b030a5"
  },
  {
    "url": "archives/index.html",
    "revision": "f03793d19b2d5ea56d10bcfa3e686edb"
  },
  {
    "url": "assets/css/0.styles.3a6b39a1.css",
    "revision": "76b101d7f02670c7bd7cac7a4bccb88f"
  },
  {
    "url": "assets/img/loading.18d75e19.gif",
    "revision": "18d75e19791c1d042f102e088f463d8a"
  },
  {
    "url": "assets/js/10.74478068.js",
    "revision": "8e210ad90669a83836ead1240a8866d7"
  },
  {
    "url": "assets/js/11.e76c552d.js",
    "revision": "581b05730b1f09edc04fd49e1bf63fda"
  },
  {
    "url": "assets/js/12.18e8db06.js",
    "revision": "1925ff76289af838a14fcb4a4908e121"
  },
  {
    "url": "assets/js/13.c60c3104.js",
    "revision": "110da20b5793c3a3ff1ea2744a23dd70"
  },
  {
    "url": "assets/js/14.7dc56c88.js",
    "revision": "88596973430fab4cff5e43f62bc18e59"
  },
  {
    "url": "assets/js/15.a38b497b.js",
    "revision": "2d29899d662ddb40afcaad02264c7712"
  },
  {
    "url": "assets/js/16.94ef2c94.js",
    "revision": "b8ca895daf12da4d06179328cf5cd029"
  },
  {
    "url": "assets/js/17.94273617.js",
    "revision": "17f5c5d226633ac80a101e5014bf9bb7"
  },
  {
    "url": "assets/js/18.951fc9a3.js",
    "revision": "ac5c9f491a26bf67f48b311d6a9c6116"
  },
  {
    "url": "assets/js/19.a3f15b76.js",
    "revision": "ed36fcae18a0926c71996ac773cdac0f"
  },
  {
    "url": "assets/js/2.570614e1.js",
    "revision": "901f7f6a3f026aa470ea2418c48d3970"
  },
  {
    "url": "assets/js/20.eb5a0a4c.js",
    "revision": "3c6f1f85d8c795dbc14a384823b12ce1"
  },
  {
    "url": "assets/js/21.155a82f5.js",
    "revision": "8a46dd458695f0ee04e4c9d1ce547334"
  },
  {
    "url": "assets/js/22.b82c98dd.js",
    "revision": "6de1ed6756a7260f565bc08e59c692ba"
  },
  {
    "url": "assets/js/23.37f5c30e.js",
    "revision": "3f0f66f0ac4d3cf035fd8bcf83459f79"
  },
  {
    "url": "assets/js/24.c30799c0.js",
    "revision": "0b29f42302dddc4f47a1fc3536bd18f3"
  },
  {
    "url": "assets/js/25.3fc10656.js",
    "revision": "af5fe12e0d7838cab58686697ca02586"
  },
  {
    "url": "assets/js/26.d3479c79.js",
    "revision": "8fb62e9fca3cf80f93e7e2eae2b97744"
  },
  {
    "url": "assets/js/27.4da421fd.js",
    "revision": "f513ffdae7fd2d11d365d174d81bbff8"
  },
  {
    "url": "assets/js/28.ca6980a6.js",
    "revision": "77a3470665d3e59be4792ec861e140ad"
  },
  {
    "url": "assets/js/29.e305bb89.js",
    "revision": "f0fa0d3e1b9c42ce970486cb25cdb3c5"
  },
  {
    "url": "assets/js/3.8b40c051.js",
    "revision": "7e383ec232240cc695b8217678b0ac5e"
  },
  {
    "url": "assets/js/30.8cedfeb4.js",
    "revision": "5604a8e68e2886a895f663e6ecfd8608"
  },
  {
    "url": "assets/js/31.40cce153.js",
    "revision": "9fab5e6b64125929cca5a6a0c3ea9def"
  },
  {
    "url": "assets/js/32.02711e2a.js",
    "revision": "11bacb63a9c9e070f25e27bb486541ff"
  },
  {
    "url": "assets/js/33.54bf2962.js",
    "revision": "137f585f24065e4f50b9007df00099de"
  },
  {
    "url": "assets/js/34.02d09e10.js",
    "revision": "01fe0cd18ab9e1ed846b167924ffe954"
  },
  {
    "url": "assets/js/35.302e7980.js",
    "revision": "065f7758db8a500326228f3d4ddcb094"
  },
  {
    "url": "assets/js/36.46acf2d5.js",
    "revision": "09f2eb33bc0d0086a2616a5a31ce1518"
  },
  {
    "url": "assets/js/37.0f85643e.js",
    "revision": "bdf6a4cb7ea879be4a91f57efb8866ea"
  },
  {
    "url": "assets/js/38.3ebd166b.js",
    "revision": "0adea8632299402b97cb02bc59d67e2d"
  },
  {
    "url": "assets/js/39.80069d6c.js",
    "revision": "c4129317a8027c657a02b336c28789c7"
  },
  {
    "url": "assets/js/4.aab0e518.js",
    "revision": "07da52315a78e7cf04162df4ec86b93a"
  },
  {
    "url": "assets/js/40.42df5f28.js",
    "revision": "180abb4b66fb37cc4c26b62ff33da6cb"
  },
  {
    "url": "assets/js/41.209f14bc.js",
    "revision": "734848dcc0f1737fb343198f2ea5ee37"
  },
  {
    "url": "assets/js/42.503aedcc.js",
    "revision": "512e11acd4b8eb0e0945e5bcf6f77021"
  },
  {
    "url": "assets/js/43.85034aaa.js",
    "revision": "3fdab451ed9eb298076a1b3d8317b56e"
  },
  {
    "url": "assets/js/44.fe589e0f.js",
    "revision": "acd2eaa1a932a64b57e34c90310c3b3d"
  },
  {
    "url": "assets/js/45.27902d5d.js",
    "revision": "488f848d4229e8452e6af8d46ddddcf9"
  },
  {
    "url": "assets/js/46.90588258.js",
    "revision": "37aee98425a664e252e7452e76ad693d"
  },
  {
    "url": "assets/js/47.1bdea294.js",
    "revision": "1bf8eb6034d71d422a60b43c8ee9155e"
  },
  {
    "url": "assets/js/48.9cf44280.js",
    "revision": "614fc17ae82bc1bb97ebc00223a8d3ad"
  },
  {
    "url": "assets/js/49.c7c357cf.js",
    "revision": "cac41b1962f059594641b1b4b3bb8597"
  },
  {
    "url": "assets/js/5.0d5f3a9d.js",
    "revision": "4f48a0b4b377bb9e7033b501417879f5"
  },
  {
    "url": "assets/js/50.51634cc9.js",
    "revision": "40c9eb1b7e02268a226e084152a22ed7"
  },
  {
    "url": "assets/js/51.2e5fe240.js",
    "revision": "ff594b9e01f3ae58217758cf97e92890"
  },
  {
    "url": "assets/js/52.8b21bc38.js",
    "revision": "0937502bbf638c7747311bbc63208e85"
  },
  {
    "url": "assets/js/53.8d1669c0.js",
    "revision": "e17e3f9839cd0ae20daa57f156b9ae19"
  },
  {
    "url": "assets/js/54.a9ce67d2.js",
    "revision": "fa613194abc726a71c16744201e916f4"
  },
  {
    "url": "assets/js/55.06f87045.js",
    "revision": "6ea5d07fe8bf3df6a13bdb72683acddb"
  },
  {
    "url": "assets/js/56.37544cb1.js",
    "revision": "c13b88339c2103b65038714de1f44d57"
  },
  {
    "url": "assets/js/57.00cbb8b2.js",
    "revision": "6c0df23cce320c460901428395d2210f"
  },
  {
    "url": "assets/js/58.83f617d8.js",
    "revision": "3553ddf571c0249b3303493f78f4d6c4"
  },
  {
    "url": "assets/js/59.7d302132.js",
    "revision": "dd3fce6bcce71a6316361cb309d6c05a"
  },
  {
    "url": "assets/js/6.038370bf.js",
    "revision": "597bcccfb08bebb26fba878ea0cbc041"
  },
  {
    "url": "assets/js/60.39628f86.js",
    "revision": "61382e031b56fdba470784a2743897f1"
  },
  {
    "url": "assets/js/61.d0a938e0.js",
    "revision": "f3c9cd7c77a915a67885ee9b53effe77"
  },
  {
    "url": "assets/js/62.c152c30e.js",
    "revision": "20ff2eb78c1ca324c9b69e146413af8d"
  },
  {
    "url": "assets/js/63.a73dda25.js",
    "revision": "98dac6b47723bd4eef7692be34e07bbe"
  },
  {
    "url": "assets/js/64.bf156edc.js",
    "revision": "ab78b535237a3658d1483b14ce35e8ac"
  },
  {
    "url": "assets/js/65.b68db394.js",
    "revision": "06c93ff0a257d11fd505f9b580f9c374"
  },
  {
    "url": "assets/js/66.aacf37d5.js",
    "revision": "6bf5f3c741dff3764cc3b16e5d381549"
  },
  {
    "url": "assets/js/67.283d8e21.js",
    "revision": "2f0f2bf14e3f11d2e6f8c4c02ddb9551"
  },
  {
    "url": "assets/js/68.91ecca5d.js",
    "revision": "f4f66a0433434e9784377f45925886be"
  },
  {
    "url": "assets/js/69.f887fa75.js",
    "revision": "fbbff4d0607fc2e5f6d4ff8728cf24aa"
  },
  {
    "url": "assets/js/7.d9bcc1c7.js",
    "revision": "d8f8c79c20c9fa345349aa54538b5609"
  },
  {
    "url": "assets/js/70.4f1dde1d.js",
    "revision": "e6b5790843047b429b23e4a03734b13f"
  },
  {
    "url": "assets/js/71.f272941b.js",
    "revision": "0ca287643afeda1d95d518ba024abc3b"
  },
  {
    "url": "assets/js/72.df5a93d8.js",
    "revision": "e0ba3824348a519c542bf372b34f4bdc"
  },
  {
    "url": "assets/js/73.d56dea61.js",
    "revision": "78e56ca379cb898ab9ecc4bb2a0fbda3"
  },
  {
    "url": "assets/js/74.3f12f267.js",
    "revision": "0f589b5f694820dd6993591c1a8ad9cb"
  },
  {
    "url": "assets/js/75.9339f6da.js",
    "revision": "cbbea47d1e0b23535f0eeeb091a240d6"
  },
  {
    "url": "assets/js/8.5c40b2e5.js",
    "revision": "81635921a243b1c9816a330d027ab6c6"
  },
  {
    "url": "assets/js/9.9442f1fa.js",
    "revision": "fb2b800b7133bdfc07a6dabd53c6fa0b"
  },
  {
    "url": "assets/js/app.90355845.js",
    "revision": "4a7bb544265928860708339c08100ec8"
  },
  {
    "url": "bookshop/friendslink/index.html",
    "revision": "fcc2c0ea3f115f96673e10c89a278d6a"
  },
  {
    "url": "bookshop/linkme/index.html",
    "revision": "9c5e76d5d24fd23b7bad32a1a968dd3c"
  },
  {
    "url": "categories/index.html",
    "revision": "77ca73948ef1eb920d4d5671a3b25fb6"
  },
  {
    "url": "fe-optimize-ppt/dist/index.css",
    "revision": "7a8ffc40aaffa8ec6f833b34022c4d62"
  },
  {
    "url": "fe-optimize-ppt/dist/reset.css",
    "revision": "dcce4901635bcb4a5373c0ad0d501105"
  },
  {
    "url": "fe-optimize-ppt/dist/reveal.css",
    "revision": "3851f685f0c969c385ad481a99cf1233"
  },
  {
    "url": "fe-optimize-ppt/dist/reveal.esm.js",
    "revision": "81e1f7a9c4046376fc36096c89df8097"
  },
  {
    "url": "fe-optimize-ppt/dist/reveal.js",
    "revision": "0242ef1f0c74feebeb797c1e3e787139"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/beige.css",
    "revision": "41a3b1fc652af0d07f371dc2e6fd6c87"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/black.css",
    "revision": "85da0b073b80978b24d52b6672c3aebe"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/blood.css",
    "revision": "95e0655952ee617a59b11eb531e54566"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/league-gothic/league-gothic.css",
    "revision": "b020ec5617f703461c7d943b14c0bc7f"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/league-gothic/league-gothic.eot",
    "revision": "9900a4643cc63c5d8f969d2196f72572"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/league-gothic/league-gothic.ttf",
    "revision": "91295fa87df918411b49b7531da5d558"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/league-gothic/league-gothic.woff",
    "revision": "cd382dc8a9d6317864b5810a320effc5"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.eot",
    "revision": "72217712eb8d28872e7069322f3fda23"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.ttf",
    "revision": "8256cfd7e4017a7690814879409212cd"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.woff",
    "revision": "e74f0128884561828ce8c9cf5c284ab8"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.eot",
    "revision": "1d71438462d532b62b05cdd7e6d7197d"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.ttf",
    "revision": "2da39ecf9246383937da11b44b7bd9b4"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.woff",
    "revision": "e7acc589bb558fe58936a853f570193c"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.eot",
    "revision": "0f3da1edf1b5c6a94a6ad948a7664451"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.ttf",
    "revision": "f3565095e6c9158140444970f5a2c5ed"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.woff",
    "revision": "1cb8e94f1185f1131a0c895165998f2b"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.eot",
    "revision": "58153ac7194e141d1e73ea88c6b63861"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.ttf",
    "revision": "c7e698a4d0956f4a939f42a05685bbf5"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.woff",
    "revision": "6b058fc2634b01d837c3432316c3141f"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro.css",
    "revision": "e23320bcbd56537dd0b596710edab5d0"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/league.css",
    "revision": "ff289f7cec0ef4f3589de5081ece761e"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/moon.css",
    "revision": "411032667ab7127d737985561c3b109f"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/night.css",
    "revision": "6dff339df86f67ef4c639216ae3fa921"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/serif.css",
    "revision": "d9999fb8d0fcdd4ff7503175f2391b53"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/simple.css",
    "revision": "def4f3615bbcd76de5b8bff77386189f"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/sky.css",
    "revision": "26c0ac0dfa60bbc3cf01a704714abdab"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/solarized.css",
    "revision": "0e4b39496a117cc5d536eb40df1acbe5"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/white.css",
    "revision": "a629b68108cd9cc6449e9eef97fef4e8"
  },
  {
    "url": "fe-optimize-ppt/index.html",
    "revision": "a5c67376b6d88261a8609778e7a620c6"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/highlight.esm.js",
    "revision": "57c199f193bb887fede5ac3482addfab"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/highlight.js",
    "revision": "c9cf29026937693abb4e72b10e0a4b3c"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/monokai.css",
    "revision": "61e38729dbd8f81f129ae38770c9cd68"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/plugin.js",
    "revision": "0c152ba2ac0301663f5a8a7350dcff68"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/zenburn.css",
    "revision": "b8210619cb21042d14d0676f27e2f41c"
  },
  {
    "url": "fe-optimize-ppt/plugin/markdown/markdown.esm.js",
    "revision": "78602f4b2f0d182c9bf27de1db7a18c0"
  },
  {
    "url": "fe-optimize-ppt/plugin/markdown/markdown.js",
    "revision": "1d16df2da37b71f7e751af0638d1f55b"
  },
  {
    "url": "fe-optimize-ppt/plugin/markdown/plugin.js",
    "revision": "45d8fba2fb1a8060386ac3933c46507a"
  },
  {
    "url": "fe-optimize-ppt/plugin/math/math.esm.js",
    "revision": "9db82a78147755e8f1a0486e5caa75a9"
  },
  {
    "url": "fe-optimize-ppt/plugin/math/math.js",
    "revision": "811d67482ea3828abe83e311cfccd246"
  },
  {
    "url": "fe-optimize-ppt/plugin/math/plugin.js",
    "revision": "08968126ddb481002f8c196adc76ad01"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/notes.esm.js",
    "revision": "64096f7638bd851673b0dd3fff227b57"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/notes.js",
    "revision": "c619607914139664e27dd952c3382dcf"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/plugin.js",
    "revision": "35315d10482b80d1e030df4842b5e849"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/speaker-view.html",
    "revision": "b89f40b06c44dae7df3fab6c8f995013"
  },
  {
    "url": "fe-optimize-ppt/plugin/search/plugin.js",
    "revision": "39d7032a1fc94d7feb5faac53d1fc560"
  },
  {
    "url": "fe-optimize-ppt/plugin/search/search.esm.js",
    "revision": "eade53551082ad7a67345e509ac3e09d"
  },
  {
    "url": "fe-optimize-ppt/plugin/search/search.js",
    "revision": "a3ffe49a083c3c5ac81c861b077abb62"
  },
  {
    "url": "fe-optimize-ppt/plugin/zoom/plugin.js",
    "revision": "82b21d46be52363892e7f2e92274d01d"
  },
  {
    "url": "fe-optimize-ppt/plugin/zoom/zoom.esm.js",
    "revision": "7af54141ec93fd412ffbb08413339532"
  },
  {
    "url": "fe-optimize-ppt/plugin/zoom/zoom.js",
    "revision": "88a66bec13d6577916d3db64488c38de"
  },
  {
    "url": "img/avatar-2.jpg",
    "revision": "55b9603cdb0caff91ecd803d047730b1"
  },
  {
    "url": "img/avatar-2.png",
    "revision": "d3a1ca94d8290aa71371dda0664aaf14"
  },
  {
    "url": "img/avatar.jpg",
    "revision": "037dec754a042491ae29f2bc02eb1814"
  },
  {
    "url": "img/avatar.png",
    "revision": "a19cc6aacf9b570b8a4047da4796146f"
  },
  {
    "url": "img/bg.jpg",
    "revision": "c8f26794a0ee092e62abbd0f99857064"
  },
  {
    "url": "img/logo.png",
    "revision": "421642f8c4c77139f133d7d1ec05168c"
  },
  {
    "url": "img/pikapika.jpg",
    "revision": "0b6e65b4475bc068ac04c9c24204f1d4"
  },
  {
    "url": "img/wechat.png",
    "revision": "62c9dd61783e38f36b454af905cecae7"
  },
  {
    "url": "img/wx-global.png",
    "revision": "3910ef869c1c95ecd1211167c5c7721f"
  },
  {
    "url": "img/wx-global1.png",
    "revision": "345b8e76ab0868483dca7a7b33103c47"
  },
  {
    "url": "index.html",
    "revision": "09a08c5975fb770e76eb2d6f46929655"
  },
  {
    "url": "love-fe.png",
    "revision": "c631ad86af0196d6257306305dd13659"
  },
  {
    "url": "pages/005afb7501ebf/index.html",
    "revision": "e2f7b302e150bf3cc5964e2cd7f7fa59"
  },
  {
    "url": "pages/02cc618debc84/index.html",
    "revision": "f01470b466102d1465926c413191f70a"
  },
  {
    "url": "pages/04ac7e87719d9/index.html",
    "revision": "8a3a001a9f28cd9d51c379bc5c6103cb"
  },
  {
    "url": "pages/05c534dbae294/index.html",
    "revision": "74d9be4fcf7a2bd94cb334b85e1de55a"
  },
  {
    "url": "pages/0d5c101d17afe/index.html",
    "revision": "40a9d07957532dfd86feecae6ba282fb"
  },
  {
    "url": "pages/12bb6ee186b54/index.html",
    "revision": "5a59707577a82330527357d7f8627b9f"
  },
  {
    "url": "pages/136f8f068dffe/index.html",
    "revision": "82ff7ab201c0b1004599286dceaf52f2"
  },
  {
    "url": "pages/1736b20fa8753/index.html",
    "revision": "e00e861134792a1b10b873ce8d9ffbe2"
  },
  {
    "url": "pages/290a2fbb1e629/index.html",
    "revision": "5398b68a8e9e490a6cfc591aac1c5050"
  },
  {
    "url": "pages/38a448a32b1a5/index.html",
    "revision": "8bb555ca2b249ae5f140974aae5c6c56"
  },
  {
    "url": "pages/3cea8c7d5577f/index.html",
    "revision": "342300cd45084362bdad55c246d3dfec"
  },
  {
    "url": "pages/3d292acfbd9ca/index.html",
    "revision": "86633ac261f54dd39d5437a25a0ff956"
  },
  {
    "url": "pages/416517735bb6/index.html",
    "revision": "4ec6d347dd7c91677a86d38263e9a7ac"
  },
  {
    "url": "pages/4265332f4a648/index.html",
    "revision": "de5f6fa5cac8d6d34820c6800eefae03"
  },
  {
    "url": "pages/463caf542a8ff/index.html",
    "revision": "b48cf1ea56cd7f9fecf04d5805228299"
  },
  {
    "url": "pages/4737f1e54803f/index.html",
    "revision": "19af383d95c7a7562901dfb6e9a5a4be"
  },
  {
    "url": "pages/49e2a780662e9/index.html",
    "revision": "b022102a9f6610c29b86cbbfecb26fcf"
  },
  {
    "url": "pages/4e3130c16c521/index.html",
    "revision": "82b84a5740bf43c42b460ebeaafb6171"
  },
  {
    "url": "pages/512f6ae339a31/index.html",
    "revision": "46ad5b47ff50c7f7ba7387adf918c73c"
  },
  {
    "url": "pages/55e7bb3eb7802/index.html",
    "revision": "210f49c04dde2ed9405350a37756d66a"
  },
  {
    "url": "pages/6db6295ccd96/index.html",
    "revision": "466900cd8ddabc8029bd70dc01afe2ce"
  },
  {
    "url": "pages/72dcdd7f52781/index.html",
    "revision": "9e48adcc05f1d802a605dd1bf9c82b49"
  },
  {
    "url": "pages/785710818c193/index.html",
    "revision": "801a33bca9a5d5a4a5a67ac90538d20e"
  },
  {
    "url": "pages/7e7aff8d9771b/index.html",
    "revision": "b9c8479ba197d7fe0f13b52727c6d198"
  },
  {
    "url": "pages/83bbb9b9abbe7/index.html",
    "revision": "a82ce390fa55b88f060a3cb451ddce3e"
  },
  {
    "url": "pages/8c4ef214c7886/index.html",
    "revision": "91cc3ebccf5aa4e63e5383bde1993c55"
  },
  {
    "url": "pages/98a7a4ab3b308/index.html",
    "revision": "dd3cf5db3561d254f6e6ea2cc7587cce"
  },
  {
    "url": "pages/9c7717d989fc6/index.html",
    "revision": "af8f7930ca3818121a7fb95570d6dfa0"
  },
  {
    "url": "pages/9de40adc21b12/index.html",
    "revision": "8f5fba8ecffe651250bba81d01bc92a6"
  },
  {
    "url": "pages/a606010c57cc5/index.html",
    "revision": "1c545705271d7849afe0852dc76adc5d"
  },
  {
    "url": "pages/aa9d140ec6135/index.html",
    "revision": "3a841da4f0766d581d2c6f76a5f22ba2"
  },
  {
    "url": "pages/ac34940436a4a/index.html",
    "revision": "612b255e6cd77e638a1da778c6a29b3f"
  },
  {
    "url": "pages/ae21b75e82658/index.html",
    "revision": "a403f839aa3289a5fb93c2abe0ac1e62"
  },
  {
    "url": "pages/bc7fdbb035246/index.html",
    "revision": "9338ad4364ddba9822b62866880b8f70"
  },
  {
    "url": "pages/be18cb94e364/index.html",
    "revision": "06cac93f6d73b4f957522e865e73e0c2"
  },
  {
    "url": "pages/c863681e7285f/index.html",
    "revision": "c0326cc4e139a5f83e76b36ec70329ad"
  },
  {
    "url": "pages/cf42a74e3cc8f/index.html",
    "revision": "3902c8670faa28c8e24d39776c6cd16c"
  },
  {
    "url": "pages/d4af339f88ac/index.html",
    "revision": "c5c0efa51f24458ab537cd405ac1afdb"
  },
  {
    "url": "pages/dc00f73d9d1d9/index.html",
    "revision": "c3099bfc9917530d65f625c8ba5367e6"
  },
  {
    "url": "pages/f16531008c5a4/index.html",
    "revision": "ced3d0d1d38a1af8351f5a83249ec522"
  },
  {
    "url": "pages/f593514e1a9d6/index.html",
    "revision": "7a79f753a8f65921effe9f5648f364e3"
  },
  {
    "url": "pages/f83fb19d191d9/index.html",
    "revision": "f19684bb5f799eb6a3ddf071b315e627"
  },
  {
    "url": "resource-tools/44207a5ef0a8a/index.html",
    "revision": "b4f732b0702c9a07a0f114bf5aee63a5"
  },
  {
    "url": "resource-tools/4c19c32335465/index.html",
    "revision": "979dd20285ab29937d74514f327c7396"
  },
  {
    "url": "resource-tools/5f440c9bb4359/index.html",
    "revision": "f0fb92d41d82fdb67162bd9a9c0bacd1"
  },
  {
    "url": "resource-tools/7566c0ff5a24c/index.html",
    "revision": "c01a3832ac1acc5a55823a0829eafcd6"
  },
  {
    "url": "resource-tools/8396c1c08f1b6/index.html",
    "revision": "d054e79fc65a8eb2fe27107590b629f8"
  },
  {
    "url": "resource-tools/9d5d91d08c126/index.html",
    "revision": "be13fdcf4f9c65cbac92aeba068f0ca9"
  },
  {
    "url": "resource-tools/c618db4b32e39/index.html",
    "revision": "66b12ea93a56e8716c217ca2b59f7f16"
  },
  {
    "url": "resource-tools/c9e44ab0fce9a/index.html",
    "revision": "4340df47d623c5b46e7d444563c8c61a"
  },
  {
    "url": "resource-tools/ed602e9a815f6/index.html",
    "revision": "ca7f5174167d80f63ad27a95cf8553a3"
  },
  {
    "url": "study/css/reset.css",
    "revision": "37666e04d93aded7e21dc0f1d0879423"
  },
  {
    "url": "study/index.html",
    "revision": "1e824b38e8ff773eca1771850a800049"
  },
  {
    "url": "study/precache-manifest.05b24b6636bd972f0f436263abc9dea0.js",
    "revision": "50ff6a5c5a0cbd62f45aa9c94661a085"
  },
  {
    "url": "study/static/css/2.8f6577cd.chunk.css",
    "revision": "48aa71cf651d0e4dc42b2f8de042accd"
  },
  {
    "url": "study/static/css/main.61320533.chunk.css",
    "revision": "229915a2d623779c94c760f07969efc0"
  },
  {
    "url": "study/static/js/main.f022aa25.chunk.js",
    "revision": "66df1b8666956012845b27d378f72020"
  },
  {
    "url": "study/static/js/runtime-main.3725ae0b.js",
    "revision": "9c741acde7651f47844059f09c69d48f"
  },
  {
    "url": "study/static/media/404.9161e238.png",
    "revision": "9161e238b798c444b732dbbb7420a09e"
  },
  {
    "url": "study/static/media/logo.421642f8.png",
    "revision": "421642f8c4c77139f133d7d1ec05168c"
  },
  {
    "url": "tags/index.html",
    "revision": "4e3673f53571858f7846352c11fa4125"
  },
  {
    "url": "vue-iframe-print/css/app.80764a13.css",
    "revision": "41670c952da5bab26acafc6186da19b0"
  },
  {
    "url": "vue-iframe-print/index.html",
    "revision": "96237c9fbc239de1496d1c1e8c36d7b9"
  },
  {
    "url": "vue-iframe-print/js/app.47469697.js",
    "revision": "cd1c40af0cc48bf045b6964d0d1b19de"
  },
  {
    "url": "vue-iframe-print/js/chunk-vendors.4f44ce85.js",
    "revision": "9fe43e915db4d7e06f89817632ddc968"
  },
  {
    "url": "web/docs/babel/index.html",
    "revision": "a911b156c6da045fb3130c49e4698bbc"
  },
  {
    "url": "web/docs/docschina/index.html",
    "revision": "84c9d1c534a983740863c65eaae8a84a"
  },
  {
    "url": "web/docs/es6/index.html",
    "revision": "46511e25fe6c475c1a5206cd27cd537a"
  },
  {
    "url": "web/docs/imooc/wiki/index.html",
    "revision": "a40f6f56b5d4dc02c768c5f1075af3d5"
  },
  {
    "url": "web/docs/nav/index.html",
    "revision": "38ef3ad11dc751bec6e6d93bdfa2211f"
  },
  {
    "url": "web/docs/node/index.html",
    "revision": "c3021e6353ce58d12bc625eddba62e26"
  },
  {
    "url": "web/docs/react/index.html",
    "revision": "04920e903319eb8640400a6859df3326"
  },
  {
    "url": "web/docs/runoob/index.html",
    "revision": "efc32000ccd97adb31596e8d99926644"
  },
  {
    "url": "web/docs/typescript/index.html",
    "revision": "34a1366e5f6353bcd229b97c39885f90"
  },
  {
    "url": "web/docs/vue/index.html",
    "revision": "057f75d5e741727e68f587ba7d27dd28"
  },
  {
    "url": "web/docs/webpack/index.html",
    "revision": "f5a5450e1c66dbd583b4207ed8346f11"
  },
  {
    "url": "web/git/f85d0c838f3f3/index.html",
    "revision": "40309acd9d6d6a0c0730d7582c404b14"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
