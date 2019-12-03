/**
 * Advent of code 2019 2-1 and 2-2 (https://adventofcode.com/2019/day/3)
 */



const drawVector = vector => {
    vector.forEach(line => {
        let row = '';
        line.forEach(point => {
            row += point + ' ';
        });
        console.log(row);
    });
    return '';
}

const getDistance = (p1, q1, p2, q2) => { return (p2 - p1) + (q2 - q1) }

// # 2-1

// draw vector
console.log(drawVector([
    ['.', '0', '-', '+', '.'],
    ['.', '.', '.', '|', '.'],
    ['.', '.', '.', '|', '.'],
    ['.', '.', '.', '|', '.'],
    ['.', '.', '-', '+', '.'],
    ['.', '.', '.', '.', '.']
]));

// distance
console.log('Distance is :', getDistance(0, 0, 3, 3));
