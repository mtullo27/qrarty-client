import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/Home.page"
import QRCodePage from "./pages/QRCodePage"
import CameraPage from "./pages/Camera.page"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/qr-code",
        element: <QRCodePage />
    },
    {
        path: "/camera",
        element: <CameraPage />
    }
])

export function Router() {
    return <RouterProvider router={router} />
}
