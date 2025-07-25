const maximhp = document.getElementById("maximhp");
const navbar = document.getElementById("navBar");
const sound = document.getElementById("sound");

let owner = ["../Assets/creator1.mp3","../Assets/creator2.mp3","../Assets/creator3.mp3"];

const upgrade = document.getElementById("upgrade");
const upgrader = document.getElementById("upgrader");
const upgradeIncome = document.getElementById("upgradeIncome");
const priceIncome = document.getElementById("priceIncome");
const moneypersecond = document.getElementById("moneypersecond");
const lose = document.getElementById("lose");
let losses = 0;
lose.textContent = losses;
const won = document.getElementById("won");
let wins = 0;
won.textContent = wins;
const fight = document.getElementById("fight");
const fighter = document.getElementById("fighter");
const bosses = document.getElementById("bosses");
const boss = document.getElementById("boss");

// Helper to close all panels
function closeAllPanels() {
upgrade.style.borderRadius = "7.5px 0 0 7.5px";
upgrade.style.color = "cyan";
  upgrade.style.background = "transparent";
  upgrade.style.fontWeight = "normal";
  upgrader.style.display = "none";
  fight.style.color = "orange";
  fight.style.background = "transparent";
  fight.style.fontWeight = "normal";
  fighter.style.display = "none";
  bosses.style.color = "blueviolet";
  bosses.style.borderRadius = "0 7.5px 7.5px 0";
  bosses.style.background = "transparent";
  bosses.style.fontWeight = "normal";
  boss.style.display = "none";
}


// Show upgrader
upgrade.addEventListener('click', function(event) {
  event.stopPropagation();
  closeAllPanels(); // close others
  upgrade.style.color = "black";
  upgrade.style.background = "linear-gradient(transparent,cyan)";
  upgrade.style.fontWeight = "bold";
  upgrader.style.display = "flex";
});


// Show fighter
fight.addEventListener('click', function(event) {
  event.stopPropagation();
  closeAllPanels(); // close others
  fight.style.color = "black";
  fight.style.background = "linear-gradient(transparent,orange)";
  fight.style.fontWeight = "bold";
  fighter.style.display = "flex";
});


// Show boss
bosses.addEventListener('click', function(event) {
if (currentLvl < 30) {
    alert("You must be level 30 or higher to view BOSSES!");
    return;
  }
  event.stopPropagation();
  closeAllPanels(); // close others
  bosses.style.color = "black";
  bosses.style.background = "linear-gradient(transparent,blueviolet)";
  bosses.style.fontWeight = "bold";
  boss.style.display = "flex";
});


// Click outside to close all
document.addEventListener('click', function(event) {
  if (
    !upgrade.contains(event.target) &&
    !upgrader.contains(event.target) &&
    !fight.contains(event.target) &&
    !fighter.contains(event.target) &&
    !bosses.contains(event.target) &&
    !boss.contains(event.target)
  ) {
    closeAllPanels();
  }
});


//UPGRADE DAMAGE
const upgradeDMG = document.getElementById("upgradeDMG");
const priceDMG = document.getElementById("priceDMG");
const money = document.getElementById("money");
const damage = document.getElementById("damage");
let dmg = 10;
let mny = 100;
let priceofDMG = 100;

money.textContent = mny;
priceDMG.textContent = priceofDMG;
damage.textContent = dmg;

upgradeDMG.addEventListener('click', function(){
 if(mny >= priceofDMG){
 sound.src = "../Assets/PURCHASE.mp3";
 sound.play();
 mny -= priceofDMG;
 dmg += 3;
 dmg = Math.ceil(dmg * 1.25);
 priceofDMG = Math.ceil(priceofDMG * 1.25);
 priceDMG.textContent = priceofDMG;
 damage.textContent = dmg;
 money.textContent = mny;
 }
});


//INCOME PER SECOND
let moneypersec = 1;
let incomePrice = 50;
priceIncome.textContent = incomePrice;
upgradeIncome.addEventListener('click', function(){
 if(mny >= incomePrice){
 sound.src = "../Assets/PURCHASE.mp3";
 sound.play();
 mny -= incomePrice;
 mny += 5;
 moneypersec = Math.ceil(moneypersec * 1.25);
 incomePrice = Math.ceil(incomePrice * 1.25);
 priceIncome.textContent = incomePrice;
 moneypersecond.textContent = moneypersec;
 }
});

setInterval(()=>{
mny += moneypersec;
money.textContent = mny;
},1000);


//UPGRADE HEALTH
const upgradeHP = document.getElementById("upgradeHP");
const priceHP = document.getElementById("priceHP");
const health = document.getElementById("health");
let hp = 100;
let maxhp = 100;
let priceofHP = 75;
priceHP.textContent = priceofHP;
health.textContent = hp;
const lvlstatus = document.getElementById("lvlstatus");
const exp = document.getElementById("exp");
const maxExp = document.getElementById("maxExp");
let userMaxExp = 50;
let userExp = 5;
let currentLvl = 1;
exp.textContent = userExp;
maxExp.textContent = userMaxExp;
lvlstatus.textContent = currentLvl;
maximhp.textContent = maxhp;

upgradeHP.addEventListener('click', function(){
 if(mny >= priceofHP){
 sound.src = "../Assets/PURCHASE.mp3";
 sound.play();
 mny -= priceofHP;
 priceofHP = Math.ceil(priceofHP * 1.25);
 hp += 5;
 priceHP.textContent = priceofHP;
 maxhp = Math.ceil(maxhp * 1.5); 
 health.textContent = hp;
 money.textContent = mny;
 maximhp.textContent = maxhp;
 }
});


//NORMAL ENEMY
const normal = document.getElementById("normal");
const normallvl = document.getElementById("normallvl");
const normalhp = document.getElementById("normalhp");
const normaldmg = document.getElementById("normaldmg");
let normalLevel = 1;
let normalHealth = 25;
let normalmaxhp = 25;

