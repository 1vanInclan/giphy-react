import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { Gifs } from './components/Gifs'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Evangelion'])


    const addCategory = (categoria) => {
        if( categories.includes(categoria) ) return;
        setCategories([categoria, ...categories])
    }

  return (
    <>
        <div className='header'>
            <h1>GifExpertApp</h1>
        </div>
            <AddCategory add={addCategory}/>


        <div>
            {
                categories.map((categorias) => {
                    return (
                        <Gifs key={categorias} categoria={categorias}/>
                    )
                })
            }
        </div>
    </>

  )
}
