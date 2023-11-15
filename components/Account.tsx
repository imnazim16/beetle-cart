import Link from "next/link";
import { MdOutlineAccountCircle, MdFavoriteBorder } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";

import { GoListOrdered } from "react-icons/go";


const Account = () => {
  return (
    <ul className="dropdown">
      <li>
        <Link href="#"><MdOutlineAccountCircle /> My Account</Link>
      </li>
      <li>
        <Link href="#"><GoListOrdered /> My Order</Link>
      </li>
      <li>
        <Link href="#"><MdFavoriteBorder /> Whishlist</Link>
      </li>
      <li>
        <Link href="#"><FiHelpCircle /> Help</Link>
      </li>
      <li>
        <a href="#"><IoMdLogOut /> Logout</a>
      </li>
    </ul>
  );
};

export default Account;
