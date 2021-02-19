interface IStorageEngine{
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
}

class Scales<StorageEngine extends IStorageEngine> {

    SE:StorageEngine=null;

    constructor(_SE:StorageEngine) {
        this.SE=_SE; 
    }

    getSumScale ():number {
        var SumScale:number=0;
        for(var i=0;i<this.SE.getCount();i++){
            SumScale+=this.SE.getItem(i).getScale();
        }
        return SumScale;
    }

    getNameList ():Array<string> {    
        let listProd:Array<string> = [];
        for(var i=0;i<this.SE.getCount();i++){
            listProd.push(this.SE.getItem(i).getName());
        }
        return listProd; 
    }  
}

class StorageEngineArray implements IStorageEngine{
    products:Array<Product>=[];
    addItem(item:Product):void{this.products.push(item)};
    getItem(index:number):Product{return this.products[index]};
    getCount():number{return this.products.length};
}

class StorageEngineLocalStorage implements IStorageEngine{
    keyLocalStorage:string="products";
    products:Array<Product>;
    addItem(item:Product):void{this.products=localStorage[this.keyLocalStorage]?JSON.parse(localStorage[this.keyLocalStorage]):[]; 
                               this.products.push(item);
                               localStorage[this.keyLocalStorage]=JSON.stringify(this.products);
                              };
    getItem(index:number):Product{return new Product(this.products[index]['name'],this.products[index]['scale'])};
    getCount():number{return this.products.length};
}

class Product{

    private name:string;

    private scale:number;

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

//StorageEngineArray
let SE=new StorageEngineArray;
let scalesArray=new Scales<StorageEngineArray>(SE);

let apple1:Product=new Product("яблоко Грушевидное",500);
let apple2:Product=new Product("яблоко Ананасовое",350);
let apple3:Product=new Product("яблоко Зимнее",450);
let apple4:Product=new Product("яблоко Жизель",400);

let tomato1:Product=new Product("помидор Бычье сердце",600);
let tomato2:Product=new Product("помидор Первоклашка",250);
let tomato3:Product=new Product("помидор Кенигсберг",200);
let tomato4:Product=new Product("помидор Урожайный",200);

SE.addItem(apple1);
SE.addItem(apple2);
SE.addItem(apple3);
SE.addItem(apple4);
SE.addItem(tomato1);
SE.addItem(tomato2);
SE.addItem(tomato3);
SE.addItem(tomato4);

console.log(scalesArray.getSumScale());

console.log(scalesArray.getNameList());


//StorageEngineLocalStorage
let SELS=new StorageEngineLocalStorage;
let scalesLS=new Scales<StorageEngineLocalStorage>(SELS);

SELS.addItem(apple1);
SELS.addItem(apple2);
SELS.addItem(apple3);
SELS.addItem(apple4);
SELS.addItem(tomato1);
SELS.addItem(tomato2);
SELS.addItem(tomato3);
SELS.addItem(tomato4);

console.log(scalesLS.getSumScale());

console.log(scalesLS.getNameList());