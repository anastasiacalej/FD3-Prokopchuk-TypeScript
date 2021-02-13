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
        var SumScale = 0;
        this.products.forEach(function (product) { SumScale += product.getScale(); });
        return SumScale;
    };
    Scales.prototype.getNameList = function () {
        var listProd = this.products.map(function (product) { return product.getName(); });
        return listProd;
    };
    return Scales;
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
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _scale) {
        return _super.call(this, ('яблоко "' + _name + '"'), _scale) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_name, _scale) {
        return _super.call(this, ('помидор "' + _name + '"'), _scale) || this;
    }
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
console.log(scales.getSumScale());
console.log('Проверка: ' +
    (apple1.scale + apple2.scale + apple3.scale + apple4.scale + tomato1.scale + tomato2.scale + tomato3.scale + tomato4.scale));
console.log(scales.getNameList());
//# sourceMappingURL=app.js.map