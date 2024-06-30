import { Outlet, useNavigation } from "react-router-dom"
// pages
import Loading from "./Loading"

const AppLayout = () => {
    const navigation = useNavigation()
    const isPageLoading = navigation.state === 'loading'

    return (
        <>
            <main>
                {isPageLoading ? <Loading /> : <Outlet />}
            </main>
        </>
    )
}

export default AppLayout