let cookieMultiplier = 1;
localStorage.setItem("cookieClicks", 0);

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
    counter += temp * cookieMultiplier;
  } else {
    counter += cookieMultiplier;
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
      let clicks = parseInt(localStorage.getItem("cookieClicks"));

      if (localStorageId === "normalClickCount" && clicks < 10) {
        document.getElementById(
          upgradeId.replace("Count", "")
        ).style.backgroundColor = "red";
        setTimeout(() => {
          document.getElementById(
            upgradeId.replace("Count", "")
          ).style.backgroundColor = "white";
        }, 100);
        return;
      }
      if (localStorageId === "normalClickCount" && clicks >= 10) {
        localStorage.setItem("cookieClicks", clicks - 10);
      }
      if (localStorageId === "superClickCount" && clicks < 1000) {
        document.getElementById(
          upgradeId.replace("Count", "")
        ).style.backgroundColor = "red";
        setTimeout(() => {
          document.getElementById(
            upgradeId.replace("Count", "")
          ).style.backgroundColor = "white";
        }, 100);
        return;
      }
      if (localStorageId === "superClickCount" && clicks >= 1000) {
        localStorage.setItem("cookieClicks", clicks - 1000);
      }
      if (localStorageId === "criticalClickCount" && clicks < 100000) {
        document.getElementById(
          upgradeId.replace("Count", "")
        ).style.backgroundColor = "red";
        setTimeout(() => {
          document.getElementById(
            upgradeId.replace("Count", "")
          ).style.backgroundColor = "white";
        }, 100);
        return;
      }
      if (localStorageId === "criticalClickCount" && clicks >= 100000) {
        localStorage.setItem("cookieClicks", clicks - 100000);
      }
      if (localStorageId === "epicClickCount" && clicks < 1000000) {
        document.getElementById(
          upgradeId.replace("Count", "")
        ).style.backgroundColor = "red";
        setTimeout(() => {
          document.getElementById(
            upgradeId.replace("Count", "")
          ).style.backgroundColor = "white";
        }, 100);
        return;
      }
      if (localStorageId === "epicClickCount" && clicks >= 1000000) {
        localStorage.setItem("cookieClicks", clicks - 1000000);
      }
      if (localStorageId === "legendaryClickCount" && clicks < 10000000) {
        document.getElementById(
          upgradeId.replace("Count", "")
        ).style.backgroundColor = "red";
        setTimeout(() => {
          document.getElementById(
            upgradeId.replace("Count", "")
          ).style.backgroundColor = "white";
        }, 100);
        return;
      }
      if (localStorageId === "legendaryClickCount" && clicks >= 10000000) {
        localStorage.setItem("cookieClicks", clicks - 10000000);
      }
      if (localStorageId === "basicAutoclickerCount" && clicks < 10) {
        document.getElementById(
          upgradeId.replace("Count", "")
        ).style.backgroundColor = "red";
        setTimeout(() => {
          document.getElementById(
            upgradeId.replace("Count", "")
          ).style.backgroundColor = "white";
        }, 100);
        return;
      }
      if (localStorageId === "basicAutoclickerCount" && clicks >= 10) {
        localStorage.setItem("cookieClicks", clicks - 10);
      }
      if (localStorageId === "normalAutoclickerCount" && clicks < 10000) {
        document.getElementById(
          upgradeId.replace("Count", "")
        ).style.backgroundColor = "red";
        setTimeout(() => {
          document.getElementById(
            upgradeId.replace("Count", "")
          ).style.backgroundColor = "white";
        }, 100);
        return;
      }
      if (localStorageId === "normalAutoclickerCount" && clicks >= 10000) {
        localStorage.setItem("cookieClicks", clicks - 10000);
      }
      if (localStorageId === "fastAutoclickerCount" && clicks < 100000) {
        document.getElementById(
          upgradeId.replace("Count", "")
        ).style.backgroundColor = "red";
        setTimeout(() => {
          document.getElementById(
            upgradeId.replace("Count", "")
          ).style.backgroundColor = "white";
        }, 100);
        return;
      }
      if (localStorageId === "fastAutoclickerCount" && clicks >= 100000) {
        localStorage.setItem("cookieClicks", clicks - 100000);
      }
      if (localStorageId === "premiumAutoclickerCount" && clicks < 1000000) {
        document.getElementById(
          upgradeId.replace("Count", "")
        ).style.backgroundColor = "red";
        setTimeout(() => {
          document.getElementById(
            upgradeId.replace("Count", "")
          ).style.backgroundColor = "white";
        }, 100);
        return;
      }
      if (localStorageId === "premiumAutoclickerCount" && clicks >= 1000000) {
        localStorage.setItem("cookieClicks", clicks - 1000000);
      }

      if (localStorageId === "vipAutoclickerCount" && clicks < 15000000) {
        document.getElementById(
          upgradeId.replace("Count", "")
        ).style.backgroundColor = "red";
        setTimeout(() => {
          document.getElementById(
            upgradeId.replace("Count", "")
          ).style.backgroundColor = "white";
        }, 100);
        return;
      }
      if (localStorageId === "vipAutoclickerCount" && clicks >= 15000000) {
        localStorage.setItem("cookieClicks", clicks - 15000000);
      }

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
  if (parseInt(localStorage.getItem("cookieClicks")) >= 0) {
    let autoclickerUpgrades = [
      parseInt(localStorage.getItem("basicAutoclickerCount") || 0),
      parseInt(localStorage.getItem("normalAutoclickerCount") || 0),
      parseInt(localStorage.getItem("fastAutoclickerCount") || 0),
      parseInt(localStorage.getItem("premiumAutoclickerCount") || 0),
      parseInt(localStorage.getItem("vipAutoclickerCount") || 0),
    ];
    let autoclickerCount = 0;
    for (let i = 0; i < autoclickerUpgrades.length; i++) {
      autoclickerCount +=
        autoclickerUpgrades[i] * (i + 2) ** 2 * cookieMultiplier;
    }
    let temp = parseInt(localStorage.getItem("cookieClicks"));
    temp += autoclickerCount;
    localStorage.setItem("cookieClicks", temp);
    let cookieCounts = document.getElementById("counter");
    cookieCounts.innerHTML = "Clicks: " + localStorage.getItem("cookieClicks");
  }
}, 1000);

