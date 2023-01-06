import React from "react";
import {
  WorkHeaderContainer,
  WorkHeading,
  WorkHeadingPretext,
  WorkHeadingDesc,
} from "./style";

const WorkHeader = () => {
  return (
    <WorkHeaderContainer>
      <WorkHeading>
        <span>
          <WorkHeadingPretext>/</WorkHeadingPretext>
          work
          <WorkHeadingPretext>.</WorkHeadingPretext>
        </span>
      </WorkHeading>
      <WorkHeadingDesc>
        Selected projects I've worked on in the past.
      </WorkHeadingDesc>
    </WorkHeaderContainer>
  );
};

export default WorkHeader;
