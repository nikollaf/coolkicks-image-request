class PartyButton extends HTMLElement {
  constructor() {
    super();
    this.isAnimating = false;
    this.productName = "";
    this.bindedAnimate = this.animate.bind(this);
  }

  connectedCallback() {
    this.emailRequestButton = document.querySelector("#email-request-button");
    this.emailRequestButton.addEventListener("click", this.showEmailInput);
    this.emailButton = document.querySelector("#email-button");
    this.emailButton.addEventListener("click", this.sendEmail);
  }

  showEmailInput() {
    this.emailRequestButton = document.querySelector("#email-request-button");
    this.email = document.querySelector("#email-div");
    this.emailRequestButton.classList.remove("flex");
    this.emailRequestButton.classList.add("hidden");
    this.email.classList.remove("hidden");
    this.email.classList.add("field-6");
    
  }

  sendEmail() {
    this.input = document.querySelector("#email");
    const email = this.input.value;
    this.productName = this.input.dataset.productName;
    fetch(`https://topdrwr.io/coolkicks/image/request?name=${this.productName}&email=${email}`)
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error("Error fetching:", error));
    document.querySelector("#email-div").outerHTML = "<p>Thank you!</p>";
  }
}

customElements.define("image-request", PartyButton);
