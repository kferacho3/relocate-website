import house from '../../logos/HouseIcon.svg';
import pack from '../../logos/PackingIcon.svg';
import hour from '../../logos/ClockIcon.svg';
import trash from '../../logos/TrashIcon.svg';

import night from '../../logos/NightIcon.svg';
import vip from '../../logos/VIPIcon.svg';
import storage from '../../logos/StorageIcon.svg';
import tv from '../../logos/TVIcon.svg';

export const service1 = {
    id: 'standard',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: '',
    headline: 'Standard Moving',
    description: 'Standard In-state moving service that includes Loading & Unloading services together or individually. A standard moving service includes Loading & Unloading, or both separate if need be.',
    buttonLabel: '',
    imgStart: true,
    divStart: true,
    shadow: true,
    divBg: require('./ServicesImg/servDeco.svg'),
    img: require('./ServicesImg/houseTemp.svg'),
    logo: require('../../logos/HouseIcon.svg'),
    bg: null,
    dark: false,
    primary: true,
    darkText: true,
    topLineS: false

};

export const service2 = {
    id: 'packing',
    lightBg: false,
    lightText: false,
    lightTextDesc: true,
    topLine: '',
    headline: 'Packing & Unpacking',
    description: 'The Packing and Unpacking services can be a standalone or added to any location based moving service. We pack, box, bag, and secure your items to be moved to the next location. Unpacking can be added to moving service or done as a stand alone service.',
    buttonLabel: '',
    imgStart: false,
    divStart: false,
    shadow: false,
    divBg: require('./ServicesImg/servDeco.svg'),
    img: require('./ServicesImg/packingTemp.svg'),
    logo: require('../../logos/PackingIcon.svg'),
    bg: '',
    alt: '',
    too: '',
    dark: true,
    primary: true,
    darkText: false,
    topLineS: true

};

export const service3 = {
    id: 'hourly',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: '',
    headline: 'Hourly Labor',
    description: 'Physical Jobs that require strong hands can be done with the Hourly Labor Service. We will send a pack of workers to complete your task. This can range from moving furniture within households, platforms for events, or construction pieces for your crew!',
    buttonLabel1: '',
    imgStart: true,
    divStart: true,
    shadow: true,
    divBg: require('./ServicesImg/servDeco.svg'),
    img: require('./ServicesImg/laborTemp.svg'),
    logo: require('../../logos/ClockIcon.svg'),
    bg: '',
    alt: '',
    tooo: '',
    dark: false,
    primary: true,
    darkText: true,
    topLineS: false


};


export const service4 = {
    id: 'junk',
    lightBg: false,
    lightText: false,
    lightTextDesc: true,
    topLine: '',
    headline: 'Junk Removal',
    description: 'Removal of Junk, Garbage, or Large Items at your designated location. The packers will take charge in transporting and disposing of the junk in a requested truck unless you provide one!',
    buttonLabel: '',
    imgStart: false,
    divStart: false,
    shadow: false,
    divBg: require('./ServicesImg/servDeco.svg'),
    img: require('./ServicesImg/junkTemp.svg'),
    logo: require('../../logos/TrashIcon.svg'),
    bg: '',
    alt: '',
    too: '',
    dark: true,
    primary: true,
    darkText: false,
    topLineS: true

};

export const service5 = {
    id: 'overnight',
    lightBg: false,
    lightText: false,
    lightTextDesc: true,
    topLine: '',
    headline: 'Overnight Moving',
    description: 'Some moves may need extra time or may simply not fall within your schedule. We provide an Overnight moving services to help deviate from these issues. We will strive to offer this service for 18-24 hours daily! This can compensate for long-distance and outer state moves not finishing on time.',
    imgStart: true,
    divStart: true,
    shadow: true,
    divBg: require('./ServicesImg/servDeco.svg'),
    img: require('./ServicesImg/nightTemp.svg'),
    logo: require('../../logos/NightIcon.svg'),
    bg: '',
    alt: 'theArt',
    tooo: '',
    dark: false,
    primary: true,
    darkText: true,
    topLineS: false

};

export const service6 = {
    id: 'vip',
    lightBg: false,
    lightText: false,
    lightTextDesc: true,
    topLine: '',
    headline: 'VIP Moving',
    description: 'For special or large scale moves, we will provide the ultimate pack to ensure a Premium moving services is delivered. If you feel your move deserves a special care then we will make the best team for the job! VIP moving services includes mansions moves, warehouse & office buildings, special events, etc.',
    imgStart: false,
    divStart: false,
    shadow: true,
    divBg: require('./ServicesImg/servDeco.svg'),
    img: require('./ServicesImg/vipTemp.svg'),
    logo: require('../../logos/VIPIcon.svg'),
    bg: '',
    alt: 'theArt',
    tooo: '',
    dark: false,
    primary: true,
    darkText: true,
    topLineS: false

};

export const service7 = {
    id: 'storage',
    lightBg: false,
    lightText: false,
    lightTextDesc: true,
    topLine: '',
    headline: 'Storage',
    description: 'We can simply load all of your items and unload them within a storage unit from our partnered facilities or one of your choice. Items will be cleverly stored to ensure item are protected and easily retrievable for the next team. Items can be transported in a requested truck or one provided by you.',
    imgStart: true,
    divStart: true,
    shadow: true,
    divBg: require('./ServicesImg/servDeco.svg'),
    img: require('./ServicesImg/storageTemp.svg'),
    logo: require('../../logos/StorageIcon.svg'),
    bg: '',
    alt: 'theArt',
    tooo: '',
    dark: false,
    primary: true,
    darkText: true,
    topLineS: false

};

export const service8 = {
    id: 'tv',
    lightBg: false,
    lightText: false,
    lightTextDesc: true,
    topLine: '',
    headline: 'TV Mounting',
    description: '',
    imgStart: false,
    divStart: false,
    shadow: true,
    divBg: require('./ServicesImg/servDeco.svg'),
    img: require('./ServicesImg/tvTemp.svg'),
    logo: require('../../logos/TVIcon.svg'),
    bg: '',
    alt: 'theArt',
    tooo: '',
    dark: false,
    primary: true,
    darkText: true,
    topLineS: false

};