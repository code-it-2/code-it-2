import { cn } from "@/utils/cn";

interface EllipseProps {
  className?: string;
}

const Ellipse = ({ className }: EllipseProps) => {
  return (
    <svg
      className={cn("w-auto h-auto", className)}
      viewBox="0 0 199 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M197.671 39.698C215.423 60.4325 224.919 86.9879 224.359 114.332C223.799 141.676 213.221 167.91 194.631 188.061C176.041 208.213 150.73 220.882 123.494 223.669C96.2575 226.456 68.9886 219.167 46.8541 203.182C24.7196 187.198 9.25744 163.629 3.39747 136.942C-2.46249 110.255 1.68689 82.3029 15.0594 58.3836C28.4318 34.4642 50.0983 16.2389 75.9532 7.16117C101.808 -1.91654 130.055 -1.21599 155.342 9.13009L112.593 112.539L197.671 39.698Z"
        fill="white"
        fillOpacity="0.2"
      />
    </svg>
  );
};

export default Ellipse;
