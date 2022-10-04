import { useState } from "react"

export const AddCategory = ({add}) => {

    const [newValor, setnewValor] = useState('')
    
    const value = (e) => {
        setnewValor(e.target.value)
        // console.log(newValor.trim().length);
    }

    const enviar = (e) => {
        
        if( newValor.trim().length <= 1 ) return;
        add(newValor);
        setnewValor('');
        e.preventDefault();
    }

  return (
    <form onSubmit={ enviar } className="form">
        <input 
        placeholder='Buscar Gifs'
        onChange={ value }
        value={newValor}
        className='input'
        />
    </form>
    
  )
}
