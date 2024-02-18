import { cn } from "@/utils/cn";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return <section className={cn("px-4", className)}>{children}</section>;
};

export default Wrapper;
