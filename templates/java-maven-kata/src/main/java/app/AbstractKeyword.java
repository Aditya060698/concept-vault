package app;
//
abstract class Car {
    public abstract void drive();
    public abstract void fly();

    public void playMusic(){
        System.out.println("play music");
    }
    
}
abstract class WagonR extends Car{
    public void drive(){
        System.out.println("Driving");
    }
}
class UpdatedWagonR extends Car{
    public void drive(){
        System.out.println("Driving");
    }

    @Override
    public void fly() {
        System.out.println("flying"); 
    }
}
public class AbstractKeyword {

    public static void main(String[] args) {
        // Car Obj=new Car();
        // Car Obj=new WagonR();
         Car Obj=new UpdatedWagonR(); 

        Obj.drive();
        Obj.playMusic();
        Obj.fly();
    }
}