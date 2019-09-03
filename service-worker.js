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
    "revision": "ef17961481b8e5e6da686df64535f696"
  },
  {
    "url": "assets/css/0.styles.77bf916b.css",
    "revision": "1a94edd480073e06ae584b37d7a525d8"
  },
  {
    "url": "assets/img/home-bg.f5396e30.jpg",
    "revision": "f5396e308f85adecbf70b6f59918b5bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9aa56cd4.js",
    "revision": "e00bd5991034df27956378a783e31a5e"
  },
  {
    "url": "assets/js/10.ecbebd9e.js",
    "revision": "542a374e045393e8dfbdc113178ac125"
  },
  {
    "url": "assets/js/11.9a7cc251.js",
    "revision": "95fae59976e41443ba80386e244df73c"
  },
  {
    "url": "assets/js/12.e3070825.js",
    "revision": "2c10957b01fd38d7d2cc3739e50acd5e"
  },
  {
    "url": "assets/js/13.45dbf06b.js",
    "revision": "34fcb2a2fe3457522671b8100f6fe25b"
  },
  {
    "url": "assets/js/14.fdf917fa.js",
    "revision": "fe59e9fd6adb5196f8f86a3c9a002140"
  },
  {
    "url": "assets/js/15.dfe5d67e.js",
    "revision": "9cd31088fc37f6c35555bd85a8bb6ee8"
  },
  {
    "url": "assets/js/16.49a05425.js",
    "revision": "6678bb90d89364cd1303f5464f4abab5"
  },
  {
    "url": "assets/js/17.909c781f.js",
    "revision": "038cc86168f07a043f7d23e6dc2659fe"
  },
  {
    "url": "assets/js/18.744ec8e7.js",
    "revision": "68731d41aaa45212df03e36f309261e6"
  },
  {
    "url": "assets/js/4.3b6e1d29.js",
    "revision": "c0125083cd4a015bb54093ef926d0c01"
  },
  {
    "url": "assets/js/5.609c3260.js",
    "revision": "4b02195d62fcc1bae02c6c73b949e988"
  },
  {
    "url": "assets/js/6.a5b7b789.js",
    "revision": "237ba21482c347019fb05af4ee751dd4"
  },
  {
    "url": "assets/js/7.6b7c419a.js",
    "revision": "21e60b6b7a221a0da5cd93c88d5ed1d0"
  },
  {
    "url": "assets/js/8.9adad3c6.js",
    "revision": "71cd5d98bc7cf08926933fc72ba53966"
  },
  {
    "url": "assets/js/9.a1777073.js",
    "revision": "9ce6ac2c61acf9632fea4e505891dc0f"
  },
  {
    "url": "assets/js/app.a6359fc3.js",
    "revision": "562dfd3ef18e580bea47fda1efdb3e17"
  },
  {
    "url": "assets/js/vendors~flowchart.00ae71ab.js",
    "revision": "8b169b2d6d25377b7fe06df6b830e850"
  },
  {
    "url": "category/index.html",
    "revision": "099e87fb65e21d88894b9c937fb11765"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "78ddc9f6a98bbdb6dfdc7b204a2ae6b1"
  },
  {
    "url": "category/绊脚石.html",
    "revision": "681b15b72099696709fd2f0d9b89095d"
  },
  {
    "url": "category/读书笔记.html",
    "revision": "dacfea89dbfdaa2682136e3f9928ba0c"
  },
  {
    "url": "head.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "index.html",
    "revision": "7fee7003665511a9b428d89984db31de"
  },
  {
    "url": "logo.jpg",
    "revision": "f0fe33c5f5d92c7ea6e71e2677b06a5d"
  },
  {
    "url": "logo.png",
    "revision": "e3a68bc9d7e9fbc5e169a899330b1d20"
  },
  {
    "url": "tag/array.html",
    "revision": "62646019ed5e8a3cd6bb514ea7c2a7e9"
  },
  {
    "url": "tag/book.html",
    "revision": "f151fb36bdf8f4246ff542179d15ee0d"
  },
  {
    "url": "tag/Git.html",
    "revision": "ca0e81d96058fa3a7d643d548717ed99"
  },
  {
    "url": "tag/index.html",
    "revision": "da11d956e99cc47742cace290d8afb12"
  },
  {
    "url": "timeLine/index.html",
    "revision": "bfc25eaa8dfb94161076f53cdca5495e"
  },
  {
    "url": "views/note/2019/professional-javascript/profeesional.html",
    "revision": "56ffbdd86fad146ea923469b6ba0bf35"
  },
  {
    "url": "views/note/2019/you-do-not-know/you-know-first.html",
    "revision": "cdc1299a97db25e81b8c633acd837b90"
  },
  {
    "url": "views/note/2019/you-do-not-know/you-know-second.html",
    "revision": "d7ce76096297fa7c426945fa26f6dbf7"
  },
  {
    "url": "views/note/2019/you-do-not-know/you-know-third.html",
    "revision": "01e713a3004b98112855f2a957cc4901"
  },
  {
    "url": "views/note/2019/zhufeng/array.html",
    "revision": "c269b57dce1890ed761ecdfdce1856ae"
  },
  {
    "url": "views/other/guide.html",
    "revision": "36777b34a96fbc83f111d3c8f4c2272f"
  },
  {
    "url": "views/resolve/2019/GIT之SSH.html",
    "revision": "d80d3e4f7589bf13a3f34bcd2c6a1d49"
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
