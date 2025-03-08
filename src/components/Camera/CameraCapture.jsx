import { useEffect, useRef, useState } from "react"
import { Box, Loader } from "@mantine/core"
import { notifications } from "@mantine/notifications"
import CameraStream from "./CameraStream"
import CaptureButton from "./CaptureButton"
import ImageCropper from "./ImageCropper"

const CameraCapture = () => {
    const [stream, setStream] = useState(null)
    const [videoElement, setVideoElement] = useState(null)
    const [capturedImage, setCapturedImage] = useState(null)
    const [showCropper, setShowCropper] = useState(false)
    const canvasRef = useRef(document.createElement("canvas"))

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ video: { facingMode: "environment" } })
            .then(setStream)
            .catch(() =>
                notifications.show({
                    message: "Cannot access camera",
                    color: "red"
                })
            )

        return () => stream?.getTracks().forEach((track) => track.stop())
    }, [])

    const handleCapture = () => {
        if (!videoElement) return
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")

        canvas.width = videoElement.videoWidth
        canvas.height = videoElement.videoHeight

        // Flip the canvas horizontally to match video stream
        ctx.translate(canvas.width, 0)
        ctx.scale(-1, 1)

        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height)

        // Reset canvas transform after drawing
        ctx.scale(-1, 1)
        ctx.translate(-canvas.width, 0)

        setCapturedImage(canvas.toDataURL("image/jpeg", 1))
        setShowCropper(true)
    }

    return (
        <Box style={{ position: "relative", height: "100%", width: "100%" }}>
            {stream ? (
                !showCropper ? (
                    <>
                        <CameraStream
                            stream={stream}
                            onVideoReady={setVideoElement}
                        />
                        <Box
                            style={{
                                position: "absolute",
                                bottom: "20px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                zIndex: 10
                            }}
                        >
                            <CaptureButton onClick={handleCapture} />
                        </Box>
                    </>
                ) : (
                    <ImageCropper
                        image={capturedImage}
                        onComplete={(img) => {
                            setCapturedImage(img)
                            setShowCropper(false)
                        }}
                        onCancel={() => setShowCropper(false)}
                    />
                )
            ) : (
                <Loader
                    size="lg"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }}
                />
            )}
        </Box>
    )
}

export default CameraCapture
