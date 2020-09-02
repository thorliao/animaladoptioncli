<template>
  <div class="input-group-icon mt-10">
    <!-- <div class="icon"><i class="fa fa-mars" aria-hidden="true"></i></div> -->
    <div class="single-element-widget mt-30">
      <div class="form-select" id="animalSex">
        <select v-model="selected">
          <option
            v-for="(option, index) in dropdownlist.animalSex"
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
  name: "Sex",
  data() {
    return {
      dropdownlist,
      selected: "",
      options: null,
    };
  },
};
</script>
