export const getFilename = (originalName: string) => {
  return `${new Date().getTime()} - ${originalName}`;
};
