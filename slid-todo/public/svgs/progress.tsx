// 대시보드 : 진행 프로그레스 아이콘
import { cn } from "@/utils/cn";

interface ProgressProps {
  className?: string;
}

const Progress = ({ className }: ProgressProps) => {
  return (
    <svg
      className={cn("w-6 h-6", className)}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="15" fill="#0F172A" />
      <path
        d="M20 11C22.0809 11 24.0894 11.7633 25.6451 13.1453C27.2008 14.5272 28.1955 16.4318 28.4408 18.4982C28.686 20.5645 28.1648 22.6491 26.9758 24.3568C25.7868 26.0645 24.0127 27.2768 21.9897 27.7638C19.9666 28.2509 17.8352 27.979 15.9992 26.9996C14.1633 26.0202 12.7504 24.4013 12.0283 22.4498C11.3061 20.4983 11.3249 18.3496 12.0811 16.411C12.8373 14.4724 14.2784 12.8786 16.1312 11.9315L20 19.5L20 11Z"
        fill="white"
      />
    </svg>
  );
};

export default Progress;