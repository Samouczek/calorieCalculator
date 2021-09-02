import {useEffect, useState} from "react";
import ProductsTab from "../organisms/products/productsTab/ProductTab";
import ProductForm from "../organisms/products/productForm/ProductForm";
import ReadProductsFromDB from "../../data/ReadProductsFromDB";

export default function Products({user}) {
    const [rows, setRows] = useState([]);
    const [confirmNewProduct, setConfirmNewProduct] = useState(false);

    const handleAddProduct = (newProductAdded) => {
       setConfirmNewProduct(newProductAdded)
    }

    useEffect(() => {
         setRows(ReadProductsFromDB(user))
    },[confirmNewProduct]);

    console.log(rows);
    return (
        <>
            <ProductForm confirmNewProduct={handleAddProduct}/>
            <ProductsTab rows={rows}/>
        </>
    );
}