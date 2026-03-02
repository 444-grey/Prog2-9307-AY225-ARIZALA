import java.time.*;
import java.util.*;

public class MonthlyPerformanceAnalyzer {

    // Sale class INSIDE the main class
    static class Sale {
        LocalDate date;
        double amount;

        public Sale(LocalDate date, double amount) {
            this.date = date;
            this.amount = amount;
        }
    }

    public static void main(String[] args) {

        List<Sale> sales = Arrays.asList(
                new Sale(LocalDate.of(2026, 1, 10), 5000),
                new Sale(LocalDate.of(2026, 1, 15), 7000),
                new Sale(LocalDate.of(2026, 2, 5), 9000),
                new Sale(LocalDate.of(2026, 3, 12), 4000),
                new Sale(LocalDate.of(2026, 2, 20), 3000));

        Map<Month, Double> monthlyTotals = new TreeMap<>();

        for (Sale sale : sales) {
            Month month = sale.date.getMonth();
            monthlyTotals.put(month,
                    monthlyTotals.getOrDefault(month, 0.0) + sale.amount);
        }

        System.out.println("Monthly Sales Summary:");
        for (Map.Entry<Month, Double> entry : monthlyTotals.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        Month bestMonth = null;
        double maxSales = 0;

        for (Map.Entry<Month, Double> entry : monthlyTotals.entrySet()) {
            if (entry.getValue() > maxSales) {
                maxSales = entry.getValue();
                bestMonth = entry.getKey();
            }
        }

        System.out.println("\nBest Performing Month: "
                + bestMonth + " (" + maxSales + ")");
    }
}