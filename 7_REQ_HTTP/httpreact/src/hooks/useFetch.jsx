import { useState, useEffect } from "react";

// 4- custom hook
export const useFetch = (url) =>{
    const [data, setData] = useState(null)

    useEffect(() =>{

        const fecthData = async () =>{
            const res = await fetch(url)

            const json = await res.json()

            setData(json)


        }

        fecthData()

    }, [url])

    return {data}
}