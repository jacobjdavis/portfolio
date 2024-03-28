import { rem } from 'polished';

import { Box, Grid, Icon, Stack, Tooltip, Typography } from '@mui/material';

import { EXPERTISE } from 'constants/expertise.constants';

export const ExpertiseSkills = () => (
  <Box>
    {EXPERTISE.map(({ name: groupName, skills }) => (
      <Stack mb={5} key={`expertise-${groupName}`}>
        <Typography mb={2} fontSize={rem(12)} fontWeight={700}>
          {groupName}
        </Typography>
        <Grid container columnSpacing={6} rowSpacing={3}>
          {skills.map(({ name: skillName, icon }) => (
            <Grid item key={`skill-${skillName}`}>
              <Tooltip arrow title={skillName} placement="top">
                <Icon
                  className={icon}
                  color="primary"
                  sx={{ fontSize: rem(55) }}
                />
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Stack>
    ))}
  </Box>
);
