import { Box, Container, IconButton, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import { Months } from "../types/month";

type Props = {
  curYear: number;
  curMonth: Months;
  setNextMonth: () => void;
  setPrevMonth: () => void;
};

export default function Date(props: Props) {
  const { curYear, curMonth, setNextMonth, setPrevMonth } = props;

  return (
    <Container disableGutters>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontFamily="inter"
          gap='4px'
        >
          <IconButton aria-label="prev" onClick={() => setPrevMonth()}>
            <ArrowBackIos sx={{ fontSize: "1.3rem" }} />
          </IconButton>
          <Typography
            variant="h2"
            minWidth="55px"
            lineHeight="40px"
            paddingBottom="3px"
            textAlign="center"
            fontWeight={600}
            fontSize={24}
          >
            {curMonth}
          </Typography>
          <IconButton aria-label="next" onClick={() => setNextMonth()}>
            <ArrowForwardIos sx={{ fontSize: "1.3rem" }} />
          </IconButton>
        </Box>
        <Typography
          variant="h2"
          mr="8px"
          lineHeight="40px"
          fontSize={24}
          fontWeight={600}
        >
          {curYear}
        </Typography>
      </Box>
    </Container>
  );
}
