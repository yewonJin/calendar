import { Box, Container, IconButton, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import { Months } from "../types/month";

type Props = {
  curMonth: Months;
  setNextMonth: () => void;
  setPrevMonth: () => void;
};

export default function Calendar(props: Props) {
  const { curMonth, setNextMonth, setPrevMonth } = props;

  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="10px"
      >
        <IconButton aria-label="prev" onClick={() => setPrevMonth()}>
          <ArrowBackIos />
        </IconButton>
        <Typography
          variant="h2"
          minWidth="55px"
          lineHeight="40px"
          paddingBottom="3px"
          textAlign="center"
          fontWeight={600}
          fontSize={24}
          fontFamily="Inter"
        >
          {curMonth}
        </Typography>
        <IconButton aria-label="next" onClick={() => setNextMonth()}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Container>
  );
}
