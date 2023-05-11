// https://leetcode.com/problems/uncrossed-lines/

function maxUncrossedLines(nums1: number[], nums2: number[]): number {
  const n = nums1.length,
        m = nums2.length;

  const dp: number[][] = Array.from({ length: n + 1}, () => Array(m + 1).fill(0))

  for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
          if (nums1[i - 1] === nums2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
          else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
  }

  return dp[n][m];
};