import { Grid } from "@chakra-ui/react";

type GridProps = {
  rows: number[];
  columns: number[];
  gap?: string;
  children: React.ReactNode;
};

const GridComponent = ({ rows, columns, gap = "4", children }: GridProps) => {
  const gridTemplateRows = rows.map((row) => `repeat(${row}, 1fr)`).join(" ");
  const gridTemplateColumns = columns.map((col) => `repeat(${col}, 1fr)`).join(" ");

  return (
    <Grid
      templateRows={gridTemplateRows}
      templateColumns={gridTemplateColumns}
      gap={gap}
      alignItems="center"
    >
      {children}
    </Grid>
  );
};

export default GridComponent;
