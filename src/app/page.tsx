import StudenTable from "app/components/studenTable";
export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-center mt-8">
        ¿Crees poder lograrlo? Si no confias en ti, quien lo hará?
      </h1>
      <StudenTable></StudenTable>
      <h2 className="text-2xl text-center mt-4">
        Aquí debe de verse tu tabla, ¿cuál tabla? Lee el archivo README
      </h2>
    </>
  );
}
