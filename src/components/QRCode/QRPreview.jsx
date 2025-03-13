// QRPreview.jsx
import React from "react"
import { useSelector } from "react-redux"
import { QRCode } from "react-qrcode-logo"
import { useMantineTheme, Container } from "@mantine/core"

const QRPreview = React.forwardRef((props, ref) => {
  const {
    mode,
    url,
    wifiSsid,
    wifiPassword,
    size,
    ecLevel,
    qrStyle,
    bgColor,
    fgColor,
    eyeColor
  } = useSelector((state) => state.qr)
  
  const theme = useMantineTheme()
  const isDarkMode = theme.colorScheme === "dark"
  const qrBgColor = isDarkMode ? theme.colors.dark[7] : bgColor

  // Build the QR code value based on the mode.
  let qrValue = ""
  if (mode === "wifi") {
    if (wifiSsid) {
      // Standard WiFi QR code format (assuming WPA).
      qrValue = `WIFI:S:${wifiSsid};T:WPA;P:${wifiPassword};;`
    }
  } else {
    qrValue = url
  }

  return (
    <Container
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {qrValue && (
        <QRCode
          value={qrValue}
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
})

export default QRPreview
