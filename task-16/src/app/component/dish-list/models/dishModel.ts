export class Dish {

  private _id: string;
  public get id(): string {
    return this._id
  }

  private _name: string;
  public get name(): string {
    return this._name
  }

  private _type: string;
  public get type(): string {
    return this._type
  }

  private _image: string;
  public get image(): string {
    return this._image
  }

  private _mealType: string;
  public get mealType(): string {
    return this._mealType
  }

  private _calories: number;
  public get calories(): number {
    return Number(this._calories.toFixed(0))
  }

  private _ingredients: string[];
  public get ingredients(): string[] {
    return this._ingredients
  }

  constructor(
    id: string,
    name: string,
    type: string,
    image: string,
    mealType: string,
    calories: number,
    ingredients: any
  ) {
    this._id = id
    this._name = name
    this._type = type
    this._image = image
    this._mealType = mealType
    this._calories = calories
    this._ingredients = ingredients
  }

  public static fromJSON(json: any): Dish {
    return new Dish(
      json.recipe.image.toString().slice(-12, -4),
      json.recipe.label,
      json.recipe.dishType,
      json.recipe.image,
      json.recipe.mealType,
      json.recipe.calories,
      json.recipe.ingredients,
    )
  }

}