normalhp.textContent = normalHealth;
normallvl.textContent = normalLevel;

normal.addEventListener('click', function(){
  if (hp <= 0) {
    alert("You have 0 HP! Heal yourself first!");
    return; // Stop the fight here
  }

      sound.src = "../Assets/VILLAGER.mp3";
      sound.play();
      normalHealth -= dmg;
      normalhp.textContent = Math.ceil(normalHealth);
      health.textContent = Math.ceil(hp);

  if(normalHealth <= 0){
  mny += 5;
    mny = Math.ceil(mny *= 1.05);
    exp.textContent = userExp;
    normalmaxhp = Math.ceil(normalmaxhp * 1.05);
    normalHealth = normalmaxhp;
    money.textContent = Math.ceil(mny);
    normalhp.textContent = normalHealth;
    normalLevel++;
    normallvl.textContent = normalLevel;
    alert("You won! your money and exp multiplied by 1.25x");

userExp += 10;
userExp = Math.ceil(userExp * 1.25);
while(userExp >= userMaxExp){ // in case EXP overflows, handle multiple level-ups
  userExp -= userMaxExp;
  currentLvl += 1;
  userMaxExp = Math.ceil(userMaxExp * 1.25);

  // LEVEL UP BONUS:
  dmg = Math.ceil(dmg * 1.25);
  maxhp = Math.ceil(maxhp * 1.25);
  hp = maxhp;

  damage.textContent = dmg;
  health.textContent = hp;
  maximhp.textContent = maxhp;
}

exp.textContent = userExp;
maxExp.textContent = userMaxExp;
lvlstatus.textContent = currentLvl;
  }
});


//ELITE ENEMY
const elite = document.getElementById("elite");
const elitelvl = document.getElementById("elitelvl");
const elitelhp = document.getElementById("elitehp");
const elitedmg = document.getElementById("elitedmg");
let eliteLevel = 1;
let eliteHealth = 100;
let elitemaxhp = 100;
let eliteDamage = 15;

elitedmg.textContent = eliteDamage;
elitehp.textContent = eliteHealth;
elitelvl.textContent = eliteLevel;

elite.addEventListener('click', function(){
  if (hp <= 0) {
    alert("You have 0 HP! Heal yourself first!");
    losses++;
lose.textContent = losses;
    return; // Stop the fight here
  }

sound.src = "../Assets/ZOMBIE.mp3";
 sound.play();
 hp -= eliteDamage;
  eliteHealth -= dmg;
  elitehp.textContent = Math.ceil(eliteHealth);
  health.textContent = Math.ceil(hp);

  if(eliteHealth <= 0){
  mny += 10;
    mny = Math.ceil(mny * 1.05);
    wins++;
won.textContent = wins;
    exp.textContent = userExp;
    elitemaxhp = Math.ceil(elitemaxhp * 1.25);
    eliteHealth = elitemaxhp;
    eliteDamage = Math.ceil(eliteDamage * 1.25);
    elitedmg.textContent = eliteDamage;
    money.textContent = Math.ceil(mny);
    elitehp.textContent = eliteHealth;
    eliteLevel++;
    elitelvl.textContent = eliteLevel;
    alert("You won!");
    
    userExp += 10;
userExp = Math.ceil(userExp * 1.25);
while(userExp >= userMaxExp){ // in case EXP overflows, handle multiple level-ups
  userExp -= userMaxExp;
  currentLvl += 1;
  userMaxExp = Math.ceil(userMaxExp * 1.25);

  // LEVEL UP BONUS:
  dmg = Math.ceil(dmg * 1.25);
  maxhp = Math.ceil(maxhp * 1.25);
  hp = maxhp;

  damage.textContent = dmg;
  health.textContent = hp;
  maximhp.textContent = maxhp;
}

exp.textContent = userExp;
maxExp.textContent = userMaxExp;
lvlstatus.textContent = currentLvl;
  }
});


//SOLDIER ENEMY
const soldier = document.getElementById("soldier");
const soldierlvl = document.getElementById("soldierlvl");
const soldierlhp = document.getElementById("soldierhp");
const soldierdmg = document.getElementById("soldierdmg");
let soldierLevel = 1;
let soldierHealth = 250;
let soldiermaxhp = 250;
let soldierDamage = 25;

soldierdmg.textContent = soldierDamage;
soldierhp.textContent = soldierHealth;
soldierlvl.textContent = soldierLevel;

soldier.addEventListener('click', function(){
if (currentLvl < 5) {
    alert("You must be level 5 or higher to fight The SKELETON!");
    return;
  }
  if (hp <= 0) {
    alert("You have 0 HP! Heal yourself first!");
    losses++;
lose.textContent = losses;
    return; // Stop the fight here
  }

sound.src = "../Assets/SKELETON.mp3";
 sound.play();
 hp -= soldierDamage;
  soldierHealth -= dmg;
  soldierhp.textContent = Math.ceil(soldierHealth);
  health.textContent = Math.ceil(hp);

  if(soldierHealth <= 0){
  mny += 15;
    mny = Math.ceil(mny * 1.10);
    wins++;
won.textContent = wins;
    exp.textContent = userExp;
    soldiermaxhp = Math.ceil(soldiermaxhp * 1.25);
    soldierHealth = soldiermaxhp;
    soldierDamage = Math.ceil(soldierDamage * 1.25);
    soldierdmg.textContent = soldierDamage;
    money.textContent = Math.ceil(mny);
    soldierhp.textContent = soldierHealth;
    soldierLevel++;
    soldierlvl.textContent = soldierLevel;
    alert("You won!");
    
userExp += 25;
userExp = Math.ceil(userExp * 1.25);
while(userExp >= userMaxExp){ // in case EXP overflows, handle multiple level-ups
  userExp -= userMaxExp;
  currentLvl += 1;
  userMaxExp = Math.ceil(userMaxExp * 1.25);

  // LEVEL UP BONUS:
  dmg = Math.ceil(dmg * 1.25);
  maxhp = Math.ceil(maxhp * 1.25);
  hp = maxhp;

  damage.textContent = dmg;
  health.textContent = hp;
  maximhp.textContent = maxhp;
}

exp.textContent = userExp;
maxExp.textContent = userMaxExp;
lvlstatus.textContent = currentLvl;
  }
});


