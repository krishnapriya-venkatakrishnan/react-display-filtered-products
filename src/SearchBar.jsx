import React, { useState } from "react";


export default function SearchBar(props){

    const [formValues, setFormValues] = useState({
        searchInput: "",
        showStockProducts: false,
    })

    function handleChange(event){
        const {name, value, type, checked} = event.target

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: type === "checkbox" ? checked : value,
        }))

        props.onSearchChange(type, value, checked)
    }

    return (
        <form className="search-bar-container">
            <input type="text"
            value={formValues.searchInput}
            name="searchInput"
            placeholder="search..."
            onChange={handleChange}
            className="search-input"
            />
            <br />
            <br />
            <input type="checkbox"
            checked={formValues.showStockProducts}
            name="showStockProducts"
            onChange={handleChange}
            className="sort-products"
            />Only show stocks that are available

        </form>
    )

}