import { Outlet, useNavigation } from "react-router-dom"
//context
import { AppProvider } from "../context"
// pages
import Loading from "./Loading"
// components
import Header from "../components/appLayout/header/Header"
import Footer from "../components/appLayout/footer/Footer"


const AppLayout = () => {
    const navigation = useNavigation()
    const isPageLoading = navigation.state === 'loading'

    return (
        <>
            <Header />

            <AppProvider>
                <main>
                    {isPageLoading ? <Loading /> : <Outlet />}
                </main>
            </AppProvider>

            <Footer />
        </>
    )
}

export default AppLayout