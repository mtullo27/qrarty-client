import { Center, Box } from "@mantine/core"
import CameraCapture from "../components/Camera/CameraCapture"

const CameraPage = () => (
    <Center>
        <Box style={{ width: "95%", height: "100%" }}>
            <CameraCapture />
        </Box>
    </Center>
)

export default CameraPage
