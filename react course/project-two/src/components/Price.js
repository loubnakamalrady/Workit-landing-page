import { products } from "../Product";

export default function Price(){
    return(
        products.map(product => {
            return(product.price);
        })
    )
}