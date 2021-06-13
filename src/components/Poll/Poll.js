import { List, ListItem, Button } from "./Poll.elements";
import React, { useEffect, useState } from "react";
const chatWantUrl = "https://chatstyler.tk/crud/read/wants";
const Poll = () => {
  const [items, updateItems] = useState([]);
  const [voteToggle, toggleVotes] = useState(false);

  const handleVoteToggle = () => {
    toggleVotes(!voteToggle);
  };

  const Rehydrate = async () => {
    const results = await fetch(chatWantUrl);
    const json = await results.json();
    json.sort((a, b) =>
      parseInt(a.uniqueVotes) > parseInt(b.uniqueVotes) ? -1 : 1
    );
    updateItems(json);
  };

  useEffect(() => {
    setInterval(Rehydrate, 15000);
    Rehydrate();
  }, []);

  return (
    <List>
      <Button onClick={handleVoteToggle}>Unique/Total Toggle</Button>
      {items.map(({ item, totalVotes, uniqueVotes }) => {
        return (
          <ListItem>
            {voteToggle
              ? `${item.toUpperCase()}: ${uniqueVotes} Unique Votes`
              : `${item.toUpperCase()}: ${totalVotes} Total Votes`}
          </ListItem>
        );
      })}
    </List>
  );
};

export default Poll;
