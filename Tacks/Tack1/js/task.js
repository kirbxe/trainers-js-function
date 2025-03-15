// Мой шаблон для задания:
// объявляем все задания по айдишнику
// адд и ремув класса актив, который влияет на выбор в таск-баре слева
//вставляем в хтмл inner html
// Див Таск фрейм
// Заголовок номера задания <h2>
// Условие задания <p>
// Дальше территория элемента pre, чтобы оставить поле для задания в таком же предотформатированном виде, чтобы не нужно было форматировать самостоятельно.
// между pre добавляем input в котором будет записан результат
//далее идут кнопки проверить и следующее
// дальше сам лейбл с результатом, который выводится после нажатия на кнопку.
// делаем функцию на валидность
// делаем функцию для просмотра правильного ответа

let IsChecked = false;
 
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
	<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px; text-align:center; align-items: center; "><div class = "task-text">function sum(a, b){
<span style = "color:green;">return a+b;</span>
}</div></pre>
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
			  <div class="task-text"><span style = "color: rgb(185, 159, 11);">function</span> SayHello() {console.log (&#34;Привет, мир!&#34;) }</div>
			</pre>
			<div class="result_button">
			  <div>
				<input class="go-btn" type="submit" value="Следующее" onclick="task3()"></input>
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
	<div class = "task-text"> function multiply(a, b, c) {
   <span style = "color:green;"> return a * b * c; </span>
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
//4 задание
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
	<h2 class= "title-task"style="font-size: 32px">Задание 4</h2>
	<p style="font-size: 20px">Напишите функцию, которая проверяет, является ли число четным.</p>
	<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px; text-align:center; align-items: center; ">
	<div class = "task-text">function isEven(number) {
<span style = "color:green;">return number % 2 === 0;</span>
}
	  </div>
	</pre>
	
	<div class="result_button">
	<div>
	<input class= "go-btn" type="submit" value="Следующее" onclick="task5()"></input>
	</div>
	<p id="result" class="result"></p>
	</div></div>
	`
	}



	//5 задание
	function task5(){
		
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
		task2.classList.remove("active");
		task3.classList.remove("active");
		task4.classList.remove("active");
		task5.classList.add("active");
		task6.classList.remove("active");
		task7.classList.remove("active");
		task8.classList.remove("active");
		task9.classList.remove("active");
		task10.classList.remove("active");
		let start = document.getElementById("frame-cont-block");
		start.innerHTML = `
		<div class="task-frame">
    <h2 class="title-task" style="font-size: 32px">Задание 5</h2>
    <p style="font-size: 20px">Соберите функцию getFirstWord(), которая возвращает первое слово в строке:</p>
    <pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px; align-items: center;">
      <div class="dropzone" id="dropzone" ondrop="drop(event)" ondragover="allowDrop(event)">
        <input class="result-input-drag" type="text" placeholder="Перетащите сюда код" style="padding:5px;" id="result-input-drag" readonly></input>
      </div>
    </pre>

    <div class="drag-elements"> 
      <div class="drag-item" draggable="true" ondragstart="drag(event)" id="code1">function getFirstWord</div>
	  <div class="drag-item" draggable="true" ondragstart="drag(event)" id="code2">str.split </div>
	  <div class="drag-item" draggable="true" ondragstart="drag(event)" id="code3">(' ')[0]; }</div>
	  <div class="drag-item" draggable="true" ondragstart="drag(event)" id="code4">(str) { return </div>
      
    </div>

    <div class="result_button">
      <div>
        <input class="check-btn" type="submit" value="Проверить" onclick="validDnd5()"></input>
        <input class="see-correct-answer-btn hide-me" type="submit" value="Узнать ответ" id="see-correct-answer-btn" onclick="SeeCorrectAnswer5()"></input>
		<input class="go-btn" type="submit" value="Очистить" onclick="clearDropzone()"></input>
        <input class="go-btn" type="submit" value="Следующее" onclick="task6()"></input>
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
			resultInput.innerText = "Поле пустое"
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
	  
	  function validDnd5() {

		let answer = document.getElementById("result-input-drag").value.trim();
		let result = document.getElementById("result");
		const task5 = document.getElementById("task5");
		  if (answer === "function getFirstWord (str) { return  str.split  (' ')[0]; }" ) {
			result.innerText = 'Правильно!';
			task5.classList.add("complete");
			IsChecked = true;
		  } else {
			result.innerText = 'Не правильно, подумай хорошо!';
		  }
		
	  }
	  
	  function SeeCorrectAnswer5() {
		let start = document.getElementById("frame-cont-block");
		start.innerHTML = `
		  <div class="task-frame">
			<h2 class= "title-task"style="font-size: 32px">Задание 5</h2>
			<p style="font-size: 20px">Соберите функцию getFirstWord(), которая возвращает первое слово в строке:</p>
			<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px; text-align:center;">
			  <div class="task-text"><span style = "color: rgb(185, 159, 11);">function</span> getFirstWord(str) {
   <span style = "color: rgb(209, 83, 10);"> return</span> str.split(' ')[0];
}</div>
			</pre>
			<div class="result_button">
			  <div>
				<input class="go-btn" type="submit" value="Следующее" onclick="task6()"></input>
			  </div>
			  <p id="result" class="result"></p>
			</div>
		  </div>`;
	  }

	//6 задание

	function task6(){
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
		task4.classList.remove("active");
		task5.classList.remove("active");
		task6.classList.add("active");
		task7.classList.remove("active");
		task8.classList.remove("active");
		task9.classList.remove("active");
		task10.classList.remove("active");
		let start = document.getElementById("frame-cont-block");
		start.innerHTML = `

		<div class="task-frame">
   <h2 class= "title-task"style="font-size: 32px">Задание 6</h2>
<p style="font-size: 20px">Допиши функцию getStringLength(str), которая вернет длину строки:</p>
<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px ">
function getStringLength(str) {
  <input style= "text-align: center;" class="result-input" type="text" placeholder="*напиши сюда код" style="padding:5px;" id="answer" ></input>
}
</pre>

	<div class="result_button">
	<div>
<input class="check-btn" type="submit" value="Проверить" onclick="valid6()"></input>	
<input class= "see-correct-answer-btn hide-me" type="submit" value="Узнать ответ" id= "see-correct-answer-btn" onclick="SeeCorrectAnswer6()"></input>
<input class= "go-btn" type="submit" value="Следующее" onclick="task7()"></input>
	</div>
<p id="result" class="result"></p>
	</div> 
</div>`

	}
	function valid6(){
	
		let answer = document.getElementById("answer")
		console.log(answer);
		let result = document.getElementById("result");
		const task6 = document.getElementById("task6")
		
		if(answer.value === "return str.length;"){
			result.innerText = 'Правильно!';
			task6.classList.add("complete");	
			
		}
		else{
			result.innerText = 'Не правильно, подумай хорошо!';
		}
		
	}
	function SeeCorrectAnswer6(){
		
	
		let start = document.getElementById("frame-cont-block")
		
		start.innerHTML = `
		<div class="task-frame">
		<h2 class= "title-task"style="font-size: 32px">Задание 6</h2>
		<p style="font-size: 20px">Допиши функцию getStringLength(str), которая вернет длину строки:</p>
		<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px; text-align:center; align-items: center;">
		<div class = "task-text">function getStringLength(str) {
    <span style = "color:green;">return str.length;</span>
}
		  </div>
		</pre>
		
		<div class="result_button">
		<div>
		<input class= "go-btn" type="submit" value="Следующее" onclick="task7()"></input>
		</div>
		<p id="result" class="result"></p>
		</div></div>
		`
		}




		// 7 задания
		function task7(){
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
			task4.classList.remove("active");
			task5.classList.remove("active");
			task6.classList.remove("active");
			task7.classList.add("active");
			task8.classList.remove("active");
			task9.classList.remove("active");
			task10.classList.remove("active");
			let start = document.getElementById("frame-cont-block");
			start.innerHTML = `
	
			<div class="task-frame">
	   <h2 class= "title-task"style="font-size: 32px">Задание 7</h2>
	<p style="font-size: 20px">Допиши код функции square(a), которая будет возвращать квадрат числа:</p>
	<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px ">function square(a){
<input style= "text-align: center;" class="result-input" type="text" placeholder="*напиши сюда код" style="padding:5px;" id="answer" ></input>
		}
	</pre>
	
		<div class="result_button">
		<div>
	<input class="check-btn" type="submit" value="Проверить" onclick="valid7()"></input>	
	<input class= "see-correct-answer-btn hide-me" type="submit" value="Узнать ответ" id= "see-correct-answer-btn" onclick="SeeCorrectAnswer7()"></input>
	<input class= "go-btn" type="submit" value="Следующее" onclick="task8()"></input>
		</div>
	<p id="result" class="result"></p>
		</div> 
	</div>`
		}

		function valid7(){
		
			let answer = document.getElementById("answer")
			console.log(answer);
			let result = document.getElementById("result");
			const task7 = document.getElementById("task7")
			
			if(answer.value === "return a*a;" || answer.value === "return a * a;"){
				result.innerText = 'Правильно!';
				task7.classList.add("complete");	
				
			}
			else{
				result.innerText = 'Не правильно, подумай хорошо!';
			}
			
		}
		function SeeCorrectAnswer7(){
			
		
			let start = document.getElementById("frame-cont-block")
			
			start.innerHTML = `
			<div class="task-frame">
			<h2 class= "title-task"style="font-size: 32px">Задание 7</h2>
			<p style="font-size: 20px">Допиши код функции square(a), которая будет возвращать квадрат числа:</p>
			<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px; text-align:center; align-items: center;">
			<div class = "task-text">function square(a){
<span style = "color:green;">return a * a;</span>
	}
			  </div>
			</pre>
			
			<div class="result_button">
			<div>
			<input class= "go-btn" type="submit" value="Следующее" onclick="task8()"></input>
			</div>
			<p id="result" class="result"></p>
			</div></div>
			`
			}



		// 8 задание 
		function task8(){
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
			task4.classList.remove("active");
			task5.classList.remove("active");
			task6.classList.remove("active");
			task7.classList.remove("active");
			task8.classList.add("active");
			task9.classList.remove("active");
			task10.classList.remove("active");
			let start = document.getElementById("frame-cont-block");
			start.innerHTML = `
	
			<div class="task-frame">
	   <h2 class= "title-task"style="font-size: 32px">Задание 8</h2>
	<p style="font-size: 20px">Допиши код функции isPositive(a), которая будет возвращать положительное ли число или нет:</p>
	<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px ">function isPositive(a){
<input style= "text-align: center;" class="result-input" type="text" placeholder="*напиши сюда код" style="padding:5px;" id="answer"></input>
		}

console.log(isPositive(-4)) <span style = "color: grey;">//false</span>
	</pre>
	
		<div class="result_button">
		<div>
	<input class="check-btn" type="submit" value="Проверить" onclick="valid8()"></input>	
	<input class= "see-correct-answer-btn hide-me" type="submit" value="Узнать ответ" id= "see-correct-answer-btn" onclick="SeeCorrectAnswer8()"></input>
	<input class= "go-btn" type="submit" value="Следующее" onclick="task9()"></input>
		</div>
	<p id="result" class="result"></p>
		</div> 
	</div>`
		}

		function valid8(){
		
			let answer = document.getElementById("answer")
			console.log(answer);
			let result = document.getElementById("result");
			const task8 = document.getElementById("task8")
			
			if(answer.value === "return a > 0;" || answer.value === "return a>0;"){
				result.innerText = 'Правильно!';
				task8.classList.add("complete");	
				
			}
			else{
				result.innerText = 'Не правильно, подумай хорошо!';
			}
			
		}
		function SeeCorrectAnswer8(){
			
		
			let start = document.getElementById("frame-cont-block")
			
			start.innerHTML = `
			<div class="task-frame">
			<h2 class= "title-task"style="font-size: 32px">Задание 8</h2>
			<p style="font-size: 20px">Допиши код функции isPositive(a), которая будет возвращать положительное ли число или нет:</p>
			<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px; text-align:center; align-items: center;">
			<div class = "task-text">function isPositive(a){
<span style = "color:green;">return a > 0;</span>
	}

console.log(isPositive(-4)) <span style = "color: grey;">//false</span>
			  </div>
			</pre>
			
			<div class="result_button">
			<div>
			<input class= "go-btn" type="submit" value="Следующее" onclick="task9()"></input>
			</div>
			<p id="result" class="result"></p>
			</div></div>
			`
			}



			//9 задание 
		function task9(){
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
			task4.classList.remove("active");
			task5.classList.remove("active");
			task6.classList.remove("active");
			task7.classList.remove("active");
			task8.classList.remove("active");
			task9.classList.add("active");
			task10.classList.remove("active");
			let start = document.getElementById("frame-cont-block");
			start.innerHTML = `
	
			<div class="task-frame">
	   <h2 class= "title-task"style="font-size: 32px">Задание 9</h2>
	<p style="font-size: 20px">Напишите недостающую часть функции findCommonElements,<br> которая возвращает массив чисел, которые встречаются в обоих массивах:</p>
	<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px ">const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

	function findCommonElements(arr1, arr2) {
<input style= "text-align: center; width: 500px" class="result-input" type="text" placeholder="*напиши сюда код" style="padding:5px;" id="answer" ></input>
		}

console.log(commonElements); <span style = "color: grey; ">// [4, 5]</span>
	</pre>
	
		<div class="result_button">
		<div>
	<input class="check-btn" type="submit" value="Проверить" onclick="valid9()"></input>	
	<input class= "see-correct-answer-btn hide-me" type="submit" value="Узнать ответ" id= "see-correct-answer-btn" onclick="SeeCorrectAnswer9()"></input>
	<input class= "go-btn" type="submit" value="Следующее" onclick="task10()"></input>
		</div>
	<p id="result" class="result"></p>
		</div> 
	</div>`
		}

		function valid9(){
		
			let answer = document.getElementById("answer")
			console.log(answer);
			let result = document.getElementById("result");
			const task9 = document.getElementById("task9")
			
			if(answer.value === "return arr1.filter(num => arr2.includes(num));" || answer.value === "arr1.filter(num=>arr2.includes(num));"){
				result.innerText = 'Правильно!';
				task9.classList.add("complete");	
				
			}
			else{
				result.innerText = 'Не правильно, подумай хорошо!';
			}
			
		}
		function SeeCorrectAnswer9(){
			
		
			let start = document.getElementById("frame-cont-block")
			
			start.innerHTML = `
			<div class="task-frame">
			<h2 class= "title-task"style="font-size: 32px">Задание 8</h2>
			<p style="font-size: 20px">Допиши код функции isPositive(a),<br> которая будет возвращать положительное ли число или нет:</p>
			<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px; text-align:center; align-items: center;">
			<div class = "task-text">const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

	function findCommonElements(arr1, arr2) {
        <span style = "color: green;">return arr1.filter(num => arr2.includes(num));</span>
		}

console.log(findCommonElements); <span style = "color: grey; ">// [4, 5]</span>
			  </div>
			</pre>
			
			<div class="result_button">
			<div>
			<input class= "go-btn" type="submit" value="Следующее" onclick="task9()"></input>
			</div>
			<p id="result" class="result"></p>
			</div></div>
			`
			}

			//10 задание 
			function task10(){
		
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
				task4.classList.remove("active");
				task5.classList.remove("active");
				task6.classList.remove("active");
				task7.classList.remove("active");
				task8.classList.remove("active");
				task9.classList.remove("active");
				task10.classList.add("active");
				let start = document.getElementById("frame-cont-block");
				start.innerHTML = `
				<div class="task-frame">
			<h2 class="title-task" style="font-size: 32px">Задание 10</h2>
			<p style="font-size: 20px">Соберите функцию isPalindrome(str), которая проверяет, является ли строка палиндромом:</p>
			<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px; align-items: center;">
			  <div class="dropzone" id="dropzone" ondrop="drop(event)" ondragover="allowDrop(event)">
				<input class="result-input-drag" type="text" placeholder="Перетащите сюда код" style="padding:5px;" id="result-input-drag" readonly></input>
			  </div>
			</pre>
		
			<div class="drag-elements"> 
			  <div class="drag-item" draggable="true" ondragstart="drag(event)" id="code1">.reverse()</div>
			  <div class="drag-item" draggable="true" ondragstart="drag(event)" id="code2">function isPalindrome(str){</div>
			  <div class="drag-item" draggable="true" ondragstart="drag(event)" id="code3">return str === str</div>
			  <div class="drag-item" draggable="true" ondragstart="drag(event)" id="code4">.split('')</div>
			  <div class="drag-item" draggable="true" ondragstart="drag(event)" id="code5">.join(''); }</div>
			  
			</div>
		
			<div class="result_button">
			  <div>
				<input class="check-btn" type="submit" value="Проверить" onclick="validDnd10()"></input>
				<input class="see-correct-answer-btn hide-me" type="submit" value="Узнать ответ" id="see-correct-answer-btn" onclick="SeeCorrectAnswer10()"></input>
				<input class="go-btn" type="submit" value="Очистить" onclick="clearDropzone()"></input>
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
					resultInput.innerText = "Поле пустое"
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
			  
			  function validDnd10() {
		
				let answer = document.getElementById("result-input-drag").value.trim();
				let result = document.getElementById("result");
				const task10 = document.getElementById("task10");
				  if (answer === "function isPalindrome(str) {  return str === str .split('') .reverse() .join(''); }" ) {
					result.innerText = 'Правильно!';
					task10.classList.add("complete");
					IsChecked = true;
				  } else {
					result.innerText = 'Не правильно, подумай хорошо!';
				  }
				
			  }
			  
			  function SeeCorrectAnswer10() {
				let start = document.getElementById("frame-cont-block");
				start.innerHTML = `
				  <div class="task-frame">
					<h2 class= "title-task"style="font-size: 32px">Задание 10</h2>
					<p style="font-size: 20px">Соберите функцию isPalindrome(str), которая проверяет, является ли строка палиндромом:</p>
					<pre style="font-size: 20px; border: 1px solid; border-radius: 20px; padding:16px; text-align:center;"><div class="task-text"><span style = "color: rgb(185, 159, 11);">function</span> isPalindrome(str) {
<span style = "color: rgb(209, 83, 10);">return</span> str === str.split('').reverse().join('');
}</div></pre>
					<div class="result_button">
					  <p id="result" class="result"></p>
					</div>
				  </div>`;
			  }
