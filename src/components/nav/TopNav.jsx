import React from "react";
import Logo from "../../assets/images/web-logo.svg";
import PhoneIcon from "../../assets/images/icon-phone.svg";
import Line from "../../assets/images/line-topnav.svg";
import Frame from "../../assets/images/frame.svg";

const TopNav = () => {
  return (
    <div className="w-[100%] mx-auto my-0 h-[67px] flex items-center justify-center bg-[rgba(13,38,19,1)]">
      <div className=" flex items-center justify-between w-[85%] h-[60%]">
        <ul className="w-[19%] h-[100%] flex items-center justify-between">
          <li className="w-[48px] color-[rgba(255,255,255,1)]">
            <img src={Logo} alt="logo" />
          </li>
          <li className="w-[18px] h-[17px] ">
            <img src={PhoneIcon} alt="phone" />
          </li>
          <li className="text-sm font-medium leading-[16.94px] font-family Inter text-[rgba(255,255,255,1)]">
            +4904-049-950
          </li>
        </ul>

        <ul className="w-[30%] h-[100%] flex items-center justify-between">
          <li className="text-sm font-normal leading-[16.94px] font-family Inter text-[rgba(255,255,255,1)]">
            Get 50% Off on the Selected items
          </li>
          <li>
            <img src={Line} alt="line" />
          </li>
          <li className="text-sm font-normal leading-[16.94px] font-family Inter text-[rgba(255,255,255,1)]">
            Shop now
          </li>
        </ul>

        <ul className="w-[19%]">
          <li>
            <img className="h-[18px]" src={Frame} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
