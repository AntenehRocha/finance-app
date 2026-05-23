import Card from "./components/card";
import TradingChart from "./components/TradingChart";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 p-10 flex flex-col gap-10 items-center">
      <div className="w-full max-w-5xl">
        <TradingChart />
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <Card
          nombre="Anteneh"
          apellido="Rocha"
          edad={18}
          profesion="Desarrollador fullstack"
          ocupado={true}
        />
        <Card
          nombre="Mario"
          apellido="Bouzon"
          edad={21}
          profesion="Desarrollador web"
          ocupado={false}
        />
      </div>
    </div>
  );
}
