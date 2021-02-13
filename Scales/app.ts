
class Scales {

    products:Array<Product>;

    constructor() {
        this.products=[]; 
    }

    add(product:Product):void {
        this.products.push(product);
    }

    getSumScale ():number {
        var SumScale:number=0;
        this.products.forEach ((product:Product):void => {SumScale+=product.getScale()});
        return SumScale;
    }

    getNameList ():Array<string> {    
        let listProd:Array<string> = this.products.map ((product:Product):string => product.getName());
        return listProd; 
    }  
}


class Product {

    name:string;

    scale:number;

    constructor(_name:string,_scale:number) {
        this.name=_name;
        this.scale=_scale; 
    }

    getName():string {
       return this.name;
    }

    getScale():number {
       return this.scale;
    }
}


class Apple extends Product {
 
    constructor(_name:string,_scale:number) {
        super(('яблоко "'+ _name+'"'),_scale); 
    }

}

class Tomato extends Product {
   
    constructor(_name:string,_scale:number) {
        super(('помидор "'+ _name+'"'),_scale); 
    }
}

let scales:Scales=new Scales();

let apple1:Apple=new Apple("Грушевидное",500);
let apple2:Apple=new Apple("Ананасовое",350);
let apple3:Apple=new Apple("Зимнее",450);
let apple4:Apple=new Apple("Жизель",400);

let tomato1:Tomato=new Tomato("Бычье сердце",600);
let tomato2:Tomato=new Tomato("Первоклашка",250);
let tomato3:Tomato=new Tomato("Кенигсберг",200);
let tomato4:Tomato=new Tomato("Урожайный",200);

scales.add(apple1);
scales.add(apple2);
scales.add(apple3);
scales.add(apple4);
scales.add(tomato1);
scales.add(tomato2);
scales.add(tomato3);
scales.add(tomato4);

console.log(scales.getSumScale());

console.log('Проверка: '+
(apple1.scale+apple2.scale+apple3.scale+apple4.scale+tomato1.scale+tomato2.scale+tomato3.scale+tomato4.scale));

console.log(scales.getNameList());