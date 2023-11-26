export const Sidebar = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[700px] h-[600px] border rounded-lg shadow-md">
        <div className="grid grid-cols-3 h-full">
          <div className="col-span-1 border-r group/sidebar">
            <div className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"></div>
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  );
};
