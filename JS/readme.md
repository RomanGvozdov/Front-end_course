# Типы данных переменных #
***
JavaScript является нетипизированным языком, тип данных для конкретной переменной при ее объявлении указывать не нужно. Тип данных переменной зависит от значений, которые она принимает. Тип переменной может изменяться в процессе совершения операций с данными (динамическое приведение типов). Преобразование типов выполняется автоматически в зависимости от того, в каком контексте они используются. Например, в выражениях, включающих числовые и строковые значения с оператором +, JavaScript преобразует числовые значения в строковые:

		var message = 10 + " дней до отпуска";
		// вернет "10 дней до отпуска"	
Получить тип данных, который имеет переменная, можно с помощью оператора typeof. Этот оператор возвращает строку, которая идентифицирует соответствующий тип.

		typeof 35; // вернет "number"
		typeof "text"; // вернет "string"
		typeof true; // вернет "boolean"
		typeof [1, 2, 4]; // вернет "object"
		typeof undefined; // вернет "undefined"
		typeof null; // вернет "object" 
			
Все типы данных в JavaScript делятся на две группы — простые типы данных (primitive data types) и составные типы данных (composite data types).

К простым типам данных относят строковый, числовой, логический, null и underfined.

## 2.2.1. Строковый тип (string) ##

Используется для хранения строки символов, заключенных в двойные или одинарные кавычки. Пустой набор символов, заключенный в одинарные или двойные кавычки, является пустой строкой. Число, заключенное в кавычки, также является строкой.

		var money = ""; // пустая строка, ноль символов
		var work = 'test';
		var day = "Sunday";
		var x = "150";
				
В строку в двойных кавычках можно включить одиночную кавычку и наоборот. Кавычка того же типа отключается с помощью символа обратного слэша \ (так называемая escape-последовательность):

		document.writeln("\"Доброе утро, Иван Иваныч!\"\n");
		// выведет на экран "Доброе утро, Иван Иваныч!" 
				
Строки можно сравнивать, а также объединять с помощью операции конкатенации +. Благодаря автоматическому приведению типов можно объединять числа и строки. Строки являются постоянными, после того, как строка создана, она не может быть изменена, но может быть создана новая строка путем объединения других строк.

## 2.2.2. Числовой тип (number) ##

Используется для числовых значений. Числа в языке JavaScript бывают двух типов: целые числа (integer) и числа с плавающей точкой (floating-point number). Целочисленные величины могут быть положительными, например 1, 2, и отрицательными, например –1, –2, или равными нулю. 1 и 1.0 — одно и то же значение. Большинство чисел в JavaScript записываются в десятичной системе счисления, также может использоваться восьмеричная и шестнадцатеричная системы.

В десятичной системе значения числовых переменных задаются с использованием арабских цифр 1, 2, 3, 4, 5, 6, 7, 8, 9, 0.

В восьмеричном формате числа представляет собой последовательность, содержащая цифры от 0 до 7 и начинающаяся с префикса 0.

Для шестнадцатеричного формата добавляется префикс 0x (0X), за которым следует последовательность из цифр от 0 до 9 или букв от a (A) до f (F), соответствующие значениям от 10 до 15.

		var a = 120; // целое десятичное числовое значение
		var b = 012; // восьмеричный формат
		var c = 0xfff; // шестнадцатеричный формат
		var d = 0xACFE12; // шестнадцатеричный формат
				
Числа с плавающей точкой представляют собой числа с дробной десятичной частью, либо это числа, выраженные в экспоненциальном виде. Экспоненциальная запись чисел предполагает следующий вид: число с дробной десятичной частью, за ним следует буква e, которая может быть указана как в верхнем, так и в нижнем регистре, далее — необязательный знак + или - и целая экспонента.

		var a = 6.24; // вещественное число
		var b = 1.234E+2; // вещественное число, эквивалентно 1.234 Х 10²
		var c = 6.1e-2; // вещественное число, эквивалентно 6.1 Х 10‾² 
## 2.2.3. Логический тип (boolean) ##

Данный тип имеет два значения, true (истина), false (ложь). Используется для сравнения и проверки условий.

		var answer = confirm("Вам понравилась эта статья?\n Нажмите ОК. Если нет, то нажмите Cancel.");
		if (answer == true)
		{
		alert("Спасибо!");
		}
---

Также существуют специальные типы простых значений:
нулевой тип — данный тип имеет одно значение null, которое используется для представления несуществующих объектов.

неопределенный тип — тип переменной underfined означает отсутствие первоначального значения переменной, а также несуществующее свойство объекта.

Составные типы данных состоят из более чем одного значения. К ним относятся объекты и особые типы объектов — массивы и функции. Объекты содержат свойства и методы, массивы представляют собой индексированный набор элементов, а функции состоят из коллекции инструкций.