<a href="Scenes/game.html" id="homepage">Start Game</a>

const homepage = document.getElementById("homepage");

homepage.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default <a> link from navigating

  function saveGame() {
    const gameData = {
      // Example variables (make sure these exist and are defined!)
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

  // Save game first
  saveGame();

  // Then navigate
  window.location.href = "Scenes/game.html";
});