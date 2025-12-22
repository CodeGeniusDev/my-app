import React from "react";

interface MagicButtonProps {
  children?: React.ReactNode;
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton = ({
  children,
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
} & MagicButtonProps) => {
  return (
    <button
      title={title}
      className="relative inline-flex w-fit md:mt-10 h-12 overflow-hidden rounded-lg p-px focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-4 py-1 gap-2 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
      >
        {position == "left" && icon}
        {children}
        {position == "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
