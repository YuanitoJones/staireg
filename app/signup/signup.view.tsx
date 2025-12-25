import CardComponent from "@/components/Cards/CardComponent"
import { InputTextField } from "@/components/Inputs/InputTextField"
import { Button, Container, HStack, Text } from "@chakra-ui/react"
import { signupLogic } from "./signup.types"

export function SignupPageView({register, onSubmit}: signupLogic){
    return <Container display={"flex"} maxW={"xl"} height={"3xl"} justifyContent={"center"} alignItems={"center"}>
        <form onSubmit={onSubmit}>
        <CardComponent
        lg={{maxHeight:"md", maxW:"xl"}}
        md={{maxHeight:"lg", maxW:"sm"}}
        title={{
            children:
                <Text>Registrate</Text>}
        }
        description={{
            fontSize:"xl",
            description:"Llena los campos registrar tu cuenta"
        }}
        body={{
            children:
                <HStack w="full" flexWrap={"wrap"}>
                    <InputTextField
                    register={register}
                    sm={{width:"100%"}}
                    lg={{width:"49%"}}
                    label="Nombre(s)"
                    field="name"
                    required
                    />
                    <InputTextField
                    register={register}
                    sm={{width:"100%"}}
                    md={{width:"100%"}}
                    lg={{width:"49%"}}
                    label="Apellidos"
                    field="lastName"
                    required
                    />
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
                <Button variant="outline">Cancel</Button>
                <Button variant="solid" type="submit">Registrarme</Button>
            </HStack>
        }}
        />
        </form>
    </Container>
}