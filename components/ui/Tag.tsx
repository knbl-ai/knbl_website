interface TagProps {
  children: React.ReactNode;
  variant?: 'ai' | 'data' | 'culture';
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-600 text-white text-xs font-medium">
      {children}
    </span>
  );
}
