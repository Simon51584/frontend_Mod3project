const dashboard = document.querySelector("#dashboard");
const dashboardBtn = document.querySelector("#dashboard-btn");
const signInForm = document.querySelector("#signIn");
const userInput = document.querySelector("#userInput");

dashboardBtn.addEventListener("click", (event) => {
  if (dashboard.dataset.show === "true") {
    dashboard.classList.add("hidden");
    dashboard.dataset.show = "false";
  } else {
    dashboard.classList.remove("hidden");
    dashboard.dataset.show = "true";
  }
});

const st = document.querySelector("#st");
const stBtn = document.querySelector("#st-btn");

stBtn.addEventListener("click", (event) => {
  if (Object.keys(user).length !== 0) {
    if (st.dataset.show === "true") {
      st.classList.add("hidden");
      st.dataset.show = "false";
    } else {
      st.classList.remove("hidden");
      st.dataset.show = "true";
   
  }
});

const scoreboard = document.querySelector("#scoreboard");
const scoreboardBtn = document.querySelector("#scoreboard-btn");

scoreboardBtn.addEventListener("click", (event) => {
  if (scoreboard.dataset.show === "true") {
    scoreboard.classList.add("hidden");
    scoreboard.dataset.show = "false";
  } else {
    scoreboard.classList.remove("hidden");
    scoreboard.dataset.show = "true";
  }
});

signInForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (Object.keys(user).length === 0) {
    const name = signInForm.children[0].children[1].value;
    await createPlayer(name);
    userInput.innerHTML = `<p>Welcome, ${user.name}</p>`;
    signInForm.childNodes[3].textContent = "Log out";
  } else {
    user = {};
    userInput.innerHTML = `<label for="nameInput" class="sr-only">Name:</label>
    <input type="text" class="form-control-plaintext" id="nameInput" placeholder="Enter Name" >`;
    signInForm.childNodes[3].textContent = "Sign In";
    st.classList.add("hidden");
  }
});
