function randomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


module.exports = {
    randomNum: randomNum(1, 25)
};