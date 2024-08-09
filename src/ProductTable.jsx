import React from "react";
import { productData } from "./productData";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable(props){
    
    const {search, checkbox} = props
    let filteredProductData = productData
    
    if (search || checkbox){
        filteredProductData = []
        productData.forEach(product=> {
            const {name, stocked} = product
            
            // there are 2 filters.
            // to display only the stocked products, check if the box is ticked and
            // stocked boolean is true. if so, display only the stocked products
            // 
            // if search is started, then check if the requested value matches the product.
            
            if (search && checkbox){
                if ((name.toLowerCase().includes(search.toLowerCase())) && (stocked))
                    filteredProductData.push(product)
            } else if (search) {
                if (name.toLowerCase().includes(search.toLowerCase()))
                    filteredProductData.push(product)
            } else {
                if (stocked)
                    filteredProductData.push(product)
            }
        })
    }

    let categoriesList = []
    let categoryDetails = []
    function getCategories(){
        filteredProductData.forEach(product => {
            const {category, name, price, stocked} = product
            const arrayPos = categoriesList.findIndex(cat => cat === category)
            if (arrayPos === -1) {
                categoriesList.push(category)
                const arrayOfObjPos = categoryDetails.length ? categoryDetails.length : 0
                categoryDetails[arrayOfObjPos] = []
                categoryDetails[arrayOfObjPos].push({
                    category: category,
                    name: name,
                    price: price,
                    stocked: stocked
                })
            } else {
                categoriesList[arrayPos] = category
                categoryDetails[arrayPos].push({
                    category: category,
                    name: name,
                    price: price,
                    stocked: stocked
                })
            }

        })

    }
    getCategories()
    
    function getProductDetails(){
        let productDetails = []
        
        for(let i=0; i<categoriesList.length; i++){
            productDetails.push(
                <ProductCategoryRow key={categoriesList[i]} value={categoriesList[i]} />
            )
            for(let j=0; j<categoryDetails[i].length; j++){
                const catDetail = categoryDetails[i][j]
                const {name, price, stocked} = catDetail
                productDetails.push(
                    <ProductRow key={name} name={name} price={price} stocked={stocked}/>
                )
            }

        }
        return productDetails
    }

    return (
        <div className="product-table-container">
            <table className="product-table">
                <tbody>
                    <tr className="title">
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {getProductDetails()}
                </tbody>
            </table>
        </div>
    )
}