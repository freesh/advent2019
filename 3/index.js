/**
 * Advent of code 2019 2-1 and 2-2 (https://adventofcode.com/2019/day/3)
 */



const getDistance = (p1, q1, p2, q2) => { return (p2 - p1) + (q2 - q1) }

// # 2-1

// distance
console.log('Distance is :', getDistance(0, 0, 3, 3));
