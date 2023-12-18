import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import styled from "styled-components";

export default function Backdrop({ toggleSidebar }) {
  return <Wrapper className="darkBg" onClick={() => toggleSidebar(false)}></Wrapper>;
}

// Define PropTypes for the component
Backdrop.propTypes = {
  toggleSidebar: PropTypes.func.isRequired, // Assuming toggleSidebar is a function
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.8;
`;
