import { makeAutoObservable } from "mobx";
class AppState {
  threads = [
    
  ];


  constructor() {
    makeAutoObservable(this);
  }
  addNewThread(thread) {
    this.threads.push(thread);
    console.log("thread", thread);
  }
  addNewComment(threadId,comment) {

    for (let i = 0; i < this.threads.length; i++) {
      if (this.threads[i].id === threadId) {
        console.log("mentstate", comment,"idstate",threadId);
        console.log(this.threads[i].id);
        this.threads[i].comments.push(comment)
        console.log("commentinthread",this.threads[i].comments);
        
      }
      
    }
  }

  deleteThread(id){
    const index = this.threads.findIndex(item => item.id === id)
    this.threads.splice (index, 1)

  }

  deleteComment(commentId,threadId){
      this.threads.findIndex((item) =>{
      if(item.id === threadId){
        const index = this.threads[threadId].comments.findIndex(comment => comment.id === commentId)
        this.threads[threadId].comments.splice(index,1)
      }
      })

  
}
}
export const appState = new AppState();
