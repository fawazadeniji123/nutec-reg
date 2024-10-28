export type INewUser = {
  email: string;
  password: string;
  name: string;
  college: "COLENG" | "COLPHYS" | "COLERM" | "COLBIOS" | "COLAMRUD" | "COLPLANT" | "COLPHEC";
  department: string;
};

export type IUser = {
  id: string;
  name: string;
  email: string;
};

