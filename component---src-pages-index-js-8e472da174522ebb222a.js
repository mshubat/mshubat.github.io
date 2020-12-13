/*! For license information please see component---src-pages-index-js-8e472da174522ebb222a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",l),f}}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));var r=n("q1tI"),a=n.n(r),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=a.a.createContext&&a.a.createContext(i),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function s(e){return function(t){return a.a.createElement(u,l({attr:l({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return a.a.createElement(t.tag,l({key:n},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var n,r=e.attr,i=e.size,o=e.title,s=c(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&a.a.createElement("title",null,o),e.children)};return void 0!==o?a.a.createElement(o.Consumer,null,(function(e){return t(e)})):t(i)}},OnI3:function(e,t,n){},QsD6:function(e,t,n){e.exports={section:"section-module--section--2mCzK",fadeIn:"section-module--fadeIn--vzYSO"}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var r=n("q1tI"),a=n.n(r),i=(n("OnI3"),n("qhky")),o=n("iCBQ"),l=n.n(o),c=function(e){var t=e.children;return a.a.createElement("div",{className:l.a.navItem},t)},s=n("ma3e"),u=n("NIcq"),f=function(){return a.a.createElement("nav",{styles:l.a.nav},a.a.createElement(c,null,a.a.createElement(s.b,{className:l.a.navIcon}),a.a.createElement("a",{className:l.a.navLink,href:"https://github.com/mshubat"},"GitHub")),a.a.createElement(c,null,a.a.createElement(s.c,{className:l.a.navIcon}),a.a.createElement("a",{className:l.a.navLink,href:"https://www.hackerrank.com/mattshubat"},"HackerRank")),a.a.createElement(c,null,a.a.createElement(s.e,{className:l.a.navIcon}),a.a.createElement("a",{className:l.a.navLink,href:"https://www.linkedin.com/in/mattshubat/"},"LinkedIn")),a.a.createElement(c,null,a.a.createElement(u.a,{className:l.a.navIcon}),a.a.createElement("a",{className:l.a.navLink,href:"mailto:mattshubat@gmail.com"},"Email")))},m=function(e){var t=e.title,n=e.children;return a.a.createElement("div",{style:{margin:"25rem auto 25rem auto",width:"100%"}},a.a.createElement("h1",{style:{fontSize:"50px",margin:"3rem auto",textAlign:"center"}},t),a.a.createElement("p",{style:{margin:"0 auto",textAlign:"center",fontSize:"2rem",height:"2em"}},n))},d=n("UbMB"),p=n.n(d),h=n("vKLn"),y=n.n(h),v=n("Lnxd"),g=n("LjP0"),b={React:{info:"I have worked in React in several production projects. I really enjoy how\n            organized components allow your code to be. In addition to functional components, \n            hooks, and native state management, I have also worked with Redux, as well as \n            React Router for site navigation. This site is also made with React.",icon:a.a.createElement(s.g,null)},Javascript:{info:"I have worked with Javascript on many projects and am familiar with modern ES6\n            features. I learnt JS after other languages, so I found it fairly straight forward to \n            pick up. As I have gained experience Javascript, I have come to understand the common \n            pitfalls to avoid and am always interested in learning more.",icon:a.a.createElement(g.j,null)},Flutter:{info:"I have worked with Flutter to build mobile apps for iOS and Android. I particularly\n            love the ease of use of the Flutter framework to build UIs quickly. Coming from React, \n            it is intuitive to pick up. I have experience with the widget lifecycle, routing, providers,\n            services, and integration with firebase and the google cloud platform.",icon:a.a.createElement(g.g,null)},Firebase:{info:"I have experience designing collection and document layouts taking into account the \n            application architecture in question. NoSQL design, and queries have become more \n            intuitive to me over time and I really enjoy the flexibility that Firebase provides.\n            I also really like the Firebase streaming capability, when used in the right circumstances.",icon:a.a.createElement(g.e,null)},Dart:{info:"As used in my Flutter experience, I have really enjoyed a lot of the features of Dart. I\n            find it gives a really nice balance between the flexibility of Javascript and the type \n            safety and design principles of Java. Its custom setter methods are also really cool.",icon:a.a.createElement(g.d,null)},SQL:{info:"I have experience working with SQL databases such as PostgreSQL, and MySQL. I am comfortable\n            writing queries to fetch data, join tables, update records and so on. I also have\n            experience laying out the model structure for the domain at hand and evolving that structure\n            over time.",icon:a.a.createElement(g.m,null)},Java:{info:"As the first OO language I learnt, Java will always have a special place in my heart. Though\n            it is often criticized for being verbose, I find it to be extremely intuitive for designing \n            an OO system, and its types provide for a secure and reliable feeling while developing. I have\n            written quite a few school projects in Java, and in my career have worked on an e-commerce \n            application and large system tests with Java at their core.",icon:a.a.createElement(s.d,null)},Python:{info:"\n            🐍 I love Python. I find its lack of parentheses refreshing and its forced indentation to be clear\n            and extremely legible. I have used Python in the past to write quick scripts and to solve algorithmic\n            problems. I also used Python to build my thesis project called Galaxy Data Mines. Its great community,\n            libraries and ease of use make it one of my favourite technologies.",icon:a.a.createElement(s.f,null)},Flask:{info:"In my experience with Flask and I find it to be a very fast, flexible, minimal and intuitive microframework.\n            The project that I am currently working on will be using Flask for these reasons.",icon:a.a.createElement(g.f,null)},Git:{info:"I have used Git in pretty much every project I have worked on. It is an invaluable tool for saving your \n            work and collaborating with a team. Every project I have worked on in my career has used git and I have \n            learnt much about it through these experiences. Git add, stash, commit, push, pull, branch, fetch, rebase\n            are part of my daily workflow.",icon:a.a.createElement(g.h,null)},C:{info:"Working with C, and revisiting it over the years has taught me about lower level memory management\n            and how computers do what they do. Using C has given me the experience to know a little more about what is\n            going on under the hood. Call stacks, the stack vs heap, pointers and memory management all teach you valuable\n            lessons. Pointers were particularly helpful when learning JS, as function pointers are highly similar.",icon:a.a.createElement(g.b,null)},HTML:{info:"I started working with HTML in highschool. It was amazing to me that you could structure an entire layout\n            with just tags.",icon:a.a.createElement(g.i,null)},JSON:{info:"Essential format for communicating and passing data. Simple and necessary. I have used JSON on pretty much every\n            project I have been a part of.",icon:a.a.createElement(g.k,null)},CSS:{info:"A cruel yet a necessary evil...",icon:a.a.createElement(g.c,null)},NoSQL:{info:"As mentioned in my Firebase description, I have really enjoyed the flexibility and fast evolution that NoSQL \n            databases provide. Although this can be a more challenging concept to grasp coming form SQL DB's, it is worth \n            the effort.",icon:a.a.createElement(s.a,null)},"Material-UI":{info:"I have used Material-UI to style and build both Flutter apps and Reacts apps that I have worked on. Its robust feature set\n            and theming options are what make it a great component framework to work with.",icon:a.a.createElement(g.l,null)},Bootstrap:{info:"Similarly to Material-UI, the vast community and resources Bootstrap provides make it a great framework to \n            work with. Over the years, I have used Bootstrap to build small personal websites as well as larger web\n            applications.",icon:a.a.createElement(g.a,null)},"Spring Boot":{info:"\n        I worked with Spring Boot to build a backend API service for an e-commerce application. I have experience with\n        its service architecture, dependency injection, Hibernate and JPA integration with PostgreSQL. I find it to be a \n        very stable and clear system to work with.",icon:a.a.createElement(g.n,null)}},w=p.a.bind(y.a),k=function(){var e,t,n=Object(r.useState)(),i=n[0],o=n[1],l=[y.a.skill1,y.a.skill2,y.a.skill3,y.a.skill4,y.a.skill5];return i?a.a.createElement(v.b.Provider,{value:{size:"5em"}},a.a.createElement("div",{className:(e=i,t=Object.keys(b).indexOf(e)%l.length,w({focusSkill:!0,focusSkill1:0===t,focusSkill2:1===t,focusSkill3:2===t,focusSkill4:3===t,focusSkill5:4===t})),onClick:function(){return o()}},a.a.createElement("span",{className:y.a.focusSkillHeading},i),a.a.createElement("p",{className:y.a.focusSkillDescription},b[i].info),a.a.createElement("div",{className:y.a.focusSkillIcon},b[i].icon))):a.a.createElement("div",{className:y.a.skillGrid},Object.keys(b).map((function(e,t){return a.a.createElement(v.b.Provider,{value:{size:"3em"}},a.a.createElement("div",{key:t,className:l[t%l.length],onClick:function(){return o(e)}},b[e].icon))})))},E=n("mZj2"),S=n.n(E),T=function(){return a.a.createElement("div",{className:S.a.projectGrid},[{name:"Galaxy Web",summary:"Explore space with astronomical data online",description:"Currently in development!",link:"#",imageSource:"../../../projects/space-web.jpg",artist:"pikisuperstar"},{name:"Galaxy Data Mines",summary:"Comparing 2 Astronomical Databases",description:"I developed this tool for my thesis project to help astronomers compare objects between NED (the NASA extragalactic Database) \n            and SIMBAD (Set of Identifications, Measurements, and Bibliography for Astronomical Data). The tool can query millions of objects\n            and output skyplots and statistics of the results.",link:"https://github.com/mshubat/galaxy_data_mines",imageSource:"../../../projects/space.jpg",artist:"tartila"},{name:"ER Watch",summary:"Hospital Wait Time Calculator",description:"ER Watch is a NodeJS application that estimates how long it will take patients \n            to see a doctor at the emergency room. If a patient needs to go to the emergency room, they \n            can check the website to see how their estimated wait time. Nurses can log in to their emergency room, \n            and add patients to the queue as they check in. Each patient is given an 8 digit code, which \n            they can enter into the website on their mobile device.",link:"https://erwatch.herokuapp.com/",imageSource:"../../../projects/med.jpg",artist:"rawpixel.com"}].map((function(e,t){return a.a.createElement("a",{href:e.link},a.a.createElement("div",{key:t,className:S.a.project},a.a.createElement("h3",null,e.name),a.a.createElement("div",{className:S.a.summary},e.summary),a.a.createElement("div",{className:S.a.description},e.description),a.a.createElement("a",{className:S.a.artist,href:"https://www.freepik.com/vectors/background"},"Artist: ",e.artist),a.a.createElement("img",{className:S.a.image,src:e.imageSource?e.imageSource:null})))})))},I=n("QsD6"),O=n.n(I),A=function(e){var t=e.title,n=e.desc,r=e.children,i=e.titleAlign,o=e.descAlign;return a.a.createElement("div",{style:{margin:"10rem auto 5rem auto",width:"100%",paddingBottom:"3rem"},className:O.a.section},a.a.createElement("h2",{style:{textAlign:i}},t),a.a.createElement("p",{style:{margin:"0 auto 6rem auto",textAlign:o}},n),r)};function j(){var e=Object(r.useState)(""),t=e[0],n=e[1],o="I am a ",l=["software developer. Nice to Meet you 🤝","technology enthusiast.","problem solver.","geek.","Canadian. Nice to meet you 🍁!","programmer.","software engineer."];function c(e,t){var r;void 0===t&&(t=0),t<o.length?(r=o.slice(0,t)+o[t],n(r),setTimeout((function(){return c(e,t+1)}),50)):t<o.length+e.length?(r=o+e.slice(0,t-o.length)+e[t-o.length],n(r),setTimeout((function(){return c(e,t+1)}),50)):setTimeout((function(){return function e(t,r){void 0===r&&(r=0);var a=l.indexOf(t);r<=t.length?(n(o+t.slice(0,t.length-r)),setTimeout((function(){return e(t,r+1)}),40)):setTimeout((function(){return c(l[(a+1)%l.length],o.length)}),1e3)}(e)}),2e3)}return Object(r.useEffect)((function(){window.scrollTo(0,0),c(l[0])}),[]),a.a.createElement("div",{className:"container"},a.a.createElement(i.a,null,a.a.createElement("title",null,"Matt Shubat")),a.a.createElement(f,null),a.a.createElement(m,{title:"Hi, I'm Matt"},t),a.a.createElement(A,{title:"Skills",desc:"These are some of the technologies that I have experience working with.",titleAlign:"center",descAlign:"center"},a.a.createElement(k,null)),a.a.createElement(A,{title:"Projects",desc:"Some projects I have worked on, and am working on.",titleAlign:"center",descAlign:"center"},a.a.createElement(T,null)))}},UbMB:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(a.apply(this,r));else if("object"===i)for(var o in r)n.call(r,o)&&r[o]&&e.push(this&&this[o]||o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var l,c,s,u;if(Array.isArray(t)){if((l=t.length)!=o.length)return!1;for(c=l;0!=c--;)if(!e(t[c],o[c]))return!1;return!0}if(r&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=t.entries();!(c=u.next()).done;)if(!e(c.value[1],o.get(c.value[0])))return!1;return!0}if(a&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((l=t.length)!=o.length)return!1;for(c=l;0!=c--;)if(t[c]!==o[c])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((l=(s=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,s[c]))return!1;if(n&&t instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!t.$$typeof)&&!e(t[s[c]],o[s[c]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},iCBQ:function(e,t,n){e.exports={fadeIn:"nav-module--fadeIn--nTH8k",navItem:"nav-module--navItem--1VXPn",navLink:"nav-module--navLink--fDF-O",navIcon:"nav-module--navIcon--MJEHE"}},mZj2:function(e,t,n){e.exports={projectGrid:"projects-module--projectGrid--1RaA8",project:"projects-module--project--ZyT2W",image:"projects-module--image--2h5HA",summary:"projects-module--summary--1KdbS",description:"projects-module--description--1Nis8",artist:"projects-module--artist--3pYTi"}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));var r,a,i,o,l=n("17x9"),c=n.n(l),s=n("8+s/"),u=n.n(s),f=n("bmMU"),m=n.n(f),d=n("q1tI"),p=n.n(d),h=n("YVoz"),y=n.n(h),v="bodyAttributes",g="htmlAttributes",b="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},k=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",S="href",T="http-equiv",I="innerHTML",O="itemprop",A="name",j="property",C="rel",x="src",N="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",M="defer",R="encodeSpecialCharacters",D="onChangeClientState",B="titleTemplate",q=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),H=[w.NOSCRIPT,w.SCRIPT,w.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=Z(e,w.TITLE),n=Z(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,P);return t||r||void 0},K=function(e){return Z(e,D)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return _({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],c=l.toLowerCase();-1===t.indexOf(c)||n===C&&"canonical"===e[n].toLowerCase()||c===C&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==I&&l!==E&&l!==O||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var l=i[o],c=y()({},r[l],a[l]);r[l]=c}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;ce(w.BODY,r),ce(w.HTML,a),le(f,m);var d={baseTag:se(w.BASE,n),linkTags:se(w.LINK,i),metaTags:se(w.META,o),noscriptTags:se(w.NOSCRIPT,l),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,u)},p={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),c(e,p,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(w.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),l=0;l<o.length;l++){var c=o[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},se=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===I)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[p.a.createElement(w.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Q(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Q(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case g:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===I||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),p.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===I||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Q(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:me(w.BASE,t,r),bodyAttributes:me(v,n,r),htmlAttributes:me(g,a,r),link:me(w.LINK,i,r),meta:me(w.META,o,r),noscript:me(w.NOSCRIPT,l,r),script:me(w.SCRIPT,c,r),style:me(w.STYLE,s,r),title:me(w.TITLE,{title:f,titleAttributes:m},r)}},pe=u()((function(e){return{baseTag:V([S,N],e),bodyAttributes:W(v,e),defer:Z(e,M),encode:Z(e,R),htmlAttributes:W(g,e),linkTags:X(w.LINK,[C,S],e),metaTags:X(w.META,[A,k,T,j,O],e),noscriptTags:X(w.NOSCRIPT,[I],e),onChangeClientState:K(e),scriptTags:X(w.SCRIPT,[x,I],e),styleTags:X(w.STYLE,[E],e),title:G(e),titleAttributes:W(b,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),de)((function(){return null})),he=(a=pe,o=i=function(e){function t(){return z(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return _({},r,((t={})[n.type]=[].concat(r[n.type]||[],[_({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case w.TITLE:return _({},a,((t={})[r.type]=o,t.titleAttributes=_({},i),t));case w.BODY:return _({},a,{bodyAttributes:_({},i)});case w.HTML:return _({},a,{htmlAttributes:_({},i)})}return _({},a,((n={})[r.type]=_({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=_({},t);return Object.keys(e).forEach((function(t){var r;n=_({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(J(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=J(e,["children"]),r=_({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.a.createElement(a,r)},U(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.a.Component),i.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind}).call(this,n("yLpj"))},vKLn:function(e,t,n){e.exports={skillGrid:"skills-module--skillGrid--3Trw1",skill1:"skills-module--skill1--21Spb",skill2:"skills-module--skill2--1BLfg",skill3:"skills-module--skill3--21OB_",skill4:"skills-module--skill4--3SkC-",skill5:"skills-module--skill5--1eOlt",skill6:"skills-module--skill6--gHSUr",focusSkill1:"skills-module--focusSkill1--1QcJX",focusSkill2:"skills-module--focusSkill2--qCy5x",focusSkill3:"skills-module--focusSkill3--2zeV6",focusSkill4:"skills-module--focusSkill4--3RxSU",focusSkill5:"skills-module--focusSkill5--8MAIR",focusSkillIcon:"skills-module--focusSkillIcon--1tKHD",spin:"skills-module--spin--3ZwbS",focusSkill:"skills-module--focusSkill--2wYD8",focusSkillHeading:"skills-module--focusSkillHeading--1mkLk",focusSkillDescription:"skills-module--focusSkillDescription--2b_Xy"}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-js-8e472da174522ebb222a.js.map