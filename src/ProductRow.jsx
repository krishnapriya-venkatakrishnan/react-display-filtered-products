import React from "react";

export default function ProductRow(props){
    
    let nameClass = ""
    let priceClass = "price"
    if (!props.stocked){
        priceClass += " stocked"
        nameClass += "stocked"
    }

    return (
        <tr>
            <td className={nameClass}>
                {props.name}
            </td>
            <td className={priceClass}>
                {props.price}
            </td>
        </tr>
    )
}