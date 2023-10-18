'use client';

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import {Link} from '@nextui-org/link';
import {AppLogo} from './AppLogo';

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    'Actualités',
    "Tom Clancy's Rainbow Six Siege",
    'Rocket League',
    'League of Legend',
    'A propos',
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AppLogo />
          <p className="font-bold text-inherit">ChroniquEsport</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand className="mr-5">
          <AppLogo />
          <p className="font-bold text-inherit">ChroniquEsport</p>
        </NavbarBrand>
        <NavbarItem isActive>
          <Link color="foreground" href="#" aria-current="page">
            Actualités
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            Tom Clancy's Rainbow Six Siege
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            Rocket League
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            League of Legend
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            A propos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" />
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color={'foreground'} className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
