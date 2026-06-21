
// calculate a compound interest 

import java.util.Scanner;

public class Main {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        double P=sc.nextDouble();
        double r=sc.nextDouble();
        int t=sc.nextInt();
        int n=sc.nextInt();
        double A=P*Math.pow((1+(double)r/n),(n*t));
        double c=A-P;
        System.out.printf("%.2f",c);
    }
}
    
    