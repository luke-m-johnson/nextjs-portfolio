// --- pages/projects.tsx ---
import ProjectCard from '../components/ProjectCard';

const projects = [
  { title: 'Portfolio Website', description: 'A personal portfolio site using Next.js.' },
  { title: 'Blog System', description: 'Markdown-based blog platform with authentication.' },
];

export default function Projects() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </div>
  );
}
