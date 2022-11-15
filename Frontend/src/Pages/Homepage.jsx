import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
  const tasks = useSelector((state)=>state.AppReducer.tasks)
  const dispatch = useDispatch()
  const getTasksHandler =() =>{
    dispatch()
  }
  useEffect(()=>{
    if(tasks.length === 0){
      getTasksHandler()
    }
  },[])
  return (
    <Box border={"1px solid green"} width="100%">
      <Flex justifyContent={"space-around"}>
        <Box>
          {/* todo */}
          <Box border={"1px solid black"} width="250px" height={"95vh"}>
            <Box>
              <Text textAlign={"center"}>TODO</Text>
            </Box>
          </Box>
        </Box>
        <Box>
          {/* in progress */}
          <Box border={"1px solid black"} width="250px" height={"95vh"}>
            <Box>
              <Text textAlign={"center"}>IN Progress</Text>
            </Box>
          </Box>
        </Box>
        <Box>
          {/* Completed */}
          <Box border={"1px solid black"} width="250px" height={"95vh"}>
            <Box>
              <Text textAlign={"center"}>Completed</Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Homepage;
