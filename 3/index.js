/**
 * Advent of code 2019 2-1 and 2-2 (https://adventofcode.com/2019/day/3)
 */

const createVector = coordinates => { 

    const cols = 6;
    const rows = 6

    let vector = [
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '+', '-', '-', '-', '-', '-', '+', '.', '.', '.'],
        ['.', '|', '.', '.', '.', '.', '.', '|', '.', '.', '.'],
        ['.', '|', '.', '.', '+', '-', '-', 'X', '-', '+', '.'],
        ['.', '|', '.', '.', '|', '.', '.', '|', '.', '|', '.'],
        ['.', '|', '.', '-', 'X', '-', '-', '+', '.', '|', '.'],
        ['.', '|', '.', '.', '|', '.', '.', '.', '.', '|', '.'],
        ['.', '|', '.', '.', '.', '.', '.', '.', '.', '|', '.'],
        ['.', 'o', '-', '-', '-', '-', '-', '-', '-', '+', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
    ]


    return vector;
 }


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

const getCrossingPoints = vector => [[3, 3],[5, 6]]

const getDistance = (p1, p2) => { return (p2[0] - p1[0]) + (p2[1] - p1[0]) }

const getNearestCrossingPoint = vector => {
    const points = getCrossingPoints(vector);
    let distances = [];
    
    points.forEach(point => {
        distances.push(getDistance([0, 0], point));
    });

    return Math.min(...distances);
}
// # 2-1

const vector = createVector();

// draw vector
console.log(drawVector(vector));

// distance
console.log('Distance is :', getNearestCrossingPoint(vector));
