import { Button, CloseButton, Drawer as ChakraDrawer, Portal, ButtonProps } from "@chakra-ui/react";
import React from "react";

export interface DrawerProps extends ChakraDrawer.RootProps {
   title: string;
   buttonProps: ButtonProps;
   footer?: React.ReactNode;
}

export const Drawer = React.forwardRef<HTMLElement, DrawerProps>(function Drawer(props, ref) {
   const { buttonProps, title, footer } = props;
   return (
      <ChakraDrawer.Root>
         <ChakraDrawer.Trigger asChild>
            <Button {...buttonProps} />
         </ChakraDrawer.Trigger>
         <Portal>
            <ChakraDrawer.Backdrop />
            <ChakraDrawer.Positioner>
               <ChakraDrawer.Content>
                  <ChakraDrawer.Header>{title && <ChakraDrawer.Title>{title}</ChakraDrawer.Title>}</ChakraDrawer.Header>
                  <ChakraDrawer.Body>{props.children}</ChakraDrawer.Body>
                  {footer && <ChakraDrawer.Footer>{footer}</ChakraDrawer.Footer>}
                  <ChakraDrawer.CloseTrigger asChild>
                     <CloseButton size="sm" />
                  </ChakraDrawer.CloseTrigger>
               </ChakraDrawer.Content>
            </ChakraDrawer.Positioner>
         </Portal>
      </ChakraDrawer.Root>
   );
});
