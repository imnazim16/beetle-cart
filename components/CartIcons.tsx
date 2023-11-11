"use client";
import Link from "next/link";
import { useState } from "react";
import { GrCart } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";
import { CiSearch, CiCircleRemove } from "react-icons/ci";
export interface Props {
  search: boolean,
  onclick: any,
  accountLog: any,
  
}
const CartIcons = ({search, onclick, accountLog}: Props) => {
  
  return (
    <>
      <Link href="#" onClick={onclick}>
        {search ? <CiCircleRemove /> : <CiSearch />}
      </Link>
      <Link href="#" onClick={accountLog}>
        <VscAccount />
      </Link>
      <Link href="#">
        <GrCart />
      </Link>
    </>
  );
};

export default CartIcons;
