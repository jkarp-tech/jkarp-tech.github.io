import React from 'react'
import Category from './Category'

const Birds = () => {
    return <Category page={'birds'} />
}

const Nature = () => {
    return <Category page={'nature'} />
}

const Wildlife = () => {
    return <Category page={'wildlife'} />
}

const Favorites = () => {
    return <Category page={'favorites'} />
}

export { Birds, Nature, Wildlife, Favorites }
