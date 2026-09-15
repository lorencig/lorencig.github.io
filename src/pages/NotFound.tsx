import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-background overflow-hidden">
      <SEO
        title="Page not found"
        description="This page could not be found on Lorenci Gjurgjaj's website."
        path={location.pathname}
        noIndex
      />

      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-1/4 h-1/4 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-1/5 h-1/5 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
       <div className="absolute -bottom-10 -right-10 w-1/3 h-1/3 bg-yellow-500/5 rounded-full blur-3xl -z-10"></div>


      <div className="text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent pb-2">
        Houston, we have a broken link
        </h1>
        <p className="text-xl text-foreground mb-8">
        Well, this is awkward. We lost the page in the quantum realm
        </p>
        <a href="/" className="text-primary hover:underline transition-colors duration-200">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;