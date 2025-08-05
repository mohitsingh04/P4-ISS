import { useState } from 'react';
import { closeMenuRecursively } from '../layouts/layoutcomponents/Sidebar';
import { MENUITEMS } from './Sidemenudata';
import store from './redux/Store';


export function Dark(actionfunction) {
    const theme = store.getState();

    actionfunction({
        ...theme,
        "datathememode": "dark",
        "dataheaderstyles": "dark",
        "datamenustyles": "dark",
        "darkbg": "",
        "bodybg": "",
        "inputBorder": ""
    });
    localStorage.setItem("zanexdarktheme", "dark");
    localStorage.removeItem("zanexlighttheme");
    localStorage.removeItem("darkBgRGB1");
}

export function Light(actionfunction) {
    const theme = store.getState();

    document.documentElement.removeAttribute('style');


    actionfunction({
        ...theme,
        "datathememode": "light",
        "dataheaderstyles": "light",
        "datamenustyles": 'light',
        "darkbg": "",
        "bodybg": "",
        "inputBorder": ""

    });
    localStorage.setItem("zanexlighttheme", "light");
    localStorage.removeItem("zanexdarktheme");
    localStorage.removeItem("darkBgRGB1");
}

export function Ltr(actionfunction) {
    const theme = store.getState();
    actionfunction({ ...theme, dir: "ltr" });
    localStorage.setItem("zanexltr", "ltr");
    localStorage.removeItem("zanexrtl");
}
export function Rtl(actionfunction) {
    const theme = store.getState();
    actionfunction({ ...theme, dir: "rtl" });
    localStorage.setItem("zanexrtl", "rtl");
    localStorage.removeItem("zanexltr");
}

export const HorizontalClick = (actionfunction) => {
    const theme = store.getState();

    const updatedTheme = {
        ...theme,
        "datanavlayout": "horizontal",
        "datamenustyles": localStorage.zanexdarktheme ? "dark" : localStorage.darkBgRGB1 ? localStorage.zanexMenu : localStorage.zanexMenu ? localStorage.zanexMenu : "light",
        "dataverticalstyle": "",
        "datanavstyle": localStorage.zanexnavstyles ? localStorage.zanexnavstyles : "menu-click"
    };

    actionfunction(updatedTheme);
    localStorage.setItem("zanexlayout", "horizontal");
};

export const Vertical = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "datanavlayout": "vertical",
        "datanavstyle": "",
        "datamenustyles": localStorage.zanexdarktheme ? "dark" : localStorage.darkBgRGB1 ? localStorage.zanexMenu : localStorage.zanexMenu ? localStorage.zanexMenu : "light",
        "dataverticalstyle": "default",
        "toggled": ""
    });

    localStorage.setItem("zanexlayout", "vertical");

};

export const Menuclick = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "datanavstyle": "menu-click",
        "dataverticalstyle": "",
        "toggled": "menu-click-closed",
    });
    localStorage.setItem("zanexnavstyles", "menu-click");
    localStorage.removeItem("zanexverticalstyles");
};
export const MenuHover = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "datanavstyle": "menu-hover",
        "dataverticalstyle": "",
        "toggled": "menu-hover-closed",
        "horStyle": ""
    });
    localStorage.setItem("zanexnavstyles", "menu-hover");
    localStorage.removeItem("zanexverticalstyles");
};
export const IconClick = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "datanavstyle": "icon-click",
        "dataverticalstyle": "",
        "toggled": "icon-click-closed",
    });
    localStorage.setItem("zanexnavstyles", "icon-click");
    localStorage.removeItem("zanexverticalstyles");
};

function closeMenuFn() {
    const closeMenuRecursively = (items) => {

        items?.forEach((item) => {
            item.active = false;
            closeMenuRecursively(item.children);
        });
    };
    closeMenuRecursively(MENUITEMS);
}

