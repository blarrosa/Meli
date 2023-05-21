export type Author = {
  author: {
    name: string;
    lastname: string;
  };
};

const signResponse = <T>(data: T): T & Author => ({
  author: {
    name: "Brandon",
    lastname: "Larrosa",
  },
  ...data,
});

export default signResponse;
