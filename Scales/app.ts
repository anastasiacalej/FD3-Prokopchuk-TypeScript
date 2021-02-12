
class Scales {

    products:Array<Product>;

    constructor() {
        this.products=[]; 
    }

    add(product:Product):void {
        this.products.push(product);
    }

    getSumScale ():void {
        var SumScale=0;//произойдет автотипизация
        this.products.forEach ((product:Product):void => {SumScale+=product.scale});
        console.log('Суммарный вес всех продуктов: '+SumScale);
    }

    getNameList ():void {    
        let listProd=this.products.map ((product:Product):string => product.name);//произойдет автотипизация к типу Array<string>
        console.log(listProd);
    }  
}


class Product {

    name:string;

    scale:number;

    constructor() {
        this.name='';
        this.scale=0; 
    }

    getName(_name:string):void {
       this.name=_name;
    }

    getScale(_scale:number):void {
       this.scale=_scale;
    }
}


class Apple extends Product {

    name:string;

    scale:number;
   
    constructor(_name:string,_scale:number) {
        super(); 
        this.name='яблоко '+ _name;
        this.scale=_scale; 
    }

    getName():void {
        super.getName(this.name);
    }

    getScale():void {
        super.getScale(this.scale);
    }    
}

class Tomato extends Product {
    
    name:string;

    scale:number;
   
    constructor(_name:string,_scale:number) {
        super(); 
        this.name='помидор '+_name;
        this.scale=_scale; 
    }

    getName():void {
        super.getName(this.name);
    }

    getScale():void {
        super.getScale(this.scale);
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

scales.getSumScale();

console.log('Проверка: '+
(apple1.scale+apple2.scale+apple3.scale+apple4.scale+tomato1.scale+tomato2.scale+tomato3.scale+tomato4.scale));

scales.getNameList();