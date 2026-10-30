const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('http://localhost:8766/v4.html');await p.waitForTimeout(1300);
await p.screenshot({path:'shots/title.png',clip:{x:0,y:0,width:390,height:80}});
await p.evaluate(()=>document.querySelector('.home .sc').scrollTop=700);await p.waitForTimeout(500);
await p.click('[data-a="cn"]');await p.waitForTimeout(1600);
console.log(await p.evaluate(()=>[document.querySelector('.home .sc').scrollTop,document.querySelector('#hero').textContent.includes('연결 안 됨')]),errs);await b.close()})();
