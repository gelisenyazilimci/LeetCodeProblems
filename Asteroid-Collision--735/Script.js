 /**
  * @param {number[]} asteroids
  * @return {number[]}
  */
 let asteroidCollision = function(asteroids) {
     const stack = [];
     for (let i = 0; i < asteroids.length; i++) {
         if (asteroids[i] > 0) stack.push(asteroids[i]);else {
             while (stack.length && stack[stack.length - 1] > 0 && stack[stack.length - 1] < -asteroids[i]) stack.pop();
             if (stack.length && stack[stack.length - 1] === -asteroids[i]) stack.pop();
             else if (!stack.length || stack[stack.length - 1] < 0) stack.push(asteroids[i]);
         }
     }
     return stack;
 }

 console.log(asteroidCollision([-2,-1,1,2]))