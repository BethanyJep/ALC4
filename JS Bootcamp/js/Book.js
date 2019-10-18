Class Book {
    constructor(title = String,
        author = String,
        pages = Number,
        description = String,
        currentPage = 1,
        read = Boolean) {
        this.currentPage = currentPage;
    }
    readBook(){
        if (currentPage < numPages) {
            currentPage++;
        }
           
    }
}