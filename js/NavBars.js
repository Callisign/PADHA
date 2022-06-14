let PADHANavBar = `

<div>


<!-- ==================================== moveUpButton ======================================= -->
<a id="upAndDown" onclick="topFunction()"><i class="fa-solid fa-angle-up"></i></a>


<!-- ==================================== Third Nav Bar ====================================== -->
<div id="topNav" class="top-nav">
    <div class="container">
        <div class="top-nav-content">
            <div class="left">
                <a href="../html/FQA.html"><i class="fa-solid fa-circle-question"></i>FQA</a>
            </div>
            <div class="center">
                <a id="date"></a>
            </div>
            <div class="right">
                <a href="../html/signin.html" class="logIn"><i
                        class="fa-solid fa-arrow-right-to-bracket"></i>Login</a>
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
                <h5>Public Administration<br>of Dental Health in Alex</h5>
            </a>
        </div>
        <div class="search-btn">
            <a href="../html/generalStatics.html">
                <i class="fa-solid fa-chart-column padha-in-numbers"></i>
                <span class="tooltipSocial">PADHA in Numbers</span>
            </a>
            <a href="../html/downloads.html">
                <i class="fa-solid fa-arrow-down download"></i>
                <span class="tooltipSocial">Download PDF Files</span>
            </a>

            <a href="https://facebook.com/padha.moh.eg">
                <i class="fa-brands fa-facebook-f facebook"></i>
                <span class="tooltipSocial">Follow Us on Facebook</span>
            </a>
            <a href="https://instagram.com/padha.moh.eg">
                <i class="fa-brands fa-instagram instagram"></i>
                <span class="tooltipSocial">Follow Us on Instagram</span>
            </a>
            <a href="https://www.youtube.com/user/padha.moh.eg">
                <i class="fa-brands fa-youtube youtube"></i>
                <span class="tooltipSocial">Subscribe on Youtube</span>
            </a>
            <a href="https://api.whatsapp.com/send?phone=201009457385&app=facebook&entry_
                            point=page_cta&fbclid=IwAR3OdRZN4x5atRtsbe8g4R1KwvKJwEQRoElQYXXwrrDwmm7ts7MxsUAsC7g"><i
                    class="fa-brands fa-whatsapp whatsapp"></i>
                <span class="tooltipSocial">Contact us via Whatsapp</span>
            </a>
            <a href="https://t.me/padha_moh_eg">
                <i class="fa-solid fa-paper-plane telegram"></i>
                <span class="tooltipSocial">Contact us via Telegram</span>
            </a>
            <a href="mailto:padha.moh.eg@gmail.com">
                <i class="fa-solid fa-envelope gmail"></i>
                <span class="tooltipSocial">Contact us via G-mail</span>
            </a>
            <a href="../html/search.html"><i class="fa-solid fa-magnifying-glass"></i></a>
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
                                <h4>PADHA</h4>
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
                                    <li class="NavBarMenuList">
                                        <a href="#">
                                            <i class="fa-solid fa-circle-info"></i>About
                                            <i class="fa-solid fa-chevron-down submenu-arrow-down"></i>
                                        </a>
                                        <div class="nav-submenu-I">
                                            <ul>
                                                <li><a href="../html/message.html">
                                                        <i class="fa-solid fa-message"></i>Vission</a></li>
                                                <li><a href="../html/team.html"><i
                                                            class="fa-solid fa-users"></i>Team</a></li>
                                                <li><a href="../html/contact.html"><i
                                                            class="fa-solid fa-phone"></i>Contact</a>
                                                <li><a href="../html/terms.html"><i
                                                            class="fa-solid fa-scale-balanced"></i>Terms</a>
                                                </li>
                                                <li><a href="../html/privacy.html"><i
                                                            class="fa-solid fa-shield"></i>Privacy</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>
                                    <li class="NavBarMenuList">
                                        <a href="#"><i class="fa-solid fa-photo-film"></i>Media
                                            <i class="fa-solid fa-chevron-down submenu-arrow-down"></i>
                                        </a>
                                        <div class="nav-submenu-I">
                                            <ul>
                                                <li class="NavBarMenuListII">
                                                    <a href="../html/media.html">
                                                        <i class="fa-solid fa-photo-film"></i>All Media
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa-solid fa-images"></i>Photos
                                                    </a>
                                                </li>
                                                <li class="NavBarMenuListII">
                                                    <a href="#">
                                                        <i class="fa-solid fa-film"></i>Videos
                                                    </a>
                                                </li>
                                                <li class="NavBarMenuListII">
                                                    <a href="#">
                                                        <i class="fa-solid fa-microphone"></i>Sounds
                                                    </a>
                                                </li>
                                                <li class="NavBarMenuListII">
                                                    <a href="#">
                                                        <i class="fa-solid fa-rss"></i>News
                                                    </a>
                                                </li>
                                                <li class="NavBarMenuListII">
                                                    <a href="#">
                                                        <i class="fa-solid fa-file-lines"></i>Articles
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="NavBarMenuList">
                                        <a href="#"><i class="fa-solid fa-list-check"></i>Sectors<i
                                                class="fa-solid fa-chevron-down submenu-arrow-down"></i>
                                        </a>
                                        <div class="nav-submenu-I">
                                            <ul>
                                                <li>
                                                    <a href="../html/specialists.html">
                                                        <i class="fa-solid fa-user-doctor"></i>Specialists</a>
                                                </li>
                                                <li>
                                                    <a href="../html/units-and-hospitals.html">
                                                        <i class="fa-solid fa-hospital"></i>Units & Hospitals
                                                        <i class="fa-solid fa-angle-right nav-link-arrow"></i>
                                                    </a>
                                                    <div class="nav-submenu-II ">
                                                        <ul>
                                                            <li><a href="../html/hospitals.html"><i
                                                                        class="fa-solid fa-bed-pulse"></i>Hospitals</a>
                                                            </li>
                                                            <li><a href="../html/centers.html">
                                                                    <i class="fa-solid fa-hospital"></i>Centers</a>
                                                            </li>
                                                            <li><a href="../html/protective-units.html">
                                                                    <i class="fa-solid fa-hospital-user"></i>
                                                                    Protective Units</a>
                                                            </li>
                                                            <li><a href="../html/theraputic-units.html">
                                                                    <i class="fa-solid fa-hospital-user"></i>
                                                                    Theraputic Units</a>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="../html/dental-specialities.html"><i
                                                            class="fa-solid fa-tooth"></i>Specialities
                                                        <i class="fa-solid fa-angle-right nav-link-arrow"></i>
                                                    </a>
                                                    <div class="nav-submenu-II ">
                                                        <ul>
                                                            <li><a href="../html/pedodontics.html"><i
                                                                        class="fa-solid fa-tooth"></i>Pedodontics</a>
                                                            </li>
                                                            <li><a href="../html/public-health.html"><i
                                                                        class="fa-solid fa-tooth"></i>Public
                                                                    Health</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>
                                    <li class="NavBarMenuList">
                                        <a href="#"><i class="fa-solid fa-bars"></i>Others<i
                                                class="fa-solid fa-chevron-down submenu-arrow-down"></i>
                                        </a>
                                        <div class="nav-submenu-I">
                                            <ul>
                                                <li><a href="../html/downloads.html">
                                                        <i class="fa-solid fa-arrow-down"></i>Downloads</a></li>
                                                <li><a href="../html/generalStatics.html">
                                                        <i class="fa-solid fa-chart-column"></i>PADHA
                                                        Statics</a>
                                                </li>
                                                <li><a href="../html/dental-specialities.html"><i
                                                            class="fa-solid fa-tooth"></i>Other Specialities
                                                        <i class="fa-solid fa-angle-right nav-link-arrow"></i>
                                                    </a>
                                                    <div class="nav-submenu-II ">
                                                        <ul>
                                                            <li><a href="#"><i
                                                                        class="fa-solid fa-tooth"></i>Pedodontics</a>
                                                            </li>
                                                            <li><a href="#"><i
                                                                        class="fa-solid fa-tooth"></i>Pedodontics</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="NavBarMenuList">
                                        <a href="#">
                                            <i class="fa-solid fa-user"></i>Admins
                                            <i class="fa-solid fa-chevron-down submenu-arrow-down"></i>
                                        </a>
                                        <div class="nav-submenu-I">
                                            <ul>
                                                <li><a href="../html/med-sup-in.html"><i
                                                            class="fa-solid fa-keyboard"></i>Dental
                                                        Supply</a></li>
                                                <li><a href="../html/unit-data.html"><i
                                                            class="fa-solid fa-keyboard"></i>Unit
                                                        Data</a></li>
                                                <li><a href="../html/unit-power-data.html"><i
                                                            class="fa-solid fa-keyboard"></i>Unit
                                                        Power</a>
                                                </li>
                                                <li><a href="../html/statics.html"><i
                                                            class="fa-solid fa-keyboard"></i>Static
                                                        Input</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="NavBarMenuList">
                                        <a href="#">
                                            <i class="fa-solid fa-star"></i>Me
                                            <i class="fa-solid fa-chevron-down submenu-arrow-down"></i>
                                        </a>
                                        <div class="nav-submenu-I">
                                            <ul>
                                                <li><a href="../html/search.html">
                                                        <i class="fa-solid fa-magnifying-glass"></i>Search</a>
                                                </li>
                                                <li><a href="../html/staticsOutput.html">
                                                        <i class="fa-solid fa-align-left"
                                                            style="transform: rotate(-90deg);">
                                                        </i>statics Output</a>
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
                                    <h6>Login</h6>
                                </a>
                            </li>
                            <li>
                                <a href="../html/new-registration.html">
                                    <i class="fa-solid fa-user"></i>
                                    <h6>Profile</h6>
                                    <span class="tooltipNavEnd">Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa-solid fa-globe"></i>
                                    <h6>Language</h6>
                                    <span class="tooltipNavEnd">Language</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" id="dark-mode">
                                    <i class="fa-solid fa-circle-half-stroke"></i>
                                    <h6>Mode</h6>
                                    <span class="tooltipNavEnd">Mode</span>
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


</div>
`;
document.getElementById('PADHANavBar').innerHTML = PADHANavBar;


