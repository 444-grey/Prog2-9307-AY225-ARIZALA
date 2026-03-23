// MP10 - Detect Duplicate Records
// Student: Gray Allen Arizala

const fs = require('fs');
const readline = require('readline');

// Create interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask user for dataset file path
rl.question("Enter CSV dataset file path: ", function(filePath) {

    try {

        const data = fs.readFileSync(filePath, 'utf8');

        // Split rows
        const rows = data.split('\n');

        const unique = new Set();
        const duplicates = [];

        rows.forEach(row => {

            if (unique.has(row)) {
                duplicates.push(row);
            } else {
                unique.add(row);
            }

        });

        console.log("\nDuplicate Records:");
        duplicates.forEach(d => console.log(d));

        console.log("\nTotal duplicates:", duplicates.length);

    } catch (error) {
        console.log("Error reading file.");
    }

    rl.close();

});