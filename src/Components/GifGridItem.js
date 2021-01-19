import React from 'react'

import PropTypes from 'prop-types'

export const GifGridItem = ({id,title,url}) => {// De esta manera permite traer todos los componentes o props de manera separada.
     console.log(id, title,url); // mucho mas facil de leer las prop.
    return (
        <div className="card animate__animated animate__bounce">
          <img src={url} alt={title}/>
          <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes= {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired

}
 