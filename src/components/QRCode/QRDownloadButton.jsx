// QRDownloadButton.jsx
import React, { useRef } from "react"
import { useSelector } from "react-redux"
import { Button, Group } from "@mantine/core"
import htmlToImage from "html-to-image"

const QRDownloadButton = () => {
  const { mode, url, wifiSsid } = useSelector((state) => state.qr)
  const qrRef = useRef(null)

  const handleDownload = () => {
    if ((mode === "url" && !url) || (mode === "wifi" && !wifiSsid)) return
    htmlToImage.toPng(qrRef.current).then((dataUrl) => {
      const link = document.createElement("a")
      link.href = dataUrl
      link.download = "qr_code.png"
      link.click()
    })
  }

  return (
    <Group position="center">
      <Button
        onClick={handleDownload}
        disabled={(mode === "url" && !url) || (mode === "wifi" && !wifiSsid)}
      >
        Download QR Code
      </Button>
    </Group>
  )
}

export default QRDownloadButton
