import { useSearch } from "@context/BusquedaContext";
import { useServiciosContext } from "@context/ServiciosContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Busqueda = () => {
    // usamos los contextos de busqueda y servicios.
    const { busqueda } = useSearch();
    const { servicios } = useServiciosContext();

    const serviciosFiltrados = servicios.filter((servicio) =>
        servicio.title.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <>
            {/* SEO con Helmet */}
            <Helmet>
                <title>Resultados de búsqueda - LabAuto</title>
                <meta
                    name="description"
                    content={`Explora los servicios que coinciden con tu búsqueda "${busqueda || "servicios"
                        }" en el Laboratorio de Automotores.`}
                />
            </Helmet>

            <div className="container py-5">
                <h2 className="mb-4 text-center">
                    Servicios:
                </h2>
                <div className="row">
                    {serviciosFiltrados.length > 0 ? (
                        <>
                            {serviciosFiltrados.map((servicio) => (
                                <div key={servicio.id} className="col-12 col-sm-6 col-lg-3 mb-4">
                                    <div className="card h-100 shadow-sm">
                                        <img
                                            alt={servicio.title}
                                            src={servicio.image}
                                            className="card-img-top"
                                            style={{ objectFit: "cover", height: "200px" }}
                                        />
                                        <div className="card-body d-flex flex-column justify-content-between">
                                            <h3 className="card-title">
                                                <Link to={`/servicios/${servicio.id}`} className="stretched-link text-decoration-none">
                                                    {servicio.title}
                                                </Link>
                                            </h3>
                                            <p className="card-text fw-bold text-primary">
                                                ${servicio.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <p className="text-center text-muted">No hay servicios que coincidan con la búsqueda realizada.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Busqueda;