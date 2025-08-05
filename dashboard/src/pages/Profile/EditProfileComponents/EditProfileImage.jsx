import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";
import ALLImages from "../../../common/Imagesdata";
import { useParams } from "react-router-dom";
import { API } from "../../../context/API";
import Swal from "sweetalert2";
import EditProfileImageSkeleton from "../../../components/Skeletons/EditProfileImageSkeleton";

export default function EditProfileImage({ authUser, authLoading }) {
  const { objectId } = useParams();
  const [previewImage, setPreviewImage] = useState("");

  const formik = useFormik({
    initialValues: {
      profile: null,
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("profile", values.profile);

      try {
        const response = await API.patch(`/user/${objectId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message || "Profile updated successfully!",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response?.data?.message || "Error updating profile!",
        });
      }
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue("profile", file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await API.delete(`/user/profile/${objectId}`);
        setPreviewImage("");

        Swal.fire({
          icon: "success",
          title: "Deleted",
          text: response.data.message || "Profile deleted successfully!",
        }).then(() => {
          window.location.reload();
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response?.data?.error || "Error deleting profile!",
        });
      }
    }
  };

  return (
    <div>
      {!authLoading ? (
        <Card>
          <Card.Body>
            <Row>
              <Col className="d-flex align-items-center justify-content-between">
                <div>
                  <img
                    alt="User Avatar"
                    className="rounded-circle avatar-lg avatar me-2 profile-ratio"
                    src={
                      previewImage
                        ? previewImage
                        : authUser?.profile?.[0]
                        ? authUser?.isGoogleLogin
                          ? authUser?.profile?.[0]
                          : `${import.meta.env.VITE_MEDIA_URL}/user/${
                              authUser?.profile?.[0]
                            }`
                        : ALLImages("face8")
                    }
                  />
                  <strong>Profile</strong>
                </div>

                <form
                  onSubmit={formik.handleSubmit}
                  className="d-flex align-items-center"
                >
                  <label htmlFor="profile" className="btn btn-primary me-2">
                    <i className="fe fe-camera me-1"></i>Select Profile
                  </label>
                  <input
                    type="file"
                    id="profile"
                    name="profile"
                    accept=".jpg,.png"
                    className="d-none"
                    onChange={handleImageChange}
                  />

                  <button type="submit" className="btn btn-success me-2">
                    <i className="fe fe-user-check me-1"></i>Update
                  </button>

                  {authUser?.profile?.lenght > 0 && (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleDelete}
                    >
                      <i className="fe fe-trash-2 me-1"></i>Delete
                    </button>
                  )}
                </form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ) : (
        <EditProfileImageSkeleton />
      )}
    </div>
  );
}
