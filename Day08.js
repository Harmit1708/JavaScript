1.	Write a “person” class to hold all the details.

      class Person {
        constructor(name, age, height, weight) {
          this.name = name;.	    
          this.age = age;
          this.height = height;
          this.weight = weight;
          console.log(this.name, this.age, this.height, this.weight);
        }
      }
      let Person1 = new Person("Harmit", 21, 5.8, 60);

Output:
Harmit 21 5.8 60

2. write a class to calculate uber price.
	

    class Uber {
      constructor(km,price){
        this.km = km;
        this.price = price;
      }
      getCal(){
        return this.km * this.price;
      }
    }

    let Uber1 = new Uber(15,10);
    console.log(Uber1.getCal());

Output:
150
