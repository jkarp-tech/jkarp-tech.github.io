import React from 'react'
import { isMobile } from 'react-device-detect'
import BrowserApp from './Browser/BrowserApp'
import AnonymousProvider from './Context/AnonymousProvider'
import MobileApp from './Mobile/MobileApp'

const App = () => {
    return (
        <AnonymousProvider>
            {isMobile ? <MobileApp /> : <BrowserApp />}
        </AnonymousProvider>
    )
}

export default App
