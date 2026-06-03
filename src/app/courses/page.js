import { BookOpen } from "lucide-react";

export const metadata = {
  title: "Courses | Next-Gen Learning",
};

export default function CoursesPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[500px] p-8 text-center animate-in fade-in zoom-in duration-500">
      <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)] border border-accent/20">
        <BookOpen className="w-10 h-10" />
      </div>
      <h1 className="text-4xl font-bold text-white mb-4">My Courses</h1>
      <p className="text-zinc-400 max-w-md text-lg">
        This is a placeholder page for your course library. Your full curriculum will appear here.
      </p>
    </div>
  );
}
