import { Flex } from "@chakra-ui/react";

import { Card } from "./components/Card";
import { Creator } from "./components/Creator";

export const App = () => {
  return (
    <Flex
      h="100vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Card />
      <Creator />
    </Flex>
  );
};

export default App;
