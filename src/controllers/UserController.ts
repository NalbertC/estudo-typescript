import { Request, response, Response } from "express";
import axios from "axios";
import { url } from "./ConsumeController";

type TUser = {
  login: string;
  id: number;
  name: string;
  avatar: string;
  html_url: string;
  public_repos: string;
};

export default {
  async index(req: Request, res: Response) {
    const { user } = req.params;

    axios
      .get(`${url}/${user}`)
      .then((response) => response.data)
      .then((data) => {
        return res.json(<TUser>{
          id: data.id,
          login: data.login,
          name: data.name,
          avatar: data.avatar_url,
          html_url: data.html_url,
          public_repos: data.public_repos,
        });
      })
      .catch((error) => console.error(error));
  },
};
