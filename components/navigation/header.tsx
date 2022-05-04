import { Button, Heading, HStack, ListItem, Text, UnorderedList, useDisclosure } from "@chakra-ui/react";
import { MotionConfig } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import Menu from "./menu";
import { motion } from "framer-motion";

const logo = (
  <svg xmlns="http://www.w3.org/2000/svg" width="46px" height="25px" fill="none" viewBox="0 0 46 25">
    <path fill="#0D51FF" d="M2.204 0H0v24.031h2.204V0z"></path>
    <path fill="#818181" d="M4.223 0H3.121v24.031h1.102V0z"></path>
    <path fill="#000" d="M7.165 0H5.879v24.031h1.286V0zM12.126 0H10.84v24.031h1.286V0z"></path>
    <path fill="#818181" d="M14.694 0h-1.653v24.031h1.653V0z"></path>
    <path fill="#000" d="M34.349 0h-2.02v24.031h2.02V0zM45.001 0h-2.02v24.031H45V0z"></path>
    <path fill="#818181" d="M25.349 0h-1.654v24.031h1.654V0z"></path>
    <path fill="#000" d="M18.734 0h-2.94v24.031h2.94V0z"></path>
    <path fill="#0D51FF" d="M31.226 0h-2.572v24.031h2.572V0z"></path>
    <path fill="#818181" d="M40.226 0H37.47v24.031h2.755V0z"></path>
    <path
      fill="#000"
      d="M12.126 0H10.84v24.031h1.286V0zM22.776 0H21.49v24.031h1.286V0zM42.063 0h-.919v24.031h.919V0z"
    ></path>
  </svg>
);

const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <motion.div
      style={{ width: "100%" }}
      initial={{ opacity: 0, y: "-80px" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.75, ease: [0.6, 0.01, -0.05, 0.95] }}
    >
      <HStack justifyContent="space-between" alignItems="center" w="100%" pt={{ base: "4", md: "10" }}>
        <HStack>
          {logo}
          <Heading as="h3" fontSize="lg" fontWeight="medium">
            <Link href="/">Jake Schroeder</Link>
          </Heading>
        </HStack>
        <UnorderedList listStyleType="none" display={["none", "none", "flex"]} textAlign="left" p="0" m="0">
          <ListItem
            position="relative"
            fontSize="md"
            fontWeight="normal"
            _after={{
              content: `"5"`,
              position: "absolute",
              top: "-4px",
              right: "-10px",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link href="/projects">Projects</Link>
          </ListItem>
          <ListItem fontSize="md" fontWeight="normal" ml="8">
            <Link href="/about">About</Link>
          </ListItem>
          {/* <ListItem fontSize="md" fontWeight="normal" ml="8">
            <Link href="/blog">Blog</Link>
          </ListItem> */}
          <ListItem fontSize="md" fontWeight="normal" ml="8">
            <Link href="/contact">Contact</Link>
          </ListItem>
        </UnorderedList>

        <Button
          variant="unstyled"
          display={["flex", "flex", "none"]}
          onClick={() => {
            onOpen();
          }}
          fontSize="md"
          fontWeight="normal"
          _focus={{ boxShadow: "none" }}
        >
          Menu
        </Button>
      </HStack>
      <Menu isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </motion.div>
  );
};

export default Header;
