---
slug: Leetcode 1312
title: Leetcode 1312
authors: [junhechen]
tags: [leetcode, dailychallenge, notes]
---


This week we are been doing DP problems and this is one of them, it is quite easy to implement, but little tricky to find the entry point.

```java
class Solution {
    Integer[][] memo;
    public int minInsertions(String s) {
        // we can think this as in a different prespective 
        // what is longest we have to insert to make this a palindrome?
        // that is correct we can insert s in reverse to complish that, 
        // if we take out the character we already have that means everthing else would then become palindrome 
        memo = new Integer[s.length()][s.length()];
        StringBuilder sb = new StringBuilder(s);
        
        return s.length() - lcs(s,sb.reverse().toString(),0,0);
    }
    private int lcs(String s1, String s2, int p1, int p2){
        // base case 
        // case if we used one of the string up 
        if(p1 == s1.length()) return 0;  
        if(p2 == s2.length()) return 0; 
        // solved case
        if(memo[p1][p2] != null) return memo[p1][p2];
        // solve the case 
        
        if(s1.charAt(p1) == s2.charAt(p2)){
            // if we have a match 
            return memo[p1][p2] =  1 + lcs(s1,s2,p1 + 1,p2 + 1);
        }
        return memo[p1][p2] = Math.max(lcs(s1,s2,p1 + 1,p2),lcs(s1,s2,p1,p2 + 1));
    }
}
```
