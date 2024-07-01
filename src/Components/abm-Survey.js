import { LitElement, html, css } from "lit-element";

export class AbmSurvey extends LitElement {
  static styles = css`
    :host {
      display: flex;
      height: 900px;
      width: 900px;
    }

    h1{
    color: white;
    display: flex;
    justify-content: center;
    }

    .survey-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between; /* Alinea los elementos de manera uniforme en el espacio vertical */
      height: 100%;
      width: 100%;
      border: 3px solid blue;
      border-radius: 10%;
      background-color: var(--survey-background-color, #3d4c52);
      padding: 20px; /* Añadido para separar las preguntas */
    }

    .question-item {
      display: flex;
      flex-direction: column; /* Alinea los elementos verticalmente */
      align-items: flex-start; /* Alinea todos los elementos al inicio (a la izquierda) */
      margin-bottom: 20px; /* Espacio entre las preguntas */
    }

    .question-content {
      display: flex;
      align-items: center; /* Alinea el checkbox y el texto de la pregunta en la misma línea */
      gap: 10px; /* Espacio entre el checkbox y el texto de la pregunta */
    }

    .checkbox {
      font-size: 30px; /* Ajusta el tamaño de la fuente del checkbox */
      width: 20px; /* Ancho del checkbox */
      height: 20px; /* Alto del checkbox */
      margin-left: 10px; /* Espacio a la izquierda del checkbox */
    }

    .questionsParraf {
      font-size: 40px;
      margin: 0;
    }

    .descriptionParraf {
      font-size: 20px; /* Tamaño de fuente menor para la descripción */
      color: #ccc; /* Color gris claro para la descripción */
      margin-top: 5px; /* Espacio entre la pregunta y la descripción */
      margin-left: 30px; /* Espacio a la izquierda de la descripción para alinearla con el texto de la pregunta */
    }

    .footerSurvey {
      display: flex;
      justify-content: center;
      margin-top: auto; /* Empuja el pie de página hacia la parte inferior */
      padding-top: 20px; /* Espacio adicional arriba del pie de página */
      border-top: 1px solid black;
      border-radius: 10%;
    
      button {
        font-size: 40px;
        border-radius: 10%;
        margin: 10px;
      }
    }
  `;

  static get properties() {
    return {
      colorFrameBackground: { type: String }, // Frame background color
      questions: { type: Array }, // Array of questions for the survey
      checked: { type: Boolean }, // value of input check
      titleSurvey: { type: String },
      description: { type: String }
    };
  }

  constructor() {
    super();
    this.colorFrameBackground = "#3D4C52"; 
    this.questions = [];
    this.checked = false;
    this.titleSurvey = "Título de la encuesta";
    this.description = "";
  }

  toggleInput(id) {
    this.checked = !this.checked;
    console.log("El estado del checkbox ha cambiado", this.checked);
    console.log("El id del checkbox es", id);
  }

  render() {
    return html`
      <div class="survey-container">
        <h1>${this.titleSurvey}</h1>
        ${this.questions.map(
          (question) => html`
            <div class="question-item">
              <div class="question-content">
                <input
                  type="checkbox"
                  id="${question.id}"
                  name="scales"
                  class="checkbox"
                  @click="${() => this.toggleInput(question.id)}"
                />
                <p class="questionsParraf">${question.text}</p>
              </div>
              ${question.description ? html`<p class="descriptionParraf">${question.description}</p>` : ''}
            </div>
          `
        )}
        <div class="footerSurvey">
          <button>Anterior</button>
          <button>Siguiente</button>
        </div>
      </div>
    `;
  }
}

customElements.define("abm-survey", AbmSurvey);
