"use strict";(self.webpackChunkjunhe_s_documents=self.webpackChunkjunhe_s_documents||[]).push([[2833],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=i,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9102:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={slug:"Leetcode 839",title:"Leetcode 839",authors:["junhechen"],tags:["leetcode","dailychallenge","notes"]},o=void 0,l={permalink:"/blog/Leetcode 839",editUrl:"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-04-27-Leet Code.md",source:"@site/blog/2023-04-27-Leet Code.md",title:"Leetcode 839",description:"This question is marked hard, but in realality this is not a difficult question. Simple union find problem, you find all the samilar strs and union them , starts with n groups after union all possible strs, what you have left is group standing.",date:"2023-04-27T00:00:00.000Z",formattedDate:"April 27, 2023",tags:[{label:"leetcode",permalink:"/blog/tags/leetcode"},{label:"dailychallenge",permalink:"/blog/tags/dailychallenge"},{label:"notes",permalink:"/blog/tags/notes"}],readingTime:1.125,hasTruncateMarker:!1,authors:[{name:"Junhe Chen",title:"Software Developer",url:"https://bio.junhechen.com",imageURL:"https://bio.junhechen.com/assets/IMG_0001.jpeg",key:"junhechen"}],frontMatter:{slug:"Leetcode 839",title:"Leetcode 839",authors:["junhechen"],tags:["leetcode","dailychallenge","notes"]},nextItem:{title:"Leetcode 319",permalink:"/blog/Leetcode 319"}},s={authorsImageUrls:[void 0]},u=[],c={toc:u},p="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This question is marked hard, but in realality this is not a difficult question. Simple union find problem, you find all the samilar strs and union them , starts with n groups after union all possible strs, what you have left is group standing. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    // union find \n    int[] parent;\n    int[] size;\n    public int numSimilarGroups(String[] strs) {\n        int n = strs.length;\n        parent = new int[n];\n        size = new int[n];\n        for(int i = 0; i < n; i ++){\n            parent[i] = i;\n            size[i] = 1;\n        }\n        int count = n;\n        for(int i = 0; i < n; i ++){\n            for(int j = i + 1; j < n; j ++){\n                String a = strs[i];\n                String b = strs[j];\n                if(similar(a,b)){\n                    count -= union(i,j);\n                }\n            }\n        }\n        return count;\n    }\n    private int find(int a){\n        if(parent[a] == a) return a;\n        return parent[a] = find(parent[a]);\n    }\n    private int union(int a, int b){\n        int pa = find(a);\n        int pb = find(b);\n        if(pa == pb) return 0;\n        if(size[pa] > size[pb]){\n            // join b to a \n            parent[pb] = a;\n            size[pa] += size[pb];\n        }else{\n            parent[pa] = b;\n            size[pb] += size[pa];\n        }\n        return 1;\n    }\n    private boolean similar(String a, String b){\n        int diff = 0;\n        for(int i = 0; i < a.length(); i ++){\n            if(a.charAt(i) != b.charAt(i)){\n                diff ++;\n            }\n        }\n        return diff == 2 || diff == 0;\n    }\n}\n")))}f.isMDXComponent=!0}}]);