require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubdata={
  "login": "Vardaan1509",
  "id": 223228174,
  "node_id": "U_kgDODU4xDg",
  "avatar_url": "https://avatars.githubusercontent.com/u/223228174?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Vardaan1509",
  "html_url": "https://github.com/Vardaan1509",
  "followers_url": "https://api.github.com/users/Vardaan1509/followers",
  "following_url": "https://api.github.com/users/Vardaan1509/following{/other_user}",
  "gists_url": "https://api.github.com/users/Vardaan1509/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Vardaan1509/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Vardaan1509/subscriptions",
  "organizations_url": "https://api.github.com/users/Vardaan1509/orgs",
  "repos_url": "https://api.github.com/users/Vardaan1509/repos",
  "events_url": "https://api.github.com/users/Vardaan1509/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Vardaan1509/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Vardaan Mehandiratta",
  "company": null,
  "blog": "https://vardaan.uwce.ca/",
  "location": "Waterloo",
  "email": null,
  "hireable": null,
  "bio": "University of Waterloo\r\nComputer Engineering '30",
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-07-28T07:28:19Z",
  "updated_at": "2025-11-27T03:38:37Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/twitter", (req,res)=>{
    res.send("whatever")
})
app.get("/login",(req,res)=>{
    res.send("<h1>please login</h1>")
})
app.get("/nice",(req,res)=>{
    res.send("I am nice")
})
app.get("/github",(req,res)=>{
    res.json(githubdata)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
