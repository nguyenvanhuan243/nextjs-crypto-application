"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[571],{7485:function(t,e,i){i.d(e,{Fe:function(){return h}});var a=i(7437);i(2265);var r=i(1687);let s="#4fa94d",n={"aria-busy":!0,role:"progressbar"},o=(0,r.ZP).div`
  display: ${t=>t.$visible?"flex":"none"};
`,l=(0,r.F4)`
12.5% {
  stroke-dasharray: ${33.98873199462888}px, ${242.776657104492}px;
  stroke-dashoffset: -${26.70543228149412}px;
}
43.75% {
  stroke-dasharray: ${84.97182998657219}px, ${242.776657104492}px;
  stroke-dashoffset: -${84.97182998657219}px;
}
100% {
  stroke-dasharray: ${2.42776657104492}px, ${242.776657104492}px;
  stroke-dashoffset: -${240.34889053344708}px;
}
`;(0,r.ZP).path`
  stroke-dasharray: ${2.42776657104492}px, ${242.776657104492};
  stroke-dashoffset: 0;
  animation: ${l} ${1.6}s linear infinite;
`;let h=({wrapperStyle:t={},visible:e=!0,wrapperClass:i="",height:r=100,width:l=100,color:h=s,ariaLabel:d="line-wave-loading",firstLineColor:p,middleLineColor:c,lastLineColor:f})=>(0,a.jsx)(o,{style:t,$visible:e,className:i,"data-testid":"line-wave-wrapper","aria-label":d,...n,children:(0,a.jsxs)("svg",{version:"1.1",height:`${r}`,width:`${l}`,xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0",xmlSpace:"preserve","data-testid":"line-wave-svg",children:[(0,a.jsx)("rect",{x:"20",y:"50",width:"4",height:"10",fill:p||h,children:(0,a.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0",dur:"0.6s",repeatCount:"indefinite"})}),(0,a.jsx)("rect",{x:"30",y:"50",width:"4",height:"10",fill:c||h,children:(0,a.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.2s",dur:"0.6s",repeatCount:"indefinite"})}),(0,a.jsx)("rect",{x:"40",y:"50",width:"4",height:"10",fill:f||h,children:(0,a.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.4s",dur:"0.6s",repeatCount:"indefinite"})})]})}),d=(0,r.F4)`
to {
   transform: rotate(360deg);
 }
`;(0,r.ZP).svg`
  animation: ${d} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`,(0,r.ZP).polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;let p=(0,r.F4)`
to {
   stroke-dashoffset: 136;
 }
`;(0,r.ZP).polygon`
  stroke-dasharray: 17;
  animation: ${p} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,(0,r.ZP).svg`
  transform-origin: 50% 65%;
`}}]);