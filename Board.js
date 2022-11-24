/////////////////////////VARIABLES////////////////////////VARIABLES////////////////////////VARIABLES////////////////////////



//setting base array
let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

//end array
let endArray = [];

//index for array
let index = 0;

//max value index can go to
var maxIndexValue = 9;

//variable to hold array of all the removed number IDs in the removeNumbers() function
let removedNumbersIDList = [];

//variables for numbers remaining div
var onesLeft = document.getElementById('ones_left');
var twosLeft = document.getElementById('twos_left');
var threesLeft = document.getElementById('threes_left');
var foursLeft = document.getElementById('fours_left');
var fivesLeft = document.getElementById('fives_left');
var sixesLeft = document.getElementById('sixes_left');
var sevensLeft = document.getElementById('sevens_left');
var eightsLeft = document.getElementById('eights_left');
var ninesLeft = document.getElementById('nines_left');

//variables for numbers remaining values
let onesLeftValue = 9;
let twosLeftValue = 9;
let threesLeftValue = 9;
let foursLeftValue = 9;
let fivesLeftValue = 9;
let sixesLeftValue = 9;
let sevensLeftValue = 9;
let eightsLeftValue = 9;
let ninesLeftValue = 9;

//setting a variable for what number is selected
var selectedNumber = -1;

let win = false;

//setting variable to check for amount of correct numbers
let correctNumbers = 0;

//setting variable for endArrayIndex number
let endArrayindex = 0;

//variables for number options id's
var td1 = document.getElementById('td1');
var td2 = document.getElementById('td2');
var td3 = document.getElementById('td3');
var td4 = document.getElementById('td4');
var td5 = document.getElementById('td5');
var td6 = document.getElementById('td6');
var td7 = document.getElementById('td7');
var td8 = document.getElementById('td8');
var td9 = document.getElementById('td9');
var td10 = document.getElementById('td10');

//array variable for the initial amount of numbers remaining
let numbersRemainingArray = [];

//variable for the difficulty of the board
let difficulty = 0;

/////////////////////////VARIABLES////////////////////////VARIABLES////////////////////////VARIABLES////////////////////////



//if statement to set board difficulty
if(document.URL.includes("EasyBoard.html")) {
    difficulty = 40;
} else if(document.URL.includes("MediumBoard.html")) {
    difficulty = 50;
} else if(document.URL.includes("HardBoard.html")) {
    difficulty = 60;
} else if(document.URL.includes("ExtremeBoard.html")) {
    difficulty = 70;
}


//reload window for new board
function newBoard() {
    window.location.reload();
}


//shuffling base array
shuffle(arr);


//function to take an array and shuffle the number placements
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
}


//function to generate the board values
function generateBoardNumbers() {
    
    //for loop for game_block 1 & 2 & 3
    for(let i = 1; i <= 27; i++) {

        //generating random block id
        var ID = 'block' + i;
        var blockID = document.getElementById(ID);

        //checking is block is not used
        if(blockID.getAttribute('value') === "unUsed") {
            
            //setting the block to number at specific index
            blockID.innerHTML = arr[index];
            
            //set the block's value attribute to Ai_used
            blockID.setAttribute('value', "Ai_used");

            //putting number at index in array into a new array
            endArray.push(arr[index]);

            //increase index by 1
            index++;
        }

        //if index is equals to the maxIndexValue of '9'
        if(index === maxIndexValue) {
            
            //reset index amount to 0
            index = 0;
            
            //for loop to rotate the index of the numbers in the array
            for(let j = 0; j <= 2; j++) {

                //increase array lenght by 1 and decrease by 1
                arr.unshift(arr.pop());
            }
        }
    }

    //increase array lenght by 1 and decrease by 1
    arr.unshift(arr.pop())

    //for loop for game_block 4 & 5 & 6
    for(let i = 28; i <= 54; i++) {

        //generating random block id
        var ID = 'block' + i;
        var blockID = document.getElementById(ID);

        //checking is block is not used
        if(blockID.getAttribute('value') === "unUsed") {
            
            //setting the block to number at specific index
            blockID.innerHTML = arr[index];

            //set the block's value attribute to Ai_used
            blockID.setAttribute('value', "Ai_used");

            //putting number at index in array into a new array
            endArray.push(arr[index]);

            //increase index by 1
            index++;
        }
        
        //if index is equals to the maxIndexValue of '9'
        if(index === maxIndexValue) {

            //reset index amount to 0
            index = 0;
            
            //for loop to rotate the index of the numbers in the array
            for(let j = 0; j <= 2; j++) {

                //increase array lenght by 1 and decrease by 1
                arr.unshift(arr.pop());
            }
        }
    }

    //increase array lenght by 1 and decrease by 1
    arr.unshift(arr.pop())

    //for loop for game_block 7 & 8 & 9
    for(let i = 55; i <= 81; i++) {

        //generating random block id
        var ID = 'block' + i;
        var blockID = document.getElementById(ID);

        //checking is block is not used
        if(blockID.getAttribute('value') === "unUsed") {
            
            //setting the block to number at specific index
            blockID.innerHTML = arr[index];

            //set the block's value attribute to Ai_used
            blockID.setAttribute('value', "Ai_used");

            //putting number at index in array into a new array
            endArray.push(arr[index]);

            //increase index by 1
            index++;
        }

        //if index is equals to the maxIndexValue of '9'
        if(index === maxIndexValue) {

            //reset index amount to 0
            index = 0;
            
            //for loop to rotate the index of the numbers in the array
            for(let j = 0; j <= 2; j++) {

                //increase array lenght by 1 and decrease by 1
                arr.unshift(arr.pop());
            }
        }
    }

    removeNumbers();
}


