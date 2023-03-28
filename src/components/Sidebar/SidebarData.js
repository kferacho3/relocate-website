import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },

  {
    title: 'Services',
    path: 'services',
    icon: <RiIcons.RiInformationLine />
  },
  {
    title: 'Locations',
    path: 'locations',
    icon: <MdIcons.MdOutlineMiscellaneousServices/>
  },
  {
    title: 'Join the Pack!',
    path: 'pack',
    icon: <MdIcons.MdRoofing />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
/*
    subNav: [
      {
        title: 'Gallery',
        path: '/gallery',
        icon: <RiIcons.RiGalleryFill />,
        cName: 'sub-nav'
      }
    ]
    */
  },
  {
    title: 'Book Move',
    path: 'book',
    icon: <MdIcons.MdOutlineConnectWithoutContact />
  }
];