let PADHAFooter = `
<div>

<!-- ===================== Last Row ============================================= -->

<div class="container mobile-padding">
    <hr class="last-row-hr">
    <div class="last-row">
        <h6><i class="fa-solid fa-pen-to-square"></i>
            Last Modified: <span id="lastModified"></span>
        </h6>
        <h6><i class="fa-solid fa-eye"></i>Site Visiting times: <span id="websiteCounter"></span></h6>
    </div>
</div>

<!-- ===================== about us ============================================= -->
<section class="aboutus" id="aboutus">
    <div class="container d-none d-sm-block">
        <div class="row gx-5">
            <div class="col-lg-3 col-md-4 col-sm-4">
                <div class="footer-col">
                    <h5>Dental District</h5>
                    <div class="list-group">
                        <a href="../html/montaza.html" class="list-group-flush"><i
                                class="fas fa-clinic-medical"></i>Al Montaza</a>
                        <a href="../html/east.html" class="list-group-flush"><i
                                class="fas fa-clinic-medical"></i>East</a>
                        <a href="../html/middle.html" class="list-group-flush"><i
                                class="fas fa-clinic-medical"></i>Middle</a>
                        <a href="../html/west.html" class="list-group-flush"><i
                                class="fas fa-clinic-medical"></i>West</a>
                        <a href="../html/gomrok.html" class="list-group-flush"><i
                                class="fas fa-clinic-medical"></i>Al Gomrok</a>
                        <a href="../html/agamy.html" class="list-group-flush"><i
                                class="fas fa-clinic-medical"></i>Al Agamy</a>
                        <a href="../html/amria.html" class="list-group-flush"><i
                                class="fas fa-clinic-medical"></i>Al Amriya</a>
                        <a href="../html/borg.html" class="list-group-flush"><i
                                class="fas fa-clinic-medical"></i>Borg Al Arab</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4">
                <div class="footer-col">
                    <h5>Imp Sites</h5>
                    <div class="list-group">
                        <a href="https://www.who.int/home" class="list-group-flush" target="_blank"><i
                                class="fas fa-globe-africa"></i>WHO</a>
                        <a href="http://www.mohp.gov.eg/" class="list-group-flush" target="_blank"><i
                                class="fas fa-globe-africa"></i>Egypt
                            MOH</a>
                        <a href="https://www.facebook.com/egypt.mohp" class="list-group-flush" target="_blank"><i
                                class="fas fa-globe-africa"></i>Egypt
                            MOH FB</a>
                        <a href="https://egcovac.mohp.gov.eg" class="list-group-flush" target="_blank"><i
                                class="fas fa-globe-africa"></i>CoVID-19</a>
                        <a href="https://www.shakwa.eg/GCP/Default.aspx" class="list-group-flush" target="_blank"><i
                                class="fas fa-globe-africa"></i>Shakwa</a>
                        <a href="https://digital.gov.eg" class="list-group-flush" target="_blank"><i
                                class="fas fa-globe-africa"></i>Digital Egypt</a>
                        <a href="https://gah.gov.eg" class="list-group-flush" target="_blank"><i
                                class="fas fa-globe-africa"></i>Gen A. of Healthcare</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4">
                <div class="footer-col">
                    <h5>Other</h5>
                    <div class="list-group">
                        <a href="../html/message.html" class="list-group-flush"><i class="fas fa-users"></i>Vision &
                            Mission</a>
                        <a href="../html/team.html" class="list-group-flush"><i class="fas fa-users"></i>Team
                            Board</a>
                        <a href="../html/contact.html" class="list-group-flush"><i
                                class="fas fa-headset"></i>Contact Us</a>
                        <a href="../html/privacy.html" class="list-group-flush"><i
                                class="fas fa-shield-alt"></i>Privacy & Policy</a>
                        <a href="../html/terms.html" class="list-group-flush"><i
                                class="fa-solid fa-scale-balanced"></i>
                            Terms & Conditions</a>
                        <a href="../html/signin.html" class="list-group-flush"><i
                                class="fas fa-sign-in-alt"></i>Login</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12">
                <div class="footer-col footer-col-last">
                    <h5>Address</h5>
                    <div>
                        <p>Zaki Ragab st, Ezbet Saad, Sidi Gaber<br>Alexandria Governorate,
                            Egypt.</p>
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
                <a href="https://facebook.com/padha.moh.eg" target="_blank"><i class="fa-brands fa-facebook"></i>
                    <p>Facebook</p>
                </a>
                <a href="https://instagram.com/padha.moh.eg" target="_blank"><i class="fa-brands fa-instagram"></i>
                    <p>instagram</p>
                </a>
                <a href="https://www.youtube.com/user/padha.moh.eg" target="_blank"><i
                        class="fa-brands fa-youtube"></i>
                    <p>Youtube</p>
                </a>
                <a href="https://api.whatsapp.com/send?phone=201009457385&app=facebook&entry_
                point=page_cta&fbclid=IwAR3OdRZN4x5atRtsbe8g4R1KwvKJwEQRoElQYXXwrrDwmm7ts7MxsUAsC7g"
                    target="_blank"><i class="fa-brands fa-whatsapp"></i>
                    <p>Whatsapp</p>
                </a>
                <a href="https://t.me/padha_moh_eg" target="_blank"><i class="fa-brands fa-telegram"></i>
                    <p>Telegram</p>
                </a>
                <a href="mailto:padha.moh.eg@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i>
                    <p>Gmail</p>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- ============================================= about us  mobile xs ============================================= -->
<div class="d-block d-sm-none">
    <div class="accordion accordion-flush aboutus-accordion" id="accordionFlushExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi footer-icon" viewbox="0 0 16 16">
                        <path
                            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>About Us
                </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <div class="begin-xs">
                        <p>Public Administration of Dental Health,<br>
                            Health Affairs Directorate in Alexandria,<br>
                            Ministry of Health and Population,<br>
                            Arab Republic of Egypt.</p>
                        <div class="my-4"></div>
                        <h5>Address</h5>
                        <div class="text-dark">
                            <p>Public Administration of Dental Health in Alex</p>
                            <!-- ============================================= location on google map ============================================= -->
                            <iframe class="location-map-xs"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.48526367198!2d29.935860215058764!3d31.207282569657576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c55357870ca7%3A0x6642ec46082c000b!2z2YXYr9mK2LHZitipINin2YTYtNim2YjZhiDYp9mE2LXYrdmK2Kkg2KjYp9mE2KXYs9mD2YbYr9ix2YrYqQ!5e0!3m2!1sen!2seg!4v1636804903889!5m2!1sen!2seg"
                                allowfullscreen="" loading="lazy">
                            </iframe>
                        </div>

                        <div class="d-flex justify-content-evenly social-mobile-xs">
                            <a href="https://facebook.com/padha.moh.eg" target="_blank"><i
                                    class="fa-brands fa-facebook facebook"></i>
                            </a>
                            <a href="https://instagram.com/padha.moh.eg" target="_blank"><i
                                    class="fa-brands fa-instagram instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/user/padha.moh.eg" target="_blank"><i
                                    class="fa-brands fa-youtube youtube"></i>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=201009457385&app=facebook&entry_
                                point=page_cta&fbclid=IwAR3OdRZN4x5atRtsbe8g4R1KwvKJwEQRoElQYXXwrrDwmm7ts7MxsUAsC7g"
                                target="_blank"><i class="fa-brands fa-whatsapp whatsapp"></i>
                            </a>
                            <a href="https://t.me/padha_moh_eg" target="_blank"><i
                                    class="fa-brands fa-telegram telegram"></i>
                            </a>
                            <a href="mailto:padha.moh.eg@gmail.com" target="_blank"><i
                                    class="fa-solid fa-envelope gmail"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi footer-icon" viewbox="0 0 16 16">
                        <path
                            d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001" />
                    </svg>Medical District
                </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <div class="begin-xs">
                        <h5>Dental District</h5>
                        <div class="list-gp">
                            <div class="list-group">
                                <a href="../html/montaza.html" class="list-group-flush-xs"><i
                                        class="fas fa-clinic-medical"></i>Al Montaza</a>
                                <a href="../html/east.html" class="list-group-flush-xs"><i
                                        class="fas fa-clinic-medical"></i>East</a>
                                <a href="../html/middle.html" class="list-group-flush-xs"><i
                                        class="fas fa-clinic-medical"></i>Middle</a>
                                <a href="../html/west.html" class="list-group-flush-xs"><i
                                        class="fas fa-clinic-medical"></i>West</a>
                                <a href="../html/gomrok.html" class="list-group-flush-xs"><i
                                        class="fas fa-clinic-medical"></i>Al Gomrok</a>
                                <a href="../html/agamy.html" class="list-group-flush-xs"><i
                                        class="fas fa-clinic-medical"></i>Al Agamy</a>
                                <a href="../html/amria.html" class="list-group-flush-xs"><i
                                        class="fas fa-clinic-medical"></i>Al Amriya</a>
                                <a href="../html/borg.html" class="list-group-flush-xs"><i
                                        class="fas fa-clinic-medical"></i>Borg Al Arab</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi footer-icon" viewbox="0 0 16 16">
                        <path
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                    </svg>Important Sites
                </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <div class="begin-xs">
                        <h5>Important Sites</h5>
                        <div class="list-gp">
                            <div class="list-group">
                                <a href="https://www.who.int/home" class="list-group-flush-xs" target="_blank"><i
                                        class="fas fa-globe-africa"></i>WHO</a>
                                <a href="http://www.mohp.gov.eg/" class="list-group-flush-xs" target="_blank"><i
                                        class="fas fa-globe-africa"></i>Egypt
                                    MOH</a>
                                <a href="https://www.facebook.com/egypt.mohp/?ref=br_rs" class="list-group-flush-xs"
                                    target="_blank"><i class="fas fa-globe-africa"></i>Egypt
                                    MOH FB</a>
                                <a href="https://egcovac.mohp.gov.eg" class="list-group-flush-xs" target="_blank"><i
                                        class="fas fa-globe-africa"></i>CoVID-19</a>
                                <a href="https://www.shakwa.eg/GCP/Default.aspx" class="list-group-flush-xs"
                                    target="_blank"><i class="fas fa-globe-africa"></i>Shakwa</a>
                                <a href="https://digital.gov.eg" class="list-group-flush-xs" target="_blank"><i
                                        class="fas fa-globe-africa"></i>Digital
                                    Egypt</a>
                                <a href="https://gah.gov.eg" class="list-group-flush-xs" target="_blank"><i
                                        class="fas fa-globe-africa"></i>Gen A. of
                                    Healthcare</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi footer-icon" viewbox="0 0 16 16">
                        <path
                            d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826zM8 1a1 1 0 0 0-.998 1.03l.01.091c.012.077.029.176.054.296.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a4.997 4.997 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1zM2 9l.03-.002.091-.01a4.99 4.99 0 0 0 .296-.054c.241-.049.542-.122.887-.213a60.59 60.59 0 0 0 2.314-.676L5.762 8l-.144-.045a60.59 60.59 0 0 0-2.314-.676 16.705 16.705 0 0 0-.887-.213 4.99 4.99 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2zm7 5-.002-.03a5.005 5.005 0 0 0-.064-.386 16.398 16.398 0 0 0-.213-.888 60.582 60.582 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a4.996 4.996 0 0 0-.064.386L7 14a1 1 0 1 0 2 0zm-5.696-2.134.025-.017a5.001 5.001 0 0 0 .303-.248c.184-.164.408-.377.661-.629A60.614 60.614 0 0 0 5.96 9.23l.103-.111-.147.033a60.88 60.88 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5.063 5.063 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027c.01-.02.021-.048.036-.084a5.09 5.09 0 0 0 .102-.283c.078-.233.165-.53.258-.874a60.6 60.6 0 0 0 .572-2.343l.033-.147-.11.102a60.848 60.848 0 0 0-1.743 1.667 17.07 17.07 0 0 0-.629.66 5.06 5.06 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366zm9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a4.951 4.951 0 0 0-.303.248 16.69 16.69 0 0 0-.661.629A60.72 60.72 0 0 0 10.04 6.77l-.102.111.147-.033a60.6 60.6 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a4.993 4.993 0 0 0 .367-.138.53.53 0 0 0 .027-.014zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027c-.01.02-.021.048-.036.084a5.09 5.09 0 0 0-.102.283c-.078.233-.165.53-.258.875a60.62 60.62 0 0 0-.572 2.342l-.033.147.11-.102a60.848 60.848 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5.001 5.001 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366zM14 9a1 1 0 0 0 0-2l-.03.002a4.996 4.996 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a4.996 4.996 0 0 0 .386.064L14 9zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035c.072.03.166.064.283.103.233.078.53.165.874.258a60.88 60.88 0 0 0 2.343.572l.147.033-.103-.111a60.584 60.584 0 0 0-1.666-1.742 16.705 16.705 0 0 0-.66-.629 4.996 4.996 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366zm2.196-1.196.017.025a4.996 4.996 0 0 0 .248.303c.164.184.377.408.629.661A60.597 60.597 0 0 0 6.77 5.96l.111.102-.033-.147a60.602 60.602 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5.006 5.006 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1zm9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a60.619 60.619 0 0 0-2.342-.572l-.147-.033.102.111a60.73 60.73 0 0 0 1.667 1.742c.253.252.477.465.66.629a4.946 4.946 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366zm-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5.065 5.065 0 0 0-.248-.303 16.705 16.705 0 0 0-.629-.661A60.462 60.462 0 0 0 9.23 10.04l-.111-.102.033.147a60.6 60.6 0 0 0 .572 2.342c.093.345.18.642.258.875a4.985 4.985 0 0 0 .138.367.575.575 0 0 0 .014.027zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg>Other
                </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <div class="begin-xs">
                        <h5>Other</h5>
                        <div class="list-gp">
                            <div class="list-group">
                                <a href="../html/message.html" class="list-group-flush-xs"><i
                                        class="fas fa-users"></i>Vision &
                                    Mission</a>
                                <a href="../html/team.html" class="list-group-flush-xs"><i
                                        class="fas fa-users"></i>Team
                                    Board</a>
                                <a href="../html/contact.html" class="list-group-flush-xs"><i
                                        class="fas fa-headset"></i>Contact Us</a>
                                <a href="../html/privacy.html" class="list-group-flush-xs"><i
                                        class="fas fa-shield-alt"></i>Privacy & Policy</a>
                                <a href="../html/terms.html" class="list-group-flush-xs"><i
                                        class="fa-solid fa-scale-balanced"></i>
                                    Terms & Conditions</a>
                                <a href="../html/signin.html" class="list-group-flush-xs"><i
                                        class="fas fa-sign-in-alt"></i>Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ============================================= copywrites ============================================= -->
<section class="copyrights d-none d-md-block">
    <nav class="navbar navbar-light">
        <div class="container">
            <div class="col-lg-8 col-md-12 text-lg-start text-md-center">
                <p title="Public Administration of Dental Health in Alexandria">&#169; All
                    copyrights Reserved
                    For
                    PADHA (2022)
                </p>
            </div>
            <div class="col-lg-4 col-md-12 text-lg-end text-md-center">
                <p> Developed by <a class="callisign" href="https://www.facebook.com/callisign.art">
                        &#169; Callisign Corporation</a></p>
            </div>
        </div>
    </nav>
</section>

<!-- ============================================= copywrites mobile xs ============================================= -->
<section class="copyrights-xs d-block d-md-none">

    <div class="container">
        <div class="text-center">
            <p title="Public Administration of Dental Health in Alexandria">&#169; All copyrights Reserved
                For
                PADHA (2022)
            </p>
        </div>
        <div class="text-center">
            <p> Developed by <a class="callisign" href="https://www.facebook.com/callisign.art">&#169; Callisign
                    Corporation</a></p>
        </div>
    </div>
</section>

<!-- ==================================== News Bar =========================================== -->
<div id="NewsBar" class="ticker-bg">
    <div class="container mobile-padding">
        <div class="ticker-wrapper-h">
            <div class="heading">
                <i class="fa-solid fa-location-dot mr-2"></i>News
            </div>
            <ul class="news-ticker-h">
                <li><a href=""><i class="fa-solid fa-award mr-1 ml-3"></i></a></li>
                <li><a href="../html/message.html">Vission</a></li>
                <li><a href=""><i class="fa-solid fa-angles-right"></i></a></li>
                <li><a href="../html/message.html">Our Vission is to be One of The Leading Dental Care Providers in
                        the Communities we serve. Improving Quality, Reducing the Cost of Dental Services and
                        Maintaining a Long Term Dental Health.</a></li>
                <li><a href=""><i class="fa-solid fa-award mr-1 ml-3"></i></a></li>
                <li><a href="../html/message.html">Mission</a></li>
                <li><a href=""><i class="fa-solid fa-angles-right"></i></a></li>
                <li><a href="../html/message.html">We are committed to Excellence in all of our services by
                        providing our patients with highest quality dental service in a safe comfortable
                        environment.
                        We strive to lower dental errors and educate our patients on how to live a healthy
                        lifestyle.</a></li>
                <li><a href=""><i class="fa-solid fa-award mr-1 ml-3"></i></a></li>
                <li><a href="../html/message.html">Ethics</a></li>
                <li><a href=""><i class="fa-solid fa-angles-right"></i></a></li>
                <li><a href="../html/message.html">Respect, Perfection, Durability and Efficiency</a></li>
            </ul>
        </div>
    </div>
</div>


</div>

`;
document.getElementById('PADHAFooter').innerHTML = PADHAFooter;




