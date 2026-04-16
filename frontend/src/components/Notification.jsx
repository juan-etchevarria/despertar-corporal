import React, { useEffect } from 'react';

const Notification = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgStyles = type === 'success' ? 'bg-[#3A4A3E] text-stone-100' : 'bg-red-800 text-white';

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className={`${bgStyles} px-8 py-4 rounded-full shadow-2xl flex items-center gap-4 border border-white/10 backdrop-blur-md`}>
        <span className="text-lg">{type === 'success' ? '✨' : '⚠️'}</span>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em]">{message}</p>
        <button onClick={onClose} className="ml-4 hover:opacity-50 transition-opacity">✕</button>
      </div>
    </div>
  );
};

export default Notification;
