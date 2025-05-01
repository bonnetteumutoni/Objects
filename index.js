// Create a User object with properties like name, stepsWalked (an array of daily steps),
//  and a method totalSteps() that calculates and returns the total number of steps walked.
//  Add another method averageSteps() that returns the average steps per day.
function Userproperty(name,steps){
    this.name=name;
    this.steps=steps;
    this.stepsWalked=function(){
        let sum=0;
      for(let i=0;i<this.steps.length;i++){
         sum=sum+this.steps[i];
      }
      return `The walked steps is eqaul to ${sum}`;
    }
}
const properties=new Userproperty("Jane",[2,5,6,7,10])
console.log(properties);
console.log(properties.stepsWalked());

// Create a Recipe constructor with name, ingredients (array), and cookTime in minutes.
//  Add a method displayRecipe() that logs the name and all ingredients in a readable list, 
// and another method isQuickMeal() that returns true if cookTime is 30 minutes or less.
function Recipe(name,ingredients,cookTime){
    this.name=name;
    this.ingredients=ingredients;
    this.cookTime=cookTime;
    this.displayRecipe=function(){
            console.log(`The name of recipe is ${this.name} and ingredients are ${this.ingredients}`);
        
    }
    this.isQuickmeal=function(){
        if(this.cookTime<=30){
            return true;
        }
    }
}
const recipe=new Recipe("Burger",["Tomatoes","Bread","Meat"],30);
console.log(recipe);
recipe.displayRecipe();
console.log(recipe.isQuickmeal());

// Create a Car object with properties like model, mileage, and serviceHistory (an array of service dates). 
// Add a method addService(date) to add a new service record, and lastServiceDate() 
// to return the most recent service date.
function Car(model,mileage,serviceHistory){
    this.model=model;
    this.mileage=mileage;
    this.serviceHistory=serviceHistory;
    this.addService=function(date){
       console.log(`I am ${this.model} ${this.mileage} and new service date is ${date}`);
       serviceHistory=serviceHistory.push(date);
    }
    this.lastServiceDate=function(){
       for(let i=0;i<this.serviceHistory.length;i++){
        return `The latest service is on ${this.serviceHistory.at(-1)}`;
       }
    }
}
const car=new Car("Tanta punch","20kmpl",["12th April 2025","24th April 2025","1st May 2025"]);
console.log(car);
car.addService("2nd May 2025");
console.log(car.lastServiceDate());

// Create a Playlist object with a property songs (an array of song titles).
//  Add methods addSong(title) to add a song, removeSong(title) to delete one,
//  and listSongs() to log all songs currently in the playlist.

function Playlist(songTitles=[]){
    this.songTitles=songTitles;
    this.addSong=function(title){
        console.log(`Added a new song title: ${title}`);
        songTitles=songTitles.push(title);
    }
    this.removeSong=function(){
        for(let i=0;i<this.songTitles.length;i++){
            return this.songTitles.splice(1,1);
        }
    }
    this.listSongs=function(){
        for(let i=0;i<this.songTitles.length;i++){
            console.log(this.songTitles[i]);
        } 
    }
}
const playlist=new Playlist(["Diamonds","Fein","Element"]);
playlist.addSong("Seven days");
console.log(playlist.removeSong());
playlist.listSongs();

// Create a Course constructor with title, lessons (an array), and completedLessons (array).
//  Add a method markComplete(lesson) that adds the lesson to completedLessons, 
// and a method getProgress() that returns a string like "3 out of 5 lessons completed".
function Course(title,lessons,completedLessons){
    this.title=title;
    this.lessons=lessons;
    this.completedLessons=completedLessons;
    this.markComplete=function(lesson){
        this.completedLessons=this.completedLessons.push(lesson);
        return completedLessons;
    }
    this.getProgress=function(){
        let completed=this.lessons.filter(item=>item.percent==100)
     return `${completed.length} out of ${this.lessons.length} lessons completed`
}
}
const course=new Course("Program",[{lesson:"Math",percent:60},{lesson:"Science",percent:100}],["Phyisics","Entrepreneurship","Sports"]);
console.log(course);
console.log(course.markComplete("Literature"));
console.log(course.getProgress());
