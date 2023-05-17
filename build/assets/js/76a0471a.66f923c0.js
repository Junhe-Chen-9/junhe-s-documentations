"use strict";(self.webpackChunkjunhe_s_documents=self.webpackChunkjunhe_s_documents||[]).push([[5215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={slug:"Leetcode 2130",title:"Leetcode 2130",authors:["junhechen"],tags:["leetcode","weeklychallenge","notes"]},l=void 0,i={permalink:"/blog/Leetcode 2130",editUrl:"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-05-16-Leet Code.md",source:"@site/blog/2023-05-16-Leet Code.md",title:"Leetcode 2130",description:"This involves going to middle, reverse second half and then pair them up",date:"2023-05-16T00:00:00.000Z",formattedDate:"May 16, 2023",tags:[{label:"leetcode",permalink:"/blog/tags/leetcode"},{label:"weeklychallenge",permalink:"/blog/tags/weeklychallenge"},{label:"notes",permalink:"/blog/tags/notes"}],readingTime:.845,hasTruncateMarker:!1,authors:[{name:"Junhe Chen",title:"Software Developer",url:"https://bio.junhechen.com",imageURL:"https://bio.junhechen.com/assets/IMG_0001.jpeg",key:"junhechen"}],frontMatter:{slug:"Leetcode 2130",title:"Leetcode 2130",authors:["junhechen"],tags:["leetcode","weeklychallenge","notes"]},nextItem:{title:"Leetcode 24",permalink:"/blog/Leetcode 24"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This involves going to middle, reverse second half and then pair them up\ntwo pass apporach with extra memory would be using stack"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public int pairSum(ListNode head) {\n        ListNode slow = head;\n        ListNode fast = head;\n        // Get middle of the linked list.\n        while (fast != null && fast.next != null) {\n            fast = fast.next.next;\n            slow = slow.next;\n        }\n        // Reverse second half of the linked list.\n        ListNode nextNode, prev = null;\n        while (slow != null) {\n            nextNode = slow.next;\n            slow.next = prev;\n            prev = slow;\n            slow = nextNode;\n        }\n        ListNode start = head;\n        int maximumSum = 0;\n        while (prev != null) {\n            maximumSum = Math.max(maximumSum, start.val + prev.val);\n            prev = prev.next;\n            start = start.next;\n        }\n\n        return maximumSum;\n    }\n}\n\n")))}d.isMDXComponent=!0}}]);