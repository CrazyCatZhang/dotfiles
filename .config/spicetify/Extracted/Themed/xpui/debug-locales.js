"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3522],{35730:(e,t,l)=>{l.r(t),l.d(t,{default:()=>w});var i=l(30758),s=l(57603),a=l(8539),n=l(2477),o=l(58184),r=l(71668);const c="SsxBZ9Nwxg30ZcXUcUcJ",d="HVN1FVVriodEnWgn1GZ4",h="legiK6gOuEtSJvxYKoXc",u="N6dpLHX_oZBYC1FQy8SA",p="krXyPxbq59r39DlZdHzv",x="_o0S4kMO8jLyHmiTwjxg",m="yuK7YlDkSnTHzZph5sQq";var j=l(86070);function y(){const[e,t]=(0,i.useState)(n.Ay.isEnabled());return(0,j.jsxs)("div",{children:[" ",(0,j.jsx)(o.E,{as:"h4",variant:"titleSmall",semanticColor:"textBase",children:"Pseudo localization"}),(0,j.jsxs)("div",{children:[(0,j.jsxs)(o.E,{variant:"bodyMedium",children:["Perform"," ",(0,j.jsx)("a",{href:"https://en.wikipedia.org/wiki/Pseudolocalization",children:"pseudolocalization"})," ","against the DOM.",(0,j.jsx)("br",{})]}),(0,j.jsx)(o.E,{variant:"bodySmall",children:"In Accented English all Latin letters are replaced by accented Unicode counterparts which don't impair the readability of the content. This allows developers to quickly test if any given string is being correctly displayed in its 'translated' form. Additionally, simple heuristics are used to make certain words longer to better simulate the experience of international users."})]}),(0,j.jsx)("br",{}),(0,j.jsxs)("div",{className:m,children:[(0,j.jsx)(o.E,{as:"label",htmlFor:"pseudo-localization",variant:"bodyMedium",children:"Toggle pseudo-localization"}),(0,j.jsx)(r.l,{id:"pseudo-localization",value:e,onSelected:e=>{e?(t(!0),n.Ay.start()):(t(!1),n.Ay.stop(),window.location.reload())}})]})]})}var g=l(82851),b=l(35716),f=l(38870),v=l(65568);const w=()=>{const{settings:e}=(0,b.t0)(),t=(0,g.Q)(e.values),l=(0,i.useMemo)((()=>({localeForTranslation:a.Ru.getLocaleForTranslation(),localeForFormatting:a.Ru.getLocaleForTranslation(),translations:a.Ru.getTranslations()})),[]),[n,o]=(0,i.useState)(null);(0,i.useEffect)((()=>{const e={};return Promise.all(Object.keys(v.IB).map((async t=>{e[t]=await(0,f.N)(t)}))).then((()=>{o(e)})),()=>{a.Ru.initialize(l)}}),[l]);const[r,m]=(0,i.useState)(null),w=a.Ru.get.bind(a.Ru);return t?(0,j.jsxs)("div",{className:c,children:[(0,j.jsx)("h1",{className:d,children:"Locales"}),(0,j.jsx)("h3",{children:"You can use this tool to test if the Desktop client is able to properly render every locale with correct font-family within Desktop UI."}),(0,j.jsx)(y,{}),n?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:x,children:[(0,j.jsx)("p",{children:"Choose a string key from the dropdown to test it"}),(0,j.jsxs)("select",{onChange:e=>{m(e.target.value)},children:[(0,j.jsx)("option",{selected:null===r,children:"Select a key"}),Object.keys(n[s.h.en]||{}).map((e=>(0,j.jsx)("option",{selected:r===e,children:e},e)))]})]}),(0,j.jsx)("div",{className:h,children:Object.entries(v.IB).map((([e,{displayName:t,displayNameEn:l}])=>(e in n&&a.Ru.initialize({localeForTranslation:e,localeForFormatting:e,translations:n[e]}),(0,j.jsxs)("div",{className:u,children:[(0,j.jsxs)("h3",{children:[l," (",e,") (",t,")"]}),r?(0,j.jsx)("p",{className:p,children:e in n?w(r):"💥 Can't load dictionary 💥 "}):null]},e))))})]}):(0,j.jsx)("p",{children:"Please wait until we fetch all dictionaries"})]}):null}}}]);
//# sourceMappingURL=debug-locales.js.map