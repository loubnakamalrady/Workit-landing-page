import { products } from "../Product";

export default function Image(){
    return(
        products.map(product => {
            return(product.image);
        })
    )
}