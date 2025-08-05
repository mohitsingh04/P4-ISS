import Dashboard from "../components/Dashboard";
import Icons from "../components/Icons";
import Widgets from "../components/Widgets";
import Accordioncollapse from "../components/advancedui/Accordioncollapse";
import Carousels from "../components/advancedui/Carousels";
import Cryptocurrencies from "../components/advancedui/Cryptocurrencies";
import Defaultchat from "../components/advancedui/Defaultchat";
import Draggablecard from "../components/advancedui/Draggablecard";
import Modalcloses from "../components/advancedui/Modalcloses";
import Navbar from "../components/advancedui/Navbar";
import Offcanvas from "../components/advancedui/Offcanvas";
import Placeholder from "../components/advancedui/Placeholder";
import Ratings from "../components/advancedui/Ratings";
import Search from "../components/advancedui/Search";
import Swiperjs from "../components/advancedui/Swiperjs";
import Userlist from "../components/advancedui/Userlist";
import Fullcalendar from "../components/apps/Fullcalendar";
import Gallery from "../components/apps/Gallery";
import Sweetalerts from "../components/apps/Sweetalerts";
import Timeline from "../components/apps/Timeline";
import Chartjs from "../components/charts/Chartjs";
import Echart from "../components/charts/Echart";
import Areachart from "../components/charts/apexchart/Areachart";
import Barchart from "../components/charts/apexchart/Barchart";
import Boxplotchart from "../components/charts/apexchart/Boxplotchart";
import Bubblechart from "../components/charts/apexchart/Bubblechart";
import Candlestickchart from "../components/charts/apexchart/Candlestickchart";
import Columnchart from "../components/charts/apexchart/Columnchart";
import Heatmapchart from "../components/charts/apexchart/Heatmapchart";
import Linechart from "../components/charts/apexchart/Linechart";
import Mixedchart from "../components/charts/apexchart/Mixedchart";
import Piechart from "../components/charts/apexchart/Piechart";
import Polarareachart from "../components/charts/apexchart/Polarareachart";
import Radarchart from "../components/charts/apexchart/Radarchart";
import Radialbarchart from "../components/charts/apexchart/Radialbarchart";
import Rangeareachart from "../components/charts/apexchart/Rangeareachart";
import Scatterchart from "../components/charts/apexchart/Scatterchart";
import Timelinechart from "../components/charts/apexchart/Timelinechart";
import Treemapchart from "../components/charts/apexchart/Treemapchart";
import Floatinglabels from "../components/forms/Floatinglabels";
import Formlayouts from "../components/forms/Formlayouts";
import Select2 from "../components/forms/Select2";

