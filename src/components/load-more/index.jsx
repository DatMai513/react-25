import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [limitReached, setLimitReached] = useState(false);
  const containerRef = useRef();

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const data = await response.json();
      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setLimitReached(true);
    }
  }, [products]);

  const handleClick = async () => {
    if (limitReached) return;

    try {
      await fetchProducts();

      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="load-more-container">
      <div className="product-container" ref={containerRef}>
        {products && products.length
          ? products.map((item, index) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>

      <div>
        <button disabled={limitReached} onClick={handleClick}>
          Load More Products
        </button>
        {limitReached && <p>Limit reached</p>}
      </div>
    </div>
  );
}
