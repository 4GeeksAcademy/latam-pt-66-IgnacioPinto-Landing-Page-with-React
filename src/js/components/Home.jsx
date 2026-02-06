import React from 'react';

// Importación de componentes hijos - Ignacio Pinto
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';

// Componente principal Home - Ignacio Pinto
const Home = () => {
    
    // Datos para las tarjetas (Simulación de una API o DB)
    const cardsData = [
        {
            title: "Paisaje Natural",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
            imageUrl: "https://picsum.photos/500/327?random=1"
        },
        {
            title: "Ciudad",
            description: "Explicabo magni quisens lorem ipsum dolor sit amet consectetur adipisicing elit.",
            imageUrl: "https://picsum.photos/500/325?random=2"
        },
        {
            title: "Lago",
            description: "Sapiente esse necessitatibus neque. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            imageUrl: "https://picsum.photos/500/322?random=3"
        },
        {
            title: "Bahia",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni quisens.",
            imageUrl: "https://picsum.photos/500/326?random=4"
        }
    ];

    return (
        <>
            {/* 1. Navbar pegado arriba */}
            <Navbar />

            {/* Contenedor principal para centrar el contenido */}
            <div className="container">
                
                {/* 2. Jumbotron (Sección de bienvenida) */}
                <div className="row my-4">
                    <div className="col-12">
                         <Jumbotron />
                    </div>
                </div>

                {/* 3. Sección de Tarjetas (Grid System) */}
                <div className="row text-center">
                    {/* Iteramos sobre el array cardsData para generar las 4 tarjetas */}
                    {cardsData.map((data, index) => (
                        <Card 
                            key={index} 
                            title={data.title} 
                            description={data.description} 
                            imageUrl={data.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;