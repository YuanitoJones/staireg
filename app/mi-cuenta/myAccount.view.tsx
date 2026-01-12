"use client";
import CardComponent from "@/components/Cards/CardComponent";
import { InputTextField } from "@/components/Inputs/InputTextField";
import { Drawer } from "@/components/ui/Drawer";
import InfoField from "@/components/ui/infoField";
import { UserContext } from "@/lib/context/userContext";
import { Button, Container, HStack, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { myAccountLogic } from "./myAccount.types";

const MyAccountPageView = (accountLogic: myAccountLogic) => {
   return (
      <Container maxWidth={"75%"} height={"2xl"} display={"flex"} alignItems={"center"}>
         <CardComponent
            title={{
               fontSize: "30px",
               display: "flex",
               justifyContent: "center",
               children: "Mi perfil",
            }}
            width={"100%"}
            body={{
               children: <MyAccountBodyComponent {...accountLogic} />,
            }}
         />
      </Container>
   );
};

const MyAccountBodyComponent = ({ register, userInfoForm }: myAccountLogic) => {
   const userContext = useContext(UserContext);
   if (!userContext) throw new Error("User provider not present");
   const { user } = userContext;
   return (
      <VStack spaceY={3}>
         <HStack display={"flex"} flexWrap={"wrap"}>
            <InfoField label="Nombre" value={user.name} size="xl" />
            <InfoField label="Apellido" value={user.lastName} size="xl" />
            <InfoField label="Correo" value={user.email} size="xl" />
         </HStack>
         <Drawer
            title="Editar información"
            open={true}
            buttonProps={{
               children: <Text>Editar información</Text>,
               alignSelf: "end",
            }}
            footer={
               <HStack>
                  <Button variant={"outline"} type="button">
                     Cancelar
                  </Button>
                  <Button type="submit">Guardar</Button>
               </HStack>
            }
         >
            <VStack spaceY={3} width={"100%"}>
               <InputTextField
                  field={"name"}
                  label="Nombre(s)"
                  register={register}
                  fullWidth
                  defaultValue={userInfoForm?.name}
               />
               <InputTextField
                  field={"lastName"}
                  label="Apellidos"
                  register={register}
                  fullWidth
                  defaultValue={userInfoForm?.lastName}
               />
               <InputTextField
                  field={"email"}
                  label="Correo"
                  register={register}
                  fullWidth
                  defaultValue={userInfoForm?.email}
               />
            </VStack>
         </Drawer>
      </VStack>
   );
};
export default MyAccountPageView;
