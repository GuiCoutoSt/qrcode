import { Flex } from "@chakra-ui/react";

import { Card } from "./components/Card";
import { Creator } from "./components/Creator";

export const App = () => {
  return (
    <>
      <Flex
        h="95vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Card />
      </Flex>
      <Creator />
    </>
  );
};

export default App;
