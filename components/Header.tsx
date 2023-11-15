"use client";
import { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import CartIcons from "./CartIcons";
import Navigation from "./Navigation";
import SerachBar from "./SerachBar";
import Account from "./Account";

function Header() {
  const [search, setSearch] = useState<boolean>(false);
  const [accuontlog, setAccuontlog] = useState<boolean>(false);
  const searchbar = (event: any) => {
    event.preventDefault();
    setSearch(!search);
    setAccuontlog(false);
  };
  const accountLog = (event: any) => {
    event.preventDefault();
    setAccuontlog(!accuontlog);
    setSearch(false);
  };
  const overlayBox = () => {
    // setSearch(false);
    // setAccuontlog(false);
    console.log('Hi')
  }
  return (
    <>
      <header className="headerbg">
        <div className="wrapper justify-between h-[70px] relative">
          <Logo className="logo" />
          <Navigation />
          <div className="cart-bag">
            <CartIcons
              onclick={searchbar}
              search={search}
              accountLog={accountLog}
            />
          </div>
          {search && <SerachBar />}
          {accuontlog && <Account />}
        </div>
      </header>
    </>
  );
}

export default Header;
