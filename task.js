// Мой шаблон для задания:
// Див Таск фрейм
// Заголовок номера задания <h2>
// Условие задания <p>
// Дальше территория элемента pre, чтобы оставить поле для задания в таком же предотформатированном виде, чтобы не нужно было форматировать самостоятельно.
// между pre добавляем input в котором будет записан результат
//далее идут кнопки проверить и следующее
// дальше сам лейбл с результатом, который выводится после нажатия на кнопку.

let IsChecked = false;

 // ресетает флаг
	function task1(){
		
		const task1 = document.getElementById("task1");
		const task2 = document.getElementById("task2");
		const task3 = document.getElementById("task3");
		const task4 = document.getElementById("task4");
		const task5 = document.getElementById("task5");
		const task6 = document.getElementById("task6");
		const task7 = document.getElementById("task7");
		const task8 = document.getElementById("task8");
		const task9 = document.getElementById("task9");
		const task10 = document.getElementById("task10");

		task1.classList.add("active");
		task2.classList.remove("active");
		task3.classList.remove("active");
		task4.classList.remove("active");
		task5.classList.remove("active");
		task6.classList.remove("active");
		task7.classList.remove("active");
		task8.classList.remove("active");
		task9.classList.remove("active");
		task10.classList.remove("active");
		let start = document.getElementById("frame-cont-block");
		start.innerHTML = `

		<div class="task-frame">
   <h2 class= "title-task"style="font-size: 32px">Задание 1</h2>
<p style="font-size: 20px">Допишите код, для сложения этих двух переменных.</p>
<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px ">
function sum(a, b) {
  <input class="result-input" type="text" placeholder="*напиши сюда код" style="padding:5px;" id="answer" ></input>
}
</pre>

	<div class="result_button">
	<div>
<input class="check-btn" type="submit" value="Проверить" onclick="valid1()"></input>	
<input class= "see-correct-answer-btn hide-me" type="submit" value="Узнать ответ" id= "see-correct-answer-btn" onclick="SeeCorrectAnswer1()"></input>
<input class= "go-btn" type="submit" value="Следующее" onclick="task2()"></input>
	</div>
<p id="result" class="result"></p>
	</div> 
</div>`
	}


function valid1(){
	
	let answer = document.getElementById("answer");
	console.log(answer);
	let result = document.getElementById("result");
	const task1 = document.getElementById("task1")
	
	if(answer.value === "return a+b;" || answer.value === "return a + b;"){
		result.innerText = 'Правильно!';
		task1.classList.add("complete");	
		
	}
	else{
		result.innerText = 'Не правильно, подумай хорошо!';
	}
	


}

function SeeCorrectAnswer1(){
	

	let start = document.getElementById("frame-cont-block")
	
	start.innerHTML = `
	<div class="task-frame">
	<h2 class= "title-task"style="font-size: 32px">Задание 1</h2>
	<p style="font-size: 20px">Введите число получившиеся в результате выполнения данного кода</p>
	<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px; text-align:center; align-items: center; ">
	<div class = "task-text">function sum(a, b){
	return a+b;
}
	  </div>
	</pre>
	
	<div class="result_button">
	<div>
	<input class= "go-btn" type="submit" value="Следующее" onclick="task2()"></input>
	</div>
	<p id="result" class="result"></p>
	</div></div>
	`
	}

	function ResetIsChecked(){

		IsChecked = false;
		
		}


function task2(){
		
		const task1 = document.getElementById("task1");
		const task2 = document.getElementById("task2");
		const task3 = document.getElementById("task3");
		const task4 = document.getElementById("task4");
		const task5 = document.getElementById("task5");
		const task6 = document.getElementById("task6");
		const task7 = document.getElementById("task7");
		const task8 = document.getElementById("task8");
		const task9 = document.getElementById("task9");
		const task10 = document.getElementById("task10");

		//добавление классов чтоб было показано какое задание активировано
		task1.classList.remove("active");
		task2.classList.add("active");
		task3.classList.remove("active");
		task4.classList.remove("active");
		task5.classList.remove("active");
		task6.classList.remove("active");
		task7.classList.remove("active");
		task8.classList.remove("active");
		task9.classList.remove("active");
		task10.classList.remove("active");
		let start = document.getElementById("frame-cont-block");
		start.innerHTML = `
		<div class="task-frame">
    <h2 class="title-task" style="font-size: 32px">Задание 2</h2>
    <p style="font-size: 20px">Сложите правильно функцию SayHello(), которая выводит в консоль Привет, мир!</p>
    <pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px; align-items: center;">
      <div class="dropzone" id="dropzone" ondrop="drop(event)" ondragover="allowDrop(event)">
        <input class="result-input-drag" type="text" placeholder="Перетащите сюда код" style="padding:5px;" id="result-input-drag" readonly></input>
      </div>
    </pre>

    <div class="drag-elements"> 
	<div class="drag-item" draggable="true" ondragstart="drag(event)" id="code3">{console.log</div>
      <div class="drag-item" draggable="true" ondragstart="drag(event)" id="code1">function</div>
	  <div class="drag-item" draggable="true" ondragstart="drag(event)" id="code5">}</div>
	  <div class="drag-item" draggable="true" ondragstart="drag(event)" id="code2">SayHello()</div>
	  <div class="drag-item" draggable="true" ondragstart="drag(event)" id="code4">(&#34;Привет, мир!&#34;)</div>
      
    </div>

    <div class="result_button">
      <div>
        <input class="check-btn" type="submit" value="Проверить" onclick="validDnd2()"></input>
        <input class="see-correct-answer-btn hide-me" type="submit" value="Узнать ответ" id="see-correct-answer-btn" onclick="SeeCorrectAnswer2()"></input>
		<input class="go-btn" type="submit" value="Очистить" onclick="clearDropzone()"></input>
        <input class="go-btn" type="submit" value="Следующее" onclick="task3()"></input>
      </div>
      <p id="result" class="result"></p>
    </div>
  </div>`


	}

	//функция для очистки дропзоны
