import java.util.Scanner;

public class Recur_palindrome {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("NUM : ");
        int num = in.nextInt();
        if(num==check(num))
            System.out.println(num);
        else
            System.out.println(Recur_pal(num));
    }

    public static int Recur_pal(int num) {
        int sum;
        int num1_rev = check(num);
        sum = num +num1_rev;
        if(sum==check(sum))
            return sum;
        else
            return Recur_pal(sum);
    }
    public static int check(int num){
        StringBuilder s = new StringBuilder().append(num).reverse();
        return Integer.parseInt(String.valueOf(s));
    }
}
