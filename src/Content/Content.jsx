import { useEffect, useState } from "react";
import List from "./List";
import styles from "./ContentStyle.module.css"


export const Content = ()=> {
    const [ fetchingData, setIsFetchingData ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    async function fetchData() {
        setLoading(true);
        try{
            const res = await fetch ("https://fetchapi-o5nd.onrender.com");
            const data = await res.json();
                setIsFetchingData(data)
            console.log(fetchingData)

        } catch (error) {
            console.log(error)
        } finally {
        setLoading(false);
    }
}

    useEffect(()=> {
        fetchData();
    }, [])


    return (
        <>
    {loading && <p style={{textAlign: 'center', fontSize: '1.5rem'}}>Loading...</p>}
    <ul className={styles.fetch}>
        {fetchingData.map(item=> <List key={item.id}  {...item} />)}
    </ul>
        </>
    )
}