//VETERAN ENEMY
const veteran = document.getElementById("veteran");
const veteranlvl = document.getElementById("veteranlvl");
const veteranhp = document.getElementById("veteranhp");
const veterandmg = document.getElementById("veterandmg");
let veteranLevel = 1;
let veteranHealth = 500;
let veteranmaxhp = 500;
let veteranDamage = 20;

veterandmg.textContent = veteranDamage;
veteranhp.textContent = veteranHealth;
veteranlvl.textContent = veteranLevel;

veteran.addEventListener('click', function(){
if (currentLvl < 10) {
    alert("You must be level 10 or higher to fight The IRON-GOLEM!");
    return;
  }
  if (hp <= 0) {
    alert("You have 0 HP! Heal yourself first!");
    losses++;
lose.textContent = losses;
    return; // Stop the fight here
  }

sound.src = "../Assets/IRONGOLEM.mp3";
 sound.play();
 hp -= veteranDamage;
  veteranHealth -= dmg;
  veteranhp.textContent = Math.ceil(veteranHealth);
  health.textContent = Math.ceil(hp);

  if(veteranHealth <= 0){
  mny += 20;
    mny = Math.ceil(mny * 1.10);
    wins++;
won.textContent = wins;
    exp.textContent = userExp;
    veteranmaxhp = Math.ceil(soldiermaxhp * 1.50);
    veteranHealth = veteranmaxhp;
    veteranDamage = Math.ceil(veteranDamage * 1.50);
    veterandmg.textContent = veteranDamage;
    money.textContent = Math.ceil(mny);
    veteranhp.textContent = veteranHealth;
    veteranLevel++;
    veteranlvl.textContent = veteranLevel;
    alert("You won!");
    
userExp += 50;
userExp = Math.ceil(userExp * 1.5);
while(userExp >= userMaxExp){ // in case EXP overflows, handle multiple level-ups
  userExp -= userMaxExp;
  currentLvl += 1;
  userMaxExp = Math.ceil(userMaxExp * 1.25);

  // LEVEL UP BONUS:
  dmg = Math.ceil(dmg * 1.25);
  maxhp = Math.ceil(maxhp * 1.25);
  hp = maxhp;

  damage.textContent = dmg;
  health.textContent = hp;
  maximhp.textContent = maxhp;
}

exp.textContent = userExp;
maxExp.textContent = userMaxExp;
lvlstatus.textContent = currentLvl;
  }
});


//MASTER ENEMY
const master = document.getElementById("master");
const masterlvl = document.getElementById("masterlvl");
const masterhp = document.getElementById("masterhp");
const masterdmg = document.getElementById("masterdmg");
let masterLevel = 1;
let masterHealth = 1000;
let mastermaxhp = 1000;
let masterDamage = 25;

masterdmg.textContent = masterDamage;
masterhp.textContent = masterHealth;
masterlvl.textContent = masterLevel;

master.addEventListener('click', function(){
if (currentLvl < 15) {
    alert("You must be level 15 or higher to fight WARDEN!");
    return;
  }
  if (hp <= 0) {
    alert("You have 0 HP! Heal yourself first!");
    losses++;
lose.textContent = losses;
    return; // Stop the fight here
  }

sound.src = "../Assets/WARDEN.mp3";
 sound.play();
 hp -= masterDamage;
  masterHealth -= dmg;
  masterhp.textContent = Math.ceil(masterHealth);
  health.textContent = Math.ceil(hp);

  if(masterHealth <= 0){
  mny += 25;
    mny = Math.ceil(mny * 1.15);
    wins++;
won.textContent = wins;
    exp.textContent = userExp;
    mastermaxhp = Math.ceil(mastermaxhp * 1.50);
    masterHealth = mastermaxhp;
    masterDamage = Math.ceil(masterDamage * 1.50);
    masterdmg.textContent = masterDamage;
    money.textContent = Math.ceil(mny);
    masterhp.textContent = masterHealth;
    masterLevel++;
    masterlvl.textContent = masterLevel;
    alert("You won!");
    
userExp += 100;
userExp = Math.ceil(userExp * 1.5);
while(userExp >= userMaxExp){ // in case EXP overflows, handle multiple level-ups
  userExp -= userMaxExp;
  currentLvl += 1;
  userMaxExp = Math.ceil(userMaxExp * 1.25);

  // LEVEL UP BONUS:
  dmg = Math.ceil(dmg * 1.25);
  maxhp = Math.ceil(maxhp * 1.25);
  hp = maxhp;

  damage.textContent = dmg;
  health.textContent = hp;
  maximhp.textContent = maxhp;
}

exp.textContent = userExp;
maxExp.textContent = userMaxExp;
lvlstatus.textContent = currentLvl;
  }
});


//MASTERMIND ENEMY
const mastermind = document.getElementById("mastermind");
const mastermindlvl = document.getElementById("mastermindlvl");
const mastermindhp = document.getElementById("mastermindhp");
const masterminddmg = document.getElementById("masterminddmg");
let mastermindLevel = 1;
let mastermindHealth = 2500;
let mastermindmaxhp = 2500;
let mastermindDamage = 35;

masterminddmg.textContent = mastermindDamage;
mastermindhp.textContent = mastermindHealth;
mastermindlvl.textContent = mastermindLevel;