//generate random number to put in the board
function generateRandomNumber() {
    var ranNum = Math.floor(Math.random() * 81) + 1;
    return ranNum;
}


//remove an amount of numbers from the board
function removeNumbers() {
    for(let i = 1; i <= difficulty; i++) {
       
        //variable to call the generateRandomNumber() function
        let ranNum = generateRandomNumber();

        //if the random ID number is not already in array
        if(!removedNumbersIDList.includes(ranNum)) {
            
            //put the ID random number in the array
            removedNumbersIDList.push(ranNum);
        } else {
            //else if it is in the array get new random ID number
            ranNum = generateRandomNumber();
        }

        //retrieving random block ID
        var ID = 'block' + ranNum;
        var blockID = document.getElementById(ID);

        //decreasing the value of remaining numbers if blockID.innerHTML is numbers 1-9
        if(blockID.innerHTML == 1) {
            onesLeftValue--;
        } else if(blockID.innerHTML == 2) {
            twosLeftValue--;
        } else if(blockID.innerHTML == 3) {
            threesLeftValue--;
        } else if(blockID.innerHTML == 4) {
            foursLeftValue--;
        } else if(blockID.innerHTML == 5) {
            fivesLeftValue--;
        } else if(blockID.innerHTML == 6) {
            sixesLeftValue--;
        } else if(blockID.innerHTML == 7) {
            sevensLeftValue--;
        } else if(blockID.innerHTML == 8) {
            eightsLeftValue--;
        } else if(blockID.innerHTML == 9) {
            ninesLeftValue--;
        }

        //setting the selected blocks inner html to empty
        blockID.innerHTML = "";

        //setting the value attribute to unUsed
        blockID.setAttribute('value', "unUsed");
    }

    //for loop for removing dark background
    for(let j = 1; j <= 81; j++) {

        //retrieving block ID
        var ID = 'block' + j;
        var blockID = document.getElementById(ID);
        
        //if value has a number in after number removal function
        if(blockID.getAttribute('value') === "Ai_used") {
            //change background color
            blockID.style.backgroundColor = "rgb(200, 200, 200)"
        }
    }   

    //pushing 1-9sLeftValue into the numbersRemainingArray array to save initial values left
    numbersRemainingArray.push(onesLeftValue);
    numbersRemainingArray.push(twosLeftValue);
    numbersRemainingArray.push(threesLeftValue);
    numbersRemainingArray.push(foursLeftValue);
    numbersRemainingArray.push(fivesLeftValue);
    numbersRemainingArray.push(sixesLeftValue);
    numbersRemainingArray.push(sevensLeftValue);
    numbersRemainingArray.push(eightsLeftValue);
    numbersRemainingArray.push(ninesLeftValue);
}


//change the color of the options when clicked
function changeColor(e) {

    //changes all options color to black
    if(td1.style.color !== 'black') {
        td1.style.color = 'black'
    }
    if(td2.style.color !== 'black') {
        td2.style.color = 'black'
    }
    if(td3.style.color !== 'black') {
        td3.style.color = 'black'
    }
    if(td4.style.color !== 'black') {
        td4.style.color = 'black'
    }
    if(td5.style.color !== 'black') {
        td5.style.color = 'black'
    }
    if(td6.style.color !== 'black') {
        td6.style.color = 'black'
    }
    if(td7.style.color !== 'black') {
        td7.style.color = 'black'
    }
    if(td8.style.color !== 'black') {
        td8.style.color = 'black'
    }
    if(td9.style.color !== 'black') {
        td9.style.color = 'black'
    }
    if(td10.style.color !== 'black') {
        td10.style.color = 'black'
    }

    //makes selected option color red
    e.style.color = 'red' ; 
}


