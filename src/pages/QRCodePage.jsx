import React from "react"
import { Container, Title, Paper, Stack } from "@mantine/core"
import QRInput from "../components/QRCode/QRInput"
import QRControls from "../components/QRCode/QRControls"
import QRPreview from "../components/QRCode/QRPreview"
//import QRDownloadButton from "../components/QRDownloadButton";

const QRCodePage = () => {
    return (
        <Container size="sm">
            <Title align="center" mt="md">
                QR Code Generator
            </Title>
            <Paper shadow="md" p="lg" mt="md">
                <Stack spacing="md">
                    <QRInput />
                    <QRControls />
                    <QRPreview />
                    {/* <QRDownloadButton /> */}
                </Stack>
            </Paper>
        </Container>
    )
}

export default QRCodePage
