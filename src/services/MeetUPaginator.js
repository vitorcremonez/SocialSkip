export default class MeetUPaginator {
    prev_page = "";
    next_page = "";

    hasPrevPage() {
        return this.prev_page;
    }
    hasNextPage() {
        return this.next_page;
    }

    refreshPrevPage(pagination) {
        this.prev_page = pagination.prev_page ? pagination.prev_page : this.prev_page;
        this.next_page = this.next_page === "" ? pagination.next_page : this.next_page;
    }

    refreshNextPage(pagination) {
        this.prev_page = this.prev_page === "" ? pagination.prev_page : this.prev_page;
        this.next_page = pagination.next_page ? pagination.next_page : this.next_page;
    }

    getPrevPage() {
        return this.prev_page;
    }

    getNextPage() {
        return this.next_page;
    }
}