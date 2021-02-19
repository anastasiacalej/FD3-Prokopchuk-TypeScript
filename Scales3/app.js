var Scales = /** @class */ (function () {
    function Scales(_SE) {
        this.SE = null;
        this.SE = _SE;
    }
    Scales.prototype.getSumScale = function () {
        var SumScale = 0;
        for (var i = 0; i < this.SE.getCount(); i++) {
            SumScale += this.SE.getItem(i).getScale();
        }
        return SumScale;
    };
    Scales.prototype.getNameList = function () {
        var listProd = [];
        for (var i = 0; i < this.SE.getCount(); i++) {
            listProd.push(this.SE.getItem(i).getName());
        }
        return listProd;
    };
    return Scales;
}());
var StorageEngineArray = /** @class */ (function () {
    function StorageEngineArray() {
        this.products = [];
    }
    StorageEngineArray.prototype.addItem = function (item) { this.products.push(item); };
    ;
    StorageEngineArray.prototype.getItem = function (index) { return this.products[index]; };
    ;
    StorageEngineArray.prototype.getCount = function () { return this.products.length; };
    ;
    return StorageEngineArray;
}());
var StorageEngineLocalStorage = /** @class */ (function () {
    function StorageEngineLocalStorage() {
        this.keyLocalStorage = "products";
    }
    StorageEngineLocalStorage.prototype.addItem = function (item) {
        this.products = localStorage[this.keyLocalStorage] ? JSON.parse(localStorage[this.keyLocalStorage]) : [];
        this.products.push(item);
        localStorage[this.keyLocalStorage] = JSON.stringify(this.products);
    };
    ;
    StorageEngineLocalStorage.prototype.getItem = function (index) { return new Product(this.products[index]['name'], this.products[index]['scale']); };
    ;
    StorageEngineLocalStorage.prototype.getCount = function () { return this.products.length; };
    ;
    return StorageEngineLocalStorage;
}());
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getScale = function () {
        return this.scale;
    };
    return Product;
}());
//StorageEngineArray
var SE = new StorageEngineArray;
var scalesArray = new Scales(SE);
var apple1 = new Product("яблоко Грушевидное", 500);
var apple2 = new Product("яблоко Ананасовое", 350);
var apple3 = new Product("яблоко Зимнее", 450);
var apple4 = new Product("яблоко Жизель", 400);
var tomato1 = new Product("помидор Бычье сердце", 600);
var tomato2 = new Product("помидор Первоклашка", 250);
var tomato3 = new Product("помидор Кенигсберг", 200);
var tomato4 = new Product("помидор Урожайный", 200);
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
var SELS = new StorageEngineLocalStorage;
var scalesLS = new Scales(SELS);
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
//# sourceMappingURL=app.js.map