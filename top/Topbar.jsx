import React from "react";
import userImg from "../public/assets/avatar2.png";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import Image from 'next/image';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <Image src={userImg} width={20} height={20} alt="Eu" />
        </div>
      </div>
    </div>
  );
}
