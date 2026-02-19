import { motion } from "framer-motion";
import { ReactNode, useState, InputHTMLAttributes, TextareaHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FloatingLabelInput = ({
  label,
  error,
  className,
  ...props
}: FloatingLabelInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value !== "");
    props.onChange?.(e);
  };

  return (
    <div className="relative">
      <motion.input
        className={cn(
          "w-full px-4 pt-6 pb-2 rounded-xl bg-secondary border-2 transition-colors duration-300",
          isFocused ? "border-primary" : "border-transparent",
          error && "border-destructive",
          className
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        {...props}
      />
      <motion.label
        className={cn(
          "absolute left-4 pointer-events-none transition-all duration-300 origin-left",
          isFocused || hasValue || props.value
            ? "top-2 text-xs"
            : "top-4 text-sm",
          isFocused ? "text-primary" : "text-muted-foreground",
          error && "text-destructive"
        )}
        animate={{
          y: isFocused || hasValue || props.value ? -2 : 0,
          scale: isFocused || hasValue || props.value ? 0.85 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.label>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-destructive mt-1 ml-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

interface FloatingLabelTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const FloatingLabelTextarea = ({
  label,
  error,
  className,
  ...props
}: FloatingLabelTextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHasValue(e.target.value !== "");
    props.onChange?.(e);
  };

  return (
    <div className="relative">
      <motion.textarea
        className={cn(
          "w-full px-4 pt-6 pb-2 rounded-xl bg-secondary border-2 transition-colors duration-300 min-h-[140px] resize-none",
          isFocused ? "border-primary" : "border-transparent",
          error && "border-destructive",
          className
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        {...props}
      />
      <motion.label
        className={cn(
          "absolute left-4 pointer-events-none transition-all duration-300 origin-left",
          isFocused || hasValue || props.value
            ? "top-2 text-xs"
            : "top-4 text-sm",
          isFocused ? "text-primary" : "text-muted-foreground",
          error && "text-destructive"
        )}
        animate={{
          y: isFocused || hasValue || props.value ? -2 : 0,
          scale: isFocused || hasValue || props.value ? 0.85 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.label>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-destructive mt-1 ml-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

interface AnimatedSubmitButtonProps {
  children: ReactNode;
  isLoading?: boolean;
  success?: boolean;
  className?: string;
}

export const AnimatedSubmitButton = ({
  children,
  isLoading = false,
  success = false,
  className,
  ...props
}: AnimatedSubmitButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <motion.button
      className={cn(
        "w-full h-12 rounded-xl font-medium text-base flex items-center justify-center gap-2 transition-colors duration-300",
        success
          ? "bg-green-500 text-white"
          : "bg-primary text-primary-foreground hover:bg-primary/90",
        className
      )}
      whileHover={{ scale: isLoading || success ? 1 : 1.02 }}
      whileTap={{ scale: isLoading || success ? 1 : 0.98 }}
      disabled={isLoading || success}
      {...props}
    >
      {isLoading ? (
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <span>Sending...</span>
        </motion.div>
      ) : success ? (
        <motion.div
          className="flex items-center gap-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
        >
          <motion.svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d="M20 6L9 17l-5-5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.svg>
          <span>Sent!</span>
        </motion.div>
      ) : (
        children
      )}
    </motion.button>
  );
};
