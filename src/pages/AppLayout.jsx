import { Outlet, useNavigation } from "react-router-dom"
// pages
import Loading from "./Loading"
// components
import Header from "../components/appLayout/header/Header"

const AppLayout = () => {
    const navigation = useNavigation()
    const isPageLoading = navigation.state === 'loading'

    return (
        <>
            <Header/>

            <main>
                {isPageLoading ? <Loading /> : <Outlet />}
            </main>
        </>
    )
}

export default AppLayout