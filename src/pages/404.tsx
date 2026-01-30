import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", router.asPath);
  }, [router.asPath]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-8xl font-display font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground font-body mb-8">
          Oops! Page not found
        </p>
        <Button asChild variant="hero">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
