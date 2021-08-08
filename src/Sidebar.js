import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__logo" />
      <SidebarOptions active Icon={HomeRoundedIcon} title="Home" />
      <SidebarOptions Icon={SearchIcon} title="Explore" />
      <SidebarOptions Icon={NotificationsNoneIcon} title="Notifications" />
      <SidebarOptions Icon={MailOutlineIcon} title="Messages" />
      <SidebarOptions Icon={BookmarkBorderIcon} title="Bookmarks" />
      <SidebarOptions Icon={ListAltIcon} title="Lists" />
      <SidebarOptions Icon={PermIdentityIcon} title="Profile" />
      <SidebarOptions Icon={MoreHorizIcon} title="More" />

      <Button className="sidebar__tweet" variant="outlined">
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
