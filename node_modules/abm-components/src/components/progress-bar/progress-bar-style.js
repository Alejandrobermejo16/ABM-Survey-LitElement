import { css } from 'lit';

export const styles = css`
  .contenedor-padre {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    padding: 20px; /* Espaciado alrededor para dispositivos móviles */
    box-sizing: border-box; /* Incluye el padding en el ancho y alto total */
  }

  .barra-progreso {
    width: 100%; /* Usar el 100% del ancho del contenedor */
    max-width: 600px; /* Máximo ancho para pantallas grandes */
    height: 20px; /* Altura de la barra de progreso */
    border-radius: 10px; /* Esquinas redondeadas */
    background-color: #e0e0e0; /* Color de fondo de la barra */
    position: relative; /* Asegura que el contenido interno se posicione correctamente */
    overflow: hidden; /* Esconde el contenido que sobresalga */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Sombra para dar un efecto elevado */
  }

  .barra-relleno {
    height: 100%; /* Llenar la altura completa de la barra */
    background-color: blue; /* Color de la barra de progreso */
    transition: width 0.3s ease; /* Transición suave al cambiar el ancho */
  }

  .parrafo-barra-progreso { 
    color: white; 
    position: absolute; /* Para posicionar el texto dentro de la barra */
    left: 50%; /* Centrar horizontalmente */
    top: 50%; /* Centrar verticalmente */
    transform: translate(-50%, -50%); /* Alineación perfecta */
    margin: 0; /* Eliminar márgenes predeterminados */
    font-weight: bold; /* Texto en negrita para mayor visibilidad */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  }
`;
