import React from 'react'
export const themes = {
    light: 'theme-light',
    dark: 'theme-dark',
}

export const themeContext = React.createContext({
    theme: themes.dark,
})

export const tooglerContext = React.createContext({
    toggleTheme: () => {},
})
