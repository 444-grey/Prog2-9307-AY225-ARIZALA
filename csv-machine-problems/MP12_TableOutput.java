// MP12 - Display Dataset in Formatted Table Output
// Student: Gray Allen Arizala

import java.io.*;
import java.util.*;

public class MP12_TableOutput {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter CSV dataset file path: ");
        String filePath = scanner.nextLine();

        try {

            BufferedReader br = new BufferedReader(new FileReader(filePath));
            String line;

            System.out.println("\nFormatted Table Output:\n");

            while ((line = br.readLine()) != null) {

                String[] columns = line.split(",");

                for (String column : columns) {

                    // Print columns with fixed spacing
                    System.out.printf("%-20s", column);
                }

                System.out.println();
            }

            br.close();

        } catch (IOException e) {
            System.out.println("Error reading dataset.");
        }
    }
}