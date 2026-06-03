import Sidebar from "@/components/Sidebar";
import DashboardGrid from "@/components/DashboardGrid";
import { fetchCourses } from "@/lib/data";
import { Suspense } from "react";
import Loading from "./loading";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Next-Gen Learning Dashboard",
  description: "A highly animated futuristic education platform dashboard.",
};

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <DashboardContent />
    </Suspense>
  );
}

async function DashboardContent() {
  const courses = await fetchCourses();
  
  return <DashboardGrid courses={courses} />;
}
