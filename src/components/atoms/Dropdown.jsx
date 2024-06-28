import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { space, layout, color, typography, border } from 'styled-system';

const DropdownWrapper = styled.div`
  width: 100%;
  position: relative;
  ${space}
  ${layout}
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.dropdownBackground};
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: background 0.3s;
  ${color}
  ${layout}
  ${typography}
  ${border}

  &:hover {
    background: ${props => props.theme.colors.dropdownHover};
  }
`;

const DropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  background: ${props => props.theme.colors.dropdownBackground};
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-top: none;
  border-radius: ${props => props.theme.borderRadius};
  ${layout}
  ${color}
  ${space}
`;

const DropdownItem = styled.li`
  padding: ${props => props.theme.spacing.md};
  cursor: pointer;
  transition: background 0.3s;
  ${typography}

  &:hover {
    background: ${props => props.theme.colors.dropdownHover};
  }
`;

const Dropdown = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <DropdownWrapper>
      <DropdownHeader onClick={handleToggle}>
        {selected ? selected.label : label}
        {isOpen ? <FaChevronDown /> : <FaChevronRight />}
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleSelect(option)}>
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
