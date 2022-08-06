const form1 = {
  "form": {
    "first_name": {
      "name": "First name",
      "type": "String",
      "order": 0
    },
    "last_name": {
      "name": "Last name",
      "type": "String",
      "order": 1
    },
    "email_address": {
      "name": "Email address",
      "type": "String",
      "order": 2
    },
    "phone_number1": {
      "name": "Phone number",
      "type": "Number",
      "order": 0,
      "gid": "phone"
    },
    "phone_number2": {
      "name": null,
      "type": "Number",
      "order": 1,
      "gid": "phone"
    },
    "phone_number3": {
      "name": null,
      "type": "Number",
      "order": 2,
      "gid": "phone"
    },
    "phone_label": {
      "type": "Label",
      "name": "Ext.",
      "gid": "phone",
      "order": 3
    },
    "phone_number4": {
      "name": null,
      "type": "Number",
      "order": 4,
      "gid": "phone"
    },
    "country": {
      "name": "Country",
      "type": "Choices",
      "order": 4,
      "options": {
        "choices": {
          "america": {
            "name": "United States of America"
          },
          "iran": {
            "name": "Iran"
          }
        }
      },
      "events": {
        "click": [
          "update_cities"
        ]
      }
    },
    "state": {
      "name": "State",
      "type": "Choices",
      "order": 5,
      "events": {
        "initialize": [
          "update_cities"
        ]
      }
    },
    "comments": {
      "name": "Comments or questions",
      "type": "String",
      "order": 6
    },
    "send_message_button": {
      "name": "Send Message",
      "type": "Submit",
      "gid": "buttons"
    },
    "cancel_button": {
      "name": "Cancel",
      "type": "Button",
      "gid": "buttons",
      "events": [
        "cancel"
      ]
    }
  },
  "styles": {
    "comments": {
      "multiline": true
    }
  },
  "groups": {
    "phone": {
      "order": 3
    },
    "buttons": {
      "order": 7
    }
  },
  "actions": {
    "update_cities": [
      {
        "rpc": {
          "type": "js",
          "name": "get_cities",
          "arguments": {
            "countries": {
              "mode": "document_reference",
              "type": "jsonpath",
              "value": "input.country"
            }
          }
        }
      }
    ],
    "cancel": [
      {
        "submit": {
          "value": []
        }
      }
    ]
  },
    "js": "function get_cities(countries) {\n  return [\n    {\"update\": {\"form\": {\"city\": {\"options\": {\"choices\":\n      Object.assign({}, ...countries.map(\n          country => (\n              {\"iran\": {\n                  \"tehran\": {\"name\": \"Tehran\"},\n                  \"esfahan\": {\"name\": \"Esfahan\"}},\n               \"afghanistan\": {\n                   \"kabul\": {\"name\": \"Kabul\"},\n                   \"herat\": {\"name\": \"Herat\"}}}[country])))}}}}}];\n}\n"
}


const form1new = {
  "form": {
    "first_name": {
      "name": "First name",
      "type": "String",
      "order": 0
    },
    "last_name": {
      "name": "Last name",
      "type": "String",
      "order": 1
    },
    "email_address": {
      "name": "Email address",
      "type": "String",
      "order": 2
    },
    "phone_number1": {
      "name": "Phone number",
      "type": "Number",
      "order": 0,
      "gid": "phone"
    },
    "phone_number2": {
      "name": null,
      "type": "Number",
      "order": 1,
      "gid": "phone"
    },
    "phone_number3": {
      "name": null,
      "type": "Number",
      "order": 2,
      "gid": "phone"
    },
    "phone_label": {
      "type": "Label",
      "name": "Ext.",
      "gid": "phone",
      "order": 3
    },
    "phone_number4": {
      "name": null,
      "type": "Number",
      "order": 4,
      "gid": "phone"
    },
    "country": {
      "name": "Country",
      "type": "Choices",
      "order": 4,
      "options": {
        "choices": {
          "america": {
            "name": "United States of America"
          },
          "iran": {
            "name": "Iran"
          }
        }
      },
      "events": {
        "click": [
          "update_cities"
        ]
      }
    },
    "state": {
      "name": "State",
      "type": "Choices",
      "order": 5,
      "events": {
        "initialize": [
          "update_cities"
        ]
      }
    },
    "comments": {
      "name": "Comments or questions",
      "type": "String",
      "order": 6
    },
    "captcha": {
      "name": null,
      "type": "Captcha",
      "order": 7
    },
    "send_message_button": {
      "name": "Send Message",
      "type": "Submit",
      "gid": "buttons"
    },
    "cancel_button": {
      "name": "Cancel",
      "type": "Button",
      "gid": "buttons",
      "events": [
        "cancel"
      ]
    }
  },
  "styles": {
    "comments": {
      "multiline": true
    }
  },
  "groups": {
    "phone": {
      "order": 3,
      "compact": true
    },
    "buttons": {
      "order": 8
    }
  },
  "actions": {
    "update_cities": [
      {
        "rpc": {
          "type": "js",
          "name": "get_cities",
          "arguments": {
            "countries": {
              "mode": "document_reference",
              "type": "jsonpath",
              "value": "input.country"
            }
          }
        }
      }
    ],
    "cancel": [
      {
        "submit": {
          "value": []
        }
      }
    ]
  },
    "js": "function get_cities(countries) {\n  return [\n    {\"update\": {\"form\": {\"city\": {\"options\": {\"choices\":\n      Object.assign({}, ...countries.map(\n          country => (\n              {\"iran\": {\n                  \"tehran\": {\"name\": \"Tehran\"},\n                  \"esfahan\": {\"name\": \"Esfahan\"}},\n               \"afghanistan\": {\n                   \"kabul\": {\"name\": \"Kabul\"},\n                   \"herat\": {\"name\": \"Herat\"}}}[country])))}}}}}];\n}\n"
}


