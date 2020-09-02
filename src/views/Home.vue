<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js App" />
    <!-- slider_area_end -->
    <div class="service_area">
      <!-- Start Align Area -->
      <div class="whole-wrap">
        <div class="container box_1170">
          <div class="section-top-border">
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <h3 class="mb-30">查詢條件</h3>
                <form action="#">
                  <QueryConditionAreaPkid ref="AreaPkidComponent" />
                  <QueryConditionShelter ref="ShelterComponent" />
                  <QueryConditionStatus ref="StatusComponent" />
                  <QueryConditionKind ref="KindComponent" />
                  <QueryConditionSex ref="SexComponent" />
                  <QueryConditionBodyType ref="BodyTypeComponent" />
                  <QueryConditionAge ref="AgeComponent" />
                  <QueryConditionSterilization ref="SterilizationComponent" />
                  <div class="input-group-icon mt-10">
                    <div class="submit text-right">
                      <div class="button-group-area mt-40">
                        <a
                          href="#"
                          v-on:click="loadData('submit')"
                          class="genric-btn info circle"
                          >搜尋動物</a
                        >
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <!-- QueryResult -->
      <div class="single-element-widget mt-30 text-right">
        <div class="form-select" id="countPerPage" v-if="seenCountPerPage">
          每頁筆數
          <select v-model="selected" v-on:change="onChange">
            <option value="90">90</option>
            <option
              v-for="(option, index) in options"
              v-bind:value="option.value"
              :key="index"
              >{{ option.text }}</option
            >
          </select>
        </div>
        <div id="pagination" v-if="seenPagination">
          <a href="#" v-on:click="prePage">Prev</a>資料第{{ currentPage }}頁<a
            href="#"
            v-on:click="nextPage"
            >Next</a
          >&nbsp;
        </div>
      </div>
      <div id="tblAnimals">
        <div class="row justify-content-center">
          <div
            v-for="(animal, index) in serverAnimals"
            :key="index"
            class="col-lg-4 col-md-6"
          >
            <a
              v-on:click="
                ToDetail(
                  animal.album_file,
                  animal.animal_createtime,
                  animal.animal_subid,
                  animal.animal_kind,
                  animal.animal_colour,
                  animal.animal_sex,
                  animal.animal_place,
                  animal.shelter_tel,
                  animal.shelter_address,
                  animal.animal_remark
                )
              "
            >
              <div class="single_service">
                <div
                  class="service_thumb d-flex align-items-center justify-content-center"
                >
                  <div class="album_file">
                    <img
                      width="200"
                      height="200"
                      v-bind:src="animal.album_file"
                      alt=""
                    />
                  </div>
                </div>
                <div class="service_content text-center">
                  <h3>
                    {{ animal.animal_colour
                    }}{{ animal.animal_age == "CHILD" ? "幼年" : "成年"
                    }}{{
                      animal.animal_kind == "狗" ? "犬" : animal.animal_kind
                    }}
                  </h3>
                  <p>
                    {{
                      animal.animal_bodytype == "SMALL"
                        ? "小型"
                        : animal.animal_bodytype == "MEDIUM"
                        ? "中型"
                        : "大型"
                    }}
                  </p>
                  <p>
                    {{ animal.animal_subid }}
                  </p>
                  <p>
                    性別：{{
                      animal.animal_sex == "M"
                        ? "公"
                        : animal.animal_sex == "F"
                        ? "母"
                        : "未輸入"
                    }}
                  </p>
                  <p>實際所在地：{{ animal.animal_place }}</p>
                  <p>連絡電話：{{ animal.shelter_tel }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import QueryConditionAreaPkid from "@/components/AreaPkid.vue";
import QueryConditionShelter from "@/components/Shelter.vue";
import QueryConditionStatus from "@/components/Status.vue";
import QueryConditionKind from "@/components/Kind.vue";
import QueryConditionSex from "@/components/Sex.vue";
import QueryConditionBodyType from "@/components/BodyType.vue";
import QueryConditionAge from "@/components/Age.vue";
import QueryConditionSterilization from "@/components/Sterilization.vue";
import axios from "axios";

// import "../../public/js/vendor/jquery-1.12.4.min.js"
// import "../../public/js/jquery.ajaxchimp.min.js"
// import "../../public/js/main.js"
// import "../../public/js/nice-select.min.js"
// import "../../public/js/owl.carousel.min.js"
// import "../../public/js/isotope.pkgd.min.js"
// import "../../public/js/jquery.counterup.min.js"
// import "../../public/js/scrollIt.js"
// import "../../public/js/jquery.scrollUp.min.js"
// import "../../public/js/wow.min.js"
// import "../../public/js/jquery.slicknav.min.js"
// import "../../public/js/jquery.magnific-popup.min.js"

// import "../../src/assets/static/js/vendor/jquery-1.12.4.min.js"
// import "../../src/assets/static/js/jquery.ajaxchimp.min.js"
// import "../../src/assets/static/js/main.js"
// import "../../src/assets/static/js/nice-select.min.js"
// import "../../src/assets/static/js/owl.carousel.min.js"
// import "../../src/assets/static/js/isotope.pkgd.min.js"
// import "../../src/assets/static/js/jquery.counterup.min.js"
// import "../../src/assets/static/js/scrollIt.js"
// import "../../src/assets/static/js/jquery.scrollUp.min.js"
// import "../../src/assets/static/js/wow.min.js"
// import "../../src/assets/static/js/jquery.slicknav.min.js"
// import "../../src/assets/static/js/jquery.magnific-popup.min.js"

export default {
  name: "Home",
  components: {
    Header,
    QueryConditionAreaPkid,
    QueryConditionShelter,
    QueryConditionStatus,
    QueryConditionKind,
    QueryConditionSex,
    QueryConditionBodyType,
    QueryConditionAge,
    QueryConditionSterilization,
  },
  data() {
    return {
      serverAnimals: null,
      seenCountPerPage: false,
      seenPagination: false,
      currentPage: 1,
      selected: "90",
      options: [
        { value: "300", text: "300" },
        { value: "600", text: "600" },
        { value: "900", text: "900" },
      ],
    };
  },
  methods: {
    loadData: function(type) {
      this.serverAnimals = null;
      this.seenPagination = true;
      this.seenCountPerPage = true;
      if (type === "submit") this.initial();
      const cors = "https://cors-anywhere.herokuapp.com/"; // use cors-anywhere to fetch api data
      const url =
        "https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL";
      var urlGet = "";

      if (this.$refs.StatusComponent.selected !== "")
        urlGet = url + "&animal_status=" + this.$refs.StatusComponent.selected;
      else urlGet = url;

      if (this.$refs.AreaPkidComponent.selected !== "")
        urlGet =
          urlGet + "&animal_area_pkid=" + this.$refs.AreaPkidComponent.selected;
      if (this.$refs.ShelterComponent.selected !== "")
        urlGet =
          urlGet +
          "&animal_shelter_pkid=" +
          this.$refs.ShelterComponent.selected;
      if (this.$refs.KindComponent.selected !== "")
        urlGet = urlGet + "&animal_kind=" + this.$refs.KindComponent.selected;
      if (this.$refs.SexComponent.selected !== "")
        urlGet = urlGet + "&animal_sex=" + this.$refs.SexComponent.selected;
      if (this.$refs.BodyTypeComponent.selected !== "")
        urlGet =
          urlGet + "&animal_bodytype=" + this.$refs.BodyTypeComponent.selected;
      if (this.$refs.AgeComponent.selected !== "")
        urlGet = urlGet + "&animal_age=" + this.$refs.AgeComponent.selected;
      if (this.$refs.SterilizationComponent.selected !== "")
        urlGet =
          urlGet +
          "&animal_sterilization=" +
          this.$refs.SterilizationComponent.selected;

      urlGet =
        urlGet +
        "&$top=" +
        this.selected +
        "&$skip=" +
        (this.currentPage - 1) * this.selected;
      console.log(urlGet);
      axios.get(`${cors}${urlGet}`).then((response) => {
        this.serverAnimals = response.data;
        console.log("一共 " + this.serverAnimals.length + "筆資料");
      });
    },
    ToDetail(
      album_file,
      animal_createtime,
      subID,
      animal_kind,
      animal_colour,
      animal_sex,
      animal_place,
      shelter_tel,
      shelter_address,
      animal_remark
    ) {
      this.$router.push({
        path: "detail",
        name: "Detail",
        params: {
          albumFile: album_file,
          createtime: animal_createtime,
          subID: subID,
          kind: animal_kind,
          colour: animal_colour,
          sex: animal_sex,
          place: animal_place,
          shelterTel: shelter_tel,
          shelterAddress: shelter_address,
          remark: animal_remark,
        },
      });
    },
    prePage: function() {
      if (this.currentPage > 1) this.currentPage = this.currentPage - 1;
      this.loadData();
    },
    nextPage: function() {
      this.currentPage = this.currentPage + 1;
      this.loadData();
    },
    initial: function() {
      this.selected = 90;
      this.currentPage = 1;
    },
    onChange: function() {
      this.currentPage = 1;
      this.loadData();
    },
  },
};
</script>

<style>
@import "../assets/styles/bootstrap.min.css";
@import "../assets/styles/font-awesome.min.css";
@import "../assets/styles/themify-icons.css";
@import "../assets/styles/nice-select.css";
@import "../assets/styles/slicknav.css";
@import "../assets/styles/style.css";
</style>
