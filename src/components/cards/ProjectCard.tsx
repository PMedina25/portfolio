type Props = {
  title: string;
  description: string;
  client: string;
};

const ProjectCard: React.FC<Props> = ({ title, description, client }) => (
  <a
    href="#"
    className="duration-300 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-teal-400 border-zinc-600"
  >
    <article className="p-4 md:p-8">
      <div className="text-right">
        <span className="text-zinc-500 text-xs">{client}</span>
      </div>
      <h3 className="z-20 font-medium duration-1000 text-3xl text-zinc-200 group-hover:text-white">
        {title}
      </h3>
      <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
        {description}
      </p>
    </article>
  </a>
);

export default ProjectCard;
