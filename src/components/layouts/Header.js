import React from "react";
//import { Menu } from "semantic-ui-react";

const Header = () => {
  // const [activeItem, setActiveItem] = useState("");

  // const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div className="ui fixed inverted menu">
      <div className="ui container">
        <a  className="header item">
          Project Name
        </a>
        <a  className="item">
          Home
        </a>
        <div className="ui simple dropdown item">
          Dropdown <i className="dropdown icon"></i>
          <div className="menu">
            <a className="item" >
              Link Item
            </a>
            <a className="item" >
              Link Item
            </a>
            <div className="divider"></div>
            <div className="header">Header Item</div>
            <div className="item">
              <i className="dropdown icon"></i>
              Sub Menu
              <div className="menu">
                <a className="item" >
                  Link Item
                </a>
                <a className="item" >
                  Link Item
                </a>
              </div>
            </div>
            <a className="item" >
              Link Item
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
