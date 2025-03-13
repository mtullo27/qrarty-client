import { createSlice } from "@reduxjs/toolkit"

const qrSlice = createSlice({
    name: "qr",
    initialState: {
        mode: "url",           
        url: "",
        wifiSsid: "",          
        wifiPassword: "",      
        size: 256,
        ecLevel: "L", 
        qrStyle: "squares",
        bgColor: "#ffffff",
        fgColor: "#000000",
        logoImage: "",
        logoWidth: 50,
        logoHeight: 50,
        eyeColor: "#000000"
    },
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload
        },
        setUrl: (state, action) => {
            state.url = action.payload
        },
        setWifiSsid: (state, action) => {
            state.wifiSsid = action.payload
        },
        setWifiPassword: (state, action) => {
            state.wifiPassword = action.payload
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
    setMode,
    setUrl,
    setWifiSsid,
    setWifiPassword,
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
