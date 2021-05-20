function randomNum(min, max) {
    return Math.random() * (max -min) + min
}

module.exports = randomNum.then(response => {