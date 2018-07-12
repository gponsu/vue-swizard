import Vue from "vue";

export default Vue.component("swizard", {
  props: {
    defaultStep: {
      type: Number,
      default: 0
    },
    onFinish: {
      type: Function,
      default: () => {}
    }
  },

  methods: {
    nextStep() {
      if (this.step < this.totalSteps - 1) return this.step++;
      if (this.step === this.totalSteps - 1) return this.onFinish();
    },
    previousStep() {
      if (this.step > 0) return this.step--;
    }
  },

  computed: {
    children() {
      return this.$scopedSlots.default({
        next: this.nextStep,
        prev: this.previousStep
      });
    },
    totalSteps() {
      return this.children.children.find(child =>
        /swizard-steps$/.test(child.tag)
      ).componentOptions.children.length;
    }
  },

  provide() {
    return {
      steps: this
    };
  },

  data() {
    return {
      step: this.defaultStep
    };
  },

  render(h) {
    return h("div", [
      this.$scopedSlots.default({
        next: this.nextStep,
        prev: this.previousStep
      })
    ]);
  }
});
