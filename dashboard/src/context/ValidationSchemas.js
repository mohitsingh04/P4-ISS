import * as Yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const name = Yup.string()
  .trim()
  .min(3, "Name must be at least 3 characters")
  .matches(/^\S.*\S$/, "Name cannot start or end with a space")
  .required("Name is required");

const email = Yup.string().email("Invalid email").required("Email is required");

const mobile_no = Yup.string()
  .test("valid-phone", "Invalid phone number", (value) => {
    if (!value) return false;
    const phoneNumber = parsePhoneNumberFromString(`+${value}`);
    return phoneNumber && phoneNumber.isValid();
  })
  .required("Phone number is required");

const password = Yup.string()
  .min(6, "Password must be at least 6 characters")
  .matches(/^\S*$/, "Password cannot contain spaces")
  .required("Password is required");

const confirmPassword = (field = "password") =>
  Yup.string()
    .oneOf([Yup.ref(field), null], "Passwords must match")
    .required("Confirm Password is required");

const role = Yup.string().required("Role is required");

const status = Yup.string().required("Status is required");

const address = Yup.string().required("Address is required");
const pincode = Yup.string().required("Pincode is required");
const state = Yup.string().required("State is required");
const country = Yup.string().required("Country is required");
const city = Yup.string().required("City is required");

export const RegisterValidation = Yup.object({
  name,
  email,
  mobile_no,
  password,
  confirm_password: confirmPassword(),
});

export const LoginValidation = Yup.object({ email, password });

export const EmailValidation = Yup.object({ email });

export const ResetPasswordValidation = Yup.object({
  new_password: password,
  confirm_password: confirmPassword("new_password"),
});

export const EditProfileValidation = Yup.object({
  name,
  email,
  mobile_no,
  address,
  pincode,
  state,
  city,
  country,
});

export const ChangePasswordValidation = Yup.object({
  current_password: Yup.string().required("Current password is required"),
  new_password: password,
  confirm_password: confirmPassword("new_password"),
});

export const EditUserValidation = Yup.object({
  name,
  email,
  mobile_no: Yup.string(),
  role,
  status,
});

export const CreateUserValidation = Yup.object({
  name,
  email,
  mobile_no,
  role,
});

export const CreateStatusValidation = Yup.object({
  status_name: Yup.string().required("Status Name is required"),
  parent_status: Yup.string().required("Parent Status is required"),
  description: Yup.string().max(
    200,
    "Description cannot exceed 200 characters"
  ),
});

const parent_status = Yup.string().required("Please select a parent category");
export const EditCategoryValidation = Yup.object().shape({
  category_name: name,
  parent_category: parent_status,
  status,
});
export const CreateCategoryValidation = Yup.object().shape({
  category_name: name,
  parent_category: parent_status,
});

export const CreatePropertyValidation = Yup.object({
  property_name: name,
  property_email: email,
  property_mobile_no: mobile_no,
  category: Yup.string().required("Category is required"),
  property_type: Yup.string().required("Property type is required"),
});

export const faqValidation = Yup.object({
  question: Yup.string().required("Question is required"),
  answer: Yup.string().required("Answer is required"),
});

export const reviewValidation = Yup.object({
  name,
  email: Yup.string().email("Invalid email"),
  phone_number: Yup.string(),
  review: Yup.string()
    .max(1500, "Review must be 1500 characters or less")
    .required("Review is required"),
  rating: Yup.number()
    .min(1, "Rating is required")
    .required("Rating is required"),
});

export const seoValidation = Yup.object({
  title: Yup.string().required("Title is required"),
  slug: Yup.string().required("Slug is required"),
  meta_description: Yup.string().required("Meta description is required"),
  primary_focus_keyword: Yup.array()
    .min(1, "Select at least one keyword")
    .max(2, "Maximum 2 keywords allowed")
    .required("Primary focus keyword is required"),
});
// import * as Yup from "yup";

export const teacherValidation = Yup.object({
  teacher_name: name,
  designation: Yup.string().required("Designation is required"),

  experience_value: Yup.number()
    .typeError("Must be a number")
    .nullable()
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? null : value
    )
    .moreThan(0, "Experience must be greater than 0"),

  experience_type: Yup.string()
    .oneOf(["months", "years"], "Invalid experience type")
    .when("experience_value", {
      is: (val) => val !== null && val !== undefined && val !== "",
      then: (schema) => schema.required("Experience type is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
});

export const stateValidation = Yup.object({ property_state: state });

export const cityValidation = Yup.object({ property_city: city });

export const countryValidation = Yup.object({ property_country: country });

export const addressValidation = Yup.object({ property_address: address });
export const pincodeValidation = Yup.object({ property_pincode: pincode });
export const hostelValidation = Yup.object({ hostel_name: name });

const today = new Date();
today.setHours(0, 0, 0, 0);

export const couponValidation = Yup.object({
  coupon_code: Yup.string()
    .required("Required")
    .matches(/^[A-Z0-9]+$/, "Must be uppercase letters and numbers only"),
  start_from: Yup.date()
    .required("Required")
    .min(today, "Start date must be today or in the future"),
  valid_upto: Yup.date()
    .required("Required")
    .min(Yup.ref("start_from"), "Must be after start date"),
  discount: Yup.number()
    .required("Required")
    .min(1, "Minimum 1%")
    .max(100, "Maximum 100%"),
});

export const locationValidation = Yup.object().shape({
  property_address: Yup.string().required("Address is required"),
  property_pincode: Yup.string().required("Pincode is required"),

  property_country: Yup.string().required("Country is required"),
  country_name: Yup.string().when("property_country", {
    is: (val) => val === "Other",
    then: (schema) => schema.required("Country name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  property_state: Yup.string().required("State is required"),
  state_name: Yup.string().when("property_state", {
    is: (val) => val === "Other",
    then: (schema) => schema.required("State name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  property_city: Yup.string().required("City is required"),
  city_name: Yup.string().when("property_city", {
    is: (val) => val === "Other",
    then: (schema) => schema.required("City name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
});

export const BlogCategoryValidation = Yup.object({
  blog_category: Yup.string()
    .required("Blog Category is required")
    .min(3, "Must be at least 3 characters"),
  parent_category: Yup.string().required("Parent Category is required"),
});

export const ExamValidation = Yup.object({
  exam_name: name,
  exam_short_name: Yup.string(),
  upcoming_exam_date: Yup.date(),
  result_date: Yup.date(),
  application_form_date: Yup.date(),
  application_form_link: Yup.string().url("Invalid URL"),
  exam_form_link: Yup.string().url("Invalid URL"),
  exam_mode: Yup.string(),
  description: Yup.string(),
});
