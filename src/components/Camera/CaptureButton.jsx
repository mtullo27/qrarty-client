import { ActionIcon, Tooltip } from "@mantine/core"
import { IconCamera } from "@tabler/icons-react"

const CaptureButton = ({ onClick }) => (
    <Tooltip label="Capture Photo" position="top" withArrow>
        <ActionIcon
            variant="filled"
            size="xl"
            radius="xl"
            color="dark"
            style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                transition: "transform 0.2s ease"
            }}
            onClick={onClick}
            onMouseDown={(e) =>
                (e.currentTarget.style.transform = "scale(0.9)")
            }
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
            <IconCamera size={32} stroke={1.5} />
        </ActionIcon>
    </Tooltip>
)

export default CaptureButton
