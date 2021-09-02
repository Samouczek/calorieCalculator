import ProductsTab from "../organisms/productDatabase/productDatabaseTab/ProductDatabaseTab";
import {useEffect, useState} from "react";
import CreateData from "../../api/CreateData";
import {getProductDatabase} from "../../api/productApi";

export default function ProductDatabase() {
    const [database, setDatabase] = useState([]);
    const [rows, setRows] = useState([]);

    console.log(database);

    useEffect( () => {
        console.log(database);
        getProductDatabase(setDatabase);
    },[]);

    useEffect(() => {
        setRows(CreateData(database))
    },[database]);

    console.log(rows);
    return (
        <>
            <ProductsTab rows={rows}/>
        </>
    );
}