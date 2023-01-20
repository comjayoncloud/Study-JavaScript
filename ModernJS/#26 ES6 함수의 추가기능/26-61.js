/** Rest 파라미터에는 기본값을 지정할 수 없다. */

function foo(...rest = []){ // error
    console.log(rest)
}