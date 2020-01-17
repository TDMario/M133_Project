export class basket {
    private products = [];

    public addProduct(newProduct){
        newProduct.ammount++;
        if(this.products.find(p => p.id === newProduct.id) === null){
            this.products.push(newProduct);
        }
    }

    public decreasedProduct(decreasedProduct){
        const currentProduct = this.products.find(p => p.id === decreasedProduct);
        if(currentProduct != null){
            if(currentProduct.ammount >= 1){
                currentProduct.ammount--;
            }else{
                this.deleteProduct(currentProduct);
            }
            
        }
    }

    public deleteProduct(delteableProductId){
        const currentProductIndex =this.products.findIndex(p => p.id === delteableProductId);
        this.products.splice(currentProductIndex, 1);
    }

    public getSize() : Number {
        return this.products.length;
    }

    public getCost() : Number {
        let cost = 0.00;
        this.products.forEach(function (value){
            if(value.specialOffer === null){
                cost = cost + ( value.specialOffer * value.ammount );
            }else{
                cost = cost + (value.normalPrice * value.ammount )
            }
        })
        return cost;
    }
    public getAmmountOfItems() : Number {
        let itemAmmount = 0;
        this.products.forEach(function (value){
            itemAmmount = itemAmmount + value.ammount;
        })
        return itemAmmount;
    }

}