import React from "react";
import { ArrowForwardIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

function GroupComponent({ group, index, handleDelete }) {
  return (
    <Box
      key={index}
      display={"flex"}
      width={"fit-content"}
      height="40px"
      my={2}
    >
      <Box p={"5px 8px"}>
        <DeleteIcon
          color={"#22A7F0"}
          cursor={"pointer"}
          onClick={() => handleDelete(index)}
        />
      </Box>
      <Box border={"1px solid gray"} p={"5px"} background={"#eee"}>
        Group {index + 1}
      </Box>
      <Box
        borderY={"1px solid gray"}
        textAlign={"center"}
        minW={"50px"}
        p={"5px 8px"}
      >
        {group[0]["id"]}
      </Box>
      <Box
        border={"1px solid gray"}
        textAlign={"center"}
        minW={"40px"}
        p={"5px 8px"}
      >
        <ArrowForwardIcon color={"#22A7F0"} />
      </Box>

      <Box
        w="40px"
        bg="#eee"
        p={"5px 8px"}
        borderY="1px solid gray"
        borderRight={"1px solid gray"}
      >
        {group[group.length - 1]["id"]}
      </Box>
    </Box>
  );
}

export default GroupComponent;
