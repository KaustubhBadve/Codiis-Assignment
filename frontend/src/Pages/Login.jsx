import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import style from "./CSS/Login.module.css"


export default function Login() {
  const toast = useToast({position: "top"});
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const HandleLogin = () => {
    if (email && password) {
      let payload = {
        email,
        password,
      };
      axios
        .post("https://codissstream.herokuapp.com/auth/login", payload)
        .then((r) => {
          if (r.data.role === "admin") {
            navigate("/admin", { replace: true });
          } 
          else if(r.data.role == "customer") {
            navigate("/checkSubscription", { replace: true });
          }
          if (r.status == 200) {
            toast({
              title: "Login Success",
              description: " ",
              status: "success",
              duration: 4000,
              isClosable: true,
            });
            localStorage.setItem("token", r.data.token);
            localStorage.setItem("name", r.data.name);
            localStorage.setItem("role", r.data.role);
          }   
        }).catch((err)=>{
            toast({
                title: "Invalid Credential",
                duration: 5000,
                isClosable: true,
              });
        })
    }
  };

  return (
    <>
      <Navbar />
      <Flex
         className="B"
         minH={'92vh'}
         align={'center'}
         justify={'center'}
         bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={"auto"}  w={"2xl"} maxW={"3xl"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading  fontSize={"4xl"} color="twitter.900" borderRadius="10px"  backgroundColor="whitesmoke" p="15px" textAlign={"center"}>Login to your account</Heading>
            <Text fontSize={"lg"} color="twitter.900" borderRadius="10px"  p="10px" backgroundColor="whitesmoke">
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={HandleLogin}
                >
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
