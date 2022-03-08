import {Link} from "react-router-dom";
import React, {CSSProperties} from "react";
import ChocoCard from "./chocoCard";
import {mockedProducts} from "../../products";

export default function Chocolates() {
    return (
        <div style={productsContainer}>
            <h3 style={productPageTitle}>Products</h3>
            <div style={productPageCards}>

                <div>
               <ChocoCard product={mockedProducts[4]}/>

                <ChocoCard product={mockedProducts[4]} />

                <ChocoCard product={mockedProducts[4]} />

                <ChocoCard product={mockedProducts[4]} />
                </div>
                <div>
                <ChocoCard product={mockedProducts[4]} />

                <ChocoCard product={mockedProducts[4]} />

                <ChocoCard product={mockedProducts[4]} />

                <ChocoCard product={mockedProducts[4]} />
                </div>
                </div>

        </div>
    )
}

const productsContainer: CSSProperties = {
    display: "flex",
    flexDirection:"column"
}

const productPageTitle:CSSProperties = {
    textAlign: "center"
}

const productPageCards: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
}




