export class PaginationParams {
  limit: number;
  offset: number;
  constructor(limit = 10, offset = 0) {
    this.limit = limit;
    this.offset = offset;
  }
}
