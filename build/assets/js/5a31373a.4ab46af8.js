"use strict";(self.webpackChunkjunhe_s_documents=self.webpackChunkjunhe_s_documents||[]).push([[8051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={slug:"Leetcode 2466",title:"Leetcode 2466",authors:["junhechen"],tags:["leetcode","dailychallenge","notes"]},l=void 0,i={permalink:"/blog/Leetcode 2466",editUrl:"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-05-12-Leet Code.md",source:"@site/blog/2023-05-12-Leet Code.md",title:"Leetcode 2466",description:"this question took me to realize, but read the instruction clearly this should be a easy problem.",date:"2023-05-12T00:00:00.000Z",formattedDate:"May 12, 2023",tags:[{label:"leetcode",permalink:"/blog/tags/leetcode"},{label:"dailychallenge",permalink:"/blog/tags/dailychallenge"},{label:"notes",permalink:"/blog/tags/notes"}],readingTime:.77,hasTruncateMarker:!1,authors:[{name:"Junhe Chen",title:"Software Developer",url:"https://bio.junhechen.com",imageURL:"https://bio.junhechen.com/assets/IMG_1960.jpg",key:"junhechen"}],frontMatter:{slug:"Leetcode 2466",title:"Leetcode 2466",authors:["junhechen"],tags:["leetcode","dailychallenge","notes"]},prevItem:{title:"Leetcode 1799",permalink:"/blog/Leetcode 1799"},nextItem:{title:"Leetcode 2140",permalink:"/blog/Leetcode 2140"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"this question took me to realize, but read the instruction clearly this should be a easy problem."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    Integer[] memo;\n    int MOD = 1_000_000_007;\n    public int countGoodStrings(int low, int high, int zero, int one) {\n        memo = new Integer[high + 1];\n        int res = 0;\n        for(int i = low; i <= high; i ++){\n            res += dp(i,zero,one);\n            res %= MOD;\n        }\n        return res;\n    }\n    private int dp(int l, int zero, int one){\n        // base case \n        if(l == 0) return 1; // we made to zero then we have 1 good string\n        if(l < zero && l < one) return 0; //this case we are not allowed to append \n        // solved case \n        if(memo[l] != null) return memo[l]; // we have done this before \n        // solving the problem \n        int appendZeros = dp(l - zero,zero,one);\n        int appendOnes = dp(l - one, zero, one);\n        return memo[l] = (appendOnes + appendZeros) % MOD;\n    }\n}\n")))}d.isMDXComponent=!0}}]);