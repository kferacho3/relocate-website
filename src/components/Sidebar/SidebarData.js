import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';
import * as ImIcons from 'react-icons/im';

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
    icon: <MdIcons.MdOutlineMiscellaneousServices />
  },
  {
    title: 'Locations',
    path: 'locations',
    icon: <MdIcons.MdLocationPin/>
  },
  {
    title: 'Join the Pack!',
    path: 'pack',
    icon: <ImIcons.ImPacman />,
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
    icon: <MdIcons.MdBookmarks />
  }
];