import Vue from "vue";

export default Vue.component("swizard-step", {
  render(h) {
    return h("div", this.$slots.default);
  }
});
