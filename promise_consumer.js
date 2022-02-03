export default class PromiseConsumer {
    consume(promises) {
        Promise.all(promises)
        .then(results => {
          console.log(results);
        })
        .catch(e => {
          console.error(e)
        })
    }
}