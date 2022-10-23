// ======== Preloader =================
let preLoader = document.getElementById("preLoader");
window.addEventListener("load", function () {
  preLoader.style.display = "none";
});

// function replaceDigits() {
//   let map = ["&\#1632;", "&\#1633;", "&\#1634;", "&\#1635;", "&\#1636;", "&\#1637;", "&\#1638;", "&\#1639;", "&\#1640;", "&\#1641;"];
//   document.body.innerHTML = document.body.innerHTML.replace(/\d(?=[^<>]*(<|$))/g,
//     function ($0) {
//       return map[$0]
//     });
// };


// ======== Dark Mode ==================
let darkMode = localStorage.getItem('darkMode');
let darkModeToggle = document.getElementById("dark-mode");

let enableDarkMode = () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
};

let disableDarkMode = () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', null);
};

if (darkMode === "enabled")
{
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  let darkMode = localStorage.getItem('darkMode');

  if (darkMode !== "enabled")
  {
    enableDarkMode();
    console.log(darkMode);
  } else
  {
    disableDarkMode();
  }
});

// ======== open toggle NavBar Menue Responsive =====
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

const modalPicContent = document.querySelectorAll(".modalPicContent");
const closeModalPic = document.querySelectorAll(".closeModalPic");

modalPicContent.forEach((modalPicContent) => {
  modalPicContent.addEventListener("click", () => {
    modalPicContent.classList.toggle("openPic");
  });
});

let navLinksBtn = document.querySelectorAll(".NavBarLinksLiClick");
let navLinks = document.querySelectorAll(".NavBarLinksLi");

for (let i = 0; i < navLinks.length; i++)
{
  navLinksBtn[i].addEventListener("click", () => {
    if (navLinks[i].className === "NavBarLinksLi")
    {
      navLinks[i].className += " openSubMenu";
    } else
    {
      navLinks[i].className = "NavBarLinksLi";
    }

    for (let j = 0; j < navLinks.length; j++)
    {
      if (j !== i)
      {
        navLinks[j].className = "NavBarLinksLi";
      }
    }
  });
}

// ======== Nav Links subtabs ============================
let navSubLinks = document.querySelectorAll(".NavBarSubLinksLi");

for (let i = 0; i < navSubLinks.length; i++)
{
  navSubLinks[i].addEventListener("click", () => {
    if (navSubLinks[i].className === "NavBarSubLinksLi")
    {
      navSubLinks[i].className += " openSubMenuII";
    } else
    {
      navSubLinks[i].className = "NavBarSubLinksLi";
    }

    for (let j = 0; j < navSubLinks.length; j++)
    {
      if (j !== i)
      {
        navSubLinks[j].className = "NavBarSubLinksLi";
      }
    }
  });
}

// ======== Upper Nav Current Date ==================
function updateTime() {
  if (localStorage.getItem("lang") === "ar")
  {
    LangFormat = "ar-EG";
    TimingAM = " ص";
    TimingPM = " م";
  } else
  {
    LangFormat = "en-US";
    TimingAM = " AM";
    TimingPM = " PM";
  }

  let today = new Date();
  let dateAndTime = document.getElementById("date");
  let todayDate =
    today.toLocaleDateString(LangFormat, {weekday: "short"}) + " " +
    today.toLocaleDateString(LangFormat, {day: "numeric"}) + " " +
    today.toLocaleDateString(LangFormat, {month: "short"}) + " " +
    today.toLocaleDateString(LangFormat, {year: "numeric"});

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
    todayTime += TimingPM;
  } else
  {
    todayTime += TimingAM;
  }

  dateAndTime.innerHTML =
    '<i class="fa-solid fa-calendar"></i>' +
    todayDate +
    "" +
    '<i class="fa-solid fa-clock"></i>' +
    todayTime;
}
setInterval(updateTime, 1000);

// ======== Last row Visits Count ===================
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

// ======== Last row last Modified ===================
let lastModified = document.getElementById("lastModified");
let lastModifiedDate = document.lastModified;
lastModified.innerHTML = lastModifiedDate;

// ======== Show New password toggle =================
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

// ======== Show password toggle =====================
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

// ======== Show password Confirm toggle =============
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


// ======== Remember me toggle =======================
function rememberMe() {
  let loginPassword = document.getElementById("loginPassword");
  let LoginUserName = document.getElementById("LoginUserName");

  document.cookie =
    "myusername = " + LoginUserName + ";path=https/localhost/web6pm/";
  document.cookie =
    "mypassword = " + loginPassword + ";path=https/localhost/web6pm/";
}


// ======== accordion Tabs ============================
let accordionTabBtn = document.querySelectorAll(".accordion-tab .accordion-title");
let accordionTab = document.querySelectorAll(".accordion-tab");
let accordionContent = document.querySelectorAll(".accordion-content");

for (let i = 0; i < accordionTab.length; i++)
{
  accordionTabBtn[i].addEventListener("click", () => {
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
};

// ======== AccUnit Tabs ============================
let accUnitBtn = document.querySelectorAll(".accUnitTab .accUnitTitle");
let accUnit = document.querySelectorAll(".accUnitTab");
let accUnitContent = document.querySelectorAll(".accContent");

for (let i = 0; i < accUnit.length; i++)
{
  accUnitBtn[i].addEventListener("click", () => {
    if (accUnit[i].className === "accUnitTab")
    {
      accUnit[i].className += " accOpen";
    } else
    {
      accUnit[i].className = "accUnitTab";
    }

    for (let j = 0; j < accUnitContent.length; j++)
    {
      if (j !== i)
      {
        accUnit[j].className = "accUnitTab";
      }
    }
  });
}



// ======== On Scroll Functions ===========
let stickyNav = document.getElementById("stickyNav");
let sticky = stickyNav.offsetTop;

let nums = document.querySelectorAll(".numbers .num");
let section = document.querySelector(".count-js");
let started = false;

let sideBarList = document.querySelectorAll(".specialities-sidebar-list");


window.onscroll = function () {
  stickyNavBar();
  scaledScrollTop();
  indexPadhaCount();
};

// ======== stickyNavBar ==================
function stickyNavBar() {
  if (window.pageYOffset >= sticky)
  {
    stickyNav.classList.add("stickyNavBar");
  } else
  {
    stickyNav.classList.remove("stickyNavBar");
  }
}

// ======== Count PADHA Number ============
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


// ======== topZero button =================
function scaledScrollTop() {

  let scrollProgress = document.getElementById("topZero");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos / calcHeight) * 100);

  if (pos > 180)
  {
    scrollProgress.style.display = "flex";
  }
  else
  {
    scrollProgress.style.display = "none";
  }
  scrollProgress.style.background = `
  conic-gradient(var(--cs-red-alt) ${scrollValue}%, var(--cs-red-trans) ${scrollValue}%)
  `
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ======== Escape button to do action =========
document.addEventListener("keydown", function (closeLogin) {
  let key = closeLogin.key;
  if (key === "Escape")
  {
    loginFormClose();
  }
});


