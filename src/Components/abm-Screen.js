import { LitElement, html, css } from "lit-element";
import imagen from "../img/muestra.png";

export class AbmScreen extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .clase-marco {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; /* Ajustar la altura al 100% del viewport */
    }
    .imagen-pregunta {
      width: 100px; /* Ajustar el tamaño de la imagen si es necesario */
      height: auto; /* Mantener la relación de aspecto de la imagen */
    }
  `;

  constructor() {
    super();
    this.questions = [
      {
        text: "¿Quieres proponer tus propias preguntas y descripciones?",
        description:
          "Al usar el componente, utiliza la prop questions y pasale una array de objetos con prop text para la pregunta y description para la descripcion.",
      },
      {
        text: "¿Quieres cambiar las preguntas que salen por pagina?",
        description:
          "Pasale al componente pageSize = 1 o el numero de preguntas que quieres que se vean por pagina.",
      },
      {
        text: "¿Quieres cambiar el color de fondo del panel de preguntas?",
        description:
          "Pasale al componente colorFrameBackground y el color entre comillas puedes elegir tambien valores exadecimales.",
      },
      {
        text: "¿Quieres ver ejemplos?",
        description: "A partir de la pagina 3.",
      },
      {
        text: "¿Quieres cambiar el titulo?",
        description: "Pasale un string a la prop titleSurvey.",
      },
      {
        text: "¿Tienes nuevas sugerencias?",
        description:
          "Envía un correo a abmprojects9@gmail.com y tendremos en cuenta tus peticiones para mostrar nuevos cambios.",
      },
      {
        text: "¿Quieres incluir imágenes en tu pregunta?",
        description:
          "Pasa a tu array de preguntas la propiedad img, con la ruta de la imagen que quieres que se vea y si quieres ponerle alt , pasale alt.",
      },
      {
        text: "¿Quieres poner otro tipo de input?",
        description:
          "Pasa a tu array de preguntas la propiedad type seguido de select/radio/checkbox, y debajo la prop options que sera un array con { value: yes, label: Yes }, ejemplos en la siguiente pagina.",
      },
      {
        text: "¿Quieres poner otro tipo de input?",
        description:
          "Pasa a tu array de preguntas la propiedad type seguido de select/radio/checkbox, y debajo la prop options que sera un array con { value: yes, label: Yes }, ejemplos en la siguiente pagina.",
        type: "radio",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        text: "¿Quieres poner otro Ejemplo?",
        description:
          "Pasa a tu array de preguntas la propiedad type seguido de select/radio/checkbox, y debajo la prop options que sera un array con { value: yes, label: Yes }, ejemplos en la siguiente pagina.",
        type: "select",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        text: "¿Quieres poner otro Ejemplo?",
        description:
          "Pasa a tu array de preguntas la propiedad type seguido de select/radio/checkbox, y debajo la prop options que sera un array con { value: yes, label: Yes }, ejemplos en la siguiente pagina.",
        type: "checkbox",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        text: "props por defecto",
        description: `  this.colorFrameBackground = "#3D4C52";
        this.questions = [];
        this.checked = false;
        this.titleSurvey = "Título de la encuesta";
        this.description = "";
        this.page = 0; //start page
        this.pageSize = 4; //number of questions per page`,
      },
      {
        text: "¿Quieres poner un solo elemento en la pagina que estás?",
        description:
          "Pasa a tu array de preguntas la prop unique en true, y luego , debajo, si tu pageSize es de 3 por ejemplo, debes pasarle dos objetos vacios y ya despues podras pasar la siguiente pregunta normal",
        unique: true,
        img: imagen,
      },
      {},
      {},
      {
        text: "¿GMAIL?",
        description:
          "Pasa a tu array de preguntas la propiedad type seguido de select/radio/checkbox, y debajo la prop options que sera un array con { value: yes, label: Yes }, ejemplos en la siguiente pagina.",
        type: "checkbox",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
    ].map((question, index) => ({
      id: index + 1,
      ...question,
    }));
  }

  render() {
    return html`
      <div class="clase-marco">
        <abm-survey .questions="${this.questions}"></abm-survey>
      </div>
    `;
  }
}

customElements.define("abm-screen", AbmScreen);
