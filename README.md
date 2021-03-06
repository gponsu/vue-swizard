# Vue Simple Wizard

[![Build Status](https://travis-ci.com/gponsu/vue-swizard.svg?branch=master)](https://travis-ci.com/gponsu/vue-swizard) [![codecov](https://codecov.io/gh/gponsu/vue-swizard/branch/master/graph/badge.svg)](https://codecov.io/gh/gponsu/vue-swizard)

Vue component for building a simple multi steps interfaces.

## Installation

```bash
npm install --save vue-swizard
```

## Basic usage

```html
<swizard>
  <div slot-scope="{ next, prev }">
    <swizard-steps>
      <swizard-step>
        step 1
      </swizard-step>
      <swizard-step>
        step 2
      </swizard-step>
      <swizard-step>
        step 3
      </swizard-step>
    </swizard-steps>

    <swizard-navigation>
      <button @click="prev">back</button>
      <button @click="next">next</button>
    </swizard-navigation>
  </div>
</swizard>
```

[![Edit Vue Simple Wizard](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/0or7m2vn5w?autoresize=1&fontsize=16&hidenavigation=1&module=%2Fsrc%2FApp.vue)

## Settings

| Name        | Type     | Default | Description                                                            |
| ----------- | -------- | ------- | ---------------------------------------------------------------------- |
| defaultStep | Number   | 0       | Default active step index                                              |
| next        | Action   |         | You must call this action when you want to go to the next step         |
| prev        | Action   |         | You must call this action when you want to go to the previous step     |
| onFinish    | Callback |         | Callback function that is triggered when the wizard has been completed |
