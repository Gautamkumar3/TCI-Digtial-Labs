import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { addGroup, getTodosData } from "../store/dashboard/dashboard.actions";
import { useDispatch, useSelector } from "react-redux";
import StatusComponent from "./Component/StatusComponent";
import GroupComponent from "./Component/GroupComponent";
import AddGroupModal from "./Component/AddGroupModal";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { todoData, groups } = useSelector((store) => store.todoReducer);
  const [toogleStatus, setToogleStatus] = useState(false);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  function baseConditionCheck(start, end) {
    if (start <= 0 || end > 10) {
      alert(
        "This is not a valid group. 'From' must be greater than 0 and 'To' must be less than or equal to 10."
      );
      return false;
    } else if (start > end) {
      alert(
        "This is not a valid group. 'From' must be less than or equal to 'To'."
      );
      return false;
    }
    return true;
  }

  function handleAddGroup(onClose) {
    if (groups.length == 1) {
      let group = groups[0];
      if (group[0]["id"] == 1 && group[group.length - 1]["id"] == 10) {
        if (baseConditionCheck(start, end)) {
          if (start == 1) {
            let tempGroup = todoData.slice(start - 1, end);
            console.log(tempGroup, "tempGroup");
            dispatch(addGroup([tempGroup]));
            setStart("");
            setEnd("");
          } else {
            return alert("It is your first group so it must start from 1");
          }
        }
      } else {
        let group = groups[groups.length - 1];
        group = group[group.length - 1];
        console.log(group["id"], start, "start");
        if (group["id"] < start && baseConditionCheck(start, end)) {
          let tempGroup = todoData.slice(start - 1, end);
          dispatch(addGroup([...groups, tempGroup]));
          setStart("");
          setEnd("");
        } else {
          return alert("This is not a valid group");
        }
      }
    } else {
      let group = groups[groups.length - 1];
      group = group[group.length - 1];
      console.log(group["id"], start, "start");
      if (group["id"] < start && baseConditionCheck(start, end)) {
        let tempGroup = todoData.slice(start - 1, end);
        dispatch(addGroup([...groups, tempGroup]));
        setStart("");
        setEnd("");
      }
    }
    console.log(start, end);
    onClose();
  }

  useEffect(() => {
    dispatch(getTodosData());
  }, [dispatch]);

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
        <AddGroupModal
          setStart={setStart}
          setEnd={setEnd}
          handleAddGroup={handleAddGroup}
        />
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
