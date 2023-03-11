import {productA} from '/data.js'
import {productB} from '/data.js'

const salesDisplay = document.getElementById('sales-display')
const achievementsDisplay = document.getElementById('achievements-display')
const salesCounter = document.getElementById('sales-counter')
const achievementsCounter = document.getElementById('achievements-counter')
const revenueDisplay = document.getElementById('revenue-display')
const commissionDisplay = document.getElementById('commission-display')

let sales = []
let achievements = []
let totalRevenue = 0
let totalCommission = 0
let giveAchievement = true

document.getElementById('star-btn').addEventListener('click',function(){
    sales.push(productA.emoji)
    salesRender()
    revenueRender(productA.revenue)
    commissionRender(productA.commission)
    achievementsRender()
})


document.getElementById('fire-btn').addEventListener('click',function(){ 
    sales.push(productB.emoji)
    salesRender()
    revenueRender(productB.revenue)
    commissionRender(productB.commission)
    achievementsRender()
})


function salesRender(){
    salesDisplay.textContent = ''
    for (let i = 0; i < sales.length; i++){
        salesDisplay.textContent += sales[i]
    }
    
    salesCounter.textContent = sales.length
}


function achievementsRender() {
    achievementsDisplay.textContent = ''
    
    
      if(sales.length === 1){
        achievements.push("🔔")
    }else if(sales.length === 15){
        achievements.push("🏆")
    }else if(totalRevenue >= 2500 && giveAchievement){
        achievements.push("💰")
        giveAchievement = false
    }
    
    
    for(let i = 0; i < achievements.length; i++){
        achievementsDisplay.textContent += achievements[i]    
    }
    
    achievementsCounter.textContent = achievements.length
    
}

function revenueRender(revenue){
    totalRevenue += revenue
    revenueDisplay.textContent = "$ " + totalRevenue
}

function commissionRender(commission){
    totalCommission += commission
    commissionDisplay.textContent = "$ " + totalCommission
}