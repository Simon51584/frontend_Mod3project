
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


const start = document.querySelector("#start")
const startBtn = document.querySelector("#start-btn")

startBtn.addEventListener("click", event => {
  if(start.dataset.show==="true"){
      start.classList.add("hidden")
      start.dataset.show="false"
    } else {
        start.classList.remove("hidden")
        start.dataset.show="true"

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