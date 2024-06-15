import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  Box,
  Text,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const AddGroupModal = ({ setStart, setEnd, handleAddGroup }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button
        onClick={onOpen}
        m={5}
        leftIcon={<AddIcon />}
        colorScheme="blue"
        variant="outline"
      >
        Add Group
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box display={"flex"} gap={"1rem"} textAlign={"center"}>
              <Input
                htmlSize={6}
                width="auto"
                placeholder="From"
                onChange={(e) => setStart(parseInt(e.target.value))}
              />
              <Text mt={2}>-</Text>
              <Input
                htmlSize={6}
                width="auto"
                placeholder="To"
                onChange={(e) => setEnd(parseInt(e.target.value))}
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleAddGroup(onClose)}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddGroupModal;
