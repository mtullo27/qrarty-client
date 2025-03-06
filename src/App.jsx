import "@mantine/core/styles.css"

<<<<<<< HEAD
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { MantineProvider } from "@mantine/core"
import { theme } from "./theme"
import store from "./stores/index"
import { AppHeader } from "./components/Header/AppHeader.jsx"
import { Router } from "./Router.jsx"

export default function App() {
    return (
        <Provider store={store}>
            <MantineProvider theme={theme}>
                <AppHeader>
                    <Router />
                </AppHeader>
            </MantineProvider>
        </Provider>
=======
import { MantineProvider } from "@mantine/core"
import { Router } from "./Router"
import { theme } from "./theme"

export default function App() {
    return (
        <MantineProvider theme={theme}>
            <Router />
        </MantineProvider>
>>>>>>> a0056e03328e60fdce257173d27306ba9a5c79e5
    )
}
