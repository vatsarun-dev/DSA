
// calculate a compound interest 

import java.util.Scanner;

public class Main {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter Principal (P): ");
        double P = sc.nextDouble();
        
        System.out.print("Enter Rate (r) as decimal (e.g., 0.05 for 5%): ");
        double r = sc.nextDouble();
        
        System.out.print("Enter Time (t) in years: ");
        int t = sc.nextInt();
        
        System.out.print("Enter Compounding periods per year (n): ");
        int n = sc.nextInt();
        
        double A = P * Math.pow((1 + (double)r / n), (n * t));
        double c = A - P;
        
        System.out.printf("Compound Interest: %.2f%n", c);
        sc.close();
    }
}
    
    