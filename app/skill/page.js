// workページ
import Container from "components/container";
import Hero from "components/hero";
import Works from "components/works";
// import Card from "components/Card"

export default function Skill() {

  return (
    <Container>
      <Hero title="Skill" subtitle="作成中のページ"></Hero>
      <Works></Works>
      {/* <Card></Card> */}
    </Container>
  );
}

export const metadata = {
  title: "skill",
};
