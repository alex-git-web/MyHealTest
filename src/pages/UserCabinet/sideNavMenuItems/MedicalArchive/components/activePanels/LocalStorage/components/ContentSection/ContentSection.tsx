import React, { useState } from "react";

type PropsType = {};

export default function ContentSection(props: PropsType) {
  const {} = props;

  return (
    <div className="content-section__container content-section local_storage">
      <div className="content-section__image-container">
        <img src={"local_storage_panel_image.png"} alt="Image" />
      </div>
    </div>
  );
}
