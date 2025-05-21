class PartyButton extends HTMLButtonElement {
  constructor() {
    super();
    this.isAnimating = false;
    this.productName = "";
    this.bindedAnimate = this.animate.bind(this);
  }

  connectedCallback() {
    this.email = document.querySelector("#email-div");
    this.addEventListener("click", this.showEmailInput);
  }

  showEmailInput() {
    this.classList.add("hidden");
    this.email.classList.remove("hidden");
    this.emailButton = document.querySelector("#email-button");
    this.emailButton.addEventListener("click", this.sendEmail);
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

customElements.define("party-button", PartyButton, { extends: "button" });
