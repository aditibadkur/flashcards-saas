import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="mt-28 min-h-screen"> 
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-3xl font-bold mt-10">Welcome to Flashcard SaaS</h1>
        <p className="text-lg text-gray-600 mt-6">Some tagline</p>
        <Button className="mt-4">Get Started</Button>
      </div>
    </div>
  );
}
