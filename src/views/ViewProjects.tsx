import { rem } from 'polished';

import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import {
  Chip,
  IconButton,
  List,
  ListItem,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

import { PROJECTS } from 'constants/projects.constants';

const handleClickUrl = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
export const ViewProjects = () => (
  <>
    <List>
      {PROJECTS.map(({ title, description, keywords, url, github }) => (
        <ListItem divider sx={{ p: 0, pb: 3, mb: 3 }}>
          <Stack>
            <Typography fontWeight={700}>{title}</Typography>
            <Typography fontSize={rem(12)}>{description}</Typography>
            <Stack mt={2} mb={3} direction="row" gap={1} flexWrap="wrap">
              {keywords.map(keyword => (
                <Chip
                  color="primary"
                  label={keyword}
                  size="small"
                  sx={{ fontWeight: 700, fontSize: rem(12) }}
                />
              ))}
            </Stack>
            <Stack direction="row">
              <Tooltip arrow placement="top" title="Launch application.">
                <IconButton onClick={() => handleClickUrl(url)}>
                  <LaunchIcon />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="top" title="See the code.">
                <IconButton onClick={() => handleClickUrl(github)}>
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </ListItem>
      ))}
    </List>
    <Typography>Many more projects coming soon...</Typography>
  </>
);
