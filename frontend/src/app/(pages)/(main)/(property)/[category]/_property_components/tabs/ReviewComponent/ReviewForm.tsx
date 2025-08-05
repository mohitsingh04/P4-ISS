import React, { useState } from "react";
import { LuSend, LuStar } from "react-icons/lu";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import API from "@/contexts/API";
import { PropertyProps } from "@/types/types";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { ReviewValidation } from "@/contexts/ValidationSchema";

const ReviewForm = ({
  property,
  onSubmit,
}: {
  property: PropertyProps;
  onSubmit: () => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState(0);

  const formik = useFormik({
    initialValues: {
      property_id: property?.uniqueId || "",
      name: "",
      email: "",
      phone: "",
      review: "",
    },
    enableReinitialize: true,
    validationSchema: ReviewValidation,
    onSubmit: async (values, { resetForm }) => {
      if (rating === 0) {
        toast.error("Please select at least 1 star rating.");
        return;
      }
      setIsSubmitting(true);

      const payload = {
        ...values,
        rating,
      };

      try {
        const response = await API.post(`/review`, payload);
        toast.success(response?.data?.message);
      } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        toast.error(err.response?.data?.message || "Something went wrong.");
      } finally {
        setIsSubmitting(false);
        resetForm();
        setRating(0);
        onSubmit();
      }
    },
  });

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <LuStar
        key={i}
        className={`w-6 h-6 cursor-pointer transition-colors ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300 hover:text-yellow-400"
        }`}
        onClick={() => setRating(i + 1)}
      />
    ));
  };

  return (
    <div className="bg-white rounded-2xl mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Share Your Experience
      </h3>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Enter your name"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full px-4 py-3 h-12 border rounded-xl focus:ring-2 focus:ring-purple-500 ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <PhoneInput
              country={"in"}
              enableSearch
              value={formik.values.phone}
              onChange={(phone) => formik.setFieldValue("phone", phone)}
              onBlur={formik.handleBlur}
              inputStyle={{
                width: "100%",
                paddingTop: "24px",
                paddingBottom: "24px",
                paddingLeft: "48px",
                borderRadius: "0.75rem",
                borderColor:
                  formik.touched.phone && formik.errors.phone
                    ? "red"
                    : "#d1d5db",
                fontSize: "1rem",
              }}
              buttonStyle={{
                borderColor:
                  formik.touched.phone && formik.errors.phone
                    ? "red"
                    : "#d1d5db",
                backgroundColor: "white",
                paddingTop: "12px",
                paddingBottom: "12px",
                borderTopLeftRadius: "0.75rem",
                borderBottomLeftRadius: "0.75rem",
              }}
              containerStyle={{ width: "100%" }}
            />

            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Rating *
            </label>
            <div className="flex items-center gap-1">{renderStars()}</div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Review *
          </label>
          <textarea
            name="review"
            rows={5}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.review}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 ${
              formik.touched.review && formik.errors.review
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="Share your detailed experience..."
          />
          {formik.touched.review && formik.errors.review && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.review}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting Review...
            </>
          ) : (
            <>
              <LuSend className="w-5 h-5" />
              Submit Review
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
