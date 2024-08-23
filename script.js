document.getElementById("cookie").addEventListener("click", function () {
  let counter = 0;
  if (parseInt(localStorage.getItem("cookieClicks")) > 0) {
    counter = parseInt(localStorage.getItem("cookieClicks"));
    let cookieCounts = document.getElementById("counter");
    cookieCounts.innerHTML = "Clicks: " + counter;
  }
  let clickUpgrades = [
    parseInt(localStorage.getItem("normalClickCount") || 0),
    parseInt(localStorage.getItem("superClickCount") || 0),
    parseInt(localStorage.getItem("criticalClickCount") || 0),
    parseInt(localStorage.getItem("epicClickCount") || 0),
    parseInt(localStorage.getItem("legendaryClickCount") || 0),
  ];
  temp = 0;
  for (let i = 1; i <= clickUpgrades.length; i++) {
    temp += clickUpgrades[i - 1] * (i + 1) ** 2;
  }
  if (temp > 0) {
    counter += temp;
  } else {
    counter += 1;
  }
  localStorage.setItem("cookieClicks", counter);
  let cookieCounts = document.getElementById("counter");
  cookieCounts.innerHTML = "Clicks: " + counter;
  let cookie = document.getElementById("cookie");
  cookie.classList.add("bounce");
  setTimeout(() => {
    cookie.classList.remove("bounce");
  }, 300);
});

function updateUpgrade(upgradeId, localStorageId) {
  let count = 0;
  if (localStorage.getItem(localStorageId)) {
    count = parseInt(localStorage.getItem(localStorageId));
    document.getElementById(upgradeId).innerHTML = count;
  }
  document
    .getElementById(upgradeId.replace("Count", ""))
    .addEventListener("click", function () {
      count += 1;
      localStorage.setItem(localStorageId, count);
      document.getElementById(upgradeId).innerHTML = count;
    });
}

updateUpgrade("normalClickUpgradeCount", "normalClickCount");
updateUpgrade("superClickUpgradeCount", "superClickCount");
updateUpgrade("criticalClickUpgradeCount", "criticalClickCount");
updateUpgrade("epicClickUpgradeCount", "epicClickCount");
updateUpgrade("legendaryClickUpgradeCount", "legendaryClickCount");
updateUpgrade("basicAutoclickUpgradeCount", "basicAutoclickerCount");
updateUpgrade("normalAutoclickUpgradeCount", "normalAutoclickerCount");
updateUpgrade("fastAutoclickUpgradeCount", "fastAutoclickerCount");
updateUpgrade("premiumAutoclickUpgradeCount", "premiumAutoclickerCount");
updateUpgrade("vipAutoclickUpgradeCount", "vipAutoclickerCount");

setInterval(() => {
  if (parseInt(localStorage.getItem("cookieClicks")) > 0) {
    let autoclickerUpgrades = [
      parseInt(localStorage.getItem("basicAutoclickerCount") || 0),
      parseInt(localStorage.getItem("normalAutoclickerCount") || 0),
      parseInt(localStorage.getItem("fastAutoclickerCount") || 0),
      parseInt(localStorage.getItem("premiumAutoclickerCount") || 0),
      parseInt(localStorage.getItem("vipAutoclickerCount") || 0),
    ];
    let autoclickerCount = 0;
    for (let i = 0; i < autoclickerUpgrades.length; i++) {
      autoclickerCount += autoclickerUpgrades[i] * (i + 2) ** 2;
    }
    console.log(autoclickerCount);
    let temp = parseInt(localStorage.getItem("cookieClicks"));
    temp += autoclickerCount;
    localStorage.setItem("cookieClicks", temp);
    let cookieCounts = document.getElementById("counter");
    cookieCounts.innerHTML = "Clicks: " + localStorage.getItem("cookieClicks");
  }
}, 1000);