mastermind.addEventListener('click', function(){
if (currentLvl < 20) {
    alert("You must be level 20 or higher to fight STEVE!");
    return;
  }
  if (hp <= 0) {
    alert("You have 0 HP! Heal yourself first!");
    losses++;
lose.textContent = losses;
    return; // Stop the fight here
  }

sound.src = "../Assets/STEVE.mp3";
 sound.play();
 hp -= mastermindDamage;
  mastermindHealth -= dmg;
  mastermindhp.textContent = Math.ceil(mastermindHealth);
  health.textContent = Math.ceil(hp);

  if(mastermindHealth <= 0){
  mny += 30;
    mny = Math.ceil(mny * 1.15);
    wins++;
won.textContent = wins;
    exp.textContent = userExp;
    mastermindmaxhp = Math.ceil(mastermaxhp * 1.5);
    mastermindHealth = mastermindmaxhp;
    mastermindDamage = Math.ceil(mastermindDamage * 1.5);
    masterminddmg.textContent = mastermindDamage;
    money.textContent = Math.ceil(mny);
    mastermindhp.textContent = mastermindHealth;
    mastermindLevel++;
    mastermindlvl.textContent = mastermindLevel;
    alert("You won!");
    
userExp += 250;
userExp = Math.ceil(userExp * 1.5);
while(userExp >= userMaxExp){ // in case EXP overflows, handle multiple level-ups
  userExp -= userMaxExp;
  currentLvl += 1;
  userMaxExp = Math.ceil(userMaxExp * 1.25);

  // LEVEL UP BONUS:
  dmg = Math.ceil(dmg * 1.25);
  maxhp = Math.ceil(maxhp * 1.25);
  hp = maxhp;

  damage.textContent = dmg;
  health.textContent = hp;
  maximhp.textContent = maxhp;
}

exp.textContent = userExp;
maxExp.textContent = userMaxExp;
lvlstatus.textContent = currentLvl;
  }
});


//THECAUSE ENEMY
const thecause = document.getElementById("thecause");
const thecauselvl = document.getElementById("thecauselvl");
const thecausehp = document.getElementById("thecausehp");
const thecausedmg = document.getElementById("thecausedmg");
let thecauseLevel = 1;
let thecauseHealth = 5000;
let thecausemaxhp = 5000;
let thecauseDamage = 50;

thecausedmg.textContent = thecauseDamage;
thecausehp.textContent = thecauseHealth;
thecauselvl.textContent = thecauseLevel;

thecause.addEventListener('click', function(){
if (currentLvl < 25) {
    alert("You must be level 25 or higher to fight HEROBRINE!");
    return;
  }
  if (hp <= 0) {
    alert("You have 0 HP! Heal yourself first!");
    losses++;
lose.textContent = losses;
    return; // Stop the fight here
  }

sound.src = "../Assets/HEROBRINE.mp3";
 sound.play();
  hp -= thecauseDamage;
  thecauseHealth -= dmg;
  thecausehp.textContent = Math.ceil(thecauseHealth);
  health.textContent = Math.ceil(hp);

  if(thecauseHealth <= 0){
  mny += 35;
    mny = Math.ceil(mny * 1.20);
    wins++;
won.textContent = wins;
    exp.textContent = userExp;
    thecausemaxhp = Math.ceil(thecausemaxhp * 1.5);
    thecauseHealth = thecausemaxhp;
    thecauseDamage = Math.ceil(thecauseDamage * 1.5);
    thecausedmg.textContent = thecauseDamage;
    money.textContent = Math.ceil(mny);
    thecausehp.textContent = thecauseHealth;
    thecauseLevel++;
    thecauselvl.textContent = thecauseLevel;
    alert("You won!");
    
userExp += 500;
userExp = Math.ceil(userExp * 1.5);
while(userExp >= userMaxExp){ // in case EXP overflows, handle multiple level-ups
  userExp -= userMaxExp;
  currentLvl += 1;
  userMaxExp = Math.ceil(userMaxExp * 1.25);

  // LEVEL UP BONUS:
  dmg = Math.ceil(dmg * 1.25);
  maxhp = Math.ceil(maxhp * 1.25);
  hp = maxhp;

  damage.textContent = dmg;
  health.textContent = hp;
  maximhp.textContent = maxhp;
}

exp.textContent = userExp;
maxExp.textContent = userMaxExp;
lvlstatus.textContent = currentLvl;
  }
});


//PRINCE BOSS
const prince = document.getElementById("prince");
const princelvl = document.getElementById("princelvl");
const princehp = document.getElementById("princehp");
const princedmg = document.getElementById("princedmg");
let princeLevel = 1;
let princeHealth = 1000000;
let princemaxhp = 1000000;
let princeDamage = 250000;

princedmg.textContent = princeDamage;
princehp.textContent = princeHealth;
princelvl.textContent = princeLevel;

prince.addEventListener('click', function(){
  if (currentLvl < 30) {
    alert("You must be level 30 or higher to fight COMMAND-BLOCK!");
    return;
  }
  if (hp <= 0) {
    alert("You have 0 HP! Heal yourself first!");
    losses++;
lose.textContent = losses;
    return; // Stop the fight here
  }

sound.src = "../Assets/COMMANDBLOCK.mp3";
 sound.play();
hp -= princeDamage;
  princeHealth -= dmg;
  princehp.textContent = Math.ceil(princeHealth);
  health.textContent = Math.ceil(hp);

  if(princeHealth <= 0){
    mny += 500;
    mny = Math.ceil(mny * 1.25);
    wins++;
won.textContent = wins;
    exp.textContent = userExp;
    princemaxhp = Math.ceil(princemaxhp * 1.5);
    princeHealth = princemaxhp;
    princeDamage = Math.ceil(princeDamage * 1.5);
    princedmg.textContent = princeDamage;
    money.textContent = Math.ceil(mny);
    princehp.textContent = princeHealth;
    princeLevel++;
    princelvl.textContent = princeLevel;
    alert("You won!");
    
userExp += 750;
userExp = Math.ceil(userExp * 1.75);
while(userExp >= userMaxExp){ // in case EXP overflows, handle multiple level-ups
  userExp -= userMaxExp;
  currentLvl += 1;
  userMaxExp = Math.ceil(userMaxExp * 1.25);

  // LEVEL UP BONUS:
  dmg = Math.ceil(dmg * 1.25);
  maxhp = Math.ceil(maxhp * 1.25);
  hp = maxhp;

  damage.textContent = dmg;
  health.textContent = hp;
  maximhp.textContent = maxhp;
}

exp.textContent = userExp;
maxExp.textContent = userMaxExp;
lvlstatus.textContent = currentLvl;
  }
});


