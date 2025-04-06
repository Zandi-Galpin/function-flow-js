// TODO: Write a function 'move' that simulates a rocket moving back and forth in the console
// TODO: Use 'console.clear()', 'console.log()', and basic logic with position

function move() {
  for(let j = 0;j<200;j++){
    for(let i = 0;i < 100; i++){
      console.log(" ".repeat(i)+"===[||]>")
      console.clear()
    }
    for(let a = 0; a<100; a++){
      console.log(" ".repeat(100-a)+"<[||]===")
      console.clear()
    }
  }
}

move()
module.exports = { move };
