import '@/styles/gallery.css';

const Gallery = () => {
    const images = [
        "https://www.bing.com/th/id/OIP.Hl2BLji3d4QUkcz0fxiO0gHaEK?w=247&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        "https://www.bing.com/th/id/OIP.rJnAPB0IX9hx7pam9GGqugHaEK?w=248&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        "https://www.bing.com/th/id/OIP.RtLaLgpWax-V-a9cM2naYgHaEo?w=245&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    ];
    return (
        <section style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem" }}>
            {images.map((src, index) => (
                <img key={index} src={src} alt={'Imagen ${index + 1}'} style={{ width: "350px", heigth: "350px" }} />
            ))}
        </section>
    );
};

export default Gallery;