import { useToast } from "@/context/toast";
import { supabaseClient } from "@/services/supabase";
import { User } from "@supabase/supabase-js";
import React, { useEffect, useState } from 'react';

type State = {
    user: User | null
    logout: () => void
    login: (email: string, password: string) => void
    loading: boolean
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
        setLoading(true);
        const getUser = async () => {
            const { data } = await supabaseClient.auth.getUser();
            const { user: currentUser } = data;
            setUser(currentUser ?? null);
            setLoading(false);
        };
        getUser();
        const { data } = supabaseClient.auth.onAuthStateChange(async (event, session) => {
            if (event === "SIGNED_IN") {
                setUser(session?.user ?? null);
            } else if (event === "SIGNED_OUT") {
                setUser(null);
            }
        });
        return () => {
            data.subscription.unsubscribe();
        };
    }, []);
    // const isLogged = useMemo(() => {
    //     return !!user
    // }, [user])

    const logout = async () => {
        await supabaseClient.auth.signOut();
    }
    const login = async (email: string, password: string) => {

        if (!password || !email) {
            return toggleToast({
                show: true,
                status: "fail",
                message: "Thiếu thông tin đăng nhập",
                time: 5000,
            });
        }
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email,
            password
        })
        if (error) {
            return toggleToast({
                show: true,
                status: "fail",
                message: error?.message,
                time: 5000,
            });
        }
    }
    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                // isLogged,
                login,
                logout,
            }}
        >
            {!loading && children}
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
export { AuthProvider, useAuth };

