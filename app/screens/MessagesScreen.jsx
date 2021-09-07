import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";

import Message from "../components/message";
import Separator from "../components/ItemSeparator";
import RenderRightAction from "../components/RenderRightAction";

import useApi from "../hooks/useApi";
import messagesApi from "../api/messages";
import colors from "../config/colors";

const MessagesScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {
    data: messages,
    setData: setMessages,
    request: loadMessages,
  } = useApi(messagesApi.get);

  useEffect(() => {
    loadMessages();
  }, []);

  const handleDelete = (id) => {
    setMessages([...messages.filter((m) => m.id !== id)]);
  };

  return (
    <>
      {messages.length === 0 && <Text style={styles.text}>No Messages</Text>}
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <Message
            title={item.fromUser.name}
            subtile={item.content}
            renderRightActions={() => (
              <RenderRightAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          loadMessages();
          setRefreshing(false);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 25,
    color: colors["medium"],
  },
});

export default MessagesScreen;
