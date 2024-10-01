import { LitElement, html } from "lit";
import { styles } from "./abmmodal-style";

class ModalClass extends LitElement {
  static styles = [styles];

  static get properties() {
    return {
      open: { type: Boolean },
      message: { type: String },
      openbanner: {type: Boolean},
      messageBanner: {type: String},
      titleButton1: {type: String},
      titleButton2: {type: String},
      

    };
  }

  constructor() {
    super();
    this.open = true;
    this.message = "TITULO DE LA MODAL";
    this.openbanner = false;
    this.titleButton1 = 'Cerrar';
    this.titleButton2 = 'ACEPTAR';
    this.messageBanner = "¿ESTAS SEGURO DE REALIZAR LA ACCION?"
  }

  openBanner() {
    this.openbanner = true;
  }

  closeModal(){
    this.open = false;
    this.openbanner = false;
    this.dispatchEvent(new CustomEvent('modal-closed', {
      detail: { open: this.open },
      bubbles: true, // Hace que el evento suba por el DOM
      composed: true  // Permite que el evento atraviese el Shadow DOM
    }));
  }
  

  closeBanner(){
    this.openbanner = false;

  }

  render() {
    return html`
      <div class="principal-div" style="display: ${this.open ? "flex" : "none"};">
        <div class="overlay" style="display: ${this.openbanner ? 'block' : 'none'};"></div>
        
        ${this.openbanner 
          ? html`
              <div class="banner">
                <p class='titleBanner'>${this.messageBanner}</p>
                <button class='banner-buttom-left' @click="${this.closeModal}">${this.titleButton2}</button>
                <button class='banner-buttom-right' @click="${this.closeBanner}">${this.titleButton1}</button>
              </div>
            ` 
          : html``
        }
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div class="title-container">
            <p id="modal-title" class="title">${this.message}</p>
          </div>
          <button class="buttom" @click="${this.openBanner}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>
        </div>
      </div>
    `;
  }
  
}  

customElements.define("abm-modal", ModalClass);
