// const person1 = { name: "Vitia",
// lastName: "Klubniczka"
// };

// const person2 = { name: "Vitia",
// lastName: "Klubniczka"
// };

//Class

// class Person {
//   constructor() {
//     this.name = "Vitia";
//     this.surname = "Klubniczka";
//   }
// }
// const person1 = new Person();
// console.log(person1);

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.surname = "Klubniczka";
//   }
// }

// 2) Реализовать класс, описывающий новость (заголовок, текст, массив тегов, дата публикации). В классе необходимо реализовать один метод print, который выводит всю информацию через document.write()
// Если с даты публикации прошло менее дня, то выводится «сегодня», если с даты публикации прошло менее недели, то выводится «N дней назад», в остальных случаях, полная дата в формате «дд.мм.гггг».

class NewsArticle {
  constructor(title, text, date) {
    this.title = title;
    this.text = text;
    this.date = date;
  }
  tags = [];

  addTag(name) {
    this.tags.push(name);
  }
  print() {
    document.write("<article>");
    document.write("<h1>${this.title}</h1>");
    document.write("<p>${this.title}</p>")
    document.write("<ul>")

    for (const tag of this tags){
      document.write(`<li>${tag}</li>`);
    }
    document.write("</ul>"); //this -eto article1
    document.write(`<time>${this.date}</time>`)
    document.write("</article>");
  }
}
const article1 = new NewsArticle(
  "Klubniczka won!",
  "Spanish guy won 20 mill euro",
  "29.05.2021"
);
article1.addTag("lottery");
article1.addTag("lucky man")

// 3) Реализовать класс, описывающий новостную ленту. Класс должен содержать:
// массив новостей;
// get-свойство, которое возвращает количество новостей;
// метод для вывода на экран всех новостей;
// метод для добавления новости;
// метод для удаления новости;
// метод для сортировки новостей по дате (от последних новостей до старых);
// метод для поиска новостей по тегу (возвращает массив новостей, в которых указан переданный в метод тег).
// Продемонстрировать работу написанных методов.


class NewsFeed{
  articles=[];

  addArticle(article){
    this.articles.push(article);
  }

removeArticle(){
  this.articles.pop();
}

  get count(){
    return this.articles.length;
  }

  print(){
    document.write("<main>");
    document.write(`<p>Number of news: ${this.count}</p>`)
    for(const article of this.articles){
      article.print();
    }
    document.write("</main>");
  }

  getArticlesByTag(tag){
return this.articles.filter((article) => article.tags.includes(tag));
  }
}


const article2=new NewsArticle(
  `Szok!`
  `Bitrut-akademia-sponsor`;
  `21.04.2020`
  );


  const article3=new NewsArticle(
    `Urzas! Prosto rzach!`
    `W Kolomyji zjawila sie truskawka Chersonu`;
    `02.03.2020`
    );

  article2.addTag("sensacija")

  article3.addTag("truskawka ");
  article3.addTag("from the greenhouse");
  article3.addTag("for free")

const feed= new NewsFeed();
feed.addArticle(article1);
feed.addArticle(article2);
feed.addArticle(article3);

feed.print();


const found= feed.getArticlesByTag("sensation");
console.log(found);