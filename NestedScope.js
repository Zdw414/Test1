	// Zach Dickinson
	// this code does nothing besides show a nested scope
function foo() {
  var fee = 0;
  //bar will call upon fee even though its local to foo
  function bar() {
    fee += 1;
  }
  bar();
}
