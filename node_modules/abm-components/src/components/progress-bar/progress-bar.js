import { LitElement, html, css } from 'lit';
import { styles } from './progress-bar-style';

class ProgressBar extends LitElement {
  static styles = [styles];

  static get properties() {
    return {
      progressBar: { type: Number },
      StartLoading: { type: Boolean },
      timeChange: {type: Number},
      textLoading: {type: String}
    };
  }

  constructor() {
    super();
    this.progressBar = 10;
    this.timeChange = 200;
    this.StartLoading = false;
    this.textLoading = 'Cargando...';
  }

  updated(changedProperties) {
    if (changedProperties.has('StartLoading') && this.StartLoading) {
      this._Progress();
    }
  }

  _Progress() {
    const intervalId = setInterval(() => {
      this.progressBar += 10;

      // Al llegar al 100% se detiene
      if (this.progressBar >= 100) {
        this.textLoading = '';
        clearInterval(intervalId);
      }
    }, this.timeChange);
  }

  render() {
    return html`
      <div class='contenedor-padre'>
        <div class='barra-progreso'>
          <div class='barra-relleno' style="width: ${this.progressBar}%"></div>
          <p class='parrafo-barra-progreso'>${this.textLoading}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('progress-bar', ProgressBar);
