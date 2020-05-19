// Тоглогчийн ээлжийг хадгалах хувьсагч 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 0;

// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө
var diceNumber = Math.floor(Math.random() * 6) + 1;

// Програм эхлэхэд бэлтгэе
window.document.getElementById("score-0").textContent = 0;
window.document.getElementById("score-1").textContent = 0;

window.document.getElementById("current-0").textContent = 0;
window.document.getElementById("current-1").textContent = 0;

// Style.css д класс учираас query.Selector ийг дуудаж ашиглана, дахин2 query.Selector ийг дуудаж ашиглах нь санах   ойд ачаалал өгөх тул diceDom хувьсагч үүсгэж утгыг хадгалдаг болгох шаардлага үүссэн
var diceDom = window.document.querySelector(".dice");
diceDom.style.display = "none";

// Шоог шидэх event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 доторх санамсаргүй нэг тоо гаргаж авна
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Шоог дэлгэцэнд гаргаж харуулна
  diceDom.style.display = "block";

  // Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ
  diceDom.src = "dice-" + diceNumber + ".png";

  // Буусан тоо нь 1 ээс ялгаатай бол идэвхитэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ
  if (diceNumber !== 1) {
    // 1-с ялгаатай тоо буулаа  Буусан тоог тоглогчид нэмж өгнө
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // Тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // 1 буусан бол тоглогчийн ээлжийг энэ хэсэгт сольж өгнө
    // Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхитэй тоглогчийг 1 болго
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Улаан цэгийг шилжүүлэх
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Шоог алга болгох
    diceDom.style.display = "none";
  }
});
