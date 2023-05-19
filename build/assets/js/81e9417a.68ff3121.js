"use strict";(self.webpackChunkjunhe_s_documents=self.webpackChunkjunhe_s_documents||[]).push([[3334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),g=o,m=s["".concat(i,".").concat(g)]||s[g]||f[g]||l;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const l={slug:"Leetcode 785",title:"Leetcode 785",authors:["junhechen"],tags:["leetcode","weeklychallenge","notes"]},a=void 0,c={permalink:"/blog/Leetcode 785",editUrl:"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-05-18-Leet Code.md",source:"@site/blog/2023-05-18-Leet Code.md",title:"Leetcode 785",description:"Simple graph coloring question.",date:"2023-05-18T00:00:00.000Z",formattedDate:"May 18, 2023",tags:[{label:"leetcode",permalink:"/blog/tags/leetcode"},{label:"weeklychallenge",permalink:"/blog/tags/weeklychallenge"},{label:"notes",permalink:"/blog/tags/notes"}],readingTime:.54,hasTruncateMarker:!1,authors:[{name:"Junhe Chen",title:"Software Developer",url:"https://bio.junhechen.com",imageURL:"https://bio.junhechen.com/assets/IMG_0001.jpeg",key:"junhechen"}],frontMatter:{slug:"Leetcode 785",title:"Leetcode 785",authors:["junhechen"],tags:["leetcode","weeklychallenge","notes"]},nextItem:{title:"Leetcode 1557",permalink:"/blog/Leetcode 1557"}},i={authorsImageUrls:[void 0]},u=[],p={toc:u},s="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Simple graph coloring question."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public boolean isBipartite(int[][] graph) {\n        // graph color\n        int n = graph.length;\n        int[] color = new int[n];\n        Arrays.fill(color, -1);\n\n        for(int i = 0; i < n; i ++){\n            if(color[i] == -1){\n                if(!isBipartite(graph,i,color)){\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n    private boolean isBipartite(int[][] graph, int curr, int[] color){\n        Queue<Integer> q = new LinkedList<>();\n        color[curr] = 1; // color curr node to 1 \n        q.add(curr);\n        while(!q.isEmpty()){\n            int c = q.poll();\n            for(int next : graph[c]){\n                if(color[next] == color[c]) return false;\n                if(color[next] == -1){\n                    // this is not colored yet \n                    color[next] = 1 - color[c];\n                    q.add(next);\n                }\n            }\n        }\n        return true;\n    }\n}\n")))}f.isMDXComponent=!0}}]);