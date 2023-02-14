import { supabaseClient } from "@/services/supabase"
import { User } from "@supabase/supabase-js"
import React, { useEffect, useMemo, useState } from 'react'

type State = {
    user: User | null
    logout: () => void
    loading: boolean
    isLogged: boolean
}

interface AuthProviderProps {
    children: React.ReactNode
}
const AuthContext = React.createContext<State | undefined>(undefined)

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    
    useEffect(() => {
        setLoading(true)
        async function getUserData() {
            await supabaseClient.auth.getUser().then((value) => {
                if (value.data?.user) {
                    setUser(value?.data?.user)
                }
            })
        }
        getUserData();
        setLoading(false)
    }, [])

    const isLogged = useMemo(() => {
        return !!user
    }, [user])

    const logout = async() => {
        await supabaseClient.auth.signOut();
    }
    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                isLogged,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = React.useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider')
    }
    return context
}
export { AuthProvider, useAuth }
