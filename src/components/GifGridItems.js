import React from 'react';

export const GifGridItems = ({ title, url }) => {

    return (
        <div className='card animate__animated animate__fadeInDown'>
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
/**
 * 1. Enzyme
 * 2. Enzyme to Json
 * 3. debe de mostrar el componente correctamente
        *shallow
        *wrapper
        *wrapper .toMatchSnapshot()
 */