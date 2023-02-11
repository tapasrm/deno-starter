import { PageProps } from "$fresh/server.ts";

export default function GreetPage(props: PageProps) {
  const { name } = props.params;
  const route = props.url;
  return (
    <main>
      <p>Greetings to you, {name}!</p>
      You came to {route}
    </main>
  );
}
