import { useEffect, useState } from "react";

export function DesktopOverlay() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-pink-100 p-8">
      <div className="max-w-md text-center">
        <div className="text-8xl mb-6 animate-bounce">📱</div>
        <h1 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
          Switch to your phone to claim this offer
        </h1>
        <p className="text-lg text-foreground/70">
          This page is designed for mobile. Open this link on your phone for the best experience.
        </p>
      </div>
    </div>
  );
}
