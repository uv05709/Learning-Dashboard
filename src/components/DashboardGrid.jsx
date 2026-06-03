"use client";

import { motion } from "framer-motion";
import HeroTile from "./HeroTile";
import ActivityTile from "./ActivityTile";
import CourseTile from "./CourseTile";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function DashboardGrid({ courses }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-6 p-6 lg:p-10 w-full max-w-screen-2xl mx-auto"
    >
      {/* Hero section spans 2 columns */}
      <HeroTile />

      {/* Activity tile spans 1 column but could be moved around in the bento grid */}
      <ActivityTile />

      {/* Course tiles dynamically rendered */}
      {courses.map((course) => (
        <CourseTile key={course.id} course={course} />
      ))}
    </motion.div>
  );
}
