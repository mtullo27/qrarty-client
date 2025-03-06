import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUrl } from "../../stores/qrSlice"
import { TextInput } from "@mantine/core"

const QRInput = () => {
    const dispatch = useDispatch()
    const url = useSelector((state) => state.qr.url)

    return (
        <TextInput
            label="Enter URL"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => dispatch(setUrl(e.target.value))}
        />
    )
}

export default QRInput
