let PADHAJS = `

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
    crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
    crossorigin="anonymous"></script>

<script src="../js/jquery-3.6.0.min.js"></script>
<script src="../js/owl.carousel.js"></script>
<script src="../js/owl-slider.js"></script>

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"></script>

`;
document.getElementById('PADHAJS').innerHTML = PADHAJS;


let PADHANavBar = `

<div>

<!-- ==================================== moveUpButton ======================================= -->
<a id="topZero" onclick="topFunction()"><i class="fa-solid fa-angle-up"></i></a>

<!-- ==================================== Third Nav Bar ====================================== -->
<div id="topNav" class="top-nav">
    <div class="container">
        <div class="top-nav-content">
            <div class="left">
                <a href="../html/FQA.html"><i class="fa-solid fa-circle-question"></i>
                    <atr data-translation="FQA">FQA</atr>
                </a>
            </div>
            <div class="center">
                <a id="date"></a>
            </div>
            <div class="right">
                <a href="../html/signin.html" class="logIn"><i class="fa-solid fa-arrow-right-to-bracket"></i>
                    <atr data-translation="login">Login</atr>
                </a>
            </div>
        </div>
    </div>
</div>

<!-- ==================================== Second Nav Bar ===================================== -->
<div id="secondaryNavbar" class="container d-none d-md-block">
    <div class="secondary-navbar">
        <div class="padha-logo">
            <a href="../html/index.html">
                <img src="../svg/portrait-PADH-light.svg" alt="">
                <h5>
                    <atr data-translation="PADHA"></atr>
                    <br>
                    <atr data-translation="PADHAII"></atr>
                </h5>
            </a>
        </div>
        <div class="search-btn">
            <a href="../html/generalStatics.html">
                <i class="fa-solid fa-chart-column padha-in-numbers"></i>
                <span class="tooltipSocial">
                    <atr data-translation="PadhaStatics"></atr>
                </span>
            </a>
            <a href="../html/downloads.html">
                <i class="fa-solid fa-arrow-down download"></i>
                <span class="tooltipSocial">
                    <atr data-translation="downloadPDF"></atr>
                </span>
            </a>
            <a href="https://facebook.com/padha.moh.eg">
                <i class="fa-brands fa-facebook-f facebook"></i>
                <span class="tooltipSocial">
                    <atr data-translation="followFB"></atr>
                </span>
            </a>
            <a href="https://instagram.com/padha.moh.eg">
                <i class="fa-brands fa-instagram instagram"></i>
                <span class="tooltipSocial">
                    <atr data-translation="followInsta"></atr>
                </span>
            </a>
            <a href="https://api.whatsapp.com/send?phone=201009457385&app=facebook&entry_
                            point=page_cta&fbclid=IwAR3OdRZN4x5atRtsbe8g4R1KwvKJwEQRoElQYXXwrrDwmm7ts7MxsUAsC7g"><i
                    class="fa-brands fa-whatsapp whatsapp"></i>
                <span class="tooltipSocial">
                    <atr data-translation="followWhats"></atr>
                </span>
            </a>
            <a href="https://t.me/padha_moh_eg">
                <i class="fa-solid fa-paper-plane telegram"></i>
                <span class="tooltipSocial">
                    <atr data-translation="followTele"></atr>
                </span>
            </a>
            <a href="mailto:padha.moh.eg@gmail.com">
                <i class="fa-solid fa-envelope gmail"></i>
                <span class="tooltipSocial">
                    <atr data-translation="followGmail"></atr>
                </span>
            </a>
        </div>
    </div>
</div>

<!-- ==================================== Master Nav Bar ===================================== -->
<div id="stickyNav">
    <nav id="navBar" class="navigation">
        <div class="nav-bg">
            <div class="container">
                <div class="nav-titles" id="navTitles">
                    <div class="nav-all">
                        <div class="nav-logo">
                            <a href="../html/index.html">
                                <h4>
                                    <atr data-translation="padha"></atr>
                                </h4>
                            </a>
                            <div id="menuBtn" class="nav-menu-icon" onclick="menuOpen()">
                                <div class="menu-line line-I"></div>
                                <div class="menu-line line-II"></div>
                                <span class="menu-line line-III"></span>
                            </div>
                        </div>
                        <div class="nav-side">
                            <div class="nav-links">
                                <ul>
                                    <li class="NavBarLinksLi">
                                        <div class="NavBarLinksLiClick">
                                            <a href="#">
                                                <i class="fa-solid fa-circle-info"></i>
                                                <atr data-translation="about"></atr>
                                                <i class="fa-solid fa-chevron-down submenu-arrow-down"></i>
                                            </a>
                                        </div>
                                        <div class="nav-submenu-I">
                                            <ul>
                                                <li><a href="../html/message.html">
                                                        <i class="fa-solid fa-message"></i>
                                                        <atr data-translation="vision"></atr>
                                                    </a></li>
                                                <li><a href="../html/team.html"><i class="fa-solid fa-users"></i>
                                                        <atr data-translation="team"></atr>
                                                    </a></li>
                                                <li><a href="../html/contact.html"><i class="fa-solid fa-phone"></i>
                                                        <atr data-translation="contact"></atr>
                                                    </a>
                                                </li>
                                                <li><a href="../html/terms.html"><i
                                                            class="fa-solid fa-scale-balanced"></i>
                                                        <atr data-translation="terms"></atr>
                                                    </a>
                                                </li>
                                                <li><a href="../html/privacy.html"><i
                                                            class="fa-solid fa-shield"></i>
                                                        <atr data-translation="privacy"></atr>
                                                    </a>
                                                </li>
                                                <li><a href="../html/FQA.html">
                                                        <i class="fa-solid fa-circle-question"></i>
                                                        <atr data-translation="fqa"></atr>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="NavBarLinksLi">
                                        <div class="NavBarLinksLiClick">
                                            <a href="#"><i class="fa-solid fa-photo-film"></i>
                                                <atr data-translation="media"></atr>
                                                <i class="fa-solid fa-chevron-down submenu-arrow-down"></i>
                                            </a>
                                        </div>
                                        <div class="nav-submenu-I">
                                            <ul>
                                                <li>
                                                    <a href="../html/photos.html">
                                                        <i class="fa-solid fa-images"></i>
                                                        <atr data-translation="photos"></atr>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="../html/videos.html">
                                                        <i class="fa-solid fa-film"></i>
                                                        <atr data-translation="videos"></atr>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="../html/events.html">
                                                        <i class="fa-solid fa-calendar-days"></i>
                                                        <atr data-translation="events"></atr>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="../html/downloads.html">
                                                        <i class="fa-solid fa-arrow-down"></i>
                                                        <atr data-translation="downloads"></atr>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="NavBarLinksLi">
                                        <div class="NavBarLinksLiClick">
                                            <a href="#"><i class="fa-solid fa-list-check"></i>
                                                <atr data-translation="sectors"></atr><i
                                                    class="fa-solid fa-chevron-down submenu-arrow-down"></i>
                                            </a>
                                        </div>
                                        <div class="nav-submenu-I">
                                            <ul>
                                                <li class="NavBarSubLinksLi">
                                                    <a href="../html/Specialists.html">
                                                        <i class="fa-solid fa-user-doctor"></i>
                                                        <atr data-translation="specialists"></atr>
                                                    </a>
                                                </li>
                                                <li class="NavBarSubLinksLi">
                                                    <a href="#">
                                                        <i class="fa-solid fa-house-chimney-medical"></i>
                                                        <atr data-translation="districts"></atr>
                                                        <i class="fa-solid fa-angle-right nav-link-arrow"></i>
                                                    </a>
                                                    <div class="nav-submenu-II">
                                                        <ul>
                                                            <li><a href="../html/district_montaza.html">
                                                                    <i
                                                                        class="fa-solid fa-house-chimney-medical"></i>
                                                                    <atr data-translation="montaza"></atr>
                                                                </a>
                                                            </li>
                                                            <li><a href="../html/district_east.html">
                                                                    <i
                                                                        class="fa-solid fa-house-chimney-medical"></i>
                                                                    <atr data-translation="east"></atr>
                                                                </a>
                                                            </li>
                                                            <li><a href="../html/district_middle.html">
                                                                    <i
                                                                        class="fa-solid fa-house-chimney-medical"></i>
                                                                    <atr data-translation="middle"></atr>
                                                                </a>
                                                            </li>
                                                            <li><a href="../html/district_west.html">
                                                                    <i
                                                                        class="fa-solid fa-house-chimney-medical"></i>
                                                                    <atr data-translation="west"></atr>
                                                                </a>
                                                            </li>
                                                            <li><a href="../html/district_gomrok.html">
                                                                    <i
                                                                        class="fa-solid fa-house-chimney-medical"></i>
                                                                    <atr data-translation="gomrok"></atr>
                                                                </a>
                                                            </li>
                                                            <li><a href="../html/district_agamy.html">
                                                                    <i
                                                                        class="fa-solid fa-house-chimney-medical"></i>
                                                                    <atr data-translation="agamy"></atr>
                                                                </a>
                                                            </li>
                                                            <li><a href="../html/district_amria.html">
                                                                    <i
                                                                        class="fa-solid fa-house-chimney-medical"></i>
                                                                    <atr data-translation="amriya"></atr>
                                                                </a>
                                                            </li>
                                                            <li><a href="../html/district_borg.html">
                                                                    <i
                                                                        class="fa-solid fa-house-chimney-medical"></i>
                                                                    <atr data-translation="borg"></atr>
                                                                </a>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </li>
                                                <li class="NavBarSubLinksLi">
                                                    <a href="#">
                                                        <i class="fa-solid fa-hospital"></i>
                                                        <atr data-translation="dentalUnits"></atr>
                                                        <i class="fa-solid fa-angle-right nav-link-arrow"></i>
                                                    </a>
                                                    <div class="nav-submenu-II">
                                                        <ul>
                                                            <li><a href="../html/protective-units.html">
                                                                    <i class="fa-solid fa-hospital-user"></i>
                                                                    <atr data-translation="protUnits"></atr>
                                                                </a>
                                                            </li>
                                                            <li><a href="../html/theraputic-units.html">
                                                                    <i class="fa-solid fa-hospital-user"></i>
                                                                    <atr data-translation="theraUnits"></atr>
                                                                </a>
                                                            </li>

                                                            <li><a href="../html/hospitals.html"><i
                                                                        class="fa-solid fa-bed-pulse"></i>
                                                                    <atr data-translation="hospitals"></atr>
                                                                </a>
                                                            </li>
                                                            <li><a href="../html/centers.html">
                                                                    <i class="fa-solid fa-hospital"></i>
                                                                    <atr data-translation="centers"></atr>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li class="NavBarSubLinksLi">
                                                    <a href="#">
                                                        <i class="fa-solid fa-book-open-reader"></i>
                                                        <atr data-translation="healthEducation"></atr>
                                                        <i class="fa-solid fa-angle-right nav-link-arrow"></i>
                                                    </a>
                                                    <div class="nav-submenu-II ">
                                                        <ul>
                                                            <li><a href="../html/HE.teethBrushing.html">
                                                                    <i class="fa-solid fa-chalkboard-user"></i>
                                                                    <atr data-translation="teethBrushing"></atr>
                                                                </a>
                                                            </li>
                                                            <li><a href="../html/HE.dentalFlossing.html">
                                                                    <i class="fa-solid fa-chalkboard-user"></i>
                                                                    <atr data-translation="dentalFlossing"></atr>
                                                                </a>
                                                            </li>
                                                            <li><a href="../html/HE.waterFlosser.html">
                                                                    <i class="fa-solid fa-chalkboard-user"></i>
                                                                    <atr data-translation="waterFlossing"></atr>
                                                                </a>
                                                            </li>
                                                            <li><a href="../html/HE.interDentalBrush.html">
                                                                    <i class="fa-solid fa-chalkboard-user"></i>
                                                                    <atr data-translation="interDentalBrush"></atr>
                                                                </a>
                                                            </li>
                                                            <li><a href="../html/HE.braces.html">
                                                                    <i class="fa-solid fa-chalkboard-user"></i>
                                                                    <atr data-translation="braces"></atr>
                                                                </a>
                                                            </li>
                                                            <li><a href="../html/HE.FixedProsth.html">
                                                                    <i class="fa-solid fa-chalkboard-user"></i>
                                                                    <atr data-translation="fixedProsthodontics">
                                                                    </atr>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="NavBarLinksLi">
                                        <div class="NavBarLinksLiClick">
                                            <a href="#"><i class="fa-solid fa-tooth"></i>
                                                <atr data-translation="specialities"></atr>
                                                <i class="fa-solid fa-chevron-down submenu-arrow-down"></i>
                                            </a>
                                        </div>
                                        <div class="nav-submenu-I">
                                            <ul>
                                                <li><a href="../html/sector_Periodontics.html">
                                                        <i class="fa-solid fa-droplet"></i>
                                                        <atr data-translation="perio"></atr>
                                                    </a>
                                                </li>
                                                <li><a href="../html/sector_Pedodontics.html">
                                                        <i class="fa-solid fa-baby"></i>
                                                        <atr data-translation="pedo"></atr>
                                                    </a>
                                                </li>
                                                <li><a href="../html/sector_Operative.html">
                                                        <i class="fa-solid fa-tooth"></i>
                                                        <atr data-translation="operative"></atr>
                                                    </a>
                                                </li>
                                                <li><a href="../html/sector_Endodontics.html">
                                                        <i class="fa-solid fa-syringe"></i>
                                                        <atr data-translation="endo"></atr>
                                                    </a>
                                                </li>
                                                <li><a href="../html/sector_Prosthodontics.html">
                                                        <i class="fa-solid fa-teeth"></i>
                                                        <atr data-translation="prosthesis"></atr>
                                                    </a>
                                                </li>
                                                <li><a href="../html/sector_Orthodontics.html">
                                                        <i class="fa-solid fa-sliders"></i>
                                                        <atr data-translation="ortho"></atr>
                                                    </a>
                                                </li>
                                                <li><a href="../html/dental-specialities.html"><i
                                                            class="fa-solid fa-tooth"></i>
                                                        <atr data-translation="otherSpecialities"></atr>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="NavBarLinksLi">
                                        <div class="NavBarLinksLiClick">
                                            <a href="#"><i class="fa-solid fa-plus"></i>
                                                <atr data-translation="inputs"></atr>
                                                <i class="fa-solid fa-chevron-down submenu-arrow-down"></i>
                                            </a>
                                        </div>
                                        <div class="nav-submenu-I">
                                            <ul>
                                                <li><a href="../html/new-registration.html">
                                                        <i class="fa-solid fa-plus"></i>
                                                        <atr data-translation="personalData"></atr>
                                                    </a>
                                                </li>
                                                <li><a href="../html/statics.html">
                                                        <i class="fa-solid fa-chart-column"></i>
                                                        <atr data-translation="MonStaticInput"></atr>
                                                    </a>
                                                </li>
                                                <li><a href="../html/healthEduStaticInput.html">
                                                        <i class="fa-solid fa-book-open-reader"></i>
                                                        <atr data-translation="MonHEInput"></atr>
                                                    </a>
                                                </li>
                                                <li><a href="../html/med-sup-in.html">
                                                        <i class="fa-solid fa-cart-plus"></i>
                                                        <atr data-translation="dentSupplyInput"></atr>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="nav-end">
                        <ul>
                            <li class="mobileOnly">
                                <a href="../html/signin.html">
                                    <i class="fa-solid fa-right-to-bracket"></i>
                                    <h6>
                                        <atr data-translation="login"></atr>
                                    </h6>
                                </a>
                            </li>
                            <li id="translateEn">
                                <a id="languageSelectorEn" href="#">
                                    <i class="fa-solid fa-globe"></i>
                                    <h6>
                                        <atr data-translation="english"></atr>
                                    </h6>
                                    <span class="tooltipNavEnd">
                                        <atr data-translation="english"></atr>
                                    </span>
                                </a>
                            </li>
                            <li id="translateEn">
                                <a id="languageSelectorAr" href="#">
                                    <i class="fa-solid fa-globe"></i>
                                    <h6>
                                        <atr data-translation="arabic"></atr>
                                    </h6>
                                    <span class="tooltipNavEnd">
                                        <atr data-translation="arabic"></atr>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" id="dark-mode">
                                    <i class="fa-solid fa-circle-half-stroke"></i>
                                    <h6>
                                        <atr data-translation="mode"></atr>
                                    </h6>
                                    <span class="tooltipNavEnd">
                                        <atr data-translation="mode"></atr>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>
<div class="mt-5 d-block d-md-none" style="height: 25px;"></div>

<!-- ====================================== PreLoader ======================================== -->
<div class="loader" id="preLoader">
    <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
    </div>
</div>


</div>
`;
document.getElementById('PADHANavBar').innerHTML = PADHANavBar;


