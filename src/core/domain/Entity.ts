import crypto from 'crypto';

export abstract class Entity<T>{
  protected _id: String;
  public props: T;

  get id() { return this._id; }

  constructor(props: T, id?: String){
    this.props = props;
    this._id = id ?? crypto.randomUUID();
  }
}