// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const myMap = new Map();
    var longest = 0;
    var start = 0;
    var count = 0;
    for (i=0; i<s.length; i++) {
        if (!myMap.has(s[i]) || (myMap.get(s[i]) < start)) {
            myMap.set(s[i],i);
            longest = i - start +1;
        }else{
            if (count<longest) count = longest;
            start = myMap.get(s[i]) + 1
            myMap.set(s[i],i);
        }
    }
    
    return (longest<count) ? count : longest;
};