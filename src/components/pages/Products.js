import {useEffect, useState} from "react";
import ProductsTab from "../organisms/products/productsTab/ProductTab";
import ProductForm from "../organisms/products/productForm/ProductForm";
import ReadProductsFromDB from "../../data/ReadProductsFromDB";

export default function Products() {
    const [rows, setRows] = useState([]);
    const user = "Kasia";

    useEffect(() => {
         setRows(ReadProductsFromDB(user))
    },[]);
    console.log(rows);
    return (
        <>
            <ProductForm />
            <ProductsTab rows={rows}/>
        </>
    );
}