import Validation from "../components/forms/Validation";
import Suneditor from "../components/forms/formeditor/Suneditor";
import Checkradios from "../components/forms/formelement/Checkradios";
import Colorpicker from "../components/forms/formelement/Colorpicker";
import Datetimepicker from "../components/forms/formelement/Datetimepicker";
import Fileupload from "../components/forms/formelement/Fileupload";
import Formselect from "../components/forms/formelement/Formselect";
import Input from "../components/forms/formelement/Input";
import Inputgroup from "../components/forms/formelement/Inputgroup";
import Inputmasks from "../components/forms/formelement/Inputmasks";
import Rangeslider from "../components/forms/formelement/Rangeslider";
import Leafletmaps from "../components/maps/Leafletmaps";
import Simplemaps from "../components/maps/Simplemaps";
import Aboutcompany from "../components/pages/Aboutcompany";
import Editprofile from "../pages/Profile/Editprofile";
import Emptypage from "../components/pages/Emptypage";
import Faqs from "../components/pages/Faqs";
import Invoice from "../components/pages/Invoice";
import Mailcompose from "../components/pages/Mailcompose";
import Mailinbox from "../components/pages/Mailinbox";
import Pricingtables from "../components/pages/Pricingtables";
import Profile from "../pages/Profile/Profile";
import Services from "../components/pages/Services";
import Terms from "../components/pages/Terms";
import Blog from "../components/pages/blog/Blog";
import Blogdetails from "../components/pages/blog/Blogdetails";
import Blogpost from "../components/pages/blog/Blogpost";
import Checkout from "../components/pages/ecommerce/Checkout";
import Shop from "../components/pages/ecommerce/Shop";
import Shoppingcart from "../components/pages/ecommerce/Shoppingcart";
import Shoppingdetail from "../components/pages/ecommerce/Shoppingdetail";
import Wishlist from "../components/pages/ecommerce/Wishlist";
import Filedetails from "../components/pages/filemanager/Filedetails";
import Filemanager from "../components/pages/filemanager/Filemanager";
import Filemanagerlist from "../components/pages/filemanager/Filemanagerlist";
import Datatables from "../components/tables/Datatables";
import Gridjstables from "../components/tables/Gridjstables";
import Tables from "../components/tables/Tables";
import Alerts from "../components/uielements/Alerts";
import Badges from "../components/uielements/Badges";
import Breadcrumbs from "../components/uielements/Breadcrumbs";
import Buttongroups from "../components/uielements/Buttongroups";
import Buttons from "../components/uielements/Buttons";
import Cards from "../components/uielements/Cards";
import Dropdowns from "../components/uielements/Dropdowns";
import Imagesfigures from "../components/uielements/Imagesfigures";
import Listgroups from "../components/uielements/Listgroups";
import Navtabs from "../components/uielements/Navtabs";
import Objectfit from "../components/uielements/Objectfit";
import Paginations from "../components/uielements/Paginations";
import Popovers from "../components/uielements/Popovers";
import Progress from "../components/uielements/Progress";
import Spinners from "../components/uielements/Spinners";
import Tags from "../components/uielements/Tags";
import Toasts from "../components/uielements/Toasts";
import Tooltips from "../components/uielements/Tooltips";
import Typography from "../components/uielements/Typography";
import Additionalcontent from "../components/utilities/Additionalcontent";
import Avatars from "../components/utilities/Avatars";
import Borders from "../components/utilities/Borders";
import Breakpoints from "../components/utilities/Breakpoints";
import Colors from "../components/utilities/Colors";
import Columns from "../components/utilities/Columns";
import Flex from "../components/utilities/Flex";
import Gutters from "../components/utilities/Gutters";
import Helpers from "../components/utilities/Helpers";
import Position from "../components/utilities/Position";

