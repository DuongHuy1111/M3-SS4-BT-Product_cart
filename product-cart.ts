let idd: number = 0;

class Product {
    id: number = idd++;
    name: string;
    price: number;
    total: number;

    constructor(name: string, price: number, total: number) {
        this.name = name;
        this.price = price;
        this.total = total;
    }
}

class Cart {
    listProducts: Array<any>;

    constructor() {
        this.listProducts = [];
    }



    addProduct(): any {

        let inputName: string = (<HTMLInputElement>document.getElementById('name')).value;
        let inputPrice: number = parseFloat((<HTMLInputElement>document.getElementById('price')).value);
        let inputTotal: number = parseFloat((<HTMLInputElement>document.getElementById('total')).value);
        let product = new Product(inputName, inputPrice, inputTotal);
        this.listProducts.push(product);

    }

    showListProduct() {
        let data: any = '';
        let show: any = (<HTMLInputElement>document.getElementById('list-product'));
        for (let i = 0; i < this.listProducts.length; i++) {
            data += '<tr><td>' + this.listProducts[i].name + '</td>' +
                '<td>' + this.listProducts[i].price + '</td>' +
                '<td>' + this.listProducts[i].total + '</td>' +
                '<td><button onclick="cart.editProduct(' + i + ')" class="btn btn-dark btn-sm"  type="button">Edit</button></td>' +
                '<td><button onclick="cart.deleteProduct(' + i + ')" class="btn btn-danger btn-sm" type="button">Delete</button></td></tr>'
        }

        show.innerHTML = data;
    }

    editProduct(idProduct: number): any {
        let product = this.listProducts[idProduct];
        let edit: any = (<HTMLInputElement>document.getElementById('edit'));

        let data: any = '<div class="col-12 col-md-6">\n' +
            '<div class="row">\n' +
            'name\n' +
            '<input type="text" class="col-12 col-md-12 form-control"  id="nameU" value=' + product.name + '>\n' +
            'price\n' +
            '<input type="text" class="col-12 col-md-12 form-control"  id="priceU" value=' + product.price + ' >\n' +
            'qrty\n' +
            '<input type="text" class="col-12 col-md-12 form-control"  id="totalU" value=' + product.total + '>\n' +
            '<button class="btn btn-primary btn-sm" onclick="cart.updateProduct(' + product.id + ')" id="update">UPDATE</button>\n' +
            '</div>\n' +
            '</div>'
        edit.innerHTML = data;
    }

    updateProduct(idProduct: number): any {
        let inputName: string = (<HTMLInputElement>document.getElementById('nameU')).value;
        let inputPrice: number = parseFloat((<HTMLInputElement>document.getElementById('priceU')).value);
        let inputTotal: number = parseFloat((<HTMLInputElement>document.getElementById('totalU')).value);
        let product = new Product(inputName, inputPrice, inputTotal);
        this.listProducts[idProduct] = product;
        this.showListProduct();
    }

    deleteProduct(index: number): any {
        if (index > -1) {
            this.listProducts.splice(index, 1);
        }
        this.showListProduct();
    }


}

let cart = new Cart();
let addFood = document.getElementById("add").addEventListener("click", () => {
    cart.addProduct();
    cart.showListProduct();
});





