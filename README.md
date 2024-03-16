# hackerRank-challenge
HackerRank challenge with JavaScript

## Challenge 1: Sock Merchant

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

## Challenge 2: Counting Valleys

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

## Challenge 3: Jumping on the Clouds

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