import { Box, Text } from "@chakra-ui/react";
import React from "react";

const StatusComponent = ({ data = [] }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      border="1px solid gray"
      p="5px"
      height="40px"
      borderRadius={"8px"}
      my={2}
    >
      {data?.map((item, i) => (
        <Text key={i}>{` (${item.id}) ${item.completed} ${
          data.length == i + 1 ? "" : ","
        }  `}</Text>
      ))}
    </Box>
  );
};

export default StatusComponent;