document.getElementById("fistTool").addEventListener("click", function () {
  let fist = document.getElementById("fistTool");
  let fistStatus = document.getElementById("fistStatus");
  if (fistStatus.innerHTML.includes("clicks")) {
    let totalClicks = parseInt(localStorage.getItem("cookieClicks"));
    if (totalClicks >= 100) {
      localStorage.setItem("cookieClicks", totalClicks - 100);
    } else {
      return;
    }

    fist.style.backgroundColor = "green";
    fistStatus.innerHTML = "equipped";
    cookieMultiplier = 2;
    if (document.getElementById("stickStatus").innerHTML === "equipped") {
      document.getElementById("stickStatus").innerHTML = "equip";
      document.getElementById("stickTool").style.backgroundColor = "white";
    }
    if (document.getElementById("rockStatus").innerHTML === "equipped") {
      document.getElementById("rockStatus").innerHTML = "equip";
      document.getElementById("rockTool").style.backgroundColor = "white";
    }
    if (document.getElementById("gunStatus").innerHTML === "equipped") {
      document.getElementById("gunStatus").innerHTML = "equip";
      document.getElementById("gunTool").style.backgroundColor = "white";
    }
    if (document.getElementById("nukeStatus").innerHTML === "equipped") {
      document.getElementById("nukeStatus").innerHTML = "equip";
      document.getElementById("nukeTool").style.backgroundColor = "white";
    }
  } else if (fistStatus.innerHTML.includes("equipped")) {
    fist.style.backgroundColor = "white";
    fistStatus.innerHTML = "equip";
    cookieMultiplier = 1;
  } else {
    fist.style.backgroundColor = "green";
    fistStatus.innerHTML = "equipped";
    cookieMultiplier = 2;
    if (document.getElementById("stickStatus").innerHTML === "equipped") {
      document.getElementById("stickStatus").innerHTML = "equip";
      document.getElementById("stickTool").style.backgroundColor = "white";
    }
    if (document.getElementById("rockStatus").innerHTML === "equipped") {
      document.getElementById("rockStatus").innerHTML = "equip";
      document.getElementById("rockTool").style.backgroundColor = "white";
    }
    if (document.getElementById("gunStatus").innerHTML === "equipped") {
      document.getElementById("gunStatus").innerHTML = "equip";
      document.getElementById("gunTool").style.backgroundColor = "white";
    }
    if (document.getElementById("nukeStatus").innerHTML === "equipped") {
      document.getElementById("nukeStatus").innerHTML = "equip";
      document.getElementById("nukeTool").style.backgroundColor = "white";
    }
  }
});

