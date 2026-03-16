import java.time.LocalDate;

public class Sale {
    LocalDate date;
    double amount;

    public Sale(LocalDate date, double amount) {
        this.date = date;
        this.amount = amount;
    }
}