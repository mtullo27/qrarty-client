import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    setSize,
    setEcLevel,
    setBgColor,
    setFgColor,
    setQrStyle,
    setEyeColor
} from "../../stores/qrSlice"
import { Slider, Select, ColorInput, Stack } from "@mantine/core"

const QRControls = () => {
    const dispatch = useDispatch()
    const { size, ecLevel, bgColor, fgColor, qrStyle, eyeColor } = useSelector(
        (state) => state.qr
    )

    return (
        <Stack spacing="md">
            <Slider
                label="Size"
                min={100}
                max={500}
                value={size}
                onChange={(val) => dispatch(setSize(val))}
            />
            <Select
                label="Error Correction Level"
                data={["L", "M", "Q", "H"]}
                value={ecLevel}
                onChange={(val) => dispatch(setEcLevel(val))}
            />
            <Select
                label="QR Style"
                data={["squares", "dots"]}
                value={qrStyle}
                onChange={(val) => dispatch(setQrStyle(val))}
            />
            <ColorInput
                label="Background Color"
                value={bgColor}
                onChange={(val) => dispatch(setBgColor(val))}
            />
            <ColorInput
                label="Foreground Color"
                value={fgColor}
                onChange={(val) => dispatch(setFgColor(val))}
            />
            <ColorInput
                label="Eye Color"
                value={eyeColor}
                onChange={(val) => dispatch(setEyeColor(val))}
            />
        </Stack>
    )
}

export default QRControls
