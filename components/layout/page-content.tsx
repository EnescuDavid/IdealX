interface PageContentProps {
  children: React.ReactNode;
}

export function PageContent({ children }: PageContentProps) {
  return (
    <div className="py-16">
      <div className="container max-w-4xl">
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}