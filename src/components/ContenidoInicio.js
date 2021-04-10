import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const ContenidoInicio = () => {

    const informacion = useStaticQuery(graphql`
        query {
            allDatoCmsPagina(filter: {slug: {eq: "inicio"}}) {
                nodes {
                    titulo
                    contenido
                    imagen {
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);

    console.log(informacion);

    return (
        <>

            <h2>Titulo</h2>
            
        </>
    )
}


