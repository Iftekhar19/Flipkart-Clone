import React from 'react'
import styles from "./Allproductcontainer.module.css";
import ProductCard from './ProductCard';
// import { useSelector } from 'react-redux';
const Allproductcontainer = ({data}) => {
  // const data=useSelector((state)=>state.allData)
  return (
    <section className={styles["allproduct-container"]}>
      {
        data.map((e,ind)=>
        {
          return <ProductCard  key={ind} img={e.image} title={e.title} id={e.id} price={e.price}/>
        })
      }
    </section>
  )
}

export default Allproductcontainer
