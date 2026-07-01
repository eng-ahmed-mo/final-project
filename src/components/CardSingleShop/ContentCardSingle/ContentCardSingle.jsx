/* eslint-disable react/prop-types */

import { useState } from "react";
import StarRating from "../../StarRating/StarRating";
import BtnsCardSingleShop from "../BtnsCardSingleShop/BtnsCardSingleShop";


export default function ContentCardSingle({ product, selectedColorI, setSelectedColorI, productItem, setProductItem }) {

    const [isSize, setIsSize] = useState(0);

    const iColor = (i) => {
        setSelectedColorI(i);

        const newCartProduct = {
            ...productItem,
            colorName: product?.colors[i]?.colorName,
            hexCode: product?.colors[i]?.hexCode,
            indexColor: i,
            image: product?.colors[i]?.image[0]
        };

        setProductItem(newCartProduct);
    };



    const iSize = (i) => {
        setIsSize(i);

        const newCartProduct = {
            ...productItem,
            size: product?.sizes[i],
            indexSize: i
        };

        setProductItem(newCartProduct);
    };



    return (
        <>
            <div className="content-card-single">
                <h2>{product?.name}</h2>
                {
                    product.discount > 0 ?
                        <div className="box-discount">
                            <h3 className="price-discount">
                                <del>${product?.price.toFixed(2)}</del>
                            </h3>
                            <h3>
                                ${product?.price.toFixed(2) - (product.price * product.discount / 100)}
                            </h3>
                        </div>
                        :
                        <div>
                            <h3>${product?.price.toFixed(2)}</h3>
                        </div>
                }

                <div className="reviews">
                    <StarRating rating={product?.rating} />
                    <p>({product?.reviews?.length} reviews)</p>
                </div>

                <p>{product?.description}</p>

                <ul>
                    <h4>Color: {product?.colors[selectedColorI]?.colorName}</h4>
                    {product?.colors?.map((color, i) => (
                        <li key={i} className={`${selectedColorI === i ? "active" : ""}`} onClick={() => iColor(i)}>
                            <span style={{ background: `${color.hexCode}` }}></span>
                        </li>
                    ))}
                </ul>

                <ul style={product?.sizes?.length > 0 ? { display: "" } : { display: "none" }}>
                    <h4>size: {product?.sizes[isSize]}</h4>
                    {product?.sizes?.map((size, i) => (
                        <li key={i} className={`size ${isSize === i ? "active" : ""}`} onClick={() => iSize(i)}>
                            <span >
                                {size}
                            </span>
                        </li>
                    ))}
                </ul>

                <BtnsCardSingleShop product={product} productItem={productItem} setProductItem={setProductItem} />
            </div >

        </>
    )
}
