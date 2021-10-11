// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

function getRequestParams(email) {
  const apiKey = process.env.API_KEY;
  const server = process.env.SERVER;
  const listId = process.env.LIST_ID;
  const url = `https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`;

  const data = {
      email_address: email,
      status: "subscribed"
  }

  const base64api = Buffer.from(`anystring:${apiKey}`).toString("base64");

  const headers = {
      "Content-Type": "application/json",
      Authorization: `Basic ${base64api}`,
  }

  return {
      url,
      data,
      headers,
    };
}


export default async (req, res) => {
  const { email } = req.body;
  const {url, data, headers} = getRequestParams(email);
  try {
    const response = await axios.post(url,data,{ headers });
    return res.status(200).json({msg: "Email Added"});
  }catch (e) {
    if(e.response.data.title == "Member Exists")
      return res.status(200).json({msg: "Email Already Exists"});
    return res.status(400).json({msg: "Invalid Email"});
  }
};
