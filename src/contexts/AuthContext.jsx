import React, { createContext, useState } from 'react'

const AuthContext = createContext()

function AuthContextProvider(props) {

    const [user, setUser] = useState(null)

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
export { AuthContextProvider }