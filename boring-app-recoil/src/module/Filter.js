/** @format */

import React from "react";
import { Types as ActivityTypes } from "./constant";
import { Button, ButtonGroup } from "@material-ui/core";
import { useRecoilState } from "recoil";
import { filterState } from "../store/atoms";

const Filter = () => {

  const [filter, setFilter] = useRecoilState(filterState);
  return (
    <ButtonGroup color="primary" aria-label="outlined primary button group ">
      {ActivityTypes.map((a) => (
        <Button onClick={()=>setFilter(a)} color={filter === a ? "secondary" : "primary"} key={a}>
          {a}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Filter;
