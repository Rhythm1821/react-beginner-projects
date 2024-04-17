import { data } from "autoprefixer";
import { useCallback, useEffect, useState } from "react";

function useCurrencyInfo(currency){
    [data,setData] = useState({})
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(url)
        .then((res)=> res.json())
        .then((res)=> res[currency])
        console.log(data);
    },[currency])
    console.log(data);
    return data
}

export default useCurrencyInfo