import { LitElement, html, css } from 'lit-element';

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
      height: 100%;
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
    }

    .question-content {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .checkbox {
      font-size: 30px;
      width: 20px;
      height: 20px;
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
      img: { type: String },
      alt: { type: String },
    };
  }

  constructor() {
    super();
    this.colorFrameBackground = '#3D4C52';
    this.questions = [];
    this.checked = false;
    this.titleSurvey = 'Título de la encuesta';
    this.description = '';
    this.page = 0; //start page
    this.pageSize = 4; //number of questions per page
    this.img = '';
    this.alt = '';
  }

  toggleInput(id) {
    this.checked = !this.checked;
    console.log('El estado del checkbox ha cambiado', this.checked);
    console.log('El id del checkbox es', id);
  }

  pagging(e) {
    const nameButton = e.target.classList.contains('next') ? 'next' : 'previous';
    const totalQuestions = this.questions.length;

    // Encuentra la pregunta `unique` en la página actual.
    const uniqueQuestionIndex = this.questions.findIndex(
      (q, index) => q.unique && Math.floor(index / this.pageSize) === this.page
    );

    if (nameButton === 'next') {
      // Si hay una pregunta `unique` en la página actual, muestra solo esa pregunta en la siguiente página.
      if (uniqueQuestionIndex !== -1) {
        this.page += 1;
      } else {
        // Avanza a la siguiente página.
        if (this.page < Math.ceil(totalQuestions / this.pageSize) - 1) {
          this.page += 1;
        } else {
          // Si estamos en la última página de preguntas normales, avanzar a la página de preguntas `unique` si existe
          const nextUniquePage = this.questions.findIndex(
            (q, index) => q.unique && Math.floor(index / this.pageSize) > this.page
          );
          if (nextUniquePage !== -1) {
            this.page = Math.floor(nextUniquePage / this.pageSize);
          }
        }
      }
    } else if (nameButton === 'previous') {
      // Retroceder a la página anterior si no estamos en la primera página
      if (this.page > 0) {
        // Si estamos en una página de `unique`, vamos a la página anterior en la paginación normal
        const prevUniqueQuestionIndex = this.questions.findIndex(
          (q, index) => q.unique && Math.floor(index / this.pageSize) === this.page - 1
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
    // Encuentra la pregunta `unique` en la página actual.
    const uniqueQuestionIndex = this.questions.findIndex(
      (q, index) => q.unique && Math.floor(index / this.pageSize) === this.page
    );

    // Si hay una pregunta `unique` en la página actual, solo muéstrala en esa página.
    const visibleQuestions = uniqueQuestionIndex !== -1
      ? [this.questions[uniqueQuestionIndex]]
      : this.questions.slice(
          this.page * this.pageSize,
          (this.page + 1) * this.pageSize
        );

    return html`
      <div class="survey-container" style="background-color: ${this.colorFrameBackground};">
        ${this.img ? html`<img src="${this.img}" alt="${this.alt}" class="survey-image"/>` : ''}
        <h1>${this.titleSurvey}</h1>
        ${visibleQuestions.map(
          (question) => html`
            <div class="question-item">
              <div class="question-content">
                ${question.type === 'checkbox'
                  ? question.options.map(
                      option => html`
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
                  : question.type === 'radio'
                  ? question.options.map(
                      option => html`
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
                  : question.type === 'select'
                  ? html`
                    <select
                      id="${question.id}"
                      name="question-${question.id}"
                      class="select"
                    >
                      ${question.options.map(
                        option => html`<option value="${option.value}">${option.label}</option>`
                      )}
                    </select>
                  `
                  : question.type === 'text'
                  ? html`
                    <input
                      type="text"
                      id="${question.id}"
                      name="question-${question.id}"
                      class="text"
                    />
                  `
                  : ''
                }
                <p class="questionsParraf">${question.text}</p>
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
            : ''
          }
          <p class="page">${this.page + 1}</p>
          ${((!this.questions[(this.page + 1) * this.pageSize]?.unique && this.page < Math.ceil(this.questions.length / this.pageSize) - 1) ||
              this.questions.some(q => q.unique) ||
              (this.questions[this.page * this.pageSize]?.unique && !this.questions[(this.page + 1) * this.pageSize])
            ) && 
          ((this.page < Math.ceil(this.questions.length / this.pageSize) - 1) || this.questions.some(q => q.unique) ||
          (this.questions[this.page * this.pageSize]?.unique && !this.questions[(this.page + 1) * this.pageSize])
            )
            ? html`<button class="next" @click="${(e) => this.pagging(e)}">
                Siguiente
              </button>`
            : ''
          }
        </div>
      </div>
    `;
  }
}

customElements.define('abm-survey', AbmSurvey);
