import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  imageClassName?: string;
};

export default function Logo({ className, imageClassName }: LogoProps) {
  return (
    <span className={cn("inline-flex max-w-full items-center", className)}>
      <Image
        src="/just-booking-logo.png"
        alt="Justbooking.co.in"
        width={280}
        height={56}
        priority
        className={cn(
          "h-7 w-auto max-w-[180px] object-contain object-left sm:h-8 sm:max-w-[220px] md:h-9 md:max-w-[260px] lg:max-w-[280px]",
          imageClassName,
        )}
      />
    </span>
  );
}
