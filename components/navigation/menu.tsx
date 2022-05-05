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
import { useRouter } from "next/router";
import { FC, MouseEvent, ReactNode, useRef } from "react";

let logo = (
  <svg
    width="46"
    height="25"
    viewBox="0 0 46 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.20419 0H0V24.0312H2.20419V0Z" fill="#C2D3FF" />
    <path d="M4.22319 0H3.12109V24.0312H4.22319V0Z" fill="#ffffff" />
    <path d="M7.16468 0H5.87891V24.0312H7.16468V0Z" fill="#bababa" />
    <path d="M12.1256 0H10.8398V24.0312H12.1256V0Z" fill="#bababa" />
    <path d="M14.6942 0H13.041V24.0312H14.6942V0Z" fill="#ffffff" />
    <path d="M34.3486 0H32.3281V24.0312H34.3486V0Z" fill="#bababa" />
    <path d="M45.001 0H42.9805V24.0312H45.001V0Z" fill="#bababa" />
    <path d="M25.3485 0H23.6953V24.0312H25.3485V0Z" fill="#ffffff" />
    <path d="M18.7339 0H15.7949V24.0312H18.7339V0Z" fill="#bababa" />
    <path d="M31.2259 0H28.6543V24.0312H31.2259V0Z" fill="#C2D3FF" />
    <path d="M40.2259 0H37.4707V24.0312H40.2259V0Z" fill="#ffffff" />
    <path d="M12.1256 0H10.8398V24.0312H12.1256V0Z" fill="#bababa" />
    <path d="M22.776 0H21.4902V24.0312H22.776V0Z" fill="#bababa" />
    <path d="M42.0629 0H41.1445V24.0312H42.0629V0Z" fill="#bababa" />
  </svg>
);

interface MobileLinkProps {
  href: string;
  children: ReactNode | ReactNode[];
  onClose: Function;
}

const MobileLink: FC<MobileLinkProps> = ({ href, children, onClose }) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();

    router.events.emit("routeChangeStart");
    setTimeout(() => {
      onClose();
      router.push(href);
    }, 1200);
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

interface MenuProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose, onOpen }) => {
  const closeButtonRef = useRef(null);

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={closeButtonRef}
        onClose={onClose}
        size="full"
      >
        <DrawerContent
          bg="brand"
          px="0"
          pt="0"
          color="white"
          pb="env(safe-area-inset-bottom)"
        >
          <DrawerHeader p="0">
            <HStack
              justifyContent="space-between"
              alignItems="center"
              w="100%"
              px="4"
              pt="4"
            >
              {logo}
              <Button
                ref={closeButtonRef}
                onClick={() => {
                  onClose();
                }}
                fontWeight="normal"
                fontSize="md"
                textTransform="capitalize"
                variant="unstyled"
                py="2"
                w="70px"
                _hover={{ bg: "none" }}
                _active={{ bg: "none" }}
                _focus={{ boxShadow: "none" }}
              >
                Close
              </Button>
            </HStack>
          </DrawerHeader>

          <DrawerBody>
            <Center h="100%" w="100%">
              <UnorderedList
                listStyleType="none"
                spacing="4"
                textAlign="center"
                p="0"
                m="0"
              >
                <ListItem fontSize="3xl" fontWeight="medium">
                  <MobileLink href="/" onClose={onClose}>
                    Home
                  </MobileLink>
                </ListItem>
                <ListItem fontSize="3xl" fontWeight="medium">
                  <MobileLink href="/projects" onClose={onClose}>
                    Projects
                  </MobileLink>
                </ListItem>
                <ListItem fontSize="3xl" fontWeight="medium">
                  <MobileLink href="/about" onClose={onClose}>
                    About
                  </MobileLink>
                </ListItem>

                <ListItem fontSize="3xl" fontWeight="medium">
                  <MobileLink href="/contact" onClose={onClose}>
                    Contact
                  </MobileLink>
                </ListItem>
              </UnorderedList>
            </Center>
          </DrawerBody>

          <DrawerFooter p="0">
            <HStack
              justifyContent="space-between"
              alignItems="center"
              px="4"
              pb="6"
              w="100%"
            >
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
