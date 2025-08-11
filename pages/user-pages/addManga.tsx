import React from 'react'
import styles  from './addManga.module.css'
import { Dispatch } from 'redux'
import { store } from '../store'
import { addCondition, addDesc, addName, addPrice, saveManga, getCurrentManga, addImage } from '../manga/mangaSlice'



const addManga = () => {
   const classes = `form-control`


 return (
     <div className={styles.div}>
    <form className='row' onSubmit={() => {
        store.dispatch(saveManga())
    }}>
            <div className='col-lg-12'>
        <div className='row mangaForm'>
        <div className='col-lg-2 form-group'>
        <input  className="form-control-file" type="file" accept='image/*' onChange={(e) => {
            const files = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const filebase: string = reader.result as string
                store.dispatch(addImage(filebase));
            }
            reader.readAsDataURL(files);
            store.dispatch(getCurrentManga())
        }}/>
        </div>
        </div>
        <div className='row'>
        <div className='col-lg-2 form-floating'>
            <input className={ `form-control ${styles.mangaName}`} id="Manganame" placeholder='Name' onChange={(e) => {
                store.dispatch(addName(e.target.value))
                store.dispatch(getCurrentManga());

            }}/>
            <label htmlFor='Manganame'>Name</label> 
        </div>
        </div>
        <div className='row'>
        <div className='col-lg-2 form-floating'>
           
            <select className='form-select' id="condition" onChange={(e) => {
                store.dispatch(addCondition(e.target.value))
                store.dispatch(getCurrentManga())
            }}>
                <option>--Select--</option> 
                <option value="Mint">Mint</option>
                <option value="Good">Good</option>
                <option value="Fine">Fine</option>
                <option value="Worn">Worn</option>
            </select>
             <label htmlFor='condition'>Condition</label>
        </div>
        </div>
        <div className='row'>
        <div className='col-lg-2 form-floating'>
            <textarea className='form-control' id='managdesc' onChange={(e) => {
                store.dispatch(addDesc(e.target.value))
                store.dispatch(getCurrentManga());
            }} /> 
            <label htmlFor='mangadesc'>
                Description...
            </label>
        </div>
        </div>
        <div className='row'>
        <div className='col-lg-2 input-group'>
        <span className='input-group-text'>
            $
        </span>
        <input type="number" step="0.01" className='form-controqdl-sm' id="$" onChange={(e) => {
            store.dispatch(addPrice(e.target.value))
            store.dispatch(getCurrentManga())
        }}/>
        </div>
        </div>
        <button type='submit' className=' btn btn-primary'>
            Save
        </button>
        <button type="reset" className='btn-secondary' placeholder='Cancel'>
            Cancel
        </button>
        </div>
        </form>
        </div>        
 )   
}

export default addManga;