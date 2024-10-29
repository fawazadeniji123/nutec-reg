export type INewUser = {
  email: string;
  password: string;
  name: string;
  college:
    | "COLENG"
    | "COLPHYS"
    | "COLERM"
    | "COLBIOS"
    | "COLAMRUD"
    | "COLPLANT"
    | "COLPHEC"
    | "COLVET"
    | "COLANIM";
  department: string;
  matricNumber: string;
};

export type IUser = {
  email: string;
  name: string;
  college: string;
  department: string;
  matricNumber: string;
  imageUrl: string;
  userId: string;
};
