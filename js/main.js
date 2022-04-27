function cubeChecker(num, side){
    if(num <=0 || side <= 0) return false
    return Math.cbrt(num) === side
}

document.write(cubeChecker(8, 2))
document.write(cubeChecker(12, 44))
document.write(cubeChecker(2348, 32))
document.write(cubeChecker(2348, -32))