// Create a User object with properties like name, stepsWalked (an array of daily steps),  and a method totalSteps() that calculates and returns the total number of steps walked.
//  Add another method averageSteps() that returns the average steps per day.
//Steps
//pseudocode
// 1.creating an object with properties
// 2.enter the name and steps walked daily
// 3.creating a method that calculates the number of steps walked daily
const user={
    name:"Jane",
    stepsWalked:function(steps){
        let sum=0;
      for(let i=0;i<steps.length;i++){
         sum=sum+steps[i];
      }
      return `The walked steps is eqaul to ${sum}`;
    },
    averageSteps:function(steps){
       let sum=steps.reduce((step, currentStep) => step + currentStep, 0)
       const average=sum/steps.length;
       return average;
}}
console.log(user);
console.log(user.stepsWalked([2,34,4,4,8]));
console.log(user.averageSteps([2,34,4,4,8]));

// Create a Recipe constructor with name, ingredients (array), and cookTime in minutes. Add a method displayRecipe() that logs the name and all ingredients in a readable list,  and another method isQuickMeal() that returns true if cookTime is 30 minutes or less.
// 1.creating constructors with properties(recipe name,ingredients,cookTime in minutes)
// 2.creating a method that displays recipe name and ingredients
// 3.creating another method that returns true if cookTime is 30
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

// Create a Car object with properties like model, mileage, and serviceHistory (an array of service dates).  Add a method addService(date) to add a new service record, and lastServiceDate() to return the most recent service date.
// 1.creating car object with properties(model,mileage,serviceHistory)
// 2. creating a method to add new service record
// 3. creating  a method to the most recent service date
const car={
    model:"Tanta Punch",
    mileage:"20kmpl",
    serviceHistory:["12th April 2025","24th April 2025","1st May 2025"],
    addService:function(date){
       console.log(`I am ${this.model} ${this.mileage} and new service date is ${date}`);
       this.serviceHistory.push(date);
    },
    lastServiceDate:function(){
       for(let i=0;i<this.serviceHistory.length;i++){
        return `The latest service is on ${car.serviceHistory.at(-1)}`;
       }
    }
}
console.log(car);
car.addService("2nd May 2025");
console.log(car.lastServiceDate());

// Create a Playlist object with a property songs (an array of song titles). Add methods addSong(title) to add a song, removeSong(title) to delete one, and listSongs() to log all songs currently in the playlist.
// 1. creating playlist object with song titles(properties)
// 2.creating a method to add song
//3. creating a method to remove song
// 4. creating a method to list songs
const playlist={
    songTitles:["Diamonds","Fein","Element"],
    addSong:function(title){
        console.log(`Added a new song title: ${title}`);
        this.songTitles.push(title);
    },
    removeSong:function(){
        for(let i=0;i<this.songTitles.length;i++){
            return this.songTitles.splice(1,1);
        }
    },
    listSongs:function(){
        for(let i=0;i<this.songTitles.length;i++){
            console.log(this.songTitles[i]);
        }
    }
 }
 playlist.addSong("Seven days");
 console.log(playlist.removeSong());
 playlist.listSongs();
 
 

// Create a Course constructor with title, lessons (an array), and completedLessons (array). Add a method markComplete(lesson) that adds the lesson to completedLessons, and a method getProgress() that returns a string like "3 out of 5 lessons completed".
// 1. creating a constructor with title property,lessons and completed lessons
// 2. creating a method to mark complete one
// 3.creating a method to get the progress
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
const course=new Course("Program",[{lesson:"Math",percent:60},{lesson:"Science",percent:100},{lesson:"Science",percent:100}],["Phyisics","Entrepreneurship","Sports"]);
console.log(course);
console.log(course.markComplete("Literature"));
console.log(course.getProgress());
