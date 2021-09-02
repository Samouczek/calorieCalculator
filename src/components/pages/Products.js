import {useEffect, useState} from "react";
import ProductsTab from "../organisms/products/productsTab/ProductTab";
import ProductForm from "../organisms/products/productForm/ProductForm";
import GetProductsFromFirebase from "../../data/GetProductsFromFirebase";


export default function Products({user}) {
    const [database, setDatabase] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect( () => {
        GetProductsFromFirebase(user,setDatabase);
    },[]);

    useEffect(() => {
        setRows(database)
    },[database]);

    return (
        <>
            <ProductForm/>
            <ProductsTab rows={rows}/>
        </>
    );
}