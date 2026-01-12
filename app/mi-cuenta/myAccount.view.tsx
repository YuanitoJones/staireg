
'use client'
import CardComponent from "@/components/Cards/CardComponent"
import InfoField from "@/components/ui/infoField"
import { UserContext } from "@/lib/context/userContext"
import { Box, Button, Container, Grid, HStack, Text, VStack } from "@chakra-ui/react"
import { useContext } from "react"

const MyAccountPageView = ()=>{
    return <Container maxWidth={"75%"} height={"2xl"} display={"flex"} alignItems={"center"} >
        <CardComponent
        title={{
            fontSize:"30px",
            display:"flex",
            justifyContent:"center",
            children:"Mi perfil"}}
        width={"100%"}
        body={{
            children: <MyAccountBodyComponent/>
        }}
        />
    </Container>
}

const MyAccountBodyComponent = ()=>{
    const userContext = useContext(UserContext)
    if(!userContext) throw new Error("User provider not present")
    const { user } = userContext
    return <VStack spaceY={3}>

    <HStack display={"flex"} flexWrap={"wrap"}>
        <InfoField
        label="Nombre"
        value={user.name}
        size="xl"
        />
        <InfoField
        label="Apellido"
        value={user.lastName}
        size="xl"
        />
        <InfoField
        label="Correo"
        value={user.email}
        size="xl"
        />
    </HStack>
        <Button alignSelf={"end"}>
            Editar información
        </Button>
    </VStack>
}
export default MyAccountPageView