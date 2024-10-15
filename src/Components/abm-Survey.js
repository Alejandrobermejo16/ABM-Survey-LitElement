import { LitElement, html, css } from "lit-element";

export class AbmSurvey extends LitElement {
  static styles = css`
    :host {
      display: flex;
      height: 900px;
      width: 900px;
    }

    h1 {
      color: white;
      display: flex;
      justify-content: center;
    }

    .survey-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 90vh;
      width: 100%;
      border: 3px solid blue;
      border-radius: 10%;
      background-color: var(--survey-background-color, #3d4c52);
      padding: 20px;
      overflow-y: auto;
    }

    ::-webkit-scrollbar {
      display: none;
    }

    .question-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 20px;
      width: 100%; /* Asegura que el contenedor ocupe todo el ancho disponible */
    }

    .question-content {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .survey-image {
      max-width: 100%; /* Asegura que la imagen no exceda el ancho del contenedor padre */
      height: auto; /* Mantiene la proporción de aspecto de la imagen */
      margin-bottom: 20px; /* Espacio inferior */
    }

    .checkbox {
      font-size: 30px;
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }

    .radio {
      font-size: 30px;
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }

    .select {
      font-size: 20px;
      margin-left: 10px;
    }

    .text {
      font-size: 20px;
      margin-left: 10px;
    }

    .questionsParraf {
      font-size: 40px;
      margin: 0;
    }

    .descriptionParraf {
      font-size: 20px;
      color: #ccc;
      margin-top: 5px;
      margin-left: 30px;
    }

    .footerSurvey {
      display: flex;
      justify-content: center;
      margin-top: auto;
      padding-top: 20px;
      border-top: 1px solid black;
      border-radius: 10%;
    }

    .footerSurvey button {
      font-size: 40px;
      border-radius: 10%;
      margin: 10px;
    }

    .page {
      color: white;
      font-size: 20px;
    }

    .claseImg {
      display: flex;
      justify-content: center; /* Centra la imagen en el contenedor */
      align-items: center; /* Centra la imagen verticalmente */
    }

    @media (max-width: 1200px) {
    .survey-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      width: 100%;
      border: 3px solid blue;
      border-radius: 10%;
      background-color: var(--survey-background-color, #3d4c52);
      padding: 20px;
      overflow-y: auto;
    }
}
  `;

  static get properties() {
    return {
      colorFrameBackground: { type: String },
      questions: { type: Array },
      checked: { type: Boolean },
      titleSurvey: { type: String },
      description: { type: String },
      page: { type: Number },
      pageSize: { type: Number },
    };
  }

  constructor() {
    super();
    this.colorFrameBackground = "#3D4C52";
    this.questions = [];
    this.checked = false;
    this.titleSurvey = "Título de la encuesta";
    this.description = "";
    this.page = 0; //start page
    this.pageSize = 4; //number of questions per page
  }

  toggleInput(id) {
    this.checked = !this.checked;
    console.log("El estado del checkbox ha cambiado", this.checked);
    console.log("El id del checkbox es", id);
  }

  pagging(e) {
    const nameButton = e.target.classList.contains("next")
      ? "next"
      : "previous";
    const totalQuestions = this.questions.length;
    const totalPages = Math.ceil(totalQuestions / this.pageSize);

    if (nameButton === "next") {
      // Avanza a la siguiente página
      if (this.page < totalPages - 1) {
        this.page += 1;
      } else {
        // Si estamos en la última página, busca la próxima página con preguntas `unique`
        const nextUniquePage = this.questions.findIndex(
          (q, index) =>
            q.unique && Math.floor(index / this.pageSize) > this.page
        );
        if (nextUniquePage !== -1) {
          this.page = Math.floor(nextUniquePage / this.pageSize);
        }
      }
    } else if (nameButton === "previous") {
      // Retrocede a la página anterior si no estamos en la primera página
      if (this.page > 0) {
        // Si estamos en una página `unique`, vuelve a la página anterior en la paginación normal
        const prevUniqueQuestionIndex = this.questions.findIndex(
          (q, index) =>
            q.unique && Math.floor(index / this.pageSize) === this.page - 1
        );
        if (prevUniqueQuestionIndex !== -1) {
          this.page -= 1;
        } else {
          this.page -= 1;
        }
      }
    }
    this.requestUpdate();
  }

  render() {
    const start = this.page * this.pageSize;
    const end = start + this.pageSize;

    // Busca en el index de la pagina en la que estamos si hay una pregunta unica y obtenemos 1 en caso de ser true
    const uniqueQuestionIndex = this.questions.findIndex(
      (question, index) => question.unique && index >= start && index < end
    );

    let visibleQuestions = [];
    if (uniqueQuestionIndex !== -1) {
      visibleQuestions = [this.questions[uniqueQuestionIndex]];
    } else {
      visibleQuestions = this.questions
        .slice(start, end)
        .filter((q) => !q.unique);
    }

    return html`
      <div
        class="survey-container"
        style="background-color: ${this.colorFrameBackground};"
      >
        <h1>${this.titleSurvey}</h1>
        ${visibleQuestions.map(
          (question) => html`
            <div class="question-item">
              <div class="question-content">
                ${question.type === "checkbox"
                  ? question.options.map(
                      (option) => html`
                        <input
                          type="checkbox"
                          id="${option.value}"
                          name="question-${question.id}"
                          class="checkbox"
                          @click="${() => this.toggleInput(question.id)}"
                        />
                        <label for="${option.value}">${option.label}</label>
                      `
                    )
                  : question.type === "radio"
                  ? question.options.map(
                      (option) => html`
                        <input
                          type="radio"
                          id="${option.value}"
                          name="question-${question.id}"
                          class="radio"
                          @click="${() => this.toggleInput(question.id)}"
                        />
                        <label for="${option.value}">${option.label}</label>
                      `
                    )
                  : question.type === "select"
                  ? html`
                      <select
                        id="${question.id}"
                        name="question-${question.id}"
                        class="select"
                      >
                        ${question.options.map(
                          (option) =>
                            html`<option value="${option.value}">
                              ${option.label}
                            </option>`
                        )}
                      </select>
                    `
                  : question.type === "text"
                  ? html`
                      <input
                        type="text"
                        id="${question.id}"
                        name="question-${question.id}"
                        class="text"
                      />
                    `
                  : ""}
                <p class="questionsParraf">${question.text}</p>
              </div>
              <div class="claseImg">
                ${question.img
                  ? html`<img
                      src="${question.img}"
                      alt="${question.alt}"
                      class="survey-image"
                    />`
                  : ""}
              </div>
              ${question.description
                ? html`<p class="descriptionParraf">${question.description}</p>`
                : ""}
            </div>
          `
        )}
        <div class="footerSurvey">
          ${this.page > 0
            ? html`<button class="previous" @click="${(e) => this.pagging(e)}">
                Anterior
              </button>`
            : ""}
          <p class="page">${this.page + 1}</p>
          ${this.page < Math.ceil(this.questions.length / this.pageSize) - 1
            ? html`<button class="next" @click="${(e) => this.pagging(e)}">
                Siguiente
              </button>`
            : ""}
        </div>
      </div>
    `;
  }
}

customElements.define("abm-survey", AbmSurvey);
