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
