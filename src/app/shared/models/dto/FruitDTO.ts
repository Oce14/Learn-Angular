import { FruitTypeEnum } from "../enums/FruitTypeEnum";

export interface FruitDTO {
  type: FruitTypeEnum;
  quantity: number;
  color: string;
}