import { Flex, Link, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";

const FlexMotion = motion(Flex);

export const Creator = () => {
  return (
    <FlexMotion
      animate={{
        opacity: [0, 1],
      }}
      transition={{ duration: 1 }}
      position="absolute"
      bottom="5"
      alignItems="center"
      fontSize="sm"
    >
      <Text fontSize="xs">
        Made with 🖤 by{" "}
        <Link
          href="https://github.com/GuiCoutoSt"
          target="_blank"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            as="span"
            padding="2px"
            fontWeight="medium"
            _hover={{
              borderRadius: "3px",
              textDecoration: "none",
              backgroundColor: "black",
              color: "white",
              transition: "0.3s",
            }}
          >
            GuiCoutoSt
          </Text>
        </Link>{" "}
      </Text>
    </FlexMotion>
  );
};
