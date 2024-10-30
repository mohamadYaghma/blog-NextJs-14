"use client";
import { useAuth } from "@/context/AuthContext";
import {
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import SideBarNav from "./SideBarNav";
import ButtonIcon from "@/ui/ButtonIcon";

function SideBar({onClose}) {
  const { logout } = useAuth();
  const logoutHandler = async () => {
    await logout;
  };
  return (
    <div className="overflow-x-auto flex flex-col p-6 h-screen pt-10 lg:pt-8">
      {/* Drawer header */}
      <div className="flex items-center justify-between w-full mb-5 pb-2 border-b border-b-secondary-200 ">
        <Link
          href="/"
          className="flex gap-x-4 items-center justify-center text-secondary-700 border-b border-secondary-200 pb-2 mb-6"
        >
          <HomeIcon className="w-6 h-6" />
          <span>نکست بلاگ</span>
        </Link>
        <ButtonIcon onClick={onClose} variant="outline" className="block border-none lg:hidden">
            <XMarkIcon />
        </ButtonIcon>
      </div>

      {/* Drawer Content */}
      <div className="overflow-x-auto flex-auto">
        {/* SideBarNav */}
        <SideBarNav />
        <div
          className="flex items-center gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-700"
          onClick={logoutHandler}
        >
          <ArrowLeftStartOnRectangleIcon className="w-6 h-6" />
          <span>خروج</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
