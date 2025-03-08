import { useState } from "react"
import { Burger, Menu } from "@mantine/core"
import { useMantineColorScheme } from "@mantine/core"

export function ColorSchemeToggle() {
    const [opened, setOpened] = useState(false)
    const { setColorScheme } = useMantineColorScheme()

    return (
        <Menu shadow="md" width={120} opened={opened} onChange={setOpened}>
            <Menu.Target>
                <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                />
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item onClick={() => setColorScheme("light")}>
                    Light
                </Menu.Item>
                <Menu.Item onClick={() => setColorScheme("dark")}>
                    Dark
                </Menu.Item>
                <Menu.Item onClick={() => setColorScheme("auto")}>
                    Auto
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}
