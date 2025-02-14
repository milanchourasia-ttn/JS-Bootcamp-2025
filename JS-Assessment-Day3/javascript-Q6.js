// Q6. Create a counter using closures.

function counter() {
    let count = 0;
  
    return {
      increment: function () {
        count++;
        return count;
      },
      decrement: function () {
        count--;
        return count;
      }
    };
  }
  
  const counterVal = counter();
  console.log(counterVal.increment()); // 1
  console.log(counterVal.increment()); // 2
  console.log(counterVal.decrement()); // 1


//count with play / pause / stop
const Counter = (function () {
    let count = 0;
    let interval = null;

    function updateCounter() {
        document.getElementById("counter").innerText = count;
    }

    function start() {
        if (!interval) {
            interval = setInterval(() => {
                count++;
                updateCounter();
            }, 1000);
        }
    }

    function pause() {
        clearInterval(interval);
        interval = null;
    }

    function stop() {
        clearInterval(interval);
        interval = null;
        count = 0;
        updateCounter();
    }

    return {
        start,
        pause,
        stop
    };
})();

document.getElementById("play").addEventListener("click", Counter.start);
document.getElementById("pause").addEventListener("click", Counter.pause);
document.getElementById("stop").addEventListener("click", Counter.stop);  