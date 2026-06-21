import java.util.Scanner;

public class  swap_of_two_number_without_3variable {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter first number (a): ");
        int a = scanner.nextInt();
        
        System.out.print("Enter second number (b): ");
        int b = scanner.nextInt();
        
        System.out.println("\nBefore swap: a = " + a + ", b = " + b);
        
        // Swap without using third variable
        a = a + b;
        b = a - b;
        a = a - b;
        
        System.out.println("After swap: a = " + a + ", b = " + b);
        scanner.close();
    }
}