document.getElementById("stickTool").addEventListener("click", function () {
  let stick = document.getElementById("stickTool");
  let stickStatus = document.getElementById("stickStatus");
  if (stickStatus.innerHTML.includes("clicks")) {
    let totalClicks = parseInt(localStorage.getItem("cookieClicks"));
    if (totalClicks >= 10000) {
      localStorage.setItem("cookieClicks", totalClicks - 10000);
    } else {
      return;
    }
    stick.style.backgroundColor = "green";
    stickStatus.innerHTML = "equipped";
    cookieMultiplier = 5;
    if (document.getElementById("fistStatus").innerHTML === "equipped") {
      document.getElementById("fistStatus").innerHTML = "equip";
      document.getElementById("fistTool").style.backgroundColor = "white";
    }
    if (document.getElementById("rockStatus").innerHTML === "equipped") {
      document.getElementById("rockStatus").innerHTML = "equip";
      document.getElementById("rockTool").style.backgroundColor = "white";
    }
    if (document.getElementById("gunStatus").innerHTML === "equipped") {
      document.getElementById("gunStatus").innerHTML = "equip";
      document.getElementById("gunTool").style.backgroundColor = "white";
    }
    if (document.getElementById("nukeStatus").innerHTML === "equipped") {
      document.getElementById("nukeStatus").innerHTML = "equip";
      document.getElementById("nukeTool").style.backgroundColor = "white";
    }
  } else if (stickStatus.innerHTML.includes("equipped")) {
    stick.style.backgroundColor = "white";
    stickStatus.innerHTML = "equip";
    cookieMultiplier = 1;
  } else {
    stick.style.backgroundColor = "green";
    stickStatus.innerHTML = "equipped";
    cookieMultiplier = 5;
    if (document.getElementById("fistStatus").innerHTML === "equipped") {
      document.getElementById("fistStatus").innerHTML = "equip";
      document.getElementById("fistTool").style.backgroundColor = "white";
    }
    if (document.getElementById("rockStatus").innerHTML === "equipped") {
      document.getElementById("rockStatus").innerHTML = "equip";
      document.getElementById("rockTool").style.backgroundColor = "white";
    }
    if (document.getElementById("gunStatus").innerHTML === "equipped") {
      document.getElementById("gunStatus").innerHTML = "equip";
      document.getElementById("gunTool").style.backgroundColor = "white";
    }
    if (document.getElementById("nukeStatus").innerHTML === "equipped") {
      document.getElementById("nukeStatus").innerHTML = "equip";
      document.getElementById("nukeTool").style.backgroundColor = "white";
    }
  }
});

