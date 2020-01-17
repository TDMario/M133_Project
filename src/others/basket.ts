export class basket {
    private products = [];

    constructor() {}

    public addProduct(newProduct) : void {
        newProduct.amount++;
        if(this.products.find(p => p.id === newProduct.id) === null){
            this.products.push(newProduct);
        }
    }

    public decreasedProduct(decreasedProduct) : void {
        const currentProduct = this.products.find(p => p.id === decreasedProduct);
        if(currentProduct != null){
            if(currentProduct.amount >= 1){
                currentProduct.amount--;
            }else{
                this.deleteProduct(currentProduct);
            }
            
        }
    }

    public deleteProduct(delteableProductId) : void {
        const currentProductIndex =this.products.findIndex(p => p.id === delteableProductId);
        this.products.splice(currentProductIndex, 1);
    }

    public getSize() : Number {
        return this.products.length;
    }

    public getTotal() : Number {
        let cost = 0;
        this.products.forEach(function (value){
            if(value.specialOffer === null){
                cost = cost + ( value.specialOffer * value.amount );
            }else{
                cost = cost + (value.normalPrice * value.amount )
            }
        })
        return cost;
    }

    public getTotalForOnePosition(positionId) : Number {
        let cost = 0;
        const currentProduct =this.products.find(p => p.id === positionId);
        if(currentProduct.specialOffer === 0) {
            cost = currentProduct.amount * currentProduct.normalPrice;
        } else{
        cost = currentProduct.amount * currentProduct.specialOffer;
        }
        return cost;
    }


    public getAmmountOfItems() : Number {
        let itemAmmount = 0;
        this.products.forEach(function (value){
            itemAmmount = itemAmmount + value.amount;
        })
        return itemAmmount;
    }

    public clearBasket() {
        this.products = [];
    }

}