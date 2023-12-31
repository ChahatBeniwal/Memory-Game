const cardArray = [
    {
        name:'carrot',
        img:'./Images/carrot.PNG',
    },
    {
        name:'bunny',
        img:'./Images/bunny.PNG',
    },
    {
        name:'chick',
        img:'./Images/chick.PNG',
    },
    {
        name:'rainbow',
        img:'./Images/rainbow.PNG',
    },
    {
        name:'egg',
        img:'./Images/egg.PNG',
    },
    {
        name:'egg2',
        img:'./Images/egg2.PNG', 
    },
    {
        name:'carrot',
        img:'./Images/carrot.PNG',
    },
    {
        name:'bunny',
        img:'./Images/bunny.PNG',
    },
    {
        name:'chick',
        img:'./Images/chick.PNG',
    },
    {
        name:'rainbow',
        img:'./Images/rainbow.PNG',
    },
    {
        name:'egg',
        img:'./Images/egg.PNG',
    },
    {
        name:'egg2',
        img:'./Images/egg2.PNG', 
    }
    
]
cardArray.sort(()=> 0.5 - Math.random())
const gridDisplay=document.querySelector('#grid')
const resultDisplay=document.querySelector('#result')
let cardChosen=[]
let cardChosenId=[]
const cardWon=[]
function createBoard(){
    for (let i =0;i<12;i++){
        const card=document.createElement('img')
        card.setAttribute('src','./Images/cover.PNG')
        card.setAttribute('data-id',i )
        card.addEventListener('click',flipcard)
        gridDisplay.appendChild(card)
    }
}
createBoard()
function flipcard(){
    let cardID = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardID].name)
    cardChosenId.push(cardID)
    this.setAttribute('src',cardArray[cardID].img)
    if (cardChosen.length===2){
        setTimeout(checkformatch,500)
    }
}
function checkformatch(){
    const cards = document.querySelectorAll('img')
    const FirstCardId = cardChosenId[0]
    const SecondCardId = cardChosenId[1]
    if (FirstCardId==SecondCardId){
        cards[FirstCardId].setAttribute('src','./Images/cover.PNG')
        cards[SecondCardId].setAttribute('src','./Images/cover.PNG')
        alert('Oops! You have clicked on the same image.')
    }
    if (cardChosen[0]==cardChosen[1]){
        alert("It's a Match!")
        cards[FirstCardId].setAttribute('src','./Images/skin.PNG')
        cards[SecondCardId].setAttribute('src','./Images/skin.PNG')
        cards[FirstCardId].removeEventListener('click',flipcard)
        cards[SecondCardId].removeEventListener('click',flipcard)
        cardWon.push(cardChosen)
    } else {
        cards[FirstCardId].setAttribute('src','./Images/cover.PNG')
        cards[SecondCardId].setAttribute('src','./Images/cover.PNG')
        alert('Oops! Try Again')
    }
    cardChosen=[]
    cardChosenId=[]
    
    resultDisplay.innerHTML=cardWon.length
    if (cardWon.length==cardArray.length/2){
        resultDisplay.innerHTML='Congratulations! You found them all!'
    }
}
