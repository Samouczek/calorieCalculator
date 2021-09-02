import {useEffect, useState} from "react";
import ProductsTab from "../organisms/products/productsTab/ProductTab";
import ProductForm from "../organisms/products/productForm/ProductForm";
import GetProductsFromFirebase from "../../data/GetProductsFromFirebase";

export default function Products({user}) {
    const [database, setDatabase] = useState([]);
    const [rows, setRows] = useState([]);
    const [confirm, setConfirm] = useState()

    useEffect( () => {
        GetProductsFromFirebase(user,setDatabase);
    },[]);

    useEffect(() => {
        setRows(database)
    },[database, confirm]);

    const handlerAddProduct = ((confirm) => {
        setConfirm(confirm);
    });

    return (
        <>
            <ProductForm user={user} confirmNewProduct={handlerAddProduct}/>
            <ProductsTab rows={rows} />
        </>
    );
}