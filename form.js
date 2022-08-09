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

const form4 = {
  "form": {
    "first_name": {
      "name": "First Name",
      "type": "String",
      "order": 0,
      "gid": "fullname"
    },
    "last_name": {
      "name": "Last Name",
      "type": "String",
      "order": 1,
      "gid": "fullname"
    },
    "email": {
      "name": "Email Address",
      "type": "String",
      "order": 1
    },
    "label2": {
      "name": "Was our representative (check all that apply)",
      "type": "Label",
      "order": 2
    },
    "representative": {
      "name": null,
      "type": "Choices",
      "order": 3,
      "options": {
        "choices": {
          "professional": {
            "name": "Professional and courteous?"
          },
          "knowledgeable": {
            "name": "Knowledgeable?"
          },
          "friendly": {
            "name": "Friendly?"
          },
          "efficient": {
            "name": "Efficient?"
          },
          "patient": {
            "name": "Patient?"
          },
          "respectful": {
            "name": "Warm and respectful?"
          },
          "clear": {
            "name": "Clear and direct?"
          }
        },
        "multiple": true
      }
    },
    "submit_button": {
      "name": "Submit Feedback",
      "type": "Submit",
	  "order": 4,
    }
  },
  "styles": {
    "representative": {
      "button_style": "check"
    }
  },
  "groups": {
    "fullname": {
      "order": 0
    }
  }
}


const form4new = {
  "form": {
    "first_name": {
      "name": "First Name",
      "type": "String",
      "order": 0,
      "gid": "fullname"
    },
    "last_name": {
      "name": "Last Name",
      "type": "String",
      "order": 1,
      "gid": "fullname"
    },
    "email": {
      "name": "Email Address",
      "type": "String",
      "order": 1
    },
    "label1": {
      "name": "How was your overall expreince?",
      "type": "Label",
      "order": 2
    },
    "star": {
      "name": null,
      "type": "Star",
      "order": 3
    },
    "label2": {
      "name": "Was our representative (check all that apply)",
      "type": "Label",
      "order": 4
    },
    "representative": {
      "name": null,
      "type": "Choices",
      "order": 5,
      "options": {
        "choices": {
          "professional": {
            "name": "Professional and courteous?"
          },
          "knowledgeable": {
            "name": "Knowledgeable?"
          },
          "friendly": {
            "name": "Friendly?"
          },
          "efficient": {
            "name": "Efficient?"
          },
          "patient": {
            "name": "Patient?"
          },
          "respectful": {
            "name": "Warm and respectful?"
          },
          "clear": {
            "name": "Clear and direct?"
          }
        },
        "multiple": true
      }
    },
    "submit_button": {
      "name": "Submit Feedback",
      "type": "Submit",
	  "order": 6,
    }
  },
  "styles": {
    "representative": {
      "button_style": "check"
    }
  },
  "groups": {
    "fullname": {
      "order": 0
    }
  }
}

const form5 = {
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
    "email": {
      "name": "Email",
      "type": "String",
      "order": 0,
      "gid": "email_phone"
    },
    "phone": {
      "name": "Phone",
      "type": "Number",
      "order": 1,
      "gid": "email_phone"
    },
    "birth_date": {
      "name": "Date of Birth",
      "type": "Datetime",
      "order": 0,
      "gid": "g1"
    },
    "nationality": {
      "name": "Nationality",
      "type": "String",
      "order": 1,
      "gid": "g1"
    },
    "country": {
      "name": "Country of Birth",
      "type": "String",
      "order": 2,
      "gid": "g1"
    },
    "arrival_date": {
      "name": "Date of Arrival",
      "type": "Datetime",
      "order": 0,
      "gid": "g2"
    },
    "stay": {
      "name": "Intended Length of Stay",
      "type": "String",
      "order": 1,
      "gid": "g2"
    },
    "room": {
      "name": "Room & Bed Number",
      "type": "String",
      "order": 2,
      "gid": "g2"
    },
    "occupation": {
      "name": "Occupation & Place of Employment",
      "type": "String",
      "order": 4
    },
    "submit_button": {
      "name": "SEND",
      "type": "Submit",
      "order": 5
    }
  },
  "styles": {
    "first_name": {
      "placeholder": "First"
    },
    "last_name": {
      "placeholder": "Last"
    },
    "phone": {
      "placeholder": "### ### ####"
    },
    "majors": {
      "multiline": true
    }
  },
  "groups": {
    "fullname": {
      "order": 0
    },
    "email_phone": {
      "order": 1
    },
    "g1": {
      "order": 2
    },
    "g2": {
      "order": 3
    }
  }
}

