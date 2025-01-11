import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;

  if (id === "kids") {
    notFound(); // notFound returns a never so it's not necessary to return anything
  }

  return (
    <div>
      <h1>Category Page {id}</h1>
    </div>
  );
}
