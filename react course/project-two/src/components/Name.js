import { products } from "../Product";

export default function Name(){
    return(
        products.map(product => {
            return(product.name);
        })
    )
}