import { Box } from "@chakra-ui/react";
import React from "react";

const StatusComponent = ({ data = [] }) => {
  return (
    <Box>
      {data?.map((item) => (
        <Box key={item.id}></Box>
      ))}
    </Box>
  );
};

export default StatusComponent;
