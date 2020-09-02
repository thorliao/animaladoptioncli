<template>
  <div>
    <!--[if lte IE 9]>
      <p class="browserupgrade">
        You are using an <strong>outdated</strong> browser. Please
        <a href="https://browsehappy.com/">upgrade your browser</a> to improve
        your experience and security.
      </p>
    <![endif]-->
    <!-- header_start  -->
    <header>
      <div class="header-area ">
        <div class="header-top_area">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-8">
                <div class="short_contact_list">
                  <ul>
                    <!--<li><a href="#">Mon - Sat 10:00 - 7:00</a></li>-->
                  </ul>
                </div>
              </div>
              <div class="col-lg-6 col-md-4 ">
                <!-- <div class="social_media_links">
                                <a href="#">
                                    <i class="fa fa-facebook"></i>
                                </a>
                                <a href="#">
                                    <i class="fa fa-pinterest-p"></i>
                                </a>
                                </a>
                                <a href="#">
                                    <i class="fa fa-linkedin"></i>
                                </a>
                            </div> -->
              </div>
            </div>
          </div>
        </div>
        <div id="sticky-header" class="main-header-area">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-3 col-lg-3">
                <div class="logo">
                  <a href="http://rayfong.nctu.me">
                    <!--<img src="img/logo.png" alt="">-->
                    回到雷風塔首頁
                  </a>
                </div>
              </div>
              <div class="col-xl-9 col-lg-9">
                <div class="main-menu  d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><router-link to="/">首頁</router-link></li>
                      <li>
                        <a>說明 <i class="ti-angle-down"></i></a>
                        <ul class="submenu">
                          <li>
                            <a
                              href="https://asms.coa.gov.tw/AmlApp/Admin_A01/OutApplyEdit.aspx"
                              target="_blank"
                              >愛心犬貓認養須知
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-12">
                <div class="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- header_start  -->
    <div class="slider_area">
      <div class="single_slider slider_bg_1 d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-6">
              <div class="slider_text">
                <h3>
                  想要<br />
                  <span>領養一隻你的寵物嗎？</span>
                </h3>
                <p>
                  查詢你感興趣的動物朋友 <br />
                  讓牠走近你，成為你的家人吧。
                </p>
                <!--<a href="contact.html" class="boxed-btn4">Contact Us</a>-->
              </div>
            </div>
          </div>
        </div>
        <div class="dog_thumb d-none d-lg-block">
          <img src="../assets/img/banner/dog.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
