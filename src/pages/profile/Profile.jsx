import React, { useState, useEffect } from "react";
import "./profile.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";

const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const storedDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (storedDetails) {
      setName(storedDetails.name);
      setEmail(storedDetails.email);
      setPhone(storedDetails.phone);
      setAddress(storedDetails.address);
      setCountry(storedDetails.country);
      setProfileImage(storedDetails.profileImage);
    }
  }, []);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = { name, email, phone, address, country, profileImage };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    setIsEditable(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile">
      <Sidebar />
      <div className="profilecontainer">
        <Navbar />
        <div className="left">
          <h1 className="title">Information</h1>
          <form onSubmit={handleSubmit}>
            <div className="item">
              <img
                src={profileImage || "https://files.shapes.inc/5cae577a.png"}
                alt=""
                className="itemimg"
              />
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Name:</span>
                  {isEditable ? (
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  ) : (
                    <span className="itemValue">{name}</span>
                  )}
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  {isEditable ? (
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  ) : (
                    <span className="itemValue">{email}</span>
                  )}
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  {isEditable ? (
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  ) : (
                    <span className="itemValue">{phone}</span>
                  )}
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  {isEditable ? (
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  ) : (
                    <span className="itemValue">{address}</span>
                  )}
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  {isEditable ? (
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  ) : (
                    <span className="itemValue">{country}</span>
                  )}
                </div>
                {isEditable ? (
                  <button type="submit">Save</button>
                ) : (
                  <div className="editButton" onClick={handleEdit}>
                    EDIT
                  </div>
                )}
              </div>
            </div>
          </form>
          {isEditable && (
            <div className="detailItem">
              <span className="itemKey">Change Profile Picture:</span>
              <input type="file" onChange={handleImageChange} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
