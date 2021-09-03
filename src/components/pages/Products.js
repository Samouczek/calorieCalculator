import {useEffect, useState} from "react";
import ProductsTab from "../organisms/products/productsTab/ProductTab";
import ProductForm from "../organisms/products/productForm/ProductForm";
import GetProductsFromFirebase from "../../data/GetProductsFromFirebase";

export default function Products({user}) {
    const [database, setDatabase] = useState([]);
    const [rows, setRows] = useState([]);
    const [confirmAdd, setConfirmAdd] = useState(0);
    const [confirmRemove, setConfirmRemove] = useState(0)

    useEffect( () => {
        GetProductsFromFirebase(user,setDatabase);
    },[confirmAdd,confirmRemove]);

    useEffect(() => {
        setRows(database)
    },[database]);

    const handlerAddProduct = ((confirm) => {
        setConfirmAdd(confirm);
    });
    console.log("Conf add: " + confirmAdd);

    const handlerRemoveProduct = ((confirm) => {
        setConfirmRemove(confirm);
    });

    return (
        <>
            <ProductForm user={user} confirmNewProduct={handlerAddProduct}/>
            <ProductsTab user={user} rows={rows} confirmRemoveProduct={handlerRemoveProduct} />
        </>
    );
}