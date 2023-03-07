import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/contstant";

function SideBar({selectedCategory, setSelectedCategory}) {


  return (
    <Stack
      direction="row"
      sx={{
        overflow: 'scroll',
        height: { sx: "auto", md: "95%" },
        flexDirection: {  md: "column" },
        // width: 'fit-content'
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
           
            background: category.name === selectedCategory && "#fc1503",
            color: "white",
          }}
          key={category.name}
        >
          <div  style={{display: 'flex', width: 'max-content', alignItems: 'center'}}>
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span></div>
        </button>
      ))}
    </Stack>
  );
}

export default SideBar;
