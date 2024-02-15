import { Box } from "@chakra-ui/react";
import Toast from ".";

const ExampleToasts = () => {
  return (
    <Box p={4}>
      <Toast title="This is a success toast" />
      <Toast
        title="This is a warning toast"
        status="warning"
        description="Please be careful!"
      />
      <Toast
        title="This is an error toast"
        status="error"
        description="Something went wrong."
      />
      <Toast
        title="This is an info toast"
        status="info"
        description="Here's some information."
      />
    </Box>
  );
};

export default ExampleToasts;
