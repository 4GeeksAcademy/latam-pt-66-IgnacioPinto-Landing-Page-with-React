import React from 'react';

// Componente Card reutilizable creado por mí, Ignacio Pinto
// Recibe props para título, texto e imagen para mantener el código DRY
const Card = (props) => {
    return (
        // Usamos col-lg-3 para 4 columnas en escritorio y col-md-6 para tablets
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
                {/* Imagen dinámica recibida por props */}
                <img className="card-img-top" src={props.imageUrl} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    );
};

export default Card;