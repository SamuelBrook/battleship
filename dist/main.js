(()=>{"use strict";const t=t=>{const e=document.querySelector("#container"),s=e.childNodes;if(!0===t){s.remove();const t=document.createElement("div");t.id="win-banner",t.textContent="YOU WIN! ALL ENEMY SHIPS SUNK! PLAY AGAIN?",e.appendChild(t)}else{const t=document.createElement("div");t.id="lose-banner",t.textContent="YOU LOSE! ALL SHIPS SUNK! PLAY AGAIN?",e.appendChild(t)}},e=(t,e,s)=>{!0===s?document.querySelector("#player-board").childNodes.forEach((s=>{s.id===t&&!0===e?s.classList.add("hit"):s.id===t&&s.classList.add("miss")})):document.querySelector("#enemy-board").childNodes.forEach((s=>{s.id===t&&!0===e?s.classList.add("hit"):s.id===t&&s.classList.add("miss")}))},s=class{sunk=!1;hits=0;constructor(t){this.shipLength=t}hasSunk(){this.hits===this.shipLength&&(this.sunk=!0)}},o=class{shipArray=[];shipCoordinatesCreated=[];placedShipLocations=[];constructor(t){this.shipCoordinates=t}callShips(){const t=[new s(4),new s(3),new s(3),new s(2),new s(2),new s(2),new s(1),new s(1),new s(1),new s(1)];this.shipArray=t}createRandomShipCoordinates(){const t=[],e=this.shipArray;function s(s){let o=[],i=[];const a=[],n=Math.floor(2*Math.random()),h=e[s].shipLength;if(0===n){o=Math.floor(Math.random()*(10-(h-1))),i=Math.floor(10*Math.random()+1);for(let t=0;t<h;t+=1)a.push([o+t,i])}else{i=Math.floor(Math.random()*(10-(h-1))),o=Math.floor(10*Math.random()+1);for(let t=0;t<h;t+=1)a.push([o,i+t])}t.push(a)}for(let t=0;t<this.shipArray.length;t+=1)s(t);this.shipCoordinatesCreated=t}placeShips(t){if(t)for(let e=0;e<this.shipArray.length;e+=1){const{shipLength:s}=this.shipArray[e],o=[t[e][0]];for(let i=1;i<=s;i+=1)o.push(t[e][0]+i);const i=[o,[t[e][1]]];this.placedShipLocations.push(i)}else this.placedShipLocations=this.shipCoordinatesCreated}attackReceived(t){let e=!1;const s=t[0],o=t[1];for(let t=0;t<this.placedShipLocations.length;t+=1)for(let i=0;i<this.placedShipLocations[t].length;i+=1){const a=this.placedShipLocations[t][i][0],n=this.placedShipLocations[t][i][1];a===s&&n===o&&(this.shipArray[t].hits+=1,this.shipArray[t].hasSunk(),console.log(this.shipArray[t].sunk),e=!0)}return e}allShipsSunk(){let t=0;for(let e=0;e<this.shipArray.length;e+=1)!0===this.shipArray[e].sunk&&(t+=1);return t===this.shipArray.length}},i=class{shotArray=[0,0];makeShot(t){if(!t){const t=function(t){const e=[Math.floor(10*Math.random())+1,Math.floor(10*Math.random())+1];if(!t.includes(e))return e;this.autoshot()}(this.shotArray);return this.shotArray.push(t),t}{let e=!1;for(let s=0;s<this.shotArray.length;s+=1)this.shotArray[s]===t&&(e=!0);if(!e)return this.shotArray.push(t),t;console.log("nada")}console.log(this.shotArray)}};(()=>{document.querySelectorAll(".board").forEach((t=>{for(let e=1;e<=100;e+=1){const s=document.createElement("div");let o=`${e} 1`;e>10&&e<=20?o=e-10+" 2":e>20&&e<=30?o=e-20+" 3":e>30&&e<=40?o=e-30+" 4":e>40&&e<=50?o=e-40+" 5":e>50&&e<=60?o=e-50+" 6":e>60&&e<=70?o=e-60+" 7":e>70&&e<=80?o=e-70+" 8":e>80&&e<=90?o=e-80+" 9":e>90&&e<=100&&(o=e-90+" 10"),s.id=o,s.classList.add("coordinate"),t.appendChild(s)}}));const s=new o,a=new o,n=new i,h=new i;s.callShips(),a.callShips(),s.createRandomShipCoordinates(),a.createRandomShipCoordinates(),s.placeShips(),a.placeShips(),((t,e)=>{const s=document.querySelector("#player-board"),o=document.querySelector("#enemy-board");function i(t,e){e.childNodes.forEach((e=>{for(let s=0;s<t.placedShipLocations.length;s+=1)for(let o=0;o<t.placedShipLocations[s].length;o+=1){const i=t.placedShipLocations[s][o].join(" ");e.id===i&&e.classList.add("ship")}}))}i(t,s),i(e,o)})(s,a),document.querySelector("#enemy-board").addEventListener("click",(o=>{const{target:i}=o,r=i.id,c=r.split(" ").map((t=>parseInt(t,10)));n.makeShot(c),!0===a.attackReceived(c)?(e(r,!0,!1),a.allShipsSunk()&&t(!0)):e(r,!1,!1),console.log(n.shotArray);const l=h.makeShot(),d=l.map((t=>t.toString())).join(" ");console.log(d),console.log(l),!0===s.attackReceived(l)?(e(d,!0,!0),s.allShipsSunk()&&t(!1)):e(d,!1,!0)}))})()})();