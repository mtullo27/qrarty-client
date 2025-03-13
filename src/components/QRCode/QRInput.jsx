// QRInput.jsx
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { TextInput, SegmentedControl } from "@mantine/core"
import { setUrl, setMode, setWifiSsid, setWifiPassword } from "../../stores/qrSlice"

const QRInput = () => {
  const dispatch = useDispatch()
  const { mode, url, wifiSsid, wifiPassword } = useSelector((state) => state.qr)

  const handleModeChange = (value) => {
    dispatch(setMode(value))
  }

  return (
    <div>
      <SegmentedControl
        fullWidth
        value={mode}
        onChange={handleModeChange}
        data={[
          { label: 'URL', value: 'url' },
          { label: 'WiFi', value: 'wifi' }
        ]}
      />
      {mode === "wifi" ? (
        <>
          <TextInput
            label="WiFi Network Name (SSID)"
            placeholder="Enter WiFi SSID"
            value={wifiSsid}
            onChange={(e) => dispatch(setWifiSsid(e.target.value))}
            mt="md"
          />
          <TextInput
            label="WiFi Password"
            placeholder="Enter WiFi Password"
            value={wifiPassword}
            onChange={(e) => dispatch(setWifiPassword(e.target.value))}
            mt="md"
          />
        </>
      ) : (
        <TextInput
          label="Enter URL"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => dispatch(setUrl(e.target.value))}
          mt="md"
        />
      )}
    </div>
  )
}

export default QRInput
