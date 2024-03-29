import React from "react";
import { useRouter } from "next/router";



const UserProfile = () => {
    const router = useRouter();
return (

    <div className="userpf">
        <img src="https://secure.gravatar.com/avatar/69273d49d7b57df5d072bfbcacfe12bd?s=500&r=pg&d=mm"/>
        <button>Watchlist</button>
        <button onClick={() => {router.push('../product-pages/listing')} }>Make Listing</button>
    </div>
    )
}

export default UserProfile; 