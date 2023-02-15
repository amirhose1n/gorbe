import axios from "axios";
import { parse } from "parse5";

function Test({ document }: any) {
  console.log({ document });
  return <p> hello there </p>;
}

export async function getServerSideProps() {
  const url = "https://www.behance.net/Everythingbygorbe/projects";
  const { data } = await axios.get(url);
  const document = parse(data);
  return {
    props: {
      document,
    },
  };
}

export default Test;
