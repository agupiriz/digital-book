const Chip = ({ color, children }) => {
  const getColorClass = () => {
    switch (color) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-slate-800';
    }
  };

  return (
    <div className={`rounded-md py-1 my-4 px-2.5 border border-transparent text-sm text-white shadow-sm ${getColorClass()}`}>
      {children}
    </div>
  );
};

export default Chip;