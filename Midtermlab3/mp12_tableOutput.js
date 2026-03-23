// MP12 - Display Dataset in Formatted Table Output
// Student: Gray Allen Arizala

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter CSV dataset file path: ", function(filePath) {

    try {

        const data = fs.readFileSync(filePath, 'utf8');
        const rows = data.split('\n');

        console.log("\nFormatted Table Output:\n");

        rows.forEach(row => {

            const columns = row.split(",");

            let formattedRow = "";

            columns.forEach(col => {
                formattedRow += col.padEnd(20, " ");
            });

            console.log(formattedRow);

        });

    } catch (error) {
        console.log("Error reading dataset.");
    }

    rl.close();

});