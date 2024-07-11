"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6080],{44035:(e,t,r)=>{r.d(t,{k:()=>d});var i=r(30758),n=r(97500),a=r.n(n),s=r(11207),l=r(40639),o=r(58653),c=r(86070);const d=(0,i.memo)((function(e){const{breakpoint:t,className:r,showSeparator:i,...n}=e;return(0,c.jsx)(s.v,{className:a()(r,o.A.entityRow,{[o.A.separator]:i}),hoverBackgroundColor:"backgroundTintedHighlight",activeBackgroundColor:"backgroundTintedBase",layout:t===l.e.SMALL?"regular":"wide",hoverAnimationDuration:"0ms",horizontalGap:t===l.e.SMALL?"12px":"16px",paddingBlockStart:"12px",paddingBlockEnd:"12px",...n})}))},15138:(e,t,r)=>{r.d(t,{X:()=>d});var i=r(58184),n=r(68360),a=r(52756),s=r(86116);const l="dK79XxAEu3SEKJ2jS_Qy",o="guiUbDD6Ga8Qpatq2jQ8";var c=r(86070);const d=({isExplicit:e,is19PlusOnly:t,isPaid:r,children:d})=>(0,c.jsxs)("div",{className:l,children:[e&&(0,c.jsx)(a.g,{}),r&&(0,c.jsx)(n.K,{}),t&&(0,c.jsx)(s.q,{size:16}),(0,c.jsx)(i.E,{variant:"bodySmall",className:o,children:d})]})},16830:(e,t,r)=>{r.d(t,{q:()=>a});var i=r(86346),n=r(86070);const a=e=>(0,n.jsx)(i.R,{size:"small",version:i.H.secondary,...e})},61357:(e,t,r)=>{r.d(t,{k:()=>l});var i=r(50187),n=r(41253),a=r(58653),s=r(86070);const l=({description:e,children:t})=>(0,s.jsxs)("div",{className:a.A.body,children:[e&&(0,s.jsx)(i.v,{lineClamp:2,as:"div",dir:"auto",children:(0,s.jsx)(n.q,{asTextContent:!0,html:e})}),t]})},99844:(e,t,r)=>{r.d(t,{F:()=>a});var i=r(58653),n=r(86070);const a=({actions:e,playButton:t})=>(0,n.jsxs)("div",{className:i.A.footer,children:[(0,n.jsx)("div",{className:i.A.actions,children:e}),t]})},88689:(e,t,r)=>{r.d(t,{e:()=>o});var i=r(40639),n=r(61350),a=r(18139),s=r(47080),l=r(86070);const o=({images:e,breakpoint:t,type:r,name:o})=>{const c=(0,s._)(),d=t===i.e.SMALL?a.Qe.SIZE_64:a.Qe.SIZE_112;return(0,l.jsx)(n.b,{fadeIn:!0,images:c(e,a.BZ[d]),shape:n.u.ROUNDED_CORNERS,size:d,iconSize:t===i.e.SMALL?"medium":"xlarge",type:r,title:o,loadingMode:"eager"})}},53775:(e,t,r)=>{r.d(t,{U:()=>a});var i=r(61735),n=r(86070);const a=({children:e})=>(0,n.jsx)(i.d,{lineClamp:2,as:"div",dir:"auto",children:e})},42094:(e,t,r)=>{r.d(t,{Z:()=>E});var i=r(30758),n=r(33165),a=r(27770),s=r(58184),l=r(95477),o=r(8539),c=r(63994);const d="hOOwEKqNuXrNvOCB1SgZ",u="csEdkIN9z2LjJIuZraqz";var A=r(86070);const E=({uri:e})=>{const[t,r]=(0,c.A)(e),E=(0,n.Zp)(),g=(0,i.useCallback)((()=>{r(!1),E("/",{replace:!0})}),[E,r]);return(0,A.jsxs)("div",{className:d,children:[(0,A.jsx)(a.b,{size:"xxlarge"}),(0,A.jsxs)("div",{className:u,children:[(0,A.jsx)(s.E,{as:"p",variant:"titleSmall",children:o.Ru.get("forbidden-page.title")}),(0,A.jsx)(s.E,{as:"p",variant:"bodySmall",children:o.Ru.get("forbidden-page.description")})]}),t&&(0,A.jsx)(l.$,{colorSet:"invertedLight",onClick:g,children:o.Ru.get("remove_from_your_library")})]})}},89159:(e,t,r)=>{r.d(t,{Hm:()=>s,gU:()=>l});var i=r(30758),n=r(86070);const a=(0,i.createContext)(null);function s({children:e,playlist:t,metadataOptions:r,contentsOptions:s}){return(0,n.jsx)(a.Provider,{value:(0,i.useMemo)((()=>({playlist:t,metadataOptions:r,contentsOptions:s})),[s,r,t]),children:e})}function l(){const e=(0,i.useContext)(a);if(null===e)throw new Error("Trying to use 'ListPlatformDataContext' without 'ListPlatformDataProvider'!");return e}},46349:(e,t,r)=>{r.d(t,{K_:()=>d,ll:()=>c});var i=r(30758),n=r(89159),a=r(37916),s=r(76875),l=r(86070);const o=(0,i.createContext)(null);function c({children:e}){const{playlist:t,contentsOptions:r}=(0,n.gU)(),c=(0,i.useContext)(s.w),d=(0,i.useCallback)((async(e,i)=>await c.getContents(t.metadata.uri,{...r,offset:e,limit:i})),[c,r,t.metadata.uri]),u=(0,a.E)({nrItems:t.contents.totalLength,fetch:d,limit:50,initialItems:t.contents.items});return(0,l.jsx)(o.Provider,{value:u,children:e})}function d(){const e=(0,i.useContext)(o);if(null===e)throw new Error("Trying to use 'ListPlatformItemsContext' without 'ListPlatformItemsProvider'!");return e}},39995:(e,t,r)=>{r.d(t,{Zr:()=>l,kW:()=>o});var i=r(30758),n=r(56168),a=r(86070);const s=(0,i.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a ListPlatformSortProvider")},sortState:null}),l=i.memo((function({uri:e,children:t}){return(0,a.jsx)(n.E,{uri:e,defaultState:null,sortContext:s,children:t})}));function o(){return(0,i.useContext)(s)}},37080:(e,t,r)=>{r.d(t,{W:()=>x});var i=r(30758),n=r(8539),a=r(42094),s=r(57528),l=r(35242),o=r(89159),c=r(46349),d=r(39995),u=r(17635),A=r(46600);var E=r(76875),g=r(6541),m=r(86070);const p=({children:e,uri:t})=>{const r=(0,i.useContext)(E.w).getCapabilities(),{filter:c}=(0,i.useContext)(l.g),{sortState:p}=(0,d.kW)(),{metadataOptions:x,contentsOptions:h}=((e,t)=>{const r=(0,u.NC)(A.G6N);return(0,i.useMemo)((()=>({metadataOptions:{decorateFormatListData:!0,withSync:!0,hydrateCollaboratorsWithMembers:r},contentsOptions:{offset:0,limit:25,filter:e,sort:t??void 0}})),[r,e,t])})(c,p),{data:C,isLoading:y,isError:D}=(0,g.W)(t,x,h);return!C||y?(0,m.jsx)(s.A,{hasError:D,errorMessage:n.Ru.get("error.not_found.title.playlist"),loadOffline:r.canModifyOffline}):C.metadata.permissions&&!C.metadata.permissions.canView?(0,m.jsx)(a.Z,{uri:t}):(0,m.jsx)(o.Hm,{playlist:C,metadataOptions:x,contentsOptions:h,children:e})},x=({children:e,uri:t})=>(0,m.jsx)(l.s,{uri:t,children:(0,m.jsx)(d.Zr,{uri:t,children:(0,m.jsx)(p,{uri:t,children:(0,m.jsx)(c.ll,{children:e})})})})},36883:(e,t,r)=>{r.d(t,{M:()=>c});var i=r(30278),n=r(30758);const a=[],s=(e,t)=>{const r=[];let i=e,n=t;for(;i>0;){const t=Math.ceil(i/n);r.push({first:e-i,nrItems:t}),i-=t,n--}return r};var l=r(86070);const o=e=>{const{itemsInNode:t,renderItem:r,renderPlaceholder:n,estimatedHeight:a,scrollNodeRef:c,nrRowsOverscan:d=10,nrInitialInView:u=0,firstIndex:A,heights:E,fanOut:g=2}=e,{ref:m,inView:p,entry:x}=(0,i.Wx)({root:c.current,rootMargin:d*a+"px 0px",initialInView:A<u}),h=`${A}-${t}`;E[h]??=a*t,x?.boundingClientRect?.height&&(E[h]=x.boundingClientRect.height);const C=E[h];return 0===t?null:p?1===t?(0,l.jsx)("div",{ref:m,role:"presentation",children:r(A,C)}):(0,l.jsx)("div",{ref:m,role:"presentation",children:s(t,g).map((({first:t,nrItems:r},i)=>(0,l.jsx)(o,{...e,itemsInNode:r,firstIndex:A+t},i)))}):(0,l.jsx)("div",{ref:m,role:"presentation",children:n(`${C}px`)})},c=e=>{const t=(e=>{const t=a.find((t=>t.key===e))?.heights||{},r=(0,n.useCallback)((t=>{if(!e)return;const r=a.findIndex((t=>t.key===e));-1===r?a.push({key:e,heights:t}):(a[r].heights=t,a.push(a.splice(r,1)[0])),a.length>10&&a.shift()}),[e]),i=(0,n.useRef)({...t});return(0,n.useEffect)((()=>()=>{r(i.current)}),[r]),i.current})(e.persistanceKey);return(0,l.jsx)(o,{...e,itemsInNode:e.totalCount,firstIndex:0,heights:t,nrInitialInView:e.nrInitialInView})}},40639:(e,t,r)=>{r.d(t,{$:()=>s,e:()=>a});var i=r(86001),n=r(17893);const a={SMALL:"small",LARGE:"large"},s=()=>(0,n.y)()===i.E.SMALL?"small":"large"},61532:(e,t,r)=>{r.d(t,{d:()=>m});var i=r(30758),n=r(67161),a=r(89457),s=r(8539),l=r(4414),o=r(39995),c=r(82117),d=r(76875),u=r(86070);const A=i.memo((function({sortOptions:e,defaultSortField:t,enableViewModeMenu:r}){const n=(0,i.useContext)(d.w),{canSort:a}=n.getCapabilities(),{sortState:A,setSortState:E}=(0,o.kW)(),g=(0,i.useCallback)((e=>{const t=c.nw[e];E((0,c.Wc)(t,A))}),[E,A]),m=e.map((e=>c.kA[e]));"custom-order"===t&&m.unshift({key:"custom-order",value:s.Ru.get("sort.custom-order")});const p=c.kA[A?.field??t];return a?(0,u.jsx)(l.g,{options:m,onSelect:g,selected:p,sortOrder:(0,c.Qi)(A?.order??null),heading:s.Ru.get("drop_down.sort_by"),enableViewModeMenu:r}):null}));var E=r(58400);const g="cRlDGz_DCN_UOCt4Khg1",m=i.memo((function({filterPlaceholder:e,sortOptions:t,defaultSortField:r,enableViewModeMenu:s=!1}){const l=(0,i.useContext)(d.w),{canSort:o,canFilter:c}=l.getCapabilities(),{spec:m,logger:p}=(0,E.r)(n.E,{}),x=(0,i.useCallback)((()=>{p.logInteraction(m.filterFieldFactory().keyStrokeFilter())}),[p,m]),h=(0,i.useCallback)((()=>{p.logInteraction(m.filterFieldFactory().hitClearFilter())}),[p,m]);return(0,u.jsxs)("div",{className:g,children:[c?(0,u.jsx)(i.Suspense,{fallback:null,children:(0,u.jsx)(a.S,{placeholder:e,onFilter:x,onClear:h})}):null,o?(0,u.jsx)(A,{sortOptions:t,defaultSortField:r,enableViewModeMenu:s}):null]})}))},48250:(e,t,r)=>{r.d(t,{g:()=>i.gU});var i=r(89159)},82117:(e,t,r)=>{r.d(t,{Ap:()=>p,Qi:()=>A,Wc:()=>c,g6:()=>m,hK:()=>x,kA:()=>d,nw:()=>u});var i=r(8539),n=r(94541),a=r(93292);const s=[a.nw.ADDED_AT,a.nw.PUBLISH_DATE],l=e=>s.includes(e)?a.xB.DESC:a.xB.ASC,o={[a.xB.ASC]:a.xB.DESC,[a.xB.DESC]:a.xB.ASC},c=(e,t)=>null===e?null:t?.field!==e?{field:e,order:l(e)}:{field:e,order:o[t.order]},d={[a.nw.TITLE]:{key:"title",get value(){return i.Ru.get("sort.title")}},[a.nw.ARTIST]:{key:"artist",get value(){return i.Ru.get("sort.artist")}},[a.nw.ALBUM]:{key:"album",get value(){return i.Ru.get("sort.album")}},[a.nw.ADDED_BY]:{key:"added-by",get value(){return i.Ru.get("sort.added-by")}},[a.nw.ADDED_AT]:{key:"added-at",get value(){return i.Ru.get("collection.sort.recently-added")}},[a.nw.DURATION]:{key:"duration",get value(){return i.Ru.get("sort.duration")}},[a.nw.SHOW_NAME]:{key:"show-name",get value(){return i.Ru.get("collection.sort.creator")}},[a.nw.PUBLISH_DATE]:{key:"publish-date",get value(){return i.Ru.get("tracklist.header.release-date")}},"custom-order":{key:"custom-order",get value(){return i.Ru.get("sort.custom-order")}}},u={title:a.nw.TITLE,artist:a.nw.ARTIST,album:a.nw.ALBUM,"added-by":a.nw.ADDED_BY,"added-at":a.nw.ADDED_AT,duration:a.nw.DURATION,"show-name":a.nw.SHOW_NAME,"publish-date":a.nw.PUBLISH_DATE,"custom-order":null};function A(e){return null===e?n.H.NONE:e===a.xB.ASC?n.H.ASC:n.H.DESC}const E={[n.$.TITLE_AND_ARTIST]:[a.nw.TITLE,a.nw.ARTIST],[n.$.TITLE]:[a.nw.TITLE],[n.$.ADDED_BY]:[a.nw.ADDED_BY],[n.$.ADDED_AT]:[a.nw.ADDED_AT],[n.$.DURATION]:[a.nw.DURATION],[n.$.ARTIST]:[a.nw.ARTIST],[n.$.ALBUM]:[a.nw.ALBUM],[n.$.ALBUM_OR_PODCAST]:[a.nw.ALBUM,a.nw.SHOW_NAME],[n.$.ALBUM_OR_SHOW]:[a.nw.ALBUM,a.nw.SHOW_NAME],[n.$.ACTIONS]:[],[n.$.RELEASE_DATE]:[a.nw.PUBLISH_DATE],[n.$.INDEX]:[],[n.$.PLAYS]:[],[n.$.ADD]:[],[n.$.EVENT_DATE]:[],[n.$.EVENT_INFO]:[],[n.$.CONCERT_DATE]:[],[n.$.CONCERT_VENUE]:[],[n.$.TITLE_AND_AUTHOR]:[a.nw.TITLE],[n.$.AUTHOR]:[]},g={[n.H.NONE]:null,[n.H.DESC]:a.xB.DESC,[n.H.ASC]:a.xB.ASC,[n.H.SECONDARY_DESC]:a.xB.DESC,[n.H.SECONDARY_ASC]:a.xB.ASC},m=e=>e.filter((e=>E[e].length>0)),p=(e,t)=>{const r=e.find((e=>t?.field&&E[e].includes(t.field)));if(!r||!t?.field)return{column:null,order:n.H.ASC};return E[r].indexOf(t.field)>0?{column:r,order:t.order===a.xB.ASC?n.H.SECONDARY_ASC:n.H.SECONDARY_DESC}:{column:r,order:t.order===a.xB.ASC?n.H.ASC:n.H.DESC}},x=(e,t,r)=>{const i=E[e].length>1?5:3;let a=null,s=null;if(e===t.column){let l=(t.order+1)%i;l!==n.H.NONE||r||(l+=1);const o=[n.H.SECONDARY_ASC,n.H.SECONDARY_DESC].includes(l)?1:0;a=E[e][o],s=g[l]}else a=E[e][0],s=g[n.H.ASC];return null===s?null:{field:a,order:s}}},65008:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Bt});var i=r(30758),n=r(94740),a=r(17635),s=r(8539),l=r(82342),o=r(24942),c=r(57528),d=r(43219),u=r(35242),A=r(56168),E=r(94541),g=r(77612),m=r(68966);let p=function(e){return e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER",e}({});const x={"show-alphabetical":p.SHOW_ALPHABETICAL,"book-alphabetical":p.BOOK_ALPHABETICAL,"episode-alphabetical":p.EPISODE_ALPHABETICAL,"playlist-alphabetical":p.PLAYLIST_ALPHABETICAL,"album-alphabetical":p.ALBUM_ALPHABETICAL,"recently-added":p.ADDED_AT,"creator-name":p.CREATOR_NAME,"creator-name-alphabetical":p.CREATOR_NAME_ALPHABETICAL,"album-creator-name":p.ALBUM_CREATOR_NAME,"recently-played":p.RECENTLY_PLAYED,"playlist-most-relevant":p.MOST_RELEVANT,"playlist-custom-order":p.CUSTOM_ORDER},h={[p.RECENTLY_PLAYED]:{key:"recently-played",get value(){return s.Ru.get("collection.sort.recently-played")}},[p.ADDED_AT]:{key:"recently-added",get value(){return s.Ru.get("collection.sort.recently-added")}},[p.SHOW_ALPHABETICAL]:{key:"show-alphabetical",get value(){return s.Ru.get("collection.sort.alphabetical")}},[p.BOOK_ALPHABETICAL]:{key:"book-alphabetical",get value(){return s.Ru.get("collection.sort.alphabetical")}},[p.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",get value(){return s.Ru.get("collection.sort.alphabetical")}},[p.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",get value(){return s.Ru.get("collection.sort.alphabetical")}},[p.ALBUM_CREATOR_NAME]:{key:"album-creator-name",get value(){return s.Ru.get("collection.sort.creator")}},[p.CREATOR_NAME]:{key:"creator-name",get value(){return s.Ru.get("collection.sort.creator")}},[p.CREATOR_NAME_ALPHABETICAL]:{key:"creator-name-alphabetical",get value(){return s.Ru.get("collection.sort.alphabetical")}},[p.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",get value(){return s.Ru.get("collection.sort.alphabetical")}},[p.MOST_RELEVANT]:{key:"playlist-most-relevant",get value(){return s.Ru.get("collection.sort.most-relevant")}},[p.CUSTOM_ORDER]:{key:"playlist-custom-order",get value(){return s.Ru.get("collection.sort.custom-order")}}};p.ADDED_AT,p.ALBUM_ALPHABETICAL,p.CREATOR_NAME,p.ADDED_AT,g.uY.ADDED_AT,g.xB.DESC,p.ALBUM_ALPHABETICAL,g.uY.NAME,g.xB.ASC,p.CREATOR_NAME,g.uY.ARTIST_NAME,g.xB.ASC;p.ADDED_AT,p.CREATOR_NAME_ALPHABETICAL,p.ADDED_AT,g.af.ADDED_AT,g.xB.DESC,p.CREATOR_NAME_ALPHABETICAL,g.af.NAME,g.xB.ASC;p.ADDED_AT,p.SHOW_ALPHABETICAL,p.ADDED_AT,g.WW.ADDED_AT,g.xB.DESC,p.SHOW_ALPHABETICAL,g.WW.NAME,g.xB.ASC;p.ADDED_AT,p.BOOK_ALPHABETICAL,p.ADDED_AT,g.Ev.ADDED_AT,p.BOOK_ALPHABETICAL,g.Ev.NAME;p.MOST_RELEVANT,p.RECENTLY_PLAYED,p.ADDED_AT,p.PLAYLIST_ALPHABETICAL,p.CUSTOM_ORDER,p.ADDED_AT,m.nw.ADDED_AT,m.xB.DESC,p.RECENTLY_PLAYED,m.nw.RECENTLY_PLAYED,m.xB.ASC,p.PLAYLIST_ALPHABETICAL,m.nw.NAME,m.xB.ASC,p.MOST_RELEVANT,m.nw.RELEVANCE,m.xB.DESC,p.CUSTOM_ORDER;p.ADDED_AT,p.ADDED_AT,p.ADDED_AT,p.MOST_RELEVANT,p.ADDED_AT;var C=r(86070);const y=e=>e===p.ADDED_AT?g.xB.DESC:g.xB.ASC,D={option:p.ADDED_AT,order:g.xB.DESC},S={[g.xB.ASC]:g.xB.DESC,[g.xB.DESC]:g.xB.ASC},T=(0,i.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:D}),_=i.memo((function({uri:e,children:t,defaultSortOption:r}){const i={option:r,order:y(r)};return(0,C.jsx)(A.E,{uri:e,defaultState:i,sortContext:T,children:t})}));var L=r(10139),f=r(93655),b=r(30023),P=r(83834),R=r(67161),I=r(89457),O=r(4414);const j=i.memo((function({sortOptions:e,onSort:t}){const{sortState:r,setSortState:n}=(0,i.useContext)(T),a=(0,i.useCallback)((e=>{const i=x[e];t?.(i),n(((e,t,r)=>t!==e?{option:e,order:y(e)}:{option:e,order:S[r]})(i,r.option,r.order))}),[t,n,r.option,r.order]),s=e.map((e=>h[e])),l=h[r.option];return(0,C.jsx)(O.g,{options:s,onSelect:a,selected:l,sortOrder:(o=r.order,o===g.xB.ASC?E.H.ASC:E.H.DESC)});var o}));var w=r(58400);const v="gWfUTJg52F5eTzM6M82w",N=i.memo((function({canSort:e,canFilter:t,filterPlaceholder:r,sortOptions:n}){const{spec:a,logger:s}=(0,w.r)(R.E,{}),l=(0,i.useCallback)((()=>{s.logInteraction(a.filterFieldFactory().keyStrokeFilter())}),[s,a]),o=(0,i.useCallback)((()=>{s.logInteraction(a.filterFieldFactory().hitClearFilter())}),[s,a]);return(0,C.jsxs)("div",{className:v,children:[t?(0,C.jsx)(i.Suspense,{fallback:null,children:(0,C.jsx)(I.S,{placeholder:r,onFilter:l,onClear:o})}):null,e?(0,C.jsx)(j,{sortOptions:n}):null]})}));var k=r(61532);const M={[g.ci.NAME]:d.lU.TITLE,[g.ci.SHOW_NAME]:d.lU.SHOW,[g.ci.ADDED_AT]:d.lU.ADDED_AT},B=[p.ADDED_AT,p.CREATOR_NAME,p.EPISODE_ALPHABETICAL],H={[p.ADDED_AT]:g.ci.ADDED_AT,[p.CREATOR_NAME]:g.ci.SHOW_NAME,[p.EPISODE_ALPHABETICAL]:g.ci.NAME};const U=(e,t)=>{if(function(e){return B.includes(e)}(e))return{field:H[e],order:t}},W=(e,t)=>{if(!B.includes(e))return;return(e=>{if(!e?.field)return;const t=M[e.field];if(!t)return;return d.SL[t].map((t=>e.order?`${t} ${e.order}`:t)).join(",")})(U(e,t))};var Y=r(44671),F=r(46600),$=r(55937),z=r(93292);const V="wmGcau34_eXQOX37kUTc",K="Yxy9nPtcdgz7zbBsWVKg",Q=({metadata:e,canSort:t,backgroundColor:r,isPlaying:i,isOnline:n,togglePlay:a})=>{const l=(0,$.t)(),{uri:o,name:c}=e,d=e.totalLength>0,u=(0,Y.j)();return(0,C.jsx)(L.E,{backgroundColor:r,children:(0,C.jsxs)(f.S,{children:[d&&(0,C.jsx)(P.D,{onClick:()=>a(),isPlaying:i,size:u,uri:o,disabled:!n,ariaPlayLabel:s.Ru.get("playlist.a11y.play",c),ariaPauseLabel:s.Ru.get("playlist.a11y.pause",c)}),t&&(0,C.jsx)("div",{className:K,children:(0,C.jsx)(b.u,{property:F.ucV,renderNewExperience:()=>(0,C.jsx)(k.d,{sortOptions:[z.nw.TITLE,z.nw.ADDED_AT,z.nw.PUBLISH_DATE,z.nw.SHOW_NAME],defaultSortField:z.nw.ADDED_AT,filterPlaceholder:s.Ru.get("playlist.search_in_playlist")}),renderOldExperience:()=>(0,C.jsx)(N,{canSort:l.getCapabilities().canSort,canFilter:l.getCapabilities().canFilter,filterPlaceholder:s.Ru.get("playlist.search_in_playlist"),sortOptions:B})})})]})})};var G=r(87349),Z=r(53485),q=r(51106),X=r(55897),J=r(62247),ee=r(72368),te=r(68360),re=r(37302),ie=r(68262),ne=r(59417),ae=r(90577),se=r(52756),le=r(86116),oe=r(93697),ce=r(17893),de=r(63994),ue=r(60093),Ae=r(22840),Ee=r(22058),ge=r(16216),me=r(54229);const pe="sxxBMk7G1OGo4uYIgPdQ",xe="wpP88qSwGpDQbc_ogyXW",he={small:64,standard:300,large:640,xlarge:1024},Ce=i.memo((function({index:e,contextUri:t,episode:r,onRemove:n,usePlayContextItem:s}){const l=(0,i.useRef)(r.duration.milliseconds-r.playedState.timeLeft.milliseconds),o=r.uri,[c,d]=(0,i.useState)(r.playedState.state===ge.M.Completed),{filter:A}=(0,i.useContext)(u.g),{draggable:E,onDragStart:g}=(0,re.P)(),m=(0,ce.y)(),p=(0,ie.W)(),[x]=(0,de.A)(o,!0),h=(0,ne.g)(r.uri,r.isPlayable),y=(0,ae.n)(),{isPlaying:D,isActive:S,togglePlay:T}=s({uri:o,index:e}),[_]=(0,Ae.S)(1e4,(e=>e?.item?.uri===o));(0,i.useEffect)((()=>{D&&(l.current=_)}),[D,_]);const{isPlaying:L,isActive:f,togglePlay:b}=(0,ue.P)({uri:o,pages:[{items:[{type:Ee.c.EPISODE,uri:o,uid:null,provider:null}]}]},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});(0,i.useEffect)((()=>{x||n()}),[x,n]),(0,i.useEffect)((()=>{D||r.duration.milliseconds<=l.current&&d(!0)}),[D,r.duration.milliseconds]);const P=(0,i.useCallback)((e=>{e||(l.current=0),d(e)}),[]),R=(0,i.useCallback)((e=>{if(e.target!==e.currentTarget)return;let i=`${r.name}`;r.show?.name&&(i+=` • ${r.show.name}`),g(e,{itemUris:[o],dragLabelText:i,contextUri:t})}),[t,r.name,r.show?.name,o,g]),I=(0,i.useCallback)((()=>{p({type:"click",targetUri:o,intent:"navigate"})}),[o,p]),O=(0,i.useCallback)((()=>{y?(p({type:"click",intent:D?"pause":"play"}),T()):(p({type:"click",intent:L?"pause":"play"}),b())}),[y,D,L,p,T,b]),j=(0,i.useCallback)((e=>(0,C.jsx)(ee.M,{searchWords:[A],textToHighlight:e})),[A]),w=r.podcastSubscription?.isPaywalled??!1,v=r.podcastSubscription?.isUserSubscribed??!1,{badges:N}=(0,me.b)({isExplicit:r.isExplicit,isMOGEFRestricted:r.is19PlusOnly,isPaywalled:w});let k=!1;(S||!y&&f)&&(k=!0);const M=(0,a.NC)(F.cKd,{loadingValue:!1});return x?(0,C.jsxs)(oe.pZ,{value:"row",index:e,children:[(0,C.jsx)("hr",{className:pe,"aria-hidden":!0}),(0,C.jsx)(G.h,{menu:(0,C.jsx)(Z.b,{uri:o,contextUri:t,showUri:r.show?.uri,isPlayed:c,onMarkAsPlayed:P}),children:M?(0,C.jsx)(X.k,{requestId:r.requestId,index:e,uri:o,uid:o,size:m,images:r.images.map((e=>({url:e.url,width:e.width||(e.label?he[e.label]:null),height:e.height||(e.label?he[e.label]:null)}))),isPaywalled:w,isUserSubscribed:v,name:r.name,highlightText:j,showName:r.show?.name,showUri:r.show?.uri,description:r.description,isPlayable:h,fullyPlayed:c,durationMs:r.duration.milliseconds,releaseDate:r.release.date||"",resumePositionMs:l.current,draggable:E,handleDragStart:R,handlePlaybackClick:O,handleClick:I,isCurrentlyPlaying:k,isPlaying:y?D:L,position:k?_:void 0,episodeSharingInfo:null,onMarkAsPlayed:P,badges:(0,C.jsxs)(C.Fragment,{children:[N.explicit&&(0,C.jsx)(se.g,{}),N.paid&&(0,C.jsx)(te.K,{}),N.nineteen&&(0,C.jsx)(le.q,{size:16})]}),playButtonWrapper:e=>(0,C.jsx)(J.f,{enabled:w&&!v,showUri:r.show?.uri||void 0,children:e})}):(0,C.jsx)(q.R,{requestId:r.requestId,index:e,uri:o,uid:o,size:m,images:r.images.map((e=>({url:e.url,width:e.width||(e.label?he[e.label]:null),height:e.height||(e.label?he[e.label]:null)}))),isPaywalled:w,isUserSubscribed:v,name:r.name,highlightText:j,showName:r.show?.name,showUri:r.show?.uri,description:r.description,isPlayable:h,fullyPlayed:c,durationMs:r.duration.milliseconds,releaseDate:r.release.date||"",resumePositionMs:l.current,handleDragStart:R,handlePlaybackClick:O,handleClick:I,isCurrentlyPlaying:k,isPlaying:y?D:L,position:k?_:void 0,episodeSharingInfo:null,onMarkAsPlayed:P,badges:(0,C.jsxs)(C.Fragment,{children:[N.explicit&&(0,C.jsx)(se.g,{}),N.paid&&(0,C.jsx)(te.K,{}),N.nineteen&&(0,C.jsx)(le.q,{size:16})]}),playButtonWrapper:e=>(0,C.jsx)(J.f,{enabled:w&&!v,showUri:r.show?.uri||void 0,children:e})})})]}):null}));var ye=r(3356),De=r(86001),Se=r(32028),Te=r(28781);const _e=i.memo((function({contextUri:e,usePlayContextItem:t}){const r=(0,i.useContext)(Te.Z),{sortState:n}=(0,i.useContext)(T),[a,s]=(0,i.useState)({totalLength:0,unfilteredTotalLength:0,offset:0,items:[],limit:50}),l=(0,i.useRef)(!1),o=(0,i.useRef)(0),c=(0,i.useRef)(0),{filter:d}=(0,i.useContext)(u.g),A=(0,i.useCallback)((()=>{c.current++}),[]),{ref:E,breakpoint:g}=(0,Se.x)({[De.E.MEDIUM]:0,[De.E.LARGE]:600}),m=(0,i.useCallback)(((e=!1)=>{const t=o.current;null!==t&&(l.current||(l.current=!0,(async e=>{const t=await r.getEpisodes({offset:e-c.current,limit:50,sort:U(n.option,n.order),filter:d});return c.current=0,t})(Number(t)).then((r=>{s((i=>{const n=Number(r.offset)+r.items.length,a=e?[]:[...i.items];return a.splice(Number(t),r.items.length,...r.items),o.current=n<r.totalLength?n:null,{...r,items:a}})),l.current=!1}))))}),[d,r,n]);return(0,i.useEffect)((()=>{o.current=0,m(!0)}),[m]),(0,C.jsx)(ce.o.Provider,{value:g,children:(0,C.jsx)(oe.pZ,{value:"track-list",children:(0,C.jsx)("div",{ref:E,children:(0,C.jsx)(ye._,{onReachBottom:m,triggerOnInitialLoad:!0,children:a.items.map(((r,i)=>(0,C.jsx)("div",{className:xe,children:(0,C.jsx)(Ce,{index:i,episode:r,contextUri:e,onRemove:A,usePlayContextItem:t},`${r.uri}/${i}`)},`${i}${r.uri}`)))})})})})}));var Le=r(58184),fe=r(18520),be=r(51414),Pe=r(66932),Re=r(64741),Ie=r(79851),Oe=r(7138),je=r(74460),we=r(88352),ve=r(61350);const Ne=({metadata:e,backgroundColor:t,isPlaying:r,isOnline:n,togglePlay:a})=>{const{uri:l,name:o,images:c,totalLength:d,owner:u}=e,A=(0,i.useMemo)((()=>({id:u.username,uri:u.uri,name:u.username,displayName:u.displayName||void 0,images:u.images||[]})),[u]);return(0,C.jsxs)(fe.z,{backgroundColor:t,children:[(0,C.jsxs)(Re.h,{children:[(0,C.jsx)(P.D,{size:"medium",onClick:()=>a(),isPlaying:r,uri:l,disabled:!n,ariaPlayLabel:s.Ru.get("playlist.a11y.play",o),ariaPauseLabel:s.Ru.get("playlist.a11y.pause",o)}),(0,C.jsx)(Ie.X,{text:o})]}),(0,C.jsx)(be.K,{images:c,name:o,shape:ve.u.ROUNDED_CORNERS,renderImage:()=>(0,C.jsx)(we.b,{})}),(0,C.jsxs)(Pe.Y,{children:[(0,C.jsx)(Le.E,{variant:"bodySmallBold",children:s.Ru.get("playlist")}),(0,C.jsx)(je.mm,{canEdit:!1,onClick:()=>{},children:o}),(0,C.jsx)(Oe.t,{creators:[A],totalItems:d,hasEpisodes:!0})]})]})};var ke=r(41978),Me=r(96839),Be=r(48250),He=r(37080),Ue=r(97500),We=r.n(Ue),Ye=r(33165),Fe=r(35833),$e=r(42551),ze=r(93477),Ve=r(45782),Ke=r(32282),Qe=r(93239),Ge=r(90751),Ze=r(15138),qe=r(16830),Xe=r(44035);var Je=r(61357),et=r(99844),tt=r(88689),rt=r(53775),it=r(40639),nt=r(36041),at=r(94056),st=r(36533),lt=r(80287),ot=r(95771),ct=r(22443),dt=r(47162),ut=r(58653);const At=(0,i.memo)((function({episode:e,contextUri:t,usePlayContextItem:r,index:n,sharingInfo:a,uid:l,showSeparator:o=!1,...c}){const{name:d,description:u,isExplicit:A,show:E,type:g,uri:m,duration:p,is19PlusOnly:x,mediaType:h,release:y,images:D}=e,S=E?.name,T=E?.uri,_=(0,Me.o_)(T)?.toURLPath(!0),L=e.podcastSubscription?.isPaywalled??!1,f=e.podcastSubscription?.isUserSubscribed??!1,b=L&&!f,P=h?.includes(ge.C.Video)??!1,R=(0,Ye.Zp)(),I=(0,Me.o_)(m).toURLPath(!0),O=(0,it.$)(),[j,w]=(0,de.A)(m),v=(0,ct.T)(m),{isPlaying:N,togglePlay:k}=r({uri:m,index:n}),M=O===it.e.SMALL?"small":"medium",{resumePositionMs:B,onToggleMarkAsPlayed:H,isFullyPlayed:U}=((e,t)=>{const{uri:r,duration:n,playedState:a}=e,s=(0,i.useRef)(n.milliseconds-a.timeLeft.milliseconds),[l,o]=(0,i.useState)(a.state===ge.M.Completed),[c]=(0,Ae.S)(1e4,(e=>e?.item?.uri===r)),d=(0,i.useCallback)((e=>{e||(s.current=0),o(e)}),[]);return(0,i.useEffect)((()=>{t&&(s.current=c)}),[t,c]),{resumePositionMs:s.current,isFullyPlayed:l,onToggleMarkAsPlayed:d}})(e,N),W=[d,...S?[S]:[]].join(" • "),{draggable:Y,onDragStart:F}=(0,re.P)({itemUris:[m],dragLabelText:W}),$=(0,lt.v)(m),z=(0,i.useCallback)((e=>{e.stopPropagation(),b||k()}),[k,b]),V=(0,C.jsx)(rt.U,{children:d}),K=(0,C.jsx)(Je.k,{description:u,children:(0,C.jsx)(Ze.X,{isExplicit:!!A,is19PlusOnly:x,isPaid:L,children:p.milliseconds&&(0,C.jsx)(dt.j,{isPlaying:!1,fullyPlayed:U,durationMs:p.milliseconds,position:B,releaseDate:y.date})})}),Q=(0,C.jsx)(Z.b,{uri:m,uid:l,contextUri:t,showUri:T,isPlayed:U,onMarkAsPlayed:H}),q=(0,C.jsx)($e.M,{className:We()({[ut.A.visibleAction]:j}),isAdded:j,onClick:()=>{w(!j)},size:M,isEpisode:!0,condensedAll:!0}),X=(0,C.jsx)(st.g,{size:M,uri:m}),ee=(0,C.jsxs)(C.Fragment,{children:[$?X:q,(0,C.jsx)(ze.I,{className:We()({[ut.A.visibleAction]:(0,ot.X)(v)}),uri:m,size:M,canDownload:!L||L&&f,condensedAll:!0}),(0,C.jsx)(Ke.w,{uri:m,sharingInfo:a??null,interactionData:{intent:"share",type:"click"},size:M,condensedAll:!0}),(0,C.jsx)(Qe.b,{menu:Q,children:(0,C.jsx)(Ve.e,{label:s.Ru.get("more.label.context",d),size:M,condensedAll:!0})})]}),te=(0,C.jsx)(et.F,{actions:ee,playButton:(0,C.jsx)(J.f,{enabled:L&&!f,showUri:T||void 0,children:(0,C.jsx)(qe.q,{onClick:z,isPlaying:N,ariaPlayLabel:s.Ru.get("tracklist.a11y.play",d,S),ariaPauseLabel:s.Ru.get("tracklist.a11y.pause",d,S),locked:b})})}),ie=(0,C.jsx)(tt.e,{images:D,name:d,type:g,breakpoint:O}),ne=(0,C.jsxs)(Fe.j,{lineClamp:2,children:[P&&(0,C.jsx)(at.T,{}),S&&_&&(0,C.jsx)(G.h,{menu:(0,C.jsx)(Ge.H,{uri:T??""}),children:(0,C.jsx)(nt.N,{to:_,children:(0,C.jsx)(Le.E,{variant:"bodySmall",semanticColor:"textSubdued",children:S})})})]});return(0,C.jsx)(G.h,{menu:Q,children:(0,C.jsx)(Xe.k,{draggable:Y,onDragStart:F,breakpoint:O,id:`book-${m}`,media:ie,title:V,body:K,subtitle:ne,footer:te,onClick:()=>{R(I)},showSeparator:o,...c})})}));var Et=r(94411),gt=r(89159),mt=r(46349),pt=r(36883),xt=r(85670),ht=r(67208);const Ct=({renderItem:e})=>{const t=(0,xt.v7)(),{getItem:r,nrValidItems:n,invalidateCache:a}=(0,mt.K_)(),{playlist:{metadata:s}}=(0,gt.gU)();(0,ht.H)(s.uri,a);const l=(0,i.useCallback)((e=>(0,C.jsx)("div",{style:{height:e}})),[]),o=(0,i.useCallback)(((t,i)=>{const n=r(t);return n?e(n,t):l(`${i}px`)}),[r,e,l]),c="POP"===(0,Ye.wQ)()?0:10;return(0,C.jsx)(Et.R,{firstInteractiveIsWrapper:!0,"aria-rowcount":n,"aria-colcount":6,children:(0,C.jsx)(pt.M,{totalCount:n,estimatedHeight:200,renderItem:o,renderPlaceholder:l,scrollNodeRef:t,nrRowsOverscan:10,persistanceKey:s.uri,nrInitialInView:c})})};var yt=r(91239);const Dt=({children:e,index:t})=>(0,C.jsx)(yt.W,{"aria-posinset":t,children:e});var St=r(8612);const Tt=(0,i.memo)((function({usePlayContextItem:e,contextUri:t}){const r=(0,i.useCallback)(((r,i)=>(0,St.xp)(r)?(0,C.jsx)(Dt,{index:i,children:(0,C.jsx)(At,{index:i,episode:r,contextUri:t,usePlayContextItem:e,showSeparator:0!==i})},`${r.uri}/${i}`):null),[t,e]);return(0,C.jsx)(Ct,{renderItem:r})}));function _t(e){return{url:e.url,width:e.width,height:e.height}}var Lt=r(24296),ft=r(96331),bt=r(68688),Pt=r(54118),Rt=r(15569),It=r(76875);const Ot="zX8QX7OLPnU9eLrJV3Cd",jt=()=>{const e=(0,ft.z)("#006450"),t=(0,ae.n)(),{user:r}=(0,ke.d4)(bt.Ht),a=(0,i.useContext)(It.w),{canSort:c,canFilter:d}=a.getCapabilities(),{playlist:{metadata:u},contentsOptions:A}=(0,Be.g)(),E=(0,i.useMemo)((()=>{const e=(e=>({type:Ee.c.USER,uri:e?.uri??"",username:e?.id??"",displayName:e?.display_name??null,images:e?.images?.map(_t)??[]}))(r);return{...u,owner:e,name:s.Ru.get("sidebar.your_episodes")}}),[u,r]),{isPlaying:g,togglePlay:m,usePlayContextItem:p}=(0,ue.P)((0,Rt.A)(E.uri,A),{featureIdentifier:"your_library",referrerIdentifier:"your_library"},{shuffle:!1,repeat:Pt.p.REPEAT_NONE}),x=r?(0,Me.fH)(r.id,"your-episodes").toURI():"";return(0,C.jsxs)("section",{className:Ot,"data-testid":"your-episodes-page",children:[(0,C.jsx)(l.Q,{children:s.Ru.get("sidebar.your_episodes")}),(0,C.jsx)(Ne,{metadata:E,backgroundColor:e,isPlaying:g,isOnline:t,togglePlay:m}),(0,C.jsxs)("div",{children:[(0,C.jsx)(Q,{metadata:E,backgroundColor:e,isPlaying:g,isOnline:t,togglePlay:m,canSort:c||d}),(0,C.jsx)("div",{className:"contentSpacing",children:E.totalLength>0?(0,C.jsx)(Tt,{usePlayContextItem:p,contextUri:x}):(0,C.jsx)(o.p,{message:s.Ru.get("collection.empty-page.episodes-subtitle"),title:s.Ru.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:s.Ru.get("collection.empty-page.shows-cta"),renderInline:!0,children:(0,C.jsx)(n.P,{"aria-hidden":"true"})})})]})]})},wt=(0,i.memo)((function(){return(0,C.jsx)(He.W,{uri:Lt.H,children:(0,C.jsx)(jt,{})})}));var vt=r(70678),Nt=r(46492);const kt=({metadata:e,canSort:t})=>{const r=(0,ft.z)("#006450"),a=(0,ae.n)(),{sortState:c}=(0,i.useContext)(T),{filter:A}=(0,i.useContext)(u.g),{isPlaying:E,togglePlay:g,usePlayContextItem:m}=(0,ue.P)({uri:e.uri,metadata:{[Nt.W.SORTING_CRITERIA]:W(c.option,c.order),[Nt.W.FILTERING_PREDICATE]:(0,d.ly)(A)}},{featureIdentifier:"your_library",referrerIdentifier:"your_library"},{shuffle:!1,repeat:Pt.p.REPEAT_NONE});return(0,C.jsxs)("section",{className:V,"data-testid":"your-episodes-page",children:[(0,C.jsx)(l.Q,{children:s.Ru.get("sidebar.your_episodes")}),(0,C.jsx)(Ne,{metadata:e,backgroundColor:r,isPlaying:E,isOnline:a,togglePlay:g}),(0,C.jsxs)("div",{children:[(0,C.jsx)(Q,{metadata:e,backgroundColor:r,isPlaying:E,isOnline:a,togglePlay:g,canSort:t}),(0,C.jsx)("div",{className:"contentSpacing",children:e.totalLength>0?(0,C.jsx)(_e,{contextUri:e.uri,usePlayContextItem:m}):(0,C.jsx)(o.p,{message:s.Ru.get("collection.empty-page.episodes-subtitle"),title:s.Ru.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:s.Ru.get("collection.empty-page.shows-cta"),renderInline:!0,children:(0,C.jsx)(n.P,{"aria-hidden":"true"})})})]})]})},Mt=(0,i.memo)((function(){const e=(0,i.useContext)(Te.Z).getCapabilities(),t=(0,vt.u)();return t?(0,C.jsx)(_,{uri:t.uri,defaultSortOption:p.ADDED_AT,children:(0,C.jsx)(u.s,{uri:t.uri,children:(0,C.jsx)(kt,{metadata:t,canSort:e.canSortTracksAndEpisodes&&t.totalLength>0})})}):(0,C.jsx)(c.A,{hasError:!1,errorMessage:s.Ru.get("error.not_found.title.page"),loadOffline:e.canModifyOffline})})),Bt=(0,i.memo)((function(){return(0,a.NC)(F.ucV)?(0,C.jsx)(wt,{}):(0,C.jsx)(Mt,{})}))},15569:(e,t,r)=>{function i(e,t){return{uri:e,playlistQueryOptions:t}}r.d(t,{A:()=>i})},58653:(e,t,r)=>{r.d(t,{A:()=>i});const i={entityRow:"ci11tAmTK1LnxThQkXPy",actions:"_2sJPwAAp1wY1Ftke6iFe",visibleAction:"yuNzasMLs7hvemHI4d8Q",body:"abYR6tZoE7BdzThmWTb0",footer:"GOcKQxqNMhGzbGiAXBig",separator:"yFQjuDAhri_egM1pwn70"}}}]);
//# sourceMappingURL=xpui-routes-collection-episodes.js.map