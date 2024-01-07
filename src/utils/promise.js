class MyPromise {
  static PENDING = "等待";
  static FULFILLED = "成功";
  static REJECTED = "失败";
  constructor(func) {
    this.status = MyPromise.PENDING; // 定义状态
    this.result = null; // 定义返回结果
    this.resloveCallbacks = []; // 存放reslove回调函数的数组
    this.rejectCallbacks = []; // 存放reject回调函数的数组
    // 当Promise中抛出错误时，会把promise的状态改为失败并且将错误设置为结果
    try {
      func(this.reslove.bind(this), this.reject.bind(this)); // 执行传入的函数
    } catch (err) {
      this.reject(err);
    }
  }
  reslove(result) {
    // resolve是在事件循环末尾执行的，所以这里用setTimeout包裹一下
    setTimeout(() => {
      this.status = MyPromise.FULFILLED; // 更改状态
      this.result = result;
      // 遍历执行PENDING状态时保存的reslove回调函数
      this.resloveCallbacks.forEach((callback) => {
        callback(result);
      });
    });
  }
  reject(result) {
    // reject同样用setTimeout包裹一下
    setTimeout(() => {
      this.status = MyPromise.FULFILLED; // 更改状态
      this.result = result;
      // 遍历执行PENDING状态时保存的reject回调函数
      this.rejectCallbacks.forEach((callback) => {
        callback(result);
      });
    });
  }
  then(onFULFILLED, onREJECTED) {
    let newPromise = new MyPromise((resolve, reject) => {
      // then中两个参数可以传入undefined，做下处理
      onFULFILLED =
        typeof onFULFILLED === "function"
          ? onFULFILLED
          : (value) => {
              value;
            };
      onREJECTED =
        typeof onREJECTED === "function"
          ? onREJECTED
          : (reason) => {
              throw reason;
            };
      if (this.status === MyPromise.PENDING) {
        // PENDING状态时
        this.resloveCallbacks.push(() => {
          try {
            let nextResult = onFULFILLED(this.result);
            resolvePromise(newPromise, nextResult, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
        this.rejectCallbacks.push(() => {
          try {
            let nextResult = onREJECTED(this.result);
            resolvePromise(newPromise, nextResult, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      }
      if (this.status === MyPromise.FULFILLED) {
        setTimeout(() => {
          try {
            // 执行成功后的回调
            let nextResult = onFULFILLED(this.result);
            resolvePromise(newPromise, nextResult, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      }
      if (this.status === MyPromise.REJECTED) {
        setTimeout(() => {
          try {
            // 执行失败后的回调
            let nextResult = onREJECTED(this.result);
            resolvePromise(newPromise, nextResult, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      }
    });
    return newPromise;
  }
  catch(onREJECTED) {
    return this.then(null, onREJECTED);
  }
  finally() {
    return this.then(undefined, undefined);
  }
  static resolve(value) {
    return new MyPromise((resolve) => {
      resolve(value);
    });
  }
  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }
  static all(promises) {
    return new MyPromise((resolve, reject) => {
      // 创建一个空数组results，用于存储每个Promise的 resolve 结果
      const results = [];
      let count = 0;

      const processResult = (index, result) => {
        // 结果存入results数组（具有Iterator接口的对象）中，并更新count变量
        results[index] = result;
        count++;

        if (count === promises.length) {
          // 如果count等于Promise 数组（具有Iterator接口的对象）的长度，则说明所有Promise都resolve了，此时调用 resolve 方法
          resolve(results);
        }
      };
      // 遍历传入的Promise数组（具有 Iterator 接口的对象），对每个Promise调用then方法
      for (const [index, promise] of [...promises]) {
        Promise.resolve(promise).then((result) => {
          processResult(index, result);
        }, reject);
      }
    });
  }
}

function resolvePromise(newPromise, x, resolve, reject) {
  if (x === newPromise) {
    // 因为x是回调的结果值，如果x指向newPromise即自己，那么会重新解析自己，导致循环调用
    throw new TypeError("禁止循环调用");
  }
  // 如果x是一个Promise，我们必须等它完成（失败或成功）后得到一个普通值时，才能继续执行。
  // 那我们把要执行的任务放在x.then（）的成功回调和失败回调里面即可
  // 这就表示x完成后就会调用我们的代码。

  // 但是对于成功的情况,我们还需要再考虑下,x.then成功回调函数的参数,我们称为y
  // 那y也可能是一个thenable对象或者promise
  // 所以如果成功时，执行resolvePromise(promise2, y, resolve, reject)
  // 并且传入resolve, reject，当解析到普通值时就resolve出去，反之继续解析
  // 这样子用于保证最后resolve的结果一定是一个非promise类型的参数

  if (x instanceof MyPromise) {
    x.then(
      (y) => {
        resolvePromise(newPromise, y, resolve, reject);
      },
      (r) => reject(r)
    );
  }
  // (x instanceof myPromise) 处理了promise的情况，但是很多时候交互的promise可能不是原生的
  // 就像我们现在写的一个myPromise一样，这种有then方法的对象或函数我们称为thenable。
  // 因此我们需要处理thenable。
  else if ((typeof x === "object" || typeof x === "function") && x !== null) {
    // 暂存x这个对象或函数的then，x也可能没有then，那then就会得到一个undefined
    try {
      var then = x.then;
    } catch (e) {
      // 如果读取then的过程中出现异常则reject异常出去
      return reject(e);
    }
    // 判断then是否函数且存在，如果函数且存在那这个就是合理的thenable，我们要尝试去解析
    if (typeof then === "function") {
      // 状态只能更新一次使用一个called防止反复调用
      // 因为成功和失败的回调只能执行其中之一
      let called = false;
      try {
        then.call(
          x,
          (y) => {
            // called就是用于防止成功和失败被同时执行，因为这个是thenable，不是promise
            // 需要做限制如果newPromise已经成功或失败了，则不会再处理了
            if (called) return;
            called = true;
            resolvePromise(newPromise, y, resolve, reject);
          },
          (r) => {
            // called就是用于防止成功和失败被同时执行，因为这个是thenable，不是promise
            // 需要做限制如果newPromise已经成功或失败了，则不会再处理了
            if (called) return;
            called = true;
            reject(r);
          }
        );
        // 上面那一步等价于，即这里把thenable当作类似于promise的对象去执行then操作
        // x.then(
        //   (y) => {
        //     if (called) return;
        //     called = true;
        //     resolvePromise(newPromise, y, resolve, reject);
        //   },
        //   (r) => {
        //     if (called) return;
        //     called = true;
        //     reject(r);
        //   }
        // )
      } catch (e) {
        // called就是用于防止成功和失败被同时执行，因为这个是thenable，不是promise
        // 需要做限制如果newPromise已经成功或失败了，则不会再处理了
        if (called) return;
        called = true;
        reject(e);
      }
    } else {
      // 如果是对象或函数但不是thenable（即没有正确的then属性）
      // 当成普通值则直接resolve出去
      resolve(x);
    }
  } else {
    return resolve(x);
  }
}


export default MyPromise