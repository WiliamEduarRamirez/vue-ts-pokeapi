export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export class Pagination implements Pagination {
  constructor(
    currentPage = 0,
    itemsPerPage = 10,
    totalItems = 1,
    totalPages = 1
  ) {
    this.currentPage = currentPage;
    this.itemsPerPage = itemsPerPage;
    this.totalItems = totalItems;
    this.totalPages = totalPages;
  }
}

export class PaginationParams {
  limit: number;
  offset: number;
  constructor(limit = 10, offset = 0) {
    this.limit = limit;
    this.offset = offset;
  }
}
