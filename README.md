# Vue Simple Wizard

Vue component for building a simple multi steps interfaces.

## Installation

```bash
npm install --save vue-swizard
```

## Basic usage

```html
<swizard>
  <template slot-scope="{ next, prev }">
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
  </template>
</swizard>
```

## Settings

| Name        | Type     | Default | Description                                                            |
| ----------- | -------- | ------- | ---------------------------------------------------------------------- |
| defaultStep | Number   | 0       | Default active step index                                              |
| next        | Action   |         | You must call this action when you want to go to the next step         |
| prev        | Action   |         | You must call this action when you want to go to the previous step     |
| onFinish    | Callback |         | Callback function that is triggered when the wizard has been completed |