let PADHAFooter = `
<div>


<!-- ===================== Last Row ============================================= -->
<div id="lastRow" class="container mobile-padding">
    <hr class="last-row-hr">
    <div class="last-row">
        <h6><i class="fa-solid fa-pen-to-square"></i>
            <atr data-translation="lastModofied"></atr><span id="lastModified"></span>
        </h6>
        <h6><i class="fa-solid fa-eye"></i>
            <atr data-translation="visitorRate"></atr><span id="websiteCounter"></span>
        </h6>
    </div>
</div>

<!-- ===================== about us ============================================= -->
<section class="aboutus" id="aboutus">
    <div class="container mobile-padding">
        <div class="row g-4">
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="footer-col">
                    <h5>
                        <atr data-translation="sectors"></atr>
                    </h5>
                    <div class="list-group">
                        <a href="../html/Specialists.html" class="list-group-flush">
                            <i class="fa-solid fa-user-doctor"></i>
                            <atr data-translation="specialists"></atr>
                        </a>
                        <a href="../html/dental-specialities.html" class="list-group-flush">
                            <i class="fa-solid fa-tooth"></i>
                            <atr data-translation="specialities"></atr>
                        </a>
                        <a href="../html/hospitals.html" class="list-group-flush">
                            <i class="fa-solid fa-bed-pulse"></i>
                            <atr data-translation="hospitals"></atr>
                        </a>
                        <a href="../html/centers.html" class="list-group-flush">
                            <i class="fa-solid fa-hospital"></i>
                            <atr data-translation="centers"></atr>
                        </a>
                        <a href="../html/theraputic-units.html" class="list-group-flush">
                            <i class="fa-solid fa-hospital-user"></i>
                            <atr data-translation="theraUnits"></atr>
                        </a>
                        <a href="../html/protective-units.html" class="list-group-flush">
                            <i class="fa-solid fa-hospital-user"></i>
                            <atr data-translation="protUnits"></atr>
                        </a>
                        <a href="../html/sector_Public_health.html" class="list-group-flush">
                            <i class="fa-solid fa-book-open-reader"></i>
                            <atr data-translation="healthEducation"></atr>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 d-none d-sm-block"">
                <div class="footer-col">
                    <h5>
                        <atr data-translation="impSites"></atr>
                    </h5>
                    <div class="list-group">
                        <a href="https://www.who.int/home" class="list-group-flush" target="_blank"><i
                                class="fas fa-globe-africa"></i>
                            <atr data-translation="who"></atr>
                        </a>
                        <a href="http://www.mohp.gov.eg/" class="list-group-flush" target="_blank"><i
                                class="fas fa-globe-africa"></i>
                            <atr data-translation="egyMOH"></atr>
                        </a>
                        <a href="https://www.facebook.com/egypt.mohp" class="list-group-flush" target="_blank"><i
                                class="fas fa-globe-africa"></i>
                            <atr data-translation="egyMOHFB"></atr>
                        </a>
                        <a href="https://egcovac.mohp.gov.eg" class="list-group-flush" target="_blank"><i
                                class="fas fa-globe-africa"></i>
                            <atr data-translation="covid19"></atr>
                        </a>
                        <a href="https://www.shakwa.eg/GCP/Default.aspx" class="list-group-flush" target="_blank"><i
                                class="fas fa-globe-africa"></i>
                            <atr data-translation="shakwa"></atr>
                        </a>
                        <a href="https://digital.gov.eg" class="list-group-flush" target="_blank"><i
                                class="fas fa-globe-africa"></i>
                            <atr data-translation="digitalEgy"></atr>
                        </a>
                        <a href="https://gah.gov.eg" class="list-group-flush" target="_blank"><i
                                class="fas fa-globe-africa"></i>
                            <atr data-translation="gahGov"></atr>
                        </a>
                        <a href="https://web.facebook.com/PFA.org.eg" class="list-group-flush" target="_blank"><i
                                class="fas fa-globe-africa"></i>
                            <atr data-translation="PFA"></atr>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="footer-col">
                    <h5>
                        <atr data-translation="other"></atr>
                    </h5>
                    <div class="list-group">
                        <a href="../html/message.html" class="list-group-flush">
                            <i class="fa-solid fa-message"></i>
                            <atr data-translation="vision"></atr>
                        </a>
                        <a href="../html/team.html" class="list-group-flush">
                            <i class="fas fa-users"></i>
                            <atr data-translation="team"></atr>
                        </a>
                        <a href="../html/contact.html" class="list-group-flush">
                            <i class="fas fa-headset"></i>
                            <atr data-translation="contact"></atr>
                        </a>
                        <a href="../html/terms.html" class="list-group-flush">
                            <i class="fa-solid fa-scale-balanced"></i>
                            <atr data-translation="terms"></atr>
                        </a>
                        <a href="../html/privacy.html" class="list-group-flush">
                            <i class="fas fa-shield-alt"></i>
                            <atr data-translation="privacy"></atr>
                        </a>
                        <a href="../html/FQA.html" class="list-group-flush">
                            <i class="fa-solid fa-circle-question"></i>
                            <atr data-translation="fqa"></atr>
                        </a>
                        <a href="../html/signin.html" class="list-group-flush">
                            <i class="fas fa-sign-in-alt"></i>
                            <atr data-translation="login"></atr>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-6 d-none d-sm-block"">
                <div class="footer-col footer-col-last">
                    <h5>
                        <atr data-translation="address"></atr>
                    </h5>
                    <div>
                        <p>
                            <atr data-translation="addressContent"></atr>
                        </p>

                        <!-- ============================================= location on google map ============================================= -->
                        <iframe class="location-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.48526367198!2d29.935860215058764!3d31.207282569657576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c55357870ca7%3A0x6642ec46082c000b!2z2YXYr9mK2LHZitipINin2YTYtNim2YjZhiDYp9mE2LXYrdmK2Kkg2KjYp9mE2KXYs9mD2YbYr9ix2YrYqQ!5e0!3m2!1sen!2seg!4v1636804903889!5m2!1sen!2seg"
                            allowfullscreen="" loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="social-media-footer">
                <a href="https://facebook.com/padha.moh.eg" target="_blank">
                    <i class="fa-brands fa-facebook"></i>
                    <p>
                        <atr data-translation="facebook"></atr>
                    </p>
                </a>
                <a href="https://instagram.com/padha.moh.eg" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                    <p>
                        <atr data-translation="instagram"></atr>
                    </p>
                </a>
                <a href="https://www.youtube.com/user/padha.moh.eg" target="_blank">
                    <i class="fa-brands fa-youtube"></i>
                    <p>
                        <atr data-translation="youtube"></atr>
                    </p>
                </a>
                <a href="https://api.whatsapp.com/send?phone=201009457385&app=facebook&entry_
                point=page_cta&fbclid=IwAR3OdRZN4x5atRtsbe8g4R1KwvKJwEQRoElQYXXwrrDwmm7ts7MxsUAsC7g"
                    target="_blank"><i class="fa-brands fa-whatsapp"></i>
                    <p>
                        <atr data-translation="whatsapp"></atr>
                    </p>
                </a>
                <a href="https://t.me/padha_moh_eg" target="_blank">
                    <i class="fa-brands fa-telegram"></i>
                    <p>
                        <atr data-translation="telegram"></atr>
                    </p>
                </a>
                <a href="mailto:padha.moh.eg@gmail.com" target="_blank">
                    <i class="fa-solid fa-envelope"></i>
                    <p>
                        <atr data-translation="gmail"></atr>
                    </p>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- ================= === trademark ============================================ -->
<section class="trademark d-none d-md-block">
    <nav class="navbar navbar-light">
        <div class="container">
            <p>&#169; <atr data-translation="trademark"></atr>
            </p>
            <p>
                <atr data-translation="developed"></atr><a class="callisign"
                    href="https://www.facebook.com/callisign.art">
                    &#169; <atr data-translation="callisign"></atr>
                </a>
            </p>
        </div>
    </nav>
</section>

<!-- ===================== trademark mobile xs ================================== -->
<section class="trademark-xs d-block d-md-none">
    <div class="container">
        <div>
            <p>&#169; <atr data-translation="trademark"></atr>
            </p>
            <p>
                <atr data-translation="developed"></atr><a class="callisign"
                    href="https://www.facebook.com/callisign.art">
                    &#169; <atr data-translation="callisign"></atr>
                </a>
            </p>
        </div>
    </div>
</section>

<!-- ===================== News Bar ============================================= -->
<div id="NewsBar" class="ticker-bg">
    <div class="container mobile-padding">
        <div class="ticker-wrapper-h">
            <div class="heading">
                <i class="fa-solid fa-location-dot"></i>
                <atr data-translation="news"></atr>
            </div>
            <ul class="news-ticker-h">
                <li><a href=""><i class="fa-solid fa-award mr-1 ml-3"></i></a></li>
                <li><a href="../html/message.html">
                        <atr data-translation="vision"></atr>
                    </a></li>
                <li><a href=""><i class="fa-solid fa-angle-double-right"></i></a></li>
                <li><a href="../html/message.html">
                        <atr data-translation="visionContent"></atr>
                    </a></li>
                <li><a href=""><i class="fa-solid fa-award mr-1 ml-3"></i></a></li>
                <li><a href="../html/message.html">
                        <atr data-translation="mission"></atr>
                    </a></li>
                <li><a href=""><i class="fa-solid fa-angle-double-right"></i></a></li>
                <li><a href="../html/message.html">
                        <atr data-translation="missionContent"></atr>
                    </a></li>
            </ul>
        </div>
    </div>
</div>




</div>

`;
document.getElementById('PADHAFooter').innerHTML = PADHAFooter;

