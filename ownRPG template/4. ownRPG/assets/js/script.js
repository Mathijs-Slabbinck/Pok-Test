let background = new Audio('assets/media/backgroundCalm.mp3');
let coinSound = new Audio('assets/media/money.mp3');
let magicSound = new Audio('assets/media/magic.mp3');
let ownedFish = 0;
let ownedStone = 0;
let ownedWood = 0;
let ownedCoins = 0;
let merchantHeight = 690;
let mageHeight = 306;
let lootGainUpdate = false;
let toggledMusic = false;

$( document ).ready(function() {
    toggleMusic();
    background.volume = 0.2;
    $("#approveTrade1").on("click", tradeOneApproved);
    $("#approveTrade2").on("click", tradeTwoApproved);
    $("#approveTrade3").on("click", tradeThreeApproved);
    $("#closeMerchant").on("click", closeMerchant);
    $("#approveSkill1").on("click", approveSkillOne);
    $("#approveSkill2").on("click", approveSkillTwo);
    $("#closeMage").on("click", closeMage);
    $(".toggMusic").on("click", toggleMusic);
});

function toggleMusic(){
    if(toggledMusic === true){
        background.pause();
        $("#ofOrOnMusic").html("off");
        toggledMusic = false;
    } else{
        background.currentTime = 0;
        background.play();
        $("#ofOrOnMusic").html("on");
        toggledMusic = true;
    }
}

function tradeOneApproved(){
        if(ownedWood >= 30){
            ownedWood -= 30;
            $("#approveTrade1").remove();
            updateMerchantShop();
        } else{
            alert("You don't have enough wood!");
        }
}

function tradeTwoApproved(){
    if(ownedStone >= 30){
        ownedStone -= 30;
        $("#approveTrade2").remove();
        updateMerchantShop();
    } else{
        alert("You don't have enough stone!");
    }
}

function tradeThreeApproved(){
    if(ownedFish >= 30){
        ownedFish -= 30;
        $("#approveTrade3").remove();
        updateMerchantShop();
    } else{
        alert("You don't have enough fish!");
    }
}

function closeMerchant(){
    $("#merchant").hide();
    $("#game").show();
}

function updateMerchantShop(){
    ownedCoins += 10;
    updateDisp();
    coinSound.play();
    merchantHeight -= 103;
    if(merchantHeight === 381){
        $("#merchantTrades").hide();
        $("#soldOut").show();
        merchantHeight = 205;
    }
    $("#merchant").css("height", merchantHeight + "px");
}

function approveSkillOne(){
    if(ownedCoins >= 5){
        ownedCoins -= 5;
        $("#approveSkill1").remove();
        updateMageShop();
        Hero.SPEED = 250;
        $("#checkedOrNot1").html("&#10004;");
    } else{
        alert("You don't have enough coins!");
    }
}

function approveSkillTwo(){
    if(ownedCoins >= 15){
        ownedCoins -= 15;
        $("#approveSkill2").remove();
        updateMageShop();
        lootGainUpdate = true;
        $("#checkedOrNot2").html("&#10004;");
    } else{
        alert("You don't have enough coins!");
    }
}

function closeMage(){
    $("#mage").hide();
    $("#game").show();
}

function updateMageShop(){
    updateDisp();
    magicSound.play();
    mageHeight -= 103;
    if(mageHeight === 100){
        $("#mageTrades").hide();
        $("#soldOut2").show();
        mageHeight = 205;
    }
    $("#mage").css("height", mageHeight + "px");
}

function updateDisp(){
    $("#fishDisp").html(ownedFish);
    $("#rockDisp").html(ownedStone);
    $("#woodDisp").html(ownedWood);
    $("#coinDisp").html(ownedCoins);
}