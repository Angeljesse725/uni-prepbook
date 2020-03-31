let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")

 let students = [ 
    {
     profileImage: "https://cdn.glitch.com/6630903e-8ba5-4214-8a55-e3b2a3cf2d72%2FSnapchat-761156047.jpg?v=1585167696274",
     name: "Nayleah Delgado-Viera",
     quote: "Why fit in when you are born to stand out",
     superlative: "Ms.President",
    },
  {
     profileImage: "https://cdn.glitch.com/6630903e-8ba5-4214-8a55-e3b2a3cf2d72%2FSnapchat-2129766884.jpg?v=1585167408987",
     name: "Fatima Reyes",
     quote: "To loose patience is to loose the battle, and I won",
     superlative: "Most Honest",
    },
  {
     profileImage: "https://cdn.glitch.com/6630903e-8ba5-4214-8a55-e3b2a3cf2d72%2FSnapchat-1379067916.jpg?v=1585167491900",
     name: "Edison Reyes",
     quote: "Damn, Highschool went by fast",
     superlative: "Best Baseball player",
    },   
     {
     profileImage: "https://cdn.glitch.com/6630903e-8ba5-4214-8a55-e3b2a3cf2d72%2FSnapchat-1458954082.jpg?v=1585167690104",
     name: "Anthony Bello",
     quote: "Why be sad when you can smile like belle",
     superlative: "Best animal lover",
    },  
  {
     profileImage: "https://cdn.glitch.com/6630903e-8ba5-4214-8a55-e3b2a3cf2d72%2FSnapchat-1873808425.jpg?v=1585168158709",
     name: "Lisandro Velaquez",
     quote: "It takes time to achieve a goal, it doesn't happen over night",
     superlative: "Shortstack",
    },   
  {
     profileImage: "https://cdn.glitch.com/6630903e-8ba5-4214-8a55-e3b2a3cf2d72%2FSnapchat-303115049.jpg?v=1585169762480",
     name: "Nayeli Robles",
     quote: "Spirit lead me where my trust is without borders",
     superlative: "Miss ballerina",
    },   
  {
     profileImage: "https://cdn.glitch.com/6630903e-8ba5-4214-8a55-e3b2a3cf2d72%2FSnapchat-357698008.jpg?v=1585169732347",
     name: "Mayhelly Vargas",
     quote: "Be the change you want to see in the world-Gandhi",
     superlative: "Miss fiesty",
    },  
  {
     profileImage: "https://cdn.glitch.com/6630903e-8ba5-4214-8a55-e3b2a3cf2d72%2FSnapchat-2071446451.jpg?v=1585169789954",
     name: "Naomi Delgado",
     quote: "Everyone you meet is fighting a battle you know nothing about. Be kinds. Always",
     superlative: "Miss energetic",
    },  
  {
     profileImage: "https://cdn.glitch.com/6630903e-8ba5-4214-8a55-e3b2a3cf2d72%2FSnapchat-1698424020.jpg?v=1585170601861",
     name: "Desyare Chandler",
     quote: "The one where chandler graduated",
     superlative: "Most laid back",
    }, 
   { 
     profileImage: "https://cdn.glitch.com/6630903e-8ba5-4214-8a55-e3b2a3cf2d72%2FSnapchat-1878011920.jpg?v=1585537836996",
     name: "Mary Bonsu",
     quote: "To live doesn't mean you are alive",
     superlative: "Miss Niki",
    },   
   {
     profileImage: "https://cdn.glitch.com/6630903e-8ba5-4214-8a55-e3b2a3cf2d72%2FSnapchat-92061503.jpg?v=1585537920298",
     name: "Yadira Carrillo",
     quote: "Lol senior year did us dirty",
     superlative: "Miss spirited",
    },   
   {
     profileImage: "https://cdn.glitch.com/6630903e-8ba5-4214-8a55-e3b2a3cf2d72%2FSnapchat-56035251.jpg?v=1585537867054",
     name: "Djaliatou Barry",
     quote: "Don't be afraid to be out there",
     superlative: "Miss humble",
    },
   {
     profileImage: "https://cdn.glitch.com/6630903e-8ba5-4214-8a55-e3b2a3cf2d72%2FSnapchat-1106101947.jpg?v=1585539037586",
     name: "Dashawn Green",
     quote: "I don't wish, I make things into a reality",
     superlative: "cameraman",
    },
   {
     profileImage: "https://cdn.glitch.com/6630903e-8ba5-4214-8a55-e3b2a3cf2d72%2FSnapchat-6429209.jpg?v=1585539022738",
     name: "Worokiya Tunkara",
     quote: "Shish kebabs",
     superlative: "Hijab fashion central",
    },   
   {
     profileImage: "https://cdn.glitch.com/6630903e-8ba5-4214-8a55-e3b2a3cf2d72%2FSnapchat-1164512056.jpg?v=1585539029478",
     name: "Daniela Aviles",
     quote: "I don't know what to wear for our prom on zoom",
     superlative: "Miss Sunflower",
    },   
   {
     profileImage: "https://cdn.glitch.com/6630903e-8ba5-4214-8a55-e3b2a3cf2d72%2FSnapchat-800490606.jpg?v=1585539289156",
     name: "Aoussa Toure",
     quote: "Bad girls aren't made in a day",
     superlative: "Malian girl",
    },   
 ]
 
 let count = 0 
document.querySelector("#pic").src = students[count].profileImage
document.querySelector("#name").innerHTML = students[count].name

nextButton.addEventListener("click",()=>{
  console.log('next')
  count ++
  console.log(count)
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative
  
})

backButton.addEventListener("click",()=>{
  console.log('back')
  count --
  console.log(count)
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative
  
})