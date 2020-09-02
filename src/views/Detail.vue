<template>
  <div>
    <!-- bradcam_area_start -->
    <div class="bradcam_area breadcam_bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="bradcam_text text-center">
              <h3>About Me</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- bradcam_area_end -->
    <!-- service_area_start  -->
    <div class="service_area">
      <div class="container">
        <!-- pet_care_area_start  -->
        <div class="pet_care_area" id="animalInf">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-5 col-md-6">
                <div class="pet_thumb">
                  <img
                    width="200"
                    v-bind:src="$route.params.albumFile"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-6 offset-lg-1 col-md-6">
                <div class="pet_info">
                  <div class="section_title">
                    <!--<h3>
                                        <span>We care your pet </span> <br>
                                        As you care
                                    </h3>-->
                    <!--入所天數：{{}} Now - animal_createtime-->
                    <!--晶片號碼：{{}}
                                    進所原因：{{}}-->
                    <p>入所日期：{{ $route.params.createtime }}</p>
                    <!--<p>是否開放認領養：{{}}適合認養</p>-->
                    <p>
                      收容編號：{{ $route.params.subID
                      }}<br />(若要收養請複製此編號)
                    </p>
                    <p>動物別：{{ $route.params.kind }}</p>
                    <!--<p>動物品種：混種貓</p>-->
                    <p>毛色：{{ $route.params.colour }}</p>
                    <!--<p>來源行政區：{{}}animal_area_pkid →</p>-->
                    <p>
                      動物性別：{{
                        $route.params.sex == "M"
                          ? "公"
                          : $route.params.sex == "F"
                          ? "母"
                          : "未輸入"
                      }}
                    </p>
                    <!--<p>動物名：{{}}</p>-->

                    <p>公告收容所：{{ $route.params.place }}</p>
                    <p>收容所電話：{{ $route.params.shelterTel }}</p>
                    <p>收容所地址：{{ $route.params.shelterAddress }}</p>
                    <p>描述：{{ $route.params.remark }}</p>

                    <p>
                      <!-- class="boxed-btn3" -->
                      <a
                        href="https://asms.coa.gov.tw/AmlApp/Admin_A01/OutApplyEdit.aspx"
                        target="_blank"
                        >我要領養</a>
                    </p>
                        <p>
                      <router-link to="/">回查詢</router-link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- pet_care_area_end  -->
      </div>
    </div>
    <!-- service_area_end -->
  </div>
</template>
<script>
export default {};
</script>
