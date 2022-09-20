import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { popularProducts } from '../data';
import Product from './Product';
import axios from 'axios';
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({category, filters, sort}) => {
  const [products, setProducts] = useState([]);
  // whenever you change filters change the state
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    const getProducts = async() => {
      try{
        const res = await axios.get(category ? `http://localhost:3001/api/products?category=${category}` : "http://localhost:3001/api/products");
        console.log(res);
        setProducts(res.data);
      }catch(err) {
        console.log(err);
      }
    }
    getProducts();
  }, [category])
  

  useEffect(() => {
    console.log(filters, "filters")
    category &&
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );


  }, [products, category, filters])

  useEffect(() => {
    console.log(sort, "sort");
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => 
          a.createdAt - b.createdAt)
      );
    } else if( sort === "asc") {
      setFilteredProducts((prev) => [...prev].sort((a,b) =>a.price - b.price));
    } else {
      setFilteredProducts((prev) => [...prev].sort((a,b) =>b.price - a.price));
    }

  }, [sort])

  return (
    <Container>
      {/* if there is a category, use the filtered products */}
      {/* if not use the regular products and get only 8 of them bc you dont want to dispplya too many */}
      {/* maybe add a field to each prduct to see whether its popular or not */}
        {category ? filteredProducts.map((product) => {
            return (<Product item={product} key={product.id}/>)
        }) : products.slice(0,8).map((product) => {
          return (<Product item={product} key={product.id}/>)})}
    </Container>
  )
}

export default Products
