import "@mantine/core/styles.css"

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
    )
}
