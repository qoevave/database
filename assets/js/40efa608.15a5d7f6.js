"use strict";(self.webpackChunkdatabase=self.webpackChunkdatabase||[]).push([[3484],{3905:(a,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>m});var n=t(7294);function i(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){i(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,n,i=function(a,e){if(null==a)return{};var t,n,i={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(i[t]=a[t]);return i}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(i[t]=a[t])}return i}var o=n.createContext({}),_=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},u=function(a){var e=_(a.components);return n.createElement(o.Provider,{value:e},a.children)},p={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(a,e){var t=a.components,i=a.mdxType,s=a.originalType,o=a.parentName,u=l(a,["components","mdxType","originalType","parentName"]),d=_(t),m=i,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||s;return t?n.createElement(b,r(r({ref:e},u),{},{components:t})):n.createElement(b,r({ref:e},u))}));function m(a,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var s=t.length,r=new Array(s);r[0]=d;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=a,l.mdxType="string"==typeof a?a:i,r[1]=l;for(var _=2;_<s;_++)r[_]=t[_];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(a,e,t)=>{t.d(e,{Z:()=>r});var n=t(7294),i=t(6010);const s="tabItem_Ymn6";function r(a){let{children:e,hidden:t,className:r}=a;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(s,r),hidden:t},e)}},4866:(a,e,t)=>{t.d(e,{Z:()=>E});var n=t(7462),i=t(7294),s=t(6010),r=t(2466),l=t(6775),o=t(1980),_=t(7392),u=t(12);function p(a){return function(a){return i.Children.map(a,(a=>{if(!a||(0,i.isValidElement)(a)&&function(a){const{props:e}=a;return!!e&&"object"==typeof e&&"value"in e}(a))return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(a).map((a=>{let{props:{value:e,label:t,attributes:n,default:i}}=a;return{value:e,label:t,attributes:n,default:i}}))}function d(a){const{values:e,children:t}=a;return(0,i.useMemo)((()=>{const a=e??p(t);return function(a){const e=(0,_.l)(a,((a,e)=>a.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(a),a}),[e,t])}function m(a){let{value:e,tabValues:t}=a;return t.some((a=>a.value===e))}function b(a){let{queryString:e=!1,groupId:t}=a;const n=(0,l.k6)(),s=function(a){let{queryString:e=!1,groupId:t}=a;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,o._X)(s),(0,i.useCallback)((a=>{if(!s)return;const e=new URLSearchParams(n.location.search);e.set(s,a),n.replace({...n.location,search:e.toString()})}),[s,n])]}function k(a){const{defaultValue:e,queryString:t=!1,groupId:n}=a,s=d(a),[r,l]=(0,i.useState)((()=>function(a){let{defaultValue:e,tabValues:t}=a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=t.find((a=>a.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:s}))),[o,_]=b({queryString:t,groupId:n}),[p,k]=function(a){let{groupId:e}=a;const t=function(a){return a?`docusaurus.tab.${a}`:null}(e),[n,s]=(0,u.Nk)(t);return[n,(0,i.useCallback)((a=>{t&&s.set(a)}),[t,s])]}({groupId:n}),v=(()=>{const a=o??p;return m({value:a,tabValues:s})?a:null})();(0,i.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:r,selectValue:(0,i.useCallback)((a=>{if(!m({value:a,tabValues:s}))throw new Error(`Can't select invalid tab value=${a}`);l(a),_(a),k(a)}),[_,k,s]),tabValues:s}}var v=t(2389);const h="tabList__CuJ",c="tabItem_LNqP";function f(a){let{className:e,block:t,selectedValue:l,selectValue:o,tabValues:_}=a;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),d=a=>{const e=a.currentTarget,t=u.indexOf(e),n=_[t].value;n!==l&&(p(e),o(n))},m=a=>{let e=null;switch(a.key){case"Enter":d(a);break;case"ArrowRight":{const t=u.indexOf(a.currentTarget)+1;e=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(a.currentTarget)-1;e=u[t]??u[u.length-1];break}}e?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},e)},_.map((a=>{let{value:e,label:t,attributes:r}=a;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,key:e,ref:a=>u.push(a),onKeyDown:m,onClick:d},r,{className:(0,s.Z)("tabs__item",c,r?.className,{"tabs__item--active":l===e})}),t??e)})))}function g(a){let{lazy:e,children:t,selectedValue:n}=a;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const a=s.find((a=>a.props.value===n));return a?(0,i.cloneElement)(a,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},s.map(((a,e)=>(0,i.cloneElement)(a,{key:e,hidden:a.props.value!==n}))))}function V(a){const e=k(a);return i.createElement("div",{className:(0,s.Z)("tabs-container",h)},i.createElement(f,(0,n.Z)({},a,e)),i.createElement(g,(0,n.Z)({},a,e)))}function E(a){const e=(0,v.Z)();return i.createElement(V,(0,n.Z)({key:String(e)},a))}},4919:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>_,toc:()=>p});var n=t(7462),i=(t(7294),t(3905)),s=t(4866),r=t(5162);const l={},o="360 Scene Database",_={unversionedId:"Scenes/index",id:"Scenes/index",title:"360 Scene Database",description:"Overview",source:"@site/docs/Scenes/index.mdx",sourceDirName:"Scenes",slug:"/Scenes/",permalink:"/database/docs/Scenes/",draft:!1,editUrl:"https://github.com/qoevave/database/tree/gh-pages/docs/Scenes/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"About The Project",permalink:"/database/docs/about"},next:{title:"Badminton",permalink:"/database/docs/Scenes/Badminton"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Recorded Scenes",id:"recorded-scenes",level:2},{value:"Capture",id:"capture",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Download",id:"scenes-download-list",level:2},{value:"Publication",id:"scenespublication",level:2}],d={toc:p};function m(a){let{components:e,...t}=a;return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"360-scene-database"},"360 Scene Database"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The QoEVAVE Scenes Database provides an initial audiovisual database consiting of 12 scenes capturing real-life nature and urban scenes.\nThe maximum video resolution is ",(0,i.kt)("strong",{parentName:"p"},"7680x3840")," (8k) at ",(0,i.kt)("strong",{parentName:"p"},"60 frames-per-second"),", with ",(0,i.kt)("strong",{parentName:"p"},"4th-order Ambisonics spatial audio")," (4OA).\nAll video sequences are recorded with a target duration of 60 seconds and designed to represent real-life settings for systematically evaluating various dimensions of uni-/multimodal perception, cognition, behavior, and quality of experience (QoE) in a controlled virtual environment.\nThis database serves as high-quality reference material with an equal focus on auditory and visual sensory information within the QoE community. For more information, please see the ",(0,i.kt)("a",{parentName:"p",href:"#scenespublication"},"publication")," below."),(0,i.kt)("h2",{id:"recorded-scenes"},"Recorded Scenes"),(0,i.kt)("p",null,"You can download individual scenes on each of the available scene pages, or view the ",(0,i.kt)("a",{parentName:"p",href:"#scenes-download-list"},"download list")," list below. On each scene page, you will find the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Location information of recording. "),(0,i.kt)("li",{parentName:"ul"},"Scene version notes describing variations in multiple 'takes'. "),(0,i.kt)("li",{parentName:"ul"},"Preview link to YouTube (uses 1st-order Ambisonics)."),(0,i.kt)("li",{parentName:"ul"},"Download links for 4th-audio Ambisonics audio, 8k video file, or muxed audiovideo file with 1st-order Ambisonics. "),(0,i.kt)("li",{parentName:"ul"},"Spatial / Temporal indexing plots on video data.  ")),(0,i.kt)("h2",{id:"capture"},"Capture"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Media"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Device"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Audio"),(0,i.kt)("td",{parentName:"tr",align:"center"},"mhacoustics ",(0,i.kt)("a",{parentName:"td",href:"https://mhacoustics.com/products"},"Eigenmike")),(0,i.kt)("td",{parentName:"tr",align:null},"32 channel spherical microphone array capable of 4th order higher-order ambisonics output.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Video"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.insta360.com/product/insta360-pro2/"},"Insta360 Pro 2")),(0,i.kt)("td",{parentName:"tr",align:null},"360 video camera capable of 8K video output. Comprised of 6 F2.4 fisheye lenses each capturing 4K video resolution up to 120Mbps.")))),(0,i.kt)("h2",{id:"specifications"},"Specifications"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," Information ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Video Encoding"),(0,i.kt)("td",{parentName:"tr",align:null},"ffvhuff")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Video Resolution"),(0,i.kt)("td",{parentName:"tr",align:null},"7680x3840")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Projection Map"),(0,i.kt)("td",{parentName:"tr",align:null},"Equirectangular")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Video FPS"),(0,i.kt)("td",{parentName:"tr",align:null},"59.94")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Audio Sample-rate"),(0,i.kt)("td",{parentName:"tr",align:null},"48,000; 24-bit PCM")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"4th-Order Ambisonics"),(0,i.kt)("td",{parentName:"tr",align:null},"Individual .wav files of 4th-order Ambisonics in ACN channel ordering with SN3D normalization. Scene representation has a -90\xb0 rotational offset against video files for playback with Unity. Visit ",(0,i.kt)("a",{parentName:"td",href:"./help/#help-spatialalignment"},"Help")," for more information. Labelled as ",(0,i.kt)("inlineCode",{parentName:"td"},"ambiX4")," in file names.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1st-Order Ambisonics"),(0,i.kt)("td",{parentName:"tr",align:null},"1st-Order Ambisonics in ACN channel ordering with SN3D normalization. Encoded using AAC and muxed with the video files into an .MP4 container. Pre-processed with Google's ",(0,i.kt)("a",{parentName:"td",href:"https://support.google.com/youtube/answer/6395969?hl=en"},"spatial media metadata injector")," for uploading to YouTube. Labelled as ",(0,i.kt)("inlineCode",{parentName:"td"},"ambiX1")," in file names.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Audio Post-production"),(0,i.kt)("td",{parentName:"tr",align:null},"All audio files are provided with a ",(0,i.kt)("strong",{parentName:"td"},"500ms fade-in/out"),". Further post-processing includes EQ (",(0,i.kt)("strong",{parentName:"td"},"60 Hz high-pass")," and ",(0,i.kt)("strong",{parentName:"td"},"10 kHz -3dB notch filter"),"), Omnidirection-compression for make-up gain (",(0,i.kt)("strong",{parentName:"td"},"max +5 dB"),"), and Ambisonic B-Format scene roation for audiovisual alignment. All post-processing was applied with ",(0,i.kt)("a",{parentName:"td",href:"https://plugins.iem.at/"},"IEM")," VSTs")))),(0,i.kt)("h2",{id:"scenes-download-list"},"Download"),(0,i.kt)("p",null,"Download links for all individual scenes can be found on the each scene page. There you can download audio (4OA) video (8K) and the muxed audiovideo files (YouTube 1OA) for any available versions of the scene. Comments are provided to note slight changes in scene composition between any available versions."),(0,i.kt)("p",null,"Alternatively, you can expand the drop down menu below to see all download links for audio, video, and audiovideo files. "),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Download list"),(0,i.kt)(s.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Audio.wav \ud83c\udfa7",mdxType:"TabItem"},(0,i.kt)("p",null,"4th-order Ambisonics (4OA) in ambiX format (ACN, SN3D)"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Badminton01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Badminton01/Badminton01_A_ambiX4_24bit.wav"},"Badminton01_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"Badminton03: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Badminton03/Badminton03_A_ambiX4_24bit.wav"},"Badminton03_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"Badminton04: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Badminton04/Badminton04_A_ambiX4_24bit.wav"},"Badminton04_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"Badminton05: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Badminton05/Badminton05_A_ambiX4_24bit.wav"},"Badminton05_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"BuskingCity01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingCity01/BuskingCity01_A_ambiX4_24bit.wav"},"BuskingCity01_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"BuskingCity02: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingCity02/BuskingCity02_A_ambiX4_24bit.wav"},"BuskingCity02_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"BuskingUnderpass01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass01/BuskingUnderpass01_A_ambiX4_24bit.wav"},"BuskingUnderpass01_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"BuskingUnderpass02: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass02/BuskingUnderpass02_A_ambiX4_24bit.wav"},"BuskingUnderpass02_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"BuskingUnderpass03: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass03/BuskingUnderpass03_A_ambiX4_24bit.wav"},"BuskingUnderpass03_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"BuskingUnderpass04: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass04/BuskingUnderpass04_A_ambiX4_24bit.wav"},"BuskingUnderpass04_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"BuskingUnderpass05: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass05/BuskingUnderpass05_A_ambiX4_24bit.wav"},"BuskingUnderpass05_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"Cheerleading01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Cheerleading01/Cheerleading01_A_ambiX4_24bit.wav"},"Cheerleading01_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"ConferenceCenter01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Conference01/Conference01_A_ambiX4_24bit.wav"},"Conference01_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"ConferenceParticipant02: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Conference02/Conference02_A_ambiX4_24bit.wav"},"Conference02_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"ConferenceParticipant03: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Conference03/Conference03_A_ambiX4_24bit.wav"},"Conference03_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"ForestWalk01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/ForestWalk01/ForestWalk01_A_ambiX4_24bit.wav"},"ForestWalk01_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"ForestWalk02: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/ForestWalk02/ForestWalk02_A_ambiX4_24bit.wav"},"ForestWalk02_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"ForestWalk03: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/ForestWalk03/ForestWalk03_A_ambiX4_24bit.wav"},"ForestWalk03_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"Lake01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Lake01/Lake01_A_ambiX4_24bit.wav"},"Lake01_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"ParkFountains01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/ParkFountains01/ParkFountains01_A_ambiX4_24bit.wav"},"ParkFountains01_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"River01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/River01/River01_A_ambiX4_24bit.wav"},"River01_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"Skateboarding01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding01/Skateboarding01_A_ambiX4_24bit.wav"},"Skateboarding01_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"Skateboarding03: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding03/Skateboarding03_A_ambiX4_24bit.wav"},"Skateboarding03_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"Skateboarding04: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding04/Skateboarding04_A_ambiX4_24bit.wav"},"Skateboarding04_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"Skateboarding05: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding05/Skateboarding05_A_ambiX4_24bit.wav"},"Skateboarding05_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"Train01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Train01/Train01_A_ambiX4_24bit.wav"},"Train01_A_ambiX4_24bit.wav")))),(0,i.kt)(r.Z,{value:"Video.mkv \ud83c\udfac",mdxType:"TabItem"},(0,i.kt)("p",null,"Raw 8K resolution video files."),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Badminton01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Badminton01/Badminton01_V_7680x3840_60fps_60s.mkv"},"Badminton01_V_7680x3840_60fps_60s.mkv")),(0,i.kt)("li",null,"Badminton03: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Badminton03/Badminton03_V_7680x3840_60fps_60s.mkv"},"Badminton03_V_7680x3840_60fps_60s.mkv")),(0,i.kt)("li",null,"Badminton04: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Badminton04/Badminton04_V_7680x3840_60fps_60s.mkv"},"Badminton04_V_7680x3840_60fps_60s.mkv")),(0,i.kt)("li",null,"Badminton05: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Badminton05/Badminton05_V_7680x3840_60fps_64s.mkv"},"Badminton05_V_7680x3840_60fps_64s.mkv")),(0,i.kt)("li",null,"BuskingCity01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingCity01/BuskingCity01_V_7680x3840_60fps_51s.mkv"},"BuskingCity01_V_7680x3840_60fps_51s.mkv")),(0,i.kt)("li",null,"BuskingCity02: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingCity02/BuskingCity02_V_7680x3840_60fps_63s.mkv"},"BuskingCity02_V_7680x3840_60fps_63s.mkv")),(0,i.kt)("li",null,"BuskingUnderpass01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass01/BuskingUnderPass01_V_7680x3840_60fps_59s.mkv"},"BuskingUnderPass01_V_7680x3840_60fps_59s.mkv")),(0,i.kt)("li",null,"BuskingUnderpass02: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass02/BuskingUnderPass02_V_7680x3840_60fps_63s.mkv"},"BuskingUnderPass02_V_7680x3840_60fps_63s.mkv")),(0,i.kt)("li",null,"BuskingUnderpass03: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass03/BuskingUnderPass03_V_7680x3840_60fps_63s.mkv"},"BuskingUnderPass03_V_7680x3840_60fps_63s.mkv")),(0,i.kt)("li",null,"BuskingUnderpass04: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass04/BuskingUnderPass04_V_7680x3840_60fps_61s.mkv"},"BuskingUnderPass04_V_7680x3840_60fps_61s.mkv")),(0,i.kt)("li",null,"BuskingUnderpass05: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass05/BuskingUnderPass05_V_7680x3840_60fps_61s.mkv"},"BuskingUnderPass05_V_7680x3840_60fps_61s.mkv")),(0,i.kt)("li",null,"Cheerleading01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Cheerleading01/CheerLeading01_V_7680x3840_60fps_68s.mkv"},"CheerLeading01_V_7680x3840_60fps_68s.mkv")),(0,i.kt)("li",null,"ConferenceCenter01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Conference01/Conference01_V_7680x3840_60fps_60s.mkv"},"Conference01_V_7680x3840_60fps_60s.mkv")),(0,i.kt)("li",null,"ConferenceParticipant02: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Conference02/Conference02_V_7680x3840_60fps_80s.mkv"},"Conference02_V_7680x3840_60fps_80s.mkv")),(0,i.kt)("li",null,"ConferenceParticipant03: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Conference03/Conference03_V_7680x3840_60fps_83s.mkv"},"Conference03_V_7680x3840_60fps_83s.mkv")),(0,i.kt)("li",null,"ForestWalk01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/ForestWalk01/ForestWalk01_V_7680x3840_60fps_60s.mkv"},"ForestWalk01_V_7680x3840_60fps_60s.mkv")),(0,i.kt)("li",null,"ForestWalk02: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/ForestWalk02/ForestWalk02_V_7680x3840_60fps_60s.mkv"},"ForestWalk02_V_7680x3840_60fps_60s.mkv")),(0,i.kt)("li",null,"ForestWalk03: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/ForestWalk03/ForestWalk03_V_7680x3840_60fps_60s.mkv"},"ForestWalk03_V_7680x3840_60fps_60s.mkv")),(0,i.kt)("li",null,"Lake01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Lake01/Lake01_V_7680x3840_60fps_60s.mkv"},"Lake01_V_7680x3840_60fps_60s.mkv")),(0,i.kt)("li",null,"ParkFountains01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/ParkFountains01/ParkFountains01_V_7680x3840_60fps_60s.mkv"},"ParkFountains01_V_7680x3840_60fps_60s.mkv")),(0,i.kt)("li",null,"River01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/River01/River01_V_7680x3840_60fps_60s.mkv"},"River01_V_7680x3840_60fps_60s.mkv")),(0,i.kt)("li",null,"Skateboarding01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding01/Skateboarding01_V_7680x3840_60fps_60s.mkv"},"Skateboarding01_V_7680x3840_60fps_60s.mkv")),(0,i.kt)("li",null,"Skateboarding03: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding03/Skateboarding03_V_7680x3840_60fps_60s.mkv"},"Skateboarding03_V_7680x3840_60fps_60s.mkv")),(0,i.kt)("li",null,"Skateboarding04: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding04/Skateboarding04_V_7680x3840_60fps_60s.mkv"},"Skateboarding04_V_7680x3840_60fps_60s.mkv")),(0,i.kt)("li",null,"Skateboarding05: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding05/Skateboarding05_V_7680x3840_60fps_63s.mkv"},"Skateboarding05_V_7680x3840_60fps_60s.mkv")),(0,i.kt)("li",null,"Train01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Train01/Train01_V_7680x3840_60fps_60s.mkv"},"Train01_V_7680x3840_60fps_60s.mkv")))),(0,i.kt)(r.Z,{value:"Audio + Video.mp4 \ud83c\udfa7\ud83c\udfac",mdxType:"TabItem"},(0,i.kt)("p",null,"Encoded audiovideo files uploaded to YouTube. Uses 1st-order Ambisonics (1OA) with AAC encoding and 8K resolution video."),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Badminton01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Badminton01/Badminton01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"Badminton01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"Badminton03: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Badminton03/Badminton03_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"Badminton03_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"Badminton04: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Badminton04/Badminton04_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"Badminton04_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"Badminton05: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Badminton05/Badminton05_AV_7680x3840_60fps_64s_25Mbps_ambiX1_24bit.mp4"},"Badminton05_AV_7680x3840_60fps_64s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"BuskingCity01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingCity01/BuskingCity01_AV_7680x3840_60fps_51s_25Mbps_ambiX1_24bit.mp4"},"BuskingCity01_AV_7680x3840_60fps_51s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"BuskingCity02: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingCity02/BuskingCity02_AV_7680x3840_60fps_63s_25Mbps_ambiX1_24bit.mp4"},"BuskingCity02_AV_7680x3840_60fps_63s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"BuskingUnderpass01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass01/BuskingUnderpass01_AV_7680x3840_60fps_59s_25Mbps_ambiX1_24bit.mp4"},"BuskingUnderpass01_AV_7680x3840_60fps_59s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"BuskingUnderpass02: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass02/BuskingUnderpass02_AV_7680x3840_60fps_63s_25Mbps_ambiX1_24bit.mp4"},"BuskingUnderpass02_AV_7680x3840_60fps_63s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"BuskingUnderpass03: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass03/BuskingUnderpass03_AV_7680x3840_60fps_63s_25Mbps_ambiX1_24bit.mp4"},"BuskingUnderpass03_AV_7680x3840_60fps_63s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"BuskingUnderpass04: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass04/BuskingUnderpass04_AV_7680x3840_60fps_61s_25Mbps_ambiX1_24bit.mp4"},"BuskingUnderpass04_AV_7680x3840_60fps_61s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"BuskingUnderpass05: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass05/BuskingUnderpass05_AV_7680x3840_60fps_61s_25Mbps_ambiX1_24bit.mp4"},"BuskingUnderpass05_AV_7680x3840_60fps_61s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"Cheerleading01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Cheerleading01/Cheerleading01_AV_7680x3840_60fps_68s_25Mbps_ambiX1_24bit.mp4"},"Cheerleading01_AV_7680x3840_60fps_68s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"ConferenceCenter01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Conference01/Conference01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"Conference01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"ConferenceParticipant02: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Conference02/Conference02_AV_7680x3840_60fps_80s_25Mbps_ambiX1_24bit.mp4"},"Conference02_AV_7680x3840_60fps_80s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"ConferenceParticipant03: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Conference03/Conference03_AV_7680x3840_60fps_83s_25Mbps_ambiX1_24bit.mp4"},"Conference03_AV_7680x3840_60fps_83s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"ForestWalk01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/ForestWalk01/ForestWalk01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"ForestWalk01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"ForestWalk02: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/ForestWalk02/ForestWalk02_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"ForestWalk02_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"ForestWalk03: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/ForestWalk03/ForestWalk03_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"ForestWalk03_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"Lake01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Lake01/Lake01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"Lake01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"ParkFountains01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/ParkFountains01/ParkFountains01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"ParkFountains01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"River01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/River01/River01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"River01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"Skateboarding01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding01/Skateboarding01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"Skateboarding01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"Skateboarding03: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding03/Skateboarding03_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"Skateboarding03_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"Skateboarding04: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding04/Skateboarding04_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"Skateboarding04_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"Skateboarding05: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding05/Skateboarding05_AV_7680x3840_60fps_63s_25Mbps_ambiX1_24bit.mp4"},"Skateboarding05_AV_7680x3840_60fps_63s_25Mbps_ambiX1_24bit.mp4")),(0,i.kt)("li",null,"Train01: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Train01/Train01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"Train01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4")))))),(0,i.kt)("h2",{id:"scenespublication"},"Publication"),(0,i.kt)("p",null,"When using the QoEVAVE Scenes Database, please cite the following works. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Robotham, T., Singla, A., Rummukainen, O. S., Raake, A., Habets, E. A. P. Sept, 2022.\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Audiovisual Database with 360\xb0 Video and Higher-Order Ambisonics Audio for Perception, Cognition, Behavior, and QoE Evaluation Research")),". In Proc, 14th International Conference on Quality of Multimedia Experience (QoMEX). Lippstadt, Germany. DOI: ",(0,i.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/document/9900893"},"10.1109/QoMEX55416.2022.9900893"))),(0,i.kt)("p",null,"Open access versison available at ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2212.13442.pdf"},"arXiv:2212.13442v1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"@inproceedings{robotham2022,\ntitle = {Audiovisual Database with 360\xb0 Video and Higher-Order Ambisonics Audio for Perception, Cognition, Behavior, and QoE Evaluation Research},\nauthor = {Robotham, Thomas and Singla, Ashutosh and Rummukainen, Olli S. and Raake, Alexander and Habets, Emanu\xebl A. P.},\nyear = {2022},\nbooktitle = {14th International Conference on Quality of Multimedia Experience},\naddress={Lippstadt, Germany},\npages={1--6},\ndoi={10.1109/QoMEX55416.2022.9900893}\n}\n")))}m.isMDXComponent=!0}}]);