const form6 = {
  "form": {
    "first_name": {
      "name": null,
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
    "email": {
      "name": "E-mail",
      "type": "String",
      "order": 1
    },
    "password": {
      "name": "Password",
      "type": "Password",
      "order": 2
    },
    "confirm_password": {
      "name": "Confirm Password",
      "type": "Password",
      "order": 3
    },
    "phone_code": {
      "name": "Phone Number",
      "type": "Choices",
      "order": 0,
      "gid": "phone_gp",
      "options": {
        "choices": {
          "iran": {
            "name": "+98"
          },
          "america": {
            "name": "+1"
          }
        }
      }
    },
    "phone_number": {
      "name": null,
      "type": "String",
      "order": 1,
      "gid": "phone_gp"
    },
    "donation": {
      "name": "Donation",
      "type": "Number",
      "order": 0,
      "gid": "donation_gp"
    },
    "donation_type": {
      "name": null,
      "type": "Choices",
      "order": 1,
      "gid": "donation_gp",
      "options": {
        "choices": {
          "rial": {
            "name": "ریال"
          },
          "dollar": {
            "name": "$"
          }
        }
      }
    },
    "submit_button": {
      "name": "Submit",
      "type": "Submit",
      "order": 6,
    },
  },
  "styles": {
    "first_name": {
      "placeholder": "First Name"
    },
    "last_name": {
      "placeholder": "Last Name"
    },
    "phone_gp": {
      "display": "compact"
    },
    "donation_gp": {
      "display": "compact"
    }
  },
  "groups": {
    "fullname": {
      "array": true,
      "order": 0
    },
    "phone_gp": {
      "order": 4
    },
    "donation_gp": {
      "order": 5
    }
  }
}

const form6new = {
  "form": {
    "first_name": {
      "name": null,
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
    "email": {
      "name": "E-mail",
      "type": "String",
      "order": 1
    },
    "password": {
      "name": "Password",
      "type": "Password",
      "order": 2
    },
    "confirm_password": {
      "name": "Confirm Password",
      "type": "Password",
      "order": 3
    },
    "phone_number": {
      "name": "Phone Number",
      "type": "ChoicesInput",
      "order": 4,
      "options": {
        "choices": {
          "iran": {
            "name": "+98"
          },
          "america": {
            "name": "+1"
          }
        }
      }
    },
    "donation": {
      "name": "Donation",
      "type": "ChoicesInput",
      "order": 5,
      "options": {
        "choices": {
          "rial": {
            "name": "ریال"
          },
          "dollar": {
            "name": "$"
          }
        }
      }
    },
    "slider": {
      "name": "Slider",
      "type": "Slider",
      "order": 6
    },
    "submit_button": {
      "name": "Submit",
      "type": "Submit",
      "order": 7,
    },
  },
  "styles": {
    "first_name": {
      "placeholder": "First Name"
    },
    "last_name": {
      "placeholder": "Last Name"
    },
    "phone_number": {
      "type": "prefix"
    },
    "donation": {
      "type": "suffix"
    }
  },
  "groups": {
    "fullname": {
      "array": true,
      "order": 0
    }
  }
}


const form7 = {
  "form": {
    "email": {
      "name": "E-mail",
      "type": "String",
      "order": 0
    },
    "phone_code": {
      "name": "Phone Number",
      "type": "Choices",
      "order": 0,
      "gid": "phone_gp",
      "options": {
        "choices": {
          "iran": {
            "name": "+98"
          },
          "america": {
            "name": "+1"
          }
        }
      }
    },
    "phone_number": {
      "name": null,
      "type": "String",
      "order": 1,
      "gid": "phone_gp"
    },
    "gender": {
      "name": "Gender[only one]",
      "type": "Choices",
      "order": 2,
      "options": {
        "choices": {
          "male": {
            "name": "Male"
          },
          "female": {
            "name": "Female"
          },
          "other": {
            "name": "Other"
          }
        }
      }
    },
    "select": {
      "name": "Select[multiple]",
      "type": "Choices",
      "order": 3,
      "multiple": true,
      "options": {
        "choices": {
          "red": {
            "name": "Red"
          },
          "green": {
            "name": "Green"
          },
          "blue": {
            "name": "Blue"
          }
        }
      }
    },
    "input_number": {
      "name": "InputNumber",
      "type": "Number",
      "order": 0,
      "gid": "number_gp"
    },
    "number_label": {
      "type": "Label",
      "name": "machines",
      "order": 1,
      "gid": "number_gp"
    },
    "agreement": {
      "name": "I have read the agreement",
      "type": "Boolean",
      "order": 5
    },
    "submit_button": {
      "name": "Submit",
      "type": "Submit",
      "order": 6
    }
  },
  "styles": {
    "phone_gp": {
      "display": "compact"
    }
  },
  "groups": {
    "phone_gp": {
      "order": 1
    },
    "number_gp": {
      "order": 4
    }
  }
}

const form7new = {
  "form": {
    "email": {
      "name": "E-mail",
      "type": "String",
      "order": 0
    },
    "phone_number": {
      "name": "Phone Number",
      "type": "ChoicesInput",
      "order": 1,
      "options": {
        "choices": {
          "iran": {
            "name": "+98"
          },
          "america": {
            "name": "+1"
          }
        }
      }
    },
    "gender": {
      "name": "Gender[only one]",
      "type": "Choices",
      "order": 2,
      "options": {
        "choices": {
          "male": {
            "name": "Male"
          },
          "female": {
            "name": "Female"
          },
          "other": {
            "name": "Other"
          }
        }
      }
    },
    "select": {
      "name": "Select[multiple]",
      "type": "Choices",
      "order": 3,
      "multiple": true,
      "options": {
        "choices": {
          "red": {
            "name": "Red"
          },
          "green": {
            "name": "Green"
          },
          "blue": {
            "name": "Blue"
          }
        }
      }
    },
    "input_number": {
      "name": "InputNumber",
      "type": "Number",
      "order": 0,
      "gid": "number_gp"
    },
    "number_label": {
      "type": "Label",
      "name": "machines",
      "order": 1,
      "gid": "number_gp"
    },
    "switch": {
      "name": "Switch",
      "type": "Switch",
      "order": 5
    },
    "agreement": {
      "name": "I have read the agreement",
      "type": "Boolean",
      "order": 6
    },
    "submit_button": {
      "name": "Submit",
      "type": "Submit",
      "order": 7
    }
  },
  "styles": {
    "phone_number": {
      "type": "prefix"
    }
  },
  "groups": {
    "number_gp": {
      "order": 4
    }
  }
}