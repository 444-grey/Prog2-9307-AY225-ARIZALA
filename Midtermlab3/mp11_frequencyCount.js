// MP11 - Frequency Count for Column Values
// Student: Gray Allen Arizala

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter CSV dataset file path: ", function(filePath) {

    rl.question("Enter column index: ", function(columnIndex) {

        try {

            const data = fs.readFileSync(filePath, 'utf8');
            const rows = data.split('\n');

            const frequency = {};

            rows.forEach(row => {

                const columns = row.split(",");

                if (columnIndex < columns.length) {

                    const value = columns[columnIndex];

                    frequency[value] = (frequency[value] || 0) + 1;

                }

            });

            console.log("\nFrequency Count:");

            for (const key in frequency) {
                console.log(key + " : " + frequency[key]);
            }

        } catch (error) {
            console.log("Error reading dataset.");
        }

        rl.close();

    });

});