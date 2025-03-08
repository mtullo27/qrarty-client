import { Image, Text } from "@mantine/core"

const ImagePreview = ({ image }) => (
    <>
        <Text align="center">Preview:</Text>
        <Image
            src={image}
            radius="md"
            style={{ maxWidth: "100%" }}
            alt="Captured preview"
        />
    </>
)

export default ImagePreview
