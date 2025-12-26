'use client'
import Header from "@/components/ui/header"
import { Provider } from "@/components/ui/provider"
import { UserProvider } from "@/lib/context/userContext"

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <UserProvider>
          <Header/>
          {children}
          </UserProvider>
        </Provider>
      </body>
    </html>
  )
}