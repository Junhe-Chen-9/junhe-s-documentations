"use strict";(self.webpackChunkjunhe_s_documents=self.webpackChunkjunhe_s_documents||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"Leetcode 1697","metadata":{"permalink":"/blog/Leetcode 1697","editUrl":"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-04-28-Leet Code.md","source":"@site/blog/2023-04-28-Leet Code.md","title":"Leetcode 1697","description":"Another same union find question , you can figure out it is a union find problem by the hint that determine a and b connected and a minimal spanning tree kind of a deal.","date":"2023-04-28T00:00:00.000Z","formattedDate":"April 28, 2023","tags":[{"label":"leetcode","permalink":"/blog/tags/leetcode"},{"label":"dailychallenge","permalink":"/blog/tags/dailychallenge"},{"label":"notes","permalink":"/blog/tags/notes"}],"readingTime":1.43,"hasTruncateMarker":false,"authors":[{"name":"Junhe Chen","title":"Software Developer","url":"https://bio.junhechen.com","imageURL":"https://bio.junhechen.com/assets/IMG_0001.jpeg","key":"junhechen"}],"frontMatter":{"slug":"Leetcode 1697","title":"Leetcode 1697","authors":["junhechen"],"tags":["leetcode","dailychallenge","notes"]},"nextItem":{"title":"Leetcode 839","permalink":"/blog/Leetcode 839"}},"content":"Another same union find question , you can figure out it is a union find problem by the hint that determine a and b connected and a minimal spanning tree kind of a deal.\\n\\n```java\\nclass Solution {\\n    int[] parent;\\n    int[] size;\\n    public boolean[] distanceLimitedPathsExist(int n, int[][] edgeList, int[][] queries) {\\n        int queriesCount = queries.length;\\n        boolean[] res = new boolean[queriesCount];\\n        // init \\n        parent = new int[n];\\n        size = new int[n];\\n        for(int i = 0; i < n; i ++){\\n            parent[i] = i;\\n            size[i] = 1;\\n        }\\n        // Store original indices with all queries.\\n        int[][] queriesWithIndex = new int[queriesCount][4];\\n        for (int i = 0; i < queriesCount; ++i) {\\n            queriesWithIndex[i][0] = queries[i][0];\\n            queriesWithIndex[i][1] = queries[i][1];\\n            queriesWithIndex[i][2] = queries[i][2];\\n            queriesWithIndex[i][3] = i;\\n        }\\n        Arrays.sort(edgeList,(a,b) ->{return a[2] - b[2];});\\n        Arrays.sort(queriesWithIndex,(a,b) ->{return a[2] - b[2];});\\n        int edgesIndex = 0;\\n        for(int i = 0; i < queriesCount; i ++){\\n            int p = queriesWithIndex[i][0];\\n            int q = queriesWithIndex[i][1];\\n            int limit = queriesWithIndex[i][2];\\n            int originalIndex = queriesWithIndex[i][3];\\n            // because we have the edges sorted\\n            // while our paths are smaller than limit, we want to attache all the edges thta is less than limit\\n            // if this made p q in a same union aka connected, we return true\\n            while(edgesIndex < edgeList.length && edgeList[edgesIndex][2] < limit){\\n                int node1 = edgeList[edgesIndex][0];\\n                int node2 = edgeList[edgesIndex][1];\\n                union(node1,node2);\\n                edgesIndex += 1;\\n            }\\n            res[originalIndex] = find(p) == find(q);\\n        }\\n        return res;\\n        \\n    }\\n    private int find(int a){\\n        if(parent[a] == a) return a;\\n        return parent[a] = find(parent[a]);\\n    }\\n    private int union(int a, int b){\\n        int pa = find(a);\\n        int pb = find(b);\\n        if(pa == pb) return 0;\\n        if(size[pa] > pb){\\n            parent[pb] = a;\\n            size[pa] += size[pb];\\n        }else{\\n            parent[pa] = b;\\n            size[pb] += size[pa];\\n        }\\n        return 1;\\n    }\\n}\\n```"},{"id":"Leetcode 839","metadata":{"permalink":"/blog/Leetcode 839","editUrl":"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-04-27-Leet Code.md","source":"@site/blog/2023-04-27-Leet Code.md","title":"Leetcode 839","description":"This question is marked hard, but in realality this is not a difficult question. Simple union find problem, you find all the samilar strs and union them , starts with n groups after union all possible strs, what you have left is group standing.","date":"2023-04-27T00:00:00.000Z","formattedDate":"April 27, 2023","tags":[{"label":"leetcode","permalink":"/blog/tags/leetcode"},{"label":"dailychallenge","permalink":"/blog/tags/dailychallenge"},{"label":"notes","permalink":"/blog/tags/notes"}],"readingTime":1.125,"hasTruncateMarker":false,"authors":[{"name":"Junhe Chen","title":"Software Developer","url":"https://bio.junhechen.com","imageURL":"https://bio.junhechen.com/assets/IMG_0001.jpeg","key":"junhechen"}],"frontMatter":{"slug":"Leetcode 839","title":"Leetcode 839","authors":["junhechen"],"tags":["leetcode","dailychallenge","notes"]},"prevItem":{"title":"Leetcode 1697","permalink":"/blog/Leetcode 1697"},"nextItem":{"title":"Leetcode 319","permalink":"/blog/Leetcode 319"}},"content":"This question is marked hard, but in realality this is not a difficult question. Simple union find problem, you find all the samilar strs and union them , starts with n groups after union all possible strs, what you have left is group standing. \\n\\n```java\\nclass Solution {\\n    // union find \\n    int[] parent;\\n    int[] size;\\n    public int numSimilarGroups(String[] strs) {\\n        int n = strs.length;\\n        parent = new int[n];\\n        size = new int[n];\\n        for(int i = 0; i < n; i ++){\\n            parent[i] = i;\\n            size[i] = 1;\\n        }\\n        int count = n;\\n        for(int i = 0; i < n; i ++){\\n            for(int j = i + 1; j < n; j ++){\\n                String a = strs[i];\\n                String b = strs[j];\\n                if(similar(a,b)){\\n                    count -= union(i,j);\\n                }\\n            }\\n        }\\n        return count;\\n    }\\n    private int find(int a){\\n        if(parent[a] == a) return a;\\n        return parent[a] = find(parent[a]);\\n    }\\n    private int union(int a, int b){\\n        int pa = find(a);\\n        int pb = find(b);\\n        if(pa == pb) return 0;\\n        if(size[pa] > size[pb]){\\n            // join b to a \\n            parent[pb] = a;\\n            size[pa] += size[pb];\\n        }else{\\n            parent[pa] = b;\\n            size[pb] += size[pa];\\n        }\\n        return 1;\\n    }\\n    private boolean similar(String a, String b){\\n        int diff = 0;\\n        for(int i = 0; i < a.length(); i ++){\\n            if(a.charAt(i) != b.charAt(i)){\\n                diff ++;\\n            }\\n        }\\n        return diff == 2 || diff == 0;\\n    }\\n}\\n```"},{"id":"Leetcode 319","metadata":{"permalink":"/blog/Leetcode 319","editUrl":"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-04-26-Leet Code.md","source":"@site/blog/2023-04-26-Leet Code.md","title":"Leetcode 319","description":"This is a harder question for me, write on paper and find the parttern.","date":"2023-04-26T00:00:00.000Z","formattedDate":"April 26, 2023","tags":[{"label":"leetcode","permalink":"/blog/tags/leetcode"},{"label":"dailychallenge","permalink":"/blog/tags/dailychallenge"},{"label":"notes","permalink":"/blog/tags/notes"}],"readingTime":0.47,"hasTruncateMarker":false,"authors":[{"name":"Junhe Chen","title":"Software Developer","url":"https://bio.junhechen.com","imageURL":"https://bio.junhechen.com/assets/IMG_0001.jpeg","key":"junhechen"}],"frontMatter":{"slug":"Leetcode 319","title":"Leetcode 319","authors":["junhechen"],"tags":["leetcode","dailychallenge","notes"]},"prevItem":{"title":"Leetcode 839","permalink":"/blog/Leetcode 839"},"nextItem":{"title":"Leetcode 258","permalink":"/blog/Leetcode 258"}},"content":"This is a harder question for me, write on paper and find the parttern. \\n```java\\nclass Solution {\\n    public int bulbSwitch(int n) {\\n        // n == 0 all bulbs are off\\n        // n == 1 all bulbs with factor of 1 \\n        // n == 2 all bulbs with factor 2 (2,4,6,8,10)...\\n        // n == 3 all bulbs with factor 3 (3,6,9).....\\n        // ......\\n        // so we are finding number from 1 to n are perfect square\\n        // essencially we are trying to find the sqrt of the n \\n        return (int) Math.sqrt(n);\\n    }\\n}\\n```"},{"id":"Leetcode 258","metadata":{"permalink":"/blog/Leetcode 258","editUrl":"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-04-25-Leet Code.md","source":"@site/blog/2023-04-25-Leet Code.md","title":"Leetcode 258","description":"Simple reccurssion, you have a base case where you have just 1 digit, simply return it, you have recussive case, you add all the digit and return addDigits adds all these digit recurssively","date":"2023-04-25T00:00:00.000Z","formattedDate":"April 25, 2023","tags":[{"label":"leetcode","permalink":"/blog/tags/leetcode"},{"label":"dailychallenge","permalink":"/blog/tags/dailychallenge"},{"label":"notes","permalink":"/blog/tags/notes"}],"readingTime":0.355,"hasTruncateMarker":false,"authors":[{"name":"Junhe Chen","title":"Software Developer","url":"https://bio.junhechen.com","imageURL":"https://bio.junhechen.com/assets/IMG_0001.jpeg","key":"junhechen"}],"frontMatter":{"slug":"Leetcode 258","title":"Leetcode 258","authors":["junhechen"],"tags":["leetcode","dailychallenge","notes"]},"prevItem":{"title":"Leetcode 319","permalink":"/blog/Leetcode 319"},"nextItem":{"title":"Leetcode 2336","permalink":"/blog/Leetcode 2336"}},"content":"Simple reccurssion, you have a base case where you have just 1 digit, simply return it, you have recussive case, you add all the digit and return addDigits adds all these digit recurssively\\n\\n\\n```java\\nclass Solution {\\n    public int addDigits(int num) {\\n        // base case\\n        if(num < 10) return num;\\n        int res = 0;\\n        while(num != 0){\\n            res += num % 10;\\n            num /= 10;\\n        }\\n        return addDigits(res);\\n    }\\n}\\n```"},{"id":"Leetcode 2336","metadata":{"permalink":"/blog/Leetcode 2336","editUrl":"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-04-24-Leet Code.md","source":"@site/blog/2023-04-24-Leet Code.md","title":"Leetcode 2336","description":"Consider we have a full infinite set at first","date":"2023-04-24T00:00:00.000Z","formattedDate":"April 24, 2023","tags":[{"label":"leetcode","permalink":"/blog/tags/leetcode"},{"label":"dailychallenge","permalink":"/blog/tags/dailychallenge"},{"label":"notes","permalink":"/blog/tags/notes"}],"readingTime":0.745,"hasTruncateMarker":false,"authors":[{"name":"Junhe Chen","title":"Software Developer","url":"https://bio.junhechen.com","imageURL":"https://bio.junhechen.com/assets/IMG_0001.jpeg","key":"junhechen"}],"frontMatter":{"slug":"Leetcode 2336","title":"Leetcode 2336","authors":["junhechen"],"tags":["leetcode","dailychallenge","notes"]},"prevItem":{"title":"Leetcode 258","permalink":"/blog/Leetcode 258"},"nextItem":{"title":"Leetcode 1046","permalink":"/blog/Leetcode 1046"}},"content":"Consider we have a full infinite set at first\\nUse a running curr to keep track of smallest number and priority queue to keep track if we have scarlet numbers before running smallest\\n```java\\nclass SmallestInfiniteSet {\\n    PriorityQueue<Integer> pq = new PriorityQueue<>();\\n    int curr;\\n    public SmallestInfiniteSet() {\\n        // set curr smallest to 1\\n        curr = 1;\\n    }\\n    \\n    public int popSmallest() {\\n        if(!pq.isEmpty())return pq.poll();\\n        // if we have nothing in pq, curr smallest is what we poll out, and sus next number would be curr + 1\\n        curr ++;\\n        return curr - 1;\\n    }\\n    \\n    public void addBack(int num) {\\n        if(num < curr & !pq.contains(num)){\\n            // number is small and we dont have it in our pq \\n            // add back\\n            pq.add(num);\\n        }\\n    }\\n}\\n\\n/**\\n * Your SmallestInfiniteSet object will be instantiated and called as such:\\n * SmallestInfiniteSet obj = new SmallestInfiniteSet();\\n * int param_1 = obj.popSmallest();\\n * obj.addBack(num);\\n */\\n```"},{"id":"Leetcode 1046","metadata":{"permalink":"/blog/Leetcode 1046","editUrl":"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-04-23-Leet Code.md","source":"@site/blog/2023-04-23-Leet Code.md","title":"Leetcode 1046","description":"Very straightforward question, just mimc the instruction using priority queue.","date":"2023-04-23T00:00:00.000Z","formattedDate":"April 23, 2023","tags":[{"label":"leetcode","permalink":"/blog/tags/leetcode"},{"label":"dailychallenge","permalink":"/blog/tags/dailychallenge"},{"label":"notes","permalink":"/blog/tags/notes"}],"readingTime":0.505,"hasTruncateMarker":false,"authors":[{"name":"Junhe Chen","title":"Software Developer","url":"https://bio.junhechen.com","imageURL":"https://bio.junhechen.com/assets/IMG_0001.jpeg","key":"junhechen"}],"frontMatter":{"slug":"Leetcode 1046","title":"Leetcode 1046","authors":["junhechen"],"tags":["leetcode","dailychallenge","notes"]},"prevItem":{"title":"Leetcode 2336","permalink":"/blog/Leetcode 2336"},"nextItem":{"title":"Leetcode 1416","permalink":"/blog/Leetcode 1416"}},"content":"Very straightforward question, just mimc the instruction using priority queue.\\n\\n```java\\nclass Solution {\\n    public int lastStoneWeight(int[] stones) {\\n        // very straight forward, we use priority queue to ensure we polling the largest 2 stones\\n        PriorityQueue<Integer> pq = new PriorityQueue<>((a,b)->{return b - a;});\\n        for(int stone : stones){\\n            pq.add(stone);\\n        }\\n        // while we have 2 or more stones\\n        while(pq.size() > 1){\\n            int a = pq.poll();\\n            int b = pq.poll();\\n            if(a != b){\\n                int remain = Math.abs(a - b);\\n                pq.add(remain);\\n            }\\n        }\\n        // return nothing if we got no stone or last stone standing.\\n        return pq.isEmpty() ? 0 : pq.poll();\\n    }\\n}\\n```"},{"id":"Leetcode 1416","metadata":{"permalink":"/blog/Leetcode 1416","editUrl":"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-04-22-Leet Code.md","source":"@site/blog/2023-04-22-Leet Code.md","title":"Leetcode 1416","description":"All the dp problem is kinda similar, this is marked at hard, but in reality it is backtrack question possible sub array partition with little modification.","date":"2023-04-22T00:00:00.000Z","formattedDate":"April 22, 2023","tags":[{"label":"leetcode","permalink":"/blog/tags/leetcode"},{"label":"dailychallenge","permalink":"/blog/tags/dailychallenge"},{"label":"notes","permalink":"/blog/tags/notes"}],"readingTime":0.87,"hasTruncateMarker":false,"authors":[{"name":"Junhe Chen","title":"Software Developer","url":"https://bio.junhechen.com","imageURL":"https://bio.junhechen.com/assets/IMG_0001.jpeg","key":"junhechen"}],"frontMatter":{"slug":"Leetcode 1416","title":"Leetcode 1416","authors":["junhechen"],"tags":["leetcode","dailychallenge","notes"]},"prevItem":{"title":"Leetcode 1046","permalink":"/blog/Leetcode 1046"},"nextItem":{"title":"Leetcode 727","permalink":"/blog/Leetcode 727"}},"content":"All the dp problem is kinda similar, this is marked at hard, but in reality it is backtrack question possible sub array partition with little modification. \\n```java\\nclass Solution {\\n    int[] memo;\\n    int MOD = 1000000007;\\n    public int numberOfArrays(String s, int k) {\\n        memo = new int[s.length() + 1];\\n        Arrays.fill(memo,-1);\\n        return dp(s,k,0);\\n    }\\n    private int dp(String s, int k, int curr){\\n        // base case \\n        if(curr == s.length()) return 1; // we have no more possible number to play with\\n        if(s.charAt(curr) == \'0\') return 0; // leading zero\\n        // solved case\\n        if(memo[curr] != -1) return memo[curr];\\n        // start res with 0\\n        int res = 0;\\n        for(int i = curr; i < s.length(); i ++){\\n            // try pairtition at every possible point\\n            String num = s.substring(curr,i + 1);\\n            // if num > k then we know we cant have this number\\n            if (Long.parseLong(num) > k)\\n                break;\\n            // add to res if we made to the end (+ 1) res\\n            res = (res + dp(s,k,i + 1)) % MOD;\\n\\n        }\\n        return memo[curr] = res;\\n    }\\n}\\n```"},{"id":"Leetcode 727","metadata":{"permalink":"/blog/Leetcode 727","editUrl":"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-04-21-Leet Code Weekly Challenge.md","source":"@site/blog/2023-04-21-Leet Code Weekly Challenge.md","title":"Leetcode 727","description":"This question interesting because our dp is not finding the min of the length but it is finding the ending index of given starting point p1. This is a very new DP problem that I have first encountered.","date":"2023-04-21T00:00:00.000Z","formattedDate":"April 21, 2023","tags":[{"label":"leetcode","permalink":"/blog/tags/leetcode"},{"label":"weeklychallenge","permalink":"/blog/tags/weeklychallenge"},{"label":"notes","permalink":"/blog/tags/notes"}],"readingTime":1.2,"hasTruncateMarker":false,"authors":[{"name":"Junhe Chen","title":"Software Developer","url":"https://bio.junhechen.com","imageURL":"https://bio.junhechen.com/assets/IMG_0001.jpeg","key":"junhechen"}],"frontMatter":{"slug":"Leetcode 727","title":"Leetcode 727","authors":["junhechen"],"tags":["leetcode","weeklychallenge","notes"]},"prevItem":{"title":"Leetcode 1416","permalink":"/blog/Leetcode 1416"},"nextItem":{"title":"Leetcode 1312","permalink":"/blog/Leetcode 1312"}},"content":"This question interesting because our dp is not finding the min of the length but it is finding the ending index of given starting point p1. This is a very new DP problem that I have first encountered. \\n\\n```java\\nclass Solution {\\n    Integer[][] memo;\\n    int min = Integer.MAX_VALUE;\\n    int start = -1;\\n    public String minWindow(String s1, String s2) {\\n        memo = new Integer[s1.length()][s2.length() + 1];\\n        dp(s1,s2,0,0);\\n        return start == -1 ? \\"\\" : s1.substring(start,start + min);\\n    }\\n    private int dp(String s1, String s2, int p1, int p2){ \\n        // we use dp method to find the ending index at given index of s1 \\n\\n        if(p2 == s2.length()) return p1; // we have all the character from p2\\n        if(p1 == s1.length()) return Integer.MAX_VALUE; // we are not able to match \\n        // solved case\\n        if(memo[p1][p2] != null) return memo[p1][p2];\\n        // solve the case \\n        // starts with skip the character\\n        int res = dp(s1,s2,p1 + 1, p2);\\n        if(s1.charAt(p1) == s2.charAt(p2)){\\n            // we have a match \\n            res = Math.min(res,dp(s1,s2,p1 + 1, p2 + 1));\\n        }\\n        if(p2 == 0 && res < Integer.MAX_VALUE){\\n            // this is a valid starting point \\n            // note since we called skip first, that means we are always replacing the substring as we moving forward \\n            // so res - p1 <= min is important here to locate the correct starting point\\n            if(res - p1 <= min){\\n                min = res - p1;\\n                start = p1;\\n            }\\n        }\\n        return memo[p1][p2] = res;\\n    }\\n    ```\\n}"},{"id":"Leetcode 1312","metadata":{"permalink":"/blog/Leetcode 1312","editUrl":"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-04-21-Leet Code/index.md","source":"@site/blog/2023-04-21-Leet Code/index.md","title":"Leetcode 1312","description":"This week we are been doing DP problems and this is one of them, it is quite easy to implement, but little tricky to find the entry point.","date":"2023-04-21T00:00:00.000Z","formattedDate":"April 21, 2023","tags":[{"label":"leetcode","permalink":"/blog/tags/leetcode"},{"label":"dailychallenge","permalink":"/blog/tags/dailychallenge"},{"label":"notes","permalink":"/blog/tags/notes"}],"readingTime":0.915,"hasTruncateMarker":false,"authors":[{"name":"Junhe Chen","title":"Software Developer","url":"https://bio.junhechen.com","imageURL":"https://bio.junhechen.com/assets/IMG_0001.jpeg","key":"junhechen"}],"frontMatter":{"slug":"Leetcode 1312","title":"Leetcode 1312","authors":["junhechen"],"tags":["leetcode","dailychallenge","notes"]},"prevItem":{"title":"Leetcode 727","permalink":"/blog/Leetcode 727"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"This week we are been doing DP problems and this is one of them, it is quite easy to implement, but little tricky to find the entry point.\\n\\n```java\\nclass Solution {\\n    Integer[][] memo;\\n    public int minInsertions(String s) {\\n        // we can think this as in a different prespective \\n        // what is longest we have to insert to make this a palindrome?\\n        // that is correct we can insert s in reverse to complish that, \\n        // if we take out the character we already have that means everthing else would then become palindrome \\n        memo = new Integer[s.length()][s.length()];\\n        StringBuilder sb = new StringBuilder(s);\\n        \\n        return s.length() - lcs(s,sb.reverse().toString(),0,0);\\n    }\\n    private int lcs(String s1, String s2, int p1, int p2){\\n        // base case \\n        // case if we used one of the string up \\n        if(p1 == s1.length()) return 0;  \\n        if(p2 == s2.length()) return 0; \\n        // solved case\\n        if(memo[p1][p2] != null) return memo[p1][p2];\\n        // solve the case \\n        \\n        if(s1.charAt(p1) == s2.charAt(p2)){\\n            // if we have a match \\n            return memo[p1][p2] =  1 + lcs(s1,s2,p1 + 1,p2 + 1);\\n        }\\n        return memo[p1][p2] = Math.max(lcs(s1,s2,p1 + 1,p2),lcs(s1,s2,p1,p2 + 1));\\n    }\\n}\\n```"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/Junhe-Chen-9/junhe-s-documentations/blob/main/blog/2023-04-20-welcome/index.md","source":"@site/blog/2023-04-20-welcome/index.md","title":"Welcome","description":"\ud83d\udc4b Hi!","date":"2023-04-20T00:00:00.000Z","formattedDate":"April 20, 2023","tags":[{"label":"helloworld","permalink":"/blog/tags/helloworld"}],"readingTime":0.53,"hasTruncateMarker":false,"authors":[{"name":"Junhe Chen","title":"Software Developer","url":"https://bio.junhechen.com","imageURL":"https://bio.junhechen.com/assets/IMG_0001.jpeg","key":"junhechen"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["junhechen"],"tags":["helloworld"]},"prevItem":{"title":"Leetcode 1312","permalink":"/blog/Leetcode 1312"}},"content":"## \ud83d\udc4b Hi! ##\\n\\nI\'m Junhe Chen [(JC)](https://bio.junhechen.com), a full stack software engineer. Proven talent for aligning project objectives with established and emerging computer science paradigms to achieve maximum operational impacts with minimum resource expenditures. Growth-focused leader with expertise spanning technology solutions, project management, business operations optimization, application development, team leadership, and client relationship management. Exceptional student with keen interpersonal, communications, and application development expertise.\\n\\n## Introduction ##\\nThis blog is mainly used to :\\n- take notes for my leetcode challanges.\\n- update learning notes from other readings.\\n\\n\\n## Social Card ##\\n![Social Card](./social-card.png)\\n\\n***If you found information here useful, feel free to review them.***"}]}')}}]);