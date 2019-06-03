var idd = 0;
var Product = /** @class */ (function () {
    function Product(name, price, total) {
        this.id = idd++;
        this.name = name;
        this.price = price;
        this.total = total;
    }
    return Product;
}());
var Cart = /** @class */ (function () {
    function Cart() {
        this.listProducts = [];
    }
    Cart.prototype.addProduct = function () {
        var inputName = document.getElementById('name').value;
        var inputPrice = parseFloat(document.getElementById('price').value);
        var inputTotal = parseFloat(document.getElementById('total').value);
        var product = new Product(inputName, inputPrice, inputTotal);
        this.listProducts.push(product);
    };
    Cart.prototype.showListProduct = function () {
        var data = '';
        var show = document.getElementById('list-product');
        for (var i = 0; i < this.listProducts.length; i++) {
            data += '<tr><td>' + this.listProducts[i].name + '</td>' +
                '<td>' + this.listProducts[i].price + '</td>' +
                '<td>' + this.listProducts[i].total + '</td>' +
                '<td><button onclick="cart.editProduct(' + i + ')" class="btn btn-dark btn-sm"  type="button">Edit</button></td>' +
                '<td><button onclick="cart.deleteProduct(' + i + ')" class="btn btn-danger btn-sm" type="button">Delete</button></td></tr>';
        }
        show.innerHTML = data;
    };
    Cart.prototype.editProduct = function (idProduct) {
        var product = this.listProducts[idProduct];
        var edit = document.getElementById('edit');
        var data = '<div class="col-12 col-md-6">\n' +
            '<div class="row">\n' +
            'name\n' +
            '<input type="text" class="col-12 col-md-12 form-control"  id="nameU" value=' + product.name + '>\n' +
            'price\n' +
            '<input type="text" class="col-12 col-md-12 form-control"  id="priceU" value=' + product.price + ' >\n' +
            'qrty\n' +
            '<input type="text" class="col-12 col-md-12 form-control"  id="totalU" value=' + product.total + '>\n' +
            '<button class="btn btn-outline-primary btn-sm" onclick="cart.updateProduct(' + product.id + ')" id="update">UPDATE</button>\n' +
            '</div>\n' +
            '</div>';
        edit.innerHTML = data;
    };
    Cart.prototype.updateProduct = function (idProduct) {
        var inputName = document.getElementById('nameU').value;
        var inputPrice = parseFloat(document.getElementById('priceU').value);
        var inputTotal = parseFloat(document.getElementById('totalU').value);
        var product = new Product(inputName, inputPrice, inputTotal);
        this.listProducts[idProduct] = product;
        this.showListProduct();
    };
    Cart.prototype.deleteProduct = function (index) {
        if (index > -1) {
            this.listProducts.splice(index, 1);
        }
        this.showListProduct();
    };
    return Cart;
}());
var cart = new Cart();
var addFood = document.getElementById("add").addEventListener("click", function () {
    cart.addProduct();
    cart.showListProduct();
});
