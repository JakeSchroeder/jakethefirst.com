import { Box, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import { FC } from "react";

let logo = (
  <svg width="46" height="25" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
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

const Start: FC = () => {
  return (
    <VStack w="100%" h="100%" justifyContent="space-between" py="8" color="white">
      <HStack justifyContent="space-between" alignItems="center" w="100%">
        {logo}
        <Heading fontSize="xl" as="h4" fontWeight="medium">
          10/100
        </Heading>
      </HStack>
      <Heading textAlign="center" as="h1" fontSize={{ base: "14vw", sm: "7vw", lg: "5vw" }}>
        Jake Schroeder
      </Heading>
      <Flex flexDir={{ base: "column", sm: "row" }} justifyContent="space-between" alignItems="center" w="100%">
        <Heading fontSize="xl" as="h4" fontWeight="medium" whiteSpace="nowrap">
          UX Desginer
        </Heading>
        <Box
          order={{ base: 3, sm: 0 }}
          h="2px"
          bg="white"
          w="10%"
          mx={{ base: "0", sm: "8" }}
          mt={{ base: "4", sm: "0" }}
        ></Box>
        <Heading fontSize="xl" as="h4" fontWeight="medium" whiteSpace="nowrap">
          Software Engineer
        </Heading>
      </Flex>
    </VStack>
  );
};

export default Start;
