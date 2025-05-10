import { useLocation } from "react-router-dom";
import { useEffect } from "react";
// Assuming Tailwind CSS is configured and utility classes like
// bg-background, text-foreground, text-muted-foreground,
// bg-gradient-to-r, bg-clip-text, text-transparent, z-10, relative, absolute,
// rounded-full, blur-3xl are available from your setup.

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // This remains for logging purposes
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    // Use min-h-screen and theme background color
    <div className="min-h-screen flex items-center justify-center relative bg-background overflow-hidden"> {/* Added relative, bg-background, overflow-hidden */}

      {/* Background elements (same as other themed pages) */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-1/4 h-1/4 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-1/5 h-1/5 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
       <div className="absolute -bottom-10 -right-10 w-1/3 h-1/3 bg-yellow-500/5 rounded-full blur-3xl -z-10"></div> {/* Added one more for variety */}


      {/* Content Container - Ensure it's above background blurs */}
      <div className="text-center relative z-10"> {/* Added relative z-10 */}
        {/* Apply gradient text styles to 404 */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent pb-2">
        Houston, we have a broken link
        </h1>
        {/* Use theme text color */}
        <p className="text-xl text-foreground mb-8"> {/* Used text-foreground and increased mb */}
        Well, this is awkward. We lost the page in the quantum realm
        </p>
        {/* Style the link with a theme color (assuming 'text-primary' exists) or keep simple underline */}
        <a href="/" className="text-primary hover:underline transition-colors duration-200"> {/* Used text-primary (common theme color) and added hover/transition */}
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;