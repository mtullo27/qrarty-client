import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setVersion } from "../../stores/qrSlice"
import { NumberInput } from "@mantine/core"

const QRVersionSelector = () => {
    const dispatch = useDispatch()
    const version = useSelector((state) => state.qr.version)

    return (
        <NumberInput
            label="QR Code Version"
            min={3}
            max={40}
            value={version}
            onChange={(val) => dispatch(setVersion(val))}
        />
    )
}

export default QRVersionSelector