export const IconHover = (actionfunction) => {
    const theme = store.getState();
    closeMenuRecursively(MENUITEMS); //comes from sidebar.tsx
    actionfunction({
        ...theme,
        "datanavstyle": "icon-hover",
        "dataverticalstyle": "",
        "toggled": "icon-hover-closed"
    });
    localStorage.setItem("zanexnavstyles", "icon-hover");
    localStorage.removeItem("zanexverticalstyles");
    closeMenuFn();

};
export const Fullwidth = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "datawidth": "fullwidth",
    });
    localStorage.setItem("zanexfullwidth", "Fullwidth");
    localStorage.removeItem("zanexboxed");

};
export const Boxed = (actionfunction) => {
    const theme = store.getState();

    actionfunction({
        ...theme,
        "datawidth": 'boxed',
        "dataverticalstyle": "default",
    });

    localStorage.setItem("zanexboxed", "boxed");
    localStorage.removeItem("zanexfullwidth");
};
export const FixedMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "datamenuposition": "fixed",
    });
    localStorage.setItem("zanexmenufixed", "MenuFixed");
    localStorage.removeItem("zanexmenuscrollable");
};
export const scrollMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "datamenuposition": "scrollable",
    });
    localStorage.setItem("zanexmenuscrollable", "Menuscrolled");
    localStorage.removeItem("zanexmenufixed");
};
export const Headerpostionfixed = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataheaderposition": "fixed",
    });
    localStorage.setItem("zanexheaderfixed", 'FixedHeader');
    localStorage.removeItem("zanexheaderscrollable");
};
export const Headerpostionscroll = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataheaderposition": "scrollable",
    });
    localStorage.setItem("zanexheaderscrollable", "ScrollableHeader");
    localStorage.removeItem("zanexheaderfixed");
};
export const Regular = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "datapagestyle": "regular"
    });
    localStorage.setItem("zanexregular", "Regular");
    localStorage.removeItem("zanexclassic");
    localStorage.removeItem("zanexmodern");
};
export const Classic = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "datapagestyle": "classic",
    });
    localStorage.setItem("zanexclassic", "Classic");
    localStorage.removeItem("zanexregular");
    localStorage.removeItem("zanexmodern");
};
export const Modern = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "datapagestyle": "modern",
    });
    localStorage.setItem("zanexmodern", "Modern");
    localStorage.removeItem("zanexregular");
    localStorage.removeItem("zanexclassic");
};

export const Defaultmenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataverticalstyle": "default",
        "datanavlayout": "vertical",
        "toggled": "close",
        "datanavstyle": ""
    });
    localStorage.removeItem("zanexnavstyles");
    localStorage.setItem("zanexverticalstyles", 'default');
};
export const Closedmenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "datanavlayout": "vertical",
        "dataverticalstyle": "closed",
        "toggled": "close-menu-close",
        "datanavstyle": ""
    });
    localStorage.removeItem("zanexnavstyles");
    localStorage.setItem("zanexverticalstyles", "closed");

};

function icontextOpenFn() {

    let html = document.documentElement;
    if (html.getAttribute('data-toggled') === 'icon-text-close') {
        html.setAttribute('data-icon-text', 'open');
    }
}
function icontextCloseFn() {
    let html = document.documentElement;
    if (html.getAttribute('data-toggled') === 'icon-text-close') {
        html.removeAttribute('data-icon-text');
    }
}

export const iconText = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "datanavlayout": "vertical",
        "dataverticalstyle": "icontext",
        "toggled": "icon-text-close",
        "datanavstyle": ""
    });
    localStorage.setItem("zanexverticalstyles", "icontext");

    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');

    appSidebar?.addEventListener("click", () => {
        console.log("clicking");
        icontextOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        icontextCloseFn();
    });

};
export const iconOverayFn = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "datanavlayout": "vertical",
        "dataverticalstyle": "overlay",
        "toggled": "icon-overlay-close",

    })
    localStorage.setItem("zanexverticalstyles", "overlay");

    var icon = document.getElementById("switcher-icon-overlay");
    if (icon) {
        icon.checked = true
    }
    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');
    appSidebar?.addEventListener("click", () => {
        DetachedOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        console.log("detachedclose");
        DetachedCloseFn();
    });
};

