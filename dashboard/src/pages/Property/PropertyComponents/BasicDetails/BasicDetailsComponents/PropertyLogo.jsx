import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ALLImages from "../../../../../common/Imagesdata";
import { API } from "../../../../../context/API";
import Swal from "sweetalert2";
import { Cropper, CropperPreview } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";

export default function PropertyLogo({ property }) {
  const { objectId } = useParams();
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [cropper, setCropper] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setFile(selectedFile);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleCancel = () => {
    setImage(null);
    setFile(null);
  };

  const handleConfirm = async () => {
    if (!cropper || !objectId) return;

    const canvas = cropper.getCanvas();
    if (!canvas) return;

    canvas.toBlob(async (blob) => {
      const formData = new FormData();
      formData.append("property_logo", blob, file.name);

      try {
        setUploading(true);
        const response = await API.patch(
          `/property/images/${objectId}`,
          formData
        );

        Swal.fire({
          icon: "success",
          title: "Logo Updated",
          text:
            response.data.message ||
            "Your property logo has been successfully updated.",
          timer: 2000,
          showConfirmButton: false,
        });

        window.location.reload();
      } catch (err) {
        console.error("Upload failed", err);
        Swal.fire({
          icon: "error",
          title: "Upload Failed",
          text:
            err.response?.data?.error ||
            "Something went wrong while uploading the image.",
        });
      } finally {
        setUploading(false);
        setImage(null);
        setFile(null);
      }
    }, "image/jpeg");
  };

  const getImageSrc = () => {
    if (image) return image;
    if (property?.property_logo?.[0])
      return `${import.meta.env.VITE_MEDIA_URL}/${property.property_logo[0]}`;
    return ALLImages("face8");
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center">
      {!image ? (
        <img
          src={getImageSrc()}
          alt="Property Logo"
          width="150"
          className="rounded-circle mb-3 profile-ratio shadow-sm"
        />
      ) : (
        <div
          className="cropper-container mb-3"
          style={{ width: "250px", height: "250px" }}
        >
          <Cropper
            src={image}
            className="cropper rounded"
            stencilProps={{
              aspectRatio: 1,
              circular: true,
            }}
            onChange={(cropper) => setCropper(cropper)}
          />
        </div>
      )}

      <div className="d-flex align-items-center justify-content-center gap-2">
        <h5 className="mb-0">Property Logo</h5>

        {!image && (
          <label
            className="btn btn-outline-light btn-sm mb-0"
            htmlFor="logoUpload"
          >
            <i className="bi bi-pencil-fill"></i>
          </label>
        )}
        <input
          id="logoUpload"
          type="file"
          accept="image/jpeg, image/png"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        {image && (
          <>
            <button
              className="btn btn-success btn-sm"
              onClick={handleConfirm}
              disabled={uploading}
            >
              {uploading ? (
                "Uploading..."
              ) : (
                <div>
                  <i className="fe fw-bold fe-check "></i> Upload
                </div>
              )}
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={handleCancel}
              disabled={uploading}
            >
              <i className="bi bi-x-circle-fill fw-bold"></i> Close
            </button>
          </>
        )}
      </div>

      <small className="text-muted">Your Property logo preview</small>
    </div>
  );
}