document.getElementById("rockTool").addEventListener("click", function () {
  let rock = document.getElementById("rockTool");
  let rockStatus = document.getElementById("rockStatus");
  if (rockStatus.innerHTML.includes("clicks")) {
    let totalClicks = parseInt(localStorage.getItem("cookieClicks"));
    if (totalClicks >= 1000000) {
      localStorage.setItem("cookieClicks", totalClicks - 1000000);
    } else {
      return;
    }
    rock.style.backgroundColor = "green";
    rockStatus.innerHTML = "equipped";
    cookieMultiplier = 10;
    if (document.getElementById("fistStatus").innerHTML === "equipped") {
      document.getElementById("fistStatus").innerHTML = "equip";
      document.getElementById("fistTool").style.backgroundColor = "white";
    }
    if (document.getElementById("stickStatus").innerHTML === "equipped") {
      document.getElementById("stickStatus").innerHTML = "equip";
      document.getElementById("stickTool").style.backgroundColor = "white";
    }
    if (document.getElementById("gunStatus").innerHTML === "equipped") {
      document.getElementById("gunStatus").innerHTML = "equip";
      document.getElementById("gunTool").style.backgroundColor = "white";
    }
    if (document.getElementById("nukeStatus").innerHTML === "equipped") {
      document.getElementById("nukeStatus").innerHTML = "equip";
      document.getElementById("nukeTool").style.backgroundColor = "white";
    }
  } else if (rockStatus.innerHTML.includes("equipped")) {
    rock.style.backgroundColor = "white";
    rockStatus.innerHTML = "equip";
    cookieMultiplier = 1;
  } else {
    rock.style.backgroundColor = "green";
    rockStatus.innerHTML = "equipped";
    cookieMultiplier = 10;
    if (document.getElementById("fistStatus").innerHTML === "equipped") {
      document.getElementById("fistStatus").innerHTML = "equip";
      document.getElementById("fistTool").style.backgroundColor = "white";
    }
    if (document.getElementById("stickStatus").innerHTML === "equipped") {
      document.getElementById("stickStatus").innerHTML = "equip";
      document.getElementById("stickTool").style.backgroundColor = "white";
    }
    if (document.getElementById("gunStatus").innerHTML === "equipped") {
      document.getElementById("gunStatus").innerHTML = "equip";
      document.getElementById("gunTool").style.backgroundColor = "white";
    }
    if (document.getElementById("nukeStatus").innerHTML === "equipped") {
      document.getElementById("nukeStatus").innerHTML = "equip";
      document.getElementById("nukeTool").style.backgroundColor = "white";
    }
  }
});

document.getElementById("gunTool").addEventListener("click", function () {
  let gun = document.getElementById("gunTool");
  let gunStatus = document.getElementById("gunStatus");
  if (gunStatus.innerHTML.includes("clicks")) {
    let totalClicks = parseInt(localStorage.getItem("cookieClicks"));
    if (totalClicks >= 10000000) {
      localStorage.setItem("cookieClicks", totalClicks - 10000000);
    } else {
      return;
    }
    gun.style.backgroundColor = "green";
    gunStatus.innerHTML = "equipped";
    cookieMultiplier = 100;
    if (document.getElementById("fistStatus").innerHTML === "equipped") {
      document.getElementById("fistStatus").innerHTML = "equip";
      document.getElementById("fistTool").style.backgroundColor = "white";
    }
    if (document.getElementById("stickStatus").innerHTML === "equipped") {
      document.getElementById("stickStatus").innerHTML = "equip";
      document.getElementById("stickTool").style.backgroundColor = "white";
    }
    if (document.getElementById("rockStatus").innerHTML === "equipped") {
      document.getElementById("rockStatus").innerHTML = "equip";
      document.getElementById("rockTool").style.backgroundColor = "white";
    }
    if (document.getElementById("nukeStatus").innerHTML === "equipped") {
      document.getElementById("nukeStatus").innerHTML = "equip";
      document.getElementById("nukeTool").style.backgroundColor = "white";
    }
  } else if (gunStatus.innerHTML.includes("equipped")) {
    gun.style.backgroundColor = "white";
    gunStatus.innerHTML = "equip";
    cookieMultiplier = 1;
  } else {
    gun.style.backgroundColor = "green";
    gunStatus.innerHTML = "equipped";
    cookieMultiplier = 100;
    if (document.getElementById("fistStatus").innerHTML === "equipped") {
      document.getElementById("fistStatus").innerHTML = "equip";
      document.getElementById("fistTool").style.backgroundColor = "white";
    }
    if (document.getElementById("stickStatus").innerHTML === "equipped") {
      document.getElementById("stickStatus").innerHTML = "equip";
      document.getElementById("stickTool").style.backgroundColor = "white";
    }
    if (document.getElementById("rockStatus").innerHTML === "equipped") {
      document.getElementById("rockStatus").innerHTML = "equip";
      document.getElementById("rockTool").style.backgroundColor = "white";
    }
    if (document.getElementById("nukeStatus").innerHTML === "equipped") {
      document.getElementById("nukeStatus").innerHTML = "equip";
      document.getElementById("nukeTool").style.backgroundColor = "white";
    }
  }
});