function DetachedOpenFn() {
    if (window.innerWidth > 992) {
        let html = document.documentElement;
        if (html.getAttribute('data-toggled') === 'detached-close' || html.getAttribute('data-toggled') === 'icon-overlay-close') {
            html.setAttribute('data-icon-overlay', 'open');
        }
    }
}
function DetachedCloseFn() {
    if (window.innerWidth > 992) {
        let html = document.documentElement;
        if (html.getAttribute('data-toggled') === 'detached-close' || html.getAttribute('data-toggled') === 'icon-overlay-close') {
            html.removeAttribute('data-icon-overlay');
        }
    }
}
export const DetachedFn = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "datanavlayout": "vertical",
        "dataverticalstyle": "detached",
        "toggled": "detached-close",
        "datanavstyle": "",

    })
    localStorage.setItem("zanexverticalstyles", "detached");

    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');

    appSidebar?.addEventListener("click", () => {
        DetachedOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        console.log("detachedclose");
        DetachedCloseFn();
    });
};

export const DoubletFn = (actionfunction) => {

    const theme = store.getState();
    // const menuNochildElement = document.querySelectorAll(".side-menu__item.active")[0];
    actionfunction({
        ...theme,
        "datanavlayout": "vertical",
        "dataverticalstyle": "doublemenu",
        "toggled": "double-menu-open",
        "datanavstyle": "",
    });
    localStorage.setItem("zanexverticalstyles", "doublemenu");
    localStorage.removeItem("zanexnavstyles");

    setTimeout(() => {
        if (!document.querySelector(".main-menu .has-sub.open")) {
            const theme = store.getState();
            actionfunction(
                {
                    ...theme,
                    "toggled": "double-menu-close"
                }
            );
        }
    }, 100);
};

export const bgImage1 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgimg": "bgimg1"
    });
    localStorage.setItem("bgimage", "bgimg1");
    localStorage.removeItem("bgimage2");
    localStorage.removeItem("bgimage3");
    localStorage.removeItem("bgimage4");
    localStorage.removeItem("bgimage5");
};

export const bgImage2 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgimg": "bgimg2"
    });
    localStorage.setItem("bgimage", "bgimg2");
    localStorage.removeItem("bgimage1");
    localStorage.removeItem("bgimage3");
    localStorage.removeItem("bgimage4");
    localStorage.removeItem("bgimage5");
};

export const bgImage3 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgimg": "bgimg3"
    });
    localStorage.setItem("bgimage", "bgimg3");
    localStorage.removeItem("bgimage1");
    localStorage.removeItem("bgimage2");
    localStorage.removeItem("bgimage4");
    localStorage.removeItem("bgimage5");
};

export const bgImage4 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgimg": "bgimg4"
    });
    localStorage.setItem("bgimage", "bgimg4");
    localStorage.removeItem("bgimage1");
    localStorage.removeItem("bgimage2");
    localStorage.removeItem("bgimage3");
    localStorage.removeItem("bgimage5");
};

export const bgImage5 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgimg": "bgimg5"
    });
    localStorage.setItem("bgimage", "bgimg5");
    localStorage.removeItem("bgimage1");
    localStorage.removeItem("bgimage2");
    localStorage.removeItem("bgimage3");
    localStorage.removeItem("bgimage4");
};


export const lightMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "datamenustyles": "light",
    });
    localStorage.setItem("zanexMenu", "light");
};

export const colorMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "datamenustyles": "color",
    });
    localStorage.setItem("zanexMenu", "color");
};

export const darkMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "datamenustyles": "dark",
    });
    localStorage.setItem("zanexMenu", "dark");
};

export const gradientMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "datamenustyles": "gradient",
    });
    localStorage.setItem("zanexMenu", "gradient");
};

export const transparentMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "datamenustyles": "transparent",
    });
    localStorage.setItem("zanexMenu", "transparent");
};

export const lightHeader = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataheaderstyles": "light",
    });
    localStorage.setItem("zanexHeader", "light");
};

export const darkHeader = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataheaderstyles": "dark",
    });
    localStorage.setItem("zanexHeader", "dark");
};

export const colorHeader = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataheaderstyles": "color",
    });
    localStorage.setItem("zanexHeader", "color");
};

export const gradientHeader = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataheaderstyles": "gradient",

    });
    localStorage.setItem("zanexHeader", "gradient");
};

