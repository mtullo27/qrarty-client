import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/Home.page"
import QRCodePage from "./pages/QRCodePage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/qr-code",
        element: <QRCodePage />
    }
])

export function Router() {
    return <RouterProvider router={router} />
}
