import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  User,
} from "@nextui-org/react";
import Github from "../../assets/Icon/Github";
import Linkedin from "../../assets/Icon/Linkedin";
import UserCard from "./UserCard";

function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "About", "Project", "Github", "Linkedin"];
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Popover showArrow placement="bottom">
            <PopoverTrigger>
              <User
                as="button"
                name="Sandri Irawan"
                description="Fullstack Developer"
                className="transition-transform "
                avatarProps={{
                  src: "https://res.cloudinary.com/ddn4pon2w/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1698158806/rndtjkrumm68gaibunoo.jpg?_s=public-apps",
                }}
              />
            </PopoverTrigger>
            <PopoverContent className="p-1">
              <UserCard />
            </PopoverContent>
          </Popover>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 items-center"
        justify="start"
      >
        <NavbarBrand>
          <Popover showArrow placement="bottom">
            <PopoverTrigger>
              <User
                as="button"
                name="Sandri Irawan"
                description="Fullstack Website & Mobile Developer"
                className="transition-transform"
                avatarProps={{
                  src: "https://res.cloudinary.com/ddn4pon2w/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1698158806/rndtjkrumm68gaibunoo.jpg?_s=public-apps",
                }}
              />
            </PopoverTrigger>
            <PopoverContent className="p-1">
              <UserCard />
            </PopoverContent>
          </Popover>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Project
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex gap-4 items-center">
          <Link
            href="https://github.com/sandriirawan"
            className="no-underline text-black"
            target="_blank"
          >
            <Github />
          </Link>

          <Link
            href="https://www.linkedin.com/in/sandriirawann/"
            className="no-underline text-black"
            target="_blank"
          >
            <Linkedin />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color={"foreground"} href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarComponent;
