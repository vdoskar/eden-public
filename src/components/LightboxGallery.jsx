import React from "react"

import "../css/gallery.css";

function GalleryChild({ itemData }) {
    
    return (
        <div className="gallery-child">
            <h3 className="gallery-title">{itemData.name}</h3>
            <p className="gallery-description">{itemData.description}</p>
            <div className="gallery-img-holder">
                {itemData.gallery.map((img, index) => (
                    <div className="gallery-img" key={index}>
                        <a data-lightbox={itemData.name} href={img} data-title={itemData.name}>
                            <img src={itemData.thumbnails[index]} alt={itemData.name} loading="lazy" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Gallery({ data }) {

    return (
        <div className="gallery-holder">
            {
                data.map((item, index) => (
                    <GalleryChild key={index} itemData={item} />
                ))
            }
        </div>
    );
}

export default Gallery