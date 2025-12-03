const Paginador = ({ totalPaginas, paginaActual, cambiarPagina }) => {
    return (
        <nav aria-label="Paginador de servicios">
            <ul className="pagination justify-content-center my-4">
                <li className={`page-item ${paginaActual === 1 ? "disabled" : ""}`}>
                    <button
                        className="page-link"
                        onClick={() => cambiarPagina(paginaActual - 1)}
                        disabled={paginaActual === 1}
                    >
                        Anterior
                    </button>
                </li>

                {Array.from({ length: totalPaginas }, (_, indice) => (
                    <li
                        key={indice + 1}
                        className={`page-item ${paginaActual === indice + 1 ? "active" : ""
                            }`}
                    >
                        <button
                            className="page-link"
                            onClick={() => cambiarPagina(indice + 1)}
                        >
                            {indice + 1}
                        </button>
                    </li>
                ))}

                <li
                    className={`page-item ${paginaActual === totalPaginas ? "disabled" : ""
                        }`}
                >
                    <button
                        className="page-link"
                        onClick={() => cambiarPagina(paginaActual + 1)}
                        disabled={paginaActual === totalPaginas}
                    >
                        Siguiente
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Paginador;