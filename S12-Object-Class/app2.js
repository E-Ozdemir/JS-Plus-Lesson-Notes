//parent class
class Person{
    constructor(firstName,lastName,birthYear){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.employment = "";
    }

    selamla(){
        console.log(`Merhaba ${this.firstName} ${this.lastName}`);
    }

}
//child class
class Student extends Person{
    constructor(firstName,lastName,bY){
        console.log('Initializing student object');
        super(firstName,lastName,bY);//super ile miras aliyoruz ama degerler undefined...
        this.employment = 'Student';
    }
    selamla(){ //parent daki selamlama yerine bunu calistiracak. burda varmi diye bakar yoksa extend edilen sinif icerisine bakar orda varsa onu calistirir.
        console.log('I am a Student');
    }

}
//teacher
class Teacher extends Person{

}
let emre = new Student('Emre','Özdemir',1989);
emre.selamla();