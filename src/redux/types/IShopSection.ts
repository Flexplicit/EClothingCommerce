import Item from '../../types/Item'

export interface IShopSectionNormalized {
  [key: string]: IShopSection
}

export interface IShopSection {
  id: string | number;
  title: string
  routeName: string
  items: Item[]
}

