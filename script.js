let counter = 0;
document.getElementById("cookie").addEventListener("click", function () {
  counter += 1;
  let cookieCounts = document.getElementById("counter");
  cookieCounts.innerHTML = "Clicks: " + counter;
  let cookie = document.getElementById("cookie");
  cookie.classList.add("bounce");
  setTimeout(() => {
    cookie.classList.remove("bounce");
  }, 300);
});

let normalUpgradeCount = 0;
document
  .getElementById("normalClickUpgrade")
  .addEventListener("click", function () {
    normalUpgradeCount += 1;
    let upgradeCount = document.getElementById("normalClickUpgradeCount");
    upgradeCount.innerHTML = normalUpgradeCount;
  });

let superClickCount = 0;
document
  .getElementById("superClickUpgrade")
  .addEventListener("click", function () {
    superClickCount += 1;
    let upgradeCount = document.getElementById("superClickUpgradeCount");
    upgradeCount.innerHTML = superClickCount;
  });

let criticalClickCount = 0;
document
  .getElementById("criticalClickUpgrade")
  .addEventListener("click", function () {
    criticalClickCount += 1;
    let upgradeCount = document.getElementById("criticalClickUpgradeCount");
    upgradeCount.innerHTML = criticalClickCount;
  });

let epicClickCount = 0;
document
  .getElementById("epicClickUpgrade")
  .addEventListener("click", function () {
    epicClickCount += 1;
    let upgradeCount = document.getElementById("epicClickUpgradeCount");
    upgradeCount.innerHTML = epicClickCount;
  });

let legendaryClickCount = 0;
document
  .getElementById("legendaryClickUpgrade")
  .addEventListener("click", function () {
    legendaryClickCount += 1;
    let upgradeCount = document.getElementById("legendaryClickUpgradeCount");
    upgradeCount.innerHTML = legendaryClickCount;
  });
