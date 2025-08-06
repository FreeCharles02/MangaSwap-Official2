import React from 'react'
import styles from './addManga.module.css'

const addManga = () => {
 return (
        <form>
        <div className={styles.primary}>
        <div className='row mangaForm'>
        <div className='col-lg-2 form-group'>
        <input  className="form-control-file" type="file" accept='image/*'/>
        </div>
        <div className='col-lg-2 form-floating'>
            <input className='form-control' id="Manganame" placeholder='Name'/>
            <label htmlFor='Manganame'>Name</label>
        </div>
        <div className='col-lg-2 form-floating'>
           
            <select className='form-select' id="condition">
                <option>--Select--</option> 
                <option>Mint</option>
                <option>Good</option>
                <option>Fine</option>
                <option>Worn</option>
            </select>
             <label htmlFor='condition'>Condition</label>
        </div>
        <div className='col-lg-2 form-floating'>
            <textarea className='form-control' id='managdesc' /> 
            <label htmlFor='mangadesc'>
                Description...
            </label>
        </div>
        <div className='col-lg-2 input-group'>
        <span className='input-group-text'>
            $
        </span>
        <input type="number" step="0.01" className='form-control-sm' id="$"/>
        </div>
        </div>
        </div>
        </form>        
 )   
}

export default addManga;