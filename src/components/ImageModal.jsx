import { X } from 'lucide-react';

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
      <div className="relative max-w-4xl max-h-[90vh] p-4">
        <button 
          onClick={onClose}
          className="absolute -top-2 -right-2 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors z-10"
        >
          <X size={20} />
        </button>
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="max-w-full max-h-full object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default ImageModal;