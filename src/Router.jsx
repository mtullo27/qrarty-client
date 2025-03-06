import { createBrowserRouter, RouterProvider } from "react-router-dom"
<<<<<<< HEAD
import HomePage from "./pages/Home.page"
import QRCodePage from "./pages/QRCodePage"
=======
import { HomePage } from "./pages/Home.page"
>>>>>>> a0056e03328e60fdce257173d27306ba9a5c79e5

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
<<<<<<< HEAD
    },
    {
        path: "/qr-code",
        element: <QRCodePage />
=======
>>>>>>> a0056e03328e60fdce257173d27306ba9a5c79e5
    }
])

export function Router() {
    return <RouterProvider router={router} />
}
