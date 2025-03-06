import React, { useRef } from "react"
import { useSelector } from "react-redux"
import { Button, Group } from "@mantine/core"
import htmlToImage from "html-to-image"

const QRDownloadButton = () => {
    const url = useSelector((state) => state.qr.url)
    const qrRef = useRef(null)

    const handleDownload = () => {
        if (!url) return
        htmlToImage.toPng(qrRef.current).then((dataUrl) => {
            const link = document.createElement("a")
            link.href = dataUrl
            link.download = "qr_code.png"
            link.click()
        })
    }

    return (
        <Group position="center">
            <Button onClick={handleDownload} disabled={!url}>
                Download QR Code
            </Button>
        </Group>
    )
}

export default QRDownloadButton