export const Routedata = [

    { id: 1, path: `${import.meta.env.BASE_URL}dashboard`, element: <Dashboard /> },
    { id: 2, path: `${import.meta.env.BASE_URL}widgets`, element: <Widgets /> },

    { id: 3, path: `${import.meta.env.BASE_URL}uielements/alerts`, element: <Alerts /> },
    { id: 4, path: `${import.meta.env.BASE_URL}uielements/badges`, element: <Badges /> },
    { id: 5, path: `${import.meta.env.BASE_URL}uielements/breadcrumbs`, element: <Breadcrumbs /> },
    { id: 6, path: `${import.meta.env.BASE_URL}uielements/buttons`, element: <Buttons /> },
    { id: 7, path: `${import.meta.env.BASE_URL}uielements/buttongroups`, element: <Buttongroups /> },
    { id: 8, path: `${import.meta.env.BASE_URL}uielements/cards`, element: <Cards /> },
    { id: 9, path: `${import.meta.env.BASE_URL}uielements/dropdowns`, element: <Dropdowns /> },
    { id: 10, path: `${import.meta.env.BASE_URL}uielements/imagesfigures`, element: <Imagesfigures /> },
    { id: 11, path: `${import.meta.env.BASE_URL}uielements/listgroups`, element: <Listgroups /> },
    { id: 12, path: `${import.meta.env.BASE_URL}uielements/navtabs`, element: <Navtabs /> },
    { id: 13, path: `${import.meta.env.BASE_URL}uielements/objectfit`, element: <Objectfit /> },
    { id: 14, path: `${import.meta.env.BASE_URL}uielements/paginations`, element: <Paginations /> },
    { id: 15, path: `${import.meta.env.BASE_URL}uielements/popovers`, element: <Popovers /> },
    { id: 21, path: `${import.meta.env.BASE_URL}uielements/progress`, element: <Progress /> },
    { id: 16, path: `${import.meta.env.BASE_URL}uielements/spinners`, element: <Spinners /> },
    { id: 17, path: `${import.meta.env.BASE_URL}uielements/tags`, element: <Tags /> },
    { id: 18, path: `${import.meta.env.BASE_URL}uielements/toasts`, element: <Toasts /> },
    { id: 19, path: `${import.meta.env.BASE_URL}uielements/tooltips`, element: <Tooltips /> },
    { id: 20, path: `${import.meta.env.BASE_URL}uielements/typography`, element: <Typography /> },

    { id: 21, path: `${import.meta.env.BASE_URL}utilities/avatars`, element: <Avatars /> },
    { id: 22, path: `${import.meta.env.BASE_URL}utilities/borders`, element: <Borders /> },
    { id: 23, path: `${import.meta.env.BASE_URL}utilities/breakpoints`, element: <Breakpoints /> },
    { id: 24, path: `${import.meta.env.BASE_URL}utilities/colors`, element: <Colors /> },
    { id: 25, path: `${import.meta.env.BASE_URL}utilities/columns`, element: <Columns /> },
    { id: 26, path: `${import.meta.env.BASE_URL}utilities/flex`, element: <Flex /> },
    { id: 27, path: `${import.meta.env.BASE_URL}utilities/gutters`, element: <Gutters /> },
    { id: 28, path: `${import.meta.env.BASE_URL}utilities/helpers`, element: <Helpers /> },
    { id: 29, path: `${import.meta.env.BASE_URL}utilities/position`, element: <Position /> },
    { id: 30, path: `${import.meta.env.BASE_URL}utilities/additionalcontent`, element: <Additionalcontent /> },

    { id: 31, path: `${import.meta.env.BASE_URL}charts/apexchart/linechart`, element: <Linechart /> },
    { id: 32, path: `${import.meta.env.BASE_URL}charts/apexchart/areachart`, element: <Areachart /> },
    { id: 33, path: `${import.meta.env.BASE_URL}charts/apexchart/columnchart`, element: <Columnchart /> },
    { id: 34, path: `${import.meta.env.BASE_URL}charts/apexchart/barchart`, element: <Barchart /> },
    { id: 35, path: `${import.meta.env.BASE_URL}charts/apexchart/mixedchart`, element: <Mixedchart /> },
    { id: 36, path: `${import.meta.env.BASE_URL}charts/apexchart/rangeareachart`, element: <Rangeareachart /> },
    { id: 37, path: `${import.meta.env.BASE_URL}charts/apexchart/timelinechart`, element: <Timelinechart /> },
    { id: 38, path: `${import.meta.env.BASE_URL}charts/apexchart/candlestickchart`, element: <Candlestickchart /> },
    { id: 39, path: `${import.meta.env.BASE_URL}charts/apexchart/boxplotchart`, element: <Boxplotchart /> },
    { id: 40, path: `${import.meta.env.BASE_URL}charts/apexchart/bubblechart`, element: <Bubblechart /> },
    { id: 41, path: `${import.meta.env.BASE_URL}charts/apexchart/scatterchart`, element: <Scatterchart /> },
    { id: 42, path: `${import.meta.env.BASE_URL}charts/apexchart/heatmapchart`, element: <Heatmapchart /> },
    { id: 43, path: `${import.meta.env.BASE_URL}charts/apexchart/treemapchart`, element: <Treemapchart /> },
    { id: 44, path: `${import.meta.env.BASE_URL}charts/apexchart/piechart`, element: <Piechart /> },
    { id: 45, path: `${import.meta.env.BASE_URL}charts/apexchart/radialbarchart`, element: <Radialbarchart /> },
    { id: 46, path: `${import.meta.env.BASE_URL}charts/apexchart/radarchart`, element: <Radarchart /> },
    { id: 47, path: `${import.meta.env.BASE_URL}charts/apexchart/polarareachart`, element: <Polarareachart /> },
    { id: 48, path: `${import.meta.env.BASE_URL}charts/chartjs`, element: <Chartjs /> },
    { id: 49, path: `${import.meta.env.BASE_URL}charts/echart`, element: <Echart /> },

    { id: 50, path: `${import.meta.env.BASE_URL}forms/formelement/input`, element: <Input /> },
    { id: 51, path: `${import.meta.env.BASE_URL}forms/formelement/checkradios`, element: <Checkradios /> },
    { id: 52, path: `${import.meta.env.BASE_URL}forms/formelement/inputgroup`, element: <Inputgroup /> },
    { id: 53, path: `${import.meta.env.BASE_URL}forms/formelement/formselect`, element: <Formselect /> },
    { id: 54, path: `${import.meta.env.BASE_URL}forms/formelement/rangeslider`, element: <Rangeslider /> },
    { id: 55, path: `${import.meta.env.BASE_URL}forms/formelement/inputmasks`, element: <Inputmasks /> },
    { id: 56, path: `${import.meta.env.BASE_URL}forms/formelement/fileupload`, element: <Fileupload /> },
    { id: 57, path: `${import.meta.env.BASE_URL}forms/formelement/datetimepicker`, element: <Datetimepicker /> },
    { id: 58, path: `${import.meta.env.BASE_URL}forms/formelement/colorpicker`, element: <Colorpicker /> },

    { id: 59, path: `${import.meta.env.BASE_URL}forms/floatinglabels`, element: <Floatinglabels /> },
    { id: 60, path: `${import.meta.env.BASE_URL}forms/formlayouts`, element: <Formlayouts /> },
    { id: 61, path: `${import.meta.env.BASE_URL}forms/formeditor/suneditor`, element: <Suneditor /> },
    { id: 62, path: `${import.meta.env.BASE_URL}forms/validation`, element: <Validation /> },
    { id: 63, path: `${import.meta.env.BASE_URL}forms/select2`, element: <Select2 /> },

    { id: 64, path: `${import.meta.env.BASE_URL}advancedui/accordioncollapse`, element: <Accordioncollapse /> },
    { id: 65, path: `${import.meta.env.BASE_URL}advancedui/carousels`, element: <Carousels /> },
    { id: 66, path: `${import.meta.env.BASE_URL}advancedui/cryptocurrencies`, element: <Cryptocurrencies /> },
    { id: 67, path: `${import.meta.env.BASE_URL}advancedui/defaultchat`, element: <Defaultchat /> },
    { id: 68, path: `${import.meta.env.BASE_URL}advancedui/draggablecard`, element: <Draggablecard /> },
    { id: 69, path: `${import.meta.env.BASE_URL}advancedui/modalcloses`, element: <Modalcloses /> },
    { id: 70, path: `${import.meta.env.BASE_URL}advancedui/navbar`, element: <Navbar /> },
    { id: 71, path: `${import.meta.env.BASE_URL}advancedui/offcanvas`, element: <Offcanvas /> },
    { id: 72, path: `${import.meta.env.BASE_URL}advancedui/placeholder`, element: <Placeholder /> },
    { id: 73, path: `${import.meta.env.BASE_URL}advancedui/ratings`, element: <Ratings /> },
    { id: 74, path: `${import.meta.env.BASE_URL}advancedui/search`, element: <Search /> },
    { id: 75, path: `${import.meta.env.BASE_URL}advancedui/swiperjs`, element: <Swiperjs /> },
    { id: 76, path: `${import.meta.env.BASE_URL}advancedui/userlist`, element: <Userlist /> },

    { id: 77, path: `${import.meta.env.BASE_URL}apps/fullcalendar`, element: <Fullcalendar /> },
    { id: 78, path: `${import.meta.env.BASE_URL}apps/gallery`, element: <Gallery /> },
    { id: 79, path: `${import.meta.env.BASE_URL}apps/sweetalerts`, element: <Sweetalerts /> },
    { id: 80, path: `${import.meta.env.BASE_URL}apps/timeline`, element: <Timeline /> },

    { id: 80, path: `${import.meta.env.BASE_URL}pages/profile`, element: <Profile /> },
    { id: 81, path: `${import.meta.env.BASE_URL}pages/editprofile`, element: <Editprofile /> },
    { id: 82, path: `${import.meta.env.BASE_URL}pages/mailinbox`, element: <Mailinbox /> },
    { id: 83, path: `${import.meta.env.BASE_URL}pages/mailcompose`, element: <Mailcompose /> },
    { id: 84, path: `${import.meta.env.BASE_URL}pages/aboutcompany`, element: <Aboutcompany /> },
    { id: 85, path: `${import.meta.env.BASE_URL}pages/services`, element: <Services /> },
    { id: 86, path: `${import.meta.env.BASE_URL}pages/faqs`, element: <Faqs /> },
    { id: 87, path: `${import.meta.env.BASE_URL}pages/terms`, element: <Terms /> },
    { id: 88, path: `${import.meta.env.BASE_URL}pages/invoice`, element: <Invoice /> },
    { id: 89, path: `${import.meta.env.BASE_URL}pages/pricingtables`, element: <Pricingtables /> },
    { id: 90, path: `${import.meta.env.BASE_URL}pages/emptypage`, element: <Emptypage /> },
    { id: 91, path: `${import.meta.env.BASE_URL}pages/blog/blog`, element: <Blog /> },
    { id: 92, path: `${import.meta.env.BASE_URL}pages/blog/blogdetails`, element: <Blogdetails /> },
    { id: 93, path: `${import.meta.env.BASE_URL}pages/blog/blogpost`, element: <Blogpost /> },
    { id: 94, path: `${import.meta.env.BASE_URL}pages/ecommerce/shop`, element: <Shop /> },
    { id: 95, path: `${import.meta.env.BASE_URL}pages/ecommerce/shoppingdetail`, element: <Shoppingdetail /> },
    { id: 96, path: `${import.meta.env.BASE_URL}pages/ecommerce/shoppingcart`, element: <Shoppingcart /> },
    { id: 97, path: `${import.meta.env.BASE_URL}pages/ecommerce/wishlist`, element: <Wishlist /> },
    { id: 98, path: `${import.meta.env.BASE_URL}pages/ecommerce/checkout`, element: <Checkout /> },
    { id: 99, path: `${import.meta.env.BASE_URL}pages/filemanager/filemanager`, element: <Filemanager /> },
    { id: 100, path: `${import.meta.env.BASE_URL}pages/filemanager/filemanagerlist`, element: <Filemanagerlist /> },
    { id: 101, path: `${import.meta.env.BASE_URL}pages/filemanager/filedetails`, element: <Filedetails /> },
    { id: 102, path: `${import.meta.env.BASE_URL}tables/tables`, element: <Tables /> },
    { id: 103, path: `${import.meta.env.BASE_URL}tables/gridjstables`, element: <Gridjstables /> },
    { id: 104, path: `${import.meta.env.BASE_URL}tables/datatables`, element: <Datatables /> },

    { id: 105, path: `${import.meta.env.BASE_URL}maps/leafletmaps`, element: <Leafletmaps /> },
    { id: 106, path: `${import.meta.env.BASE_URL}maps/simplemaps`, element: <Simplemaps /> },

    { id: 107, path: `${import.meta.env.BASE_URL}Icons`, element: <Icons /> },

]
