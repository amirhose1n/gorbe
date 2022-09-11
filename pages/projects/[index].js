import fetchBehance from "../api/behance";
import { useRouter } from "next/router";
import Graffities from "../../components/projects/graffities";
import Illustrators from "../../components/projects/illustrators";

const Projects = ({ projects }) => {
  const {
    query: { index },
  } = useRouter();

  const illustrators = projects.filter((project) => {
    return project.name.includes("- Illustration");
  });
  const graffities = projects.filter((project) => {
    return project.name.includes("- Graffiti");
  });

  if (index === "graffities") {
    return <Graffities data={graffities} />;
  }

  if (index === "illustrator") {
    return <Illustrators data={illustrators} />;
  }

  return new Error("Page not found !!!");
};

export async function getServerSideProps({ query: { index } }) {
  if (index !== "graffities" && index !== "illustrator") {
    return {
      props: {
        error: {
          statusCode: 404,
          message: "Page not found !!!",
        },
      },
    };
  }

  let data = await fetchBehance();

  return {
    props: {
      projects: data?.props?.data?.profile?.activeSection?.work?.projects,
    },
  };
}

export default Projects;
