interface ThinkerCardProps {
  name: string;
  description: string;
  imageUrl: string;
  onChat: () => void;
  onFavorite: () => void;
  isFavorite?: boolean;
}

export function ThinkerCard({ name, description, imageUrl, onChat, onFavorite, isFavorite }: ThinkerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-200">
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9">
          <img 
            src={imageUrl} 
            alt={name} 
            className="object-cover w-full h-48"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/400x300?text=Philosopher'; // Fallback image
            }}
          />
        </div>
        <div className="absolute top-2 right-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onFavorite();
            }}
            className={`p-2 rounded-full bg-white/80 backdrop-blur-sm ${
              isFavorite ? 'text-red-500' : 'text-gray-600'
            } hover:text-red-500 transition-colors duration-200`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill={isFavorite ? 'currentColor' : 'none'}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 line-clamp-3 mb-4 min-h-[4.5rem]">
          {description}
        </p>
        <button
          onClick={onChat}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 
                     transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
          Start Chat
        </button>
      </div>
    </div>
  );
} 