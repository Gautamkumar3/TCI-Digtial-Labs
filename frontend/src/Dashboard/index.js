import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getTodosData } from "../store/dashboard/dashboard.actions";
import { useDispatch, useSelector } from "react-redux";
import { ArrowForwardIcon, DeleteIcon } from "@chakra-ui/icons";
import StatusComponent from "./Component/StatusComponent";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { todoData, groups } = useSelector((store) => store.todoReducer);
  useEffect(() => {
    dispatch(getTodosData());
  }, []);

  return (
    <Box>
      {groups?.map((el, index) => (
        <Box key={index} display={"flex"} width={"fit-content"} height="40px">
          <Box p={"5px 8px"}>
            <DeleteIcon />
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
            {el[index]["id"]}
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
            {el[el.length - 1]["id"]}
          </Box>
        </Box>
      ))}
      <Box>
        {groups?.map((group) => (
          <StatusComponent data={group} />
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
