import { Bell, Search } from "lucide-react";
import React from "react";
import Profile from "./profile";

export default function Navbar() {
  return (
    <div className="navbar w-full flex justify-between  px-[20px] py-[16px] text-[14px] ">
      <div className="navbar-left flex items-center gap-12">
        <p className="w-[90px] text-[20px] font-bold">Tetflix</p>
        <ul className="flex gap-[20px]">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languanges</li>
        </ul>
      </div>
      <div className="navbar-right flex gap-[20px] items-center">
        <Search />
        <p>Children</p>
        <Bell />
        <div className="navbar-profile">
          <Profile />
        </div>
      </div>
    </div>
  );
}
