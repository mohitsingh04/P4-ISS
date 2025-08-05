import { API } from "./API";
import Swal from "sweetalert2";

export const stripHtmlAndLimit = (html, limit = 500000000) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const text = tempDiv.textContent || tempDiv.innerText || "";
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};

export const handleApply = async (userId, job, file, finallize) => {
  try {
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("hiringId", job?.uniqueId);
    formData.append("property_id", job?.property_id);

    if (file) {
      formData.append("resume", file);
    }
    const response = await API.post(`/apply/hiring`, formData);
    const docresponse = await API.post(`/profile/doc/resume`, formData);
    Swal.fire({
      title: "Applied",
      text: response.data.message,
      icon: "success",
    });
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "Error",
      text: error.response.data.error,
      icon: "error",
    });
  } finally {
    finallize();
  }
};