function clearDropzone(){
	let resultInput = document.getElementById("result");
	let dragInput = document.getElementById("result-input-drag");
		if (dragInput.value.trim() != ""){
			dragInput.value = "";
			resultInput.innerText = "Поле очищено"
		}
		else{
			resultInput.innerText = "Поле уже пустое"
		}
	}

	function allowDrop(event) {
		event.preventDefault();
	  }
	  
	  function drag(event) {
		event.dataTransfer.setData("text", event.target.id);
	  }
	  
	  function drop(event) {
		event.preventDefault();
		var data = event.dataTransfer.getData("text");
		var element = document.getElementById(data).textContent;
		var answer = document.getElementById("result-input-drag");
		answer.value += element + " ";
	  }
	  
	  function validDnd2() {

		let answer = document.getElementById("result-input-drag").value.trim();
		let result = document.getElementById("result");
		const task2 = document.getElementById("task2");
		  if (answer === "function SayHello() {console.log (\"Привет, мир!\") }" ) {
			result.innerText = 'Правильно!';
			task2.classList.add("complete");
			IsChecked = true;
		  } else {
			result.innerText = 'Не правильно, подумай хорошо!';
		  }
		
	  }
	  
	  function SeeCorrectAnswer2() {
		let start = document.getElementById("frame-cont-block");
		start.innerHTML = `
		  <div class="task-frame">
			<h2 class= "title-task"style="font-size: 32px">Задание 2</h2>
			<p style="font-size: 20px">Сложите правильно функцию SayHello()</p>
			<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px; text-align:center;">
			  <div class="task-text">function SayHello() {console.log (&#34;Привет, мир!&#34;) }</div>
			</pre>
			<div class="result_button">
			  <div>
				<input class="go-btn" type="submit" value="Следующее" onclick="task2()"></input>
			  </div>
			  <p id="result" class="result"></p>
			</div>
		  </div>`;
	  }










	  function task3(){
		
		const task1 = document.getElementById("task1");
		const task2 = document.getElementById("task2");
		const task3 = document.getElementById("task3");
		const task4 = document.getElementById("task4");
		const task5 = document.getElementById("task5");
		const task6 = document.getElementById("task6");
		const task7 = document.getElementById("task7");
		const task8 = document.getElementById("task8");
		const task9 = document.getElementById("task9");
		const task10 = document.getElementById("task10");

		task1.classList.remove("active");
		task2.classList.remove("active");
		task3.classList.add("active");
		task4.classList.remove("active");
		task5.classList.remove("active");
		task6.classList.remove("active");
		task7.classList.remove("active");
		task8.classList.remove("active");
		task9.classList.remove("active");
		task10.classList.remove("active");
		let start = document.getElementById("frame-cont-block");
		start.innerHTML = `

		<div class="task-frame">
   <h2 class= "title-task"style="font-size: 32px">Задание 3</h2>
<p style="font-size: 20px">Допишите функцию, которая возвращает перемноженные переменные a, b, c</p>
<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px ">
<input style= "text-align: center;" class="result-input" type="text" placeholder="*напиши сюда код" style="padding:5px;" id="answer1" ></input> name(a, b, c) {
  <input style= "text-align: center;" class="result-input" type="text" placeholder="*напиши сюда код" style="padding:5px;" id="answer2" ></input>
}
</pre>

	<div class="result_button">
	<div>
<input class="check-btn" type="submit" value="Проверить" onclick="valid3()"></input>	
<input class= "see-correct-answer-btn hide-me" type="submit" value="Узнать ответ" id= "see-correct-answer-btn" onclick="SeeCorrectAnswer3()"></input>
<input class= "go-btn" type="submit" value="Следующее" onclick="task4()"></input>
	</div>
<p id="result" class="result"></p>
	</div> 
</div>`
	}


