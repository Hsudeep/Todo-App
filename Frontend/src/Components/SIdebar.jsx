import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const SIdebar = () => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  return (
    <Box border={"1px solid red"} width="250px" height={"100vh"}>
      <Stack direction={"column"}>
        <Box height="20vh" border={"1px solid red"}>
          {/* user profile */}
        </Box>

        <Box height="60vh" border={"1px solid blue"}>
          {/* filters */}
          <Flex direction="column">
            <Box border={"1px solid blue"}>
              <Flex p="0px 10px">
                <Text>All</Text>
                <Text ml="auto">23</Text>
              </Flex>
            </Box>
            <Box border={"1px solid blue"}>
              <Flex p="0px 10px">
                <Text>All</Text>
                <Text ml="auto">23</Text>
              </Flex>
            </Box>
            <Box border={"1px solid blue"}>
              <Flex p="0px 10px">
                <Text>All</Text>
                <Text ml="auto">23</Text>
              </Flex>
            </Box>
            <Box border={"1px solid blue"}>
              <Flex p="0px 10px">
                <Text>All</Text>
                <Text ml="auto">23</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>

        {/* logout */}
        <Box height="15vh" border={"1px solid red"}>
          <Button w="100%" textAlign={"center"}>
            {isAuth && "Logout"}
          </Button> 
        </Box>
      </Stack>
    </Box>
  );
};

export default SIdebar;
