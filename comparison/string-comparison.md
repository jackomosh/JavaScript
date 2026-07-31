# String Comparison Algorithm

This document outlines the simple, step-by-step algorithm used to compare two strings lexicographically.

## How It Works

1. Compare the first character of both strings.
2. If the first character from the first string is greater (or less) than the other string’s corresponding character, then the first string is greater (or less) than the second. The comparison is complete.
3. Otherwise, if both strings’ first characters are the same, move on to compare the second characters in the exact same way.
4. Repeat this process iteratively until the end of either string is reached.
5. If both strings end at the same length (i.e., every character matched and they are of equal length), then the strings are **equal**. 
6. Otherwise, if one string runs out while the other still has characters remaining, the **longer string is greater**.