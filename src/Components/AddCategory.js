import React, {useState} from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({setcategorias}) => {

    const [inputvalue,setinputvalue] = useState('');

    const handleInputChange = (e)=>{
        setinputvalue(e.target.value);
        //console.log(inputvalue);
    }

    const handleSubmit = (e)=>{
        e.preventDefault(); //permite prevenir el refresh completo de la pag. Comportamiento por default.
        if (inputvalue.trim().length > 2) {
            setcategorias(cate => [inputvalue,...cate]);
            setinputvalue('');    
        }
        

    }
    return (
    
        
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputvalue}
            onChange={handleInputChange}
            />
            
        </form>
    )
    AddCategory.propTypes={
        setcategorias: PropTypes.func.isRequired //De esta manera se obliga a utilizar la funcion setcategorias.
    }
}
