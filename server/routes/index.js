import express from "express";
import bodyParser from "body-parser";
import {
  blogUploadMulter,
  categoryUploadMulter,
  eventUploadMulter,
  processImage,
  upload,
  userUpload,
  examUploadMulter,
} from "../multer/index.js";
import {
  changePassword,
  forgotPassword,
  getEmailVerification,
  getResetToken,
  getToken,
  login,
  logout,
  postResetToken,
  profile,
  register,
  verifyEmail,
} from "../controller/AuthController.js";
import {
  addNewUser,
  deleteUser,
  deleteUserProfile,
  getUser,
  getUserById,
  updateUser,
  // UpdateUserProfile,
} from "../controller/UserController.js";
import {
  addStatus,
  deleteStatus,
  getStatus,
  getStatusById,
  updateStatus,
} from "../controller/StatusController.js";
import {
  addCategory,
  deleteCategory,
  getCategory,
  getCategoryById,
  updateCategory,
} from "../controller/CategoryController.js";
import {
  addProperty,
  deleteProperty,
  getProperty,
  getPropertyById,
  getPropertyBySlug,
  getPropertyByUniqueId,
  updateProperty,
  updatePropertyImages,
} from "../controller/PropertyController.js";
import {
  addTeam,
  deleteTeam,
  getTeam,
  getTeamById,
  getTeamByPropertyId,
  updateTeam,
} from "../controller/TeamController.js";
import {
  addReview,
  deleteReview,
  getReview,
  getReviewById,
  getReviewByPropertyId,
  updateReview,
} from "../controller/ReviewsController.js";
import {
  addFaq,
  deleteFaq,
  getFaq,
  getFaqById,
  getFaqByPropertyId,
  updateFaq,
} from "../controller/FaqsController.js";
import {
  addGallery,
  addNewGalleryImages,
  deleteGallery,
  EditGalleryTitle,
  getGallery,
  getGalleryById,
  getGalleryByPropertyId,
  removeGalleryImages,
  updateGallery,
} from "../controller/GalleryController.js";
import {
  addSeo,
  deleteSeo,
  getSeo,
  getSeoById,
  getSeoByPropertyId,
  updateSeo,
} from "../controller/SeoController.js";
import {
  addBusinessHours,
  changePropertyCategory,
  getBusinessHours,
  getBusinessHoursByPropertyId,
  updateBusinessHours,
} from "../controller/BusinessHourController.js";
import {
  getCity,
  getCountry,
  getPermissions,
  getState,
} from "../controller/ExtraControllers.js";
import {
  addAmenities,
  getAmenities,
  getAmenitiesByPropertyId,
  updateAmenities,
} from "../controller/AmenitesController.js";
import {
  addEnquiry,
  archiveStatus,
  deleteArchiveEnquiry,
  enquiryStatus,
  getAllArchiveEnquiry,
  getAllEnquiry,
  getArchiveEnquiryByObjectId,
  getArchiveEnquiryByPropertyId,
  getEnquiryByObjectId,
  getEnquiryByPropertyId,
  softDeleteEnquiry,
} from "../controller/EnqiryControllers.js";
import {
  addLocation,
  getAllLocations,
  getLocation,
  UpdateLocation,
} from "../controller/LocationController.js";
import {
  CreateCoupon,
  DeleteCoupon,
  getCouponByPropertyId,
  UpdateCoupon,
} from "../controller/CouponController.js";
import {
  AddHostel,
  AddHostelImages,
  DeleteHostel,
  EditHostel,
  getHostelByPropertyId,
  removeHostelImages,
} from "../controller/HostelController.js";
import ExpireVerification from "../helper/ExpireVerification/ExpireVerification.js";
import { GoogleLoginAuth } from "../controller/GoogleAuth.js";
import { addOrUpdateLegal, getLegal } from "../controller/LegalController.js";
import {
  CreateBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  getBlogByUniqueId,
  UpdateBlog,
} from "../controller/BlogsController.js";
import {
  createBlogCategory,
  deleteBlogCategory,
  getAllBlogCategories,
  getBlogCategoryById,
  updateBlogCategory,
} from "../controller/BlogCategoryController.js";
import {
  CreateTagController,
  deleteblogTag,
  getAllBlogTags,
  getBlogTagById,
} from "../controller/BlogTagController.js";
import {
  CreateBlogSeo,
  deleteBlogSeo,
  getSeoByBlogId,
  updateBlogSeo,
} from "../controller/BlogSeoController.js";
import {
  CreateEvent,
  deleteEvent,
  getAllEvents,
  getEventsbyId,
  UpdateEvent,
} from "../controller/EventsController.js";
import { getYogaType } from "../controller/YogaTypeController.js";
import { createBlogEnquiry } from "../controller/BlogEnquiryController.js";
import {
  createExam,
  deleteExam,
  getAllExams,
  getExamById,
  restoreExam,
  softDeleteExam,
  updateExam,
} from "../controller/ExamController.js";
import {
  createPropertyExam,
  deletePropertyExamById,
  getExamByPropertyId,
  updatePropertyExam,
} from "../controller/PropertyExamController.js";

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//? Auth Routes//
router.post("/register", register);
router.post("/login", login);
router.post("/verify-email/:email", verifyEmail);
router.get("/verify-email/:token", getEmailVerification);
router.post("/forgot-password", forgotPassword);
router.get("/reset/:token", getResetToken);
router.post("/reset", postResetToken);
router.get("/profile", profile);
router.get("/logout", logout);
router.post("/change-password", changePassword);
router.get("/get-token", getToken);
router.get("/verify-email/check/expiry", ExpireVerification);

