function sendSum(num1, num2, name, isWithName) {
    return isWithName ? "hi ".concat(name, " sum is ").concat(num1 + num2) : 'not valid..!!';
}
console.log(sendSum(10, 20, "isuru", true));
console.log(sendSum(10, 20, "isuru", false));
