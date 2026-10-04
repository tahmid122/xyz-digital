import { siteInfo } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-6">
        <Sparkles className="size-3.5" />
        <span>Welcome to {siteInfo.name}</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground max-w-3xl">
        Innovate, Build & Scale With{" "}
        <span className="text-primary underline decoration-primary/30">
          {siteInfo.name}
        </span>
      </h1>

      <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl">
        {siteInfo.description}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button size="lg" className="rounded-xl gap-2 font-medium">
          <Link href="/services" className="flex items-center gap-2">
            Explore Services
            <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="rounded-xl font-medium"
        >
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