router.post("/google", GoogleLoginAuth);

//?Extra Routes
router.get("/permissions", getPermissions);
router.get("/cities", getCity);
router.get("/states", getState);
router.get("/countries", getCountry);

//?User Routes
const profileUpload = userUpload.fields([{ name: "profile", maxCount: 1 }]);
router.patch("/user/:objectId", profileUpload, processImage, updateUser);
router.get("/users", getUser);
router.get("/user/:objectId", getUserById);
router.post("/user/new", addNewUser);
router.delete("/user/:objectId", deleteUser);
router.delete("/user/profile/:objectId", deleteUserProfile);

// ?Status Route
router.get("/status", getStatus);
router.get("/status/:objectId", getStatusById);
router.post("/status", addStatus);
router.patch("/status/:objectId", updateStatus);
router.delete("/status/:objectId", deleteStatus);

//? Exams Routes
const examUpload = examUploadMulter.fields([
  { name: "exam_logo", maxCount: 1 },
  { name: "featured_image", maxCount: 1 },
]);
router.post(`/exam`, examUpload, processImage, createExam);
router.get(`/exam`, getAllExams);
router.delete(`/exam/:objectId`, deleteExam);
router.get(`/exam/:objectId`, getExamById);
router.patch(`/exam/:objectId`, examUpload, processImage, updateExam);
router.get("/exam/soft/:objectId", softDeleteExam);
router.get("/exam/restore/:objectId", restoreExam);

//? Property Exam Routes
router.post(`/property-exam`, createPropertyExam);
router.delete(`/property-exam/:objectId`, deletePropertyExamById);
router.get(`/property/property-exam/:property_id`, getExamByPropertyId);
router.patch(`/property-exam/:objectId`, updatePropertyExam);

// ?Category Route
const categoryUpload = categoryUploadMulter.fields([
  { name: "category_icon", maxCount: 1 },
  { name: "featured_image", maxCount: 1 },
]);
router.get("/category", getCategory);
router.post("/category", categoryUpload, processImage, addCategory);
router.patch(
  "/category/:objectId",
  categoryUpload,
  processImage,
  updateCategory
);
router.delete("/category/:objectId", deleteCategory);
router.get("/category/:objectId", getCategoryById);

//?Enquiry Route
router.get("/enquiry", getAllEnquiry);
router.delete("/enquiry/soft/:objectId", softDeleteEnquiry);
router.get("/enquiry/:objectId", getEnquiryByObjectId);
router.patch("/enquiry/status/:objectId", enquiryStatus);
router.get("/enquiry/archive/all", getAllArchiveEnquiry);
router.delete("/enquiry/archive/:objectId", deleteArchiveEnquiry);
router.patch("/enquiry/archive/status/:objectId", archiveStatus);
router.post("/add/enquiry", addEnquiry);
router.get("/enquiry/archive/:objectId", getArchiveEnquiryByObjectId);
router.get("/property/enquiry/:property_id", getEnquiryByPropertyId);
router.get(
  "/property/archive/enquiry/:property_id",
  getArchiveEnquiryByPropertyId
);

//? Property Route
const propertyUpload = upload.fields([
  { name: "property_logo", maxCount: 1 },
  { name: "featured_image", maxCount: 1 },
]);
router.get("/property", getProperty);
router.post("/property", propertyUpload, processImage, addProperty);

router.patch(
  "/property/:objectId",
  propertyUpload,
  processImage,
  updateProperty
);
router.patch(
  "/property/images/:objectId",
  propertyUpload,
  processImage,
  updatePropertyImages
);
router.delete("/property/:objectId", deleteProperty);
router.get("/property/uniqueId/:uniqueId", getPropertyByUniqueId);
router.get("/property/:objectId", getPropertyById);
router.get("/property/slug/:property_slug", getPropertyBySlug);

//? Location Route
router.patch("/property/location/:property_id", UpdateLocation);
router.get("/property/location/:property_id", getLocation);
router.get("/locations", getAllLocations);
router.post("/location", addLocation);

//? Team Route
const teamProfile = upload.fields([{ name: "profile", maxCount: 1 }]);
router.get("/team", getTeam);
router.post("/team", teamProfile, processImage, addTeam);
router.patch("/team/:objectId", teamProfile, processImage, updateTeam);
router.delete("/team/:objectId", deleteTeam);
router.get("/team/:objectId", getTeamById);
router.get("/team/property/:propertyId", getTeamByPropertyId);

