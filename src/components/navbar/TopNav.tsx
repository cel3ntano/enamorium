import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import { Button } from '@heroui/button';
import Link from 'next/link';
import React from 'react';
import { RiHeartsFill } from 'react-icons/ri';

export default function TopNav() {
  return (
    <Navbar
      maxWidth="xl"
      className="bg-gradient-to-r from-purple-400 to-purple-700"
      classNames={{ item: ['text-xl', 'text-white', 'uppercase'] }}
    >
      <NavbarBrand as={Link} href="/">
        <RiHeartsFill size={40} className="text-gray-200" />
        <div className="font-bold text-3xl flex">
          <span className="text-gray-200">En</span>
          <span className="text-pink-100">amor</span>
          <span className="text-gray-200">ium</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem as={Link} href="/members">
          Matches
        </NavbarItem>
        <NavbarItem as={Link} href="/lists">
          Lists
        </NavbarItem>
        <NavbarItem as={Link} href="/messages">
          Messages
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Button variant="bordered" className="text-white">
          Login
        </Button>
        <Button variant="bordered" className="text-white">
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
