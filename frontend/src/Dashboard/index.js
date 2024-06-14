import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getTodosData } from "../store/dashboard/dashboard.actions";
import { useDispatch, useSelector } from "react-redux";
import { ArrowForwardIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";
import StatusComponent from "./Component/StatusComponent";
import GroupComponent from "./Component/GroupComponent";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { todoData, groups } = useSelector((store) => store.todoReducer);
  const [toogleStatus, setToogleStatus] = useState(false);

  useEffect(() => {
    dispatch(getTodosData());
  }, []);

  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        width={"95%"}
        justifyContent={"center"}
        gap={"3rem"}
      >
        <Box>
          {groups?.map((el, index) => (
            <GroupComponent key={index} group={el} index={index} />
          ))}
        </Box>
        {toogleStatus && (
          <Box width={"60%"}>
            {groups?.map((group) => (
              <StatusComponent data={group} />
            ))}
          </Box>
        )}
      </Box>

      <Box m={"2rem"}>
        <Button
          m={5}
          leftIcon={<AddIcon />}
          colorScheme="blue"
          variant="outline"
        >
          Add Group
        </Button>
        <Button
          onClick={() => setToogleStatus(!toogleStatus)}
          colorScheme="blue"
        >
          {toogleStatus ? "Hide Status" : "Show Status"}
        </Button>
      </Box>
    </>
  );
};

export default Dashboard;
