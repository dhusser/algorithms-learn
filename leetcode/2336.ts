// https://leetcode.com/problems/smallest-number-in-infinite-set/

class SmallestInfiniteSet {
  private nums: Set<number>;
  private tmp: Set<number>;

  constructor() {
    this.nums = new Set([...Array(1001).keys()].map(i => i + 1));
    this.tmp = new Set();
  }

  public popSmallest(): number {
    const min = Math.min(...this.nums);
    this.nums.delete(min);
    return min;
  }

  public addBack(num: number): void {
    if (this.tmp.has(num)) {
      this.tmp.delete(num);
      this.nums.add(num);
    } else {
      this.nums.add(num);
    }
  }
}


/**
* Your SmallestInfiniteSet object will be instantiated and called as such:
* var obj = new SmallestInfiniteSet()
* var param_1 = obj.popSmallest()
* obj.addBack(num)
*/