import Box from "./../elements/Box";
import Button from "./../../components/Button";

export default function Collaboration() {
  return (
    <Box boxTitle={"collaboration"} itemClassName="collaborationBoc">
      <h1>Tekst naglowka</h1>
      <Button to="/contact">Lets collaborate cos fajnego!</Button>
    </Box>
  );
}
