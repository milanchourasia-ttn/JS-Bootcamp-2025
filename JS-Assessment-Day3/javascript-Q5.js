// Q5. Create a function which returns number of invocations and number of instances of a function.

function createTrackedFunction(fn) {
    let invocationCount = 0;
    let instanceCount = 0;
  
    return function trackedInstance(...args) {
      if (!trackedInstance.hasOwnProperty("instanceId")) {
        instanceCount++;
        trackedInstance.instanceId = instanceCount;
      }
      invocationCount++;
      console.log(`Invocations: ${invocationCount}, Instances: ${instanceCount}`);
      return fn(...args);
    };
  }
  
  const trackedFunction1 = createTrackedFunction((x) => x * 2);
  console.log(trackedFunction1(5));
  const trackedFunction2 = createTrackedFunction((x) => x + 10);
  console.log(trackedFunction2(10));
  console.log(trackedFunction1(7)); 