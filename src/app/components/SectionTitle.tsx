interface SectionTitleProps {
  title: string;
  style?: string;
}

export default function SectionTitle({ title, style }: SectionTitleProps) {
  return (
    <h2 className={`md:text-md font-light font-inter ${style}`}>
        {title}
    </h2>
  );
}

