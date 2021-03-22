var wrapper = document.querySelector(".wrapper")
function startBattle(){
  wrapper.innerHTML="";
  document.body.querySelector(".reset").innerHTML="";
var list = [
  {
    name:"Bob (Fire)",
    damage:2,
    health:10,
    warrior:true,
    type:"fire"
  }, 
  {
    name:"Mavis (Ice)",
    damage:2,
    health:10,
    warrior:true,
    type:"ice"
  },
  {
    name:"Morty (Poison)",
    damage:4,
    health:10,
    warrior:true,
    type:"poison"
  }
  
  ];
  var dragonHealth = 10;
  var dragonEle = document.createElement("div");
  dragonEle.innerHTML = dragonHealth;

  function createWarrior(wr) {
    var warrior = document.createElement("button");
    warrior.innerHTML = wr.name;
    warrior.addEventListener("click", function() {
      attackDragon(wr.damage, wr.type, wr, warrior);
    });
    wrapper.appendChild(warrior);
  }

  function attackDragon(dmg, type, obj, ele) {
    console.log(obj);
    if (type === "fire") {
      dragonHealth = dragonHealth - (dmg + 3);
    } else if (type === "ice") {
      dragonHealth = dragonHealth - (dmg + 1);
    } else if (type === "poison") {
      dragonHealth = dragonHealth - (dmg + 4);
    } else {
      dragonHealth = dragonHealth - dmg;
    }
    
    console.log(obj.health=obj.health-2);
    ele.innerHTML=obj.health-2

    dragonEle.innerHTML = dragonHealth;

    if (dragonHealth <= 0) {
      document.body.querySelector(".reset").innerHTML="You win! Play again?";
      document.body.querySelector(".reset").addEventListener("click", function(){
        startBattle();
      })
    } else if (list[0].hp <= 0 && list[1].hp <= 0 && list[2].hp <= 0) {
      document.body.querySelector(".reset").innerHTML="You lose! Play again?";
      document.body.querySelector(".reset").addEventListener("click", function(){
        startBattle();
      })
    }
  }

  for (var i = 0; i < list.length; i++) {
    createWarrior(list[i]);
  }

  wrapper.appendChild(dragonEle);
}

startBattle();