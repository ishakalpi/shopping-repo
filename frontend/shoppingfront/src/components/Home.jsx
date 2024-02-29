import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
    const {data, error , isLoading} = useGetAllProductsQuery()
    console.log("data:", data);
    console.log("error:", error);
    console.log("isLoading:", isLoading);

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
            <button> Add to Cart </button>
        </div>)}
     </div>
     </>
)}
</div> );
}
 
export default Home;