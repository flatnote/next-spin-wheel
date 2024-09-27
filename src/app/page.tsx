import Footer from "@/components/Footer";
import Spin from "@/components/Spin";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl text-center w-full font-bold xl:mb-12">
          Spin to win!!!
        </h1>
        <Spin />
      </main>
      <Footer />
    </div>
  );
}
