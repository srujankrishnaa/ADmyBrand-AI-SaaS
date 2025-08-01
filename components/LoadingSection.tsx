'use client';

interface LoadingSectionProps {
  className?: string;
  height?: string;
}

export default function LoadingSection({ 
  className = '', 
  height = 'min-h-screen' 
}: LoadingSectionProps) {
  return (
    <div className={`${height} ${className} flex items-center justify-center`}>
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-green-200 border-t-green-500 rounded-full animate-spin"></div>
        <p className="text-gray-600 text-sm">Loading...</p>
      </div>
    </div>
  );
}