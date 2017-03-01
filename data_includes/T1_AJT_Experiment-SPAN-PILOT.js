var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle(anyOf(startsWith("ms"), startsWith("mo"), startsWith("c"), startsWith("f"))))));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 500,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(not natural at all)", rightComment: "(very natural)"
    },
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var practiceItemMessage = true;

var items = [


    ["sep", "Separator", { }],

    ["intro", "Form", {
        html: { include: "AJT_Introduction-SPAN-PILOT.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    
    ["sep", "Separator", { }],

//PRACTICE//
    ["practice", "AcceptabilityJudgment", {s: "This is a practice sentence to get you used to reading sentences like this.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["practice", "AcceptabilityJudgment", {s: "This is another practice sentence for you to read.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["practice", "AcceptabilityJudgment", {s: "This is the last practice item before the experiment begins.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    
    ["sep", "Separator", { }], 
    
//Experimental Items//
  //Uncountable Substance//  
    //garlic//
    ["ms4-zs", "AcceptabilityJudgment", {s: "Do you have garlic for the recipe?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["ms4-zp", "AcceptabilityJudgment", {s: "I was looking for garlics to add to the dish.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["ms4-i",  "AcceptabilityJudgment", {s: "I need a garlic for the soup that I am making.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["ms4-ds", "AcceptabilityJudgment", {s: "Have you seen the garlic that was on the table?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["ms4-dp", "AcceptabilityJudgment", {s: "Where did you put the garlics that we purchased earlier?", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    //dirt//
    ["ms5-zs", "AcceptabilityJudgment", {s: "We need dirt for the garden.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["ms5-zp", "AcceptabilityJudgment", {s: "I thought that you could buy dirts at the store.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["ms5-i",  "AcceptabilityJudgment", {s: "Do you have a dirt for the garden?", as: ["1", "2", "3", "4", "5", "6", "7"]}],    
    ["ms5-ds", "AcceptabilityJudgment", {s: "I was looking for the dirt when I found something else.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["ms5-dp", "AcceptabilityJudgment", {s: "There are the dirts that we bought earlier.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    //ketchup//
    ["ms6-zs", "AcceptabilityJudgment", {s: "I asked for ketchup but I did not get any.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["ms6-zp", "AcceptabilityJudgment", {s: "Do you have ketchups for the food later?", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["ms6-i",  "AcceptabilityJudgment", {s: "If you get a ketchup, can you please share with me?", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["ms6-ds", "AcceptabilityJudgment", {s: "Could you pass the ketchup over here?", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["ms6-dp", "AcceptabilityJudgment", {s: "She is looking for the ketchups that are from her mother.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
  //Uncountable Object//
    //luggage//
    ["mo4-zs", "AcceptabilityJudgment", {s: "Did you see it in your luggage when you left?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo4-zp", "AcceptabilityJudgment", {s: "I have luggages to bring with me.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo4-i",  "AcceptabilityJudgment", {s: "When I travel to Europe, I only take a luggage.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["mo4-ds", "AcceptabilityJudgment", {s: "The man carried in the luggage without us even asking.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo4-dp", "AcceptabilityJudgment", {s: "Have you seen the luggages?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    //homework//
    ["mo5-zs", "AcceptabilityJudgment", {s: "Many students do homework on the weekends.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo5-zp", "AcceptabilityJudgment", {s: "Although it is not allowed, they work together to finish homeworks.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo5-i",  "AcceptabilityJudgment", {s: "We have a homework due tomorrow.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["mo5-ds", "AcceptabilityJudgment", {s: "Did you submit the homework on time?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo5-dp", "AcceptabilityJudgment", {s: "You will not get a mark if you do not complete the homeworks on time.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    //jewelry//
    ["mo6-zs", "AcceptabilityJudgment", {s: "She is wearing beautiful jewelry.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo6-zp", "AcceptabilityJudgment", {s: "Her jewelries are very expensive.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo6-i",  "AcceptabilityJudgment", {s: "Is there a jewelry you like very much?", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["mo6-ds", "AcceptabilityJudgment", {s: "I was looking for the jewelry when I found your brush.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo6-dp", "AcceptabilityJudgment", {s: "Please put the jewelries back in the box before your mother arrives.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
  //Countable [+prototypical]//
    //dog//
    ["c4-zs", "AcceptabilityJudgment", {s: "While I was at work, dog got into the garden.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c4-zp", "AcceptabilityJudgment", {s: "Dogs play in the park everyday.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c4-i",  "AcceptabilityJudgment", {s: "Many people think that a dog is a good starter pet.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["c4-ds", "AcceptabilityJudgment", {s: "The dog likes to eat dinner at 6:00PM.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c4-dp", "AcceptabilityJudgment", {s: "The dogs often lay in the bed.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    //window//
    ["c5-zs", "AcceptabilityJudgment", {s: "There is window over by him.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c5-zp", "AcceptabilityJudgment", {s: "We were in a large room surrounded by windows.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c5-i",  "AcceptabilityJudgment", {s: "A window would be beautiful there.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["c5-ds", "AcceptabilityJudgment", {s: "The window was open, letting in a very cool winter breeze.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c5-dp", "AcceptabilityJudgment", {s: "He put the windows together.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    //tree//
    ["c6-zs", "AcceptabilityJudgment", {s: "There is a beautiful tree in the park.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c6-zp", "AcceptabilityJudgment", {s: "Have you seen trees that are tall and skinny?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c6-i",  "AcceptabilityJudgment", {s: "One time I saw a tree that was taller than the house.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["c6-ds", "AcceptabilityJudgment", {s: "I cannot believe the tree fell down during the rain storm last night.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c6-dp", "AcceptabilityJudgment", {s: "Would you like to plant the trees here or over there?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
  //Countable [-prototypical]//
    //sponge//
    ["cnp4-zs", "AcceptabilityJudgment", {s: "I need sponge to clean up the mess from earlier.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["cnp4-zp", "AcceptabilityJudgment", {s: "I was wondering where sponges are made.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["cnp4-i",  "AcceptabilityJudgment", {s: "She said there was a sponge on the counter.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["cnp4-ds", "AcceptabilityJudgment", {s: "Please give me the sponge to clean up this mess.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["cnp4-dp", "AcceptabilityJudgment", {s: "Where are the sponges that we bought at the store?", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    //tile//
    ["cnp5-zs", "AcceptabilityJudgment", {s: "Do you have tile to finish the project?", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["cnp5-zp", "AcceptabilityJudgment", {s: "There are tiles to finish the floor in the garage.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["cnp5-i",  "AcceptabilityJudgment", {s: "I need a tile to put over this hole.", as: ["1", "2", "3", "4", "5", "6", "7"]}],    
    ["cnp5-ds", "AcceptabilityJudgment", {s: "Have you seen the tile that we bought for the kitchen?", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["cnp5-dp", "AcceptabilityJudgment", {s: "I think the tiles in the basement look very nice.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    //pole//
    ["cnp6-zs", "AcceptabilityJudgment", {s: "Do you have pole for the fence?", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["cnp6-zp", "AcceptabilityJudgment", {s: "I was wondering why poles were just lying on the ground.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["cnp6-i",  "AcceptabilityJudgment", {s: "She said there was a pole that was six feet tall.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["cnp6-ds", "AcceptabilityJudgment", {s: "I saw the pole that she was looking for in the other room.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["cnp6-dp", "AcceptabilityJudgment", {s: "Do you know where the poles are for the fence?", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
  //Flexible//
    //cake//
    ["f4-zs", "AcceptabilityJudgment", {s: "Would you like cake for dessert?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f4-zp", "AcceptabilityJudgment", {s: "Do you know if we should order cakes for the party?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f4-i",  "AcceptabilityJudgment", {s: "We would like a cake for tomorrow.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f4-ds", "AcceptabilityJudgment", {s: "The cake is for tomorrow, not Wednesday.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["f4-dp", "AcceptabilityJudgment", {s: "They ordered the cake for the party on Sunday.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    //rock//
    ["f5-zs", "AcceptabilityJudgment", {s: "I saw rock on the ground yesterday.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f5-zp", "AcceptabilityJudgment", {s: "There were rocks on the sidewalk in front of the house.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f5-i",  "AcceptabilityJudgment", {s: "Have you seen a rock in the garden?", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["f5-ds", "AcceptabilityJudgment", {s: "We were looking for the rock for our path.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f5-dp", "AcceptabilityJudgment", {s: "The rocks were in a pile over there yesterday.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    //paper//
    ["f6-zs", "AcceptabilityJudgment", {s: "Do you have paper to bring to the office?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f6-zp", "AcceptabilityJudgment", {s: "Papers are always due on Monday, not Friday.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f6-i",  "AcceptabilityJudgment", {s: "I have a paper that you need to use for your assignment.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f6-ds", "AcceptabilityJudgment", {s: "She gets the paper on Sunday.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f6-dp", "AcceptabilityJudgment", {s: "They have the papers for Wednesday.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
];