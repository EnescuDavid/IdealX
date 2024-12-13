interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="bg-secondary py-16">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">{title}</h1>
      </div>
    </div>
  );
}