//change which number is selected to player
function selected_Number(e) {

    //changes selected number to player choice
    if(e === td1) {
        selectedNumber = 1;
    } else if(e === td2) {
        selectedNumber = 2;
    } else if(e === td3) {
        selectedNumber = 3;
    } else if(e === td4) {
        selectedNumber = 4;
    } else if(e === td5) {
        selectedNumber = 5;
    } else if(e === td6) {
        selectedNumber = 6;
    } else if(e === td7) {
        selectedNumber = 7;
    } else if(e === td8) {
        selectedNumber = 8;
    } else if(e === td9) {
        selectedNumber = 9;
    }
    
    //clear button value == 0
    if(e === td10) {
        selectedNumber = 0;
    }

    for(let i = 1; i <= 81; i++) {
        //getting every block ID
        var ID = 'block' + i;
        var blockID = document.getElementById(ID);  
        
        if(blockID.getAttribute('value') === "used") {
            if(blockID.style.backgroundColor !== 'white') {
                blockID.style.backgroundColor = 'white';
            }
        } else if(blockID.getAttribute('value') === "Ai_used") {
            if(blockID.style.backgroundColor !== 'rgb(200, 200, 200)') {
                blockID.style.backgroundColor = 'rgb(200, 200, 200)';
            }
        }

        if(selectedNumber == 0) {
            if(blockID.style.backgroundColor == 'lightblue') {
                if(blockID.getAttribute('value') == "used") {
                    blockID.style.backgroundColor == 'white';
                } else if(blockID.getAttribute('value') == "Ai_used") {
                    blockID.style.backgroundColor == 'rgb(200, 200, 200)';
                }
            }
        } else if(blockID.innerHTML == selectedNumber) {
            blockID.style.backgroundColor = 'lightblue';
        }
    }
}


