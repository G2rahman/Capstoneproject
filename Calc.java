class Calc{
    public static void hw1(){
        int num1=80;

    System.out.println(Grade + "is a" );
        if (num1>=90)
        {
        System.out.println('A');
        }
        else if(num1>=80 && int num1<90)
        {
        System.out.println('B');
        }
        else if(num1>=70 && int num1<80)
        {
        System.out.println('C');
        }
        else if(num1>=55 && int num1<70)
        {
        System.out.println('D');
        }
        else 
        {
        System.out.println('F');
        }
    }


    public static void hw2(){
    int day=1;
    System.out.println(day);
    switch(day) {
        case 1:
            System.out.println("Monday");
        case 2:
            System.out.println("Tuesday");
        case 3:
            System.out.println("Wednesday");
        case 4:
            System.out.println("Thursday")
        case 5:
            System.out.println("Friday")
        case 6:
            System.out.println("Saturday");

        case 7:
            System.out.println("Sunday");
        default:
            System.out.println("N/A");
         }
    }

    public static void hw3(){
    int num=10;

    if (num % 2 == 1){
        System.out.println("Cool");
    }
    else if (num %2 == 0) &&  num>2 && num<5){
        System.out.println("Not Cool");
    }
    else if (num %2 == 0) &&  (num>6) && (num<20) {
        System.out.println("Cool");
    }
    else  (num %2 == 0) &&  (num>20) {
    System.out.println("Not Cool");
    }


    }

