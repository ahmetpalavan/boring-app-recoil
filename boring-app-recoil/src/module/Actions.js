import React from "react";
import axios from "axios";
import { Types } from "./constant";
import { textState , filterState } from "../store/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { Button, Box } from "@material-ui/core";

const Actions = () => {
  const filter = useRecoilValue(filterState);
  const [text, setText] = useRecoilState(textState);
  const ActionCTA = () => {
    const type = filter === Types[0] ? "" : filter;
    axios
      .get(`https://www.boredapi.com/api/activity/?type=${type}`)
      .then((res) => res.data)
      .then((res) => {
        setText((text) => [...text, res]);
      });
  };
  console.log("text", text);
  return (
    <Box style={{display:"flex", margin:12 }}>
      <Button color="primary" onClick={ActionCTA}>Generate Random Activities</Button>
      <Button color="primary" onClick={()=>{
        setText([])
      }}>Reset Data</Button>
    </Box>
  );
};

export default Actions;