document.getElementById("nukeTool").addEventListener("click", function () {
  let nuke = document.getElementById("nukeTool");
  let nukeStatus = document.getElementById("nukeStatus");
  if (nukeStatus.innerHTML.includes("clicks")) {
    let totalClicks = parseInt(localStorage.getItem("cookieClicks"));
    if (totalClicks >= 1000000000) {
      localStorage.setItem("cookieClicks", totalClicks - 1000000000);
    } else {
      return;
    }
    nuke.style.backgroundColor = "green";
    nukeStatus.innerHTML = "equipped";
    cookieMultiplier = 1000;
    if (document.getElementById("fistStatus").innerHTML === "equipped") {
      document.getElementById("fistStatus").innerHTML = "equip";
      document.getElementById("fistTool").style.backgroundColor = "white";
    }
    if (document.getElementById("stickStatus").innerHTML === "equipped") {
      document.getElementById("stickStatus").innerHTML = "equip";
      document.getElementById("stickTool").style.backgroundColor = "white";
    }
    if (document.getElementById("rockStatus").innerHTML === "equipped") {
      document.getElementById("rockStatus").innerHTML = "equip";
      document.getElementById("rockTool").style.backgroundColor = "white";
    }
    if (document.getElementById("gunStatus").innerHTML === "equipped") {
      document.getElementById("gunStatus").innerHTML = "equip";
      document.getElementById("gunTool").style.backgroundColor = "white";
    }
  } else if (nukeStatus.innerHTML.includes("equipped")) {
    nuke.style.backgroundColor = "white";
    nukeStatus.innerHTML = "equip";
    cookieMultiplier = 1;
  } else {
    nuke.style.backgroundColor = "green";
    nukeStatus.innerHTML = "equipped";
    cookieMultiplier = 1000;
    if (document.getElementById("fistStatus").innerHTML === "equipped") {
      document.getElementById("fistStatus").innerHTML = "equip";
      document.getElementById("fistTool").style.backgroundColor = "white";
    }
    if (document.getElementById("stickStatus").innerHTML === "equipped") {
      document.getElementById("stickStatus").innerHTML = "equip";
      document.getElementById("stickTool").style.backgroundColor = "white";
    }
    if (document.getElementById("rockStatus").innerHTML === "equipped") {
      document.getElementById("rockStatus").innerHTML = "equip";
      document.getElementById("rockTool").style.backgroundColor = "white";
    }
    if (document.getElementById("gunStatus").innerHTML === "equipped") {
      document.getElementById("gunStatus").innerHTML = "equip";
      document.getElementById("gunTool").style.backgroundColor = "white";
    }
  }
});
