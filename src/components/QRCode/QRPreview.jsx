import React from "react"
import { useSelector } from "react-redux"
import { QRCode } from "react-qrcode-logo"
import { useMantineTheme, Container } from "@mantine/core"

const QRPreview = () => {
    const { url, size, ecLevel, qrStyle, bgColor, fgColor, eyeColor } =
        useSelector((state) => state.qr)
    const theme = useMantineTheme()
    const isDarkMode = theme.colorScheme === "dark"
    const qrBgColor = isDarkMode ? theme.colors.dark[7] : bgColor

    return (
        <Container
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            {url && (
                <QRCode
                    value={url}
                    size={size}
                    ecLevel={ecLevel}
                    qrStyle={qrStyle}
                    bgColor={qrBgColor}
                    fgColor={fgColor}
                    eyeColor={eyeColor}
                />
            )}
        </Container>
    )
}

export default QRPreview
