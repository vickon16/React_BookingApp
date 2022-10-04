export const flexCenter = (content, direction, items ) => `
  display: flex;
  align-items: ${items || "center"};
  ${content && `justify-content: ${content}`};
  ${ direction && `flex-direction: ${direction}`};
`;
