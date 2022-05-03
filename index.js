document.addEventListener("DOMContentLoaded", () => {
  eventListener();
});

function eventListener() {
  const submit = document.querySelector("[name='rate-form']");
  console.log(submit);

  submit.addEventListener("submit", function(event) {
    console.log(event);
    event.preventDefault();
    console.log("hola");
    const thankYou = document.querySelector(".thankyou");
    const rate = document.querySelector(".rate");
    displayRadioValue();

    rate.classList.remove("mostrar");

    thankYou.classList.add("mostrar");
  })
}

function displayRadioValue() {
  let meta = document.querySelector(".meta-info");

  let radio = document.querySelectorAll("input[type='radio']");

  for(i = 0; i < radio.length; i++) {
    if(radio[i].checked) {
      meta.innerHTML = "You selected " + radio[i].value + " out of " + radio.length;
    }
  }
}

