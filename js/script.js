/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

const loginFormElement = document.querySelector("#login-form");
const inputEmailElement = document.querySelector("#input-email");
const inputPasswordElement = document.querySelector("#input-password");

// Email dan Password yang sudah diketahui
const expectedEmail = "unpam1@gmail.com";
const expectedPassword = "superpassword";

// CTA
loginFormElement.addEventListener("submit", function (Event) {
  Event.preventDefault();

  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    alert("Email atau password anda salah, silahkan coba lagi!");
  }
});

// Pindah ke halaman home
function goToHome() {
  location.href = "./home.html";
}
