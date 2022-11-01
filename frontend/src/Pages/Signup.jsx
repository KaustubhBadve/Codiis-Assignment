import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CSS/All.css";

export default function Signup() {
  const toast = useToast({ position: "top" });
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [role, setrole] = useState("");
  const [gender, setgender] = useState("");
  const [age, setage] = useState(0);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure({defaultIsOpen:true});
  const Handlesignup = () => {
    if (email && password && name && role && gender && age) {
      let payload = {
        email,
        password,
        name,
        role,
        gender,
        age,
      };
      axios
        .post("https://codissstream.herokuapp.com/auth/signup", payload)
        .then((r) => {
          if (r.data == "ALready User Exists") {
            toast({
              title: "User Already exist",
              duration: 5000,
              isClosable: true,
            });
          } else if (r.data.messege == "Signup Succesfull") {
            toast({
              title: "Signup Succesfull",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            navigate("/login");
          }
        });
    } else {
      toast({
        title: "Fill all fields",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const RoleSelector = (e) => {
    let val = e.target.value;
    setrole(val);
  };

  const GenderSelector = (e) => {
    let val = e.target.value;
    setgender(val);
  };

  return (
    <div className="A">
      <Navbar/>
      <Flex
        className="B"
        minH={"92vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"2xl"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading
              fontSize={"4xl"}
              color="twitter.900"
              borderRadius="10px"
              backgroundColor="whitesmoke"
              p="20px"
              textAlign={"center"}
            >
              Sign up
            </Heading>
            <Text
              fontSize={"lg"}
              color="twitter.900"
              borderRadius="10px"
              p="10px"
              backgroundColor="whitesmoke"
            >
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
              <HStack alignContent="center" alignItems="center">
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormLabel>Select Role</FormLabel>
                  <Select cursor="pointer" value={role} onChange={RoleSelector}>
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="customer">Customer</option>
                  </Select>
                </Box>
              </HStack>

              <HStack alignContent="center" alignItems="center">
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Gender</FormLabel>
                    <Select
                      cursor="pointer"
                      value={gender}
                      onChange={GenderSelector}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Age</FormLabel>
                    <Input
                      type="number"
                      value={age}
                      onChange={(e) => setage(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
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
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={Handlesignup}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="50%">
          <ModalHeader>Project Description</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <b>Thanks</b> for visiting.
            <br />
            ‣ This is Full Stack Video Streaming App with proper
            role based authentication and authorization for Admins and
            Customers.
            <br />
            <b> ➼ Signup & Login</b>
            <br />
            ‣ It starts with signup where user need to select his/her role as
            Admin or Customer along with some other data.
            <br />
            ‣ If credentials are entered correctly, only they will be able to
            Login with token saved in localstorage.
            <br />
            ‣ If role is Admin then they will navigate to #Admin Dashboard
            <br />
            <b> ➼ Admin's Dashboard</b>
            <br />
            ‣ In Admin Dashboard admin can have access of each and every video. Admin can assign and add different videos for perticular plans.
            <br />
            <b> ➼ Customer's Dashboard</b>
            <br />
            For Customer role login they will navigate to Customer Dashboard.
            <br />
            For first time Customer, need to select plan first in between Silver | Gold | Platinum. And need to do necessary payment procedure.
            After succesfull OTP verification only customer can have access to selected plan videos.
            <br />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
