import Item from '../../types/Item'

export interface IShopSection {
  id: number
  title: string
  routeName: string
  items: Item[]
}
