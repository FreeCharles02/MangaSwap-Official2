import React from 'react'
import Link from 'next/link'
import { Spacer } from '@nextui-org/react'
const Productlist = () => {
    return(
        <div className="listing">
       <img 
        src='https://i.imgur.com/Ru7fcxO.jpg'
        height={300}
        width={200}
       />

        <h3 className='publish'>
            Publisher:
        </h3>

       <h3 className='title'>
        Title:
       </h3>
       
       <h3 className='format'>
        Format:
       </h3>

       <Link className='#' href='/'>
           <p> Buy </p>
       </Link>
         
       <ul><Link className="ul" href='/'> Sell</Link></ul>

            <button>
                Watchlist
            </button>
       </div >
        
    )
}

export default Productlist;