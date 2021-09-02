import {useEffect, useState} from "react";
import ProductsTab from "../organisms/productDatabase/productDatabaseTab/ProductDatabaseTab";
import CreateDataFromApi from "../../api/CreateDataFromApi";
import {getProductDatabase} from "../../api/productApi";

export default function ProductDatabase() {
    const [database, setDatabase] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect( () => {
        getProductDatabase(setDatabase);
    },[]);

    useEffect(() => {
        setRows(CreateDataFromApi(database))
    },[database]);

    return (
        <>
            <ProductsTab rows={rows}/>
        </>
    );
}