let specialistsFilter = `

<div id="perioFilter" onclick="filterSelection('perio')"></div>
<div id="pedoFilter" onclick="filterSelection('pedo')"></div>
<div id="pathologyFilter" onclick="filterSelection('pathology')"></div>
<div id="fixedFilter" onclick="filterSelection('fixed')"></div>
<div id="endoFilter" onclick="filterSelection('endo')"></div>
<div id="orthoFilter" onclick="filterSelection('ortho')"></div>
<div id="operativeFilter" onclick="filterSelection('operative')"></div>
<div id="prosthesisFilter" onclick="filterSelection('prosthesis')"></div>
<div id="infectionCotrolFilter" onclick="filterSelection('infectionCotrol')"></div>
<div id="hosManFilter" onclick="filterSelection('hosMan')"></div>
<div id="pedoFilter" onclick="filterSelection('pedo')"></div>
<div id="maxilloFilter" onclick="filterSelection('maxillo')"></div>
<div id="implantFilter" onclick="filterSelection('implant')"></div>
<div id="radiologyFilter" onclick="filterSelection('radiology')"></div>
<div id="publicHealthFilter" onclick="filterSelection('publicHealth')"></div>
<div id="qualityFilter" onclick="filterSelection('Squality')"></div>
<div id="implantFilter" onclick="filterSelection('Simplant')"></div>


<div id="adrcFilter" onclick="filterSelection('adrc')"></div>
<div id="mbdcFilter" onclick="filterSelection('mbdc')"></div>
<div id="aboqirFilter" onclick="filterSelection('aboqir')"></div>
<div id="sadrMamoraFilter" onclick="filterSelection('sadrMamora')"></div>
<div id="alramlKidsFilter" onclick="filterSelection('alramlKids')"></div>
<div id="alhomieatFilter" onclick="filterSelection('alhomieat')"></div>
<div id="alramadFilter" onclick="filterSelection('alramad')"></div>
<div id="fawzyMoazFilter" onclick="filterSelection('fawzyMoaz')"></div>
<div id="algomhoriaFilter" onclick="filterSelection('algomhoria')"></div>
<div id="alanfoshieKidsFilter" onclick="filterSelection('alanfoshieKids')"></div>
<div id="rasaltinFilter" onclick="filterSelection('rasaltin')"></div>
<div id="gamalHamadaFilter" onclick="filterSelection('gamalHamada')"></div>
<div id="alamriyaHospitalFilter" onclick="filterSelection('alamriyaHospital')"></div>
<div id="borgAlarabFilter" onclick="filterSelection('borgAlarab')"></div>

<div class="special">
<div class="specialityFilter pathology adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pathology_HalaSalah"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pathology"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pathology ">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pathology_AhmadMoharram"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pathology"></atr>
        </h5>
        <p>
            <atr data-translation="east_matar"></atr>
        </p>
    </div>
</div>

<div class="specialityFilter perio adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="perio_AymanShousha"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="perio"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter perio adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="perio_DaniaSaleh"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="perio"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter perio adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="perio_GhadaReda"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="perio"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter perio adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="perio_SaharIbrahim"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="perio"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter perio adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="perio_ShimaaEzzat"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="perio"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter perio adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="perioAbdollatif"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="perio"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter perio adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="perio_MohamedHelmy"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="perio"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter perio adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="perio_MarwaGebril"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="perio"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter perio adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="perio_MonaElMahdy"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="perio"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter perio mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="perio_TarekFoad"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="perio"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter perio mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="perio_SilviaFarid"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="perio"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter perio aboqir">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="perio_MahmoudHassan"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="perio"></atr>
        </h5>
        <p>
            <atr data-translation="aboQir"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter perio alramlKids">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="perio_HebaAwad"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="perio"></atr>
        </h5>
        <p>
            <atr data-translation="alramlKids"></atr>
        </p>
    </div>
</div>

<div class="specialityFilter fixed adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="fixed_HananHussien"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="fixedProsth"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter fixed adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="fixed_KamieliaSabry"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="fixedProsth"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter fixed adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="fixed_MahinourYoursi"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="fixedProsth"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter fixed adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="fixed_MoMogahid"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="fixedProsth"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter fixed adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="fixed_MostafaHassan"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="fixedProsth"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter fixed adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="fixed_NouhaSalah"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="fixedProsth"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter fixed alramlKids">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="fixed_SamarFarag"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="fixedProsth"></atr>
        </h5>
        <p>
            <atr data-translation="alramlKids"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter fixed alramlKids">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="fixed_LamiaaHelmi"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="fixedProsth"></atr>
        </h5>
        <p>
            <atr data-translation="alramlKids"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter fixed east_abisII">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="fixed_AhmedYousse"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="fixedProsth"></atr>
        </h5>
        <p>
            <atr data-translation="east_abisII"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter fixed east_smoha">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="fixed_HasanFahmy"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="fixedProsth"></atr>
        </h5>
        <p>
            <atr data-translation="east_smoha"></atr>
        </p>
    </div>
</div>

<!--Endodontics-->
<div class="specialityFilter endo adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="endo_AliaaRefaat"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="endo"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter endo mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="endo_RiemWael"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="endo"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter endo mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="endo_MoAbdelfattah"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="endo"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter endo mo_mandara">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="endo_ShimaaAwad"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="endo"></atr>
        </h5>
        <p>
            <atr data-translation="mo_mandara"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter endo mo_derbala">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="endo_NirmienNabil"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="endo"></atr>
        </h5>
        <p>
            <atr data-translation="mo_derbala"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter endo">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="endo_OmarElAzab"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="endo"></atr>
        </h5>
        <p>
            <atr data-translation="borg_Village18"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter endo alramlKids">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="endo_HalaFarouk"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="endo"></atr>
        </h5>
        <p>
            <atr data-translation="alramlKids"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter endo">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="endo_MoDiab"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="endo"></atr>
        </h5>
        <p>
            <atr data-translation="east_bakous"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter endo">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="endo_Jaklien"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="endo"></atr>
        </h5>
        <p>
            <atr data-translation="east_sanstefano"></atr>
        </p>
    </div>
</div>

<!--Orthodontics-->
<div class="specialityFilter ortho adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="ortho_RaniaAmin"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="ortho"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter ortho adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="ortho_NirminMohanad"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="ortho"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter ortho mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="ortho_Bosin"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="ortho"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>

<!--Operative Dentistry-->
<div class="specialityFilter operative adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="op_OmniaFawzy"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="operative"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter operative adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="op_RandalElshafey"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="operative"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter operative adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="op_SherienBahnasy"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="operative"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter operative adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="op_NirminAlsharief"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="operative"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter operative adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="op_HagarMekkawy"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="operative"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter operative mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="op_AlaaEltaweel"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="operative"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter operative mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="op_OmniaAlalfy"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="operative"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter operative mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="op_SalyNazzir"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="operative"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter operative mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="op_HebaAlZieny"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="operative"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter operative rasaltin">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="op_BasmaMourad"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="operative"></atr>
        </h5>
        <p>
            <atr data-translation="rasaltin"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter operative">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="op_DinaMagdy"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="operative"></atr>
        </h5>
        <p>
            <atr data-translation="gomrok_gomrok"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter operative">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="op_MaramHasan"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="operative"></atr>
        </h5>
        <p>
            <atr data-translation="gomrok_monaiier"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter operative">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="op_YousraHussien"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="operative"></atr>
        </h5>
        <p>
            <atr data-translation="mo_sidiBishr"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter operative">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="op_BervinSharaf"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="operative"></atr>
        </h5>
        <p>
            <atr data-translation="east_matar"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter operative">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="op_LielaFaiyd"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="operative"></atr>
        </h5>
        <p>
            <atr data-translation="east_bakous"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter operative">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="op_SamarGamal"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="operative"></atr>
        </h5>
        <p>
            <atr data-translation="east_sanstefano"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter operative">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="op_NisrinHarhash"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="operative"></atr>
        </h5>
        <p>
            <atr data-translation="east_smoha"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter operative algomhoria">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="op_BasantKhalil"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="operative"></atr>
        </h5>
        <p>
            <atr data-translation="algomhoria"></atr>
        </p>
    </div>
</div>

<!--Rempvable Prosthesis-->
<div class="specialityFilter prosthesis adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_RaniaAbdullah"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_FatenHelmy"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_YasmineAli"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_HananAbdelhamid"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_MostafaElkomy"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_SaharKamal"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="amria_Nasriya"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_MoElbaradey"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="mo_riefia"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_GhadaTawfiq"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="mo_amrawy"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_NirminSehly"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="borg_MC"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_HagarMostafa"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="borg_MC"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis alramlKids">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_TahanyQadieb"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="alramlKids"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis alramlKids">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_JailanAhmed"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="alramlKids"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis alramlKids">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_SelviaSamy"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="alramlKids"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_AhmedZakaria"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="east_sanstefano"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_JihanAli"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="east_sanstefano"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis algomhoria">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_ShamsAlGhorob"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="algomhoria"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_ImanIbrahim"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="west"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis alramad">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_MarwaAbdelbaset"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="alramad"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_NadaAlaa"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="mid_abisX"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter prosthesis">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="prosth_HalaAbdelSalam"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="prosthesis"></atr>
        </h5>
        <p>
            <atr data-translation="mid_abisVIII"></atr>
        </p>
    </div>
</div>

<!--Hospital Managment-->
<div class="specialityFilter hosMan mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="hosMan_AmalNagy"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="hosMan"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter hosMan mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="hosMan_ImanAbdelMonem"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="hosMan"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter hosMan">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="hosMan_MinaAdel"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="hosMan"></atr>
        </h5>
        <p>
            <atr data-translation="amria_Nasriya"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter hosMan">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="hosMan_BassantAlGharabawy"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="hosMan"></atr>
        </h5>
        <p>
            <atr data-translation="amria_Hawariya"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter hosMan">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="hosMan_MohamedWael"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="hosMan"></atr>
        </h5>
        <p>
            <atr data-translation="amria_Sanad"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter hosMan">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="hosMan_WalaaHasan"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="hosMan"></atr>
        </h5>
        <p>
            <atr data-translation="sadrMamora"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter hosMan">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="hosMan_FarahShazly"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="hosMan"></atr>
        </h5>
        <p>
            <atr data-translation="east_abisI"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter hosMan">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="hosMan_IsraaAbdelHady"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="hosMan"></atr>
        </h5>
        <p>
            <atr data-translation="mid_abisVII"></atr>
        </p>
    </div>
</div>

<!--Infection Control-->
<div class="specialityFilter infectionCotrol">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="inf_OlaAbdelrahim"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="infectionCotrol"></atr>
        </h5>
        <p>
            <atr data-translation="directorate"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter infectionCotrol adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="inf_RababGalal"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="infectionCotrol"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter infectionCotrol adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="inf_SamarMansour"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="infectionCotrol"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter infectionCotrol mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="inf_DoniaSamir"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="infectionCotrol"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter infectionCotrol alramlKids">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="inf_HananHussien"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="infectionCotrol"></atr>
        </h5>
        <p>
            <atr data-translation="alramlKids"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter infectionCotrol">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="inf_SaraNahhas"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="infectionCotrol"></atr>
        </h5>
        <p>
            <atr data-translation="east"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter infectionCotrol">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="inf_ManarHasan"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="infectionCotrol"></atr>
        </h5>
        <p>
            <atr data-translation="east_bakous"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter infectionCotrol">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="inf_AmanyIsmaiel"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="infectionCotrol"></atr>
        </h5>
        <p>
            <atr data-translation="mid_moharrambiek"></atr>
        </p>
    </div>
</div>

<!--Implant-->
<div class="specialityFilter implant adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="implant_MahmoudGamal"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="implant"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter implant adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="implant_MahmoudAbdelsattar"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="implant"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter implant">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="implant_MahmoudGabr"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="implant"></atr>
        </h5>
        <p>
            <atr data-translation="borg_ِAboZahra"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter implant">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="implant_ImanShady"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="implant"></atr>
        </h5>
        <p>
            <atr data-translation="west_Karantiena"></atr>
        </p>
    </div>
</div>

<!--Public Health-->
<div class="specialityFilter publicHealth">
    <div class="specialities-pic">
        <img src="../Images/publicHealth_Inas.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pH_InasAlHussieny"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="publicHealth"></atr>
        </h5>
        <p>
            <atr data-translation="directorate"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter publicHealth adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pH_AmalRamadan"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="publicHealth"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter publicHealth adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pH_SohairZaied"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="publicHealth"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter publicHealth adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pH_MonaDesoky"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="publicHealth"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter publicHealth adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pH_MeriamSaad"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="publicHealth"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter publicHealth mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pH_AlShaimaaOmar"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="publicHealth"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter publicHealth mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pH_SherihaIbrahim"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="publicHealth"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter publicHealth mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pH_GhadaNabil"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="publicHealth"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter publicHealth">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pH_ImanAlghannam"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="publicHealth"></atr>
        </h5>
        <p>
            <atr data-translation="gomrok_monaiier"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter publicHealth">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pH_OlaIbrahim"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="publicHealth"></atr>
        </h5>
        <p>
            <atr data-translation="mo_amrawy"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter publicHealth alramlKids">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pH_NivienHelmy"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="publicHealth"></atr>
        </h5>
        <p>
            <atr data-translation="alramlKids"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter publicHealth">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pH_IsraaSoliman"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="publicHealth"></atr>
        </h5>
        <p>
            <atr data-translation="east_matar"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter publicHealth">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pH_RaniaSalah"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="publicHealth"></atr>
        </h5>
        <p>
            <atr data-translation="east_smoha"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter publicHealth">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pH_MariamAdly"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="publicHealth"></atr>
        </h5>
        <p>
            <atr data-translation="east"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter publicHealth">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pH_AlShaimaaAtia"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="publicHealth"></atr>
        </h5>
        <p>
            <atr data-translation="mid_hadaraqebli"></atr>
        </p>
    </div>
</div>

<div class="specialityFilter pedo adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_AmiraFathi"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar.png" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_GamalElDien"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_DaliaOsama"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_DinaAlShafey"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_RaniaAlshweikh"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_ShahendaSeliem"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_ShahendaMostafa"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_HagarYousry"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_HebaAlDesoky"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_Wasiema"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo adrc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_YoumnaMaged"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="adrc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_OmniaGaber"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_AmiraGaber"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_RihamHassan"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_AbeerMenhaly"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo mbdc">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_NohaYousry"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="mbdc"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo sadrMamora">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_BasmaRoshdy"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="sadrMamora"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_SaharSharawa"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="mo_amrawy"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo alramlKids">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_DinaAlDesoky"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="alramlKids"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_KarimNabil"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="east_sanstefano"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_MonaZaghlol"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="mid_hadaraqebli"></atr>
        </p>
    </div>
</div>
<div class="specialityFilter pedo alanfoshieKids">
    <div class="specialities-pic">
        <img src="../Images/avatar-female.jpg" alt="">
        <i class="fa-solid fa-graduation-cap speciality-enter"></i>
    </div>
    <div class="specialities-name">
        <h6>
            <atr data-translation="pedo_SaraAlhangour"></atr>
        </h6>
        <h5>
            <atr data-translation="specialist"></atr>
            <atr data-translation="pedo"></atr>
        </h5>
        <p>
            <atr data-translation="alanfoshieKids"></atr>
        </p>
    </div>
</div>
</div>
`;
document.getElementById('specialistsFilter').innerHTML = specialistsFilter;