function valid3(){
	
	let answer1 = document.getElementById("answer1");
	let answer2 = document.getElementById("answer2")
	console.log(answer1);
	console.log(answer2);
	let result = document.getElementById("result");
	const task3 = document.getElementById("task3")
	
	if(answer1.value === "function" && answer2.value === "return a*b*c;" || answer2.value === "return a * b * c;" ){
		result.innerText = 'Правильно!';
		task3.classList.add("complete");	
		
	}
	else{
		result.innerText = 'Не правильно, подумай хорошо!';
	}
	


}

function SeeCorrectAnswer3(){
	

	let start = document.getElementById("frame-cont-block")
	
	start.innerHTML = `
	<div class="task-frame">
	<h2 class= "title-task"style="font-size: 32px">Задание 3</h2>
	<p style="font-size: 20px">Допишите функцию, которая возвращает перемноженные переменные a, b, c</p>
	<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px; text-align:center; align-items: center; ">
	<div class = "task-text"> <span style = "color: rgb(185, 159, 11);">function</span> multiply(a, b, c) {
   <span style = "color: rgb(245, 94, 7);"> return</span> a * b * c; 
}
	  </div>
	</pre>
	
	<div class="result_button">
	<div>
	<input class= "go-btn" type="submit" value="Следующее" onclick="task4()"></input>
	</div>
	<p id="result" class="result"></p>
	</div></div>
	`
	}









	function task4(){
		
		const task1 = document.getElementById("task1");
		const task2 = document.getElementById("task2");
		const task3 = document.getElementById("task3");
		const task4 = document.getElementById("task4");
		const task5 = document.getElementById("task5");
		const task6 = document.getElementById("task6");
		const task7 = document.getElementById("task7");
		const task8 = document.getElementById("task8");
		const task9 = document.getElementById("task9");
		const task10 = document.getElementById("task10");

		task1.classList.remove("active");
		task2.classList.remove("active");
		task3.classList.remove("active");
		task4.classList.add("active");
		task5.classList.remove("active");
		task6.classList.remove("active");
		task7.classList.remove("active");
		task8.classList.remove("active");
		task9.classList.remove("active");
		task10.classList.remove("active");
		let start = document.getElementById("frame-cont-block");
		start.innerHTML = `

		<div class="task-frame">
   <h2 class= "title-task"style="font-size: 32px">Задание 4</h2>
<p style="font-size: 20px">Напишите функцию, которая проверяет, является ли число четным.</p>
<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px ">
 function isEven(number) {
  <input style= "text-align: center;" class="result-input" type="text" placeholder="*напиши сюда код" style="padding:5px;" id="answer4" ></input>
}
</pre>

	<div class="result_button">
	<div>
<input class="check-btn" type="submit" value="Проверить" onclick="valid4()"></input>	
<input class= "see-correct-answer-btn hide-me" type="submit" value="Узнать ответ" id= "see-correct-answer-btn" onclick="SeeCorrectAnswer4()"></input>
<input class= "go-btn" type="submit" value="Следующее" onclick="task5()"></input>
	</div>
<p id="result" class="result"></p>
	</div> 
</div>`
	}


function valid4(){
	
	let answer4 = document.getElementById("answer4")
	console.log(answer4);
	let result = document.getElementById("result");
	const task4 = document.getElementById("task4")
	
	if(answer4.value === "return number % 2 === 0;" || answer4.value === "return number%2===0;"){
		result.innerText = 'Правильно!';
		task4.classList.add("complete");	
		
	}
	else{
		result.innerText = 'Не правильно, подумай хорошо!';
	}
	


}

function SeeCorrectAnswer4(){
	

	let start = document.getElementById("frame-cont-block")
	
	start.innerHTML = `
	<div class="task-frame">
	<h2 class= "title-task"style="font-size: 32px">Задание 3</h2>
	<p style="font-size: 20px">Допишите функцию, которая возвращает перемноженные переменные a, b, c</p>
	<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px; text-align:center; align-items: center; ">
	<div class = "task-text"> <span style = "color: rgb(185, 159, 11);">function</span> isEven(number) {
   <span style = "color: rgb(245, 94, 7);"> return</span> number % 2 === 0; 
}
	  </div>
	</pre>
	
	<div class="result_button">
	<div>
	<input class= "go-btn" type="submit" value="Следующее" onclick="task4()"></input>
	</div>
	<p id="result" class="result"></p>
	</div></div>
	`
	}




