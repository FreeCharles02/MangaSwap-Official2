import React, { useState, useRef, useCallback } from "react"
import Link from "next/link";
import useMangaSearch from '../useMangaSearch'

const Navbar2 = () => {
  //Returns a query and state to set query which re-renders app
  const [query, setQuery] = useState('')
  // ^^^
    const [pageNumber, setPageNumber] = useState(1)
  // Calling all variables set in state from useMangaSearch hook
    const {
      books,
      hasMore,
      loading,
      error
   } = useMangaSearch(query, pageNumber)
  
    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
      if (loading) return 
      if (observer.current) observer.current.disconnect()
      //disconnects current observer from current element
      observer.current = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting && hasMore)
          setPageNumber(prevPageNumber => prevPageNumber + 1)
      })
      if (node) observer.current.observe(node)
      console.log(node)
    }, [loading, hasMore])
    
    // Function updates query when change is detected in search bar
    function handleSearch(e) {
      e.preventDefault(e);
        setQuery(e.target.value)
        setPageNumber(1)
    }

  return (  
<>   

  <div className="topnav">
  <form method='get' action='../main/searchpage.jsx'>
    <h1>
      <Link href='/'>
      <h1 className="title">
      MangaSwap
      </h1>
      </Link>
      </h1>
      <ul><Link href="/api/auth/signin" className="ul">Login</Link></ul>
      <ul><Link href='../user-pages/signup' className="ul">Sign Up</Link></ul>
        <input type='text' value={query} onChange={handleSearch}></input>
      {books.map((book, i) => {
        if (books.length === i + 1) {
          return <div ref={lastBookElementRef} key={book}>{book}</div>
          //References the last book
        } else {
          // When rendering items from a unique array you always need a key
          return <div key={book}>{book}</div>
        }
        
      })}
      
    
      
     
      <button className="search-btn" > Search</button>
      </form>
      </div>
      </>
    )
}
export default Navbar2;