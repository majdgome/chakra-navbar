import React from "react";
import { Box, List, ListItem, Link } from "@chakra-ui/react";

const NavItems = () => {
  const navpages = ["home", "about", "shop", "contact", "login"];

  return (
    <Box as="nav">
      <List
      display='flex'
gap={8}

flexDir={{base:'column' , lg:'row'}}
      
      >
        {navpages.map((item) => {
          return (
            <ListItem key={item}>
              <Link href={   item === 'home' ? '/' : ` /${item}`}>{item}</Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default NavItems;
