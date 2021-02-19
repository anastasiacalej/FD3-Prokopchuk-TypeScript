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
var Apple = /** @class */ (function () {
    function Apple(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Apple.prototype.getName = function () {
        return "\u044F\u0431\u043B\u043E\u043A\u043E " + this.name;
    };
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Tomato.prototype.getName = function () {
        return "\u043F\u043E\u043C\u0438\u0434\u043E\u0440 " + this.name;
    };
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    return Tomato;
}());
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