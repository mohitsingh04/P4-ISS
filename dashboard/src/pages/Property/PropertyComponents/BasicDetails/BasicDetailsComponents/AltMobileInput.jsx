import React from "react";
import { Button, Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { API } from "../../../../../context/API";
import { useParams } from "react-router-dom";

const AltMobileInput = ({ value, onUpdated }) => {
  const { objectId } = useParams();
  const [isEditing, setIsEditing] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      property_alt_mobile_no: value || "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const response = await API.patch(`/property/${objectId}`, values);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message || "Updated successfully",
        }).then(() => {
          setIsEditing(false);
          onUpdated();
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error?.response?.data?.error || "Update failed",
        });
      }
    },
  });

  return (
    <Form.Group>
      <Form.Label className="fw-bold">Alt Contact</Form.Label>
      <div className="input-group">
        {isEditing ? (
          <Form onSubmit={formik.handleSubmit}>
            <div className="d-flex w-100">
              <PhoneInput
                country="in"
                value={formik.values.property_alt_mobile_no}
                onChange={(mobile) =>
                  formik.setFieldValue("property_alt_mobile_no", mobile)
                }
                inputClass="input100 w-100 border rounded-end-0"
                inputStyle={{ height: "45px" }}
                buttonClass="bg-white border"
              />
              <Button
                className="rounded-start-0"
                variant="success"
                onClick={formik.handleSubmit}
              >
                <i className="fe fe-check-circle"></i>
              </Button>
            </div>
          </Form>
        ) : (
          <div className="d-flex w-100">
            <PhoneInput
              country={"in"}
              value={value || ""}
              disabled
              inputClass="w-100 bg-light border rounded-end-0"
              buttonClass="bg-light border"
            />
            <Button
              onClick={() => setIsEditing(true)}
              className="rounded-start-0"
            >
              <i className="fe fe-edit"></i>
            </Button>
          </div>
        )}
      </div>
    </Form.Group>
  );
};

export default AltMobileInput;
