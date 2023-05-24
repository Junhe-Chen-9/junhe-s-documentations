"use strict";(self.webpackChunkjunhe_s_documents=self.webpackChunkjunhe_s_documents||[]).push([[1139],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),b=o,g=p["".concat(l,".").concat(b)]||p[b]||m[b]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},4894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={slug:"Leetcode 2542",title:"Leetcode 2542",authors:["junhechen"],tags:["leetcode","weeklychallenge","notes"]},i=void 0,s={permalink:"/blog/Leetcode 2542",editUrl:"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-05-23-Leet Code.md",source:"@site/blog/2023-05-23-Leet Code.md",title:"Leetcode 2542",description:"The apporach is simple, we want sum to be as big as possible, but more importantly our nums2(min) has to be bigger because it grows faster.",date:"2023-05-23T00:00:00.000Z",formattedDate:"May 23, 2023",tags:[{label:"leetcode",permalink:"/blog/tags/leetcode"},{label:"weeklychallenge",permalink:"/blog/tags/weeklychallenge"},{label:"notes",permalink:"/blog/tags/notes"}],readingTime:1.085,hasTruncateMarker:!1,authors:[{name:"Junhe Chen",title:"Software Developer",url:"https://bio.junhechen.com",imageURL:"https://bio.junhechen.com/assets/IMG_0001.jpeg",key:"junhechen"}],frontMatter:{slug:"Leetcode 2542",title:"Leetcode 2542",authors:["junhechen"],tags:["leetcode","weeklychallenge","notes"]},nextItem:{title:"Leetcode 703",permalink:"/blog/Leetcode 703"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The apporach is simple, we want sum to be as big as possible, but more importantly our nums2(min) has to be bigger because it grows faster. "),(0,o.kt)("p",null,"So we sort by nums2 at each index, we want to have our nums2 to be at max"),(0,o.kt)("p",null,"we add all k item into the priority queue, and once we got the score, we want to make sure our score is actually good, so we want to keep going on nums2, while we polls the smallest from the nums1 and keep update items."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public long maxScore(int[] nums1, int[] nums2, int k) {\n        // we want nums2 be as big as possible \n        int n = nums1.length;\n        int[][] pairs = new int[n][2];\n        for(int i = 0; i < n; i ++){\n            pairs[i] = new int[]{nums1[i],nums2[i]};\n        }\n        Arrays.sort(pairs,(a,b) -> b[1] - a[1]); // we want to sort the pair by biggest in nums2\n        PriorityQueue<Integer> pq = new PriorityQueue<>(k,(a,b) -> a - b);\n        \n        long topK = 0;\n        for(int i = 0; i < k; i ++){\n            topK += pairs[i][0];\n            pq.add(pairs[i][0]);\n        }\n        // score \n        long res = topK * pairs[k - 1][1];\n\n        // slide all possiblity\n        for(int i = k; i < n; i ++){\n            topK += pairs[i][0] - pq.poll();\n            pq.add(pairs[i][0]);\n\n            res = Math.max(res,topK * pairs[i][1]);\n        }\n        return res;\n    }\n}\n")))}m.isMDXComponent=!0}}]);