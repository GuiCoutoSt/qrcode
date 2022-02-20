import { Box, Flex, Image, Text } from "@chakra-ui/react";
import qrcode from "../../assets/images/qr-code.png";

import { motion } from "framer-motion";

const MotionCard = motion(Box);

export const Card = () => {
  return (
    <MotionCard
      animate={{
        y: [-50, 0],
        opacity: [0, 1],
      }}
      transition={{ duration: 1 }}
      padding="20px"
      backgroundColor="white"
      boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
      borderRadius="10px"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        w="220px"
        mb="15px"
        borderRadius="15px"
        backgroundColor="blue.300"
      >
        <Image src={qrcode} borderRadius="10px" alt="qrcode" />
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="center"
        w="220px"
        textAlign="center"
      >
        <Text mb="10px" fontWeight="semibold">
          Improve your front-end skills by building projects
        </Text>
        <Text fontSize="xs" fontWeight="medium" color="gray.500">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </Text>
      </Flex>
    </MotionCard>
  );
};
