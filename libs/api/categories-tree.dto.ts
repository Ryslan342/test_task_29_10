export class CategoriesTreeDto {
  id: number;
  title: string;
  subcategories: CategoriesTreeDto[];
}
