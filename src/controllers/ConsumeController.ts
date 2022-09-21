import { Request, response, Response } from "express";
import axios from "axios";

export const url = "https://api.github.com/users";

export default {
  async index(req: Request, res: Response) {
    axios
      .get(url)
      .then((response) => {
        return res.json(response.data);
      })
      .catch((error) => console.error(error));
  },
};
