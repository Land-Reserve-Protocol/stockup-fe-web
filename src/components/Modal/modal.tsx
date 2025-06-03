import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 text-gray-200 rounded-xl p-6 max-w-lg w-full relative shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 text-green-400 hover:text-green-600 text-2xl font-bold focus:outline-none"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
