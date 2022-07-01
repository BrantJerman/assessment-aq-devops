let array1 = [3,23,56,32,8,67,78]

function shuffleArray(array) {
    let arrCopy = [...array]
    for (let i = arrCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
    }
    return arrCopy
}
console.log(shuffleArray(array1))



module.exports = {
    shuffleArray
}