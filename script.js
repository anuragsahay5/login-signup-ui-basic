let log_btn = document.getElementById("log_btn");
let sign_btn = document.getElementById("sign_btn");
let log_frame = document.getElementById("log_frame");
let sign_frame = document.getElementById("sign_frame");
log_btn.addEventListener("click", () => {
  sign_btn.className = "";
  log_btn.className = "clicked_log";
  sign_frame.className = "csl";
  log_frame.className = "csld";
});
sign_btn.addEventListener("click", () => {
  sign_btn.className = "clicked_sign";
  log_btn.className = "";
  log_frame.className = "csl";
  sign_frame.className = "csld";
});