export const transparentHeader = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataheaderstyles": "transparent",
    });
    localStorage.removeItem("gradient");
    localStorage.setItem("zanexHeader", "transparent");
};

export const primaryColor1 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorprimaryrgb": "58, 88, 146",

    });
    localStorage.setItem("primaryRGB", "58, 88, 146");


};
export const primaryColor2 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorprimaryrgb": "92, 144, 163",

    });
    localStorage.setItem("primaryRGB", "92, 144, 163");
};

export const primaryColor3 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorprimaryrgb": "161, 90, 223",
    });
    localStorage.setItem("primaryRGB", "161, 90, 223");
};

export const primaryColor4 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorprimaryrgb": "78, 172, 76",
    });
    localStorage.setItem("primaryRGB", "78, 172, 76");
};

export const primaryColor5 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorprimaryrgb": "223, 90, 90",
    });
    localStorage.setItem("primaryRGB", "223, 90, 90");
};

export const backgroundColor1 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodybg": "20, 30, 96",
        "darkbg": "25, 38, 101",
        "inputBorder": "255, 255, 255, 0.1",
        "datathememode": "dark",
        "datamenustyles": 'dark',
        "dataheaderstyles": "dark"
    });
    localStorage.setItem('darkBgRGB1', "20, 30, 96");
    localStorage.setItem('darkBgRGB2', "25, 38, 101");
    localStorage.setItem('inputBorder', "255, 255, 255, 0.1");

};

export const backgroundColor2 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodybg": "8, 78, 115",
        "darkbg": "13, 86, 120",
        "inputBorder": "255, 255, 255, 0.1",
        "datathememode": "dark",
        "datamenustyles": "dark",
        "dataheaderstyles": "dark"
    });
    localStorage.setItem('darkBgRGB1', "8, 78, 115");
    localStorage.setItem('darkBgRGB2', "13, 86, 120",);
    localStorage.setItem('inputBorder', "255, 255, 255, 0.1",);
};

export const backgroundColor3 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodybg": "90, 37, 135",
        "darkbg": "95, 45, 140",
        "inputBorder": "255, 255, 255, 0.1",
        "datathememode": "dark",
        "datamenustyles": "dark",
        "dataheaderstyles": "dark"
    });
    localStorage.setItem('darkBgRGB1', "90, 37, 135");
    localStorage.setItem('darkBgRGB2', "95, 45, 140",);
    localStorage.setItem('inputBorder', "255, 255, 255, 0.1",);
};

export const backgroundColor4 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodybg": "24, 101, 51",
        "darkbg": "29, 109, 56",
        "inputBorder": "255, 255, 255, 0.1",
        "datathememode": "dark",
        "datamenustyles": "dark",
        "dataheaderstyles": "dark"
    });
    localStorage.setItem('darkBgRGB1', "24, 101, 51");
    localStorage.setItem('darkBgRGB2', "29, 109, 56");
    localStorage.setItem('inputBorder', "255, 255, 255, 0.1");
};

export const backgroundColor5 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodybg": "120, 66, 20",
        "darkbg": "125, 74, 25",
        "inputBorder": "255, 255, 255, 0.1",
        "datathememode": "dark",
        "datamenustyles": "dark",
        "dataheaderstyles": "dark"
    });
    localStorage.setItem('darkBgRGB1', "120, 66, 20");
    localStorage.setItem('darkBgRGB2', "125, 74, 25");
    localStorage.setItem('inputBorder', "255, 255, 255, 0.1");
};

