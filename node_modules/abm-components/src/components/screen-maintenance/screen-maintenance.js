import { LitElement, html } from "lit";
import { styles } from "./screen-maintenance-styles";

class ScreenMaintenance extends LitElement {
  static styles = [styles];

  static get properties() {
    return {
      goTo: { type: String }, 
      redirectAfter: { type: Number },
    };
  }

  constructor() {
    super();
    this.goTo = '/';  
    this.redirectAfter = 8;
  }

  connectedCallback() {
    super.connectedCallback();
    this._startRedirectTimer();
  }

  _startRedirectTimer() {
    setTimeout(() => {
      this._handleGoTo();
    }, this.redirectAfter * 1000);
  }

  _handleGoTo() {
    if (this.goTo) {
      window.location.href = this.goTo; 
    }
  }

  render() {
    return html`
      <div class="screen-director">
        <div class="text-spinner">
          <h2>Serás redirigido  ${this.goTo} en unos segundos...</h2>
          <div class="spinner"></div>
        </div>
        <div class="central-square">
          <div class="header">
            <div class="header-text">
              <p>Estimado usuario:</p>
              <p>Actualmente estamos realizando mejoras en esta pantalla,</p>
              <p>Disculpe las molestias.</p>
              <p>Atentamente el equipo de desarrollo.</p>
            </div>
          </div>
          <div class="body">
            
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("screen-maintenance", ScreenMaintenance);
