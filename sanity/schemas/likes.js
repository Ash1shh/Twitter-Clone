export default {
  name: "like",
  title: "Like",
  type: "document",
  fields: [
    {
      name: 'isLiked',
      type: 'boolean'
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    },
    {
      name: "tweet",
      title: "Tweet",
      description: "Reference the Tweet Like is associated to:",
      type: "reference",
      to: {
        type: "tweet",
      },
    },
  ],
};
