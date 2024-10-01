import { LitElement, html, css } from "lit-element";
import './abm-Screen'; 

export class AbmPrincipalScreen extends LitElement {
  static get properties() {
    return {
      componentsList: { type: Array }, 
      currentComponent: { type: String },
      title: { type: String },
      message: { type: String }
    };
  }

  constructor() {
    super();
    this.title = 'ABM WEB COMPONENTS';
    this.componentsList = ['home', 'survey','chargeelements','abm-modal'];     
    this.currentComponent = 'home'; 
    this.message = '';
  }

  static styles = css`



    .contenedor-principal {
      width: 100%;
      height: 100vh;
      background-color: green;
    }
    .encabezado {
      background-color: black;
      color: #1c9ec9;
      display: flex;
      justify-content: center;
      height: 10%;
    }
    .body {
      height: 80%;
      width: 50%;
      margin-top: 3%;
      margin-left: 3%;
      background-color: pink;
      display: flex;
      justify-content: start;
      flex-direction: column;
    }
    .componente {
      margin-left: 3%;
      font-size: 34px;
      font-weight: bolder;
      cursor: pointer; /* Cambia el cursor para indicar que es un enlace */
    }
    .mensaje {
      color: red; /* Cambia el color del mensaje si deseas */
      margin-left: 3%;
      font-size: 20px;
    }
  `;

  render() {
    switch (this.currentComponent) {
      case 'home':
        return html`
          <div class='contenedor-principal'>
            <header class='encabezado'>
              <h1>${this.title}</h1>
            </header>
            <div class='body'>
              <p class='componente' @click=${() => this.changeComponent('survey')}>ABM SURVEY COMPONENT</p>
              <p class='componente' @click=${() => this.changeComponent('maintenance')}>ABM MAINTENANCE COMPONENT</p>
              <p class='componente' @click=${() => this.changeComponent('chargeelements')}>Elementos de carga</p>
              <p class='componente' @click=${() => this.changeComponent('abm-modal')}>ABM MODAL</p>

              ${this.message ? html`<p class='mensaje'>${this.message}</p>` : ''}
            </div>
          </div>
        `;
      case 'survey':
        return html`<abm-screen></abm-screen>`;
      case 'maintenance':
        return html`<screen-maintenance></screen-maintenance>`;
        case 'chargeelements':
          return html`<progress-bar progressBar="20" StartLoading="true" timeChange="500"></progress-bar>`;
          case 'abm-modal':
          return html`<abm-modal open .message="${'TITULO ABM MODALS'}"></abm-modal>`;
        
      default:
        return this.defaultOption();
    }
  }

  changeComponent(component) {
    if (this.componentsList.includes(component)) {
      this.currentComponent = component;
      this.message = '';
    } else {
      this.currentComponent = 'maintenance';         
      this.message = 'Componente no encontrado, redirigiendo a la página de mantenimiento...';
    }
    this.requestUpdate();
  }

  defaultOption() {
    this.currentComponent = 'home';
    return this.render();
  }
}

customElements.define("abm-principal-screen", AbmPrincipalScreen);
