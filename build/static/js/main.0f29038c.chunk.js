(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(53),i=a.n(r),s=(a(62),a(3)),c=function(){return l.a.createElement("header",{className:"App-header"},l.a.createElement("p",null,"HH"),l.a.createElement("h1",null,"Huutoniemen Hoki"))},o=function(e){var t=e.content,a=e.changeContent,n=[{id:"main",title:"P\xe4\xe4sivu"},{id:"matches",title:"Ottelut"},{id:"practises",title:"Harjoitukset"},{id:"players",title:"Pelaajat"},{id:"stats",title:"Tilastot"}].map(function(e){return e.id===t?l.a.createElement("li",{key:e.id,id:e.id,onClick:a,className:"active"},e.title):l.a.createElement("li",{key:e.id,id:e.id,onClick:a},e.title)});return l.a.createElement("nav",{className:"App-nav"},l.a.createElement("ul",null,n))},u=function(){return l.a.createElement("article",null,l.a.createElement("p",null,"Tervetuloa Huutoniemen Hoki -mielikuvitusj\xe4\xe4kiekkojoukkueen kotisivulle!"),l.a.createElement("br",null),l.a.createElement("p",null,"T\xe4\xe4lt\xe4 l\xf6yd\xe4t tietoa joukkueen pelatuista peleist\xe4, harjoituksista, pelaajista ja tilastoista."))},m=a(17),p=function(e){var t=e.teamdata,a=Object(n.useState)(Array(t.matches.length).fill(!1)),r=Object(s.a)(a,2),i=r[0],c=r[1],o=t.matches.slice(0).reverse().map(function(e,a){var n,r;e.ourgoals<e.theirgoals?(n="Defeat",r="H\xe4vi\xf6"):e.ourgoals>e.theirgoals?(n="Win",r="Voitto"):(n="Draw",r="Tasapeli");for(var s=[],o=function(a){var n=t.players.find(function(t){return t.id===e.scorers[a]});s.push(l.a.createElement("li",{key:a+"goal_of"+e.id},n.lname+" "+n.fname[0]+"."))},u=0;u<e.scorers.length;u++)o(u);var p=[],h=function(a){var n=t.players.find(function(t){return t.id===e.assists[a]});p.push(l.a.createElement("li",{key:a+"assist_of"+e.id},n.lname+" "+n.fname[0]+"."))};for(u=0;u<e.assists.length;u++)h(u);return l.a.createElement("tr",{key:"row"+a,onClick:function(){return function(e){var t=Object(m.a)(i);t[e]=!t[e],c(t)}(a)}},l.a.createElement("td",null,e.date),l.a.createElement("td",null,e.location,l.a.createElement("div",{className:i[a]?"Show":"Hide"},l.a.createElement("p",null,l.a.createElement("u",null,l.a.createElement("b",null,"Maalit:"))),l.a.createElement("ul",{className:"Scores"},s))),l.a.createElement("td",null,e.opponent,l.a.createElement("div",{className:i[a]?"Show":"Hide"},l.a.createElement("p",null,l.a.createElement("u",null,l.a.createElement("b",null,"Sy\xf6t\xf6t:"))),l.a.createElement("ul",{className:"Assists"},p))),l.a.createElement("td",{className:n},e.ourgoals," - ",e.theirgoals," ",r))});return l.a.createElement("table",{className:"Matches"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"P\xe4iv\xe4m\xe4\xe4r\xe4"),l.a.createElement("th",null,"Paikka"),l.a.createElement("th",null,"Vastustaja"),l.a.createElement("th",null,"Tulos"))),l.a.createElement("tbody",null,o))},h=function(e){var t=e.teamdata,a=Object(n.useState)(Array(t.practises.length).fill(!1)),r=Object(s.a)(a,2),i=r[0],c=r[1],o=t.practises.slice(0).reverse().map(function(e,a){for(var n=[],r=function(a){var r=t.players.find(function(t){return t.id===e.participants[a]});n.push(l.a.createElement("li",{key:a+"participant_of"+e.id},r.lname+" "+r.fname[0]+"."))},s=0;s<e.participants.length;s++)r(s);return l.a.createElement("tr",{key:"row"+a,onClick:function(){return function(e){var t=Object(m.a)(i);t[e]=!t[e],c(t)}(a)}},l.a.createElement("td",null,e.date),l.a.createElement("td",null,e.location),l.a.createElement("td",null,e.participants.length,l.a.createElement("div",{className:i[a]?"Show":"Hide"},l.a.createElement("ul",{className:"Participants"},n))))});return l.a.createElement("table",{className:"Practises"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"P\xe4iv\xe4m\xe4\xe4r\xe4"),l.a.createElement("th",null,"Paikka"),l.a.createElement("th",null,"Osallistujat"))),l.a.createElement("tbody",null,o))},d=function(e){var t=e.teamdata,a=Object(n.useState)(""),r=Object(s.a)(a,2),i=r[0],c=r[1],o=t.players;o.sort(function(e,t){return e.lname>t.lname?1:e.lname<t.lname?-1:0});var u=o.map(function(e,a){if(!(e.lname.toLowerCase()+" "+e.fname.toLowerCase()).startsWith(i))return null;for(var n=0,r=0;r<t.matches.length;r++)t.matches[r].participants.includes(e.id)&&n++;for(var s=0,c=0;c<t.practises.length;c++)t.practises[c].participants.includes(e.id)&&s++;for(var o=0,u=0;u<t.matches.length;u++)t.matches[u].scorers.includes(e.id)&&o++;for(var m=0,p=0;p<t.matches.length;p++)t.matches[p].assists.includes(e.id)&&m++;return l.a.createElement("tr",{key:"row"+a},l.a.createElement("td",null,e.lname+" "+e.fname),l.a.createElement("td",null,e.number),l.a.createElement("td",null,e.role),l.a.createElement("td",null,n),l.a.createElement("td",null,s),l.a.createElement("td",null,o),l.a.createElement("td",null,m))});return l.a.createElement("div",{className:"Players"},"Etsi pelaaja: ",l.a.createElement("input",{autoFocus:!0,type:"text",onChange:function(e){var t=e.target.value.toLowerCase();c(t)}}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Nimi"),l.a.createElement("th",null,"Pelinumero"),l.a.createElement("th",null,"Rooli"),l.a.createElement("th",null,"Pelit"),l.a.createElement("th",null,"Harjoitukset"),l.a.createElement("th",null,"Maalit"),l.a.createElement("th",null,"Sy\xf6t\xf6t"))),l.a.createElement("tbody",null,u)))},E=a(54),f=function(e){var t=e.teamdata,a=Object(n.useState)("kaikki"),r=Object(s.a)(a,2),i=r[0],c=r[1],o=Object(n.useState)("Tehopisteet"),u=Object(s.a)(o,2),m=u[0],p=u[1],h=function(e){"role"===e.target.id&&c(e.target.value),"stat"===e.target.id&&p(e.target.value)},d={responsive:!0,maintainAspectRatio:!1,tooltips:{titleFontSize:20,bodyFontSize:20},title:{display:!0,text:m+" top10: "+i,fontSize:24},legend:{display:!1},scales:{yAxes:[{ticks:{fontSize:20}}],xAxes:[{position:"top",ticks:{beginAtZero:!0,fontSize:20,precision:0}}]}},f={};f=(f=t.players.map(function(e){if("hy\xf6kk\xe4\xe4j\xe4t"===i&&"hy\xf6kk\xe4\xe4j\xe4"!==e.role)return null;if("puolustajat"===i&&"puolustaja"!==e.role)return null;if("Tehopisteet"===m){for(var a=0,n=0;n<t.matches.length;n++)for(var l=0;l<t.matches[n].scorers.length;l++)t.matches[n].scorers[l]===e.id&&a++,t.matches[n].assists[l]===e.id&&a++;return{name:e.lname+" "+e.fname[0]+".",points:a}}if("Maalit"===m){for(var r=0,s=0;s<t.matches.length;s++)for(var c=0;c<t.matches[s].scorers.length;c++)t.matches[s].scorers[c]===e.id&&r++;return{name:e.lname+" "+e.fname[0]+".",scores:r}}if("Sy\xf6tt\xf6pisteet"===m){for(var o=0,u=0;u<t.matches.length;u++)for(var p=0;p<t.matches[u].scorers.length;p++)t.matches[u].assists[p]===e.id&&o++;return{name:e.lname+" "+e.fname[0]+".",assists:o}}if("Osall. harjoituksiin"===m){for(var h=0,d=0;d<t.matches.length;d++)for(var E=0;E<t.matches[d].participants.length;E++)t.matches[d].participants[E]===e.id&&h++;return{name:e.lname+" "+e.fname[0]+".",entries:h}}if("Osall. peleihin"===m){for(var f=0,v=0;v<t.practises.length;v++)for(var k=0;k<t.practises[v].participants.length;k++)t.practises[v].participants[k]===e.id&&f++;return{name:e.lname+" "+e.fname[0]+".",entries:f}}return null})).filter(function(e){return null!=e});var v={};"Tehopisteet"===m?(f.sort(function(e,t){return e.points<t.points?1:e.points>t.points?-1:0}),v=f.map(function(e){return e.points})):"Maalit"===m?(f.sort(function(e,t){return e.scores<t.scores?1:e.scores>t.scores?-1:0}),v=f.map(function(e){return e.scores})):"Sy\xf6tt\xf6pisteet"===m?(f.sort(function(e,t){return e.assists<t.assists?1:e.assists>t.assists?-1:0}),v=f.map(function(e){return e.assists})):"Osall. harjoituksiin"!==m&&"Osall. peleihin"!==m||(f.sort(function(e,t){return e.entries<t.entries?1:e.entries>t.entries?-1:0}),v=f.map(function(e){return e.entries})),v=v.slice(0,10);var k=f.map(function(e){return e.name}),g={labels:k=k.slice(0,10),datasets:[{label:m,backgroundColor:"green",borderColor:"green",data:v}]};return l.a.createElement("div",{id:"chartContainer"},"Rooli: ",l.a.createElement("select",{id:"role",value:i,onChange:h},l.a.createElement("option",{key:"all",value:"kaikki"},"Kaikki"),l.a.createElement("option",{key:"forwards",value:"hy\xf6kk\xe4\xe4j\xe4t"},"Hy\xf6kk\xe4\xe4j\xe4t"),l.a.createElement("option",{key:"defenders",value:"puolustajat"},"Puolustajat")),l.a.createElement("br",null),"Tilasto: ",l.a.createElement("select",{id:"stat",value:m,onChange:h},l.a.createElement("option",{key:"Tehopisteet",value:"Tehopisteet"},"Tehopisteet"),l.a.createElement("option",{key:"Maalit",value:"Maalit"},"Maalit"),l.a.createElement("option",{key:"Sy\xf6tt\xf6pisteet",value:"Sy\xf6tt\xf6pisteet"},"Sy\xf6tt\xf6pisteet"),l.a.createElement("option",{key:"Osall.harj",value:"Osall. harjoituksiin"},"Osall. harjoituksiin"),l.a.createElement("option",{key:"Osall.pelit",value:"Osall. peleihin"},"Osall. peleihin")),l.a.createElement("hr",null),l.a.createElement(E.a,{data:g,options:d}))},v=function(e){var t,a=e.content,n=e.data;return"main"===a&&(t=l.a.createElement(u,null)),"matches"===a&&(t=l.a.createElement(p,{teamdata:n})),"practises"===a&&(t=l.a.createElement(h,{teamdata:n})),"players"===a&&(t=l.a.createElement(d,{teamdata:n})),"stats"===a&&(t=l.a.createElement(f,{teamdata:n})),l.a.createElement("section",{className:"App-content"},t)},k=(a(156),a(56)),g=a.n(k),y=function(){var e=Object(n.useState)("main"),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)([]),u=Object(s.a)(i,2),m=u[0],p=u[1];return Object(n.useEffect)(function(){g.a.get("teamdata.json").then(function(e){p(e.data)}).catch(function(e){console.log(e)})},[]),l.a.createElement("article",{className:"App"},l.a.createElement(c,null),l.a.createElement(o,{content:a,changeContent:function(e){r(e.target.id)}}),l.a.createElement(v,{content:a,data:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e,t,a){e.exports=a(173)},62:function(e,t,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.0f29038c.chunk.js.map