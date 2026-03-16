/**
 * =====================================================
 * Student Name    : Gray Allen Arizala
 * Course          : Math 101 — Linear Algebra
 * Assignment      : Programming Assignment 1 — 3x3 Matrix Determinant Solver
 * School          : University of Perpetual Help System DALTA, Molino Campus
 * Date            : March 16, 2026
 * GitHub Repo     : https://github.com/uphsd-cs-arizala-grayallen
 * =====================================================
 */

const matrix = [
    [5,2,1],
    [3,4,2],
    [1,2,3]
];

function printMatrix(m){
    console.log("┌               ┐");
    m.forEach(row=>{
        console.log(`│  ${row[0]}   ${row[1]}   ${row[2]}  │`);
    });
    console.log("└               ┘");
}

function computeMinor(a,b,c,d){
    return (a*d)-(b*c);
}

function solveDeterminant(m){

    const line = "=".repeat(52);

    console.log(line);
    console.log("3x3 MATRIX DETERMINANT SOLVER");
    console.log("Student: Gray Allen Arizala");
    console.log(line);

    printMatrix(m);

    console.log(line);
    console.log("\nExpanding along Row 1\n");

    const minor11 = computeMinor(m[1][1],m[1][2],m[2][1],m[2][2]);
    console.log(`Step 1 — Minor M11: (${m[1][1]}×${m[2][2]}) - (${m[1][2]}×${m[2][1]}) = ${minor11}`);

    const minor12 = computeMinor(m[1][0],m[1][2],m[2][0],m[2][2]);
    console.log(`Step 2 — Minor M12: (${m[1][0]}×${m[2][2]}) - (${m[1][2]}×${m[2][0]}) = ${minor12}`);

    const minor13 = computeMinor(m[1][0],m[1][1],m[2][0],m[2][1]);
    console.log(`Step 3 — Minor M13: (${m[1][0]}×${m[2][1]}) - (${m[1][1]}×${m[2][0]}) = ${minor13}`);

    const c11 = m[0][0]*minor11;
    const c12 = -m[0][1]*minor12;
    const c13 = m[0][2]*minor13;

    console.log();
    console.log(`Cofactor C11 = +${m[0][0]}×${minor11} = ${c11}`);
    console.log(`Cofactor C12 = -${m[0][1]}×${minor12} = ${c12}`);
    console.log(`Cofactor C13 = +${m[0][2]}×${minor13} = ${c13}`);

    const det = c11+c12+c13;

    console.log(`\n det(M) = ${c11} + (${c12}) + ${c13}`);

    console.log(line);
    console.log(`✓ DETERMINANT = ${det}`);

    if(det===0){
        console.log("The matrix is SINGULAR — it has no inverse.");
    }

    console.log(line);
}

solveDeterminant(matrix);