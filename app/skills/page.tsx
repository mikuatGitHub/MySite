// workページ
import Container from "components/container";
import Hero from "components/hero";

import { MongoClient } from "mongodb";
import clientPromise from "lib/mongodb";
import Cards from "components/cards";

export default async function Skills() {

  // const client = await MongoClient.connect(process.env.MONGODB_URI);
  const client = await clientPromise;
  const db = client.db("skillshelf");
  const skills = await db.collection("skills").find().toArray();

  return (
    <Container>
      <Hero title="Skills" subtitle="mongoDBより取得"></Hero>

      {/* <div className="cards">
        <ul>
        {skills.map((skill) => (
          // <li key={skill._id}>{ skill.title }</li>
          <Card key={skill._id} title={skill.title} rating={skill.rating} description={skill.description} comment={skill.comment} />
        ))}
        </ul>
      </div> */}

      <Cards skills={skills}></Cards>

    </Container>
  );
}

export const metadata = {
  title: "skills",
};

