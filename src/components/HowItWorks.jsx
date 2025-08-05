// HowItWorks.jsx (Combined with MUI Timeline, React Flow, Step Progress Bar)

import { Box, Typography } from "@mui/material";
// import { styled } from '@mui/system';
import CategoryIcon from "@mui/icons-material/Category";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { ProgressBar } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import "reactflow/dist/style.css";

const steps = [
  {
    title: "Select Category",
    description: "Choose a quote category from the dropdown menu.",
    icon: <CategoryIcon fontSize="inherit" />,
  },
  {
    title: "Generate Quote",
    description: "Click the button to see a fresh, motivational quote.",
    icon: <AutoAwesomeIcon fontSize="inherit" />,
  },
  {
    title: "Copy & Share",
    description: "Copy your quote to clipboard and inspire others!",
    icon: <ContentCopyIcon fontSize="inherit" />,
  },
];

const HowItWorks = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Typography variant="h5" align="center" fontWeight={600} gutterBottom>
        How It Works
      </Typography>

      {/* Option 2: MUI Timeline */}
      <Timeline position="alternate" sx={{ mt: 8 }}>
        {steps.map((step, idx) => (
          <TimelineItem key={idx}>
            <TimelineSeparator>
              <TimelineDot color="primary">{step.icon}</TimelineDot>
              {idx < steps.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1" fontWeight={600}>
                {step.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {step.description}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      {/* Option 3: Progress Bar */}
      <Box sx={{ mt: 6, px: 4 }}>
        <ProgressBar
          percent={100}
          filledBackground="linear-gradient(to right, #4facfe, #00f2fe)"
        />
        <Box display="flex" justifyContent="space-between" mt={2}>
          {steps.map((step, idx) => (
            <Typography key={idx} variant="caption" color="text.secondary">
              {step.title}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorks;
