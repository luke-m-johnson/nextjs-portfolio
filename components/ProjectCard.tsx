// --- components/ProjectCard.tsx ---
export default function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-4 rounded shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
