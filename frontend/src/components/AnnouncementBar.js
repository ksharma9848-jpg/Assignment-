import React from "react";

const AnnouncementBar = ({ text }) => (
  <div style={{marginTop: "16px"}} className="announcement-bar">
    🎉 {text}
  </div>
);

export default AnnouncementBar;
