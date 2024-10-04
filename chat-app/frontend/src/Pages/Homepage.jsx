import {
  Container,
  Text,
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import React from "react";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";

const Homepage = () => {
  return (
    <Container maxH="xl" centerContent>
      <Box
        d="flex"
        alignItems="center"
        textAlign={"center"}
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="work sans" color={"black"}>
          Vartalap
        </Text>
      </Box>
      <Box
        bg={"white"}
        p={4}
        w="100%"
        borderRadius={"lg"}
        color={"black"}
        borderWidth={"1px"}
      >
        <Tabs variant="soft-rounded">
          <TabList mb={"1em"}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
