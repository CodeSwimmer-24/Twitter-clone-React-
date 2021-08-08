import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Khalid Mahmood",
      username: "khalidmahmood",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://i.tribune.com.pk/media/images/1735789-fahad-1529047615/1735789-fahad-1529047615.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.tribune.com.pk/media/images/1735789-fahad-1529047615/1735789-fahad-1529047615.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button onClick={sendTweet} type="submit" className="tweetBox_button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
