import Box from "./../elements/Box";
import Button from "./../../components/Button";

export default function Collaboration() {
  return (
    <Box
      boxTitle={"zróbmy-razem-coś-wyjątkowego"}
      itemClassName="collaborationBox"
    >
      <h2>
        Zróbmy razem <span className="highlight">coś wyjątkowego</span>!
      </h2>
      <p>
        Projektuję i tworzę strony, które łączą estetykę, technologię i
        funkcjonalność. Jeśli masz pomysł — pomogę Ci zamienić go w coś
        konkretnego.
      </p>
      <Button bigSize={true} to="/kontakt">
        porozmawiajmy
      </Button>
    </Box>
  );
}
