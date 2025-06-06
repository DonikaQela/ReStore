import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import agent from "../../app/api/agent";
import { useState } from "react";

export default function AboutPage() {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const getValidationError = () => {
    agent.TestErrors.getValidationError()
      .then(() => console.log("Should not see this"))
      .catch((error) => {
        setValidationErrors(error);
      });
  };
  return (
    <Container>
      <Typography gutterBottom variant="h2">
        Error for testing purposes
      </Typography>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          onClick={() => agent.TestErrors.get400Error()}
        >
          Test 400 Error
        </Button>

        <Button
          variant="contained"
          onClick={() => agent.TestErrors.get401Error()}
        >
          Test 401 Error
        </Button>

        <Button
          variant="contained"
          onClick={() => agent.TestErrors.get404Error()}
        >
          Test 404 Error
        </Button>

        <Button
          variant="contained"
          onClick={() => agent.TestErrors.get500Error()}
        >
          Test 500 Error
        </Button>
        <Button variant="contained" onClick={getValidationError}>
          Test Validation Error
        </Button>
      </ButtonGroup>
      {validationErrors.length > 0 && (
        <Alert severity="error">
          <AlertTitle>Validation Errors:</AlertTitle>
          <List>
            {validationErrors.map((error) => (
              <ListItem key={error}>
                <ListItemText>{error}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  );
}
