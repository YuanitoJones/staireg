import Header from "@/components/ui/header"
import { Provider } from "@/components/ui/provider"
import { ChakraProvider } from "@chakra-ui/react"

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Header/>
          {children}
        </Provider>
      </body>
    </html>
  )
}