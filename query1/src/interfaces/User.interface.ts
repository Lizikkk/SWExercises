export interface IUser  {
    "id": number,
    "name": string,
    "email": string,
    "phone": string,
    "website": string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string,
    }
  }