import styled from "styled-components";
import tw from "twin.macro";

const style = styled.div`
  .card {
    ${tw`rounded overflow-hidden flex`}
  }
  .card-cover {
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.6) 81%
    );
    transition: bottom 0.3s ease-in-out;
  }
  .card:hover {
    img {
      transform: scale(1.1);
    }
    .card-cover {
      bottom: 0px !important;
    }
  }
`;

export default style;
