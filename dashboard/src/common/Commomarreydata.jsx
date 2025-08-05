import { Button } from "react-bootstrap";
import ALLImages from "./Imagesdata";
import { Link } from "react-router-dom";

//header

//notification

export const notifications = [
  {
    id: 1,
    icon: "ri-chat-4-line",
    bgColor: "bg-primary-gradient",
    title: "New review received",
    time: "2 hours ago"
  },
  {
    id: 2,
    icon: "ri-mail-line",
    bgColor: "bg-secondary-gradient",
    title: "New Mails Received",
    time: "1 week ago"
  },
  {
    id: 3,
    icon: "ri-shopping-cart-line",
    bgColor: "bg-success-gradient",
    title: "New Order Received",
    time: "1 day ago"
  },
  {
    id: 4,
    icon: "ri-refresh-fill",
    bgColor: "bg-warning-gradient",
    title: "New Updates available",
    time: "1 day ago"
  },
  {
    id: 5,
    icon: "ri-shopping-bag-fill",
    bgColor: "bg-info-gradient",
    title: "New Order Placed",
    time: "1 day ago"
  }
];

//Message

export const messageData = [
  {
    id: 1,
    image: 'face1',
    name: 'Madeleine',
    time: '3 hours ago',
    message: 'Hey! there I\'m available....',
    link: `${import.meta.env.BASE_URL}advancedui/defaultchat/`
  },
  {
    id: 2,
    image: 'face2',
    name: 'Anthony',
    time: '5 hours ago',
    message: 'New product Launching...',
    link: `${import.meta.env.BASE_URL}advancedui/defaultchat/`
  },
  {
    id: 3,
    image: 'face3',
    name: 'Olivia',
    time: '45 minutes ago',
    message: 'New Schedule release......',
    link: `${import.meta.env.BASE_URL}advancedui/defaultchat/`
  },
  {
    id: 4,
    image: 'face4',
    name: 'Sanderson',
    time: '20 minutes ago',
    message: 'New Schedule release......',
    link: `${import.meta.env.BASE_URL}advancedui/defaultchat/`
  },
  {
    id: 5,
    image: 'face2',
    name: 'Senrio',
    time: '10 hours ago',
    message: 'New product Launching...',
    link: `${import.meta.env.BASE_URL}advancedui/defaultchat/`
  }
];

//shoppingcart

export const cartItems = [
  {
    id: 38,
    itemname: 'Cup Set',
    newprice: '$1,299.00',
    imagesrc: ALLImages('png1'),
    description: 'White Set'
  },
  {
    id: 39,
    itemname: 'Wired headset',
    newprice: '$179.29',
    imagesrc: ALLImages('png3'),
    description: 'Analog'
  },
  {
    id: 40,
    itemname: 'modern Chair',
    newprice: '$29.00',
    imagesrc: ALLImages('png5'),
    description: 'Decorative'
  },
  {
    id: 41,
    itemname: 'Flower Vase',
    newprice: '$4,999.00',
    imagesrc: ALLImages('png4'),
    description: 'Decorative'
  },
  {
    id: 42,
    itemname: 'Sun Glasses',
    newprice: '$129.00',
    imagesrc: ALLImages('png6'),
    description: 'Brown'
  }
];

export const shoppingcartData = [
  { id: 31, imagesrc: ALLImages('png1'), itemname: 'Cup Set', newprice: 1299.00, quantity: 2, status: 'stock', description: 'White Set' },
  { id: 32, imagesrc: ALLImages('png3'), itemname: 'Wired Headset', newprice: 179.29, quantity: 2, status: 'stock', description: 'Analog' },
  { id: 33, imagesrc: ALLImages('png5'), itemname: 'Modren Chair', newprice: 29.00, quantity: 2, status: 'instock', description: 'Decorative' },
  { id: 34, imagesrc: ALLImages('png4'), itemname: 'Flower Fase', newprice: 4999.00, quantity: 2, status: 'stock', description: 'Decorative' },
  { id: 35, imagesrc: ALLImages('png6'), itemname: 'Sun Glases', newprice: 129.00, quantity: 2, status: 'instock', description: 'Brown' },

];
//Right sidebar content

export const TabcontentOne = [
  {
    id: 1,
    to: `${import.meta.env.BASE_URL}pages/profile/`,
    icon: "fe-user",
    title: "My Profile",
    description: "Profile Personal information"
  },
  {
    id: 2,
    to: `${import.meta.env.BASE_URL}advancedui/defaultchat/`,
    icon: "fe-message-square",
    title: "My Messages",
    description: "Person message information"
  },
  {
    id: 3,
    to: `${import.meta.env.BASE_URL}pages/mailcompose/`,
    icon: "fe-mail",
    title: "My Mails",
    description: "Persons mail information"
  },
  {
    id: 4,
    to: `${import.meta.env.BASE_URL}pages/editprofile/`,
    icon: "fe-settings",
    title: "Account Settings",
    description: "Settings Information"
  },
  {
    id: 5,
    to: `${import.meta.env.BASE_URL}firebase/firebasesignin/`,
    icon: "fe-power",
    title: "Sign Out",
    description: "Account Signout"
  }
];

export const TabcontentTwo = [
  { id: 1, name: "Mozelle Belt", email: "mozellebelt@gmail.com", image: 'face9' },
  { id: 2, name: "Florinda Carasco", email: "florindacarasco@gmail.com", image: 'face11' },
  { id: 3, name: "Alina Bernier", email: "alinaaernier@gmail.com", image: 'face10' },
  { id: 4, name: "Zula Mclaughin", email: "zulamclaughin@gmail.com", image: 'face2' },
  { id: 5, name: "Isidro Heide", email: "isidroheide@gmail.com", image: 'face13' },
  { id: 6, name: "Mozelle Belt", email: "mozellebelt@gmail.com", image: 'face12' },
  { id: 7, name: "Florinda Carasco", email: "florindacarasco@gmail.com", image: 'face4' },
  { id: 8, name: "Zula Mclaughin", email: "zulamclaughin@gmail.com", image: 'face2' },
  { id: 9, name: "Alina Bernier", email: "alinabernier@gmail.com", image: 'face7' },
  { id: 10, name: "Zula Mclaughin", email: "zulamclaughin@gmail.com", image: 'face2' },
  { id: 11, name: "Isidro Heide", email: "isidroheide@gmail.com", image: 'face14' },
  { id: 12, name: "Florinda Carasco", email: "florindacarasco@gmail.com", image: 'face11' },
  { id: 13, name: "Alina Bernier", email: "alinabernier@gmail.com", image: 'face9' },
  { id: 14, name: "Zula Mclaughin", email: "zulamclaughin@gmail.com", image: 'face15' },
  { id: 15, name: "Isidro Heide", email: "isidroheide@gmail.com", image: 'face4' },
];


export const TabcontentThree = [
  {
    title: "Account Settings",
    items: [
      { id: 1, label: "Updates Automatically", defaultChecked: true },
      { id: 2, label: "Allow Location Map", defaultChecked: false },
      { id: 3, label: "Show Contacts", defaultChecked: true },
      { id: 4, label: "Show Notification", defaultChecked: false },
      { id: 5, label: "Show Tasks Statistics", defaultChecked: true },
      { id: 6, label: "Show Email Notification", defaultChecked: true }
    ]
  },
  {
    title: "General Settings",
    items: [
      { id: 7, label: "Show User Online", defaultChecked: true },
      { id: 8, label: "Website Notification", defaultChecked: false },
      { id: 9, label: "Show Recent activity", defaultChecked: false },
      { id: 10, label: "Logout Automatically", defaultChecked: true },
      { id: 12, label: "Allow All Notifications", defaultChecked: true }
    ]
  }
];

//full calender
export const EventTypes = [
  { id: 1, bg: 'bg-primary', title: 'Calendar Events' },
  { id: 2, bg: 'bg-secondary', title: 'Birthday Events' },
  { id: 3, bg: 'bg-success', title: 'Holiday Calendar' },
  { id: 4, bg: 'bg-info', title: 'Office Events' },
  { id: 5, bg: 'bg-warning', title: 'Other Events' },
  { id: 6, bg: 'bg-danger', title: 'Festival Events' },
  { id: 7, bg: 'bg-teal', title: 'Timeline Events' },
];

