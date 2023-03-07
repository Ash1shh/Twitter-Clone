export default {
  name: "like",
  title: "Like",
  type: "document",
  fields: [
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "tweet",
      title: "Tweet",
      description: "Reference the Tweet comment is associated to:",
      type: "reference",
      to: {
        type: "tweet",
      },
    },
  ],
};