//QUEEN BOSS
const queen = document.getElementById("queen");
const queenlvl = document.getElementById("queenlvl");
const queenhp = document.getElementById("queenhp");
const queendmg = document.getElementById("queendmg");
let queenLevel = 1;
let queenHealth = 5000000;
let queenmaxhp = 5000000;
let queenDamage = 2500000;

queendmg.textContent = queenDamage;
queenhp.textContent = queenHealth;
queenlvl.textContent = queenLevel;

queen.addEventListener('click', function(){
  if (currentLvl < 35) {
    alert("You must be level 35 or higher to fight GiGACHAD-STEVE!");
    return;
  }
  if (hp <= 0) {
    alert("You have 0 HP! Heal yourself first!");
    losses++;
lose.textContent = losses;
    return; // Stop the fight here
  }

sound.src = "../Assets/GIGACHADSTEVE.mp3";
 sound.play();
hp -= queenDamage;
  queenHealth -= dmg;
  queenhp.textContent = Math.ceil(queenHealth);
  health.textContent = Math.ceil(hp);

  if(queenHealth <= 0){
    mny += 1000;
    mny = Math.ceil(mny * 1.25);
    wins++;
won.textContent = wins;
    exp.textContent = userExp;
    queenmaxhp = Math.ceil(queenmaxhp * 1.5);
    queenHealth = queenmaxhp;
    queenDamage = Math.ceil(queenDamage * 1.5);
    queendmg.textContent = queenDamage;
    money.textContent = Math.ceil(mny);
    queenhp.textContent = queenHealth;
    queenLevel++;
    queenlvl.textContent = queenLevel;
    alert("You won!");
    
userExp += 1000;
userExp = Math.ceil(userExp * 1.75);
while(userExp >= userMaxExp){ // in case EXP overflows, handle multiple level-ups
  userExp -= userMaxExp;
  currentLvl += 1;
  userMaxExp = Math.ceil(userMaxExp * 1.25);

  // LEVEL UP BONUS:
  dmg = Math.ceil(dmg * 1.25);
  maxhp = Math.ceil(maxhp * 1.25);
  hp = maxhp;

  damage.textContent = dmg;
  health.textContent = hp;
  maximhp.textContent = maxhp;
}

exp.textContent = userExp;
maxExp.textContent = userMaxExp;
lvlstatus.textContent = currentLvl;
  }
});


//KING BOSS
const king = document.getElementById("king");
const kinglvl = document.getElementById("kinglvl");
const kinghp = document.getElementById("kinghp");
const kingdmg = document.getElementById("kingdmg");
let kingLevel = 1;
let kingHealth = 10000000;
let kingmaxhp = 10000000;
let kingDamage = 5000000;

kingdmg.textContent = kingDamage;
kinghp.textContent = kingHealth;
kinglvl.textContent = kingLevel;

king.addEventListener('click', function(){
  if (currentLvl < 40) {
    alert("You must be level 40 or higher to fight HEAVENLY-STEVE!");
    return;
  }

  if (hp <= 0) {
    alert("You have 0 HP! Heal yourself first!");
    losses++;
lose.textContent = losses;
    return;
  }

sound.src = "../Assets/HEAVENLYSTEVE.mp3";
 sound.play();
hp -= kingDamage;
  kingHealth -= dmg;
  kinghp.textContent = Math.ceil(kingHealth);
  health.textContent = Math.ceil(hp);

  if(kingHealth <= 0){
    mny += 2500;
    mny = Math.ceil(mny * 1.25);
    wins++;
won.textContent = wins;
    exp.textContent = userExp;
    kingmaxhp = Math.ceil(kingmaxhp * 1.75);
    kingHealth = kingmaxhp;
    kingDamage = Math.ceil(kingDamage * 1.75);
    kingdmg.textContent = kingDamage;
    money.textContent = Math.ceil(mny);
    kinghp.textContent = kingHealth;
    kingLevel++;
    kinglvl.textContent = kingLevel;
    alert("You won!");
    
    userExp += 2500;
userExp = Math.ceil(userExp * 1.75);
    while(userExp >= userMaxExp){
      userExp -= userMaxExp;
      currentLvl += 1;
      userMaxExp = Math.ceil(userMaxExp * 1.25);

      dmg = Math.ceil(dmg * 1.25);
      maxhp = Math.ceil(maxhp * 1.25);
      hp = maxhp;

      damage.textContent = dmg;
      health.textContent = hp;
      maximhp.textContent = maxhp;
    }

    exp.textContent = userExp;
    maxExp.textContent = userMaxExp;
    lvlstatus.textContent = currentLvl;
  }
});


//KINGDOM BOSS
const memeking = document.getElementById("memeking");
const memekinglvl = document.getElementById("memekinglvl");
const memekinghp = document.getElementById("memekinghp");
const memekingdmg = document.getElementById("memekingdmg");
let memekingLevel = 1;
let memekingHealth = 100000000;
let memekingmaxhp = 100000000;
let memekingDamage = 25000000;

memekingdmg.textContent = memekingDamage;
memekinghp.textContent = memekingHealth;
memekinglvl.textContent = memekingLevel;

