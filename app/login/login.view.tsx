import CardComponent from "@/components/Cards/CardComponent";
import { InputTextField } from "@/components/Inputs/InputTextField";
import { Button, Container, HStack, Text } from "@chakra-ui/react";
import { loginLogic } from "./login.types";

export function LoginPageView({register, onSubmit}:loginLogic){
    return <Container display={"flex"} maxW={"xl"} height={"3xl"} justifyContent={"center"} alignItems={"center"}>
        <form onSubmit={onSubmit}>
        <CardComponent
        lg={{maxHeight:"md", maxW:"xl"}}
        md={{maxHeight:"lg", maxW:"sm"}}
        title={{
            children:
                <Text>Iniciar sesión</Text>}
        }
        description={{
            fontSize:"xl",
            textAlign:"center",
            description:"Accede a tu cuenta"
        }}
        body={{
            children:
                <HStack w="full" flexWrap={"wrap"}>
                    <InputTextField
                    register={register}
                    fullWidth
                    label="Correo"
                    field="email"
                    required
                    type={"email"}
                    />
                    <InputTextField
                    register={register}
                    fullWidth
                    label="Contraseña"
                    field="password"
                    required
                    type="password"
                    />
                </HStack>
        }}
        footer={{
            justifyContent:"flex-end",
            children:
            <HStack display={"flex"} spaceX={2}>
                <a href="./signup" style={{fontSize:"12px"}}>Crear cuenta</a>
                <Button variant="outline">Cancel</Button>
                <Button variant="solid" type="submit">Iniciar sesión</Button>
            </HStack>
        }}
        />
        </form>
    </Container>
}