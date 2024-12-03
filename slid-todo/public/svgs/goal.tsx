import { cn } from "@/utils/cn";

interface GoalProps {
  className?: string;
}

const Goal = ({ className }: GoalProps) => {
  return (
    <svg
      className={cn("w-6 h-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="24"
        height="24"
        rx="6"
        fill="currentColor"
        className="text-[#1E293B] dark:text-white"
      />
      <path
        d="M15.0204 9.55373H14.5449C14.0704 9.58048 13.6637 9.21823 13.6357 8.74382V8.70202C13.6222 8.4732 13.5182 8.25916 13.3467 8.10719C13.1751 7.95522 12.95 7.87782 12.7213 7.89211H9.45029V7.7249C9.45029 7.50846 9.27483 7.33301 9.0584 7.33301C8.84196 7.33301 8.6665 7.50846 8.6665 7.7249V16.6078C8.6665 16.8242 8.84196 16.9997 9.0584 16.9997C9.27483 16.9997 9.45029 16.8242 9.45029 16.6078V12.2813H10.0616C10.5361 12.2545 10.9428 12.6168 10.9708 13.0912V13.1226C10.9989 13.597 11.4055 13.9592 11.88 13.9325H15.0152C15.4896 13.9592 15.8963 13.597 15.9243 13.1226V10.3532C15.8882 9.88641 15.4881 9.53259 15.0204 9.55373Z"
        fill="currentColor"
        className="text-white dark:text-black"
      />
    </svg>
  );
};

export default Goal;
