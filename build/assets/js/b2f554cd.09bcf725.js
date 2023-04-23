"use strict";(self.webpackChunkjunhe_s_documents=self.webpackChunkjunhe_s_documents||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"Leetcode 1416","metadata":{"permalink":"/blog/Leetcode 1416","editUrl":"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-04-22-Leet Code.md","source":"@site/blog/2023-04-22-Leet Code.md","title":"Leetcode 1416","description":"All the dp problem is kinda similar, this is marked at hard, but in reality it is backtrack question possible sub array partition with little modification.","date":"2023-04-22T00:00:00.000Z","formattedDate":"April 22, 2023","tags":[{"label":"leetcode","permalink":"/blog/tags/leetcode"},{"label":"dailychallenge","permalink":"/blog/tags/dailychallenge"},{"label":"notes","permalink":"/blog/tags/notes"}],"readingTime":0.87,"hasTruncateMarker":false,"authors":[{"name":"Junhe Chen","title":"Software Developer","url":"https://bio.junhechen.com","imageURL":"https://bio.junhechen.com/assets/IMG_0001.jpeg","key":"junhechen"}],"frontMatter":{"slug":"Leetcode 1416","title":"Leetcode 1416","authors":["junhechen"],"tags":["leetcode","dailychallenge","notes"]},"nextItem":{"title":"Leetcode 727","permalink":"/blog/Leetcode 727"}},"content":"All the dp problem is kinda similar, this is marked at hard, but in reality it is backtrack question possible sub array partition with little modification. \\n```java\\nclass Solution {\\n    int[] memo;\\n    int MOD = 1000000007;\\n    public int numberOfArrays(String s, int k) {\\n        memo = new int[s.length() + 1];\\n        Arrays.fill(memo,-1);\\n        return dp(s,k,0);\\n    }\\n    private int dp(String s, int k, int curr){\\n        // base case \\n        if(curr == s.length()) return 1; // we have no more possible number to play with\\n        if(s.charAt(curr) == \'0\') return 0; // leading zero\\n        // solved case\\n        if(memo[curr] != -1) return memo[curr];\\n        // start res with 0\\n        int res = 0;\\n        for(int i = curr; i < s.length(); i ++){\\n            // try pairtition at every possible point\\n            String num = s.substring(curr,i + 1);\\n            // if num > k then we know we cant have this number\\n            if (Long.parseLong(num) > k)\\n                break;\\n            // add to res if we made to the end (+ 1) res\\n            res = (res + dp(s,k,i + 1)) % MOD;\\n\\n        }\\n        return memo[curr] = res;\\n    }\\n}\\n```"},{"id":"Leetcode 727","metadata":{"permalink":"/blog/Leetcode 727","editUrl":"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-04-21-Leet Code Weekly Challenge.md","source":"@site/blog/2023-04-21-Leet Code Weekly Challenge.md","title":"Leetcode 727","description":"This question interesting because our dp is not finding the min of the length but it is finding the ending index of given starting point p1. This is a very new DP problem that I have first encountered.","date":"2023-04-21T00:00:00.000Z","formattedDate":"April 21, 2023","tags":[{"label":"leetcode","permalink":"/blog/tags/leetcode"},{"label":"weeklychallenge","permalink":"/blog/tags/weeklychallenge"},{"label":"notes","permalink":"/blog/tags/notes"}],"readingTime":1.2,"hasTruncateMarker":false,"authors":[{"name":"Junhe Chen","title":"Software Developer","url":"https://bio.junhechen.com","imageURL":"https://bio.junhechen.com/assets/IMG_0001.jpeg","key":"junhechen"}],"frontMatter":{"slug":"Leetcode 727","title":"Leetcode 727","authors":["junhechen"],"tags":["leetcode","weeklychallenge","notes"]},"prevItem":{"title":"Leetcode 1416","permalink":"/blog/Leetcode 1416"},"nextItem":{"title":"Leetcode 1312","permalink":"/blog/Leetcode 1312"}},"content":"This question interesting because our dp is not finding the min of the length but it is finding the ending index of given starting point p1. This is a very new DP problem that I have first encountered. \\n\\n```java\\nclass Solution {\\n    Integer[][] memo;\\n    int min = Integer.MAX_VALUE;\\n    int start = -1;\\n    public String minWindow(String s1, String s2) {\\n        memo = new Integer[s1.length()][s2.length() + 1];\\n        dp(s1,s2,0,0);\\n        return start == -1 ? \\"\\" : s1.substring(start,start + min);\\n    }\\n    private int dp(String s1, String s2, int p1, int p2){ \\n        // we use dp method to find the ending index at given index of s1 \\n\\n        if(p2 == s2.length()) return p1; // we have all the character from p2\\n        if(p1 == s1.length()) return Integer.MAX_VALUE; // we are not able to match \\n        // solved case\\n        if(memo[p1][p2] != null) return memo[p1][p2];\\n        // solve the case \\n        // starts with skip the character\\n        int res = dp(s1,s2,p1 + 1, p2);\\n        if(s1.charAt(p1) == s2.charAt(p2)){\\n            // we have a match \\n            res = Math.min(res,dp(s1,s2,p1 + 1, p2 + 1));\\n        }\\n        if(p2 == 0 && res < Integer.MAX_VALUE){\\n            // this is a valid starting point \\n            // note since we called skip first, that means we are always replacing the substring as we moving forward \\n            // so res - p1 <= min is important here to locate the correct starting point\\n            if(res - p1 <= min){\\n                min = res - p1;\\n                start = p1;\\n            }\\n        }\\n        return memo[p1][p2] = res;\\n    }\\n    ```\\n}"},{"id":"Leetcode 1312","metadata":{"permalink":"/blog/Leetcode 1312","editUrl":"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-04-21-Leet Code/index.md","source":"@site/blog/2023-04-21-Leet Code/index.md","title":"Leetcode 1312","description":"This week we are been doing DP problems and this is one of them, it is quite easy to implement, but little tricky to find the entry point.","date":"2023-04-21T00:00:00.000Z","formattedDate":"April 21, 2023","tags":[{"label":"leetcode","permalink":"/blog/tags/leetcode"},{"label":"dailychallenge","permalink":"/blog/tags/dailychallenge"},{"label":"notes","permalink":"/blog/tags/notes"}],"readingTime":0.915,"hasTruncateMarker":false,"authors":[{"name":"Junhe Chen","title":"Software Developer","url":"https://bio.junhechen.com","imageURL":"https://bio.junhechen.com/assets/IMG_0001.jpeg","key":"junhechen"}],"frontMatter":{"slug":"Leetcode 1312","title":"Leetcode 1312","authors":["junhechen"],"tags":["leetcode","dailychallenge","notes"]},"prevItem":{"title":"Leetcode 727","permalink":"/blog/Leetcode 727"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"This week we are been doing DP problems and this is one of them, it is quite easy to implement, but little tricky to find the entry point.\\n\\n```java\\nclass Solution {\\n    Integer[][] memo;\\n    public int minInsertions(String s) {\\n        // we can think this as in a different prespective \\n        // what is longest we have to insert to make this a palindrome?\\n        // that is correct we can insert s in reverse to complish that, \\n        // if we take out the character we already have that means everthing else would then become palindrome \\n        memo = new Integer[s.length()][s.length()];\\n        StringBuilder sb = new StringBuilder(s);\\n        \\n        return s.length() - lcs(s,sb.reverse().toString(),0,0);\\n    }\\n    private int lcs(String s1, String s2, int p1, int p2){\\n        // base case \\n        // case if we used one of the string up \\n        if(p1 == s1.length()) return 0;  \\n        if(p2 == s2.length()) return 0; \\n        // solved case\\n        if(memo[p1][p2] != null) return memo[p1][p2];\\n        // solve the case \\n        \\n        if(s1.charAt(p1) == s2.charAt(p2)){\\n            // if we have a match \\n            return memo[p1][p2] =  1 + lcs(s1,s2,p1 + 1,p2 + 1);\\n        }\\n        return memo[p1][p2] = Math.max(lcs(s1,s2,p1 + 1,p2),lcs(s1,s2,p1,p2 + 1));\\n    }\\n}\\n```"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-04-20-welcome/index.md","source":"@site/blog/2023-04-20-welcome/index.md","title":"Welcome","description":"\ud83d\udc4b Hi!","date":"2023-04-20T00:00:00.000Z","formattedDate":"April 20, 2023","tags":[{"label":"helloworld","permalink":"/blog/tags/helloworld"}],"readingTime":0.53,"hasTruncateMarker":false,"authors":[{"name":"Junhe Chen","title":"Software Developer","url":"https://bio.junhechen.com","imageURL":"https://bio.junhechen.com/assets/IMG_0001.jpeg","key":"junhechen"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["junhechen"],"tags":["helloworld"]},"prevItem":{"title":"Leetcode 1312","permalink":"/blog/Leetcode 1312"}},"content":"## \ud83d\udc4b Hi! ##\\n\\nI\'m Junhe Chen [(JC)](https://bio.junhechen.com), a full stack software engineer. Proven talent for aligning project objectives with established and emerging computer science paradigms to achieve maximum operational impacts with minimum resource expenditures. Growth-focused leader with expertise spanning technology solutions, project management, business operations optimization, application development, team leadership, and client relationship management. Exceptional student with keen interpersonal, communications, and application development expertise.\\n\\n## Introduction ##\\nThis blog is mainly used to :\\n- take notes for my leetcode challanges.\\n- update learning notes from other readings.\\n\\n\\n## Social Card ##\\n![Social Card](./social-card.png)\\n\\n***If you found information here useful, feel free to review them.***"}]}')}}]);