import React from "react";

export default function PostPage({ placeData }) {

  if (!placeData) {
    return <div>Place not found</div>;
  }
  return (
    <>
      <div className="page-heading-section">
        <span className="page-heading text-2xl font-bold mb-4">
          {placeData.name}
        </span>
      </div>
      <div className="postpage mx-auto max-w-3xl">
        <div className="mt-4">
          <img
            className="w-full"
            src={placeData.image_url}
            alt={placeData.name}
          />
        </div>
        <div className="mt-4 mb-4">
          <div className="prose">{placeData.content}</div>
        </div>
        <div className="mt-4">
          <iframe
            title={placeData.name}
            src={placeData.embed_map_url}
            className="w-full h-96"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}
