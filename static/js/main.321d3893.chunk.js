(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"arya_stark",image:"assets/pix/arya_stark.jpeg",count:0},{id:2,name:"Bronn",image:"assets/pix/bronn.jpg",count:0},{id:3,name:"cersei_lannister",image:"assets/pix/cersei_lannister.jpg",count:0},{id:4,name:"daenerys_targaryen",image:"assets/pix/daenerys_targaryen.jpg",count:0},{id:5,name:"jamie_lannister",image:"assets/pix/jamie_lannister.jpg",count:0},{id:6,name:"jon_snow",image:"assets/pix/jon_snow.jpeg",count:0},{id:7,name:"margaery_tyrell",image:"assets/pix/margaery_tyrell.jpg",count:0},{id:8,name:"petyr_baelish",image:"assets/pix/petyr_baelish.jpg",count:0},{id:9,name:"samwell_tarly",image:"assets/pix/samwell_tarly.jpg",count:0},{id:10,name:"sansa_stark",image:"assets/pix/sansa_stark.jpeg",count:0},{id:11,name:"tyrion_lannister",image:"assets/pix/tyrion_lannister.jpg",count:0},{id:12,name:"brienne_of_tarth",image:"assets/pix/brienne_of_tarth.jpg",count:0}]},,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(3),r=a.n(s),c=a(4),o=a(5),l=a(7),m=a(6),u=a(8),d=(a(15),function(e){return i.a.createElement("div",{className:"card",key:e.id,onClick:function(){return e.handleClick(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))}),p=(a(16),function(e){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"title"},e.children),i.a.createElement("div",{className:"scores"}," Current Score: ",e.score,"  |  Highest Score: ",e.win," "))}),g=(a(17),function(e){return i.a.createElement("div",{className:"wrapper"}," ",e.children," ")}),f=a(1),h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={cards:f,score:0,win:0},a.handleFinishGame=function(){return a.state.score>a.state.win&&a.setState({win:a.state.score},function(){}),a.state.cards.forEach(function(e){e.count=0}),alert("Game Over :( \nscore: ".concat(a.state.score)),a.setState({score:0}),!0},a.handleClick=function(e){a.state.cards.find(function(t,n){if(t.id===e){if(0===f[n].count)return f[n].count=1,a.setState({score:a.state.score+1},function(){}),a.state.cards.sort(function(){return Math.random()-.5}),!0;a.handleFinishGame()}})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(g,null,i.a.createElement(p,{score:this.state.score,win:this.state.win}," Clicky Game "),this.state.cards.map(function(t){return i.a.createElement(d,{handleClick:e.handleClick,id:t.id,key:t.id,image:t.image})}))}}]),t}(n.Component);a(18);r.a.render(i.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.321d3893.chunk.js.map