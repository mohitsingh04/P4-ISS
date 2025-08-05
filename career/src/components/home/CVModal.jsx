import React, { useCallback, useEffect, useState } from "react";
import { FileText, X, User, Mail, Phone, Edit } from "lucide-react";
import Swal from "sweetalert2";
import { handleApply } from "../../context/CallBacks";
import { API } from "../../context/API";

const CVModal = ({ setIsOpen, profile, job, getApplications }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [userResume, setUserResume] = useState("");

  const getResume = useCallback(async () => {
    if (profile) {
      try {
        const response = await API.get(`/profile/doc/resume/${profile?.uniqueId}`);
        setUserResume(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [profile]);

  useEffect(() => {
    getResume();
  }, [getResume]);

  const handleFile = (file) => {
    if (!file) return;

    if (file.type !== "application/pdf") {
      Swal.fire("Invalid File", "Only PDF files are allowed.", "error");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      Swal.fire("File Too Large", "File size should be under 5MB.", "error");
      return;
    }

    setSelectedFile(file);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setSelectedFile(null); // clear previous file if any
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm mb-0">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg mx-4 overflow-hidden">
        {/* Title Bar */}
        <div className="bg-purple-50 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <FileText className="w-6 h-6 text-purple-500 mr-3" />
            <h2 className="text-xl font-semibold text-purple-700">
              {job?.title}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <p className="mb-4 text-center text-purple-600 font-bold text-lg">
            {job?.property_name}
          </p>

          {/* User Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 bg-purple-50 p-4 rounded-lg text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-purple-600" />
              <span>
                <strong>Name:</strong> {profile?.name || "N/A"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-600" />
              <span>
                <strong>Email:</strong> {profile?.email || "N/A"}
              </span>
            </div>
            {profile?.mobile_no && (
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-600" />
                <span>
                  <strong>Contact:</strong> {profile?.mobile_no || "N/A"}
                </span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-purple-600" />
              <span>
                <strong>CV:</strong>{" "}
                {userResume?.resume && !isEditing ? "Uploaded" : "Not Uploaded"}
              </span>
              {userResume?.resume && !isEditing && (
                <button
                  className="text-purple-600"
                  onClick={handleEditClick}
                  title="Edit CV"
                >
                  <Edit className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Show file info if selected */}
          {selectedFile && (
            <div className="mt-2 text-sm text-gray-700 bg-purple-50 p-2 rounded-lg">
              <p>
                <strong>File:</strong> {selectedFile.name}
              </p>
            </div>
          )}

          {/* Upload CV if not uploaded or if editing */}
          {(!userResume?.resume || isEditing) && (
            <div className="flex justify-center mt-4">
              <label
                htmlFor="cv-upload"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg cursor-pointer hover:bg-purple-700 transition-colors"
              >
                <FileText className="w-5 h-5" />
                <span>{selectedFile ? "Change CV" : "Upload CV"}</span>
              </label>
              <input
                type="file"
                id="cv-upload"
                accept=".pdf"
                className="hidden"
                onChange={(e) => handleFile(e.target.files[0])}
              />
            </div>
          )}

          {(isEditing || !userResume?.resume) && (
            <p className="text-gray-700 mt-4 text-sm text-center">
              Upload your CV in <strong>PDF format</strong>. Max file size:{" "}
              <strong>5MB</strong>.
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="px-6 py-4 bg-purple-50 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 text-purple-700 hover:bg-purple-100 border-2 border-purple-700 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={async () => {
              handleApply(
                profile?.uniqueId,
                job,
                selectedFile,
                getApplications
              );
              setIsOpen(false);
            }}
            className={`px-4 py-2 rounded-lg transition-colors text-white ${
              selectedFile || userResume?.resume
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-purple-300 cursor-not-allowed"
            }`}
            disabled={!selectedFile && !userResume?.resume}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
