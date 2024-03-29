import { useEffect, useState } from "react";
import { isNull } from "util";
import axios from 'axios'

export default function useMangaSearch(query, pageNumber) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    // State for books we render from the API call
    const [books, setBooks] = useState([])
    // Get to num found
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        //Resets book query each time we change it 
        setBooks([])
    }, [query])   

//Hook is what happens everytime query/page number changes
    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios ({
            //Axios fetches results based on query set from JSON library
            method: 'GET',
            url: 'http://openlibrary.org/search.json',
            params: {q: query, page: pageNumber},
            // Cancel Token stops query from updating every time we request
            cancelToken: new axios.CancelToken(c => cancel = c)
            //Response variable
        }).then(res => {
            setBooks(prevBooks => {
                //Maps and selects books based on titles
                //"..new Set" only return unique titles
                return [...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])]
            })

            setHasMore(res.data.docs.length > 0)
            //Loading is set to false since we are no longer loading data 
            setLoading(false)
        }).catch (e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
        //What useEffect triggers based on
    }, [query, pageNumber])

    //All state from hook is being returned
    return { loading, error, books, hasMore}
}