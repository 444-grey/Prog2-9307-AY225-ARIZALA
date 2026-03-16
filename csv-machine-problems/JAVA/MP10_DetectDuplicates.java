// MP10 - Detect Duplicate Records
// Student: Gray Allen Arizala

import java.io.*;
import java.util.*;

public class MP10_DetectDuplicates {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // Ask user to input dataset file path
        System.out.print("Enter CSV dataset file path: ");
        String filePath = scanner.nextLine();

        // Set to store unique rows
        HashSet<String> uniqueRows = new HashSet<>();

        // List to store duplicates
        ArrayList<String> duplicates = new ArrayList<>();

        try {
            BufferedReader br = new BufferedReader(new FileReader(filePath));
            String line;

            // Read each row from CSV
            while ((line = br.readLine()) != null) {

                // If row already exists, it's a duplicate
                if (!uniqueRows.add(line)) {
                    duplicates.add(line);
                }
            }

            br.close();

            // Display duplicates
            System.out.println("\nDuplicate Records:");
            for (String row : duplicates) {
                System.out.println(row);
            }

            System.out.println("\nTotal duplicates found: " + duplicates.size());

        } catch (IOException e) {
            System.out.println("Error reading file.");
        }
    }
}