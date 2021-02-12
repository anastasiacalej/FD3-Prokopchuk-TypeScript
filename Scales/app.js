var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (product) {
        this.products.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var SumScale = 0; //произойдет автотипизация
        this.products.forEach(function (product) { SumScale += product.scale; });
        console.log('Суммарный вес всех продуктов: ' + SumScale);
    };
    Scales.prototype.getNameList = function () {
        var listProd = this.products.map(function (product) { return product.name; }); //произойдет автотипизация к типу Array<string>
        console.log(listProd);
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product() {
        this.name = '';
        this.scale = 0;
    }
    Product.prototype.getName = function (_name) {
        this.name = _name;
    };
    Product.prototype.getScale = function (_scale) {
        this.scale = _scale;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _scale) {
        var _this = _super.call(this) || this;
        _this.name = 'яблоко ' + _name;
        _this.scale = _scale;
        return _this;
    }
    Apple.prototype.getName = function () {
        _super.prototype.getName.call(this, this.name);
    };
    Apple.prototype.getScale = function () {
        _super.prototype.getScale.call(this, this.scale);
    };
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_name, _scale) {
        var _this = _super.call(this) || this;
        _this.name = 'помидор ' + _name;
        _this.scale = _scale;
        return _this;
    }
    Tomato.prototype.getName = function () {
        _super.prototype.getName.call(this, this.name);
    };
    Tomato.prototype.getScale = function () {
        _super.prototype.getScale.call(this, this.scale);
    };
    return Tomato;
}(Product));
var scales = new Scales();
var apple1 = new Apple("Грушевидное", 500);
var apple2 = new Apple("Ананасовое", 350);
var apple3 = new Apple("Зимнее", 450);
var apple4 = new Apple("Жизель", 400);
var tomato1 = new Tomato("Бычье сердце", 600);
var tomato2 = new Tomato("Первоклашка", 250);
var tomato3 = new Tomato("Кенигсберг", 200);
var tomato4 = new Tomato("Урожайный", 200);
scales.add(apple1);
scales.add(apple2);
scales.add(apple3);
scales.add(apple4);
scales.add(tomato1);
scales.add(tomato2);
scales.add(tomato3);
scales.add(tomato4);
scales.getSumScale();
console.log('Проверка: ' +
    (apple1.scale + apple2.scale + apple3.scale + apple4.scale + tomato1.scale + tomato2.scale + tomato3.scale + tomato4.scale));
scales.getNameList();
//# sourceMappingURL=app.js.map