import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Container,
  Paper,
  useTheme,
  MenuItem,
  Select,
  Box,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "animate.css";
import { useToast } from "../contexts/ToastContext";
import { useLoading } from "../contexts/LoadingContext";

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  textAlign: "center",
  minHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

const QuoteBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: 16,
  boxShadow: theme.shadows[5],
  backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing(4),
  position: "relative",
  minHeight: "20vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const GenerateButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  textTransform: "none",
  padding: "10px 24px",
  borderRadius: 12,
}));

const CopyButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
}));

const QuoteGenerator = () => {
  const theme = useTheme();
  const { showToast } = useToast();
  const { showLoader, hideLoader } = useLoading();

  const [quotesData, setQuotesData] = useState({});
  const [category, setCategory] = useState("inspirational");
  const [quote, setQuote] = useState(null);

  // Load quotes.json
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/quotes.json')
      .then((res) => res.json())
      .then((data) => setQuotesData(data));
  }, []);

  // Generate random quote from selected category
  const generateQuote = () => {
    showLoader();
    setTimeout(() => {
      const selectedQuotes = quotesData[category] || [];
      const random =
        selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];
      setQuote(random || null);
      hideLoader();
    }, 1000);
  };

  useEffect(() => {
    document.title = "Generator - Terminal Wizard";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCopy = () => {
    if (quote) {
      const fullText = `"${quote.quote}" - ${quote.author}`;
      navigator.clipboard.writeText(fullText);
      showToast("Quote copied to clipboard!", "success");
    }
  };

  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h4" fontWeight={600}>
        Random Quote Generator
      </Typography>

      <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 1 }}>
        Select a category and click to generate a fresh quote
      </Typography>

      {/* Topic Selector */}
      <Box sx={{ mt: 3 }}>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          size="small"
          sx={{
            minWidth: 200,
            borderRadius: 2,
            textTransform: "capitalize",
            fontWeight: 500,
          }}
        >
          {Object.keys(quotesData).map((key) => (
            <MenuItem key={key} value={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Quote Box */}
      <QuoteBox className="animate__animated animate__fadeIn">
        <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
          {quote ? `"${quote.quote}"` : "Click generate to get started"}
        </Typography>

        {quote?.author && (
          <Typography
            variant="subtitle2"
            sx={{
              mt: 1,
              fontStyle: "italic",
              color: theme.palette.text.secondary,
            }}
          >
            – {quote.author}
          </Typography>
        )}

        {quote && (
          <CopyButton color="primary" onClick={handleCopy}>
            <ContentCopyIcon fontSize="small" />
          </CopyButton>
        )}
      </QuoteBox>

      <GenerateButton
        variant="contained"
        color="primary"
        onClick={generateQuote}
        className="animate__animated animate__pulse"
      >
        Generate New Quote
      </GenerateButton>
    </StyledContainer>
  );
};

export default QuoteGenerator;
