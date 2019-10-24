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
        readBook(pageNumber){
      if(pageNumber === this.pages){
        this.currentPage = pageNumber;
        this.read = true;
      }
      else if(pageNumber > 0 && pageNumber < this.pages){
        this.currentPage = pageNumber;
      }
      else{
        this.warning = "Wrong Input";
        return (this.warning);
      }
    }
}
 export { Book };