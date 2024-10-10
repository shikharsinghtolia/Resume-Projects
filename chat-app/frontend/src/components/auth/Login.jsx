import React, { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  const toast = useToast();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    setLoading(true)
    if(!email||!password){
      toast({
        title: "Fill all the required fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
      setLoading(false)
      return
    }
    try {
      const config = {
        headers:{
          "Content-type": "application/json",
        }
      }
      const { data } = await axios.post(
        "/api/user/login",
        {email, password},
        config
      );
      toast({
        title: "Login is  Complete",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
    } catch (error) {
      toast({
        title: "Error Occured",
        status: "error",
        description: error.response.data.message,
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
      setLoading(false);
    }
  }

  return (
    <VStack>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter Your Password"
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size={"sm"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <InputGroup />
      </FormControl>
      <Button
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>
      <Button
        colorScheme="red"
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={() => {
          setemail("guest@example.com");
          setPassword("1234567");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
