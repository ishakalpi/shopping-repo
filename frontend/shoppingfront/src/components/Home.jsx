import { UseDispatch, useDispatch } from "react-redux";
import {useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../features/productsApi";
import { addToCart } from "../features/cartSlice";


const Home = () => {
    const {data, error , isLoading} = useGetAllProductsQuery()
    const dispatch = useDispatch();
    const navigate = useNavigate ();

    // console.log("data:", data);
    // console.log("error:", error);
    // console.log("isLoading:", isLoading);

const handleAddTocart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
}
    return ( 
    <div className="home-container">
    {isLoading ? 
    (
    <p>Loading...</p>
    ) : error ? (
    <p> An error Occured..</p>)
     : (
     <>
     <h2>New Arrivals </h2>
     <div className="products">
        {data?.map( product => <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <img 
            src={product.image} 
            alt={product.name}
            />
            <div className="detail"></div>
            <span>{product.desc}</span>
            <span className="price">${product.price}</span>
            <button onClick={() => handleAddTocart(product)}>
                Add to Cart
            </button>
        </div>)}
     </div>
     </>
)}
</div> );
}
 
export default Home;