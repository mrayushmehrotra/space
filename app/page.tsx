import Hero from "@/components/main/Hero";
export default function Home() {
  return (
    <main className="flex items-center justify-center gap-3 h-full  w-full">
      <div className="flex flex-col gap-20">
        <Hero />
      </div>
    </main>
  );
}
