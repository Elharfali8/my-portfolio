
type Project = {
    id: number
  title: string
  description: string
    image: string 
  technologies: string[]
  url: string
}

export const projects: Project[] = [
    {
        id: 1,
      title: "Game Explorer",
      description: "A responsive platform to search and discover video games across all platforms using the RAWG API.",
      image: "/assets/games.png",
      technologies: ["React", "Tailwind CSS", "Context API"],
      url: "https://game-venture.vercel.app/"
    },
    {
        id: 2,
      title: "Jobs Dashboard",
      description: "A modern job tracking dashboard with authentication, filtering, and statistics.",
      image: "/assets/jobs.png",
      technologies: ["Next.js", "Tailwind CSS", "ShadCN", "Redux Toolkit"],
      url: "https://jobs-dashboard-tau.vercel.app/"
    },
    {
        id: 3,
      title: "Movies Website",
      description: "A sleek and animated movie discovery platform with filtering, genre sorting, and detailed views.",
      image: "/assets/movies.png",
      technologies: ["React", "Tailwind CSS", "Redux"],
      url: "https://cinehub-v1.netlify.app/"
    }
  ]
  