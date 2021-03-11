## Weekend project

Spent a weekend playing with React animations using the new Framer API. 
Love how the animations work and the DX. 

I used a design by Turtledesign I found on instagram as inspiration.

This app only works on chrome as it uses the browsers native speech recognition API to pull data from your speech and display it as text on the screen. 
I then decided to take that data and save it to a serverless DB without your permission haha, whoops! 
I don't believe the database API is active any longer.

You can view the project live here: https://multi-stage-transitions.netlify.app/


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