const ColorPicker = (props) => {
    return (
        <div className="color-picker-input">
            <input type="color" {...props} />
        </div>
    );
};

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
const Themeprimarycolor = ({ actionfunction }) => {
    const theme = store.getState();
    const [state, updateState] = useState("#6259ca");

    const handleInput = (e) => {
        const rgb = hexToRgb(e.target.value);

        if (rgb !== null) {
            const { r, g, b } = rgb;
            updateState(e.target.value);
            actionfunction({
                ...theme,
                "colorprimaryrgb": `${r}, ${g}, ${b}`,
            });
            localStorage.setItem("primaryRGB", `${r}, ${g}, ${b}`);
        }
    };

    return (
        <div className="Themeprimarycolor theme-container-primary pickr-container-primary">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export default Themeprimarycolor;

//themeBackground
export const Themebackgroundcolor = ({ actionfunction }) => {
    const theme = store.getState();
    const [state, updateState] = useState("#6259ca");
    const handleInput = (e) => {
        const { r, g, b } = hexToRgb(e.target.value);
        updateState(e.target.value);
        actionfunction({
            ...theme,
            "bodybg": `${r}, ${g}, ${b}`,
            "darkbg": `${r + 5} ${g + 8} ${b + 5}`,
            "inputBorder": "255, 255, 255, 0.1",
            "datathememode": "dark",
            "datamenustyles": "dark",
            "dataheaderstyles": "dark"
        });
        localStorage.setItem("darkBgRGB1", `${r}, ${g}, ${b}`);
        localStorage.setItem("darkBgRGB2", `${r + 5} ${g + 8} ${b + 5}`);
        localStorage.setItem("inputBorder", "255, 255, 255, 0.1");
    };
    return (
        <div className="Themebackgroundcolor">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export const Reset = (actionfunction) => {
    const theme = store.getState();
    Vertical(actionfunction);
    actionfunction({
        ...theme,
        lang: "en",
        dir: "ltr",
        datanavlayout: "vertical",
        datathememode: "light",
        dataheaderstyles: 'light',
        datamenustyles: 'light',
        dataverticalstyle: "default",
        toggled: "",
        datanavstyle: "",
        horstyle: "",
        datapagestyle: "regular",
        datawidth: "fullwidth",
        datamenuposition: "fixed",
        dataheaderposition: "fixed",
        // loader: "disable",
        iconoverlay: "",
        colorprimaryrgb: "",
        bodybg: "",
        light: "",
        darkbg: "",
        inputBorder: "",
        bgimg: "",
        icontext: "",
        body: {
            class: ""
        }
    });
    localStorage.clear();

    const headerLightInput = document.getElementById("switcher-header-light");
    const menuLightInput = document.getElementById("switcher-menu-light");
    if (headerLightInput && menuLightInput) {
        headerLightInput.checked = true;
        menuLightInput.checked = true;
    }
};

export const Resetlandingswitcher = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        lang: "en",
        dir: "ltr",
        datathememode: "light",
        datamenustyles: "dark",
        datanavlayout: "horizontal",
        dataheaderstyles: "light",
        dataverticalstyle: "overlay",
        toggled: "",
        datanavstyle: "menu-click",
        datamenuposition: "",
        iconoverlay: "",
        colorprimaryrgb: "",
        bgimg: "",
        icontext: "",
        body: {
            class: ""
        }
    });
    localStorage.clear();
};

export const LocalStorageBackup = (actionfunction) => {

    (localStorage.zanexltr) ? Ltr(actionfunction) : "";
    (localStorage.zanexrtl) ? Rtl(actionfunction) : "";
    (localStorage.zanexdarktheme) ? Dark(actionfunction) : "";
    (localStorage.zanexlighttheme) ? Light(actionfunction) : "";
    (localStorage.zanexregular) ? Regular(actionfunction) : "";
    (localStorage.zanexclassic) ? Classic(actionfunction) : "";
    (localStorage.zanexmodern) ? Modern(actionfunction) : "";
    (localStorage.zanexfullwidth) ? Fullwidth(actionfunction) : "";
    (localStorage.zanexboxed) ? Boxed(actionfunction) : "";
    (localStorage.zanexmenufixed) ? FixedMenu(actionfunction) : "";
    (localStorage.zanexmenuscrollable) ? scrollMenu(actionfunction) : "";
    (localStorage.zanexheaderfixed) ? Headerpostionfixed(actionfunction) : "";
    (localStorage.zanexheaderscrollable) ? Headerpostionscroll(actionfunction) : "";

    (localStorage.zanexnavstyles === "menu-click") ? Menuclick(actionfunction) : '';
    (localStorage.zanexnavstyles === "menu-hover") ? MenuHover(actionfunction) : '';
    (localStorage.zanexnavstyles === "icon-click") ? IconClick(actionfunction) : '';
    (localStorage.zanexnavstyles === "icon-hover") ? IconHover(actionfunction) : '';

    (localStorage.bgimage === "bgimg1") ? bgImage1(actionfunction) : '';
    (localStorage.bgimage === "bgimg2") ? bgImage2(actionfunction) : '';
    (localStorage.bgimage === "bgimg3") ? bgImage3(actionfunction) : '';
    (localStorage.bgimage === "bgimg4") ? bgImage4(actionfunction) : '';
    (localStorage.bgimage === "bgimg5") ? bgImage5(actionfunction) : '';
    (localStorage.zanexlayout == 'horizontal') && HorizontalClick(actionfunction);
    (localStorage.zanexlayout == 'vertical') && Vertical(actionfunction);

    //primitive 
    if (
        localStorage.getItem("zanexltr") == null ||
        localStorage.getItem("zanexltr") == "ltr"
    )
        if (localStorage.getItem("zanexrtl") == "rtl") {
            document.querySelector("body")?.classList.add("rtl");
            document.querySelector("html[lang=en]")?.setAttribute("dir", "rtl");

        }

    // Theme Primary: Colors: Start
    switch (localStorage.primaryRGB) {
        case '160, 132, 249':
            primaryColor1(actionfunction);

            break;
        case '37, 199, 224':
            primaryColor2(actionfunction);

            break;
        case '176, 50, 235':
            primaryColor3(actionfunction);

            break;
        case '246, 95, 78':
            primaryColor4(actionfunction);

            break;
        case '38, 111, 254':
            primaryColor5(actionfunction);

            break;
        default:
            break;
    }
    // Theme Primary: Colors: End

    switch (localStorage.darkBgRGB1) {
        case '20, 30, 96':
            backgroundColor1(actionfunction);

            break;
        case '8, 78, 115':
            backgroundColor2(actionfunction);

            break;
        case '90, 37, 135':
            backgroundColor3(actionfunction);

            break;
        case '24, 101, 51':
            backgroundColor4(actionfunction);

            break;
        case '120, 66, 20':
            backgroundColor5(actionfunction);

            break;
        default:
            break;
    }

    //layout
    if (localStorage.zanexverticalstyles) {
        const verticalStyles = localStorage.getItem("zanexverticalstyles");

        switch (verticalStyles) {
            case "default":
                Defaultmenu(actionfunction);
                break;
            case "closed":
                Closedmenu(actionfunction);
                break;
            case "icontext":
                iconText(actionfunction);
                break;
            case "overlay":
                iconOverayFn(actionfunction);
                break;
            case "detached":
                DetachedFn(actionfunction);
                break;
            case "doublemenu":
                DoubletFn(actionfunction);
                break;
        }
    }

    //Theme Primary:
    if (localStorage.primaryRGB) {
        const theme = store.getState();
        actionfunction({
            ...theme,
            "colorprimaryrgb": localStorage.primaryRGB,
        });
    }

    //Theme BAckground:
    if (localStorage.darkBgRGB1) {
        const theme = store.getState();
        actionfunction({
            ...theme,
            "bodybg": localStorage.darkBgRGB1,
            "darkbg": localStorage.darkBgRGB2,
            "inputBorder": localStorage.inputBorder,
            "datathememode": "dark",
            "dataheaderstyles": "dark",
            "datamenustyles": "dark",
        });
    }

    
    // ThemeColor MenuColor Start
    switch (localStorage.zanexMenu) {
        case 'light':
            lightMenu(actionfunction);

            break;
        case 'dark':
            darkMenu(actionfunction);

            break;
        case 'color':
            colorMenu(actionfunction);

            break;
        case 'gradient':
            gradientMenu(actionfunction);

            break;
        case 'transparent':
            transparentMenu(actionfunction);

            break;
        default:
            break;
    }

    // ThemeColor Header Colors: start
    switch (localStorage.zanexHeader) {
        case 'light':
            lightHeader(actionfunction);

            break;
        case 'dark':
            darkHeader(actionfunction);

            break;
        case 'color':
            colorHeader(actionfunction);

            break;
        case 'gradient':
            gradientHeader(actionfunction);

            break;
        case 'transparent':
            transparentHeader(actionfunction);

            break;
        default:
            break;
    }

};
