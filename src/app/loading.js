export default function Loading() {
  return (
    <div className="flex-1 flex justify-center w-full max-w-7xl mx-auto p-6 lg:p-8 overflow-hidden h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full auto-rows-min">
        {/* Hero Skeleton */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 h-48 rounded-3xl bg-zinc-800/50 animate-pulse border border-zinc-700/50" />
        
        {/* Activity Skeleton */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 row-span-1 h-48 rounded-3xl bg-zinc-800/50 animate-pulse border border-zinc-700/50" />
        
        {/* Course Skeletons */}
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="col-span-1 row-span-1 h-[160px] rounded-3xl bg-zinc-800/50 animate-pulse border border-zinc-700/50" />
        ))}
      </div>
    </div>
  );
}