//place player selected number in block
function placeNumber(e) {

    //if button selected is the clear button clear the value
    if(selectedNumber === 0) {

        //if value attribute is not used by Ai
        if(e.getAttribute('value') !== "Ai_used") {
        
            //if selectednumber is values 1-9 decrease respective values by 1
            if(e.innerHTML == 1) {
                onesLeftValue--;
            } else if(e.innerHTML == 2) {
                twosLeftValue--;
            } else if(e.innerHTML == 3) {
                threesLeftValue--;
            } else if(e.innerHTML == 4) {
                foursLeftValue--;
            } else if(e.innerHTML == 5) {
                fivesLeftValue--;
            } else if(e.innerHTML == 6) {
                sixesLeftValue--;
            } else if(e.innerHTML == 7) {
                sevensLeftValue--;
            } else if(e.innerHTML == 8) {
                eightsLeftValue--;
            } else if(e.innerHTML == 9) {
                ninesLeftValue--;
            }

            //clear the number
            e.innerHTML = "";

            //set value attribute to unUsed
            e.setAttribute('value', "unUsed");
        }
    }    

    else

    //if onesLeft.innerHTML does not = 0 and selected number is 1
    if(onesLeft.innerHTML > 0 && selectedNumber === 1) {
        
        //if button selected is not the clear button or -1(which means no value selected)
        if (selectedNumber !== -1) {

            //if value arrtibute is unUsed
            if(e.getAttribute('value') === "unUsed") {

                //set number to selected number
                e.innerHTML = selectedNumber;

                //set value attribute to used
                e.setAttribute('value', "used");
                
                //if selectednumber is values 1-9 decrease respective values by 1
                if(selectedNumber === 1) {
                    onesLeftValue++;
                } else if(selectedNumber === 2) {
                    twosLeftValue++;
                } else if(selectedNumber === 3) {
                    threesLeftValue++;
                } else if(selectedNumber === 4) {
                    foursLeftValue++;
                } else if(selectedNumber === 5) {
                    fivesLeftValue++;
                } else if(selectedNumber === 6) {
                    sixesLeftValue++;
                } else if(selectedNumber === 7) {
                    sevensLeftValue++;
                } else if(selectedNumber === 8) {
                    eightsLeftValue++;
                } else if(selectedNumber === 9) {
                    ninesLeftValue++;
                }
            }
        }
    }

    else

    //if twosLeft.innerHTML does not = 0 and selected number is 2
    if(twosLeft.innerHTML > 0 && selectedNumber === 2) {
        
        //if button selected is not the clear button or -1(which means no value selected)
        if (selectedNumber !== -1) {

            //if value arrtibute is unUsed
            if(e.getAttribute('value') === "unUsed") {

                //set number to selected number
                e.innerHTML = selectedNumber;

                //set value attribute to used
                e.setAttribute('value', "used");
                
                //if selectednumber is values 1-9 decrease respective values by 1
                if(selectedNumber === 1) {
                    onesLeftValue++;
                } else if(selectedNumber === 2) {
                    twosLeftValue++;
                } else if(selectedNumber === 3) {
                    threesLeftValue++;
                } else if(selectedNumber === 4) {
                    foursLeftValue++;
                } else if(selectedNumber === 5) {
                    fivesLeftValue++;
                } else if(selectedNumber === 6) {
                    sixesLeftValue++;
                } else if(selectedNumber === 7) {
                    sevensLeftValue++;
                } else if(selectedNumber === 8) {
                    eightsLeftValue++;
                } else if(selectedNumber === 9) {
                    ninesLeftValue++;
                }
            }
        }
    }

    else

    //if threesLeft.innerHTML does not = 0 and selected number is 3
    if(threesLeft.innerHTML > 0 && selectedNumber === 3) {
        
        //if button selected is not the clear button or -1(which means no value selected)
        if (selectedNumber !== -1) {

            //if value arrtibute is unUsed
            if(e.getAttribute('value') === "unUsed") {

                //set number to selected number
                e.innerHTML = selectedNumber;

                //set value attribute to used
                e.setAttribute('value', "used");
                
                //if selectednumber is values 1-9 decrease respective values by 1
                if(selectedNumber === 1) {
                    onesLeftValue++;
                } else if(selectedNumber === 2) {
                    twosLeftValue++;
                } else if(selectedNumber === 3) {
                    threesLeftValue++;
                } else if(selectedNumber === 4) {
                    foursLeftValue++;
                } else if(selectedNumber === 5) {
                    fivesLeftValue++;
                } else if(selectedNumber === 6) {
                    sixesLeftValue++;
                } else if(selectedNumber === 7) {
                    sevensLeftValue++;
                } else if(selectedNumber === 8) {
                    eightsLeftValue++;
                } else if(selectedNumber === 9) {
                    ninesLeftValue++;
                }
            }
        }
    }

    else

    //if fourLeft.innerHTML does not = 0 and selected number is 4
    if(foursLeft.innerHTML > 0 && selectedNumber === 4) {
        
        //if button selected is not the clear button or -1(which means no value selected)
        if (selectedNumber !== -1) {

            //if value arrtibute is unUsed
            if(e.getAttribute('value') === "unUsed") {

                //set number to selected number
                e.innerHTML = selectedNumber;

                //set value attribute to used
                e.setAttribute('value', "used");
                
                //if selectednumber is values 1-9 decrease respective values by 1
                if(selectedNumber === 1) {
                    onesLeftValue++;
                } else if(selectedNumber === 2) {
                    twosLeftValue++;
                } else if(selectedNumber === 3) {
                    threesLeftValue++;
                } else if(selectedNumber === 4) {
                    foursLeftValue++;
                } else if(selectedNumber === 5) {
                    fivesLeftValue++;
                } else if(selectedNumber === 6) {
                    sixesLeftValue++;
                } else if(selectedNumber === 7) {
                    sevensLeftValue++;
                } else if(selectedNumber === 8) {
                    eightsLeftValue++;
                } else if(selectedNumber === 9) {
                    ninesLeftValue++;
                }
            }
        }
    }

    else

    //if fivesLeft.innerHTML does not = 0 and selected number is 5
    if(fivesLeft.innerHTML > 0 && selectedNumber === 5) {
        
        //if button selected is not the clear button or -1(which means no value selected)
        if (selectedNumber !== -1) {

            //if value arrtibute is unUsed
            if(e.getAttribute('value') === "unUsed") {

                //set number to selected number
                e.innerHTML = selectedNumber;

                //set value attribute to used
                e.setAttribute('value', "used");
                
                //if selectednumber is values 1-9 decrease respective values by 1
                if(selectedNumber === 1) {
                    onesLeftValue++;
                } else if(selectedNumber === 2) {
                    twosLeftValue++;
                } else if(selectedNumber === 3) {
                    threesLeftValue++;
                } else if(selectedNumber === 4) {
                    foursLeftValue++;
                } else if(selectedNumber === 5) {
                    fivesLeftValue++;
                } else if(selectedNumber === 6) {
                    sixesLeftValue++;
                } else if(selectedNumber === 7) {
                    sevensLeftValue++;
                } else if(selectedNumber === 8) {
                    eightsLeftValue++;
                } else if(selectedNumber === 9) {
                    ninesLeftValue++;
                }
            }
        }
    }

    else
    
    //if sixesLeft.innerHTML does not = 0 and selected number is 6
    if(sixesLeft.innerHTML > 0 && selectedNumber === 6) {
        
        //if button selected is not the clear button or -1(which means no value selected)
        if (selectedNumber !== -1) {

            //if value arrtibute is unUsed
            if(e.getAttribute('value') === "unUsed") {

                //set number to selected number
                e.innerHTML = selectedNumber;

                //set value attribute to used
                e.setAttribute('value', "used");
                
                //if selectednumber is values 1-9 decrease respective values by 1
                if(selectedNumber === 1) {
                    onesLeftValue++;
                } else if(selectedNumber === 2) {
                    twosLeftValue++;
                } else if(selectedNumber === 3) {
                    threesLeftValue++;
                } else if(selectedNumber === 4) {
                    foursLeftValue++;
                } else if(selectedNumber === 5) {
                    fivesLeftValue++;
                } else if(selectedNumber === 6) {
                    sixesLeftValue++;
                } else if(selectedNumber === 7) {
                    sevensLeftValue++;
                } else if(selectedNumber === 8) {
                    eightsLeftValue++;
                } else if(selectedNumber === 9) {
                    ninesLeftValue++;
                }
            }
        }
    }

    else

    //if sevensLeft.innerHTML does not = 0 and selected number is 7
    if(sevensLeft.innerHTML > 0 && selectedNumber === 7) {
        
        //if button selected is not the clear button or -1(which means no value selected)
        if (selectedNumber !== -1) {

            //if value arrtibute is unUsed
            if(e.getAttribute('value') === "unUsed") {

                //set number to selected number
                e.innerHTML = selectedNumber;

                //set value attribute to used
                e.setAttribute('value', "used");
                
                //if selectednumber is values 1-9 decrease respective values by 1
                if(selectedNumber === 1) {
                    onesLeftValue++;
                } else if(selectedNumber === 2) {
                    twosLeftValue++;
                } else if(selectedNumber === 3) {
                    threesLeftValue++;
                } else if(selectedNumber === 4) {
                    foursLeftValue++;
                } else if(selectedNumber === 5) {
                    fivesLeftValue++;
                } else if(selectedNumber === 6) {
                    sixesLeftValue++;
                } else if(selectedNumber === 7) {
                    sevensLeftValue++;
                } else if(selectedNumber === 8) {
                    eightsLeftValue++;
                } else if(selectedNumber === 9) {
                    ninesLeftValue++;
                }
            }
        }
    }

    else

    //if eightsLeft.innerHTML does not = 0 and selected number is 8
    if(eightsLeft.innerHTML > 0 && selectedNumber === 8) {
        
        //if button selected is not the clear button or -1(which means no value selected)
        if (selectedNumber !== -1) {

            //if value arrtibute is unUsed
            if(e.getAttribute('value') === "unUsed") {

                //set number to selected number
                e.innerHTML = selectedNumber;

                //set value attribute to used
                e.setAttribute('value', "used");
                
                //if selectednumber is values 1-9 decrease respective values by 1
                if(selectedNumber === 1) {
                    onesLeftValue++;
                } else if(selectedNumber === 2) {
                    twosLeftValue++;
                } else if(selectedNumber === 3) {
                    threesLeftValue++;
                } else if(selectedNumber === 4) {
                    foursLeftValue++;
                } else if(selectedNumber === 5) {
                    fivesLeftValue++;
                } else if(selectedNumber === 6) {
                    sixesLeftValue++;
                } else if(selectedNumber === 7) {
                    sevensLeftValue++;
                } else if(selectedNumber === 8) {
                    eightsLeftValue++;
                } else if(selectedNumber === 9) {
                    ninesLeftValue++;
                }
            }
        }
    }

    else

    //if ninesLeft.innerHTML does not = 0 and selected number is 9
    if(ninesLeft.innerHTML > 0 && selectedNumber === 9) {
        
        

        //if button selected is not the clear button or -1(which means no value selected)
        if (selectedNumber !== -1) {

            //if value arrtibute is unUsed
            if(e.getAttribute('value') === "unUsed") {

                //set number to selected number
                e.innerHTML = selectedNumber;

                //set value attribute to used
                e.setAttribute('value', "used");
                
                //if selectednumber is values 1-9 decrease respective values by 1
                if(selectedNumber === 1) {
                    onesLeftValue++;
                } else if(selectedNumber === 2) {
                    twosLeftValue++;
                } else if(selectedNumber === 3) {
                    threesLeftValue++;
                } else if(selectedNumber === 4) {
                    foursLeftValue++;
                } else if(selectedNumber === 5) {
                    fivesLeftValue++;
                } else if(selectedNumber === 6) {
                    sixesLeftValue++;
                } else if(selectedNumber === 7) {
                    sevensLeftValue++;
                } else if(selectedNumber === 8) {
                    eightsLeftValue++;
                } else if(selectedNumber === 9) {
                    ninesLeftValue++;
                }
            }
        }
    }

    //calling remaining numbers function to change remaining numbers
    remainingNumbers();
}


