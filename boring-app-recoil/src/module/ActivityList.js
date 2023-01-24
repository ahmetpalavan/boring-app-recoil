import { Box } from "@material-ui/core";
import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTextState } from "../store/selectors";

const ActivityList = () => {
  const text = useRecoilValue(filteredTextState);
  return (
    <Box style={{display:"flex", flexWrap:"wrap"}}>
      {text.length > 0 ? (
        (text.map((i)=>(
          <Box key={i.key}  style={{padding:5,margin:2,backgroundColor:"wheat", color:"blue",}}>
            <h3>{i.activity}</h3> 
          </Box>  
        )))
      ) : (
        <Box style={{backgroundColor:"black", color:"darkgray",borderColor:"red", border:2, margin:2, padding:12}}>No Activities</Box>

      )}
    </Box>
  )
};

export default ActivityList;
