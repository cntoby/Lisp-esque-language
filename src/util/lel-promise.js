const defaultErr = (err) => console.error(err.message);

module.exports = (promiseFunc, catchAllFunc = defaultErr) => {
  const p = new Promise(promiseFunc).catch(catchAllFunc);
  return {
    then: (func) => p.then(func).catch(catchAllFunc),
    finally: (func) => p.finally(func).catch(catchAllFunc)
  };
};