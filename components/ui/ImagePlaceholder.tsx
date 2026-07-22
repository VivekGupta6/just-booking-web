import { Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  className?: string;
  iconClassName?: string;
};

export default function ImagePlaceholder({
  className,
  iconClassName,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-2xl bg-placeholder",
        className,
      )}
      aria-hidden="true"
    >
      <ImageIcon
        className={cn("h-10 w-10 text-primary-green/35", iconClassName)}
        strokeWidth={1.5}
      />
    </div>
  );
}
