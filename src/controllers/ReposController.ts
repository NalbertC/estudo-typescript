import { Request, response, Response } from "express";
import axios from "axios";
import { url } from "./ConsumeController";

//-------------------------
type TRepos = {
  id: number;
  name: string;
  url: string;
  language: string;
};

//-------------------------
export default {
  async index(req: Request, res: Response) {
    const { user } = req.params;

    axios
      .get(`${url}/${user}/repos`)
      .then((response) => response.data)
      .then((data) => {
        return res.json();
      })
      .catch((error) => console.error(error));
  },
};

// {
//     id: data.id,
//     name: data.name,
//     url: data.url,
//     language: data.language,
//   }
