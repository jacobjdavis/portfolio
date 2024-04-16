import { Stack, styled } from '@mui/material';

import { ExpertiseProfile } from 'components/ExpertiseProfile';
import { ExpertiseSkills } from 'components/ExpertiseSkills';

const StyledStack = styled(Stack)`
  flex-direction: column;
  @media screen and (min-width: 767px) {
    flex-direction: row;
  }
`;

export const ViewExpertise = () => (
  <StyledStack direction="row" alignItems="center">
    <ExpertiseProfile />
    <ExpertiseSkills />
  </StyledStack>
);