const form2 = {
  "form": {
    "name": {
      "name": "Name",
      "description": "Please enter your first and last name. (required)",
      "type": "String",
      "order": 0
    },
    "password": {
      "name": "Password",
      "description": "Password must be five or more characters. (required)",
      "type": "Password",
      "order": 1
    },
    "hobbies": {
      "name": "Hobbies",
      "description": "Check zero or more hobbies. (optional)",
      "type": "Choices",
      "order": 2,
      "options": {
        "choices": {
          "surfing": {
            "name": "Surfing"
          },
          "running": {
            "name": "Running"
          },
          "biking": {
            "name": "Biking"
          },
          "paddling": {
            "name": "Paddling"
          }
        },
        "multiple": true
      }
    },
    "level": {
      "name": "Level",
      "description": "Select your grade level. (required)",
      "type": "Choices",
      "order": 3,
      "options": {
        "choices": {
          "freshman": {
            "name": "Freshman"
          },
          "sophomore": {
            "name": "Sophomore"
          },
          "junior": {
            "name": "Junior"
          },
          "senior": {
            "name": "Senior"
          },
          "other": {
            "name": "Other"
          }
        }
      }
    },
    "gpa": {
      "name": "GPA",
      "description": "Select your GPA. (required)",
      "type": "Choices",
      "order": 4,
      "options": {
        "choices": {
          "a": {
            "name": "A"
          },
          "b": {
            "name": "B"
          },
          "c": {
            "name": "C"
          },
          "d": {
            "name": "D"
          },
          "f": {
            "name": "F"
          }
        }
      }
    },
    "majors": {
      "name": "Majors",
      "type": "String",
      "order": 5
    },
    "submit_button": {
      "name": "Submit",
      "type": "Submit",
      "gid": "buttons"
    },
    "cancel_button": {
      "name": "Cancel",
      "type": "Button",
      "gid": "buttons",
      "events": [
        "cancel"
      ]
    }
  },
  "styles": {
    "name": {
      "placeholder": "My Name"
    },
    "hobbies": {
      "button_style": "check"
    },
    "level": {
      "button_style": "radio"
    },
    "gpa": {
      "choices_style": "dropdown"
    },
	"majors": {
      "multiline": true
    }
  },
  "groups": {
    "buttons": {
      "order": 6
    }
  },
  "actions": {
    "cancel": [
      {
        "submit": {
          "value": []
        }
      }
    ]
  }
}

const form3 = {
  "form": {
    "first_name": {
      "name": "Name",
      "type": "String",
      "order": 0,
      "gid": "fullname"
    },
    "last_name": {
      "name": null,
      "type": "String",
      "order": 1,
      "gid": "fullname"
    },
    "month": {
      "name": "Date of Birth",
      "type": "Datetime",
      "precision": "months",
      "order": 0,
      "gid": "birthday"
    },
    "day": {
      "name": null,
      "type": "Datetime",
      "precision": "days",
      "order": 1,
      "gid": "birthday"
    },
    "year": {
      "name": null,
      "type": "Datetime",
      "precision": "years",
      "order": 2,
      "gid": "birthday"
    },
    "label1": {
      "name": "Have you been diagnosed with Covid-19?",
      "type": "Label",
      "order": 2
    },
    "covid": {
      "name": null,
      "type": "Choices",
      "order": 3,
      "options": {
        "choices": {
          "yes": {
            "name": "Yes"
          },
          "no": {
            "name": "No"
          }
        }
      }
    },
    "label2": {
      "name": "Please check all symptoms that apply:",
      "type": "Label",
      "order": 4
    },
    "symptoms": {
      "name": null,
      "type": "Choices",
      "order": 5,
      "options": {
        "choices": {
          "loss": {
            "name": "Loss of taste/smell"
          },
          "breath": {
            "name": "Difficulty breathing"
          },
          "cough": {
            "name": "Cough"
          },
          "nose": {
            "name": "Runny nose"
          },
          "aches": {
            "name": "Body aches"
          },
          "throat": {
            "name": "Sore throat"
          }
        },
        "multiple": true
      }
    }
  },
  "styles": {
    "first_name": {
      "placeholder": "First Name"
    },
    "last_name": {
      "placeholder": "Last Name"
    },
    "covid": {
      "button_style": "radio"
    },
    "symptoms": {
      "button_style": "check"
    }
  },
  "groups": {
    "fullname": {
      "order": 0
    },
    "birthday": {
      "order": 1
    }
  }
}

