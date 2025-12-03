import { useSearch } from "@context/BusquedaContext";
import { useServiciosContext } from "@context/ServiciosContext";
import { Link } from "react-router-dom";

const Busqueda = () => {
    // usamos los contextos de busqueda y servicios.
    const { busqueda } = useSearch();
    const { servicios } = useServiciosContext();

    const serviciosFiltrados = servicios.filter((servicio) =>
        servicio.title.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Servicios:
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {serviciosFiltrados.length > 0 ? (
                    <>
                        {serviciosFiltrados.map((servicio) => (
                            <div key={servicio.id} className="group relative">
                                <img
                                    alt={servicio.title}
                                    src={servicio.image}
                                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                />
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <Link to={`/servicios/${servicio.id}`}>
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute inset-0"
                                                />
                                                {servicio.title}
                                            </Link>
                                        </h3>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">
                                        ${servicio.precio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <p>No hay servicios que coincidan con la búsqueda realizada.</p>
                )}
            </div>
        </div>
    );
};

export default Busqueda;