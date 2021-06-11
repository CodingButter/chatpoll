import { List, ListItem } from "./Poll.elements";
import React, { useEffect, useState } from "react";
const chatWantUrl = "https://chatstyler.tk/crud/read/wants";
const Poll = () => {
  const [items, updateItems] = useState([]);

  const Rehydrate = async () => {
    const results = await fetch(chatWantUrl);
    const json = await results.json();
    json.sort((a, b) => (parseInt(a.votes) > parseInt(b.votes) ? true : false));
    updateItems(json);
  };

  useEffect(() => {
    setInterval(Rehydrate, 15000);
    Rehydrate();
  }, []);

  return (
    <List>
      {items.map(({ name, votes }) => {
        return (
          <ListItem>
            {votes} people want a {name}
          </ListItem>
        );
      })}
    </List>
  );
};

export default Poll;
