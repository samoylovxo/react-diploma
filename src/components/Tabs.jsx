import React from "react";
import { Tabs as AntdTabs } from "antd";
import styled from "styled-components";

const StyledTabs = styled(AntdTabs)`
  .ant-tabs-nav {
    margin: 0;

    background-color: #3e3c41;

    &::before {
      border: 0;
    }
  }

  .ant-tabs-tab {
    padding: 20px;

    display: flex;
    justify-content: center;

    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    color: #fff;

    cursor: default !important;

    &.ant-tabs-tab-active {
      background-color: #ffa800;
    }
  }

  .ant-tabs-tab-btn {
    color: #ffffff !important;
  }
`;

const StyledTab = styled.button``;

const Tabs = (props) => {
  const { tabs, activeTabKey } = props;

  return (
    <StyledTabs items={tabs} activeKey={activeTabKey} centered={true} />
    //   <StyledTabs items={tabs}>
    //   {tabs.map((tab, index) => {
    //     const { value, name } = tab;

    //     const isActive = activeTab.value === value;

    //     return (
    //       <StyledTab key={index} isActive={isActive} onClick={onTabClick}>
    //         {name}
    //       </StyledTab>
    //     );
    //   })}
    // </StyledTabs>
  );
};

export { Tabs };
