//1.
function getOtosLotteryNumbers() {
    const numbers = new Set();
    while (numbers.size < 5) {
        const randomNum = Math.floor(Math.random() * 90) + 1;
        numbers.add(randomNum);
    }
    return Array.from(numbers);
}

//2.
function getSortedLotteryNumbers(arr) {
    return arr.slice().sort((a, b) => a - b);
}

//3.
function getNumberOfHits(lottoNumbers, tips) {
    const lottoSet = new Set(lottoNumbers);
    return tips.filter(num => lottoSet.has(num)).length;
}

//4.
function getMonthlyLotteryArrayNumbers() {
    const monthlyNumbers = [];
    for (let i = 0; i < 4; i++) {
        monthlyNumbers.push(getOtosLotteryNumbers());
    }
    return monthlyNumbers;
}

//5.
function getUniqueNumbersFromMonthlyLottery(monthlyNumbers) {
    const uniqueNumbers = new Set();
    monthlyNumbers.forEach(week => {
        week.forEach(num => uniqueNumbers.add(num));
    });
    return Array.from(uniqueNumbers);
}

// 6.
function monthlyStatistics(monthlyNumbers) {
    const numberCount = {};
    monthlyNumbers.forEach(week => {
        week.forEach(num => {
            numberCount[num] = (numberCount[num] || 0) + 1;
        });
    });
    return Object.entries(numberCount).map(([num, count]) => [parseInt(num), count]);
}

const monthlyLottery = getMonthlyLotteryArrayNumbers();
console.log("Havi lottószámok:", monthlyLottery);
console.log("Egyedi számok:", getUniqueNumbersFromMonthlyLottery(monthlyLottery));
console.log("Havi statisztika:", monthlyStatistics(monthlyLottery));
