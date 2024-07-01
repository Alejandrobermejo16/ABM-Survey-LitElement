import { LitElement, html, css } from "lit-element";
import './abm-Survey';

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
  `;

  constructor() {
    super();
    this.questions = [
      {
        text: "¿Quieres proponer tus propias preguntas y descripciones?",
        description: "Al usar el componente, utiliza la prop questions y pasale una array de objetos con prop text para la pregunta y description para la descripcion."
      },
      {
        text: "¿Quieres cambiar las preguntas que salen por pagina?",
        description: "pasale al componente pageSize = 1 o el numero de preguntas que quieres que se vean por pagina" 
      },
      {
        text: "¿Quieres cambiar el color de fondo del panel de pregutas?",
        description: "Pasale al componente colorFrameBackground y el color entre comillas puedes elegir tambien valores exadecimales."
      },
      {
        text: "¿Quieres ver ejemplos?",
        description: "A partir de la pagina 3."
      },
      {
        text: "¿Quieres cambiar el titulo?",
        description: "Pasale un string a la prop titleSurvey."
      },
      {
        text: "¿Tienes nuevas sugerencias?",
        description: "Envia un correo a abmprojects9@gmail.com y tendremos en cuenta tus peticiones para mostrar nuevos cambios."
      },
      {
        text: "¿Quieres incluir imagenes en tu pregunta?",
        description: "Pasa a tu array de preguntas la propiedad img, con la la ruta de la imagen que quieres que se vea y si quieres ponerle alt , pasale alt."
      },
      {
        text: "¿Quieres poner otro tipo de input?",
        description: "Pasa a tu array de preguntas la propiedad type seguido de select/radio/checkbox, y debajo la prop options que sera un array con  { value: yes, label: Yes }, ejemplos en la siguiente pagina"
      },
      {
        text: "¿Quieres poner otro tipo de input?",
        description: "Pasa a tu array de preguntas la propiedad type seguido de select/radio/checkbox, y debajo la prop options que sera un array con  { value: yes, label: Yes }, ejemplos en la siguiente pagina",
        type: "radio",
        options: [
          {value: "yes", label: "yes"},
          {value: "no", label: "no"}
        ]
      },
      {
        text: "¿Quieres poner otro Ejemplo?",
        description: "Pasa a tu array de preguntas la propiedad type seguido de select/radio/checkbox, y debajo la prop options que sera un array con  { value: yes, label: Yes }, ejemplos en la siguiente pagina",
        type: "select",
        options: [
          {value: "yes", label: "yes"},
          {value: "no", label: "no"}
        ]
      },
      {
        text: "¿Quieres poner otro Ejemplo?",
        description: "Pasa a tu array de preguntas la propiedad type seguido de select/radio/checkbox, y debajo la prop options que sera un array con  { value: yes, label: Yes }, ejemplos en la siguiente pagina",
        type: "checkbox",
        options: [
          {value: "yes", label: "yes"},
          {value: "no", label: "no"}
        ]
      },
      {
        text: "¿Quieres poner un solo elemento en la pagina que estas",
        description: "Pasa a tu array de preguntas la propiedad unique: true, con el numero de elementos que quieres que aparezcan en esa pagina concreta , por defecto una",
        unique: true,
      },
      {
        text: "¿Quieres poner otro Ejemplo?",
        description: "Pasa a tu array de preguntas la propiedad type seguido de select/radio/checkbox, y debajo la prop options que sera un array con  { value: yes, label: Yes }, ejemplos en la siguiente pagina",
        type: "checkbox",
        options: [
          {value: "yes", label: "yes"},
          {value: "no", label: "no"}
        ]
      },
      {
        text: "¿Quieres poner otro Ejemplo?",
        description: "Pasa a tu array de preguntas la propiedad type seguido de select/radio/checkbox, y debajo la prop options que sera un array con  { value: yes, label: Yes }, ejemplos en la siguiente pagina",
        type: "checkbox",
        options: [
          {value: "yes", label: "yes"},
          {value: "no", label: "no"}
        ]
      },
    ].map((question, index) => ({
      id: index + 1,
      ...question
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
