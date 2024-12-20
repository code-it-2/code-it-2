import { cn } from "@/utils/cn";

interface NoteProps {
  className?: string;
}

export const Note = ({ className }: NoteProps) => (
  <svg
    className={cn("w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="3" width="15" height="18" rx="2" fill="#93C5FD" />
    <path
      d="M20.9365 8.69513C21.2127 8.21684 21.0488 7.60524 20.5705 7.3291L19.6965 6.82447C19.2182 6.54833 18.6066 6.7122 18.3304 7.1905L14.1158 14.4905C14.0022 14.6872 13.959 14.9166 13.9932 15.1411L14.1148 15.9397C14.2113 16.5732 14.8704 16.9537 15.4673 16.7205L16.2197 16.4266C16.4312 16.3439 16.6083 16.1918 16.7219 15.9951L20.9365 8.69513Z"
      fill="#172554"
    />
  </svg>
);

export default Note;
