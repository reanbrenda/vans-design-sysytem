import React from 'react';
import styled from 'styled-components';
import { space, layout, color, typography } from 'styled-system';

const Tab = styled.button`
  background: ${props => props.theme.colors.tabInactive};
  color: ${props => props.theme.colors.textPrimary};
  border: 1px solid ${props => props.theme.colors.borderColor};
  padding: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.tab};
  line-height: ${props => props.theme.lineHeights.tab};
  cursor: pointer;
  margin-right: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius};
  transition: background 0.3s, color 0.3s;

  ${color}
  ${space}
  ${layout}
  ${typography}

  &:hover {
    background: ${props => props.theme.colors.tabHover};
  }

  &:disabled {
    background: ${props => props.theme.colors.tabDisabled};
    color: ${props => props.theme.colors.disabledText};
    cursor: not-allowed;
  }

  &.active {
    background: ${props => props.theme.colors.tabActive};
    color: ${props => props.theme.colors.background};
  }
`;

const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  ${layout}
  ${space}
`;

const Tabs = ({ tabs, activeTab, onTabClick }) => (
  <TabsWrapper>
    {tabs.map((tab, index) => (
      <Tab
        key={index}
        className={activeTab === index ? 'active' : ''}
        onClick={() => onTabClick(index)}
        disabled={tab.disabled}
      >
        {tab.label}
      </Tab>
    ))}
  </TabsWrapper>
);

export default Tabs;
