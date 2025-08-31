import NewLanding from "@/Landing/NewLanding";

export async function generateStaticParams() {
  // The 'async' keyword handles the Promise for you.
  // Simply return the array of objects directly.
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}


export default function Home() {
  return (
    <NewLanding />
  );
}
