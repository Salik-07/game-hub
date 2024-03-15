import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="80px" />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
