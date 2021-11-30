import { open } from 'fs/promises';

const reportFileHandle = await open('./../assets/input', 'r');
const report = await reportFileHandle.readFile()
    .then(response => response.toLocaleString())
    .then(response => response.split("\n"))
    .then(response => response.filter(input => input.length > 0))
    .then(response => response.map(input => parseInt(input, 10)));
await reportFileHandle.close();

const combinationsPt1 = [];
report.forEach(input1 => report.forEach(input2 => {
    if (input1 !== input2) { combinationsPt1.push([input1, input2]); }
}));

const positionPt1 = combinationsPt1.findIndex(combination => combination[0] + combination[1] === 2020);

console.log(combinationsPt1[positionPt1][0] * combinationsPt1[positionPt1][1]);

// Part 2

const combinationsPt2 = [];

// Find better algorithm, that doesn't require changing code and adding loops
report.forEach(input1 => {

    report.forEach(input2 => {

        if (input1 !== input2) {

            report.forEach(input3 => {

                if (input2 !== input3 && input1 !== input3) {
                    combinationsPt2.push([input1, input2, input3]);
                }

            });

        }

    });

});

const positionPt2 = combinationsPt2.findIndex(combination => combination[0] + combination[1] + combination[2] === 2020);

console.log(combinationsPt2[positionPt2][0] * combinationsPt2[positionPt2][1] * combinationsPt2[positionPt2][2]);
