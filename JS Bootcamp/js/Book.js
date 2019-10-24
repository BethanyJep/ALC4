Class Book; {
    constructor(title = String,
        author = String,
        pages = Number,
        description = String,
        currentPage = 1,
        read = Boolean); {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.description = description;
        this.currentPage = currentPage;
        this.read = read;
    };
    readBook(currentPage){
        if (currentPage != int) {
            
        }
        else {
            currentPage++;
        }
    }
}