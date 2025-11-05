import Hero from "./elements/Hero";

export default function Home({ actualLocationName }) {
  return (
    <>
      <Hero actualLocationName={actualLocationName} />
    </>
  );
}
