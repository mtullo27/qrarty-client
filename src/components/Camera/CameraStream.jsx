import { useEffect, useRef } from "react"

const CameraStream = ({ stream, onVideoReady }) => {
    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream
            onVideoReady(videoRef.current)
        }
    }, [stream, onVideoReady])

    return (
        <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: "scaleX(-1)"
            }}
        />
    )
}

export default CameraStream
