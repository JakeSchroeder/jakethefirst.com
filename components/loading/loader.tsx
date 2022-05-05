import { Box, Center, flexbox } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const logoAnimation = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.01,
    },
  },
};

const logoAnimationPath = {
  hide: { opacity: 0, x: 10 },
  show: { opacity: 1, x: 0 },
};

interface LogoProps {
  isLoading: boolean;
}
const Logo: FC<LogoProps> = ({ isLoading }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isLoading) {
      controls.set("hide");
      controls.start("show");
    } else {
      controls.set("hide");
      controls.start("show");
    }

    console.log("is loading, " + isLoading);
  }, [isLoading]);

  return (
    <motion.svg
      initial={"hide"}
      animate={controls}
      variants={logoAnimation}
      width="46"
      height="25"
      viewBox="0 0 46 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transition={{
        duration: 0.2,
      }}
    >
      <motion.path
        variants={logoAnimationPath}
        d="M2.20419 0H0V24.0312H2.20419V0Z"
        fill="#C2D3FF"
      />
      <motion.path
        variants={logoAnimationPath}
        d="M4.22319 0H3.12109V24.0312H4.22319V0Z"
        fill="#ffffff"
      />
      <motion.path
        variants={logoAnimationPath}
        d="M7.16468 0H5.87891V24.0312H7.16468V0Z"
        fill="#bababa"
      />
      <motion.path
        variants={logoAnimationPath}
        d="M12.1256 0H10.8398V24.0312H12.1256V0Z"
        fill="#bababa"
      />
      <motion.path
        variants={logoAnimationPath}
        d="M14.6942 0H13.041V24.0312H14.6942V0Z"
        fill="#ffffff"
      />
      <motion.path
        variants={logoAnimationPath}
        d="M34.3486 0H32.3281V24.0312H34.3486V0Z"
        fill="#bababa"
      />
      <motion.path
        variants={logoAnimationPath}
        d="M45.001 0H42.9805V24.0312H45.001V0Z"
        fill="#bababa"
      />
      <motion.path
        variants={logoAnimationPath}
        d="M25.3485 0H23.6953V24.0312H25.3485V0Z"
        fill="#ffffff"
      />
      <motion.path
        variants={logoAnimationPath}
        d="M18.7339 0H15.7949V24.0312H18.7339V0Z"
        fill="#bababa"
      />
      <motion.path
        variants={logoAnimationPath}
        d="M31.2259 0H28.6543V24.0312H31.2259V0Z"
        fill="#C2D3FF"
      />
      <motion.path
        variants={logoAnimationPath}
        d="M40.2259 0H37.4707V24.0312H40.2259V0Z"
        fill="#ffffff"
      />
      <motion.path
        variants={logoAnimationPath}
        d="M12.1256 0H10.8398V24.0312H12.1256V0Z"
        fill="#bababa"
      />
      <motion.path
        variants={logoAnimationPath}
        d="M22.776 0H21.4902V24.0312H22.776V0Z"
        fill="#bababa"
      />
      <motion.path
        variants={logoAnimationPath}
        d="M42.0629 0H41.1445V24.0312H42.0629V0Z"
        fill="#bababa"
      />
    </motion.svg>
  );
};

interface LoaderProps {
  isLoading: boolean;
}

const Loader: FC<LoaderProps> = ({ isLoading }) => {
  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: "999",
        height: "100vh",
        width: "100vw",
      }}
      animate={{
        width: isLoading ? "100vw" : "0vw",
        right: isLoading ? 0 : -40,
      }}
      transition={{
        duration: 1,
        delay: 0.2,
        ease: [0.83, 0, 0.17, 1],
      }}
    >
      <Center h="100%" w="100%" bg="brand">
        <Box minW="46px">
          <Logo isLoading={isLoading} />
        </Box>
      </Center>
    </motion.div>
  );
};

export default Loader;
