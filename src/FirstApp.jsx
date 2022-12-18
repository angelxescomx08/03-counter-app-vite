import React from 'react'

import PropTypes from 'prop-types'

const newMessage = 'Ángel';

export const FirstApp = ({title,subtitle}) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'Hola soy Goku',
    subtitle: 'No hay subtitulo'
}