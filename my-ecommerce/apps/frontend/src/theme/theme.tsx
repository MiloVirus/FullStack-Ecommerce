import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Rubik', sans-serif" },
        body: { value: "'Rubik', sans-serif" },
      }
    }
  }
})