//? Hostel Route
const HostelUpload = upload.fields([{ name: "images", maxCount: 8 }]);
router.post("/hostel", AddHostel);
router.get("/hostel/:property_id", getHostelByPropertyId);
router.patch("/hostel/:uniqueId", EditHostel);
router.patch(
  "/hostel/images/:uniqueId",
  HostelUpload,
  processImage,
  AddHostelImages
);
router.post(`/hostel/images/remove/:uniqueId`, removeHostelImages);
router.delete(`/hostel/:objectId`, DeleteHostel);

//? Review Route
router.get("/review", getReview);
router.post("/review", addReview);
router.patch("/review/:uniqueId", updateReview);
router.delete("/review/:uniqueId", deleteReview);
router.get("/review/:uniqueId", getReviewById);
router.get("/review/property/:property_id", getReviewByPropertyId);

//? Gallery Route
const gallery = upload.fields([{ name: "gallery", maxCount: 8 }]);
const galleryUpdate = upload.fields([{ name: "newImages", maxCount: 8 }]);
router.get("/gallery", getGallery);
router.post("/gallery", gallery, processImage, addGallery);
router.patch("/gallery/:uniqueId", galleryUpdate, processImage, updateGallery);
router.delete("/gallery/:uniqueId", deleteGallery);
router.get("/gallery/:uniqueId", getGalleryById);
router.get("/property/gallery/:propertyId", getGalleryByPropertyId);
router.post(
  "/gallery/add/:uniqueId",
  gallery,
  processImage,
  addNewGalleryImages
);
router.post("/gallery/remove/:uniqueId", removeGalleryImages);
router.patch("/gallery/update/title", EditGalleryTitle);

//? Faqs Route
router.get("/faqs", getFaq);
router.post("/faqs", addFaq);
router.patch("/faqs/:uniqueId", updateFaq);
router.delete("/faqs/:uniqueId", deleteFaq);
router.get("/faqs/:uniqueId", getFaqById);
router.get("/property/faq/:propertyId", getFaqByPropertyId);

//? Seo Route
router.get("/seo", getSeo);
router.post("/seo", addSeo);
router.patch("/seo/:objectId", updateSeo);
router.delete("/seo/:objectId", deleteSeo);
router.get("/seo/:objectId", getSeoById);
router.get("/seo/property/:property_id", getSeoByPropertyId);

//? Business Hours
router.get("/business-hours", getBusinessHours);
router.get("/business-hours/:property_id", getBusinessHoursByPropertyId);
router.post("/business-hours", addBusinessHours);
router.patch("/business-hours/category", changePropertyCategory);
router.patch("/business-hours/:uniqueId", updateBusinessHours);

//? amenties
router.post("/amenities", addAmenities);
router.get("/amenities", getAmenities);
router.get("/property/amenities/:propertyId", getAmenitiesByPropertyId);
router.put("/amenities/:uniqueId", updateAmenities);

//? Coupons
router.post("/coupons", CreateCoupon);
router.get("/coupons/property/:property_id", getCouponByPropertyId);
router.delete("/coupon/:uniqueId", DeleteCoupon);
router.patch("/coupon/:uniqueId", UpdateCoupon);

//? Legal Routes
router.get("/legal", getLegal);
router.patch("/legal", addOrUpdateLegal);

//? Blog Routes
const blogUpload = blogUploadMulter.fields([
  { name: "featured_image", maxCount: 1 },
]);
router.get("/blog", getAllBlogs);
router.post("/blog", blogUpload, processImage, CreateBlog);
router.delete("/blog/:objectId", deleteBlog);
router.get("/blog/:objectId", getBlogById);
router.get("/blog/id/:uniqueId", getBlogByUniqueId);
router.patch("/blog/:objectId", blogUpload, processImage, UpdateBlog);

//? Blog Enquiry
router.post("/blog/create/enquiry", createBlogEnquiry);

//? Blog Seo Routes
router.post(`/blog/seo`, CreateBlogSeo);
router.get(`/blog/seo/:blog_id`, getSeoByBlogId);
router.delete(`/blog/seo/:objectId`, deleteBlogSeo);
router.patch(`/blog/seo/:objectId`, updateBlogSeo);

//? Blog Category Routes
router.get("/blog/category/all", getAllBlogCategories);
router.get("/blog/category/id/:objectId", getBlogCategoryById);
router.post("/blog/category", createBlogCategory);
router.patch("/blog/category/:objectId", updateBlogCategory);
router.delete("/blog/category/:objectId", deleteBlogCategory);

router.get("/blog/tag/all", getAllBlogTags);
router.get("/blog/tag/id/:objectId", getBlogTagById);
router.post("/blog/tag", CreateTagController);
router.delete("/blog/tag/:objectId", deleteblogTag);

//? Events Routes
const eventsUpload = eventUploadMulter.fields([
  { name: "featured_image", maxCount: 1 },
]);
router.post(`/events`, eventsUpload, processImage, CreateEvent);
router.get(`/events`, getAllEvents);
router.delete(`/event/:objectId`, deleteEvent);
router.get(`/event/:objectId`, getEventsbyId);
router.patch(`/event/:objectId`, eventsUpload, processImage, UpdateEvent);

//?Yoga Types Route
router.get(`/yoga-types`, getYogaType);

export default router;
