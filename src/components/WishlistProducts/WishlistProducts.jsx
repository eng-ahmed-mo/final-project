import { useContext } from "react";
import { WishlistContext } from "../WishlistContaxt/WishlistContaxt";
import Card from "../Card/Card";
import WishlistEmpty from "../WishlistEmpty/WishlistEmpty";



export default function WishlistProducts() {

    const { wishlist } = useContext(WishlistContext);

    console.log(wishlist);

    return (
        <>

            <div className="section-wishlist-products px">
                {wishlist.length > 0 ?
                    wishlist.map((product) => (
                        <Card key={product.id} product={product} />
                    ))
                    : <WishlistEmpty />}
            </div>
            
        </>
    )
}