memeking.addEventListener('click', function(){
  if (currentLvl < 45) {
    alert("You must be level 45 or higher to fight MINECRAFT!");
    return;
  }

  if (hp <= 0) {
    alert("You have 0 HP! Heal yourself first!");
    losses++;
lose.textContent = losses;
    return;
  }

sound.src = "../Assets/MINECRAFT.mp3";
 sound.play();
hp -= memekingDamage;
  memekingHealth -= dmg;
  memekinghp.textContent = Math.ceil(memekingHealth);
  health.textContent = Math.ceil(hp);

  if(memekingHealth <= 0){
    mny += 5000;
    mny = Math.ceil(mny *1.25);
    wins++;
won.textContent = wins;
    exp.textContent = userExp;
    memekingmaxhp = Math.ceil(memekingmaxhp * 1.75);
    memekingHealth = memekingmaxhp;
    memekingDamage = Math.ceil(memekingDamage * 1.75);
    memekingdmg.textContent = memekingDamage;
    money.textContent = Math.ceil(mny);
    memekinghp.textContent = memekingHealth;
    memekingLevel++;
    memekinglvl.textContent = memekingLevel;
    alert("You won!");
    
    userExp += 5000;
userExp = Math.ceil(userExp * 2);
    while(userExp >= userMaxExp){
      userExp -= userMaxExp;
      currentLvl += 1;
      userMaxExp = Math.ceil(userMaxExp * 1.25);

      dmg = Math.ceil(dmg * 1.25);
      maxhp = Math.ceil(maxhp * 1.25);
      hp = maxhp;

      damage.textContent = dmg;
      health.textContent = hp;
      maximhp.textContent = maxhp;
    }

    exp.textContent = userExp;
    maxExp.textContent = userMaxExp;
    lvlstatus.textContent = currentLvl;
  }
});


//GIGACHAD BOSS
const gigachad = document.getElementById("gigachad");
const gigachadlvl = document.getElementById("gigachadlvl");
const gigachadhp = document.getElementById("gigachadhp");
const gigachaddmg = document.getElementById("gigachaddmg");
let gigachadLevel = 1;
let gigachadHealth = 1000000000;
let gigachadmaxhp = 1000000000;
let gigachadDamage = 500000000;

gigachaddmg.textContent = gigachadDamage;
gigachadhp.textContent = gigachadHealth;
gigachadlvl.textContent = gigachadLevel;

gigachad.addEventListener('click', function(){
  if (currentLvl < 50) {
    alert("You must be level 50 or higher to fight MOJANG!");
    return;
  }

  if (hp <= 0) {
    alert("You have 0 HP! Heal yourself first!");
    losses++;
lose.textContent = losses;
    return;
  }

sound.src = "../Assets/MOJANG.mp3";
 sound.play();
hp -= gigachadDamage;
  gigachadHealth -= dmg;
  gigachadhp.textContent = Math.ceil(gigachadHealth);
  health.textContent = Math.ceil(hp);

  if(gigachadHealth <= 0){
    mny += 7500;
    mny = Math.ceil(mny * 1.5);
    wins++;
won.textContent = wins;
    exp.textContent = userExp;
    gigachadmaxhp = Math.ceil(gigachadmaxhp * 1.75);
    gigachadHealth = gigachadmaxhp;
    gigachadDamage = Math.ceil(gigachadDamage * 1.75);
    gigachaddmg.textContent = gigachadDamage;
    money.textContent = Math.ceil(mny);
    gigachadhp.textContent = gigachadHealth;
    gigachadLevel++;
    gigachadlvl.textContent = gigachadLevel;
    alert("You won!");
    
    userExp += 5000;
userExp = Math.ceil(userExp * 2);
    while(userExp >= userMaxExp){
      userExp -= userMaxExp;
      currentLvl += 1;
      userMaxExp = Math.ceil(userMaxExp * 1.25);

      dmg = Math.ceil(dmg * 1.25);
      maxhp = Math.ceil(maxhp * 1.25);
      hp = maxhp;

      damage.textContent = dmg;
      health.textContent = hp;
      maximhp.textContent = maxhp;
    }

    exp.textContent = userExp;
    maxExp.textContent = userMaxExp;
    lvlstatus.textContent = currentLvl;
  }
});


//BROCODE BOSS
const brocode = document.getElementById("brocode");
const brocodelvl = document.getElementById("brocodelvl");
const brocodehp = document.getElementById("brocodehp");
const brocodedmg = document.getElementById("brocodedmg");
let brocodeLevel = 1;
let brocodeHealth = 1000000000000;
let brocodemaxhp = 1000000000000;
let brocodeDamage = 1000000000;

brocodedmg.textContent = brocodeDamage;
brocodehp.textContent = brocodeHealth;
brocodelvl.textContent = brocodeLevel;

brocode.addEventListener('click', function(){
  if (currentLvl < 60) {
    alert("You must be level 60 or higher to fight BROCODE!");
    return;
  }

  if (hp <= 0) {
    alert("You have 0 HP! Heal yourself first!");
    losses++;
lose.textContent = losses;
    return;
  }

sound.src = "../Assets/BROCODE.mp3";
 sound.play();
hp -= brocodeDamage;
  brocodeHealth -= dmg;
  brocodehp.textContent = Math.ceil(brocodeHealth);
  health.textContent = Math.ceil(hp);

  if(brocodeHealth <= 0){
    mny += 25000;
    mny = Math.ceil(mny * 1.5);
    wins++;
won.textContent = wins;
    exp.textContent = userExp;
    brocodemaxhp = Math.ceil(brocodemaxhp * 2);
    brocodeHealth = brocodemaxhp;
    brocodeDamage = Math.ceil(brocodeDamage * 2);
    brocodedmg.textContent = brocodeDamage;
    money.textContent = Math.ceil(mny);
    brocodehp.textContent = brocodeHealth;
    brocodeLevel++;
    brocodelvl.textContent = brocodeLevel;
    alert("You won!");
    
    userExp += 10000;
userExp = Math.ceil(userExp * 2);
    while(userExp >= userMaxExp){
      userExp -= userMaxExp;
      currentLvl += 1;
      userMaxExp = Math.ceil(userMaxExp * 1.25);

      dmg = Math.ceil(dmg * 1.25);
      maxhp = Math.ceil(maxhp * 1.25);
      hp = maxhp;

      damage.textContent = dmg;
      health.textContent = hp;
      maximhp.textContent = maxhp;
    }

    exp.textContent = userExp;
    maxExp.textContent = userMaxExp;
    lvlstatus.textContent = currentLvl;
  }
});


