import {useEffect, useState} from "react";
import ProductsTab from "../organisms/productDatabase/productDatabaseTab/ProductDatabaseTab";
import CreateData from "../../api/CreateData";
import {getProductDatabase} from "../../api/productApi";

export default function ProductDatabase() {
    const [database, setDatabase] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect( () => {
        getProductDatabase(setDatabase);
    },[]);

    useEffect(() => {
        setRows(CreateData(database))
    },[database]);

    return (
        <>
            <ProductsTab rows={rows}/>
        </>
    );
}