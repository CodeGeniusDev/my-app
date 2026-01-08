import { LiquidEffectAnimation } from "@/components/ui/liquid-effect-animation";
import Link from "next/link";
import MagicButton from "@/components/ui/magic-button";
import { FaLocationArrow } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full bg-gray-50 dark:bg-gray-900">
      {/* Decorative background animation (kept behind content, low opacity) */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-30">
        <LiquidEffectAnimation />
      </div>

      {/* Centered content */}
      <div className="relative z-20 flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-lg p-8 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl text-center">
          <h1 className="text-7xl sm:text-9xl font-extrabold mb-4 leading-none text-gray-900 dark:text-white">
            404
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
            Page Not Found
          </h2>

          <p className="text-base sm:text-lg mb-6 text-gray-600 dark:text-gray-300">
            Sorry — the page you’re looking for doesn’t exist. It may have been
            moved or removed.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:justify-center pt-2">
            <Link href="/">
              <MagicButton
                title="Return to Home"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="w-full sm:w-auto px-6 py-3"
              >
                Return to Home
              </MagicButton>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
