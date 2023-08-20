import React from 'react';

function Heading({ text, img }) {
    const imgHolderStyles = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
        height: "350px",
        display:"flex",
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center",
        position:"relative",
    };

    const titleStyles = {
        position:"absolute",
        color: "var(--c-white)",
        fontSize:"clamp(1rem,1.5rem,2rem)",
        fontWeight:"400 !important",
        textAlign: "center",
    }

    return (
        <div className="main-heading">
            <div className="img-holder" style={ imgHolderStyles }>
                <div className='title-holder' style={titleStyles}>
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    )
}

export default Heading