import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react'

export type UserType = {
    id: string
    token?: string
    refreshToken?: string
    firstName?: string
    lastName?: string
    fullName?: string
    title?: string
    photoUrl?: string
    phone?: string
    defaultLanguage?: string
    applicationRoles?: string[]
    isSuper?: boolean
    isCompany?: boolean
    isCompanyUser?: boolean
}

const UserContext = createContext<{
    user: UserType | null
    setUser: (user: UserType | null) => void
}>({
    user: null,
    setUser: () => {},
})

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null)

    useEffect(() => {
        // Uygulama ilk açıldığında localStorage'dan user bilgisini yükle
        const stored = localStorage.getItem('user')
        if (stored) {
            setUser(JSON.parse(stored))
        }
    }, [])

    useEffect(() => {
        // User değiştiğinde localStorage'a kaydet
        if (user) {
            localStorage.setItem('user', JSON.stringify(user))
        } else {
            localStorage.removeItem('user')
        }
    }, [user])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
