import React from "react";

export default function ProductCategoryRow(props){
    return (
        <tr>
            <td className="category" colSpan={2}>
                {props.value}
            </td>
        </tr>
    )
}