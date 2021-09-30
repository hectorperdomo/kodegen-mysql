export const mocks = {
  domainModel:
  {
    "name": "UserManagement",
    "comment": "test domain",
    "terms": [
      {
        "term": "Visitor",
        "description": "someone who browses the company website"
      },
      {
        "term": "User",
        "description": "someone who registered at the company website and has login credentials"
      },
      {
        "term": "My Account",
        "description": "name for a section of the portal providing additional functionality to a user"
      }
    ],
    "model": [
      {
        "entity": "User",
        "entityType": {
          "aggregateroot": true
        },
        "comment": "someone who registered at the company website and has login credentials",
        "properties": [
          {
            "name": "Id",
            "type": {
              "primaryKey": true
            },
            "default": "uuid()",
            "optional": false,
            "comment": "The entity's primary key."
          },
          {
            "name": "Alias",
            "type": {
              "text": true,
              "length": "100"
            },
            "optional": false,
            "comment": "a nickname or alias used which may be used to login, instead of the email address"
          },
          {
            "name": "Avatar",
            "type": {
              "text": true,
              "length": "300"
            },
            "optional": false,
            "comment": "the network reachable path to an image used to represent the user in the gui"
          },
          {
            "name": "Password",
            "type": {
              "text": true,
              "length": "30"
            },
            "optional": false
          },
          {
            "name": "EmailAddress",
            "type": {
              "text": true,
              "length": "150"
            },
            "optional": false
          },
          {
            "name": "$CorrelationId",
            "type": {
              "text": true,
              "length": 36
            },
            "optional": false,
            "comment": "Meta-data field used to track changes."
          }
        ]
      },
      {
        "entity": "Person",
        "entityType": {
          "aggregateroot": true
        },
        "comment": "a human with whom the system can interact, i.e. a customer, lead, sales agent, etc.",
        "properties": [
          {
            "name": "Id",
            "type": {
              "primaryKey": true
            },
            "default": "uuid()",
            "optional": false,
            "comment": "The entity's primary key."
          },
          {
            "name": "PersonType",
            "type": {
              "choices": [
                "Customer",
                "FormerCustomer",
                "Prospect",
                "Lead"
              ]
            },
            "optional": true
          },
          {
            "name": "Salutation",
            "type": {
              "text": true,
              "length": "5"
            },
            "optional": true
          },
          {
            "name": "Pronoun",
            "type": {
              "text": true,
              "length": "10"
            },
            "optional": true,
            "comment": "the person's preferred gender pronoun (i.e. he, she, them)"
          },
          {
            "name": "FirstName",
            "type": {
              "text": true,
              "length": "50"
            },
            "optional": false
          },
          {
            "name": "LastName",
            "type": {
              "text": true,
              "length": "50"
            },
            "optional": false
          },
          {
            "name": "BirthDate",
            "type": {
              "date": true
            },
            "default": "currdate()",
            "optional": true
          },
          {
            "name": "LastFourSSN",
            "type": {
              "text": true,
              "length": "4"
            },
            "optional": true,
            "comment": "the last four digits of the Social Security Number"
          },
          {
            "name": "IdPhrase",
            "type": {
              "text": true,
              "length": "50"
            },
            "optional": true,
            "comment": "a secret phrase known only to the person, for identification purposes during phone conversations"
          },
          {
            "name": "PhoneNo",
            "type": {
              "array": true,
              "of": "PhoneNo"
            },
            "comment": "a list of PhoneNo"
          },
          {
            "name": "Email",
            "type": {
              "array": true,
              "of": "Email"
            },
            "comment": "a list of Email"
          },
          {
            "name": "Address",
            "type": {
              "array": true,
              "of": "Address"
            },
            "comment": "a list of Address"
          },
          {
            "name": "$CorrelationId",
            "type": {
              "text": true,
              "length": 36
            },
            "optional": false,
            "comment": "Meta-data field used to track changes."
          }
        ]
      }
    ],
    "classes": [
      {
        "entity": "User",
        "entityType": {
          "aggregateroot": true
        },
        "comment": "someone who registered at the company website and has login credentials",
        "properties": [
          {
            "name": "Id",
            "type": {
              "primaryKey": true
            },
            "default": "uuid()",
            "optional": false,
            "comment": "The entity's primary key."
          },
          {
            "name": "Alias",
            "type": {
              "text": true,
              "length": "100"
            },
            "optional": false,
            "comment": "a nickname or alias used which may be used to login, instead of the email address"
          },
          {
            "name": "Avatar",
            "type": {
              "text": true,
              "length": "300"
            },
            "optional": false,
            "comment": "the network reachable path to an image used to represent the user in the gui"
          },
          {
            "name": "Password",
            "type": {
              "text": true,
              "length": "30"
            },
            "optional": false
          },
          {
            "name": "EmailAddress",
            "type": {
              "text": true,
              "length": "150"
            },
            "optional": false
          },
          {
            "name": "$CorrelationId",
            "type": {
              "text": true,
              "length": 36
            },
            "optional": false,
            "comment": "Meta-data field used to track changes."
          }
        ]
      },
      {
        "entity": "PhoneNo",
        "entityType": {
          "list": true
        },
        "comment": "the person's phone numbers",
        "properties": [
          {
            "name": "Id",
            "type": {
              "primaryKey": true
            },
            "default": "uuid()",
            "optional": false,
            "comment": "The entity's primary key."
          },
          {
            "name": "PersonId",
            "type": {
              "foreignKey": true,
              "to": "Person"
            },
            "optional": false,
            "comment": "Foreign key to the entity's parent table."
          },
          {
            "name": "PhoneNo",
            "type": {
              "text": true,
              "length": "10"
            },
            "optional": false
          },
          {
            "name": "PhoneType",
            "type": {
              "choices": [
                "Home",
                "Work",
                "Fax"
              ]
            },
            "default": "Home",
            "optional": false
          },
          {
            "name": "Age",
            "type": {
              "integer": true
            },
            "default": "7",
            "optional": false
          },
          {
            "name": "IsCellPhone",
            "type": {
              "yesno": true
            },
            "optional": false
          },
          {
            "name": "OkToCall",
            "type": {
              "yesno": true
            },
            "default": "no",
            "optional": false,
            "comment": "for cell phones only... person must opted-in so that marketing campaigns may include the phone number"
          },
          {
            "name": "OkToSMS",
            "type": {
              "yesno": true
            },
            "default": "no",
            "optional": false,
            "comment": "for cell phones only... person must opted-in to receive messages using SMS (Short Message Service)"
          },
          {
            "name": "DoNotCall",
            "type": {
              "yesno": true
            },
            "default": "no",
            "optional": false,
            "comment": "for non-cell phones... whether marketing campaigns may include the phone number"
          },
          {
            "name": "$CorrelationId",
            "type": {
              "text": true,
              "length": 36
            },
            "optional": false,
            "comment": "Meta-data field used to track changes."
          }
        ]
      },
      {
        "entity": "Email",
        "entityType": {
          "list": true
        },
        "comment": "the person's email addresses",
        "properties": [
          {
            "name": "Id",
            "type": {
              "primaryKey": true
            },
            "default": "uuid()",
            "optional": false,
            "comment": "The entity's primary key."
          },
          {
            "name": "PersonId",
            "type": {
              "foreignKey": true,
              "to": "Person"
            },
            "optional": false,
            "comment": "Foreign key to the entity's parent table."
          },
          {
            "name": "EmailAddress",
            "type": {
              "text": true,
              "length": "300"
            },
            "optional": false
          },
          {
            "name": "DoNotEmail",
            "type": {
              "yesno": true
            },
            "default": "yes",
            "optional": false,
            "comment": "whether marketing campaigns may include the email address"
          },
          {
            "name": "$CorrelationId",
            "type": {
              "text": true,
              "length": 36
            },
            "optional": false,
            "comment": "Meta-data field used to track changes."
          }
        ]
      },
      {
        "entity": "Address",
        "entityType": {
          "list": true
        },
        "comment": "address used for identifying customer and for mailing marketing material",
        "properties": [
          {
            "name": "Id",
            "type": {
              "primaryKey": true
            },
            "default": "uuid()",
            "optional": false,
            "comment": "The entity's primary key."
          },
          {
            "name": "PersonId",
            "type": {
              "foreignKey": true,
              "to": "Person"
            },
            "optional": false,
            "comment": "Foreign key to the entity's parent table."
          },
          {
            "name": "AddressType",
            "type": {
              "choices": [
                "Home",
                "Work",
                "Propery",
                "Other"
              ]
            },
            "optional": false
          },
          {
            "name": "Company",
            "type": {
              "text": true,
              "length": "50"
            },
            "optional": true,
            "comment": "only if address is a business"
          },
          {
            "name": "DoNotKnock",
            "type": {
              "yesno": true
            },
            "default": "no",
            "optional": false,
            "comment": "whether marketing campaigns may include the address"
          },
          {
            "name": "DoNotMail",
            "type": {
              "yesno": true
            },
            "default": "no",
            "optional": false,
            "comment": "whether marketing campaigns may include the address"
          },
          {
            "name": "$CorrelationId",
            "type": {
              "text": true,
              "length": 36
            },
            "optional": false,
            "comment": "Meta-data field used to track changes."
          }
        ]
      },
      {
        "entity": "Person",
        "entityType": {
          "aggregateroot": true
        },
        "comment": "a human with whom the system can interact, i.e. a customer, lead, sales agent, etc.",
        "properties": [
          {
            "name": "Id",
            "type": {
              "primaryKey": true
            },
            "default": "uuid()",
            "optional": false,
            "comment": "The entity's primary key."
          },
          {
            "name": "PersonType",
            "type": {
              "choices": [
                "Customer",
                "FormerCustomer",
                "Prospect",
                "Lead"
              ]
            },
            "optional": true
          },
          {
            "name": "Salutation",
            "type": {
              "text": true,
              "length": "5"
            },
            "optional": true
          },
          {
            "name": "Pronoun",
            "type": {
              "text": true,
              "length": "10"
            },
            "optional": true,
            "comment": "the person's preferred gender pronoun (i.e. he, she, them)"
          },
          {
            "name": "FirstName",
            "type": {
              "text": true,
              "length": "50"
            },
            "optional": false
          },
          {
            "name": "LastName",
            "type": {
              "text": true,
              "length": "50"
            },
            "optional": false
          },
          {
            "name": "BirthDate",
            "type": {
              "date": true
            },
            "default": "currdate()",
            "optional": true
          },
          {
            "name": "LastFourSSN",
            "type": {
              "text": true,
              "length": "4"
            },
            "optional": true,
            "comment": "the last four digits of the Social Security Number"
          },
          {
            "name": "IdPhrase",
            "type": {
              "text": true,
              "length": "50"
            },
            "optional": true,
            "comment": "a secret phrase known only to the person, for identification purposes during phone conversations"
          },
          {
            "name": "PhoneNo",
            "type": {
              "array": true,
              "of": "PhoneNo"
            },
            "comment": "a list of PhoneNo"
          },
          {
            "name": "Email",
            "type": {
              "array": true,
              "of": "Email"
            },
            "comment": "a list of Email"
          },
          {
            "name": "Address",
            "type": {
              "array": true,
              "of": "Address"
            },
            "comment": "a list of Address"
          },
          {
            "name": "$CorrelationId",
            "type": {
              "text": true,
              "length": 36
            },
            "optional": false,
            "comment": "Meta-data field used to track changes."
          }
        ]
      }
    ]
  }
}

