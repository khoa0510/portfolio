import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import {Code2, Database, Layout, Cpu} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiFirebase,
  SiNestjs, SiOracle, SiMariadb, SiSpring, SiJenkins, SiSonarlint,
} from "react-icons/si";
import {BsGrid1X2} from "react-icons/bs";
import {FcWorkflow} from "react-icons/fc";
import {LiaJava} from "react-icons/lia";

const SkillCard = ({icon: Icon, title, skills, color}) => (
  <Card
    className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8"/>
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        {name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]"/>},
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]"/>,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]"/>,
        },
        {
          name: "Responsive Design",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]"/>,
        },
      ],
    },
    {
      icon: Cpu,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        {
          name: "Java",
          icon: <LiaJava className="w-4 h-4 text-[#F89820]"/>,
        },
        {
          name: "Spring",
          icon: <SiSpring className="w-4 h-4 text-[#47A248]"/>,
        },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]"/>,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]"/>,
        },
        {
          name: "NestJs",
          icon: <SiNestjs className="w-4 h-4 text-white"/>,
        },
      ],
    },
    {
      icon: Database,
      title: "Database",
      color: "text-purple-400",
      skills: [
        {name: "Oracle", icon: <SiOracle className="w-4 h-4 text-[#F24E1E]"/>},
        {
          name: "MariaDB",
          icon: <SiMariadb className="w-4 h-4 text-[#9CA3AF]"/>,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]"/>,
        },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        {name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]"/>},
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]"/>,
        },
        {name: "CI/CD", icon: <FcWorkflow className="w-4 h-4"/>},
        {
          name: "Jenkins",
          icon: <SiJenkins className="w-4 h-4 text-[#D33834]"/>,
        },
        {name: "Sonarlint", icon: <SiSonarlint className="w-4 h-4 text-white"/>},
        {
          name: "Firebase",
          icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]"/>,
        },
      ],
    },
  ];

  return (
    <main id="skills" className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo/>
        </div>
        <h2
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-16 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
