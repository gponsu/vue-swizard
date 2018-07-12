import Vue from "vue";

export default Vue.component("swizard-navigation", {
  render(h) {
    return h("div", this.$slots.default);
  }
});
