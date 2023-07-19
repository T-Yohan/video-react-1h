import { useState } from "react";
import Tweet  from "./Tweet";

const DEFAULT_TWEET = 
[
{
  id: 0,
  name:"Yohan",
  content:"Je vais bien",
  like:100
}, 
{
  id: 1,
  name:"Audrey",
  content:"Je suis contente",
  like:500
}, 
{
  id: 2,
  name:"Emma",
  content:"Je suis heureuse",
  like:1000
}, 
{
  id: 3,
  name:"Laura",
  content:"Je suis fière",
  like:300
}, 
];
function App() {
let [Tweets, setTweets] = useState(DEFAULT_TWEET);

  return (
    <div>
      <div className="tweet-container">{Tweets.map((Tweet) => {
  return (
    <Tweet
    key={Tweet.id}
    name={Tweet.name}
    content={Tweet.content}
    like={Tweet.like}
    />
  );
  })}</div>
    </div>
  );


export default App;
