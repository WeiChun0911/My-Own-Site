import { request } from "graphql-request";

const query = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
      profile {
        starRating
        userAvatar
      }
    }
  }
`;

export default function handler(req, res) {
  request("https://leetcode.com/graphql", query, {
    username: "weichun0911",
  }).then((data) => res.status(200).json({ data }));
}
