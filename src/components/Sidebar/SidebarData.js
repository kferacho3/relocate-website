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
    title: 'About',
    path: 'about',
    icon: <RiIcons.RiInformationLine />
  },
  {
    title: 'Services',
    path: 'services',
    icon: <MdIcons.MdOutlineMiscellaneousServices/>
  },
  {
    title: 'Projects',
    path: 'projects',
    icon: <MdIcons.MdRoofing />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Gallery',
        path: '/gallery',
        icon: <RiIcons.RiGalleryFill />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Testimonials',
    path: 'testimonials',
    icon: <MdIcons.MdOutlineConnectWithoutContact />
  },

  {
    title: 'Contact Us!',
    path: 'contact',
    icon: <RiIcons.RiMessage2Line />
  }
];