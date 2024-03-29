import { Button } from "antd";
import UserCard from "../UserCard";

function Main() {
  const name = "Martin";
  return (
    <main className="p-4 grow">
      <h2>Home</h2>
      <Button>Boton X</Button>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 users">
        {/* <UserCard
          name={name}
          age={25}
          isDevloper={true}
          languages={["ReactJs", "JavaScript", "Python", "HTML", "CSS", "C++"]}
          address={{
            country: "Argentina",
            city: "Los Toldos",
            street: "Calle Falsa",
            number: 123,
          }}
        /> */}

        <UserCard name="Maria" />

        <UserCard name="Pedro" />

        <UserCard name="Luis" />
      </section>
    </main>
  );
}

export default Main;
