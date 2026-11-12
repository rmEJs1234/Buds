/* 갈무리 앱을 홈 화면에 설치할 수 있게 해 주는 최소한의 서비스 워커
   저장(캐시)은 하지 않는다: 항상 최신 파일을 그대로 받아서 고친 내용이 바로 보인다 */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request))});
