import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable"

export default function FilterableProductTable(){
    
    const [search, setSearch] = useState("")
    const [checkbox, setCheckbox] = useState(false)
    
    function handleSearchChange(type, inpValue, chkValue){
        type === "checkbox" ? setCheckbox(chkValue) :setSearch(inpValue)        
    }
    
    return (
        <div className="main-table-container">
            <SearchBar onSearchChange={handleSearchChange}
            setSearch={setSearch} />
            <ProductTable search={search} checkbox={checkbox}/>
        </div>
    )
}