import { createTheme } from "@mantine/core"

export const theme = createTheme({
    colorScheme: "light",
    primaryColor: "lavender",
    colors: {
        lavender: [
            "#f3e8ff",
            "#e0cfff",
            "#cdb6ff",
            "#ba9dff",
            "#a784ff",
            "#946bff",
            "#8152ff",
            "#6e39ff",
            "#5b20ff",
            "#4807ff"
        ]
    },
    shadows: {
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        xl: "0 10px 15px rgba(0, 0, 0, 0.1)"
    },
    headings: {
        fontFamily: "Arial, sans-serif",
        sizes: {
            h1: { fontSize: 30 },
            h2: { fontSize: 24 },
            h3: { fontSize: 20 }
        }
    },
    other: {
        dark: {
            colorScheme: "dark",
            primaryColor: "lavender",
            colors: {
                lavender: [
                    "#f3e8ff",
                    "#e0cfff",
                    "#cdb6ff",
                    "#ba9dff",
                    "#a784ff",
                    "#946bff",
                    "#8152ff",
                    "#6e39ff",
                    "#5b20ff",
                    "#4807ff"
                ]
            },
            shadows: {
                md: "0 4px 6px rgba(0, 0, 0, 0.1)",
                xl: "0 10px 15px rgba(0, 0, 0, 0.1)"
            },
            headings: {
                fontFamily: "Arial, sans-serif",
                sizes: {
                    h1: { fontSize: 30 },
                    h2: { fontSize: 24 },
                    h3: { fontSize: 20 }
                }
            }
        }
    }
})
