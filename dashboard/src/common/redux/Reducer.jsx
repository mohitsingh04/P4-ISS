import ALLImages from "../Imagesdata";
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "./Action";

const initialState = {
    lang: "en",
    dir: "ltr",
    datanavlayout: "vertical",
    datathememode: "light",
    dataheaderstyles: "light",
    datamenustyles: "light",
    dataverticalstyle: "default",
    stylebodybg: "",
    styledarkbg: "",
    toggled: "",
    datanavstyle: "",
    horstyle: "",
    datapagestyle: "regular",
    datawidth: "fullwidth",
    datamenuposition: "fixed",
    dataheaderposition: "fixed",
    iconoverlay: "",
    colorprimaryrgb: "",
    bodybg: "",
    light: "",
    darkbg: "",
    inputborder: "",
    bgimg: "",
    icontext: "",
    body: {
        class: ""
    },
    selectedItem: null,
    wishlist: [],
    cart: [],
    count: 0,
    checkoutItems: [],
    products: [
        { id: 1, imagesrc: ALLImages('png9'), itemname: 'Bracelets', newprice: '16,599', oldprice: '$19,799', quantity: '1', status: 'stock', description: 'Bracelets - Beautiful bracelets for any occasion' },
        { id: 2, imagesrc: ALLImages('png1'), itemname: 'Cup', newprice: '529', oldprice: '$799', quantity: '1', status: 'instock', description: 'Cup - Enjoy your favorite beverage in style' },
        { id: 3, imagesrc: ALLImages('png7'), itemname: 'Stool', newprice: '25,239', oldprice: '$34,399', quantity: '1', status: 'stock', description: 'Stool - Comfortable seating for your home' },
        { id: 4, imagesrc: ALLImages('png2'), itemname: 'Video Game', newprice: '345', oldprice: '$459', quantity: '1', status: 'stock', description: 'Video Game - Exciting adventures await' },
        { id: 5, imagesrc: ALLImages('png4'), itemname: 'Flower Pot', newprice: '277', oldprice: '$456', quantity: '1', status: 'instock', description: 'Flower Pot - Add a touch of nature to your home' },
        { id: 6, imagesrc: ALLImages('png8'), itemname: 'Watch', newprice: '567', oldprice: '$866', quantity: '1', status: 'stock', description: 'Watch - Stay punctual and stylish with our watches' },
        { id: 7, imagesrc: ALLImages('png3'), itemname: 'Headset', newprice: '455', oldprice: '$567', quantity: '1', status: 'stock', description: 'Headset - Immerse yourself in crystal-clear sound' },
        { id: 8, imagesrc: ALLImages('png5'), itemname: 'Chair', newprice: '345', oldprice: '$499', quantity: '1', status: 'stock', description: 'Chair - Relax in comfort and style' },
        { id: 9, imagesrc: ALLImages('png6'), itemname: 'Goggles', newprice: '543', oldprice: '$688', quantity: '1', status: 'stock', description: 'Goggles - Protect your eyes with our stylish goggles' },
    ],
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case "ThemeChanger":
            state = payload;
            return state;

        case "SET_SELECTED_ITEM":
            return {
                ...state,
                selectedItem: payload
            };

        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishlist: [...state.wishlist, payload]
            };

        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wishlist: state.wishlist.filter(item => item.id !== payload)
            };

        case 'Buynow_checkout':
            return {
                ...state,
                cart: [payload],
                actionType: action.actionType
            };

        case 'ADD_TO_CHECKOUT':
            return {
                ...state,
                checkoutItems: action.payload,
                actionType: action.actionType
            };

        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, payload]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== payload)
            };

        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: Math.max(0, action.payload.quantity) }
                        : item
                )
            };

        default:
            return state;
    }
}


