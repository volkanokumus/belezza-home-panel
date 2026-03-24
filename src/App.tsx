import { AuthProvider } from '@/auth'
import Layout from '@/components/layouts'
import Theme from '@/components/template/Theme'
import Views from '@/views'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router'
import appConfig from './configs/app.config'
import './locales'

if (appConfig.enableMock) {
    import('./mock')
}

function App() {
    // const queryClient = new QueryClient()
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
            },
        },
    })
    return (
        <QueryClientProvider client={queryClient}>
            <Theme>
                <BrowserRouter>
                    <AuthProvider>
                        <Layout>
                            <Views />
                        </Layout>
                    </AuthProvider>
                </BrowserRouter>
            </Theme>
        </QueryClientProvider>
    )
}

export default App
