# hackerRank-challenge
HackerRank challenge with JavaScript

## Warm-up Challenges
### Challenge 1: Sock Merchant

There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
Example: 
n = 7
ar = [1, 2, 1, 2, 1, 3, 2]
There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.
Function Description
Complete the sockMerchant function in the editor below.
sockMerchant has the following parameter(s):
• int n: the number of socks in the pile
• int ar[n]: the colors of each sock
Returns
int: the number of pairs
Input Format
The first line contains an integer n, the number of socks represented in ar.
The second line contains n space-separated integers, ar[i], the colors of the socks in the pile.

### Challenge 2: Counting Valleys

An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:
• A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
• A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
Example
steps = 8 path = [DDUUUUDD]
The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain 2 units high. Finally, the hiker returns to sea level and ends the hike.

Function Description
Complete the countingValleys function in the editor below.
countingValleys has the following parameter(s):
• int steps: the number of steps on the hike
• string path: a string describing the path
Returns
• int: the number of valleys traversed

Input Format
The first line contains an integer steps, the number of steps in the hike.
The second line contains a single string path, of steps characters that describe the path.
Constraints
• 2 ≤ steps ≤ 106
• path[i] = {UD}

Sample Input
8
UDDDUDUU
Sample Output
1

### Challenge 3: Jumping on the Clouds

There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.
For each game, you will get an array of clouds numbered 0 if they are safe or 1 if
they must be avoided.
Example: 
c = [0, 1, 0, 0, 0, 1, 0]
Index the array from 0 . . . 6. The number on each cloud is its index in the list so the player must avoid the clouds at indices 1 and 5. They could follow these two paths: 0 → 2 → 4 → 6 or 0 → 2 →→ 3 → 4 → 6. The first path takes 3 jumps while the second takes 4. Return 3.

Function Description
Complete the jumpingOnClouds function in the editor below.
jumpingOnClouds has the following parameter(s):
• int c[n]: an array of binary integers
Returns
• int: the minimum number of jumps required

Input Format
The first line contains an integer n, the total number of clouds. The second line contains n space-separated binary integers describing clouds c[i] where 0 < i < n.
Constraints
• 2 ≤ n ≤ 100
• c[i] = {0,1}
• c[0] = c[n − 1] = 0
Output Format
Print the minimum number of jumps needed to win the game.

Sample Input 1:
7
0 0 1 0 0 1 0
Sample Output 1:
4
Explanation 1:
The player must avoid c[2] and c[5]. The game can be won with a minimum of 4 jumps.

Sample Input 2:
6
0 0 0 0 1 0
Sample Output 2:
3
Explanation 2:
The only thundercloud to avoid is c[4]. The game can be won in 3 jumps.

### Challente 4: Repeated String
There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

Example
• s = 'abcac'
• n = 10

The substring we consider is 'abcacabcac', the first 10 characters of the infinite string. There are 4 occurrences of a in the substring.

Function Description
Complete the repeatedString function in the editor below.
repeatedString has the following parameter(s):
• s: a string to repeat
• n: the number of characters to consider
Returns
• int: the frequency of a in the substring

Input Format
The first line contains a single string, s.
The second line contains an integer, n.

Constraints
• 1 < s < 100
• 1 < n < 10 * 12
• For 25% of the test cases, 1 < 10 * 6

Sample Input 1
aba
10
Sample Output 1
7
Explanation 1
The first n=10 letters of the infinite string are abaabaabaa. Because there are 7 a's, we return 7.

Sample Input 2
a
1000000000000
Sample Output 2
1000000000000
Explanation 2
Because all of the first n=1000000000000 letters of the infinite string are a, we return 1000000000000.

## Array Challenges
### Challenge 5: Hourglass Sum
Given a 6x6 2D Array, arr:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
An hourglass in  is a subset of values with indices falling in this pattern in 's graphical representation:

a b c
  d
e f g
There are  hourglasses in . An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be .

Example


-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
The  hourglass sums are:

-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18
The highest hourglass sum is  from the hourglass beginning at row , column :

0 4 3
  1
8 6 6


Function Description
Complete the function hourglassSum in the editor below.

