import Vue from "vue";

export default Vue.component("swizard-steps", {
  inject: ["steps"],

  render(h) {
    const activeIndex = this.steps.step;
    return h("div", [this.$slots.default[activeIndex]]);
  }
});
