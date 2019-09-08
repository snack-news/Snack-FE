export interface Crop {
  id: number;
  name: string;
  image?: string;
}

export interface ICropService {
  getCropList(): Promise<Crop[]>;
}
