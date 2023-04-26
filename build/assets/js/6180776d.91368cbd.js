"use strict";(self.webpackChunkjunhe_s_documents=self.webpackChunkjunhe_s_documents||[]).push([[7311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={slug:"Leetcode 2336",title:"Leetcode 2336",authors:["junhechen"],tags:["leetcode","dailychallenge","notes"]},l=void 0,i={permalink:"/blog/Leetcode 2336",editUrl:"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-04-24-Leet Code.md",source:"@site/blog/2023-04-24-Leet Code.md",title:"Leetcode 2336",description:"Consider we have a full infinite set at first",date:"2023-04-24T00:00:00.000Z",formattedDate:"April 24, 2023",tags:[{label:"leetcode",permalink:"/blog/tags/leetcode"},{label:"dailychallenge",permalink:"/blog/tags/dailychallenge"},{label:"notes",permalink:"/blog/tags/notes"}],readingTime:.745,hasTruncateMarker:!1,authors:[{name:"Junhe Chen",title:"Software Developer",url:"https://bio.junhechen.com",imageURL:"https://bio.junhechen.com/assets/IMG_0001.jpeg",key:"junhechen"}],frontMatter:{slug:"Leetcode 2336",title:"Leetcode 2336",authors:["junhechen"],tags:["leetcode","dailychallenge","notes"]},nextItem:{title:"Leetcode 1046",permalink:"/blog/Leetcode 1046"}},c={authorsImageUrls:[void 0]},u=[],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Consider we have a full infinite set at first\nUse a running curr to keep track of smallest number and priority queue to keep track if we have scarlet numbers before running smallest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class SmallestInfiniteSet {\n    PriorityQueue<Integer> pq = new PriorityQueue<>();\n    int curr;\n    public SmallestInfiniteSet() {\n        // set curr smallest to 1\n        curr = 1;\n    }\n    \n    public int popSmallest() {\n        if(!pq.isEmpty())return pq.poll();\n        // if we have nothing in pq, curr smallest is what we poll out, and sus next number would be curr + 1\n        curr ++;\n        return curr - 1;\n    }\n    \n    public void addBack(int num) {\n        if(num < curr & !pq.contains(num)){\n            // number is small and we dont have it in our pq \n            // add back\n            pq.add(num);\n        }\n    }\n}\n\n/**\n * Your SmallestInfiniteSet object will be instantiated and called as such:\n * SmallestInfiniteSet obj = new SmallestInfiniteSet();\n * int param_1 = obj.popSmallest();\n * obj.addBack(num);\n */\n")))}m.isMDXComponent=!0}}]);