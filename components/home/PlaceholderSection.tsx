import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

type PlaceholderSectionProps = {
  id: string;
  title: string;
  description: string;
};

const PLACEHOLDER_CARDS = Array.from({ length: 3 }, (_, index) => ({
  id: index + 1,
  title: "Content title",
  description: "Short placeholder description for upcoming content.",
}));

export default function PlaceholderSection({
  id,
  title,
  description,
}: PlaceholderSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-border-green/60 py-10 sm:scroll-mt-24 sm:py-14 md:py-16 lg:py-20"
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id={`${id}-heading`}
            className="text-xl font-bold tracking-tight text-primary-green sm:text-2xl md:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {PLACEHOLDER_CARDS.map((card) => (
            <article
              key={card.id}
              className="overflow-hidden rounded-2xl border border-border-green/50 bg-white"
            >
              <ImagePlaceholder className="aspect-[16/10] w-full rounded-none sm:aspect-[4/3]" />
              <div className="p-4 sm:p-5">
                <h3 className="text-base font-bold text-primary-green sm:text-lg">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
