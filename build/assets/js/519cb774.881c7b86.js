"use strict";(self.webpackChunkjunhe_s_documents=self.webpackChunkjunhe_s_documents||[]).push([[890],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,h=p["".concat(i,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={slug:"Leetcode 1140",title:"Leetcode 1140",authors:["junhechen"],tags:["leetcode","weeklychallenge","notes"]},l=void 0,c={permalink:"/blog/Leetcode 1140",editUrl:"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-05-25-Leet Code.md",source:"@site/blog/2023-05-25-Leet Code.md",title:"Leetcode 1140",description:"",date:"2023-05-25T00:00:00.000Z",formattedDate:"May 25, 2023",tags:[{label:"leetcode",permalink:"/blog/tags/leetcode"},{label:"weeklychallenge",permalink:"/blog/tags/weeklychallenge"},{label:"notes",permalink:"/blog/tags/notes"}],readingTime:.55,hasTruncateMarker:!1,authors:[{name:"Junhe Chen",title:"Software Developer",url:"https://bio.junhechen.com",imageURL:"https://bio.junhechen.com/assets/IMG_0001.jpeg",key:"junhechen"}],frontMatter:{slug:"Leetcode 1140",title:"Leetcode 1140",authors:["junhechen"],tags:["leetcode","weeklychallenge","notes"]},nextItem:{title:"Leetcode 2542",permalink:"/blog/Leetcode 2542"}},i={authorsImageUrls:[void 0]},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    Integer[][][] memo;\n    public int stoneGameII(int[] piles) {\n        memo = new Integer[2][piles.length + 1][piles.length + 1];\n        return stoneGame(piles,0,1,0);\n    }\n    private int stoneGame(int[] piles, int curr, int M, int alex){\n        // base case \n        if(curr >= piles.length) return 0; // no more stone \n        if(memo[alex][curr][M] != null) return memo[alex][curr][M];\n        int res = alex == 1 ? 1000000 : -1;\n        int stones = 0;\n        for(int x = 1; x <= Math.min(2 * M, piles.length - curr); x ++){\n            stones += piles[curr + x - 1];\n            if(alex == 0){\n                res = Math.max(res,stones + stoneGame(piles,curr + x,Math.max(M,x),1));\n            }else{\n                res = Math.min(res,stoneGame(piles,curr + x, Math.max(M,x),0));\n            }\n        }\n        return memo[alex][curr][M] = res;\n    }\n}\n")))}m.isMDXComponent=!0}}]);