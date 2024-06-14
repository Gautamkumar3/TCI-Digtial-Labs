import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { getTodosData } from "../store/dashboard/dashboard.actions";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { todoData } = useSelector((store) => store.todoReducer);
  console.log(todoData, "todoData");
  useEffect(() => {
    dispatch(getTodosData());
  }, []);
  return (
    <Box>
      <Text>Dashboard</Text>
    </Box>
  );
};

export default Dashboard;
