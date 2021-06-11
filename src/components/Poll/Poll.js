import { List, ListItem } from "./Poll.elements";
import React, { useEffect, useState } from "react";
const chatWantUrl = "https://chatstyler.tk/crud/read/wants";
const Poll = () => {
  const [items, updateItems] = useState([]);

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
      {items.map(({ item, totalVotes, uniqueVotes }) => {
        return (
          <ListItem>
            {item} : {uniqueVotes} unique votes and {totalVotes} total votes
          </ListItem>
        );
      })}
    </List>
  );
};

export default Poll;