//THE CREATOR BOSS
const creator = document.getElementById("creator");
const creatorlvl = document.getElementById("creatorlvl");
const creatorhp = document.getElementById("creatorhp");
const creatordmg = document.getElementById("creatordmg");
let creatorLevel = 1;
let creatorHealth =99999999999999;
let creatormaxhp = 99999999999999;
let creatorDamage = 9999999999;

creatordmg.textContent = creatorDamage;
creatorhp.textContent = creatorHealth;
creatorlvl.textContent = creatorLevel;

creator.addEventListener('click', function(){
  if (currentLvl < 70) {
    alert("You must be level 70 or higher to fight The CREATOR!");
    return;
  }

  if (hp <= 0) {
    alert("You have 0 HP! Heal yourself first!");
    losses++;
lose.textContent = losses;
    return;
  }

let random = Math.floor(Math.random() * owner.length);
let sounds = owner[random];
sound.src = sounds;
 sound.play();
hp -= creatorDamage;
  creatorHealth -= dmg;
  creatorhp.textContent = Math.ceil(creatorHealth);
  health.textContent = Math.ceil(hp);

  if(creatorHealth <= 0){
    mny += 9999999;
    mny = Math.ceil(mny * 3);
    wins++;
won.textContent = wins;
    exp.textContent = userExp;
    creatormaxhp = Math.ceil(creatormaxhp * 1.5);
    creatorHealth = creatormaxhp;
    creatorDamage = Math.ceil(creatorDamage * 1.5);
    creatordmg.textContent = creatorDamage;
    money.textContent = Math.ceil(mny);
    creatorhp.textContent = creatorHealth;
    creatorLevel++;
    creatorlvl.textContent = creatorLevel;
    alert("You won!");
    
    userExp += 9999999;
userExp = Math.ceil(userExp * 3);
    while(userExp >= userMaxExp){
      userExp -= userMaxExp;
      currentLvl += 1;
      userMaxExp = Math.ceil(userMaxExp * 1.25);

      dmg = Math.ceil(dmg * 1.25);
      maxhp = Math.ceil(maxhp * 1.25);
      hp = maxhp;

      damage.textContent = dmg;
      health.textContent = hp;
      maximhp.textContent = maxhp;
    }

    exp.textContent = userExp;
    maxExp.textContent = userMaxExp;
    lvlstatus.textContent = currentLvl;
  }
});


//HEAL
const heal = document.getElementById("heal");
heal.addEventListener('click', function(){

sound.src = "../Assets/HEAL.mp3";
sound.play();
 hp = maxhp;
 health.textContent = hp;
 money.textContent = mny;
});


// SAVE FUNCTION
function saveGame() {
  const gameData = {
    // Player
    mny,
    dmg,
    moneypersec,
    priceofDMG,
    incomePrice,
    hp,
    maxhp,
    priceofHP,
    userExp,
    userMaxExp,
    currentLvl,
    wins,
    losses,

    // Enemies
    normalLevel,
    normalmaxhp,
    normalDamage,
    
    eliteLevel,
    elitemaxhp,
    eliteDamage,
    
    soldierLevel,
    soldiermaxhp,
    soldierDamage,

    veteranLevel,
    veteranmaxhp,
    veteranDamage,

    masterLevel,
    mastermaxhp,
    masterDamage,

    mastermindLevel,
    mastermindmaxhp,
    mastermindDamage,

    thecauseLevel,
    thecausemaxhp,
    thecauseDamage,
    
    // Boss variables
princeLevel,
princeHealth,
princemaxhp,
princeDamage,

queenLevel,
queenHealth,
queenmaxhp,
queenDamage,

kingLevel,
kingHealth,
kingmaxhp,
kingDamage,

memekingLevel,
memekingHealth,
memekingmaxhp,
memekingDamage,

gigachadLevel,
gigachadHealth,
gigachadmaxhp,
gigachadDamage,

brocodeLevel,
brocodeHealth,
brocodemaxhp,
brocodeDamage,

creatorLevel,
creatorHealth,
creatormaxhp,
creatorDamage
  };

  localStorage.setItem("idleGameSave", JSON.stringify(gameData));
}

