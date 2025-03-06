import { createSlice } from "@reduxjs/toolkit"

const qrSlice = createSlice({
    name: "qr",
    initialState: {
        url: "",
        size: 256,
        ecLevel: "L", // Changed from "version"
        qrStyle: "squares",
        bgColor: "#ffffff",
        fgColor: "#000000",
        logoImage: "",
        logoWidth: 50,
        logoHeight: 50,
        eyeColor: "#000000"
    },
    reducers: {
        setUrl: (state, action) => {
            state.url = action.payload
        },
        setSize: (state, action) => {
            state.size = action.payload
        },
        setEcLevel: (state, action) => {
            state.ecLevel = action.payload
        },
        setQrStyle: (state, action) => {
            state.qrStyle = action.payload
        },
        setBgColor: (state, action) => {
            state.bgColor = action.payload
        },
        setFgColor: (state, action) => {
            state.fgColor = action.payload
        },
        setLogoImage: (state, action) => {
            state.logoImage = action.payload
        },
        setLogoWidth: (state, action) => {
            state.logoWidth = action.payload
        },
        setLogoHeight: (state, action) => {
            state.logoHeight = action.payload
        },
        setEyeColor: (state, action) => {
            state.eyeColor = action.payload
        }
    }
})

export const {
    setUrl,
    setSize,
    setEcLevel,
    setQrStyle,
    setBgColor,
    setFgColor,
    setLogoImage,
    setLogoWidth,
    setLogoHeight,
    setEyeColor
} = qrSlice.actions

export default qrSlice.reducer
