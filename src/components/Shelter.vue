<template>
  <div class="input-group-icon mt-10">
    <!-- <div class="icon"><i class="fa fa-users" aria-hidden="true"></i></div> -->
    <div class="single-element-widget mt-30">
      <div class="form-select" id="animalShelter">
        <select v-model="selected">
          <option
            v-for="(option, index) in shelter"
            v-bind:value="option.value"
            :key="index"
            >{{ option.text }}</option
          >
        </select>
      </div>
    </div>
  </div>
</template>
<script>
import dropdownlist from "../assets/static/dropdownlist.json";

export default {
  name: "Shelter",
  data() {
    return {
      dropdownlist,
      selected: "",
      options: null,
    };
  },
  computed: {
    shelter: {
      get() {
        var defaultAreaText = "寵物所在縣市";
        var defaultShelterObject = { text: "所屬收容所", value: "" };
        var shelterData = [];
        shelterData.push(defaultShelterObject);
        let areaText = this.$store.state.areaPkidSelected;

        dropdownlist.animalShelter.forEach(({ text, value }) => {
          if (areaText !== defaultAreaText && text.indexOf(areaText) != -1) {
            shelterData.push({ text, value });
          }
        });
        return shelterData;
      },
    },
  },
};
</script>
