// MP11 - Frequency Count for Column Values
// Student: Gray Allen Arizala

import java.io.*;
import java.util.*;

public class MP11_FrequencyCount {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter CSV dataset file path: ");
        String filePath = scanner.nextLine();

        System.out.print("Enter column index to analyze: ");
        int columnIndex = scanner.nextInt();

        HashMap<String, Integer> frequency = new HashMap<>();

        try {

            BufferedReader br = new BufferedReader(new FileReader(filePath));
            String line;

            while ((line = br.readLine()) != null) {

                String[] columns = line.split(",");

                if (columnIndex < columns.length) {

                    String value = columns[columnIndex];

                    frequency.put(value, frequency.getOrDefault(value, 0) + 1);
                }
            }

            br.close();

            System.out.println("\nFrequency Count:");

            for (String key : frequency.keySet()) {
                System.out.println(key + " : " + frequency.get(key));
            }

        } catch (IOException e) {
            System.out.println("Error reading dataset.");
        }
    }
}