
const dashboard = document.querySelector("#dashboard")
const dashboardBtn = document.querySelector("#dashboard-btn")

dashboardBtn.addEventListener("click", event => {
  if(dashboard.dataset.show==="true"){
      dashboard.classList.add("hidden")
      dashboard.dataset.show="false"
    } else {
        dashboard.classList.remove("hidden")
        dashboard.dataset.show="true"
    }

})


const st = document.querySelector("#st")
const stBtn = document.querySelector("#st-btn")

stBtn.addEventListener("click", event => {
  if(st.dataset.show==="true"){
      st.classList.add("hidden")
      st.dataset.show="false"
    } else {
        st.classList.remove("hidden")
        st.dataset.show="true"

    }

})

const scoreboard = document.querySelector("#scoreboard")
const scoreboardBtn = document.querySelector("#scoreboard-btn")

scoreboardBtn.addEventListener("click", event => {
  if(scoreboard.dataset.show==="true"){
      scoreboard.classList.add("hidden")
      scoreboard.dataset.show="false"
    } else {
        scoreboard.classList.remove("hidden")
        scoreboard.dataset.show="true"

    }

})

