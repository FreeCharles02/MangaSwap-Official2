import React from 'react'
import { useState } from 'react'


const listingpage = () => {
  const [listName] = useState('');
  const [quality] = useState('');

const handleSubmit = () => {
  console.log(listName)
}
  return (
    <div>
    <form>
      <input type='text' placeholder='Manga name' />
     <br />
      <input type='radio' id='mint' name='condition' />
      <label for='mint'>Mint</label>
      <br />
      <input type='radio' id='good' name='condition' />
      <label for='good'>Good</label>
      <br />
      <input type='radio' id='used' name='condition' />
      <label for='used'>Used</label>
      <br />
        <label for='file'>Select Image</label>
      <br />
        <input type='file' placheholder='Upload photo' />
        <button type='submit'>Submit</button>

    </form>
    </div>
  )
}

export default listingpage;