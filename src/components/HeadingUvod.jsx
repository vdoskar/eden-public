import React, { useEffect } from 'react';

function HeadingUvod({ text, videos }) {
    const imgHolderStyles = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
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
        padding: "0.75rem",
        backgroundColor: "rgba(0, 0, 0, 0.45)"
    }

    const videoStyles = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
    }

    useEffect(() => {
        document.getElementById('uvod-vid').play();
    }, []);

    return (
        <div className="main-heading">
            <div className="img-holder uvod-vid-holder" style={ imgHolderStyles }>
                <video autoPlay loop muted preload="true" style={videoStyles} id="uvod-vid">
                    <source src={videos[0]} type="video/webm"/>
                    <source src={videos[1]} type="video/mp4"/>
                    Tento prohlížeč nepodporuje přehrávání videa
                </video>
                <div className='title-holder' style={titleStyles}>
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    )
}

export default HeadingUvod