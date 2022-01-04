export default async function handler(req, res) {
  await fetch(
    "https://api.stackexchange.com/2.3/users/7755019?key=0SA4sRI)ND6)j7r7wZauHQ((&site=stackoverflow"
  )
    .then((responseBodyStream) => {
      return responseBodyStream.json();
    })
    .then((data) => {
      res.status(200).json(data);
    });
}
