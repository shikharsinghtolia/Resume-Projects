import React, {  useState } from 'react'
import { ChatState } from "../Context/chatProvider";
import { Box } from "@chakra-ui/react";

import SideDrawer from "../components/miscellaneous/SideDrawer";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";
// import { useState } from "react";

const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain,setFetchAgain] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} setFetchAgain= {setFetchAgain} />}
        {user && <ChatBox  fetchAgain={fetchAgain} setFetchAgain= {setFetchAgain} />}
      </Box>
    </div>
  );
};

export default ChatPage;
