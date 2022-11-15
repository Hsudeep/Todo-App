import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Editable,
  EditablePreview,
  EditableInput,
  EditableTextarea,
} from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../Redux/AuthReducer/action";
import { REGISTER_SUCCESS } from "../Redux/AuthReducer/actionTypes";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  function reducer(state, action) {
    let { type, payload } = action;
    switch (type) {
      case "name": {
        return {
          ...state,
          name: payload,
        };
      }
      case "email": {
        return {
          ...state,
          email: payload,
        };
      }
      case "password": {
        return {
          ...state,
          password: payload,
        };
      }
      case "username": {
        return {
          ...state,
          username: payload,
        };
      }
      case "description": {
        return {
          ...state,
          description: payload,
        };
      }

      default: {
        return state;
      }
    }
  }
  const initialState = {
    name: "",
    email: "",
    password: "",
    username: "",
    description: "",
  };

  const [state, formValueSetter] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(register(state)).then((res) => {
      if (res === REGISTER_SUCCESS) {
        navigate("/login", { replace: true });
      }
    });
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="Name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={state.name}
                onChange={(e) =>
                  formValueSetter({ type: "name", payload: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="userName" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={state.username}
                onChange={(e) =>
                  formValueSetter({ type: "username", payload: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={state.email}
                onChange={(e) =>
                  formValueSetter({ type: "email", payload: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={state.password}
                  onChange={(e) =>
                    formValueSetter({
                      type: "password",
                      payload: e.target.value,
                    })
                  }
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="description" isRequired>
              <FormLabel>Description</FormLabel>
              <Editable defaultValue="Enter Something About Yourself">
                <EditablePreview />
                <EditableTextarea
                  value={state.description}
                  onChange={(e) =>
                    formValueSetter({
                      type: "description",
                      payload: e.target.value,
                    })
                  }
                />
              </Editable>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleClick}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <RouterLink to={"/login"} color={"blue.400"}>
                  Login
                </RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
