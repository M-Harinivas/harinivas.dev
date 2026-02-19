import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

interface AnimatedSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular" | "rounded";
}

function AnimatedSkeleton({ 
  className, 
  variant = "rectangular",
  ...props 
}: AnimatedSkeletonProps) {
  const variantClasses = {
    text: "h-4 w-full rounded",
    circular: "rounded-full",
    rectangular: "rounded-md",
    rounded: "rounded-xl",
  };

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden bg-muted",
        variantClasses[variant],
        className
      )}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}

interface ContentSkeletonProps {
  lines?: number;
  className?: string;
}

function ContentSkeleton({ lines = 3, className }: ContentSkeletonProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <AnimatedSkeleton
          key={i}
          variant="text"
          style={{
            width: i === lines - 1 ? "70%" : "100%",
          }}
        />
      ))}
    </div>
  );
}

interface CardSkeletonProps {
  className?: string;
}

function CardSkeleton({ className }: CardSkeletonProps) {
  return (
    <div className={cn("bento-card space-y-4", className)}>
      <div className="flex items-center gap-4">
        <AnimatedSkeleton variant="circular" className="w-12 h-12" />
        <div className="flex-1 space-y-2">
          <AnimatedSkeleton variant="text" className="h-4 w-3/4" />
          <AnimatedSkeleton variant="text" className="h-3 w-1/2" />
        </div>
      </div>
      <ContentSkeleton lines={3} />
    </div>
  );
}

export { Skeleton, AnimatedSkeleton, ContentSkeleton, CardSkeleton };
