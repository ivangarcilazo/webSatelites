import { newProducts } from "../../Data/ProductsToAdd.js"
import { toCreateContainersData } from "./functionsToCreateElements.js"


export function toShowData(){ 
        const lastProduct=newProducts.slice(-1)


        for(const products of lastProduct){
            const {id, garment, price, size}= products
            toCreateContainersData(id, garment, price , size) 
        }


}