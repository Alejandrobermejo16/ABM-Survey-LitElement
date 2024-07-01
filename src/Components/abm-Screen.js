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
        text: "¿Es la hora de ganar?",
        description: "Hora de demostrar nuestras habilidades."
      },
      {
        text: "¿Se verán correctamente las preguntas?",
        description: "Asegurémonos de que todo se vea bien."
      },
      {
        text: "¿Llegaré a Marte algún día?",
        description: "El camino del aprendizaje es largo."
      }
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