//check for win function
function checkForWin() {
    //calls validate block function
    validateBlock();

    //if win is true call winningScreen function after 3 seconds
    if(win === true) {
        setTimeout(winningScreen(), 3000)
    }
}


//set to winning screen
function winningScreen() {
    window.location.replace("WinBoard.html");
}


//function to validate every block to check if correct or incorrect
function validateBlock () {
    
    for(let i = 1; i <= 81; i++) {
        //getting every block ID
        var ID = 'block' + i;
        var blockID = document.getElementById(ID);

        //if the blockID's value attribute does not = Ai_used
        if(blockID.getAttribute('value') !== "Ai_used") {
            
            //if block number = the number at certain index of endArray
            if(blockID.innerHTML === endArray[endArrayindex]) {
                
                //increase correct numbers
                correctNumbers++;

                //change background color to lime green to show correct
                blockID.style.color = 'limegreen';

            } else {

                //change background color to red to show incorrect
                blockID.style.color = 'red';
            }
        
        //if the blockID's value attribute = Ai_used
        } else { 

            //increase correct numbers
            correctNumbers++;
        }

        //increase end Array index
        endArrayindex++;
        
        //if all numbers are correct make win true
        if(correctNumbers === 81) {
            win = true;
        }
    }
}


//function to reset the game board but not make a new board
function restartGame() {

    for(let i = 1; i <= 81; i++) {

        //getting each block ID
        var ID = 'block' + i;
        var blockID = document.getElementById(ID);

        //setting background color of every ID to white
        blockID.style.color = 'black';
        

        //if the block is not used by the AI(non removed numbers)
        if(blockID.getAttribute('value') !== "Ai_used") {
            
            //clear block inner html
            blockID.innerHTML = "";

            blockID.setAttribute('value', "unUsed");
        }
    }

    //set 1-9sLeftValue to numbersRemainingArray at index 0-8
    onesLeftValue = numbersRemainingArray[0];
    twosLeftValue = numbersRemainingArray[1];
    threesLeftValue = numbersRemainingArray[2];
    foursLeftValue = numbersRemainingArray[3];
    fivesLeftValue = numbersRemainingArray[4];
    sixesLeftValue = numbersRemainingArray[5];
    sevensLeftValue = numbersRemainingArray[6];
    eightsLeftValue = numbersRemainingArray[7];
    ninesLeftValue = numbersRemainingArray[8];

    //call remainingNumbers() function
    remainingNumbers();
}


//function to display number remaining numbers
function remainingNumbers() {
    onesLeft.innerHTML = 9 - onesLeftValue;
    twosLeft.innerHTML = 9 - twosLeftValue;
    threesLeft.innerHTML = 9 - threesLeftValue;
    foursLeft.innerHTML = 9 - foursLeftValue;
    fivesLeft.innerHTML = 9 - fivesLeftValue;
    sixesLeft.innerHTML = 9 - sixesLeftValue;
    sevensLeft.innerHTML = 9 - sevensLeftValue;
    eightsLeft.innerHTML = 9 - eightsLeftValue;
    ninesLeft.innerHTML = 9 - ninesLeftValue;
}
