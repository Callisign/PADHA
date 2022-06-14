let darkMode = document.getElementById("dark-mode");

darkMode.onclick = function () {
  document.body.classList.toggle("dark-mode");
};

let menuCloseToggle = document.getElementById("menuBtn");
let navBar = document.getElementById("navBar");

function menuOpen() {
  if (navBar.className === "navigation")
  {
    navBar.className += " responsive";
  } else
  {
    navBar.className = "navigation";
  }
  if (menuCloseToggle.className === "nav-menu-icon")
  {
    menuCloseToggle.className += " menu-close-toggle";
  } else
  {
    menuCloseToggle.className = "nav-menu-icon";
  }
}

///////////////////// Nav Bar Menu List md Screen ////////////////

const MenuList = document.querySelectorAll(".NavBarMenuList");

MenuList.forEach((MenuList) => {
  MenuList.addEventListener("click", () => {
    MenuList.classList.toggle("openSubMenu");
  });
});

let sideBarExit = document.getElementById("sideBar");

function openSideBar() {
  if (sideBarExit.className === "side-bar")
  {
    sideBarExit.className += " open-side-bar";
  } else
  {
    sideBarExit.className = "side-bar";
  }
}

///////////////////// side Bar Social Media ////////////////////

let selectSocial = document.getElementById("sideBarSocial");

function openSocial() {
  if (selectSocial.className === "sideBarSocial")
  {
    selectSocial.className += " SLOpen";
  } else
  {
    selectSocial.className = "sideBarSocial";
  }
  selectSocial.style.transition = "all 5s";
}

///////////////////// Upper Nav Current Date ////////////////////
function updateTime() {
  let today = new Date();
  let dateAndTime = document.getElementById("date");
  let todayDate =
    today.toLocaleDateString("en-US", {weekday: "long"}) +
    " " +
    today.toLocaleDateString("en-US", {day: "numeric"}) +
    " " +
    today.toLocaleDateString("en-US", {month: "long"}) +
    ", " +
    today.toLocaleDateString("en-US", {year: "numeric"});

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  if (hours < 10)
  {
    hours = "0" + hours;
  }
  if (minutes < 10)
  {
    minutes = "0" + minutes;
  }
  if (seconds < 10)
  {
    seconds = "0" + seconds;
  }
  if (hours > 12)
  {
    hours = hours - 12;
    hours = "0" + hours;
  }
  if (today.getHours() >= 22)
  {
    hours = today.getHours() - 12;
  }
  if (hours === 24)
  {
    hours = "00";
  }
  let todayTime = hours + ":" + minutes + ":" + seconds;

  if (today.getHours() > 11)
  {
    todayTime += " PM";
  } else
  {
    todayTime += " AM";
  }

  dateAndTime.innerHTML =
    '<i class="fa-solid fa-calendar"></i>' +
    todayDate +
    "" +
    '<i class="fa-solid fa-clock ml-3"></i>' +
    todayTime;
}
setInterval(updateTime, 1000);

////////////////////////////// Preloader //////////////////////////
let preLoader = document.getElementById("preLoader");
window.addEventListener("load", function () {
  preLoader.style.display = "none";
});

////////////////////// Visits Count //////////////////////////

let counterContainer = document.getElementById("websiteCounter");
let visitCount = localStorage.getItem("page_view");

if (visitCount)
{
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else
{
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

////////////////////// last Modified //////////////////////////
let lastModified = document.getElementById("lastModified");
let lastModifiedDate = document.lastModified;
lastModified.innerHTML = lastModifiedDate;

function showPassword() {
  let loginPassword = document.getElementById("loginPassword");
  let showPasswordBtn = document.getElementById("showPasswordBtn");

  if (loginPassword.type === "password")
  {
    loginPassword.type = "text";
    showPasswordBtn.className = "fa-solid fa-eye-slash";
  } else
  {
    loginPassword.type = "password";
    showPasswordBtn.className = "fa-solid fa-eye";
  }
}
function showNewPassword() {
  let signUpPassword = document.getElementById("newPassword");
  let showNewPasswordBtn = document.getElementById("showNewPasswordBtn");

  if (signUpPassword.type === "password")
  {
    signUpPassword.type = "text";
    showNewPasswordBtn.className = "fa-solid fa-eye-slash";
  } else
  {
    signUpPassword.type = "password";
    showNewPasswordBtn.className = "fa-solid fa-eye";
  }
}
function showConfirmNewPassword() {
  let ConfirmNewPassword = document.getElementById("ConfirmNewPassword");
  let ShowConfirmNewPassword = document.getElementById(
    "ShowConfirmNewPassword"
  );

  if (ConfirmNewPassword.type === "password")
  {
    ConfirmNewPassword.type = "text";
    ShowConfirmNewPassword.className = "fa-solid fa-eye-slash";
  } else
  {
    ConfirmNewPassword.type = "password";
    ShowConfirmNewPassword.className = "fa-solid fa-eye";
  }
}

document.addEventListener("keydown", function (closeLogin) {
  let key = closeLogin.key;
  if (key === "Escape")
  {
    loginFormClose();
  }
});

function rememberMe() {
  let loginPassword = document.getElementById("loginPassword");
  let LoginUserName = document.getElementById("LoginUserName");

  document.cookie =
    "myusername = " + LoginUserName + ";path=https/localhost/web6pm/";
  document.cookie =
    "mypassword = " + loginPassword + ";path=https/localhost/web6pm/";
}

// ======== accordion Tabs ===========

let accordionTab = document.querySelectorAll(".accordion-tab");
let accordionContent = document.querySelectorAll(".accordion-content");

for (let i = 0; i < accordionTab.length; i++)
{
  accordionTab[i].addEventListener("click", () => {
    if (accordionTab[i].className === "accordion-tab")
    {
      accordionTab[i].className += " accordion-open";
    } else
    {
      accordionTab[i].className = "accordion-tab";
    }

    for (let j = 0; j < accordionContent.length; j++)
    {
      if (j !== i)
      {
        accordionTab[j].className = "accordion-tab";
      }
    }
  });
}

// ======== On Scroll Function ===========

let stickyNav = document.getElementById("stickyNav");
let sticky = stickyNav.offsetTop;

let nums = document.querySelectorAll(".numbers .num");
let section = document.querySelector(".count-js");
let started = false;

let sideBarList = document.querySelectorAll(".specialities-sidebar-list");


window.onscroll = function () {
  stickyNavBar();
  scrollFunction();
  indexPadhaCount();
};

function stickyNavBar() {
  if (window.pageYOffset >= sticky)
  {
    stickyNav.classList.add("stickyNavBar");
  } else
  {
    stickyNav.classList.remove("stickyNavBar");
  }
}

// ======== Count PADHA Number ===========

function indexPadhaCount() {
  if (window.scrollY >= section.offsetTop - 300)
  {
    if (!started)
    {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
}

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal)
    {
      clearInterval(count);
    }
  }, 0.1);
}

// ======== upAndDown button ===========

let upAndDown = document.getElementById("upAndDown");

function scrollFunction() {
  if (
    document.body.scrollTop > 180 ||
    document.documentElement.scrollTop > 180
  )
  {
    upAndDown.style.display = "block";
  } else
  {
    upAndDown.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
