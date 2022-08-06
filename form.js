const form1 = {
  form: {
    first_name: {
      name: "First name",
      type: "String",
      order: 0,
    },
    last_name: {
      name: "Last name",
      type: "String",
      order: 1,
    },
    email_address: {
      name: "Email address",
      type: "String",
      order: 2,
    },
    phone_number1: {
      name: "Phone number",
      type: "Number",
      order: 0,
      gid: "phone",
    },
    phone_number2: {
      name: null,
      type: "Number",
      order: 1,
      gid: "phone",
    },
    phone_number3: {
      name: null,
      type: "Number",
      order: 2,
      gid: "phone",
    },
    phone_label: {
      type: "Label",
      name: "Ext.",
      gid: "phone",
      order: 3,
    },
    phone_number4: {
      name: null,
      type: "Number",
      order: 4,
      gid: "phone",
    },
    country: {
      name: "Country",
      type: "Choices",
      order: 4,
      options: {
        choices: {
          america: {
            name: "United States of America",
          },
          iran: {
            name: "Iran",
          },
        },
      },
      events: {
        click: ["update_cities"],
      },
    },
    state: {
      name: "State",
      type: "Choices",
      order: 5,
      events: {
        initialize: ["update_cities"],
      },
    },
    comments: {
      name: "Comments or questions",
      type: "String",
      order: 6,
    },
    send_message_button: {
      name: "Send Message",
      type: "Submit",
      gid: "buttons",
    },
    cancel_button: {
      name: "Cancel",
      type: "Button",
      gid: "buttons",
      events: ["cancel"],
    },
  },
  styles: {
    comments: {
      multiline: true,
    },
  },
  groups: {
    phone: {
      order: 3,
    },
    buttons: {
      order: 7,
    },
  },
  actions: {
    update_cities: [
      {
        rpc: {
          type: "js",
          name: "get_cities",
          arguments: {
            countries: {
              mode: "document_reference",
              type: "jsonpath",
              value: "input.country",
            },
          },
        },
      },
    ],
    cancel: [
      {
        submit: {
          value: [],
        },
      },
    ],
  },
  js: 'function get_cities(countries) {\n  return [\n    {"update": {"form": {"city": {"options": {"choices":\n      Object.assign({}, ...countries.map(\n          country => (\n              {"iran": {\n                  "tehran": {"name": "Tehran"},\n                  "esfahan": {"name": "Esfahan"}},\n               "afghanistan": {\n                   "kabul": {"name": "Kabul"},\n                   "herat": {"name": "Herat"}}}[country])))}}}}}];\n}\n',
};

const form1new = {
  form: {
    first_name: {
      name: "First name",
      type: "String",
      order: 0,
    },
    last_name: {
      name: "Last name",
      type: "String",
      order: 1,
    },
    email_address: {
      name: "Email address",
      type: "String",
      order: 2,
    },
    phone_number1: {
      name: "Phone number",
      type: "Number",
      order: 0,
      gid: "phone",
    },
    phone_number2: {
      name: null,
      type: "Number",
      order: 1,
      gid: "phone",
    },
    phone_number3: {
      name: null,
      type: "Number",
      order: 2,
      gid: "phone",
    },
    phone_label: {
      type: "Label",
      name: "Ext.",
      gid: "phone",
      order: 3,
    },
    phone_number4: {
      name: null,
      type: "Number",
      order: 4,
      gid: "phone",
    },
    country: {
      name: "Country",
      type: "Choices",
      order: 4,
      options: {
        choices: {
          america: {
            name: "United States of America",
          },
          iran: {
            name: "Iran",
          },
        },
      },
      events: {
        click: ["update_cities"],
      },
    },
    state: {
      name: "State",
      type: "Choices",
      order: 5,
      events: {
        initialize: ["update_cities"],
      },
    },
    comments: {
      name: "Comments or questions",
      type: "String",
      order: 6,
    },
    send_message_button: {
      name: "Send Message",
      type: "Submit",
      gid: "buttons",
    },
    cancel_button: {
      name: "Cancel",
      type: "Button",
      gid: "buttons",
      events: ["cancel"],
    },
  },
  styles: {
    comments: {
      multiline: true,
    },
  },
  groups: {
    phone: {
      order: 3,
    },
    buttons: {
      order: 7,
    },
  },
  actions: {
    update_cities: [
      {
        rpc: {
          type: "js",
          name: "get_cities",
          arguments: {
            countries: {
              mode: "document_reference",
              type: "jsonpath",
              value: "input.country",
            },
          },
        },
      },
    ],
    cancel: [
      {
        submit: {
          value: [],
        },
      },
    ],
  },
  js: 'function get_cities(countries) {\n  return [\n    {"update": {"form": {"city": {"options": {"choices":\n      Object.assign({}, ...countries.map(\n          country => (\n              {"iran": {\n                  "tehran": {"name": "Tehran"},\n                  "esfahan": {"name": "Esfahan"}},\n               "afghanistan": {\n                   "kabul": {"name": "Kabul"},\n                   "herat": {"name": "Herat"}}}[country])))}}}}}];\n}\n',
};
