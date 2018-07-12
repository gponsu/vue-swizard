import { shallowMount } from "@vue/test-utils";
import Swizard, { SwizardNavigation, SwizardStep, SwizardSteps } from "./index";

describe("Swizard", () => {
  const component = {
    functional: true,

    render(createElement, props) {
      return (
        <Swizard
          {...props}
          scopedSlots={{
            default: ({ next, prev }) => (
              <div>
                <SwizardSteps>
                  <SwizardStep>Step 0</SwizardStep>
                  <SwizardStep>Step 1</SwizardStep>
                </SwizardSteps>

                <SwizardNavigation>
                  <button onClick={prev}>back</button>
                  <button onClick={next}>next</button>
                </SwizardNavigation>
              </div>
            )
          }}
        />
      );
    }
  };

  const htmlExpectedToFirstStep =
    "<div><div><div><div>Step 0</div></div><div><button>back</button><button>next</button></div></div></div>";

  const htmlExpectedToLastStep =
    "<div><div><div><div>Step 1</div></div><div><button>back</button><button>next</button></div></div></div>";

  it("renders the first step by default", () => {
    const wrapper = shallowMount(component);

    expect(wrapper.html()).toEqual(htmlExpectedToFirstStep);
  });

  it("renders the default step indicated by the property", () => {
    const wrapper = shallowMount(component, {
      context: {
        props: { defaultStep: 1 }
      }
    });

    expect(wrapper.html()).toEqual(htmlExpectedToLastStep);
  });

  it("goes to the next step when the 'next' event is triggered", () => {
    const wrapper = shallowMount(component);

    wrapper
      .findAll("button")
      .at(1)
      .trigger("click");

    expect(wrapper.html()).toEqual(htmlExpectedToLastStep);
  });

  it("goes to the previous step when the 'prev' event is triggered", () => {
    const wrapper = shallowMount(component, {
      context: {
        props: { defaultStep: 1 }
      }
    });

    wrapper.find("button").trigger("click");

    expect(wrapper.html()).toEqual(htmlExpectedToFirstStep);
  });

  it("doesn't go to next when it's in the last step", () => {
    const wrapper = shallowMount(component, {
      context: {
        props: { defaultStep: 1 }
      }
    });

    wrapper
      .findAll("button")
      .at(1)
      .trigger("click");

    expect(wrapper.html()).toEqual(htmlExpectedToLastStep);
  });

  it("doesn't go back when it's in the first step", () => {
    const wrapper = shallowMount(component);

    wrapper.find("button").trigger("click");

    expect(wrapper.html()).toEqual(htmlExpectedToFirstStep);
  });

  it("calls 'onFinish' function when it has been completed", () => {
    const callback = jest.fn();
    const wrapper = shallowMount(component, {
      context: {
        props: { defaultStep: 1, onFinish: callback }
      }
    });

    wrapper
      .findAll("button")
      .at(1)
      .trigger("click");

    expect(callback).toHaveBeenCalled();
  });

  it("doesn't call 'onFinish' function when it hasn't been completed", () => {
    const callback = jest.fn();
    const wrapper = shallowMount(component, {
      context: {
        props: { defaultStep: 0, onFinish: callback }
      }
    });

    wrapper
      .findAll("button")
      .at(1)
      .trigger("click");

    expect(callback).not.toHaveBeenCalled();
  });
});
