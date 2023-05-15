"use strict";(self.webpackChunkjunhe_s_documents=self.webpackChunkjunhe_s_documents||[]).push([[765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={slug:"Leetcode 54",title:"Leetcode 54",authors:["junhechen"],tags:["leetcode","dailychallenge","notes"]},a=void 0,l={permalink:"/blog/Leetcode 54",editUrl:"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-05-08-Leet Code.md",source:"@site/blog/2023-05-08-Leet Code.md",title:"Leetcode 54",description:"Working with matrix can be challenging, in this question, the main thing is attention to detail, making sure adding no duplicate items and shrink the boundry.",date:"2023-05-08T00:00:00.000Z",formattedDate:"May 8, 2023",tags:[{label:"leetcode",permalink:"/blog/tags/leetcode"},{label:"dailychallenge",permalink:"/blog/tags/dailychallenge"},{label:"notes",permalink:"/blog/tags/notes"}],readingTime:1.11,hasTruncateMarker:!1,authors:[{name:"Junhe Chen",title:"Software Developer",url:"https://bio.junhechen.com",imageURL:"https://bio.junhechen.com/assets/IMG_0001.jpeg",key:"junhechen"}],frontMatter:{slug:"Leetcode 54",title:"Leetcode 54",authors:["junhechen"],tags:["leetcode","dailychallenge","notes"]},prevItem:{title:"Leetcode 59",permalink:"/blog/Leetcode 59"},nextItem:{title:"Leetcode 1572",permalink:"/blog/Leetcode 1572"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Working with matrix can be challenging, in this question, the main thing is attention to detail, making sure adding no duplicate items and shrink the boundry."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public List<Integer> spiralOrder(int[][] matrix) {\n        List<Integer> res = new ArrayList<>();\n        int m = matrix.length;\n        int n = matrix[0].length;\n        int up = 0;\n        int down = m - 1;\n        int left = 0;\n        int right = n - 1;\n\n        while(res.size() < m * n){\n            // there is more item to traverse\n            // first we add everthing from left to right\n            for(int i = left; i <= right; i ++){\n                res.add(matrix[up][i]);\n            }\n            // now we add from up to down \n            for(int j = up + 1; j <= down; j ++){\n                res.add(matrix[j][right]);\n            }\n            // going from right to left but we got to make sure up != down that way we not adding duplicate row\n            if(up != down){\n                for(int i = right - 1; i >= left; i --){\n                    res.add(matrix[down][i]);\n                }\n            }\n            // from bot to top\n            if(left != right){\n                // note we dont want to add matrix[up][left] it is added from the left to right traversal!\n                for(int j = down - 1; j > up; j --){\n                    res.add(matrix[j][left]);\n                }\n            }\n\n            // now we just have to shrink the boundry\n            left ++;\n            right --;\n            up ++;\n            down --;\n        }\n        return res;\n    }\n}\n")))}p.isMDXComponent=!0}}]);