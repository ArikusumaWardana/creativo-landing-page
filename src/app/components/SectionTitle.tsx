export default function SectionTitle({ title, style }: { title: string, style?: string }) {
  return (
    <h2 className={`md:text-md font-light font-inter ${style}`}>
        {title}
    </h2>
  );
}

