# GraphQL Null Relations Issue Demo

Minimal reproducable example for an issue in PayloadCMS 3.0 Beta 130.

## Steps to repro

- Run the server on your local machine with a local PostgreSQL DB
- On the `DemoGlobal`, add multiple related `Demo` items, checking `visible` on some but not others. 
- Visit `localhost:3000/api/graphql-playground` in a private window/logged out context
- Input the following query:
  ```gql
  query demo {
    DemoGlobal {
      demoRelationship {
        id
      }
    }
  }
  ```
- Observe the error:

  ```Error: Cannot return null for non-nullable field DemoGlobal.demoRelationship.```
  ```
  {
    "errors": [
      {
        "extensions": {
          "name": "Error",
          "statusCode": 500
        },
        "locations": [
          {
            "line": 3,
            "column": 5
          }
        ],
        "message": "Something went wrong.",
        "path": [
          "DemoGlobal",
          "demoRelationship",
          1
        ]
      }
    ],
    "data": {
      "DemoGlobal": {
        "demoRelationship": null
      }
    }
  }
  ```