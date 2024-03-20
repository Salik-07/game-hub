import { HStack, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import ColorModeSwitcher from "./ColorModeSwitcher";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