hourglassSum has the following parameter(s):

int arr[6][6]: an array of integers
Returns

int: the maximum hourglass sum
Input Format

Each of the  lines of inputs  contains  space-separated integers .

Constraints

Output Format

Print the largest (maximum) hourglass sum found in .

Sample Input

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
Sample Output
19
Explanation

arr contains the following hourglasses:

The hourglass with the maximum sum () is:

2 4 4
  2
1 2 4

## Month Challenges
### Challenge 9: Plus Minus

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10-1 are acceptable.
Example
arr = [1, 1, 0, −1, −1]
There are n = 5 elements, two positive, two negative and one zero. Their ratios are = 0.400000,= 0.400000 and = 0.200000. Results are printed
as:
0.400000
0.400000
0.200000
Function Description
Complete the plusMinus function in the editor below.
plusMinus has the following parameter(s):
• int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. The function should not return a value.
Input Format
The first line contains an integer, n, the size of the array.
The second line contains n space-separated integers that describe arr[n].
Constraints
0 ≤ n ≤ 100
−100 ≤ arr[i] ≤ 100
Output Format
Print the following 3 lines, each to 6 decimals:

1. proportion of positive values 2. proportion of negative values 3. proportion of zeros
Sample Input
STDIN
Function
6
arr[] size n = 6
-4 3-9 0 4 1 arr = [-4, 3, -9, 0, 4, 1]
Sample Output
0.500000
0.333333
0.166667
Explanation
There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.
The proportions of occurrence are positive: 3/6 = 0.500000, negative: 2/6 = 0.333333 and zeros: 1/6 = 0.166667.

### Challenge 10: Min-max Sum
### Challenge 11: Time conversion
### Challenge 12: Find median (mock test)
### Challenge 13: Matching Strings
There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
Example
strings = ['al, al', abd']
queries = ['ab',' abc',' bc']
There are 2 instances of 'ab', 1 of 'abc' and 0 of 'bc'. For each query, add an element to the return array, results = [2, 1, 0].
Function Description
Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in strings.
matchingStrings has the following parameters:
• string strings[n] - an array of strings to search
• string queries[q] - an array of query strings
Returns
int[q]: an array of results for each query
Input Format
The first line contains and integer n, the size of strings[]. Each of the next lines contains a string strings[i].
The next line contains q, the size of queries [].
Each of the next & lines contains a string queries[i]. Constraints
1 ≤ n ≤ 1000
1 ≤ q≤ 1000
1≤ |strings[i]|, |queries[i]|≤20.

### Challenge 14: Lonely interger

Given an array of integers, where all elements but one occur twice, find the unique element.
Example
a = [1, 2, 3, 4, 3, 2, 1]
The unique element is 4.
Function Description
Complete the lonelyinteger function in the editor below.
lonelyinteger has the following parameter(s):
int a[n]: an array of integers
Returns
⚫int: the element that occurs only once
Input Format
The first line contains a single integer, n, the number of integers in the array. The second line contains n space-separated integers that describe the values in a.
Constraints
• 1 ≤ n < 100
• It is guaranteed that n is an odd number and that there is one unique element.
• 0≤a[i] < 100, where 0 ≤ i ≤ n.

### Challenge 15: Flipping Bits
You will be given a list of 32 bit unsigned integers. Flip all the bits (1→ 0 and 0 → 1) and return the result as an unsigned integer. Example
n = 910
910 = 10012. We're working with 32 bits, so:
000000000000000000000000000010012 = 910
1111
Return 4294967286.
Function Description
1111101102 = 429496728610
Complete the flippingBits function in the editor below.
flippingBits has the following parameter(s):
• int n: an integer
Returns
int: the unsigned decimal integer result
Input Format
The first line of the input contains q, the number of queries. Each of the next a lines contain an integer, n, to process.
Constraints
1 ≤ q≤ 100 0 ≤ n < 232

Sample Input
3
2147483647
1
0

Sample Output
2147483648
4294967294
4294967295

Explanation
Take 1 for example, as unsigned 32-bits is 00000000000000000000000000000001 and doing the flipping we get 11111 in turn is 4294967294.
111111110 which in turn is 4294967294.