//alert


export const AlertCard = [
  {
    id: 1,
    icon: (
      <svg
        className="custom-alert-icon svg-primary"
        xmlns="http://www.w3.org/2000/svg"
        height="1.5rem"
        viewBox="0 0 24 24"
        width="1.5rem"
        fill="#000000"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),
    heading: 'Information?',
    color: 'primary',
    Element: (
      <div className="">
        <Button variant='outline-danger' size='sm' className="m-1">Decline</Button>
        <Button variant='primary' size='sm' className="m-1">Accept</Button>
      </div>
    ),
  },
  {
    id: 2,
    icon: (
      <svg
        className="custom-alert-icon svg-secondary"
        xmlns="http://www.w3.org/2000/svg"
        height="1.5rem"
        viewBox="0 0 24 24"
        width="1.5rem"
        fill="#000000"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    heading: 'Confirmed',
    color: 'secondary',
    Element: (
      <div className="">
        <Button variant='secondary' size='sm' className="m-1">Close</Button>
      </div>
    ),
  },
  {
    id: 3,
    icon: (
      <svg
        className="custom-alert-icon svg-warning"
        xmlns="http://www.w3.org/2000/svg"
        height="1.5rem"
        viewBox="0 0 24 24"
        width="1.5rem"
        fill="#000000"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
    ),
    heading: 'Warning',
    color: 'warning',
    Element: (
      <div className="">
        <Button variant='outline-secondary' size='sm' className="m-1">Back</Button>
        <Button variant='warning' size='sm' className="m-1">Continue</Button>
      </div>
    ),
  },
  {
    id: 4,
    icon: (
      <svg
        className="custom-alert-icon svg-danger"
        xmlns="http://www.w3.org/2000/svg"
        height="1.5rem"
        viewBox="0 0 24 24"
        width="1.5rem"
        fill="#000000"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" />
      </svg>
    ),
    heading: 'Danger',
    color: 'danger',
    Element: (
      <div className="">
        <Button variant='danger' size='sm' className="m-1">Delete</Button>
      </div>
    ),
  },
];


export const ColoredAlert = [
  { id: 1, icon: <svg className="flex-shrink-0 svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>, color: 'primary', heading: 'Information Alert', description: 'Information alert to show to information', class: 'secondary' },
  { id: 2, icon: <svg className="flex-shrink-0 svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>, color: 'secondary', heading: 'Success Alert', description: 'Success alert to show to success message', class: 'danger' },
  { id: 3, icon: <svg className="flex-shrink-0 svg-warning" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" /><polygon points="13,16 11,16 11,18 13,18" /><polygon points="13,10 11,10 11,15 13,15" /></g></g></g></svg>, color: 'warning', heading: 'Warning Alert', description: 'Warning alert to show warning message', class: 'dark' },
  { id: 4, icon: <svg className="flex-shrink-0 svg-danger" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" /><rect height="6" width="2" x="11" y="7" /><rect height="2" width="2" x="11" y="15" /></g></g></g></svg>, color: 'danger', heading: 'Danger Alert', description: 'Danger alert to show the danger message', class: 'info' },
]

export const SolidAlert = [
  {
    id: 1, icon: <svg className="flex-shrink-0 svg-white" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>, color: 'primary', heading: 'Information Alert', description: 'Information alert to show to information', class: 'secondary', element: (<div className="fs-12">
      <Link to="#" className="text-fixed-white fw-semibold me-2 op-7">cancel</Link>
      <Link to="#" className="text-fixed-white fw-semibold me-2 d-inline-block">open</Link>
    </div>)
  },
  {
    id: 2, icon: <svg className="flex-shrink-0 svg-white" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>, color: 'secondary', heading: 'Success Alert', description: 'Success alert to show to success message', class: 'danger', element: (<div className="fs-12">
      <Link to="#" className="text-fixed-white fw-semibold me-2  d-inline-block">close</Link>
    </div>)
  },
  {
    id: 3, icon: <svg className="flex-shrink-0 svg-white" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" /><polygon points="13,16 11,16 11,18 13,18" /><polygon points="13,10 11,10 11,15 13,15" /></g></g></g></svg>, color: 'warning', heading: 'Warning Alert', description: 'Warning alert to show warning message', class: 'dark', element: (<div className="fs-12">
      <Link to="#" className="text-fixed-white fw-semibold me-2 op-7">skip</Link>
      <Link to="#" className="text-fixed-white fw-semibold  d-inline-block">open</Link>
    </div>)
  },
  {
    id: 4, icon: <svg className="flex-shrink-0 svg-white" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" /><rect height="6" width="2" x="11" y="7" /><rect height="2" width="2" x="11" y="15" /></g></g></g></svg>, color: 'danger', heading: 'Danger Alert', description: 'Danger alert to show the danger message', class: 'info', element: (<div className="fs-12">
      <Link to="#" className="text-fixed-white fw-semibold me-2 op-7">close</Link>
      <Link to="#" className="text-fixed-white fw-semibold  d-inline-block">continue</Link>
    </div>)
  },
]




export const AlertwithIcon = [
  { id: 1, color: 'primary', icon: <svg className="flex-shrink-0 me-2 svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg> },
  { id: 2, color: 'success', icon: <svg className="flex-shrink-0 me-2 svg-success" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg> },
  { id: 3, color: 'warning', icon: <svg className="flex-shrink-0 me-2 svg-warning" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" /><polygon points="13,16 11,16 11,18 13,18" /><polygon points="13,10 11,10 11,15 13,15" /></g></g></g></svg> },
  { id: 4, color: 'danger', icon: <svg className="flex-shrink-0 me-2 svg-danger" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" /><rect height="6" width="2" x="11" y="7" /><rect height="2" width="2" x="11" y="15" /></g></g></g></svg> }
]

export const CustomisedAlertwithIcon = [
  { id: 1, color: 'primary', icon: <svg className="svg-primary me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg> },
  { id: 2, color: 'secondary', icon: <svg className="svg-secondary me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg> },
  { id: 3, color: 'warning', icon: <svg className="svg-warning me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg> },
  { id: 4, color: 'danger', icon: <svg className="svg-danger me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></svg> }
]

export const AlertwithImage = [
  { id: 1, image: ALLImages('face3'), color: 'primary' },
  { id: 2, image: ALLImages('face5'), color: 'secondary' },
  { id: 3, image: ALLImages('face8'), color: 'warning' },
  { id: 4, image: ALLImages('face11'), color: 'danger' },
  { id: 5, image: ALLImages('face13'), color: 'info' },
  { id: 6, image: ALLImages('face10'), color: 'light' },
  { id: 7, image: ALLImages('face15'), color: 'dark' }
]

export const AlertwithImagesize = [
  { id: 1, image: ALLImages('face3'), color: 'primary', size: 'xs' },
  { id: 2, image: ALLImages('face5'), color: 'secondary', size: 'sm' },
  { id: 3, image: ALLImages('face8'), color: 'warning', size: '' },
  { id: 4, image: ALLImages('face11'), color: 'danger', size: 'md' },
  { id: 5, image: ALLImages('face13'), color: 'info', size: 'lg' },
  { id: 6, image: ALLImages('face14'), color: 'light', size: 'xl' },
]

//Button group

export const Radio = [
  { name: 'Radio 1', value: '1' },
  { name: 'Radio 2', value: '2' },
  { name: 'Radio 3', value: '3' },
];

export const Radiovertical = [
  { name: 'Radio 1', value: '1' },
  { name: 'Radio 2', value: '2' },
  { name: 'Radio 3', value: '3' },
];

//Dropdown


//popover data

export const DismispopoverData = [
  { id: 1, color: "secondary", place: 'right' },
  { id: 2, color: "primary", place: 'top' },
  { id: 3, color: "info", place: 'top' },
  { id: 4, color: "warning", place: 'left' },
]

export const ColoredpopoverData = [
  { id: 1, color: "secondary", place: 'right' },
  { id: 2, color: "primary", place: 'top' },
  { id: 3, color: "info", place: 'bottom' },
  { id: 4, color: "warning", place: 'left' },
  { id: 5, color: "success", place: 'top' },
  { id: 6, color: "danger", place: 'left' },
  { id: 7, color: "teal", place: 'right' },
  { id: 8, color: "purple", place: 'bottom' },
]

export const popoverData = [
  { id: 1, color: "secondary", place: 'right' },
  { id: 2, color: "primary", place: 'top' },
  { id: 3, color: "info", place: 'bottom' },
  { id: 4, color: "warning", place: 'left' },
  { id: 5, color: "success", place: 'top' },
  { id: 6, color: "danger", place: 'left' },
]

//Tooltip data

export const tooltipdata = [
  { id: 1, color: "primary", place: 'top' },
  { id: 2, color: "secondary", place: 'top' },
  { id: 3, color: "warning", place: 'top' },
  { id: 4, color: "info", place: 'left' },
  { id: 5, color: "success", place: 'top' },
  { id: 6, color: "danger", place: 'top' },
  { id: 7, color: "light", place: 'top' },
  { id: 8, color: "dark", place: 'left' }
]

//Grid JS table

export const Data = [
  ["24-10-2022 12:47", "john", "john123@gmail.com", "#12012", "$1799", "1", "$1799"],
  ["12-09-2022 04:24", "mark", "markzenner23@gmail.com", "#12013", "$2479", "2", "$4958"],
  ["18-11-2022 18:43", "eoin", "eoin1992@gmail.com", "#12014", "$769", "1", "$769"],
  ["10-09-2022 10:35", "sarahcdd", "sarahcdd129@gmail.com", "#12015", "$1299", "3", "$3997"],
  ["27-10-2022 09:55", "afshin", "afshin@example.com", "#12016", "$1449", "1", "$1449"]
];

export const FixedHeaderData = [
  ["24-10-2022 12:47", "john", "john123@gmail.com", "#12012", "$1799", "1", "$1799"],
  ["12-09-2022 04:24", "mark", "markzenner23@gmail.com", "#12013", "$2479", "2", "$4958"],
  ["18-11-2022 18:43", "eoin", "eoin1992@gmail.com", "#12014", "$769", "1", "$769"],
  ["10-09-2022 10:35", "sarahcdd", "sarahcdd129@gmail.com", "#12015", "$1299", "3", "$3997"],
  ["27-10-2022 09:55", "afshin", "afshin@example.com", "#12016", "$1449", "1", "$1449"],
  ["24-10-2022 12:47", "john", "john123@gmail.com", "#12012", "$1799", "1", "$1799"],
  ["12-09-2022 04:24", "mark", "markzenner23@gmail.com", "#12013", "$2479", "2", "$4958"],
  ["18-11-2022 18:43", "eoin", "eoin1992@gmail.com", "#12014", "$769", "1", "$769"],
  ["10-09-2022 10:35", "sarahcdd", "sarahcdd129@gmail.com", "#12015", "$1299", "3", "$3997"],
  ["27-10-2022 09:55", "afshin", "afshin@example.com", "#12016", "$1449", "1", "$1449"],
  ["24-10-2022 12:47", "john", "john123@gmail.com", "#12012", "$1799", "1", "$1799"]
];

//Dashboard

export const TableData = [
  {
    id: 1,
    name: 'Jake Poole',
    email: 'jacke123@gmail.com',
    date: '20-11-2020',
    enquiry: '$5.321.2',
    status: 'Success',
    avatar: 'face1'
  },
  {
    id: 2,
    name: 'Virginia Gray',
    email: 'virginia456@gmail.com',
    date: '20-11-2020',
    enquiry: '$53,3654',
    status: 'Success',
    avatar: 'face2'
  },
  {
    id: 3,
    name: 'Jacob Thomson',
    email: 'jacobthomson@gmail.com',
    date: '20-11-2020',
    enquiry: '$1,56,3654',
    status: 'Pending',
    avatar: 'face3'
  },
  {
    id: 4,
    name: 'Trevor Thomson',
    email: 'trevor@gmail.com',
    date: '19-11-2020',
    enquiry: '$12.3',
    status: 'Success',
    avatar: 'face4'
  },
  {
    id: 5,
    name: 'Kylie North',
    email: 'kylie@gmail.com',
    date: '19-11-2020',
    enquiry: '$5.312.2',
    status: 'Pending',
    avatar: 'face5'
  },
  {
    id: 6,
    name: 'Jan Hodges',
    email: 'jan@gmail.com',
    date: '19-11-2020',
    enquiry: '$5.312.2',
    status: 'Cancel',
    avatar: 'face11'
  },
  {
    id: 7,
    name: 'Trevor Thomson',
    email: 'trevor@gmail.com',
    date: '19-11-2020',
    enquiry: '$2,24,1421',
    status: 'Success',
    avatar: 'face7'
  },
  {
    id: 8,
    name: 'Emily Lewis',
    email: 'emily@gmail.com',
    date: '19-11-2020',
    enquiry: '$9.321.2',
    status: 'Cancel',
    avatar: 'face8'
  }
];


//widgets


//Cryptocurrencies

export const Datacrypto = [
  { NAME: "Bitcoin", ICON: ALLImages("bitcoin"), PRICE: "$10513.00", HOUR: "-7%", Color: "", MARKETCAP: "$179,470,305,923", CIRCULATINGSUPPLY: "16,819,612 BTC", VOLUME24H: "$9,578,830,000", CMGR: "8.11% / 57", INFLATION: "0.36%", },
  { NAME: "Ethereum", ICON: ALLImages("ethereum"), PRICE: "$966.61", HOUR: "-6%", Color: "", MARKETCAP: "$179,470,305,923", CIRCULATINGSUPPLY: "97,145,024 ETH", VOLUME24H: "$3,466,060,000", CMGR: "22.62% / 29", INFLATION: "0.64%", },
  { NAME: "Ripple", ICON: ALLImages("ripple"), PRICE: "$1.2029", HOUR: "-11%", Color: "", MARKETCAP: "$47,649,145,657", CIRCULATINGSUPPLY: "38,739,144,704 XRP", VOLUME24H: "$2,081,450,000", CMGR: "10.85% / 53", INFLATION: "0.06%", },
  { NAME: "Bitcoin Cash", ICON: ALLImages("bitcoincash"), PRICE: "$1547.00", HOUR: "-11%", Color: "", MARKETCAP: "$26,720,210,956", CIRCULATINGSUPPLY: "16,925,988 BCH", VOLUME24H: "$598,337,000", CMGR: "21.30% / 6", INFLATION: "0.32%", },
  { NAME: "Cardano", ICON: ALLImages("cardano"), PRICE: "	$0.550768", HOUR: "-9%", Color: "", MARKETCAP: "	$14,279,800,786", CIRCULATINGSUPPLY: "25,927,069,696 ADA", VOLUME24H: "$466,381,000", CMGR: "205.35% / 3", INFLATION: "0.00%", },
  { NAME: "Litecoin", ICON: ALLImages("litecoin"), PRICE: "$173.86", HOUR: "-7%", Color: "", MARKETCAP: "$9,670,920,267", CIRCULATINGSUPPLY: "54,873,584 LTC", VOLUME24H: "$430,524,000", CMGR: "	6.87% / 57", INFLATION: "0.80%", },
  { NAME: "EOS", ICON: ALLImages("eos"), PRICE: "$13.394", HOUR: "5%", Color: "success", MARKETCAP: "$8,420,143,033", CIRCULATINGSUPPLY: "621,412,800 EOS", VOLUME24H: "$2,864,780,000", CMGR: "53.25% / 6", INFLATION: "11.56%", },
  { NAME: "NEM", ICON: ALLImages("nem"), PRICE: "$0.935049", HOUR: "-11%", Color: "", MARKETCAP: "	$8,415,440,999", CIRCULATINGSUPPLY: "8,999,999,488 XEM", VOLUME24H: "$66,061,000", CMGR: "26.99% / 33", INFLATION: "0.24%", },
  { NAME: "Stellar", ICON: ALLImages("stellar"), PRICE: "$0.467813", HOUR: "2%", Color: "success", MARKETCAP: "	$8,358,735,080", CIRCULATINGSUPPLY: "17,867,683,840 XLM", VOLUME24H: "$370,297,000", CMGR: "13.12% / 41", INFLATION: "0.19%", },
  { NAME: "NEO", ICON: ALLImages("neo"), PRICE: "$118.61", HOUR: "-9%", Color: "", MARKETCAP: "	$7,693,400,000", CIRCULATINGSUPPLY: "65,000,000 NEO", VOLUME24H: "$318,308,000", CMGR: "62.68% / 15", INFLATION: "0.00%", },
  { NAME: "IOTA", ICON: ALLImages("iota"), PRICE: "$2.34", HOUR: "-14%", Color: "", MARKETCAP: "	$6,504,100,862", CIRCULATINGSUPPLY: "2,779,530,240 MIOTA", VOLUME24H: "$103,132,000", CMGR: "23.27% / 7", INFLATION: "-0.02%", },
  { NAME: "Dash", ICON: ALLImages("dash"), PRICE: "$747.222", HOUR: "-8%", Color: "", MARKETCAP: "	$5,881,413,815", CIRCULATINGSUPPLY: "7,833,738 DASH", VOLUME24H: "$96,147,900", CMGR: "19.19% / 47", INFLATION: "0.81%", },
  { NAME: "Monero", ICON: ALLImages("monero"), PRICE: "$305.16", HOUR: "-11%", Color: "", MARKETCAP: "$4,778,157,533", CIRCULATINGSUPPLY: "15,633,286 XMR", VOLUME24H: "$100,788,000", CMGR: "11.88% / 44", INFLATION: "0.78%", },
  { NAME: "TRON", ICON: ALLImages("tron"), PRICE: "$0.067691", HOUR: "-5%", Color: "", MARKETCAP: "$4,450,560,896", CIRCULATINGSUPPLY: "65,748,193,280 TRX", VOLUME24H: "$581,651,000", CMGR: "142.69% / 4", INFLATION: "0.00%", },
  { NAME: "Bitcoin Gold", ICON: ALLImages("bitcoinglod"), PRICE: "$181.39", HOUR: "-7%", Color: "", MARKETCAP: "$3,084,108,676", CIRCULATINGSUPPLY: "16,779,700 BTG", VOLUME24H: "$199,652,000", CMGR: "-25.44% / 3", INFLATION: "0.34%", },

]

//default chat

export const pane1 = [
  { id: 1, name: 'Socrates Itumay', time: '2 hours', message: 'Nam quam nunc, blandit vel aecenas et ante tincid', image: 'face5', notification: 2 },
  { id: 2, name: 'Dexter dela Cruz', time: '3 hours', message: 'Maec enas tempus, tellus eget con dime ntum rhoncus, sem quam', image: 'face6', notification: 1 },
  { id: 3, name: 'Reynante Labares', time: '10 hours', message: 'Nam quam nunc, bl ndit vel aecenas et ante tincid', image: 'face9' },
  { id: 4, name: 'Joyce Chua', time: '2 days', message: 'Ma ecenas tempus, tellus eget con dimen tum rhoncus, sem quam', image: 'face11' },
  { id: 5, name: 'Rolando Paloso', time: '2 days', message: 'Nam quam nunc, blandit vel aecenas et ante tincid', image: 'face4' },
  { id: 6, name: 'Ariana Monino', time: '3 days', message: 'Maece nas tempus, tellus eget cond imentum rhoncus, sem quam', image: 'face7' },
  { id: 7, name: 'Maricel Villalon', time: '4 days', message: 'Nam quam nunc, blandit vel aecenas et ante tincid', image: 'face8' },
  { id: 8, name: 'Maryjane Pechon', time: '5 days', message: 'Mae cenas tempus, tellus eget co ndimen tum rhoncus, sem quam', image: 'face12' },
  { id: 9, name: 'Lovely Dela Cruz', time: '5 days', message: 'Mae cenas tempus, tellus eget co ndimen tum rhoncus, sem quam', image: 'face5' },
  { id: 10, name: 'Daniel Padilla', time: '5 days', message: 'Mae cenas tempus, tellus eget co ndimen tum rhoncus, sem quam', image: 'face8' },
  { id: 11, name: 'John Pratts', time: '6 days', message: 'Mae cenas tempus, tellus eget co ndimen tum rhoncus, sem quam', image: 'face3' },
  { id: 12, name: 'Raymart Santiago', time: '6 days', message: 'Nam quam nunc, blandit vel aecenas et ante tincid', image: 'face7' },
  { id: 13, name: 'Samuel Lerin', time: '7 days', message: 'Nam quam nunc, blandit vel aecenas et ante tincid', image: 'face6' },
];

export const pane2 = [
  {
    id: 1,
    name: "Grace Russell",
    status: "online",
    image: ALLImages('face4'),
    direction: "fe-arrow-up-right",
    action: "fe-phone-outgoing",
    time: "Today, 12:15 PM"
  },
  {
    id: 2,
    name: "Grace Russell",
    status: "online",
    image: ALLImages('face4'),
    direction: "fe-arrow-up-right",
    action: "fe-phone-outgoing",
    time: "Today, 12:15 PM"
  },
  {
    id: 3,
    name: "Joanne Miller",
    status: "online",
    image: ALLImages('face9'),
    direction: "fe-arrow-up-right",
    action: "fe-phone-incoming",
    time: "Yesterday, 02:15 PM"
  },
  {
    id: 4,
    name: "Kimberly Nolan",
    status: "online",
    image: ALLImages('face12'),
    direction: "fe-arrow-down-left",
    action: "fe-video",
    time: "Yesterday, 05:39 PM"
  },
  {
    id: 5,
    name: "Andrea Mackay",
    status: "online",
    image: ALLImages('face6'),
    direction: "fe-arrow-down-left",
    action: "fe-phone-call",
    time: "29 june 2020, 03:21 AM"
  },
  {
    id: 6,
    name: "Samantha Lewis",
    status: "online",
    image: ALLImages('face1'),
    direction: "fe-arrow-up-right",
    action: "fe-phone-incoming",
    time: "1 july 2020, 10:23 AM"
  },
  {
    id: 7,
    name: "Victoria Kerr",
    status: "online",
    image: ALLImages('face2'),
    direction: "fe-arrow-down-left",
    action: "fe-phone-call",
    time: "1 july 2020, 4:45 PM"
  },
  {
    id: 8,
    name: "Socrates Itumay",
    status: "online",
    image: ALLImages('face7'),
    direction: "fe-arrow-up-right",
    action: "fe-phone-outgoing",
    time: "2 july 2020, 11:14 PM"
  },
  {
    id: 9,
    name: "Rebecca Johnston",
    status: "online",
    image: ALLImages('face8'),
    direction: "fe-arrow-down-left",
    action: "fe-phone-incoming",
    time: "3 july 2020, 06:14 PM"
  },
  {
    id: 10,
    name: "Madeleine James",
    status: "online",
    image: ALLImages('face3'),
    direction: "fe-arrow-up-right",
    action: "fe-phone-outgoing",
    time: "4 july 2020, 5:12 PM"
  },
  {
    id: 11,
    name: "Socrates Itumay",
    status: "online",
    image: ALLImages('face5'),
    direction: "fe-arrow-up-right",
    action: "fe-phone-outgoing",
    time: "4 july 2020, 5:12 PM"
  },
  {
    id: 12,
    name: "Raymart Santiago",
    status: "online",
    image: ALLImages('face7'),
    direction: "fe-arrow-up-right",
    action: "fe-phone-outgoing",
    time: "4 july 2020, 5:12 PM"
  }
];

export const pane3 = [
  {
    id: 1,
    name: 'Lillian Ross',
    image: ALLImages('face3'),
    status: 'Home'
  },
  {
    id: 2,
    name: 'Socrates Itumay',
    image: ALLImages('face5'),
    status: 'Mobile'
  },
  {
    id: 3,
    name: 'Elizabeth Scott',
    image: ALLImages('face4'),
    status: 'Office'
  },
  {
    id: 4,
    name: 'Cameron Watson',
    image: ALLImages('face5'),
    status: 'Home'
  },
  {
    id: 5,
    name: 'Christopher Arnold',
    image: ALLImages('face8'),
    status: 'Mobile'
  },
  {
    id: 6,
    name: 'Justin Bailey',
    image: ALLImages('face4'),
    status: 'Office'
  },
  {
    id: 7,
    name: 'Richard Berry',
    image: ALLImages('face7'),
    status: 'Home'
  },
  {
    id: 8,
    name: 'Abraham Clark',
    image: ALLImages('face9'),
    status: 'Mobile'
  },
  {
    id: 9,
    name: 'Anderson',
    image: ALLImages('face4'),
    status: 'Office'
  },
  {
    id: 10,
    name: 'Clarkson Gray',
    image: ALLImages('face2'),
    status: 'Home'
  },
  {
    id: 11,
    name: 'Henderson Dyer',
    image: ALLImages('face12'),
    status: 'Mobile'
  },
  {
    id: 12,
    name: 'Marshall Fisher',
    image: ALLImages('face1'),
    status: 'Office'
  },
];

//Search

export const  searchData = [
  {
    id: 1,
    image: ALLImages('face1'),
    name: 'Mens Jackets',
    rating: [1, 2, 3, 4],
    discount: '50% off',
    price: '$1,987',
    color:"primary"
  },
  {
    id: 2,
    image: ALLImages('face2'),
    name: 'Occasional Special Edition',
    rating: [1, 2, 3, 4],
    discount: '60% off',
    price: '$2,679',
    color:"success"
  },
  {
    id: 3,
    image: ALLImages('face5'),
    name: 'Saree',
    rating: [1, 2, 3, 4],
    discount: '25% off',
    price: '$999',
    color:"warning"
  },
  {
    id: 4,
    image: ALLImages('face4'),
    name: 'Western Wear',
    rating: [1, 2, 3, 4],
    discount: '30% off',
    price: '$699',
    color:"info"
  },
  {
    id: 5,
    image: ALLImages('face14'),
    name: 'Kids Dress',
    rating: [1, 2, 3, 4],
    discount: '47% off',
    price: '$399',
    color:"primary"
  },
  {
    id: 6,
    image: ALLImages('face11'),
    name: 'Kids Toys',
    rating: [1, 2, 3, 4],
    discount: '26% off',
    price: '$299',
    color:"success"
  },
  {
    id: 7,
    image: ALLImages('face2'),
    name: 'Sony KD-49XE7005',
    rating: [1, 2, 3, 4],
    discount: '43% off',
    price: '$22,269',
    color:"warning"
  },
  {
    id: 8,
    image: ALLImages('face13'),
    name: 'Huawei Mate Pro Dual SIM',
    rating: [1, 2, 3, 4],
    discount: '20% off',
    price: '$9,999',
    color:"info"
  },
  {
    id: 9,
    image: ALLImages('face12'),
    name: 'Novel Books',
    rating: [1, 2, 3, 4],
    discount: '14% off',
    price: '$899',
    color:"primary"
  },
  {
    id: 10,
    image: ALLImages('face1'),
    name: 'Welcare Fitness',
    rating: [1, 2, 3, 4],
    discount: '40% off',
    price: '$3,987',
    color:"success"
  }
];

export const Mens = [
  { value: "Foot wear", label: "Foot wear" },
  { value: "Top wear", label: "Top wear" },
  { value: "Bootom wear", label: "Bootom wear" },
  { value: "Men's Groming", label: "Men's Groming" },
  { value: "Accessories", label: "Accessories" },
];

export const Womens = [
  { value: "Western wear", label: "Western wear" },
  { value: "Top wear", label: "Top wear" },
  { value: "Beuty Groming", label: "Beuty Groming" },
  { value: "Accessories", label: "Accessories" },
  { value: "jewellery", label: "jewellery" },
];

export const BabyKids = [
  { value: "Boys clothing", label: "Boys clothing" },
  { value: "girls Clothing", label: "girls Clothing" },
  { value: "Toys", label: "Toys" },
  { value: "Baby Care", label: "Baby Care" },
  { value: "Kids footwear", label: "Kids footwear" },
];

export const Electronics = [
  { value: "Mobiles", label: "Mobiles" },
  { value: "Laptops", label: "Laptops" },
  { value: "Gaming & Accessories", label: "Gaming & Accessories" },
  { value: "Health care Appliances", label: "Health care Appliances" },
];

export const More = [
  { value: "Stationery", label: "Stationery" },
  { value: "Books", label: "Books" },
  { value: "Gaming", label: "Gaming" },
  { value: "Music", label: "Music" },
];

//userlist

export const userSelect = [
  {
    value: "This is a placeholder",
    label: "This is a placeholder",
  },
  {
    value: "Choice 1",
    label: "Choice 1",
  },
  {
    value: "Choice 2",
    label: "Choice 2",
  },
  {
    value: "Choice 3",
    label: "Choice 3",
  },
];

export const tableData = [
  { id: 1, avatarSrc: ALLImages('face16'), name: 'Adam Cotter', date: '09 Dec 2017' },
  { id: 2, avatarSrc: ALLImages('face15'), name: 'Pauline Noble', date: '26 Jan 2018' },
  { id: 3, avatarSrc: ALLImages('face4'), name: 'Sherilyn Metzel', date: '27 Jan 2018' },
  { id: 4, avatarSrc: ALLImages('face1'), name: 'Terrie Boaler', date: '20 Jan 2018' },
  { id: 5, avatarSrc: ALLImages('face19'), name: 'Rutter Pude', date: '13 Jan 2018' },
  { id: 6, avatarSrc: ALLImages('face8'), name: 'Clifford Benjamin', date: '25 Jan 2018' },
  { id: 7, avatarSrc: ALLImages('face12'), name: 'Thedric Romans', date: '12 Jan 2018' },
  { id: 8, avatarSrc: ALLImages('face1'), name: 'Haily Carthew', date: '27 Jan 2018' },
  { id: 9, avatarSrc: ALLImages('face12'), name: 'Dorothea Joicey', date: '12 Dec 2017' },
  { id: 10, avatarSrc: ALLImages('face15'), name: 'Mikaela Pinel', date: '10 Dec 2017' },
  { id: 11, avatarSrc: ALLImages('face12'), name: 'Donnell Farries', date: '03 Dec 2017' },
  { id: 12, avatarSrc: ALLImages('face4'), name: 'Letizia Puncher', date: '09 Dec 2017' }
];

//Aboutcompany
export const company = [
  { id: 1, heading: 'Why Zanex ?', data: 'majority have suffered alteration in some form, by injected humour' },
  { id: 2, heading: 'What is Our Services?', data: 'majority have suffered alteration in some form, by injected humour' },
]
export const aboutcompany = [
  { id: 1, heading: 'Company history', src1: ALLImages("media1"), color: 'primary' },
  { id: 2, heading: 'About Team', src1: ALLImages("media2"), color: 'secondary' },
  { id: 3, heading: 'Company Growth', src1: ALLImages("media6"), color: 'success' },
  { id: 4, heading: 'Our Statistics', src1: ALLImages("media7"), color: 'danger' },
]

//Edit profile

//Selectdate

export const optionselectdate = [
  { value: "1", label: "1", },
  { value: "2", label: "2", },
  { value: "3", label: "3", },
  { value: "4", label: "4", },
  { value: "5", label: "5", },
  { value: "6", label: "6", },
  { value: "7", label: "7", },
  { value: "8", label: "8", },
  { value: "9", label: "9", },
  { value: "10", label: "10", },
  { value: "11", label: "11", },
  { value: "12", label: "12", },
  { value: "13", label: "13", },
  { value: "14", label: "14", },
  { value: "15", label: "15", },
  { value: "16", label: "16", },
  { value: "17", label: "17", },
  { value: "18", label: "18", },
  { value: "19", label: "19", },
  { value: "20", label: "20", },
  { value: "21", label: "21", },
  { value: "22", label: "22", },
  { value: "23", label: "23", },
  { value: "24", label: "24", },
  { value: "25", label: "25", },
  { value: "26", label: "26", },
  { value: "27", label: "27", },
  { value: "28", label: "28", },
  { value: "29", label: "29", },
  { value: "30", label: "30", },
  { value: "31", label: "31", },
  { value: "31", label: "31", },
];

//Dateofbirth
export const optionDateofbirth = [
  { value: "January", label: "January", },
  { value: "February", label: "February", },
  { value: "March", label: "March", },
  { value: "April", label: "April", },
  { value: "May", label: "May", },
  { value: "June", label: "June", },
  { value: "July", label: "July", },
  { value: "August", label: "August", },
  { value: "September", label: "September", },
  { value: "October", label: "October", },
  { value: "November", label: "November", },
  { value: "December", label: "December", },
];

//Selectyear
export const optionselectyear = [
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
  { value: "2018", label: "2018" },
  { value: "2017", label: "2017" },
  { value: "2016", label: "2016" },
  { value: "2015", label: "2015" },
  { value: "2014", label: "2014" },
  { value: "2013", label: "2013" },
  { value: "2012", label: "2012" },
  { value: "2011", label: "2011" },
];
//CustomEditComponent
export const EditprofileData = [
  { id: 1, name: "At vero eos et accusamus et iusto odio", language: "PHP", date: "15/11/2018", members: "15 Members" },
  { id: 2, name: "voluptatum deleniti atque corrupti quos", language: "Angular js", date: "25/11/2018", members: "12 Members" },
  { id: 3, name: "dignissimos ducimus qui blanditiis praesentium", language: "Java", date: "5/12/2018", members: "20 Members" },
  { id: 4, name: "deleniti atque corrupti quos dolores", language: "Python", date: "14/12/2018", members: "10 Members" },
  { id: 5, name: "et quas molestias excepturi sint occaecati", language: "Python", date: "4/12/2018", members: "17 Members" }
];

//invoice

export const Datainvoice = [
  {
    ID: "1",
    TITLE: "Logo Design",
    LINE: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    NUMBER: "2",
    PRICE: "$674",
    SUBTOTAL: "$1,308",
  },
  {
    ID: "2",
    TITLE: "Website wireframe for 2 pages",
    LINE: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
    NUMBER: "4",
    PRICE: "$1,500",
    SUBTOTAL: "$6,000",
  },
  {
    ID: "3",
    TITLE: "PSD to HTML coding",
    LINE: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    NUMBER: "3",
    PRICE: "$530",
    SUBTOTAL: "$1,690",
  },
  {
    ID: "4",
    TITLE: "E-commerce Development",
    LINE: "When our power of choice is untrammelled and when nothing prevents our being able",
    NUMBER: "2",
    PRICE: "$800",
    SUBTOTAL: "$1,600",
  },
  {
    ID: "5",
    TITLE: "Design and layout of 2 pages in Photoshop",
    LINE: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    NUMBER: "2",
    PRICE: "$720",
    SUBTOTAL: "$1,440",
  },
];

//mail inbox

export const emailData = [
  {
    id: 1,
    sender: 'Tim Reid, S P N',
    subject: 'Boost Your Website Traffic',
    date: 'April 01'
  },
  {
    id: 2,
    sender: 'Freelancer.com',
    subject: 'Stop wasting your visitors',
    date: 'May 23'
  },
  {
    id: 3,
    sender: 'PHPClass',
    subject: 'Added a new class: Login Class Fast Site',
    date: '9:27 AM'
  },
  {
    id: 4,
    sender: 'Facebook',
    subject: 'Somebody requested a new password',
    date: 'June 13'
  },
  {
    id: 5,
    sender: 'Skype',
    subject: 'Password successfully changed',
    date: 'March 24'
  },
  {
    id: 6,
    sender: 'Google+',
    subject: 'alireza, do you know',
    date: 'March 09'
  },
  {
    id: 7,
    sender: 'WOW Slider',
    subject: 'New WOW Slider v7.8 - 67% off',
    date: 'March 14'
  },
  {
    id: 8,
    sender: 'LinkedIn Pulse',
    subject: 'The One Sign Your Co-Worker Will Stab',
    date: 'Feb 19'
  },
  {
    id: 9,
    sender: 'Google Webmaster',
    subject: 'Improve the search presence of WebSite',
    date: 'March 15'
  },
  {
    id: 10,
    sender: 'JW Player',
    subject: 'Last Chance: Upgrade to Pro for',
    date: 'March 15'
  },
  {
    id: 11,
    sender: 'Drupal Community',
    subject: 'Welcome to the Drupal Community',
    date: 'March 04'
  },
  {
    id: 12,
    sender: 'Zoosk',
    subject: '7 new singles we think you\'ll like',
    date: 'May 14'
  },
  {
    id: 13,
    sender: 'LinkedIn',
    subject: 'Alireza: Nokia Networks, System Group and',
    date: 'February 25'
  },
  {
    id: 14,
    sender: 'Facebook',
    subject: 'Your account was recently logged into',
    date: 'March 14'
  },
  {
    id: 15,
    sender: 'Twitter',
    subject: 'Your Twitter password has been changed',
    date: 'April 07'
  },
  {
    id: 16,
    sender: 'InternetSeer',
    subject: 'Performance Report',
    date: 'July 14'
  },
  {
    id: 17,
    sender: 'Bertina',
    subject: 'IMPORTANT: Don\'t lose your domains!',
    date: 'June 16'
  },
  {
    id: 18,
    sender: 'Laura Gaffin, S P N',
    subject: 'Your Website On Google (Higher Rankings Are Better)',
    date: 'August 10'
  },
  {
    id: 19,
    sender: 'Facebook',
    subject: 'Alireza Zare Login faild',
    date: 'Feb 14'
  },
  {
    id: 20,
    sender: 'AddMe.com',
    subject: 'Submit Your Website to the AddMe Business Directory',
    date: 'August 10'
  },
  {
    id: 21,
    sender: 'Terri Rexer, S P N',
    subject: 'Forget Google AdWords: Un-Limited Clicks fo',
    date: 'April 14'
  },
];


//Blog details

export const detail = [
  { id: 1, src1: ALLImages("users1"), heading: 'Simon Sais' },
  { id: 2, src1: ALLImages("users3"), heading: 'Cherry Blossom' },
  { id: 3, src1: ALLImages("users5"), heading: 'Ivan Notheridiya' },
  { id: 4, src1: ALLImages("users15"), heading: 'Manny Jah' },
]
export const detail1 = [
  { id: 1, src1: ALLImages("media19"), heading: 'Generator on the Internet..' },
  { id: 2, src1: ALLImages("media22"), heading: 'Voluptatem quia voluptas...' },
  { id: 3, src1: ALLImages("media12"), heading: 'Generator on the Internet..' },
  { id: 4, src1: ALLImages("media25"), heading: 'Voluptatem quia voluptas...' },
]
export const tag = [
  { id: 1, heading: 'Development' },
  { id: 2, heading: 'Design' },
  { id: 3, heading: 'Technology' },
  { id: 4, heading: 'Popular' },
  { id: 5, heading: 'Codiegniter' },
  { id: 6, heading: 'Javascript' },
  { id: 7, heading: 'Bootstrap' },
  { id: 8, heading: 'PHP' },
]

//blog post

export const selectdata = [
  { value: "Technology", label: "Technology", },
  { value: "Travel", label: "Travel", },
  { value: "Food", label: "Food", },
  { value: "Fashion", label: "Fashion", },
];

//Checkout

export const optionCounteryout = [
  {
    value: "category-1",
    label: "--Select--",
  },
  {
    value: "category-2",
    label: "Germany",
  },
  {
    value: "category-3",
    label: "Canada",
  },
  {
    value: "category-4",
    label: "Usa",
  },
  {
    value: "category-5",
    label: "Aus",
  },
];

//Shop

export const colorsData = [
  { value: 'azure', className: 'bg-azure' },
  { value: 'indigo', className: 'bg-indigo' },
  { value: 'purple', className: 'bg-purple' },
  { value: 'pink', className: 'bg-pink' },
  { value: 'red', className: 'bg-red' },
  { value: 'orange', className: 'bg-orange' },
  { value: 'yellow', className: 'bg-yellow' },
  { value: 'lime', className: 'bg-lime' },
  { value: 'green', className: 'bg-green' },
  { value: 'teal', className: 'bg-teal' }
];

//shoppingcart

export const Datacard = [
  {
    PREVIEW: ALLImages('pngs1'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$568",
    Quantity: 1,
  },
  {
    PREVIEW: ALLImages('pngs2'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,027",
    Quantity: 3,
  },
  {
    PREVIEW: ALLImages('pngs3'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,027",
    Quantity: 4,
  },
  {
    PREVIEW: ALLImages('pngs4'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,027",
    Quantity: 3,
  },
  {
    PREVIEW: ALLImages('pngs5'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,027",
    Quantity: 2,
  },
  {
    PREVIEW: ALLImages('pngs6'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,027",
    Quantity: 1,
  },
  {
    PREVIEW: ALLImages('pngs7'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,027",
    Quantity: 3,
  },
  {
    PREVIEW: ALLImages('pngs8'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,589",
    Quantity: 4,
  },
];

//Shoppingdetails

export const CartData = [
  {
    id: 21,
    itemname: 'Cup',
    oldPrice: 999.00,
    newprice: 799.00,
    imagesrc: ALLImages('png1'),
    stars: 3.5,
    buttonText: 'Buy Now',
    buttonColor: 'primary'
  },
  {
    id: 22,
    itemname: 'Video Game',
    oldPrice: 87.00,
    newprice: 25.00,
    imagesrc: ALLImages('png2'),
    stars: 4,
    buttonText: 'Buy Now',
    buttonColor: 'secondary'
  },
  {
    id: 23,
    itemname: 'Headset',
    oldPrice: 59.00,
    newprice: 34.00,
    imagesrc: ALLImages('png3'),
    stars: 4.5,
    buttonText: 'Buy Now',
    buttonColor: 'success'
  },
  {
    id: 24,
    itemname: 'Flower pot',
    oldPrice: 54.00,
    newprice: 39.00,
    imagesrc: ALLImages('png4'),
    stars: 4,
    buttonText: 'Buy Now',
    buttonColor: 'info'
  },
  {
    id: 25,
    itemname: 'Royal Chair',
    oldPrice: 37.00,
    newprice: 25.00,
    imagesrc: ALLImages('png5'),
    stars: 3.5,
    buttonText: 'Buy Now',
    buttonColor: 'danger'
  },
  {
    id: 26,
    itemname: 'Goggles',
    oldPrice: 64.00,
    newprice: 25.00,
    imagesrc: ALLImages('png6'),
    stars: 4,
    buttonText: 'Buy Now',
    buttonColor: 'warning'
  },
  {
    id: 27,
    itemname: 'Stool',
    oldPrice: 35.00,
    newprice: 19.00,
    imagesrc: ALLImages('png7'),
    stars: 4.5,
    buttonText: 'Buy Now',
    buttonColor: 'primary'
  },
  {
    id: 28,
    itemname: 'Headset',
    oldPrice: 44.00,
    newprice: 35.00,
    imagesrc: ALLImages('png8'),
    stars: 3.5,
    buttonText: 'Buy Now',
    buttonColor: 'secondary'
  },
];

//wishlist

export const defaultWishlistdata = [
  { id: 10, imagesrc: ALLImages('png1'), itemname: 'laborum et dolorum fuga', newprice: '$568', status: 'Stock' },
  { id: 11, imagesrc: ALLImages('png4'), itemname: 'laborum et dolorum fuga', newprice: '$1,027', status: 'InStock' },
  { id: 12, imagesrc: ALLImages('png8'), itemname: 'laborum et dolorum fuga', newprice: '$1,589', status: 'Stock' },
  { id: 13, imagesrc: ALLImages('png2'), itemname: 'laborum et dolorum fuga', newprice: '$356', status: 'Stock' },
  { id: 14, imagesrc: ALLImages('png3'), itemname: 'laborum et dolorum fuga', newprice: '$1,245', status: 'Instock' },
  { id: 15, imagesrc: ALLImages('png6'), itemname: 'laborum et dolorum fuga', newprice: '$783', status: 'Stock' },
  { id: 16, imagesrc: ALLImages('png7'), itemname: 'laborum et dolorum fuga', newprice: '$4,876', status: 'Stock' },
  { id: 17, imagesrc: ALLImages('png9'), itemname: 'laborum et dolorum fuga', newprice: '$13,876', status: 'Stock' },
];

//Checkout

export const defaultcheckoutitem = [
  { id: 18, itemname: 'bracelets', imagesrc: ALLImages('png9'), newprice: '$438' },
  { id: 19, itemname: 'Cup', imagesrc: ALLImages('png1'), newprice: '$765' },
  { id: 20, itemname: 'Goggles', imagesrc: ALLImages('png6'), newprice: '$543' }
]

//File details

export const relatedfiles = [
  { id: 1, src1: ALLImages("files3"), class: 'image2.jpg', class1: '66 KB' },
  { id: 2, src1: ALLImages("pdf"), class: 'file.pdf', class1: '32 KB' },
  { id: 3, src1: ALLImages("files7"), class: 'image1.jpg', class1: '76 KB' },
  { id: 4, src1: ALLImages("file2"), class: 'excel.xls', class1: '34 KB' },
  { id: 5, src1: ALLImages("files6"), class: 'nature.jpg', class1: '66 KB' },
  { id: 6, src1: ALLImages("ppt1"), class: 'demo.ppt', class1: '67 KB' },
  { id: 7, src1: ALLImages("files2"), class: 'image1.jpg', class1: '76 KB' },
]

//File manager

export const list1 = [
  { id: 1, heading: 'file.pdf', src: ALLImages("pdf"), data: '32 KB', class: "mx-auto" },
  { id: 2, heading: 'image1.jpg', src: ALLImages("files7"), data: '76 KB', class: "mx-0" },
  { id: 3, heading: 'excel.xls', src: ALLImages("excel"), data: '34 KB', class: "mx-auto" },
  { id: 4, heading: 'image2.jpg', src: ALLImages("files2"), data: '66 KB', class: "mx-0" },
  { id: 5, heading: 'demo.ppt', src: ALLImages("ppt1"), data: '67 KB', class: "mx-auto" },
  { id: 6, heading: 'video.mp4', src: ALLImages("video"), data: '320 KB', class: "mx-auto" },
  { id: 7, heading: 'image2.jpg', src: ALLImages("files4"), data: '66 KB', class: "mx-0" },
  { id: 8, heading: 'word.doc', src: ALLImages("word"), data: '320 KB', class: "mx-auto" },
  { id: 9, heading: 'image3.jpg', src: ALLImages("files6"), data: '76 KB', class: "mx-0" },
  { id: 10, heading: 'excel.xls', src: ALLImages("excel"), data: '34 KB', class: "mx-auto" },
  { id: 11, heading: 'profile.ppt', src: ALLImages("ppt1"), data: '67 KB', class: "mx-auto" },
  { id: 12, heading: 'image4.jpg', src: ALLImages("files5"), data: '66 KB', class: "mx-0" },
]

//Filemanagerlist

export const list = [
  { id: 1, heading: 'file.pdf', src: ALLImages("pdf"), data: '32 KB', class: "mx-auto" },
  { id: 2, heading: 'image1.jpg', src: ALLImages("files7"), data: '76 KB', class: "" },
  { id: 3, heading: 'excel.xls', src: ALLImages("excel"), data: '34 KB', class: "mx-auto" },
  { id: 4, heading: 'image2.jpg', src: ALLImages("files2"), data: '66 KB', class: "" },
  { id: 5, heading: 'demo.ppt', src: ALLImages("ppt1"), data: '67 KB', class: "mx-auto" },
  { id: 6, heading: 'video.mp4', src: ALLImages("video"), data: '320 KB', class: "mx-auto" },
  { id: 7, heading: 'image2.jpg', src: ALLImages("files4"), data: '66 KB', class: "" },
  { id: 8, heading: 'word.doc', src: ALLImages("word"), data: '320 KB', class: "mx-auto" },
  { id: 9, heading: 'mountain.jpg', src: ALLImages("files1"), data: '320 KB', class: "" },
  { id: 10, heading: 'file.pdf', src: ALLImages("pdf"), data: '32 KB', class: "mx-auto" },
  { id: 11, heading: 'image3.jpg', src: ALLImages("files6"), data: '76 KB', class: "" },
  { id: 12, heading: 'excel.xls', src: ALLImages("excel"), data: '34 KB', class: "mx-auto" },
  { id: 13, heading: 'profile.ppt', src: ALLImages("ppt1"), data: '67 KB', class: "mx-auto" },
  { id: 14, heading: 'image4.jpg', src: ALLImages("files5"), data: '66 KB', class: "" },
  { id: 15, heading: 'exe.zip', src: ALLImages("zip1"), data: '320 KB', class: "mx-auto" },
]

//Form Select

export const DefaultData = [
  { value: "Select 1", label: "Select 1" },
  { value: "Select 2", label: "Select 2" },
  { value: "Select 3", label: "Select 3" },
  { value: "Select 4", label: "Select 4" },
  { value: "Select 5", label: "Select 5" },
  { value: "Select 6", label: "Select 6", disabled: true },
];

export const Customdata = [
  { value: "Level One", label: "Level One" },
  { value: "Level Two", label: "Level Two" },
  { value: "Level Three", label: "Level Three" },
  { value: "Level Four", label: "Level Four" },
  { value: "Level Five", label: "Level Five" },
  { value: "Level Six", label: "Level Six" },
];

export const GroupData = [
  {
    label: 'UK',
    options: [
      { label: 'London', value: 'London' },
      { label: 'Manchester', value: 'Manchester' },
      { label: 'Liverpool', value: 'Liverpool' },
    ],
  },
  {
    label: 'FR',
    options: [
      { label: 'Paris', value: 'Paris' },
      { label: 'Lyon', value: 'Lyon' },
      { label: 'Marseille', value: 'Marseille' },
    ],
  },
  {
    label: 'DE',
    disabled: true,
    options: [
      { label: 'Hamburg', value: 'Hamburg' },
      { label: 'Munich', value: 'Munich' },
      { label: 'Berlin', value: 'Berlin' },
    ],
  },
  {
    label: 'US',
    options: [
      { label: 'New York', value: 'New York' },
      { label: 'Washington', value: 'Washington', disabled: true },
      { label: 'Michigan', value: 'Michigan' },
    ],
  },
  {
    label: 'SP',
    options: [
      { label: 'Madrid', value: 'Madrid' },
      { label: 'Barcelona', value: 'Barcelona' },
      { label: 'Malaga', value: 'Malaga' },
    ],
  },
  {
    label: 'CA',
    options: [
      { label: 'Montreal', value: 'Montreal' },
      { label: 'Toronto', value: 'Toronto' },
      { label: 'Vancouver', value: 'Vancouver' },
    ],
  },
];

export const OptionData = [
  { value: "Zero", label: "Zero" },
  { value: "Lebel 1", label: "Lebel 1" },
  { value: "Lebel 2", label: "Lebel 2" },
  { value: "Lebel 3", label: "Lebel 3" },
  { value: "Lebel 4", label: "Lebel 4" },
  { value: "Lebel 5", label: "Lebel 5" },
];
export const UniqueData = [
  { value: "abc@hotmail.com", label: "abc@hotmail.com" },
  { value: "efg@outlook.com", label: "efg@outlook.com" },
];

export const Preference = [
  { value: 'One', label: 'One' },
  { value: 'Two', label: 'Two' },
  { value: 'Three', label: 'Three' },
  { value: 'Four', label: 'Four' },
  { value: 'Fifth', label: 'Fifth' }
];

export const passingthrough = [
  { value: "One", label: "One" },
  { value: "Two", label: "Two" },
  { value: "Three", label: "Three" },
]

//Form Layout
export const Statepreference = [
  { value: 'State', label: 'State' },
  { value: '...', label: '...' },
];
export const Countrypreference = [
  { value: 'Country', label: 'Country' },
  { value: '...', label: '...' },
];

//Select2

export const Country = [
  { value: 'Germany', label: 'Germany' },
  { value: 'Canada', label: 'Canada' },
  { value: 'Usa', label: 'Usa' },
  { value: 'Aus', label: 'Aus' },
  { value: 'India', label: 'India' },
]

export const shopCatagory = [
  { value: 'Dress', label: 'Dress' },
  { value: 'Bags &amp; Purses', label: 'Bags &amp; Purses' },
  { value: 'Coat &amp; Jacket', label: 'Coat &amp; Jacket' },
  { value: 'Beauty', label: 'Beauty' },
  { value: 'Jeans', label: 'Jeans' },
  { value: 'Jewellery', label: 'Jewellery' },
  { value: 'Electronics', label: 'Electronics' },
  { value: 'Sports', label: 'Sports' },
  { value: 'Technology', label: 'Technology' },
  { value: 'Watches', label: 'Watches' },
  { value: 'Accessories', label: 'Accessories' }
]

export const shopBrand = [
  { value: 'White', label: 'White' },
  { value: 'Black', label: 'Black' },
  { value: 'Red', label: 'Red' },
  { value: 'Green', label: 'Green' },
  { value: 'Blue', label: 'Blue' },
  { value: 'Yellow', label: 'Yellow' },
]

export const shopType = [
  { value: 'Extra Small', label: 'Extra Small' },
  { value: 'Small', label: 'Small' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Large', label: 'Large' },
  { value: 'Extra Large', label: 'Extra Large' },
]

export const TableSelect = [
  { value: '10', label: '10' },
  { value: '20', label: '20' },
  { value: '30', label: '30' },
  { value: '40', label: '40' }
]
export const BasicSelect = [
  { value: 'Selection 1', label: 'Selection 1' },
  { value: 'Selection 2', label: 'Selection 2' },
  { value: 'Selection 3', label: 'Selection 3' },
  { value: 'Selection 4', label: 'Selection 4' },
  { value: 'Selection 5', label: 'Selection 5' }
]

export const MultipleSelect = [
  { value: 'Multiple 1', label: 'Multiple 1' },
  { value: 'Multiple 2', label: 'Multiple 2' },
  { value: 'Multiple 3', label: 'Multiple 3' },
  { value: 'Multiple 4', label: 'Multiple 4' },
  { value: 'Multiple 5', label: 'Multiple 5' }
]

export const TemptingData = [
  { value: 'Andrew', label: (<div><img src={ALLImages('selectface1')} alt="Option 1" className="me-2 me-2" />Andrew</div>) },
  { value: 'Maya', label: (<div><img src={ALLImages('selectface2')} alt="Option 1" className="me-2" />Maya</div>) },
  { value: 'Brodus Axel', label: (<div><img src={ALLImages('selectface3')} alt="Option 1" className="me-2" />Brodus Axel</div>) },
  { value: 'Goldhens', label: (<div> <img src={ALLImages('selectface4')} alt="Option 1" className="me-2" />Goldhens</div>) },
  { value: 'Angelina', label: (<div><img src={ALLImages('selectface5')} alt="Option 1" className="me-2" />Angelina</div>) }
];

export const reduxdata = [
  { id: 1, imagesrc: ALLImages('png9'), itemname: 'Bracelets', newprice: '$16,599', oldprice: '$19,799', quantity: '1', status: 'stock' },
  { id: 2, imagesrc: ALLImages('png1'), itemname: 'Cup', newprice: '$529', oldprice: '$799', quantity: '2', status: 'instock' },
  { id: 3, imagesrc: ALLImages('png7'), itemname: 'Stool', newprice: '$25,239', oldprice: '$34,399', quantity: '1', status: 'stock' },
  { id: 4, imagesrc: ALLImages('png2'), itemname: 'Video Game', newprice: '$345', oldprice: '$459', quantity: '2', status: 'stock' },
  { id: 5, imagesrc: ALLImages('png4'), itemname: 'Flower Pot', newprice: '$277', oldprice: '$456', quantity: '1', status: 'instock' },
  { id: 6, imagesrc: ALLImages('png8'), itemname: 'Watch', newprice: '$567', oldprice: '$866', quantity: '2', status: 'stock' },
  { id: 7, imagesrc: ALLImages('png3'), itemname: 'Headset', newprice: '$455', oldprice: '$567', quantity: '1', status: 'stock' },
  { id: 8, imagesrc: ALLImages('png5'), itemname: 'Chair', newprice: '$345', oldprice: '$499', quantity: '2', status: 'stock' },
  { id: 9, imagesrc: ALLImages('png6'), itemname: 'Goggles', newprice: '$543', oldprice: '$688', quantity: '1', status: 'stock' },
]