// LOAD FUNCTION
function loadGame() {
  const savedData = JSON.parse(localStorage.getItem("idleGameSave"));
  if (savedData) {
    // Player
    mny = savedData.mny;
    dmg = savedData.dmg;
    moneypersec = savedData.moneypersec;
    priceofDMG = savedData.priceofDMG;
    incomePrice = savedData.incomePrice;
    hp = savedData.hp;
    maxhp = savedData.maxhp;
    priceofHP = savedData.priceofHP;
    userExp = savedData.userExp;
    userMaxExp = savedData.userMaxExp;
    currentLvl = savedData.currentLvl;
    wins = savedData.wins;
    losses = savedData.losses;

    // Enemies
    normalLevel = savedData.normalLevel;
    normalmaxhp = savedData.normalmaxhp;
    normalDamage = savedData.normalDamage;

    eliteLevel = savedData.eliteLevel;
    elitemaxhp = savedData.elitemaxhp;
    eliteDamage = savedData.eliteDamage;

    soldierLevel = savedData.soldierLevel;
    soldiermaxhp = savedData.soldiermaxhp;
    soldierDamage = savedData.soldierDamage;

    veteranLevel = savedData.veteranLevel;
    veteranmaxhp = savedData.veteranmaxhp;
    veteranDamage = savedData.veteranDamage;

    masterLevel = savedData.masterLevel;
    mastermaxhp = savedData.mastermaxhp;
    masterDamage = savedData.masterDamage;

    mastermindLevel = savedData.mastermindLevel;
    mastermindmaxhp = savedData.mastermindmaxhp;
    mastermindDamage = savedData.mastermindDamage;

    thecauseLevel = savedData.thecauseLevel;
    thecausemaxhp = savedData.thecausemaxhp;
    thecauseDamage = savedData.thecauseDamage;
    
    // Bosses
princeLevel = savedData.princeLevel;
princeHealth = savedData.princeHealth;
princemaxhp = savedData.princemaxhp;
princeDamage = savedData.princeDamage;

queenLevel = savedData.queenLevel;
queenHealth = savedData.queenHealth;
queenmaxhp = savedData.queenmaxhp;
queenDamage = savedData.queenDamage;

kingLevel = savedData.kingLevel;
kingHealth = savedData.kingHealth;
kingmaxhp = savedData.kingmaxhp;
kingDamage = savedData.kingDamage;

memekingLevel = savedData.memekingLevel;
memekingHealth = savedData.memekingHealth;
memekingmaxhp = savedData.memekingmaxhp;
memekingDamage = savedData.memekingDamage;

gigachadLevel = savedData.gigachadLevel;
gigachadHealth = savedData.gigachadHealth;
gigachadmaxhp = savedData.gigachadmaxhp;
gigachadDamage = savedData.gigachadDamage;

brocodeLevel = savedData.brocodeLevel;
brocodeHealth = savedData.brocodeHealth;
brocodemaxhp = savedData.brocodemaxhp;
brocodeDamage = savedData.brocodeDamage;

creatorLevel = savedData.creatorLevel;
creatorHealth = savedData.creatorHealth;
creatormaxhp = savedData.creatormaxhp;
creatorDamage = savedData.creatorDamage;

    // UI Updates
    money.textContent = Math.ceil(mny);
    priceDMG.textContent = priceofDMG;
    priceIncome.textContent = incomePrice;
    moneypersecond.textContent = moneypersec;
    damage.textContent = dmg;
    health.textContent = Math.ceil(hp);
    priceHP.textContent = priceofHP;
    exp.textContent = userExp;
    maxExp.textContent = userMaxExp;
    lvlstatus.textContent = currentLvl;
    won.textContent = wins;
    lose.textContent = losses;

    normallvl.textContent = normalLevel;
    normalhp.textContent = normalmaxhp;

    elitelvl.textContent = eliteLevel;
    elitehp.textContent = elitemaxhp;
    elitedmg.textContent = eliteDamage;

    soldierlvl.textContent = soldierLevel;
    soldierhp.textContent = soldiermaxhp;
    soldierdmg.textContent = soldierDamage;

    veteranlvl.textContent = veteranLevel;
    veteranhp.textContent = veteranmaxhp;
    veterandmg.textContent = veteranDamage;

    masterlvl.textContent = masterLevel;
    masterhp.textContent = mastermaxhp;
    masterdmg.textContent = masterDamage;

    mastermindlvl.textContent = mastermindLevel;
    mastermindhp.textContent = mastermindmaxhp;
    masterminddmg.textContent = mastermindDamage;

    thecauselvl.textContent = thecauseLevel;
    thecausehp.textContent = thecausemaxhp;
    thecausedmg.textContent = thecauseDamage;
    
    // Update boss UI
function loadGame() {
  const savedData = JSON.parse(localStorage.getItem("idleGameSave"));
  if (savedData) {
    // Restore values
    mny = savedData.mny;
    dmg = savedData.dmg;
    // ... your other user-related values

    // Restore boss data
    princeLevel = savedData.princeLevel;
    princeHealth = savedData.princeHealth;
    princemaxhp = savedData.princemaxhp;
    princeDamage = savedData.princeDamage;

    queenLevel = savedData.queenLevel;
    queenHealth = savedData.queenHealth;
    queenmaxhp = savedData.queenmaxhp;
    queenDamage = savedData.queenDamage;

    // ... repeat for king, memeking, etc.

    // Update DOM/UI
    money.textContent = Math.ceil(mny);
    damage.textContent = dmg;
    moneypersecond.textContent = moneypersec;
    // ... your other stat displays

    // 🔽 Place this part BELOW after restoring boss variables
    princelvl.textContent = princeLevel;
    princehp.textContent = Math.ceil(princeHealth);
    princedmg.textContent = princeDamage;

    queenlvl.textContent = queenLevel;
    queenhp.textContent = Math.ceil(queenHealth);
    queendmg.textContent = queenDamage;

    kinglvl.textContent = kingLevel;
    kinghp.textContent = Math.ceil(kingHealth);
    kingdmg.textContent = kingDamage;

    memekinglvl.textContent = memekingLevel;
    memekinghp.textContent = Math.ceil(memekingHealth);
    memekingdmg.textContent = memekingDamage;

    gigachadlvl.textContent = gigachadLevel;
    gigachadhp.textContent = Math.ceil(gigachadHealth);
    gigachaddmg.textContent = gigachadDamage;

    brocodelvl.textContent = brocodeLevel;
    brocodehp.textContent = Math.ceil(brocodeHealth);
    brocodedmg.textContent = brocodeDamage;

    creatorlvl.textContent = creatorLevel;
    creatorhp.textContent = Math.ceil(creatorHealth);
    creatordmg.textContent = creatorDamage;
  }
}
  }
}

setInterval(saveGame, 500);
window.addEventListener("load", loadGame);
