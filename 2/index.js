/**
 * Advent of code 2019 2-1 and 2-2 (https://adventofcode.com/2019/day/2)
 */


const getOpCode = (arr, pos) => {
    return arr[pos];
};

const oc1 = (arr, pos) => {
    arr[arr[pos + 3]] = arr[arr[pos + 1]] + arr[arr[pos + 2]];
    return arr;
};

const oc2 = (arr, pos) => {
    arr[arr[pos + 3]] = arr[arr[pos + 1]] * arr[arr[pos + 2]];
    return arr;
};

const execute = prog => {
    let codeArray = prog.map(val => parseInt(val));
    let pos = 0;
    
    while(pos < codeArray.length) {
        const opCode = getOpCode(codeArray, pos);

        switch (opCode) {
            case 1:
                codeArray = oc1(codeArray, pos);
                break;
            case 2:
                codeArray = oc2(codeArray, pos);
                break;
            case 99:
                return codeArray;
            default:
                console.log('op code ' + opCode + ' not found!');
                return null;
        }
        pos += 4;
    }
    return codeArray;
}


const getNounVerb = (prog, output) => {
    for (let i1 = 0; i1 <= 99; i1++) {
        prog[1] = i1;

        for (let i2 = 0; i2 <= 99; i2++) {
            prog[2] = i2;
            if (output === execute(prog)[0]) {
                return (i1 < 10 ? '0' + i1 : i1) + '' + (i2 < 10 ? '0' + i2 : i2);
            }
        }
    }

    return null;
}

// 2-1
const code = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,2,9,19,23,2,13,23,27,1,6,27,31,2,6,31,35,2,13,35,39,1,39,10,43,2,43,13,47,1,9,47,51,1,51,13,55,1,55,13,59,2,59,13,63,1,63,6,67,2,6,67,71,1,5,71,75,2,6,75,79,1,5,79,83,2,83,6,87,1,5,87,91,1,6,91,95,2,95,6,99,1,5,99,103,1,6,103,107,1,107,2,111,1,111,5,0,99,2,14,0,0];
console.log('Code on pos 0: ', execute(code)[0]);

// 2-2
const searchOutput = 19690720;
console.log('Noun Verb of ' + searchOutput + ': ', getNounVerb(code, searchOutput));
