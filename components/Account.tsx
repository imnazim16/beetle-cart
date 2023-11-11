import Link from "next/link";
import React from "react";

const Account = () => {
  return (
    <ul className="dropdown">
      <li>
        <Link href="#">My Account</Link>
      </li>
      <li>
        <Link href="#">My Order</Link>
      </li>
      <li>
        <Link href="#">Whishlist</Link>
      </li>
      <li>
        <Link href="#">Help</Link>
      </li>
      <li>
        <a href="#">Logout</a>
      </li>
    </ul>
  );
};

export default Account;
