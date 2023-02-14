import { supabaseClient } from "@/services/supabase"
import { User } from "@supabase/supabase-js"
import React, { useEffect, useMemo, useState } from 'react'
import { useToast } from "@/context/toast";

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
    const { toggleToast } = useToast();
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    async function getUserData() {
        let { data, error } = await supabaseClient.auth.getSession()
        if (error) return toggleToast({
            show: true,
            status: "fail",
            message: error?.message,
            time: 5000,
        });
        if (data?.session?.user) {
        setUser(data?.session?.user)
        }

    }
    useEffect(() => {
        getUserData();
        // Check active sessions and sets the user
        // Listen for changes on auth state (logged in, signed out, etc.)
        const { data: listener } = supabaseClient.auth.onAuthStateChange(async (event, session) => {
            setUser(session?.user ?? null)
        })
        setLoading(false)
        return () => {
            listener?.subscription?.unsubscribe()
        }
    }, [])

    const isLogged = useMemo(() => {
        return !!user
    }, [user])

    const logout = async () => {
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

