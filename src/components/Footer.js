import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Navegacion } from './Nav';
import { Link } from 'gatsby';

const EnlaceHome = styled(Link)`
    color: #fff;
    text-align: center;
    text-decoration: none;
`;

export const Footer = ({ title }) => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer
                css={css`
                text-align: center;
                color: white;
                background-color: rgb(33, 44, 55);
                margin: 0;
                padding: 1rem;
            `}
            >
             {title}. Todos los derechos reservados ({year})

            </footer>
        </>
    )
}
