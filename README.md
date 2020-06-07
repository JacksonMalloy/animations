***MUTATIONS***
```
mutation CreateStatement {
   createStatement(data: {
   utterance: "Build an awesome app!"
   }) {
       utterance
   }
}
```

***QUERIES***
```
query {
  allStatements {
    data {
      utterance
      permission
      saved
      _id
      _ts
    }
  }
}
```

