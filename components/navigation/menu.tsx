import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Heading,
  HStack,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";

interface MenuProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose, onOpen }) => {
  const closeButtonRef = useRef(null);

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" initialFocusRef={closeButtonRef} onClose={onClose} size="full">
        <DrawerContent bg="brand" p="0" color="white">
          <DrawerHeader p="0">
            <HStack justifyContent="space-between" alignItems="center" w="100%" px="4" pt="6">
              <Heading as="h3" fontSize="lg" fontWeight="medium">
                Jake Schroeder
              </Heading>

              <Button
                ref={closeButtonRef}
                onClick={() => {
                  onClose();
                }}
                fontWeight="normal"
                fontSize="md"
                textTransform="capitalize"
                variant="outline"
                py="2"
                w="70px"
                _hover={{ bg: "none" }}
                _active={{ bg: "none" }}
                _focus={{ boxShadow: "0px 0px 8px #ffffff66" }}
                borderRadius="5px"
              >
                Close
              </Button>
            </HStack>
          </DrawerHeader>

          <DrawerBody>
            <Center h="100%" w="100%">
              <UnorderedList listStyleType="none" spacing="4" textAlign="center" p="0" m="0">
                <ListItem fontSize="3xl" fontWeight="medium">
                  <Link href="/projects">Projects</Link>
                </ListItem>
                <ListItem fontSize="3xl" fontWeight="medium">
                  <Link href="/about">About</Link>
                </ListItem>
                <ListItem fontSize="3xl" fontWeight="medium">
                  <Link href="/blog">Blog</Link>
                </ListItem>
                <ListItem fontSize="3xl" fontWeight="medium">
                  <Link href="/contact">Contact</Link>
                </ListItem>
              </UnorderedList>
            </Center>
          </DrawerBody>

          <DrawerFooter p="0">
            <HStack justifyContent="space-between" alignItems="center" px="4" pb="6" w="100%">
              <Heading as="h5" fontSize="md" fontWeight="normal">
                Designer
              </Heading>
              <Heading as="h5" fontSize="md" fontWeight="normal">
                Engineer
              </Heading>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
