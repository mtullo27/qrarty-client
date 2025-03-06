import { AppShell, Burger, Group } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Link } from "react-router-dom"
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle"
import classes from "./AppHeader.module.css"

export function AppHeader({ children }) {
    const [opened, { toggle }] = useDisclosure()

    return (
        <AppShell padding="md">
            {/* Header */}
            <AppShell.Header className={classes.header}>
                <Group justify="space-between" className={classes.inner}>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <ColorSchemeToggle />
                </Group>
            </AppShell.Header>

            {/* Main Content */}
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}
