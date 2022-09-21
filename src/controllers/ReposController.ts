import { Request, response, Response } from "express";
import axios from "axios";
import { url } from "./ConsumeController";

//-------------------------
type TRepo = {
  id: number;
  name: string;
  url: string;
  html_url: string;
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
        const repos = data.map((repo: TRepo) => {
          return <TRepo>{
            id: repo.id,
            name: repo.name,
            url: repo.url,
            html_url: repo.html_url,
            language: repo.language,
          };
        });

        return res.json(repos);
      })
      .catch((error) => console.error(error));
  },
};
