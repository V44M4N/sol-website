import { Hero } from "@/components/features/Hero";
export function PageHeader({
  title,
  subtitle,
  videoEnabled = true,
  image,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  videoEnabled?: boolean;
}) {
  return (
    <Hero
      title={title}
      subtitle={subtitle}
      compact
      videoEnabled={videoEnabled}
      image={image}
    />
  );
}
