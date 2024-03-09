class Array {
    constructor(...nums) {
        this.nums = nums;
    }

    toArray() {
        return this.nums;
    }

    push(...nums) {
        this.nums.push(...nums);
    }
}

module.exports = Array;