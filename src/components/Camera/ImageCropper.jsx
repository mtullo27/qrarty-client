import { useState, useCallback } from "react"
import Cropper from "react-easy-crop"
import { Button, Modal, Slider } from "@mantine/core"
import getCroppedImg from "../../utils/cropImage"

const ImageCropper = ({ image, onComplete, onCancel }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

    const onCropComplete = useCallback((_, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const handleCropDone = useCallback(async () => {
        const croppedImage = await getCroppedImg(image, croppedAreaPixels)
        onComplete(croppedImage)
    }, [croppedAreaPixels, image])

    return (
        <Modal
            opened={true}
            onClose={() => onCancel()}
            title="Crop Image"
            centered
            size="lg"
        >
            <div style={{ position: "relative", height: 400 }}>
                <Cropper
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                />
            </div>
            <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                onChange={setZoom}
                label="Zoom"
                style={{ marginTop: 20 }}
            />
            <Button
                fullWidth
                onClick={onCancel}
                variant="outline"
                style={{ marginTop: 10 }}
            >
                Cancel
            </Button>
            <Button
                fullWidth
                onClick={() => onCrop(croppedAreaPixels)}
                style={{ marginTop: 10 }}
            >
                Save
            </Button>
        </Modal>
    )
}

export default ImageCropper
