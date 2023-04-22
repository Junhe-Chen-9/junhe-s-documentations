---
slug: Leetcode 727
title: Leetcode 727
authors: [junhechen]
tags: [leetcode, weeklychallenge, notes]
---

This question interesting because our dp is not finding the min of the length but it is finding the ending index of given starting point p1. This is a very new DP problem that I have first encountered. 

```java
class Solution {
    Integer[][] memo;
    int min = Integer.MAX_VALUE;
    int start = -1;
    public String minWindow(String s1, String s2) {
        memo = new Integer[s1.length()][s2.length() + 1];
        dp(s1,s2,0,0);
        return start == -1 ? "" : s1.substring(start,start + min);
    }
    private int dp(String s1, String s2, int p1, int p2){ 
        // we use dp method to find the ending index at given index of s1 

        if(p2 == s2.length()) return p1; // we have all the character from p2
        if(p1 == s1.length()) return Integer.MAX_VALUE; // we are not able to match 
        // solved case
        if(memo[p1][p2] != null) return memo[p1][p2];
        // solve the case 
        // starts with skip the character
        int res = dp(s1,s2,p1 + 1, p2);
        if(s1.charAt(p1) == s2.charAt(p2)){
            // we have a match 
            res = Math.min(res,dp(s1,s2,p1 + 1, p2 + 1));
        }
        if(p2 == 0 && res < Integer.MAX_VALUE){
            // this is a valid starting point 
            // note since we called skip first, that means we are always replacing the substring as we moving forward 
            // so res - p1 <= min is important here to locate the correct starting point
            if(res - p1 <= min){
                min = res - p1;
                start = p1;
            }
        }
        return memo[p1][p2] = res;
    }
    ```
}