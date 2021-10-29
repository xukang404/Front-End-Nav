const $siteList=$(".siteList"),$lastLi=$siteList.find("li.last"),x=localStorage.getItem("x"),xObject=JSON.parse(x),hashMap=xObject||[{logo:"A",url:"https://www.acfun.cn"},{logo:"B",url:"https://www.bilibili.com"}],simplifyUrl=s=>s.replace("https://","").replace("http://","").replace("www.","").replace(/\/.*/,""),render=()=>{$siteList.find("li:not(.last)").remove(),hashMap.forEach(((s,o)=>{const e=$(`<li>\n            <div class="site">\n                <div class="logo">${s.logo[0]}</div>\n                <div class="link">${simplifyUrl(s.url)}</div>\n                <div class="close">\n                    <svg class="icon">\n                        <use xlink:href="#icon-close"></use>\n                    </svg>\n                </div>\n            </div>\n        </li>`).insertBefore($lastLi);e.on("click",(o=>{window.open(s.url)})),e.on("click",".close",(s=>{s.stopPropagation(),hashMap.splice(o,1),render()}))}))};render(),$(".addButton").on("click",(()=>{let s=window.prompt("请问你要添加的网址是什么？");console.log(s),0!==s.indexOf("http")&&(s="https://"+s),console.log(s),hashMap.push({logo:simplifyUrl(s)[0].toUpperCase(),url:s}),render()})),window.onbeforeunload=()=>{const s=JSON.stringify(hashMap);localStorage.setItem("x",s)},$(document).on("keypress",(s=>{const{key:o}=s;console.log(o);for(let s=0;s<hashMap.length;s++)hashMap[s].logo.toLowerCase()===o&&window.open(hashMap[s].url)}));
//# sourceMappingURL=index.670f77dc.js.map
