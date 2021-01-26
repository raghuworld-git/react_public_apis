import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

const Header = () => {
  const [activeItem, setActiveItem] = useState("");
 
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div>
      <Menu inverted>
        <Menu.Item header>Our Company</Menu.Item>
        <Menu.Item
          name="aboutUs"
          active={activeItem === "aboutUs"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="jobs"
          active={activeItem === "jobs"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="locations"
          active={activeItem === "locations"}
          onClick={handleItemClick}
        />
      </Menu>
    </div>
  );
};

export default Header;
