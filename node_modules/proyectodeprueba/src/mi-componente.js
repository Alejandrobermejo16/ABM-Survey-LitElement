import { LitElement, html, css } from 'lit';

class MiComponente extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      background-color: lightblue;
    }
  `;

  render() {
    return html`<h1>¡Hola desde Lit Element!</h1>`;
  }
}

customElements.define('mi-componente', MiComponente);
