<template>
  <div class="single-element-widget mt-30">
    <!-- <div class="icon"><i class="fa fa-paw" aria-hidden="true"></i></div> -->
    <div class="form-select" id="animalKind">
      <select v-model="selected" @change="setAreaPkidSelected($event)">
        <option
          v-for="(option, index) in dropdownlist.animalAreaPkid"
          v-bind:value="option.value"
          :key="index"
          >{{ option.text }}</option
        >
      </select>
    </div>
  </div>
</template>
<script>
import dropdownlist from "../assets/static/dropdownlist.json";

export default {
  name: "AreaPkid",
  data() {
    return {
      dropdownlist,
      selected: "",
      options: null,
      areaPkidSelected: "",
    };
  },
  methods: {
    setAreaPkidSelected(event) {
      this.$store.commit("receiveAreaPkidSelected", {
        areaPkidSelected:
          event.target.options[event.target.options.selectedIndex].text,
      });
    },
  },
};
</script>
