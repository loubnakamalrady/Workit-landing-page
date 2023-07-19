import { products } from "../Product";

export default function Description(){
    return(
        products.map(product => {
            return(product.desc);
        })
    )
}